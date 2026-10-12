import { useEffect, useState } from 'react'
import { ArrowRight, BadgeCheck, CalendarCheck, CheckCircle2, Compass, Gift, Sparkles, Users, Wallet } from 'lucide-react'
import { Link } from 'react-router-dom'
import AppPageShell, { workspaceStyles as shell } from '../components/AppPageShell.jsx'
import { DAILY_CHECK_IN_REWARD, DAILY_SPIN_REWARDS, getRewardDayKey, useRewards } from '../state/RewardsContext.jsx'
import styles from './Workspace.module.css'

const SPIN_SEGMENT_ANGLE = 360 / DAILY_SPIN_REWARDS.length

function getWheelRotationForReward(reward) {
  const segmentIndex = DAILY_SPIN_REWARDS.indexOf(reward)
  return segmentIndex < 0 ? 0 : (360 - segmentIndex * SPIN_SEGMENT_ANGLE) % 360
}

function BonusVEsPage() {
  const { ve, activity, captchaCompletedOn, captchaSecondCompletedOn, dailyCheckInOn, dailySpinOn, dailySpinReward, dailySpinPending, claimDailyCheckIn, startDailySpin, completeDailySpin } = useRewards()
  const today = getRewardDayKey()
  const completedCaptchaTasks = [captchaCompletedOn, captchaSecondCompletedOn].filter((date) => date === today).length
  const checkedInToday = dailyCheckInOn === today
  const spunToday = dailySpinOn === today
  const [spinning, setSpinning] = useState(false)
  const [wheelRotation, setWheelRotation] = useState(() => spunToday ? getWheelRotationForReward(dailySpinReward) : 0)
  const completedTasks = activity.filter((item) => item.type === 'earn')
  const recentVeCredits = completedTasks.reduce((total, item) => total + item.amount, 0)
  const opportunities = [
    { title: 'Daily captcha tasks', description: 'Complete either or both symbol verification tasks.', icon: CalendarCheck, status: `${completedCaptchaTasks}/2 completed`, reward: '40 VEs each', action: 'Open tasks', to: '/captcha' },
    { title: 'Invite friends', description: 'Share Aurex with friends and follow your referral progress.', icon: Users, status: 'Available', reward: 'Referral program', action: 'Refer & earn', to: '/refer' },
    { title: 'Convert your balance', description: 'Move between VE and SVE balances at the current conversion rate.', icon: Wallet, status: 'Wallet tool', reward: '1 VE = 0.65 SVE', action: 'Open swap', to: '/swap' },
  ]
  useEffect(() => {
    if (!dailySpinPending || dailySpinPending.date !== today || spunToday) return undefined
    setSpinning(true)
    setWheelRotation((current) => {
      const targetRotation = getWheelRotationForReward(dailySpinPending.reward)
      const currentRotation = ((current % 360) + 360) % 360
      const extraRotation = (targetRotation - currentRotation + 360) % 360
      return current + 2160 + extraRotation
    })
    const timeoutId = window.setTimeout(() => {
      completeDailySpin()
      setSpinning(false)
    }, 3200)
    return () => window.clearTimeout(timeoutId)
  }, [completeDailySpin, dailySpinPending?.date, dailySpinPending?.reward, spunToday, today])

  const handleDailySpin = () => {
    if (spinning || spunToday) return
    startDailySpin()
  }

  return (
    <AppPageShell title="Bonus VEs" category="Earn VEs" description="Find activities and manage the ways you grow your Aurex wallet." accent="gold" icon={Sparkles}>
      <div className={styles.stack}>
        <section className={styles.statRow} aria-label="Rewards overview">
          {[
            ['VE balance', ve.toLocaleString('en-US', { maximumFractionDigits: 2 }), 'VEs'],
            ['Daily check-in', checkedInToday ? 'Claimed' : 'Available', 'today'],
            ['Recent VE credits', recentVeCredits.toLocaleString('en-US', { maximumFractionDigits: 2 }), 'VEs'],
          ].map(([label, value, unit]) => (
            <div className={styles.stat} key={label}><span className={styles.statLabel}>{label}</span><strong className={styles.statValue}>{value} <small>{unit}</small></strong></div>
          ))}
        </section>

        <section className={styles.panel} aria-labelledby="daily-checkin-heading">
          <div className={styles.panelHead}>
            <div><span className={styles.kicker}>DAILY REWARD</span><h2 id="daily-checkin-heading">Check in today</h2></div>
            <span className={styles.sample}>SAMPLE REWARD</span>
          </div>
          <div className={`${styles.activityEmpty} ${styles.checkInAction}`}>
            <span className={styles.emptyIcon}><CalendarCheck size={18} /></span>
            <div className={styles.checkInCopy} aria-live="polite"><strong>{checkedInToday ? 'You’re checked in for today' : `Collect ${DAILY_CHECK_IN_REWARD} VEs`}</strong><p>{checkedInToday ? 'Come back tomorrow for your next daily check-in.' : 'Claim one daily check-in reward. It can be collected once each day.'}</p></div>
            <button className={styles.primaryButton} type="button" onClick={claimDailyCheckIn} disabled={checkedInToday}>
              {checkedInToday ? 'Checked in' : 'Claim daily reward'}
              {!checkedInToday && <ArrowRight size={16} />}
            </button>
          </div>
          <p className={styles.termsText}>The 20 VE check-in amount is a preview value; final program rewards may differ.</p>
        </section>

        <section className={styles.panel} aria-labelledby="spin-heading">
          <div className={styles.panelHead}>
            <div><span className={styles.kicker}>DAILY REWARD</span><h2 id="spin-heading">Spin to earn VEs</h2></div>
            <span className={styles.sample}>UP TO {Math.max(...DAILY_SPIN_REWARDS)} VEs</span>
          </div>
          <p className={styles.spinIntro}>Take one spin each day for a chance to win a preview reward from 10 to 50 VEs.</p>
          <div className={styles.spinWorkspace}>
            <div className={styles.wheelFrame}>
              <span className={styles.wheelPointer} aria-hidden="true" />
              <div className={`${styles.rewardWheel} ${spinning ? styles.wheelSpinning : ''}`} style={{ transform: `rotate(${wheelRotation}deg)` }} role="img" aria-label="Reward wheel with 10, 20, 30, 40 and 50 VE prize segments">
                {DAILY_SPIN_REWARDS.map((reward, index) => {
                  const angle = index * SPIN_SEGMENT_ANGLE * Math.PI / 180
                  const radius = 34
                  const x = 50 + Math.sin(angle) * radius
                  const y = 50 - Math.cos(angle) * radius
                  return <span className={styles.wheelLabel} key={reward} style={{ '--label-x': `${x}%`, '--label-y': `${y}%` }}>{reward}</span>
                })}
                <span className={styles.wheelCenter}>{spunToday && !spinning ? dailySpinReward : 'VE'}</span>
              </div>
            </div>
            <div className={styles.spinCopy}>
              {spinning ? (
                <div className={styles.spinResult} role="status"><Sparkles size={20} /><div><strong>Spinning for your reward…</strong><p>Your prize will be shown when the wheel stops.</p></div></div>
              ) : spunToday ? (
                <div className={styles.spinResult} role="status"><CheckCircle2 size={20} /><div><strong>You won {dailySpinReward} VEs!</strong><p>Today's spin is complete. Come back tomorrow to spin again.</p></div></div>
              ) : (
                <><strong>One spin. A fresh reward.</strong><p>Spin once today to add your prize to your VE wallet.</p></>
              )}
              <button className={styles.primaryButton} type="button" onClick={handleDailySpin} disabled={spinning || spunToday || dailySpinPending?.date === today}>
                {spinning || dailySpinPending?.date === today ? 'Spinning…' : spunToday ? 'Come back tomorrow' : 'Spin the wheel'}
                {!spinning && !spunToday && dailySpinPending?.date !== today && <ArrowRight size={16} />}
              </button>
              <span className={styles.spinNote}>Preview rewards only · One spin per day</span>
            </div>
          </div>
        </section>

        <section aria-labelledby="opportunities-heading">
          <div className={shell.sectionHead}><div><span className={styles.kicker}>YOUR REWARDS</span><h2 id="opportunities-heading">Ways to earn and use VEs</h2></div></div>
          <div className={styles.opportunityGrid}>
            {opportunities.map(({ title, description, icon: OpportunityIcon, status, reward, action, to }) => (
              <article className={styles.opportunityCard} key={title}>
                <div className={styles.opportunityTop}><span className={styles.opportunityIcon}><OpportunityIcon size={19} /></span><span className={styles.opportunityStatus}><i />{status}</span></div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className={styles.opportunityFoot}><span>{reward}</span><Link to={to}>{action}<ArrowRight size={15} /></Link></div>
              </article>
            ))}
          </div>
          <p className={styles.termsText}>Referral activity is not yet connected. Check-in, daily spin, and captcha rewards are credited to this browser preview.</p>
        </section>

        <div className={shell.twoColumn}>
          <section className={styles.panel} aria-labelledby="recent-heading">
            <div className={styles.panelHead}><div><span className={styles.kicker}>WALLET ACTIVITY</span><h2 id="recent-heading">Recent VE earnings</h2></div><Link className={styles.panelLink} to="/wallet">View wallet <ArrowRight size={14} /></Link></div>
            {completedTasks.length ? (
              <ul className={styles.list}>
                {completedTasks.slice(0, 4).map((item) => (
                  <li className={styles.listItem} key={item.id}>
                    <span className={styles.listIcon}><BadgeCheck size={17} /></span>
                    <div><strong>{item.title}</strong><p>{new Date(item.createdAt).toLocaleString()}</p></div>
                    <span className={`${styles.listAside} ${styles.ledgerCredit}`}>+{item.amount} {item.asset}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className={styles.activityEmpty}><span className={styles.emptyIcon}><Gift size={17} /></span><div><strong>No VE earnings yet</strong><p>Check in, complete captcha tasks, or try the daily rewards wheel.</p></div></div>
            )}
          </section>
          <section className={styles.panel} aria-labelledby="how-bonus-heading">
            <div className={styles.panelHead}><div><span className={styles.kicker}>HOW EARNING WORKS</span><h2 id="how-bonus-heading">From activity to wallet</h2></div></div>
            <ol className={styles.steps}>
              {[['Find an activity', Compass], ['Complete the task', CalendarCheck], ['Verify your work', CheckCircle2], ['Receive VEs', Gift]].map(([label, StepIcon], index) => <li key={label}><span className={styles.stepNumber}><StepIcon size={14} /></span><strong>{label}</strong><span className={styles.listAside}>{String(index + 1).padStart(2, '0')}</span></li>)}
            </ol>
            <div className={styles.subtleNotice}><CheckCircle2 size={16} /><span>Earned preview VEs stay in this browser tab and appear in your wallet.</span></div>
          </section>
        </div>
      </div>
    </AppPageShell>
  )
}

export default BonusVEsPage
