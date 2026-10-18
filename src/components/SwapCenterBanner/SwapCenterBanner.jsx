import { ArrowRight, BadgeCheck, Info, RefreshCw } from 'lucide-react'
import { Link } from 'react-router-dom'
import BannerCard from '../BannerCard/BannerCard.jsx'
import BannerFooter from '../BannerCard/BannerFooter.jsx'
import BannerVisual from '../BannerVisual/BannerVisual.jsx'
import styles from './SwapCenterBanner.module.css'
import swapArtwork from '../../../images/swap-center-banner.png'

function SwapCenterBanner() {
  return (
    <BannerCard className={styles.card} aria-labelledby="swap-banner-title">
      <div className={styles.main}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}><RefreshCw size={14} aria-hidden="true" />BALANCE CONVERSION</span>
          <h2 id="swap-banner-title" className={styles.title}>
            <span>Swap</span> Center
          </h2>
          <p className={styles.text}>Convert between supported VE balances and review the details before confirming.</p>
          <Link to="/swap" className={styles.cta}>
            Open Swap Center
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <BannerVisual
          className={styles.visual}
          src={swapArtwork}
          alt="Illustration of VE and voucher balances being converted with swap arrows"
        >
          <span className={styles.artNote} aria-hidden="true">Illustrative balances · not live data</span>
        </BannerVisual>
      </div>
      <BannerFooter
        label="Swap details"
        items={[
          { icon: RefreshCw, title: 'Supported balances', detail: 'Available conversion options vary' },
          { icon: BadgeCheck, title: 'Review before confirming', detail: 'Check details before a swap' },
          { icon: Info, title: 'Illustrative rates', detail: 'Banner values are not live' },
        ]}
      />
    </BannerCard>
  )
}

export default SwapCenterBanner
