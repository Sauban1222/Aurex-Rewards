import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { Link, Navigate, useLocation } from 'react-router-dom'
import Logo from './components/Logo/Logo.jsx'
import Icon from './components/Icon.jsx'
import AccountMenu from './components/AccountMenu.jsx'
import ReferEarnBanner from './components/ReferEarnBanner/ReferEarnBanner.jsx'
import SwapCenterBanner from './components/SwapCenterBanner/SwapCenterBanner.jsx'
import BonusVEsBanner from './components/BonusVEsBanner/BonusVEsBanner.jsx'
import CaptchaTasksBanner from './components/CaptchaTasksBanner/CaptchaTasksBanner.jsx'
import ExchangeCenterBanner from './components/ExchangeCenterBanner/ExchangeCenterBanner.jsx'
import NotFoundPage from './pages/NotFound.jsx'
import { useRewards } from './state/RewardsContext.jsx'
import { ArrowRight, ArrowUpRight, Gift, Menu, Wallet, X } from 'lucide-react'

const LoginPage = lazy(() => import('./pages/Login.jsx'))
const ReferEarnPage = lazy(() => import('./pages/ReferEarn.jsx'))
const SwapCenterPage = lazy(() => import('./pages/SwapCenter.jsx'))
const BonusVEsPage = lazy(() => import('./pages/BonusVEs.jsx'))
const CaptchaTasksPage = lazy(() => import('./pages/CaptchaTasks.jsx'))
const ExchangeCenterPage = lazy(() => import('./pages/ExchangeCenter.jsx'))
const WalletPage = lazy(() => import('./pages/Wallet.jsx'))

function App() {
  const [toast, setToast] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const location = useLocation()
  const { pathname } = location
  const { account, ve, sve } = useRewards()
  const isOverviewActive = pathname === '/'

  useEffect(() => {
    if (!menuOpen) return undefined

    const closeOnEscape = (event) => {
      if (event.key !== 'Escape') return
      setMenuOpen(false)
      menuButtonRef.current?.focus()
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  if (pathname !== '/login' && !account) return <Navigate to="/login" replace state={{ from: location }} />
  if (pathname === '/login' && account) return <Navigate to="/" replace />
  if (pathname === '/404') return <NotFoundPage />
  if (pathname === '/login') return <Suspense fallback={<div className="route-loading" role="status" aria-live="polite">Loading account page…</div>}><LoginPage /></Suspense>
  if (pathname === '/refer') return <Suspense fallback={<div className="route-loading" role="status" aria-live="polite">Loading referral workspace…</div>}><ReferEarnPage /></Suspense>
  if (pathname === '/swap') return <Suspense fallback={<div className="route-loading" role="status" aria-live="polite">Loading swap workspace…</div>}><SwapCenterPage /></Suspense>
  if (pathname === '/bonus') return <Suspense fallback={<div className="route-loading" role="status" aria-live="polite">Loading rewards workspace…</div>}><BonusVEsPage /></Suspense>
  if (pathname === '/captcha') return <Suspense fallback={<div className="route-loading" role="status" aria-live="polite">Loading captcha tasks…</div>}><CaptchaTasksPage /></Suspense>
  if (pathname === '/exchange') return <Suspense fallback={<div className="route-loading" role="status" aria-live="polite">Loading redemption workspace…</div>}><ExchangeCenterPage /></Suspense>
  if (pathname === '/wallet') return <Suspense fallback={<div className="route-loading" role="status" aria-live="polite">Loading wallet…</div>}><WalletPage /></Suspense>
  if (pathname !== '/') return <NotFoundPage />

  return (
    <div id="home" className="app-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="topbar">
        <div className="topbar-inner">
          <Logo />
          <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
            <Link className={`nav-link ${isOverviewActive ? 'nav-active' : ''}`} aria-current={isOverviewActive ? 'page' : undefined} to="/" onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, left: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }) }}>Overview</Link>
            <Link className="nav-link" to="/bonus" onClick={() => setMenuOpen(false)}>Earn VEs</Link>
            <Link className="nav-link" to="/wallet" onClick={() => setMenuOpen(false)}>Wallet</Link>
            <Link className="nav-link" to="/swap" onClick={() => setMenuOpen(false)}>Swap</Link>
            <Link className="nav-link" to="/refer" onClick={() => setMenuOpen(false)}>Refer &amp; Earn</Link>
            <Link className="nav-link" to="/exchange" onClick={() => setMenuOpen(false)}>Redeem</Link>
          </nav>
          <div className="header-actions">
            <button className="help-link" onClick={() => setToast('Our support team is here to help.')}>Need help?</button>
            <AccountMenu />
          </div>
          <button
            ref={menuButtonRef}
            className="mobile-menu"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main id="main-content" className="page-content">
        <div className="home-overview">
          <section className="home-intro" aria-labelledby="welcome-title">
            <p className="home-kicker">
              <span className="home-kicker-brand">AUREX REWARDS</span>
              <span className="home-kicker-separator" aria-hidden="true">/</span>
              <span className="home-kicker-context">YOUR REWARDS DASHBOARD</span>
            </p>
            <h1 id="welcome-title">Make every reward <span>count.</span></h1>
            <p>Earn VEs, move balances, and discover rewards—all from one place.</p>
            <div className="home-intro-actions">
              <Link className="home-primary-action" to="/bonus">Explore ways to earn <ArrowRight size={16} aria-hidden="true" /></Link>
              <Link className="home-secondary-action" to="/exchange"><Gift size={16} aria-hidden="true" /> Browse rewards</Link>
            </div>
          </section>

          <section className="home-wallet-card" aria-labelledby="home-wallet-title">
            <div className="home-wallet-heading">
              <span className="home-wallet-icon"><Wallet size={19} aria-hidden="true" /></span>
              <div>
                <h2 id="home-wallet-title">Your balances</h2>
                <p>Available to use</p>
              </div>
            </div>
            <dl className="home-wallet-balances" aria-label="Available reward balances">
              <div>
                <dt>VE balance</dt>
                <dd>{ve.toLocaleString('en-US', { maximumFractionDigits: 2 })} <span>VEs</span></dd>
              </div>
              <div>
                <dt>SVE balance</dt>
                <dd>{sve.toLocaleString('en-US', { maximumFractionDigits: 2 })} <span>SVEs</span></dd>
              </div>
            </dl>
            <Link className="home-wallet-link" to="/wallet">View wallet <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </section>
        </div>

        <section id="earn" className="section-block" aria-labelledby="earn-heading">
          <div className="section-heading">
            <div><div className="section-kicker">YOUR NEXT OPPORTUNITY</div><h2 id="earn-heading">Earn a little extra</h2></div>
            <Link className="text-link" to="/bonus">Explore ways to earn <Icon name="arrow" size={16} /></Link>
          </div>
          <ReferEarnBanner />
          <div className="feature-grid feature-grid-2">
            <BonusVEsBanner />
            <CaptchaTasksBanner />
          </div>
        </section>

        <section id="redeem" className="section-block redeem-section" aria-labelledby="redeem-heading">
          <div className="section-heading">
            <div><div className="section-kicker">SWAP OR REDEEM</div><h2 id="redeem-heading" tabIndex="-1">Two ways to use your VEs</h2></div>
            <span className="section-aside"><Icon name="shield" size={15} /> Simple. Secure. Yours.</span>
          </div>
          <div className="feature-grid feature-grid-2">
            <SwapCenterBanner />
            <ExchangeCenterBanner />
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