import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Logo from './components/Logo/Logo.jsx'
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

function App() {
  const [toast, setToast] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  if (pathname === '/404') return <NotFoundPage />
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
      <a className="skip-link" href="#main-content">Skip to content</a>
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

      <main id="main-content" className="page-content">
        <section className="home-intro" aria-labelledby="welcome-title">
          <h1 id="welcome-title">Earn, swap and redeem rewards</h1>
          <p>Explore the ways Aurex Rewards helps you make the most of every opportunity.</p>
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

        <footer className="page-footer">
          <Logo variant="footer" />
          <nav className="footer-links" aria-label="Footer">
            <a href="/">Overview</a>
            <a href="#earn">Earn rewards</a>
            <a href="#redeem">Swap &amp; redeem</a>
          </nav>
          <span className="footer-right">© 2026 Aurex Rewards</span>
        </footer>
      </main>

      {toast && <div className="toast" role="status"><span className="toast-dot" />{toast}<button aria-label="Dismiss notification" onClick={() => setToast('')}>×</button></div>}
    </div>
  )
}

export default App