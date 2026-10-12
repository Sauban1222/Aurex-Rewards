import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'

const STORAGE_KEY = 'aurex-rewards-tab-state-v2'
const LEGACY_STORAGE_KEYS = ['aurex-rewards-tab-state-v1', 'aurex-rewards-state-v1']
export const MIN_WITHDRAWAL_VE = 1000
// Preview reward values; enforce approved reward rules on the server when connected.
export const DAILY_CHECK_IN_REWARD = 20
export const CAPTCHA_TASK_REWARD = 40
export const DAILY_SPIN_REWARDS = [10, 20, 30, 40, 50]

export function getRewardDayKey(date = new Date()) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

const INITIAL_STATE = {
  account: null,
  profile: null,
  credentialHash: '',
  credentialSalt: '',
  ve: 0,
  sve: 0,
  activity: [],
  captchaCompletedOn: '',
  captchaSecondCompletedOn: '',
  dailyCheckInOn: '',
  dailySpinOn: '',
  dailySpinReward: 0,
  dailySpinPending: null,
  invitesShared: 0,
  referralActivity: [],
  welcomeBonusGranted: false,
}

const RewardsContext = createContext(null)

function createReferralCode(username = '') {
  const prefix = username.replace(/[^a-z0-9]/gi, '').slice(0, 8).toUpperCase() || 'AUREX'
  const suffix = Array.from(window.crypto.getRandomValues(new Uint8Array(3)), (byte) => byte.toString(16).padStart(2, '0')).join('').toUpperCase()
  return `${prefix}${suffix}`
}

function loadState() {
  for (const key of LEGACY_STORAGE_KEYS) {
    try {
      window.localStorage.removeItem(key)
      window.sessionStorage.removeItem(key)
    } catch (error) {
      console.error('Could not clear older Aurex demo account data from this browser.', error)
    }
  }

  try {
    const stored = window.sessionStorage.getItem(STORAGE_KEY)
    if (!stored) return INITIAL_STATE
    const parsed = JSON.parse(stored)
    const profile = parsed.profile && typeof parsed.profile === 'object'
      ? { ...parsed.profile, referralCode: parsed.profile.referralCode || createReferralCode(parsed.profile.username) }
      : null
    const account = parsed.account && typeof parsed.account === 'object'
      ? { ...parsed.account, referralCode: parsed.account.referralCode || profile?.referralCode || createReferralCode(parsed.account.username) }
      : null
    const legacyWelcomeBonus = Boolean(profile && parsed.welcomeBonusGranted !== true)
    const activity = Array.isArray(parsed.activity) ? parsed.activity.slice(0, 30) : []
    const referralActivity = Array.isArray(parsed.referralActivity)
      ? parsed.referralActivity.filter((item) => (
        item
        && typeof item.id === 'string'
        && typeof item.action === 'string'
        && typeof item.createdAt === 'string'
      )).slice(0, 10)
      : []
    return {
      ...INITIAL_STATE,
      ...parsed,
      account,
      profile,
      ve: (Number.isFinite(parsed.ve) && parsed.ve >= 0 ? parsed.ve : 0) + (legacyWelcomeBonus ? 200 : 0),
      sve: Number.isFinite(parsed.sve) && parsed.sve >= 0 ? parsed.sve : 0,
      invitesShared: Number.isInteger(parsed.invitesShared) && parsed.invitesShared >= 0 ? parsed.invitesShared : 0,
      referralActivity,
      activity: legacyWelcomeBonus ? addActivity({ activity }, { type: 'earn', title: 'Welcome bonus', amount: 200, asset: 'VE', createdAt: new Date().toISOString() }) : activity,
      welcomeBonusGranted: Boolean(parsed.welcomeBonusGranted || legacyWelcomeBonus),
    }
  } catch (error) {
    console.error('Could not read the Aurex preview saved in this browser tab.', error)
    return INITIAL_STATE
  }
}

