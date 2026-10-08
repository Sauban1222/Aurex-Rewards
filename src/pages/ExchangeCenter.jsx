import { useState } from 'react'
import logo from '../assets/aurex-logo.webp'
import Icon from '../components/Icon.jsx'
import ExchangeIllustration from '../components/ExchangeCenterBanner/ExchangeIllustration.jsx'
import layout from './BonusVEs.module.css'
import styles from './ExchangeCenter.module.css'

const previewBalance = 1260
const rewards = [
  { id: 'gift-card', title: 'Digital gift card', description: 'A generic digital gift card reward.', cost: 400, icon: 'gift', tone: 'gold' },
  { id: 'wallet', title: 'Digital wallet payout', description: 'A sample payout-card redemption option.', cost: 700, icon: 'wallet', tone: 'cyan' },
  { id: 'reward-card', title: 'Premium reward card', description: 'A sample card-style reward option.', cost: 1000, icon: 'sparkles', tone: 'violet' },
]

function ExchangeCenterPage() {
  const [selectedId, setSelectedId] = useState('')
  const [stage, setStage] = useState('choose')
  const [notice, setNotice] = useState('')
  const selectedReward = rewards.find((reward) => reward.id === selectedId)
  const remainingBalance = selectedReward ? previewBalance - selectedReward.cost : previewBalance

  const chooseReward = (rewardId) => {
    setSelectedId(rewardId)
    setStage('choose')
    setNotice('')
  }

  const reviewRedemption = () => {
    if (!selectedReward) {
      setNotice('Choose a reward option before continuing.')
      return
    }
    setStage('review')
    setNotice('')
  }

  const confirmDemo = () => {
    setStage('complete')
    setNotice('Demo complete. No VEs were deducted and no reward was issued.')
  }

  const resetDemo = () => {
    setStage('choose')
    setNotice('')
  }

  return (
    <div id="exchange" className={`app-shell ${layout.page} ${styles.page}`}>
      <header className="topbar">
        <div className="topbar-inner">
          <a className="brand" href="/" aria-label="Aurex Rewards home">
            <img className="brand-logo" src={logo} alt="Aurex Rewards" width="600" height="459" />
          </a>
          <nav className={`main-nav ${layout.nav}`} aria-label="Main navigation">
            <a className="nav-link" href="/">Overview</a>
            <a className="nav-link" href="/captcha">Earn VEs</a>
            <a className="nav-link" href="/swap">Swap</a>
            <a className="nav-link" href="/refer">Refer &amp; Earn</a>
            <a className="nav-link nav-active" href="/exchange" aria-current="page">Redeem</a>
          </nav>
          <a className="login-link" href="/login">Log in</a>
        </div>
      </header>

      <main className={layout.content}>
        <nav className={layout.breadcrumb} aria-label="Breadcrumb">
          <a href="/">Overview</a><span>/</span><a href="/exchange">Redeem</a><span>/</span><span aria-current="page">Exchange Center</span>
        </nav>

        <section className={`${layout.hero} ${styles.hero}`} aria-labelledby="exchange-title">
          <div className={layout.heroCopy}>
            <span className={layout.eyebrow}><Icon name="gift" size={16} /> REDEEM YOUR VEs</span>
            <h1 id="exchange-title">Your rewards, <span>ready for what’s next.</span></h1>
            <p>Explore sample redemption options and review how an exchange works. Supported rewards and eligibility vary by account and platform terms.</p>
            <a className={layout.primaryAction} href="#reward-options">Explore rewards <Icon name="arrow" size={17} /></a>
          </div>
          <div className={styles.heroVisual} aria-hidden="true">
            <ExchangeIllustration className={styles.heroIllustration} />
          </div>
          <div className={layout.heroStatus}><span /> DEMO PREVIEW · REDEMPTION IS NOT CONNECTED</div>
        </section>

        <section className={styles.exchangeSection} id="reward-options" aria-labelledby="options-heading">
          <div className={styles.sectionHeading}>
            <div>
              <span className={layout.eyebrow}>EXCHANGE CENTER</span>
              <h2 id="options-heading">Choose a reward option</h2>
            </div>
            <span className={styles.demoBadge}><span /> SAMPLE OPTIONS</span>
          </div>

          <div className={styles.exchangeLayout}>
            <section className={styles.optionsPanel} aria-label="Sample redemption options">
              <div className={styles.balanceBar}>
                <span className={styles.balanceIcon}><Icon name="wallet" size={17} /></span>
                <span><small>PREVIEW BALANCE</small><strong>{previewBalance.toLocaleString('en-US')} <em>VEs</em></strong></span>
                <span className={styles.sampleLabel}>SAMPLE ONLY</span>
              </div>

              <div className={styles.rewardList} role="group" aria-label="Choose a sample reward">
                {rewards.map((reward) => {
                  const selected = selectedId === reward.id
                  return (
                    <button
                      key={reward.id}
                      className={`${styles.rewardOption} ${selected ? styles.rewardSelected : ''}`}
                      type="button"
                      aria-pressed={selected}
                      disabled={stage === 'complete'}
                      onClick={() => chooseReward(reward.id)}
                    >
                      <span className={`${styles.rewardIcon} ${styles[reward.tone]}`}><Icon name={reward.icon} size={19} /></span>
                      <span className={styles.rewardCopy}><strong>{reward.title}</strong><small>{reward.description}</small></span>
                      <span className={styles.rewardCost}>{reward.cost.toLocaleString('en-US')} <small>VEs</small></span>
                      <span className={styles.radioMark}>{selected && <span />}</span>
                    </button>
                  )
                })}
              </div>

              {stage === 'review' && selectedReward && (
                <div className={styles.reviewCard} role="status">
                  <span className={styles.reviewIcon}><Icon name="shield" size={17} /></span>
                  <div><strong>Review your exchange</strong><p>{selectedReward.title} · {selectedReward.cost.toLocaleString('en-US')} sample VEs</p><small>Estimated preview balance after exchange: {remainingBalance.toLocaleString('en-US')} VEs</small></div>
                </div>
              )}

              {stage === 'complete' && selectedReward && (
                <div className={styles.successCard} role="status">
                  <span className={styles.successIcon}><Icon name="check" size={18} /></span>
                  <div><strong>Demo exchange complete</strong><p>{selectedReward.title} was reviewed in this preview.</p><small>Your preview balance remains {previewBalance.toLocaleString('en-US')} VEs. No reward was issued.</small></div>
                </div>
              )}

              <div className={styles.actionRow}>
                <span className={styles.secureNote}><Icon name="shield" size={14} /> No payment provider connected</span>
                {stage === 'choose' && (
                  <button className={styles.actionButton} type="button" disabled={!selectedReward} onClick={reviewRedemption}>
                    Review exchange <Icon name="arrow" size={15} />
                  </button>
                )}
                {stage === 'review' && (
                  <div className={styles.reviewActions}>
                    <button className={styles.backButton} type="button" onClick={() => setStage('choose')}>Back</button>
                    <button className={styles.actionButton} type="button" onClick={confirmDemo}>Confirm demo <Icon name="check" size={15} /></button>
                  </div>
                )}
                {stage === 'complete' && <button className={styles.backButton} type="button" onClick={resetDemo}>Choose another</button>}
              </div>
              <p className={styles.notice} role="status" aria-live="polite">{notice}</p>
            </section>

            <aside className={styles.summaryPanel} aria-label="Exchange process">
              <span className={styles.panelKicker}>SIMPLE &amp; TRANSPARENT</span>
              <h3>From earned VEs to rewards</h3>
              <ol className={styles.steps}>
                <li className={stage !== 'complete' ? styles.stepActive : styles.stepDone}><span>{stage === 'complete' ? <Icon name="check" size={13} /> : '1'}</span><div><strong>Choose</strong><small>Select a supported option</small></div></li>
                <li className={stage === 'review' ? styles.stepActive : stage === 'complete' ? styles.stepDone : ''}><span>{stage === 'complete' ? <Icon name="check" size={13} /> : '2'}</span><div><strong>Review</strong><small>Check the VE amount and terms</small></div></li>
                <li className={stage === 'complete' ? styles.stepActive : ''}><span>3</span><div><strong>Redeem</strong><small>Availability depends on eligibility</small></div></li>
              </ol>
              {selectedReward ? (
                <div className={styles.selectedSummary}>
                  <span className={`${styles.rewardIcon} ${styles[selectedReward.tone]}`}><Icon name={selectedReward.icon} size={17} /></span>
                  <span><small>SELECTED REWARD</small><strong>{selectedReward.title}</strong></span>
                  <b>{selectedReward.cost.toLocaleString('en-US')} <small>VEs</small></b>
                </div>
              ) : (
                <div className={styles.emptySummary}><Icon name="gift" size={18} /><span>Select a sample reward to see its exchange summary.</span></div>
              )}
              <p className={styles.termsNote}>Actual redemption options, VE amounts, and delivery depend on supported services and published terms.</p>
            </aside>
          </div>
        </section>

        <aside className={`${layout.terms} ${styles.terms}`}>
          <Icon name="shield" size={18} />
          <p><strong>Good to know</strong><span>This is a non-transactional preview. VEs are not deducted, redemption providers are not connected, and no gift card or payout is issued. Always review official availability and eligibility.</span></p>
        </aside>

        <footer className={layout.footer}>
          <a className={layout.footerBrand} href="/"><img src="/icon-192.png" alt="" width="32" height="32" /> Aurex Rewards</a>
          <span>© 2026 Aurex Rewards</span>
        </footer>
      </main>
    </div>
  )
}

export default ExchangeCenterPage