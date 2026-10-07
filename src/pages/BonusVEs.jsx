import Icon from '../components/Icon.jsx'
import styles from './BonusVEs.module.css'

function BonusVEsPage() {
  const logo = '/aurex-logo.svg'

  return (
    <div id="bonus" className={`app-shell ${styles.page}`}>
      <header className="topbar">
        <div className="topbar-inner">
          <a className="brand" href="/" aria-label="Aurex Rewards home">
            <img className="brand-logo" src={logo} alt="" width="150" height="42" />
          </a>
          <nav className={`main-nav ${styles.nav}`} aria-label="Main navigation">
            <a className="nav-link" href="/">Overview</a>
            <a className="nav-link" href="/refer">Refer &amp; Earn</a>
            <a className="nav-link" href="/swap">Swap</a>
            <a className="nav-link" href="/exchange">Redeem</a>
          </nav>
          <a className="login-link" href="/login">Log in</a>
        </div>
      </header>

      <main className={styles.content}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <a href="/">Overview</a><span>/</span><span aria-current="page">Bonus VEs</span>
        </nav>

        <section className={styles.hero} aria-labelledby="bonus-title">
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}><Icon name="sparkles" size={16} /> REWARD OPPORTUNITIES</span>
            <h1 id="bonus-title">Bonus VEs, <span>when opportunity opens.</span></h1>
            <p>Discover eligible activities and promotions that may offer additional VEs. Availability and rewards depend on the published program terms.</p>
            <a className={styles.primaryAction} href="#bonus-opportunities">Explore opportunities <Icon name="arrow" size={17} /></a>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.visualOrbit} />
            <div className={styles.visualCard}>
              <span className={styles.visualCardIcon}><Icon name="sparkles" size={19} /></span>
              <span className={styles.visualCardLine} />
              <span className={`${styles.visualCardLine} ${styles.shortLine}`} />
              <span className={styles.visualCardPill} />
            </div>
            <span className={`${styles.token} ${styles.tokenOne}`}>V</span>
            <span className={`${styles.token} ${styles.tokenTwo}`}>✦</span>
            <span className={styles.visualSparkle}>✧</span>
          </div>

          <div className={styles.heroStatus}><span /> PREVIEW MODE · CAMPAIGNS NOT CONNECTED</div>
        </section>

        <section className={styles.opportunities} id="bonus-opportunities" aria-labelledby="opportunities-heading">
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.eyebrow}>YOUR OPPORTUNITIES</span>
              <h2 id="opportunities-heading">Available bonus activities</h2>
            </div>
            <span className={styles.previewBadge}><span /> DEMO PREVIEW</span>
          </div>

          <div className={styles.emptyState}>
            <span className={styles.emptyIcon}><Icon name="sparkles" size={22} /></span>
            <strong>No live campaigns in this preview</strong>
            <p>Bonus campaigns and account-specific eligibility are not connected here. Check back when offers are available on the platform.</p>
            <a className={styles.secondaryAction} href="/#earn">Back to earning opportunities <Icon name="arrow" size={15} /></a>
          </div>
        </section>

        <section className={styles.howItWorks} aria-labelledby="how-it-works-heading">
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.eyebrow}>CLEAR &amp; TRANSPARENT</span>
              <h2 id="how-it-works-heading">How bonus rewards work</h2>
            </div>
            <p>Offers vary. Always review the eligibility and terms shown with each activity.</p>
          </div>
          <ol className={styles.steps}>
            <li><span>01</span><Icon name="shield" size={18} /><h3>Find an eligible offer</h3><p>Review the activity details, availability, and qualification rules.</p></li>
            <li><span>02</span><Icon name="check" size={18} /><h3>Complete the requirements</h3><p>Follow the listed steps within the activity’s stated timeframe.</p></li>
            <li><span>03</span><Icon name="sparkles" size={18} /><h3>Rewards follow the rules</h3><p>Any bonus VEs depend on verified completion and program terms.</p></li>
          </ol>
        </section>

        <aside className={styles.terms}>
          <Icon name="shield" size={18} />
          <p><strong>Good to know</strong><span>This preview does not connect to live campaigns, confirm eligibility, track activity, or issue bonus VEs. Check the official offer details before participating.</span></p>
        </aside>

        <footer className={styles.footer}>
          <a className={styles.footerBrand} href="/"><img src={logo} alt="" width="150" height="42" /> Aurex Rewards</a>
          <span>© 2026 Aurex Rewards</span>
        </footer>
      </main>
    </div>
  )
}

export default BonusVEsPage
