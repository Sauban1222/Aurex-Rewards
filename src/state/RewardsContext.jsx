import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'

const STORAGE_KEY = 'aurex-rewards-state-v1'
const INITIAL_STATE = {
  account: null,
  profile: null,
  credentialHash: '',
  credentialSalt: '',
  ve: 0,
  sve: 0,
  activity: [],
  captchaCompletedOn: '',
  invitesShared: 0,
}

const RewardsContext = createContext(null)

function loadState() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (!stored) return INITIAL_STATE
    const parsed = JSON.parse(stored)
    return {
      ...INITIAL_STATE,
      ...parsed,
      account: parsed.account && typeof parsed.account === 'object' ? parsed.account : null,
      profile: parsed.profile && typeof parsed.profile === 'object' ? parsed.profile : null,
      ve: Number.isFinite(parsed.ve) && parsed.ve >= 0 ? parsed.ve : 0,
      sve: Number.isFinite(parsed.sve) && parsed.sve >= 0 ? parsed.sve : 0,
      invitesShared: Number.isInteger(parsed.invitesShared) && parsed.invitesShared >= 0 ? parsed.invitesShared : 0,
      activity: Array.isArray(parsed.activity) ? parsed.activity.slice(0, 30) : [],
    }
  } catch (error) {
    console.error('Could not read the Aurex wallet saved in this browser.', error)
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
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch (error) {
      console.error('Could not save the Aurex wallet in this browser.', error)
    }
  }, [state])

  const actions = useMemo(() => ({
    async registerAccount(account, password) {
      const credentialSalt = Array.from(window.crypto.getRandomValues(new Uint8Array(16)), (byte) => byte.toString(16).padStart(2, '0')).join('')
      const credentialHash = await hashPassword(password, credentialSalt)
      if (stateRef.current.profile?.email === account.email) return { ok: false, message: 'An account with this email already exists in this browser. Please log in.' }
      updateState((current) => ({ ...current, account, profile: account, credentialSalt, credentialHash }))
      return { ok: true }
    },
    async loginAccount(email, password) {
      const current = stateRef.current
      if (!current.profile || current.profile.email !== email) return { ok: false, message: 'No account with this email was found in this browser. Create an account first.' }
      const enteredHash = await hashPassword(password, current.credentialSalt)
      if (enteredHash !== current.credentialHash) return { ok: false, message: 'That password does not match this local account.' }
      updateState((value) => ({ ...value, account: current.profile }))
      return { ok: true }
    },
    logout() {
      updateState((current) => ({ ...current, account: null }))
    },
    recordInvite() {
      updateState((current) => ({ ...current, invitesShared: current.invitesShared + 1 }))
    },
    completeCaptcha() {
      const today = new Date().toISOString().slice(0, 10)
      let earned = false
      updateState((current) => {
        if (current.captchaCompletedOn === today) return current
        earned = true
        return {
        ...current,
        ve: current.ve + 10,
        captchaCompletedOn: today,
        activity: addActivity(current, { type: 'earn', title: 'Captcha task completed', amount: 10, asset: 'VE', createdAt: new Date().toISOString() }),
        }
      })
      return earned
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
      if (!Number.isFinite(amount) || amount <= 0) return { ok: false, message: 'Select a valid reward.' }
      if (amount > stateRef.current.ve) return { ok: false, message: `You have ${stateRef.current.ve.toLocaleString('en-US', { maximumFractionDigits: 2 })} VEs available.` }
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
