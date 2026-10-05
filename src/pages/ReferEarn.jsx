import { useState } from 'react'
import Icon from '../components/Icon.jsx'
import styles from './ReferEarn.module.css'

const steps = [
  {
    number: '01',
    title: 'Share your invite',
    description: 'Send your Aurex invite to a friend using a channel that works for you.',
    icon: 'arrow',
  },
  {
    number: '02',
    title: 'Your friend joins',
    description: 'They create an account using your personalized referral link.',
    icon: 'people',
  },
  {
    number: '03',
    title: 'Check the criteria',
    description: 'Referral rewards depend on confirmed milestones and program terms.',
    icon: 'check',
  },
]

function ReferEarnPage() {
  const [feedback, setFeedback] = useState('')
  const inviteLink = new URL(import.meta.env.BASE_URL, window.location.origin).href
  const logo = `${import.meta.env.BASE_URL}aurex-symbol.jpg`

  const copyInviteLink = async () => {
    try {
      await navigator.clipboard.writeText(inviteLink)
      setFeedback('Preview link copied. It is not personalized and will not track referrals.')
    } catch {
      setFeedback('Clipboard access was unavailable. Select the link and copy it manually.')
    }
  }

  const shareInviteLink = async () => {
    if (!navigator.share) {
      setFeedback('Sharing is not available in this browser. You can copy the preview link instead.')
      return
    }

    try {
      await navigator.share({
        title: 'Aurex Rewards',
        text: 'Take a look at Aurex Rewards.',
        url: inviteLink,
      })
      setFeedback('Preview link shared. It is not personalized and will not track referrals.')
    } catch (error) {
      if (error.name !== 'AbortError') {
        setFeedback('Could not open sharing. You can copy the preview link instead.')
      }
    }
  }

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="#home" aria-label="Aurex Rewards home">
          <img src={logo} alt="" />
          <span>Aurex<small>Rewards</small></span>
        </a>
        <nav className={styles.headerNav} aria-label="Page navigation">
          <a href="#home">Overview</a>
          <a className={styles.activeLink} href="#refer" aria-current="page">Refer &amp; Earn</a>
          <a href="#login">Log in</a>
        </nav>
      </header>

      <div className={styles.content}>
        <div className={styles.breadcrumb}>
          <a href="#home">Overview</a><span>/</span><span>Refer &amp; Earn</span>
        </div>

        <section className={styles.hero} aria-labelledby="refer-title">
          <div className={styles.heroGlow} />
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}><Icon name="people" size={16} /> AUREX REFERRALS</span>
            <h1 id="refer-title">Good things grow <span>when shared.</span></h1>
            <p>Invite friends to explore Aurex. When the referral program is connected, eligible rewards will follow its published rules and milestones.</p>
            <a className={styles.primaryAction} href="#invite-link">Get your invite link <Icon name="arrow" size={17} /></a>
          </div>
          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.orbit} />
            <div className={`${styles.person} ${styles.personOne}`}><span>A</span><small>YOU</small></div>
            <div className={styles.connection}><Icon name="people" size={22} /></div>
            <div className={`${styles.person} ${styles.personTwo}`}><span>+</span><small>FRIEND</small></div>
            <div className={styles.rewardPill}><Icon name="gift" size={16} /> ELIGIBLE REWARDS</div>
          </div>
          <div className={styles.heroStatus}><span /> PREVIEW MODE · REFERRAL TRACKING NOT CONNECTED</div>
        </section>

        <section className={styles.inviteSection} id="invite-link" aria-labelledby="invite-heading">
          <div className={styles.sectionHeading}>
            <div><span className={styles.eyebrow}>YOUR INVITE</span><h2 id="invite-heading">Share Aurex with a friend</h2></div>
            <span className={styles.unavailable}><span /> Link tracking unavailable</span>
          </div>
          <div className={styles.inviteCard}>
            <div className={styles.inviteIcon}><Icon name="gift" size={21} /></div>
            <div className={styles.inviteDetails}>
              <strong>Example site link</strong>
              <p>This preview link opens Aurex. It is not a personal referral link.</p>
            </div>
            <div className={styles.linkControls}>
              <label className={styles.srOnly} htmlFor="aurex-example-link">Example Aurex site link</label>
              <input id="aurex-example-link" value={inviteLink} readOnly onFocus={(event) => event.currentTarget.select()} />
              <button type="button" className={styles.copyButton} onClick={copyInviteLink}><Icon name="copy" size={16} /> Copy link</button>
              <button type="button" className={styles.shareButton} onClick={shareInviteLink} aria-label="Share preview link"><Icon name="arrow" size={17} /></button>
            </div>
            <p className={styles.feedback} role="status" aria-live="polite">{feedback}</p>
          </div>
        </section>

        <section className={styles.stepsSection} aria-labelledby="steps-heading">
          <div className={styles.sectionHeading}>
            <div><span className={styles.eyebrow}>SIMPLE &amp; TRANSPARENT</span><h2 id="steps-heading">How Refer &amp; Earn works</h2></div>
            <p className={styles.sectionIntro}>Three clear steps. Rewards and eligibility are always subject to the program terms.</p>
          </div>
          <ol className={styles.steps}>
            {steps.map((step) => (
              <li key={step.number} className={styles.stepCard}>
                <div className={styles.stepTop}><span>{step.number}</span><Icon name={step.icon} size={19} /></div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.activitySection} aria-labelledby="activity-heading">
          <div className={styles.activityHeading}>
            <span className={styles.activityIcon}><Icon name="people" size={18} /></span>
            <div><span className={styles.eyebrow}>YOUR ACTIVITY</span><h2 id="activity-heading">Referral activity</h2></div>
          </div>
          <div className={styles.emptyState}>
            <span className={styles.emptyIcon}><Icon name="people" size={21} /></span>
            <strong>No referral activity yet</strong>
            <p>Referral tracking is not connected in this preview, so invites and progress cannot be recorded.</p>
          </div>
        </section>

        <aside className={styles.terms}>
          <Icon name="shield" size={18} />
          <p><strong>Good to know</strong><span>Referral rewards, qualifying actions, and timing depend on the official program terms. This preview does not create invite codes, track referrals, or issue rewards.</span></p>
        </aside>

        <footer className={styles.footer}>
          <a className={styles.footerBrand} href="#home"><img src={logo} alt="" /> Aurex Rewards</a>
          <span>© 2026 Aurex Rewards</span>
        </footer>
      </div>
    </main>
  )
}

export default ReferEarnPage