function addActivity(state, entry) {
  return [{ ...entry, id: `${Date.now()}-${Math.random()}` }, ...state.activity].slice(0, 30)
}

async function hashPassword(password, salt) {
  if (!window.crypto?.subtle) throw new Error('Secure browser authentication is not available.')
  const key = await window.crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveBits'])
  const bits = await window.crypto.subtle.deriveBits({ name: 'PBKDF2', salt: new Uint8Array(salt.match(/.{1,2}/g).map((byte) => Number.parseInt(byte, 16))), iterations: 120000, hash: 'SHA-256' }, key, 256)
  return Array.from(new Uint8Array(bits), (byte) => byte.toString(16).padStart(2, '0')).join('')
}

export function RewardsProvider({ children }) {
  const [state, setState] = useState(loadState)
  const stateRef = useRef(state)

  const updateState = useCallback((updater) => {
    const current = stateRef.current
    const next = updater(current)
    if (next !== current) {
      stateRef.current = next
      setState(next)
    }
    return next
  }, [])

  useEffect(() => {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch (error) {
      console.error('Could not save the Aurex preview in this browser tab.', error)
    }
  }, [state])

  const actions = useMemo(() => ({
    async registerAccount(account, password) {
      const credentialSalt = Array.from(window.crypto.getRandomValues(new Uint8Array(16)), (byte) => byte.toString(16).padStart(2, '0')).join('')
      const credentialHash = await hashPassword(password, credentialSalt)
      if (stateRef.current.profile?.username === account.username) return { ok: false, message: 'This username already exists in this browser tab. Please log in.' }
      const profile = { ...account, referralCode: createReferralCode(account.username) }
      updateState((current) => ({
        ...current,
        account: profile,
        profile,
        credentialSalt,
        credentialHash,
        ve: current.ve + 200,
        activity: addActivity(current, { type: 'earn', title: 'Welcome bonus', amount: 200, asset: 'VE', createdAt: new Date().toISOString() }),
        welcomeBonusGranted: true,
      }))
      return { ok: true }
    },
    async loginAccount(username, password) {
      const current = stateRef.current
      if (!current.profile || current.profile.username !== username) return { ok: false, message: 'No account with this username was found in this browser tab. Create an account first.' }
      const enteredHash = await hashPassword(password, current.credentialSalt)
      if (enteredHash !== current.credentialHash) return { ok: false, message: 'That password does not match this preview account.' }
      updateState((value) => ({ ...value, account: current.profile }))
      return { ok: true }
    },
    logout() {
      updateState((current) => ({ ...current, account: null }))
    },
    recordInvite(action = 'Invite shared') {
      updateState((current) => ({
        ...current,
        invitesShared: current.invitesShared + 1,
        referralActivity: [{
          id: `${Date.now()}-${Math.random()}`,
          action,
          createdAt: new Date().toISOString(),
        }, ...current.referralActivity].slice(0, 10),
      }))
    },
    completeCaptcha(taskNumber) {
      const today = getRewardDayKey()
      if (taskNumber !== 1 && taskNumber !== 2) throw new Error('Unknown captcha task.')
      let earned = false
      updateState((current) => {
        const completionKey = taskNumber === 1 ? 'captchaCompletedOn' : 'captchaSecondCompletedOn'
        if (current[completionKey] === today) return current
        earned = true
        return {
        ...current,
        ve: current.ve + CAPTCHA_TASK_REWARD,
        [completionKey]: today,
        activity: addActivity(current, { type: 'earn', title: `Captcha task ${taskNumber} completed`, amount: CAPTCHA_TASK_REWARD, asset: 'VE', createdAt: new Date().toISOString() }),
        }
      })
      return earned
    },
    claimDailyCheckIn() {
      const today = getRewardDayKey()
      let earned = false
      updateState((current) => {
        if (current.dailyCheckInOn === today) return current
        earned = true
        return {
          ...current,
          ve: current.ve + DAILY_CHECK_IN_REWARD,
          dailyCheckInOn: today,
          activity: addActivity(current, { type: 'earn', title: 'Daily check-in', amount: DAILY_CHECK_IN_REWARD, asset: 'VE', createdAt: new Date().toISOString() }),
        }
      })
      return earned
    },
    startDailySpin() {
      const today = getRewardDayKey()
      const current = stateRef.current
      if (current.dailySpinOn === today) return { ok: false, reward: current.dailySpinReward }
      if (current.dailySpinPending?.date === today) return { ok: true, ...current.dailySpinPending }
      const randomValue = new Uint32Array(1)
      window.crypto.getRandomValues(randomValue)
      const segmentIndex = randomValue[0] % DAILY_SPIN_REWARDS.length
      const reward = DAILY_SPIN_REWARDS[segmentIndex]
      const pendingSpin = { date: today, reward, segmentIndex }
      updateState((state) => ({ ...state, dailySpinPending: pendingSpin }))
      return { ok: true, ...pendingSpin }
    },
    completeDailySpin() {
      const today = getRewardDayKey()
      const current = stateRef.current
      const pendingSpin = current.dailySpinPending
      if (current.dailySpinOn === today) return { ok: false, reward: current.dailySpinReward }
      if (!pendingSpin || pendingSpin.date !== today) return { ok: false, reward: 0 }
      updateState((state) => ({
        ...state,
        ve: state.ve + pendingSpin.reward,
        dailySpinOn: today,
        dailySpinReward: pendingSpin.reward,
        dailySpinPending: null,
        activity: addActivity(state, { type: 'earn', title: 'Daily reward spin', amount: pendingSpin.reward, asset: 'VE', createdAt: new Date().toISOString() }),
      }))
      return { ok: true, reward: pendingSpin.reward }
    },
    swap({ from, amount, output }) {
      const available = stateRef.current[from]
      if (!Number.isFinite(amount) || amount <= 0) return { ok: false, message: 'Enter a valid amount.' }
      if (amount > available) return { ok: false, message: `You have ${available.toLocaleString('en-US', { maximumFractionDigits: 2 })} ${from.toUpperCase()} available.` }
      const to = from === 've' ? 'sve' : 've'
      updateState((current) => ({
        ...current,
        [from]: Number((current[from] - amount).toFixed(2)),
        [to]: Number((current[to] + output).toFixed(2)),
        activity: addActivity(current, { type: 'swap', title: 'Wallet conversion', amount, asset: from.toUpperCase(), output, outputAsset: to.toUpperCase(), createdAt: new Date().toISOString() }),
      }))
      return { ok: true }
    },
    redeem({ amount, reward, method }) {
      if (!method) return { ok: false, message: 'Select a payout method.' }
      if (!Number.isFinite(amount) || amount < MIN_WITHDRAWAL_VE) return { ok: false, message: `The minimum withdrawal is ${MIN_WITHDRAWAL_VE.toLocaleString('en-US')} VEs.` }
      const current = stateRef.current
      if (amount > current.ve) return { ok: false, message: `You have ${current.ve.toLocaleString('en-US', { maximumFractionDigits: 2 })} VEs available.` }
      updateState((current) => ({
        ...current,
        ve: Number((current.ve - amount).toFixed(2)),
        activity: addActivity(current, { type: 'redeem', title: reward, amount, asset: 'VE', method, createdAt: new Date().toISOString() }),
      }))
      return { ok: true }
    },
  }), [updateState])

  const value = useMemo(() => ({ ...state, ...actions }), [state, actions])
  return <RewardsContext.Provider value={value}>{children}</RewardsContext.Provider>
}

export function useRewards() {
  const context = useContext(RewardsContext)
  if (!context) throw new Error('useRewards must be used inside RewardsProvider.')
  return context
}
