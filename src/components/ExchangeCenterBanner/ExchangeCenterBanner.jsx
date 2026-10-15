import { ArrowRight, BadgeCheck, Gift, PackageCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import BannerCard from '../BannerCard/BannerCard.jsx'
import BannerPhoto from '../BannerPhoto/BannerPhoto.jsx'
import rewardsPhoto from '../../assets/banner-photos/rewards.avif'
import styles from './ExchangeCenterBanner.module.css'

// Reward options and program claims are placeholders until approved.
const EXCHANGE = {
  eyebrow: 'REWARD REDEMPTION',
  title: 'Exchange VEs',
  accentTitle: ' for rewards.',
  description: 'Browse eligible reward options and choose how you would like to redeem.',
  catalogLabel: 'REWARD CATALOG',
  action: 'Browse rewards',
}

const REWARDS = [
  { Icon: Gift, tone: 'violet', label: 'Gift card category' },
  { Icon: Sparkles, tone: 'gold', label: 'Digital rewards' },
  { Icon: PackageCheck, tone: 'cyan', label: 'Other options' },
]

function ExchangeIllustration() {
  return (
    <svg className={styles.art} viewBox="0 0 440 340" role="img" aria-label="Illustrative preview of reward categories">
      <defs>
        <linearGradient id="exchange-wallet" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#30274f" />
          <stop offset="1" stopColor="#17192f" />
        </linearGradient>
        <linearGradient id="exchange-gift" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#c5acff" />
          <stop offset="1" stopColor="#6546be" />
        </linearGradient>
        <linearGradient id="exchange-gold" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#ffebac" />
          <stop offset="1" stopColor="#b77d3e" />
        </linearGradient>
        <linearGradient id="exchange-blue" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#9ae5f3" />
          <stop offset="1" stopColor="#397fae" />
        </linearGradient>
        <linearGradient id="exchange-gloss" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#fff" stopOpacity=".2" />
          <stop offset=".55" stopColor="#fff" stopOpacity=".035" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="exchange-halo">
          <stop stopColor="#8a6be0" stopOpacity=".26" />
          <stop offset="1" stopColor="#8a6be0" stopOpacity="0" />
        </radialGradient>
        <filter id="exchange-shadow" x="-35%" y="-40%" width="170%" height="190%">
          <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#060816" floodOpacity=".54" />
        </filter>
      </defs>

      <ellipse cx="224" cy="177" rx="205" ry="150" fill="url(#exchange-halo)" />
      <ellipse className={styles.orbit} cx="222" cy="174" rx="184" ry="109" transform="rotate(-15 222 174)" />
      <ellipse className={styles.orbitSoft} cx="222" cy="174" rx="158" ry="128" transform="rotate(19 222 174)" />

      <g className={styles.wallet} filter="url(#exchange-shadow)">
        <rect x="107" y="39" width="226" height="258" rx="24" fill="url(#exchange-wallet)" stroke="#ae99ee" strokeOpacity=".66" strokeWidth="2" />
        <path d="M129 43h177q20 0 20 20v15q-92 19-219 4V63q0-20 22-20Z" fill="url(#exchange-gloss)" opacity=".35" />
        <path d="M128 72h184" stroke="#e5dcff" strokeOpacity=".18" />
        <text x="132" y="61" fill="#ded4ff" fontSize="10" fontWeight="700" letterSpacing="1.4">REWARD WALLET</text>
        <circle cx="294" cy="57" r="3" fill="#bba7fb" /><circle cx="304" cy="57" r="3" fill="#bba7fb" fillOpacity=".65" /><circle cx="314" cy="57" r="3" fill="#bba7fb" fillOpacity=".4" />
        <text x="132" y="94" fill="#bdb7cf" fontSize="9">AVAILABLE REWARD OPTIONS</text>

        <g className={styles.optionCard}>
          <rect x="127" y="108" width="186" height="47" rx="11" fill="#211f3d" stroke="#b8a0ff" strokeOpacity=".44" />
          <rect x="137" y="117" width="30" height="29" rx="8" fill="#3d2e67" stroke="#c0aaff" strokeOpacity=".55" />
          <path d="M152 122v18m-8-13h16v11h-16zm4-4q0-5 4-5t4 5" fill="none" stroke="#e4d9ff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <text x="177" y="128" fill="#fff" fontSize="10" fontWeight="700">Gift card category</text>
          <text x="177" y="141" fill="#d0c9e2" fontSize="8.5">Preview only</text>
          <circle cx="295" cy="131" r="7" fill="#4c3f7d" stroke="#c3b1ff" strokeOpacity=".8" />
          <path d="m292 131 2 2 4-5" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        <g className={styles.optionCardSecond}>
          <rect x="127" y="164" width="186" height="47" rx="11" fill="#211f3d" stroke="#e0c479" strokeOpacity=".36" />
          <rect x="137" y="173" width="30" height="29" rx="8" fill="#51402a" stroke="#e2c579" strokeOpacity=".5" />
          <path d="m152 177 2.4 5 5.5.6-4 3.7 1.1 5.2-5-2.7-5 2.7 1.1-5.2-4-3.7 5.5-.6z" fill="url(#exchange-gold)" />
          <text x="177" y="184" fill="#fff" fontSize="10" fontWeight="700">Digital rewards</text>
          <text x="177" y="197" fill="#d0c9e2" fontSize="8.5">Browse categories</text>
          <circle cx="295" cy="187" r="7" fill="#3a3344" stroke="#d4bd7c" strokeOpacity=".72" />
          <path d="m292 187 2 2 4-5" fill="none" stroke="#f8e6b2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        <g className={styles.optionCardThird}>
          <rect x="127" y="220" width="186" height="47" rx="11" fill="#211f3d" stroke="#8ddced" strokeOpacity=".33" />
          <rect x="137" y="229" width="30" height="29" rx="8" fill="#244458" stroke="#8ddced" strokeOpacity=".48" />
          <rect x="144" y="236" width="16" height="13" rx="2" fill="none" stroke="#d5f9ff" strokeWidth="1.5" />
          <path d="M147 240h10m-10 4h7" stroke="#d5f9ff" strokeWidth="1.2" strokeLinecap="round" />
          <text x="177" y="240" fill="#fff" fontSize="10" fontWeight="700">Other options</text>
          <text x="177" y="253" fill="#d0c9e2" fontSize="8.5">Availability varies</text>
          <circle cx="295" cy="243" r="7" fill="#263d49" stroke="#8ddced" strokeOpacity=".68" />
          <path d="m292 243 2 2 4-5" fill="none" stroke="#d5f9ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>

      <g className={styles.giftBox} filter="url(#exchange-shadow)">
        <path d="m43 205 47-22 48 23-48 25z" fill="url(#exchange-gift)" stroke="#f1eaff" strokeOpacity=".82" />
        <path d="M43 205v49l47 25v-48z" fill="url(#exchange-gift)" stroke="#d5c5ff" strokeOpacity=".72" />
        <path d="m138 206v48l-48 25v-48z" fill="#593caa" stroke="#bba8ff" strokeOpacity=".7" />
        <path d="m49 207 40 20v43" fill="none" stroke="#fff" strokeOpacity=".22" strokeWidth="2" strokeLinecap="round" />
        <path d="m81 188 10-10 10 10-10 7z" fill="url(#exchange-gold)" stroke="#fff0c1" strokeOpacity=".8" />
        <path d="M86 192v84m9-79v79" stroke="url(#exchange-gold)" strokeWidth="6" />
        <path d="M91 188c-20-3-25-16-15-20 10-4 18 10 15 20Zm0 0c20-3 25-16 15-20-10-4-18 10-15 20Z" fill="none" stroke="url(#exchange-gold)" strokeWidth="4" />
      </g>

      <g className={styles.rewardSeal}>
        <circle cx="356" cy="220" r="32" fill="#17192f" stroke="url(#exchange-gold)" strokeWidth="2" />
        <circle cx="356" cy="220" r="24" fill="#2b2443" stroke="#efd48b" strokeOpacity=".58" />
        <path d="m356 202 5.2 10.8 12 .9-9.1 7.8 2.7 11.6-10.8-6.1-10.8 6.1 2.7-11.6-9.1-7.8 12-.9z" fill="url(#exchange-gold)" />
      </g>
      <g className={styles.coin}>
        <circle cx="63" cy="126" r="16" fill="url(#exchange-gold)" stroke="#fff1c7" strokeOpacity=".8" />
        <text x="63" y="132" textAnchor="middle" fill="#6a4920" fontSize="15" fontWeight="800">V</text>
      </g>
      <g className={styles.coinSecond}>
        <circle cx="371" cy="102" r="12" fill="url(#exchange-gift)" stroke="#e0d6ff" strokeOpacity=".82" />
        <path d="m371 94 2 5 5 .5-3.7 3.2 1.1 4.8-4.4-2.6-4.4 2.6 1.1-4.8-3.7-3.2 5-.5z" fill="#fff" />
      </g>
      <path className={styles.spark} d="m60 76 2.5 6.5 6.5 2.5-6.5 2.5L60 94l-2.5-6.5L51 84l6.5-2.5zM382 161l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#f2d88f" />
    </svg>
  )
}

function ExchangeCenterBanner() {
  return (
    <BannerCard className={styles.card} aria-labelledby="exchange-banner-title">
      <div className={styles.main}>
        <div className={styles.copy}>
          <span className={styles.pill}><Gift size={15} aria-hidden="true" />{EXCHANGE.eyebrow}</span>
          <h2 id="exchange-banner-title" className={styles.title}>
            {EXCHANGE.title}
            <span className={styles.grad}>{EXCHANGE.accentTitle}</span>
          </h2>
          <p className={styles.text}>{EXCHANGE.description}</p>
          <div className={styles.catalog}>
            <span className={styles.catalogIcon}><BadgeCheck size={15} aria-hidden="true" /></span>
            <span><strong>{EXCHANGE.catalogLabel}</strong><small>Preview of possible categories</small></span>
          </div>
          <Link to="/exchange" className={styles.cta}>
            <span>{EXCHANGE.action}</span>
            <ArrowRight size={18} aria-hidden="true" className={styles.arrow} />
          </Link>
        </div>
        <div className={styles.visual}>
          <BannerPhoto src={rewardsPhoto} alt="A selection of wrapped gifts ready to be redeemed" caption="Choose a reward that feels right." tone="exchange" />
        </div>
      </div>
      <ul className={styles.strip}>
        {REWARDS.map(({ Icon, tone, label }) => (
          <li key={label} className={styles.feature}>
            <span className={`${styles.featureIcon} ${styles[tone]}`}><Icon size={18} aria-hidden="true" /></span>
            <span className={styles.featureBody}><strong>{label}</strong><small>Illustrative category only.</small></span>
          </li>
        ))}
      </ul>
    </BannerCard>
  )
}

export default ExchangeCenterBanner
