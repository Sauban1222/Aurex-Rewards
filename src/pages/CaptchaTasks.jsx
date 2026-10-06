import { useState } from 'react'
import Icon from '../components/Icon.jsx'
import CaptchaIllustration from '../components/CaptchaTasksBanner/CaptchaIllustration.jsx'
import layout from './BonusVEs.module.css'
import styles from './CaptchaTasks.module.css'

const correctTiles = [1, 4]
const symbols = ['ring', 'shield', 'diamond', 'spark', 'shield', 'ring']

function TaskTile({ index, symbol, selected, disabled, onClick }) {
  return (
    <button
      className={`${styles.tile} ${styles[symbol]} ${selected ? styles.tileSelected : ''}`}
      type="button"
      aria-label={`Tile ${index + 1}${selected ? ', selected' : ''}`}
      aria-pressed={selected}
      disabled={disabled}
      onClick={onClick}
    >
      <span className={styles.tileCheckbox}>{selected && <Icon name="check" size={13} />}</span>
      {symbol === 'shield' ? (
        <svg viewBox="0 0 40 44" aria-hidden="true">
          <path d="M20 3 35 9v11c0 10-6 17-15 21C11 37 5 30 5 20V9z" />
          <path className={styles.symbolDetail} d="m13 21 5 5 10-11" />
        </svg>
      ) : symbol === 'diamond' ? (
        <svg viewBox="0 0 40 44" aria-hidden="true"><path d="m20 4 15 18-15 18L5 22z" /><path className={styles.symbolDetail} d="m5 22 30 0M20 4l-5 18 5 18 5-18z" /></svg>
      ) : symbol === 'spark' ? (
        <svg viewBox="0 0 40 44" aria-hidden="true"><path d="m20 3 4.2 12.8L37 20l-12.8 4.2L20 37l-4.2-12.8L3 20l12.8-4.2z" /><circle cx="31" cy="34" r="3" /></svg>
      ) : (
        <svg viewBox="0 0 40 44" aria-hidden="true"><circle cx="20" cy="22" r="14" /><circle className={styles.symbolDetail} cx="20" cy="22" r="7" /></svg>
      )}
      <span className={styles.tileShine} />
    </button>
  )
}

