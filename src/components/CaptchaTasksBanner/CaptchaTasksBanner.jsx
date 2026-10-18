import { ArrowRight, Clock3, Keyboard, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import BannerCard from '../BannerCard/BannerCard.jsx'
import BannerFooter from '../BannerCard/BannerFooter.jsx'
import BannerVisual from '../BannerVisual/BannerVisual.jsx'
import styles from './CaptchaTasksBanner.module.css'
import captchaArtwork from '../../../images/captcha-tasks-banner.png'

function CaptchaTasksBanner() {
  return (
    <BannerCard className={styles.card} aria-labelledby="captcha-banner-title">
      <div className={styles.main}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}><Keyboard size={14} aria-hidden="true" />CAPTCHA TASKS</span>
          <h2 id="captcha-banner-title" className={styles.title}>
            <span>Captcha</span> Tasks
          </h2>
          <p className={styles.text}>Complete available verification tasks accurately to qualify for VE rewards.</p>
          <Link to="/captcha" className={styles.cta}>
            Start Tasks
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <BannerVisual
          className={styles.visual}
          src={captchaArtwork}
          alt="Captcha verification interface with a security shield and a reward gift"
        >
          <span className={styles.artNote} aria-hidden="true">Illustrative interface · not a live task</span>
        </BannerVisual>
      </div>
      <BannerFooter
        label="Captcha task details"
        items={[
          { icon: Keyboard, title: 'Accuracy matters', detail: 'Follow each task instruction' },
          { icon: Clock3, title: 'Tasks vary', detail: 'Availability may change' },
          { icon: ShieldCheck, title: 'Preview only', detail: 'Artwork is not a live task' },
        ]}
      />
    </BannerCard>
  )
}

export default CaptchaTasksBanner
