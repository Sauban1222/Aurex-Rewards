import styles from './BannerVisual.module.css'

function BannerVisual({ children, className = '', src, alt = '', ...props }) {
  return (
    <div {...props} className={`${styles.visual} ${className}`}>
      {src && <img className={styles.artwork} src={src} alt={alt} loading="lazy" />}
      {children}
    </div>
  )
}

export default BannerVisual
