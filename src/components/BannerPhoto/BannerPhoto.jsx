import styles from './BannerPhoto.module.css'

function BannerPhoto({ src, alt, caption, tone }) {
  return (
    <figure className={`${styles.frame} ${styles[tone]}`}>
      <img className={styles.photo} src={src} alt={alt} loading="lazy" />
      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
  )
}

export default BannerPhoto