function CaptchaTasksPage() {
  const [selectedTiles, setSelectedTiles] = useState([])
  const [complete, setComplete] = useState(false)
  const [feedback, setFeedback] = useState('')
  const logo = `${import.meta.env.BASE_URL}aurex-symbol.jpg`

  const toggleTile = (index) => {
    setSelectedTiles((current) => current.includes(index)
      ? current.filter((tile) => tile !== index)
      : [...current, index])
    setFeedback('')
  }

  const verifyTask = () => {
    const isCorrect = selectedTiles.length === correctTiles.length
      && correctTiles.every((tile) => selectedTiles.includes(tile))

    if (!isCorrect) {
      setFeedback('Not quite. Select each shield symbol and try again.')
      return
    }

    setComplete(true)
    setFeedback('Demo verification complete. No VEs have been added.')
  }

  const resetTask = () => {
    setSelectedTiles([])
    setComplete(false)
    setFeedback('')
  }

  return (
    <div id="captcha" className={`app-shell ${layout.page} ${styles.page}`}>
      <header className="topbar">
        <div className="topbar-inner">
          <a className="brand" href="#home" aria-label="Aurex Rewards home">
            <img className="brand-logo" src={logo} alt="" />
            <span className="brand-wordmark">Aurex<span>rewards</span></span>
          </a>
          <nav className={`main-nav ${layout.nav}`} aria-label="Main navigation">
            <a className="nav-link" href="#home">Overview</a>
            <a className="nav-link nav-active" href="#captcha" aria-current="page">Earn VEs</a>
            <a className="nav-link" href="#swap">Swap</a>
            <a className="nav-link" href="#refer">Refer &amp; Earn</a>
            <a className="nav-link" href="#redeem">Redeem</a>
          </nav>
          <a className="login-link" href="#login">Log in</a>
        </div>
      </header>

      <main className={layout.content}>
        <nav className={layout.breadcrumb} aria-label="Breadcrumb">
          <a href="#home">Overview</a><span>/</span><span>Earn VEs</span><span>/</span><span aria-current="page">Captcha Tasks</span>
        </nav>

        <section className={`${layout.hero} ${styles.hero}`} aria-labelledby="captcha-title">
          <div className={layout.heroCopy}>
            <span className={layout.eyebrow}><Icon name="shield" size={16} /> TASK-BASED EARNING</span>
            <h1 id="captcha-title">Verify with care. <span>Earn with confidence.</span></h1>
            <p>Complete verification tasks accurately. Eligible rewards depend on successfully verified completion and platform terms.</p>
            <a className={layout.primaryAction} href="#demo-task">Try the demo task <Icon name="arrow" size={17} /></a>
          </div>
          <div className={styles.heroVisual} aria-hidden="true">
            <CaptchaIllustration className={styles.heroIllustration} />
          </div>
          <div className={layout.heroStatus}><span /> DEMO PREVIEW · NO ACCOUNT OR REWARD CONNECTION</div>
        </section>

        <section className={styles.taskSection} id="demo-task" aria-labelledby="task-heading">
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.eyebrow}>PRACTICE TASK</span>
              <h2 id="task-heading">Complete a verification</h2>
            </div>
            <span className={styles.demoBadge}><span /> DEMO TASK</span>
          </div>

          <div className={styles.taskLayout}>
            <section className={styles.taskPanel} aria-label="Verification demo">
              <div className={styles.taskHeading}>
                <span className={styles.taskIcon}><Icon name="shield" size={18} /></span>
                <div><strong>Select every shield</strong><span>Choose all matching symbols to verify this demo task.</span></div>
                <span className={styles.taskCount}>{selectedTiles.length} / 2</span>
              </div>

              <div className={styles.tileGrid} aria-label="Symbol verification tiles">
                {symbols.map((symbol, index) => (
                  <TaskTile
                    key={index}
                    index={index}
                    symbol={symbol}
                    selected={selectedTiles.includes(index)}
                    disabled={complete}
                    onClick={() => toggleTile(index)}
                  />
                ))}
              </div>

              <div className={styles.taskActions}>
                <span className={styles.secureNote}><Icon name="shield" size={14} /> Practice interaction only</span>
                {complete ? (
                  <button className={styles.resetButton} type="button" onClick={resetTask}>Try again</button>
                ) : (
                  <button className={styles.verifyButton} type="button" onClick={verifyTask} disabled={selectedTiles.length === 0}>
                    Verify selection <Icon name="arrow" size={15} />
                  </button>
                )}
              </div>
              <p className={`${styles.feedback} ${feedback && !complete ? styles.feedbackError : ''}`} role="status" aria-live="polite">{feedback}</p>

              {complete && (
                <div className={styles.completion} role="status">
                  <span className={styles.completionIcon}><Icon name="check" size={19} /></span>
                  <span><strong>Verification successful</strong><small>This demo does not record a task or add VEs to your balance.</small></span>
                </div>
              )}
            </section>

            <aside className={styles.progressPanel} aria-label="Task completion steps">
              <span className={styles.panelKicker}>YOUR TASK</span>
              <h3>Every step matters</h3>
              <ol className={styles.progressList}>
                <li className={styles.progressActive}><span>1</span><div><strong>Complete task</strong><small>Select the matching symbols</small></div></li>
                <li className={complete ? styles.progressDone : ''}><span>{complete ? <Icon name="check" size={13} /> : '2'}</span><div><strong>Verify selection</strong><small>Check your answers</small></div></li>
                <li className={complete ? styles.progressActive : ''}><span>3</span><div><strong>Reward eligibility</strong><small>Subject to platform rules</small></div></li>
              </ol>
              <div className={styles.rewardHint}><Icon name="sparkles" size={16} /><span>Eligible VEs follow verified task completion and the published terms.</span></div>
            </aside>
          </div>
        </section>

        <aside className={`${layout.terms} ${styles.terms}`}>
          <Icon name="shield" size={18} />
          <p><strong>Good to know</strong><span>This interactive challenge is a demonstration only. It does not use a live CAPTCHA service, record task completions, or issue VEs. Real task availability and rewards depend on the platform.</span></p>
        </aside>

        <footer className={layout.footer}>
          <a className={layout.footerBrand} href="#home"><img src={logo} alt="" /> Aurex Rewards</a>
          <span>© 2026 Aurex Rewards</span>
        </footer>
      </main>
    </div>
  )
}

export default CaptchaTasksPage
