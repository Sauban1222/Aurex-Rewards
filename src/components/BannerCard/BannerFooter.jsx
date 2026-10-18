import styles from './BannerFooter.module.css'

function BannerFooter({ label, items }) {
  return (
    <div className={styles.footer} role="group" aria-label={label}>
      {items.map(({ icon: Icon, title, detail }) => (
        <div className={styles.item} key={title}>
          <span className={styles.icon}><Icon size={15} aria-hidden="true" /></span>
          <span className={styles.label}>
            <strong>{title}</strong>
            <small>{detail}</small>
          </span>
        </div>
      ))}
    </div>
  )
}

export default BannerFooter
