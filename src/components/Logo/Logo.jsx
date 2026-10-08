import fullLogo from '../../assets/aurex-logo.webp'
import iconLogo from '../../assets/aurex-icon.webp'
import styles from './Logo.module.css'

function Logo({ variant = 'header' }) {
  const isCompact = variant === 'footer'

  return (
    <a className={`${styles.logoLink} ${isCompact ? styles.footerLogo : styles.headerLogo}`} href="/">
      {isCompact ? (
        <img
          className={styles.iconLogo}
          src={iconLogo}
          alt="Aurex Rewards"
          width="104"
          height="104"
          loading="lazy"
        />
      ) : (
        <picture className={styles.headerPicture}>
          <source media="(max-width: 767px)" srcSet={iconLogo} width="104" height="104" />
          <img
            className={styles.headerImage}
            src={fullLogo}
            alt="Aurex Rewards"
            width="600"
            height="459"
            fetchpriority="high"
          />
        </picture>
      )}
    </a>
  )
}

export default Logo
