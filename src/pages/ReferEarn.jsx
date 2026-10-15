import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Copy, Gift, Share2, UserPlus } from 'lucide-react'
import AppPageShell from '../components/AppPageShell.jsx'
import { useRewards } from '../state/RewardsContext.jsx'
import styles from './ReferEarn.module.css'

const steps = [
  { title: 'Share your code', description: 'Send your personal code or invite link to a friend.', icon: Share2 },
  { title: 'Friend joins', description: 'Your friend creates an account using your referral details and meets the program terms.', icon: UserPlus },
  { title: 'You both earn', description: 'They get 200 VEs; you get 50 VEs when they qualify, plus 20% of each eligible VE earning.', icon: Gift },
]

function ReferEarnPage() {
  const { hash } = useLocation()
  const { account, invitesShared, referralActivity, recordInvite } = useRewards()
  const [feedback, setFeedback] = useState('')
  const referralCode = account.referralCode
  const inviteLink = new URL(`/login?mode=register&ref=${encodeURIComponent(referralCode)}`, window.location.origin).href

  useEffect(() => {
    if (hash !== '#how-it-works') return undefined
    const frame = window.requestAnimationFrame(() => {
      document.getElementById('how-it-works')?.scrollIntoView({ block: 'start' })
    })
    return () => window.cancelAnimationFrame(frame)
  }, [hash])

  const copyValue = async (value, label) => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard access is unavailable.')
      await navigator.clipboard.writeText(value)
    } catch {
      const temporaryInput = document.createElement('textarea')
      temporaryInput.value = value
      temporaryInput.setAttribute('readonly', '')
      temporaryInput.style.position = 'fixed'
      temporaryInput.style.opacity = '0'
      document.body.appendChild(temporaryInput)
      temporaryInput.select()
      try {
        if (!document.execCommand('copy')) throw new Error('Copy command was rejected.')
      } catch {
        setFeedback(`Could not copy the ${label.toLowerCase()}. Select it and copy manually.`)
        temporaryInput.remove()
        return false
      }
      temporaryInput.remove()
    }
    if (label === 'Invite link') recordInvite('Invite link copied')
    setFeedback(`${label} copied.`)
    return true
  }

  const shareInvite = async () => {
    if (!navigator.share) {
      await copyValue(inviteLink, 'Invite link')
      return
    }

    try {
      await navigator.share({ title: 'Join Aurex Rewards', text: 'Join me on Aurex Rewards.', url: inviteLink })
      recordInvite('Invite shared')
      setFeedback('Invite shared.')
    } catch (error) {
      setFeedback(error?.name === 'AbortError' ? 'Sharing cancelled.' : 'Could not open sharing. Copy your invite link instead.')
    }
  }

  return (
    <AppPageShell
      title="Refer & Earn"
      category="Referral workspace"
      description="Your friend gets 200 VEs. You get 50 VEs when they qualify, plus 20% of their eligible VE earnings each time they earn."
      accent="violet"
      icon={Share2}
    >
      <div className={styles.workspace}>
        <section className={styles.panel} aria-labelledby="referral-details-title">
          <div className={styles.panelHeader}>
            <div>
              <span className={styles.kicker}>YOUR INVITE DETAILS</span>
              <h2 id="referral-details-title">Share your referral link</h2>
              <p>Share your code and earn together. Your friend gets 200 VEs when eligible; you get 50 VEs when they qualify, plus 20% of every eligible VE earning they make.</p>
            </div>
          </div>

          <div className={styles.rewardBreakdown} aria-label="Referral reward breakdown">
            <div className={`${styles.rewardCard} ${styles.friendReward}`}>
              <span className={styles.rewardLabel}>YOUR FRIEND</span>
              <strong className={styles.rewardAmount}>200 <span>VEs</span></strong>
              <p>One-time welcome reward when they qualify.</p>
            </div>
            <div className={`${styles.rewardCard} ${styles.inviterReward}`}>
              <span className={styles.rewardLabel}>YOU EARN</span>
              <strong className={styles.rewardAmount}>50 <span>VEs</span></strong>
              <span className={styles.recurringReward}>+ 20% each time</span>
              <p>Of your friend's eligible VE earnings.</p>
            </div>
          </div>

          <div className={styles.detailBlock}>
            <label htmlFor="referral-code">Your referral code</label>
            <div className={styles.fieldRow}>
              <input id="referral-code" className={styles.valueField} value={referralCode} readOnly />
              <button type="button" className={styles.secondaryButton} onClick={() => copyValue(referralCode, 'Referral code')}>
                <Copy size={16} aria-hidden="true" /> Copy code
              </button>
            </div>
          </div>

          <div className={styles.detailBlock}>
            <label htmlFor="referral-link">Your invite link</label>
            <div className={styles.fieldRow}>
              <input id="referral-link" className={styles.valueField} value={inviteLink} readOnly />
              <button type="button" className={styles.secondaryButton} onClick={() => copyValue(inviteLink, 'Invite link')}>
                <Copy size={16} aria-hidden="true" /> Copy link
              </button>
            </div>
          </div>

          <div className={styles.actions}>
            <button type="button" className={styles.primaryButton} onClick={shareInvite}>
              <Share2 size={16} aria-hidden="true" /> Share invite
            </button>
            <p className={styles.trackingNote}>Preview only · Referral tracking and rewards are not connected.</p>
          </div>
          <span className={styles.feedback} role="status" aria-live="polite">{feedback}</span>
        </section>

        <aside className={styles.panel} aria-labelledby="referral-progress-title">
          <div className={styles.panelHeader}>
            <div>
              <span className={styles.kicker}>REFERRAL PROGRESS</span>
              <h2 id="referral-progress-title">Your activity</h2>
            </div>
          </div>
          <dl className={styles.progressList}>
            <div><dt>Invite actions</dt><dd>{invitesShared}</dd></div>
            <div><dt>Friends joined</dt><dd>Not tracked</dd></div>
            <div><dt>Eligible rewards</dt><dd>Not tracked</dd></div>
          </dl>
        </aside>
      </div>

      <section className={styles.panel} aria-labelledby="referral-activity-title">
        <div className={styles.panelHeader}>
          <div>
            <span className={styles.kicker}>REFERRAL ACTIVITY</span>
            <h2 id="referral-activity-title">Recent invite actions</h2>
          </div>
        </div>
        {referralActivity.length ? (
          <ul className={styles.activityList}>
            {referralActivity.map((item) => (
              <li key={item.id}>
                <span>{item.action}</span>
                <time dateTime={item.createdAt}>{new Date(item.createdAt).toLocaleString()}</time>
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.activityEmpty}>
            <strong>No invite activity yet</strong>
            <p>Copy your invite link or share an invite to see recent actions here. Friend joins and reward eligibility are not tracked.</p>
          </div>
        )}
      </section>

      <section id="how-it-works" className={styles.panel} aria-labelledby="how-it-works-title">
        <div className={styles.panelHeader}>
          <div>
            <span className={styles.kicker}>HOW IT WORKS</span>
            <h2 id="how-it-works-title">Three steps to refer</h2>
          </div>
        </div>
        <ol className={styles.steps}>
          {steps.map(({ title, description, icon: StepIcon }, index) => (
            <li key={title}>
              <span className={styles.stepNumber}>{String(index + 1).padStart(2, '0')}</span>
              <StepIcon size={18} aria-hidden="true" />
              <div>
                <strong>{title}</strong>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </AppPageShell>
  )
}

export default ReferEarnPage
