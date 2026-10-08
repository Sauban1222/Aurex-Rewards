import { useState } from 'react'
import { useCountUp } from './hooks/useRewardHooks.js'
import { useLocation, useNavigate } from 'react-router-dom'
import logo from './assets/aurex-logo.webp'
import Icon from './components/Icon.jsx'
import ReferEarnBanner from './components/ReferEarnBanner/ReferEarnBanner.jsx'
import SwapCenterBanner from './components/SwapCenterBanner/SwapCenterBanner.jsx'
import BonusVEsBanner from './components/BonusVEsBanner/BonusVEsBanner.jsx'
import CaptchaTasksBanner from './components/CaptchaTasksBanner/CaptchaTasksBanner.jsx'
import ExchangeCenterBanner from './components/ExchangeCenterBanner/ExchangeCenterBanner.jsx'
import LoginPage from './pages/Login.jsx'
import ReferEarnPage from './pages/ReferEarn.jsx'
import SwapCenterPage from './pages/SwapCenter.jsx'
import BonusVEsPage from './pages/BonusVEs.jsx'
import CaptchaTasksPage from './pages/CaptchaTasks.jsx'
import ExchangeCenterPage from './pages/ExchangeCenter.jsx'
import NotFoundPage from './pages/NotFound.jsx'

function Logo() {
  return <a className="brand" href="/" aria-label="Aurex Rewards home"><img className="brand-logo" src={logo} alt="Aurex Rewards" width="600" height="459" /></a>
}

function App() {
  const [toast, setToast] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const previewBalance = useCountUp(1260)

  if (pathname === '/login') return <LoginPage />
  if (pathname === '/refer') return <ReferEarnPage />
  if (pathname === '/swap') return <SwapCenterPage />
  if (pathname === '/bonus') return <BonusVEsPage />
  if (pathname === '/captcha') return <CaptchaTasksPage />
  if (pathname === '/exchange') return <ExchangeCenterPage />
  if (pathname !== '/') return <NotFoundPage />

  const openFeature = (kind) => navigate(`/${kind}`)

  return (
    <div id="home" className="app-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <Logo />
          <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
            <a className="nav-link nav-active" href="/" onClick={() => setMenuOpen(false)}>Overview</a>
            <a className="nav-link" href="/#earn" onClick={() => setMenuOpen(false)}>Earn VEs</a>
            <a className="nav-link" href="/swap" onClick={() => setMenuOpen(false)}>Swap</a>
            <a className="nav-link" href="/refer" onClick={() => setMenuOpen(false)}>Refer &amp; Earn</a>
            <a className="nav-link" href="/exchange" onClick={() => setMenuOpen(false)}>Redeem</a>
          </nav>
          <div className="header-actions">
            <button className="help-link" onClick={() => setToast('Our support team is here to help.')}>Need help?</button>
            <a className="login-link" href="/login">Log in</a>
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
            <div className="balance-top"><span className="balance-label"><Icon name="wallet" size={16} /> DEMO BALANCE</span><button aria-label="Balance details" className="balance-more" onClick={() => setToast('Your VE balance is a sample preview for Aurex Rewards.')}>•••</button></div>
            <div className="balance-amount">{previewBalance.toLocaleString('en-US')} <span>VEs</span></div>
            <div className="balance-footer"><span className="balance-change"><Icon name="arrowUp" size={13} /> 120 this week</span><span className="balance-footer-label">SAMPLE BALANCE</span></div>
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

      {toast && <div className="toast" role="status"><span className="toast-dot" />{toast}<button aria-label="Dismiss notification" onClick={() => setToast('')}>×</button></div>}
    </div>
  )
}

export default App