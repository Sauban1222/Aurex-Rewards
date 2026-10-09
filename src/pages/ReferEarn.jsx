import { useState } from 'react'
import { ArrowDown, ArrowRight, Check, Copy, Gift, Share2, UserPlus, Users, UserCheck } from 'lucide-react'
import AppPageShell, { workspaceStyles as shell } from '../components/AppPageShell.jsx'
import { useCopyToClipboard } from '../hooks/useRewardHooks.js'
import { useRewards } from '../state/RewardsContext.jsx'
import styles from './Workspace.module.css'

const referralSteps = [
  { label: 'You', icon: Users },
  { label: 'Invite', icon: Share2 },
  { label: 'Friend joins', icon: UserPlus },
  { label: 'Eligibility', icon: UserCheck },
  { label: 'Reward', icon: Gift },
]

function ReferEarnPage() {
  const [feedback, setFeedback] = useState('')
  const { copyToClipboard } = useCopyToClipboard()
  const { invitesShared, recordInvite } = useRewards()
  const inviteLink = new URL('/login', window.location.origin).href

  const copyInviteLink = async () => {
    try {
      await copyToClipboard(inviteLink)
      recordInvite()
      setFeedback('Aurex link copied. Friend sign-ups are not tracked yet.')
    } catch {
      setFeedback('Clipboard access was unavailable. Select the link and copy it manually.')
    }
  }

  const shareInviteLink = async () => {
    if (!navigator.share) {
      setFeedback('Sharing is not available in this browser. Copy the Aurex link instead.')
      return
    }
    try {
      await navigator.share({ title: 'Aurex Rewards', text: 'Take a look at Aurex Rewards.', url: inviteLink })
      recordInvite()
      setFeedback('Aurex link shared. Friend sign-ups are not tracked yet.')
    } catch (error) {
      if (error.name !== 'AbortError') setFeedback('Could not open sharing. Copy the Aurex link instead.')
    }
  }

  return (
    <AppPageShell
      title="Refer & Earn"
      category="Referral workspace"
      description="Invite friends and track your referral progress."
      accent="violet"
      icon={Users}
    >
      <div className={styles.stack}>
        <div className={shell.twoColumn}>
          <section className={styles.panel} aria-labelledby="invite-heading">
            <div className={styles.panelHead}>
              <div><span className={styles.kicker}>YOUR INVITE</span><h2 id="invite-heading">Share Aurex with a friend</h2></div>
            </div>
            <p className={styles.muted}>Share the Aurex sign-up page. Referral tracking is not available yet.</p>
            <span className={styles.kicker}>AUREX LINK</span>
            <div className={styles.linkBox}>
                <span className={styles.linkText}>{inviteLink}</span>
                <button className={styles.primaryButton} type="button" onClick={copyInviteLink}><Copy size={15} /> Copy invite link</button>
                <button className={styles.secondaryButton} type="button" onClick={shareInviteLink} aria-label="Share invite"><Share2 size={15} /> Share invite</button>
              </div>
              <p className={styles.small} role="status" aria-live="polite">{feedback}</p>
          </section>

          <aside className={styles.panel} aria-labelledby="progress-heading">
            <div className={styles.panelHead}>
              <div><span className={styles.kicker}>REFERRAL PROGRESS</span><h2 id="progress-heading">A clear path to rewards</h2></div>
            </div>
            <div className={styles.flow} aria-label="You, invite, friend joins, eligibility, reward">
              {referralSteps.map(({ label, icon: StepIcon }, index) => (
                <span className={styles.flowStep} key={label}>
                  <span className={styles.flowStepIcon}><StepIcon size={17} /></span>
                  {label}
                </span>
              )).flatMap((step, index) => index < referralSteps.length - 1
                ? [step, <ArrowRight key={`arrow-${index}`} className={styles.flowArrow} size={14} aria-hidden="true" />]
                : [step])}
            </div>
            <div className={shell.statRow}>
              {[[`Links shared · this browser`, String(invitesShared)], ['Friend joins', 'Not tracked'], ['Eligible rewards', 'Not tracked']].map(([label, value]) => (
                <div className={styles.stat} key={label}><span className={styles.statLabel}>{label}</span><strong className={styles.statValue}>{value}</strong></div>
              ))}
            </div>
            <p className={`${styles.small} ${styles.muted}`}>Share count is saved in this browser. Friend sign-ups and reward eligibility are not connected.</p>
          </aside>
        </div>

        <div className={shell.twoColumn}>
          <section className={styles.panel} aria-labelledby="activity-heading">
            <div className={styles.panelHead}><div><span className={styles.kicker}>REFERRAL ACTIVITY</span><h2 id="activity-heading">Recent activity</h2></div></div>
            <div className={styles.activityEmpty}>
              <span className={styles.emptyIcon}><Users size={18} /></span>
              <div><strong>No friend sign-ups to show</strong><p>Link shares are counted locally; referral sign-ups cannot currently be tracked.</p></div>
            </div>
          </section>
          <section className={styles.panel} aria-labelledby="how-heading">
            <div className={styles.panelHead}><div><span className={styles.kicker}>HOW IT WORKS</span><h2 id="how-heading">From invite to reward</h2></div></div>
            <ol className={styles.steps}>
              {['Share your invite', 'Friend joins', 'Criteria confirmed', 'Eligible reward'].map((step, index) => (
                <li key={step}><span className={styles.stepNumber}>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong><ArrowDown size={14} className={styles.muted} aria-hidden="true" /></li>
              ))}
            </ol>
            <div className={styles.subtleNotice}><Check size={16} /><span>Referral rewards and eligibility follow the published program terms.</span></div>
          </section>
        </div>
      </div>
    </AppPageShell>
  )
}

export default ReferEarnPage
