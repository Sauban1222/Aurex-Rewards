import { useEffect, useRef, useState } from 'react'
import Icon from './components/Icon.jsx'
import { Button } from './components/RewardBanner/RewardBanner.jsx'
import ReferEarnBanner from './components/ReferEarnBanner/ReferEarnBanner.jsx'
import SwapCenterBanner from './components/SwapCenterBanner/SwapCenterBanner.jsx'
import BonusVEsBanner from './components/BonusVEsBanner/BonusVEsBanner.jsx'
import CaptchaTasksBanner from './components/CaptchaTasksBanner/CaptchaTasksBanner.jsx'
import ExchangeCenterBanner from './components/ExchangeCenterBanner/ExchangeCenterBanner.jsx'
import LoginPage from './pages/Login.jsx'
import ReferEarnPage from './pages/ReferEarn.jsx'
import { bannerFeatures } from './utils/bannerData.js'

function Logo() {
  return <a className="brand" href="#home" aria-label="Aurex Rewards home"><img className="brand-logo" src={`${import.meta.env.BASE_URL}aurex-symbol.jpg`} alt="" /><span className="brand-wordmark">Aurex<span>rewards</span></span></a>
}

function App() {
  const [dialog, setDialog] = useState(null)
  const [toast, setToast] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [page, setPage] = useState(() => {
    if (window.location.hash === '#login') return 'login'
    if (window.location.hash === '#refer') return 'refer'
    return 'home'
  })
  const dialogRef = useRef(null)
  const dialogTriggerRef = useRef(null)

  useEffect(() => {
    const syncPage = () => {
      if (window.location.hash === '#login') setPage('login')
      else if (window.location.hash === '#refer') setPage('refer')
      else setPage('home')
    }
    window.addEventListener('hashchange', syncPage)
    return () => window.removeEventListener('hashchange', syncPage)
  }, [])

  const confirmTask = () => {
    setDialog(null)
    setToast('Demo task marked complete. Eligible rewards depend on platform rules.')
    window.setTimeout(() => setToast(''), 4200)
  }

  const openFeature = (kind, trigger) => {
    if (kind === 'refer') {
      window.location.hash = '#refer'
      return
    }

    dialogTriggerRef.current = trigger
    setDialog(kind)
  }

  const activeContent = dialog && bannerFeatures[dialog]

  useEffect(() => {
    if (!dialog) return undefined

    const modal = dialogRef.current
    const closeButton = modal?.querySelector('.dialog-close')
    closeButton?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setDialog(null)
        return
      }

      if (event.key !== 'Tab' || !modal) return
      const focusableElements = modal.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')
      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement?.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      const focusTarget = dialogTriggerRef.current
      if (focusTarget?.isConnected) focusTarget.focus({ preventScroll: true })
      dialogTriggerRef.current = null
    }
  }, [dialog])

  if (page === 'login') return <LoginPage />
  if (page === 'refer') return <ReferEarnPage />

  return (
    <div id="home" className="app-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <Logo />
          <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
            <a className="nav-link nav-active" href="#home" onClick={() => setMenuOpen(false)}>Overview</a>
            <a className="nav-link" href="#earn" onClick={() => setMenuOpen(false)}>Earn VEs</a>
            <a className="nav-link" href="#refer" onClick={() => setMenuOpen(false)}>Refer &amp; Earn</a>
            <a className="nav-link" href="#redeem" onClick={() => setMenuOpen(false)}>Redeem</a>
          </nav>
          <div className="header-actions">
            <button className="help-link" onClick={() => setToast('Our support team is here to help.')}>Need help?</button>
            <a className="login-link" href="#login">Log in</a>
          </div>
          <button className="mobile-menu" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Icon name="menu" /></button>
        </div>
      </header>

      <main className="page-content">
        <section className="welcome-row" aria-labelledby="welcome-title">
          <div>
            <div className="welcome-kicker"><span className="live-dot" /> YOUR REWARDS, IN MOTION</div>
            <h1 id="welcome-title">A little good goes <span>a long way.</span></h1>
            <p className="welcome-copy">Make the most of every VE. Your next reward is closer than you think.</p>
            <a className="welcome-action" href="#earn">Explore opportunities <Icon name="arrow" size={16} /></a>
          </div>
          <div className="balance-card">
            <div className="balance-top"><span className="balance-label"><Icon name="wallet" size={16} /> YOUR VE BALANCE</span><button aria-label="Balance details" className="balance-more" onClick={() => setToast('Your VE balance is ready to use across Aurex Rewards.')}>•••</button></div>
            <div className="balance-amount">1,260 <span>VEs</span></div>
            <div className="balance-footer"><span className="balance-change"><Icon name="arrowUp" size={13} /> 120 this week</span><span className="balance-footer-label">KEEP IT GOING</span></div>
            <span className="balance-watermark">V</span>
          </div>
        </section>

        <section id="earn" className="section-block" aria-labelledby="earn-heading">
          <div className="section-heading">
            <div><div className="section-kicker">YOUR NEXT OPPORTUNITY</div><h2 id="earn-heading">Earn a little extra</h2></div>
            <a className="text-link" href="#earn">Explore ways to earn <Icon name="arrow" size={16} /></a>
          </div>
          <ReferEarnBanner onAction={openFeature} />
          <div className="feature-grid feature-grid-2">
            <BonusVEsBanner onAction={openFeature} />
            <CaptchaTasksBanner onAction={openFeature} />
          </div>
        </section>

        <section id="redeem" className="section-block redeem-section" aria-labelledby="redeem-heading">
          <div className="section-heading">
            <div><div className="section-kicker">SWAP OR REDEEM</div><h2 id="redeem-heading" tabIndex="-1">Two ways to use your VEs</h2></div>
            <span className="section-aside"><Icon name="shield" size={15} /> Simple. Secure. Yours.</span>
          </div>
          <div className="feature-grid feature-grid-2">
            <SwapCenterBanner onAction={openFeature} />
            <ExchangeCenterBanner onAction={openFeature} />
          </div>
        </section>

        <footer className="page-footer"><Logo /><span>Good things come around.</span><span className="footer-right">© 2026 Aurex Rewards</span></footer>
      </main>

      {dialog && activeContent && (
        <div className="dialog-backdrop" role="presentation" onClick={(event) => { if (event.target === event.currentTarget) setDialog(null) }}>
          <section id="feature-dialog" ref={dialogRef} className="dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
            <button className="dialog-close" onClick={() => setDialog(null)} aria-label="Close dialog">×</button>
            <span className="dialog-icon"><Icon name={activeContent.icon} size={21} /></span>
            <div className="card-eyebrow">{activeContent.eyebrow}</div>
            <h2 id="dialog-title">{activeContent.title}</h2>
            <p>{activeContent.body}</p>
            {activeContent.dialogNote && <div className="dialog-note"><Icon name={activeContent.dialogNote.icon} size={17} /><span>{activeContent.dialogNote.text}</span></div>}
            {dialog === 'captcha' ? <Button onClick={confirmTask} icon="check">Mark demo task complete</Button> : dialog === 'swap' ? <Button onClick={() => setDialog(null)}>Got it</Button> : <Button onClick={() => { if (dialog === 'exchange') dialogTriggerRef.current = document.getElementById('redeem-heading'); setDialog(null); document.getElementById('redeem').scrollIntoView({ behavior: 'smooth' }) }}>{dialog === 'exchange' ? 'Explore rewards' : 'Sounds good'}</Button>}
            <span className="dialog-footnote">Preview experience · Rewards shown for illustration</span>
          </section>
        </div>
      )}
      {toast && <div className="toast" role="status"><span className="toast-dot" />{toast}<button aria-label="Dismiss notification" onClick={() => setToast('')}>×</button></div>}
    </div>
  )
}

export default App