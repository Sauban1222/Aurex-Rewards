import styles from './BannerCard.module.css'

function BannerCard({ children, className, ...props }) {
  return (
    <section {...props} className={`${styles.card} ${className}`}>
      {children}
    </section>
  )
}

export default BannerCard
