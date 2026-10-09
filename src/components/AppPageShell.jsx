import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo/Logo.jsx'
import AccountMenu from './AccountMenu.jsx'
import styles from './AppPageShell.module.css'

const navigation = [
  { label: 'Overview', to: '/', active: (path) => path === '/' },
  { label: 'Earn VEs', to: '/bonus', active: (path) => ['/bonus', '/captcha'].includes(path) },
  { label: 'Wallet', to: '/wallet', active: (path) => path === '/wallet' },
  { label: 'Swap', to: '/swap', active: (path) => path === '/swap' },
  { label: 'Refer & Earn', to: '/refer', active: (path) => path === '/refer' },
  { label: 'Redeem', to: '/exchange', active: (path) => path === '/exchange' },
]

function AppPageShell({ title, category, description, icon: FeatureIcon, accent, children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <div className={`${styles.page} ${styles[accent]}`}>
      <a className={styles.skipLink} href="#main-content">Skip to content</a>
      <header className={styles.topbar}>
        <div className={styles.topbarInner}>
          <Logo />
          <nav className={`${styles.navigation} ${menuOpen ? styles.navigationOpen : ''}`} aria-label="Main navigation">
            {navigation.map((item) => {
              const active = item.active(pathname)
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`${styles.navLink} ${active ? styles.navActive : ''}`}
                  aria-current={active ? 'page' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
          <AccountMenu />
          <button
            type="button"
            className={styles.menuButton}
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main id="main-content" className={styles.content} tabIndex="-1">
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link to="/">Overview</Link><span aria-hidden="true">/</span><span aria-current="page">{title}</span>
        </nav>
        <header className={styles.pageHeader}>
          <span className={styles.featureIcon}><FeatureIcon size={19} strokeWidth={1.8} /></span>
          <div className={styles.headerCopy}>
            <span className={styles.eyebrow}>{category}</span>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </header>
        {children}
        <footer className={styles.footer}>
          <Logo variant="footer" />
          <span>© 2026 Aurex Rewards</span>
        </footer>
      </main>
    </div>
  )
}

export { styles as workspaceStyles }
export default AppPageShell
