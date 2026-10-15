import { ArrowLeftRight, ArrowRight, CircleDollarSign, RefreshCw, Wallet } from 'lucide-react'
import { Link } from 'react-router-dom'
import BannerCard from '../BannerCard/BannerCard.jsx'
import BannerPhoto from '../BannerPhoto/BannerPhoto.jsx'
import swapPhoto from '../../assets/banner-photos/swap.jpg'
import styles from './SwapCenterBanner.module.css'

// Rates and product claims are illustrative placeholders until approved.
const SWAP = {
  eyebrow: 'BALANCE CONVERSION',
  title: 'Swap',
  accentTitle: ' Center.',
  description: 'Convert between eligible VE and SVE wallet balances.',
  sourceAsset: 'VE',
  destinationAsset: 'SVE',
  rate: 'Preview rate shown before confirmation',
  action: 'Open Swap Center',
}

const FEATURES = [
  { Icon: Wallet, tone: 'blue', title: 'Wallet Balances', text: 'Convert between VE and SVE.' },
  { Icon: RefreshCw, tone: 'cyan', title: 'Two-Way', text: 'Choose your conversion direction.' },
  { Icon: CircleDollarSign, tone: 'violet', title: 'Clear Rate', text: 'Review before you confirm.' },
]

function SwapIllustration() {
  return (
    <svg className={styles.art} viewBox="0 0 440 340" role="img" aria-label="VE and SVE balances connected by a conversion symbol">
      <defs>
        <linearGradient id="swap-ve" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#4b3a2b" />
          <stop offset="1" stopColor="#191a2c" />
        </linearGradient>
        <linearGradient id="swap-sve" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#284a79" />
          <stop offset="1" stopColor="#171b35" />
        </linearGradient>
        <linearGradient id="swap-card-gloss" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#fff" stopOpacity=".2" />
          <stop offset=".52" stopColor="#fff" stopOpacity=".035" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="swap-gold" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#ffe7a1" />
          <stop offset="1" stopColor="#b7803d" />
        </linearGradient>
        <linearGradient id="swap-cyan" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#b8f8ff" />
          <stop offset="1" stopColor="#388abf" />
        </linearGradient>
        <radialGradient id="swap-glow">
          <stop stopColor="#5278ed" stopOpacity=".28" />
          <stop offset="1" stopColor="#5278ed" stopOpacity="0" />
        </radialGradient>
        <filter id="swap-shadow" x="-35%" y="-40%" width="170%" height="190%">
          <feDropShadow dx="0" dy="9" stdDeviation="8" floodColor="#050918" floodOpacity=".55" />
        </filter>
      </defs>

      <ellipse cx="220" cy="178" rx="205" ry="150" fill="url(#swap-glow)" />
      <ellipse className={styles.orbit} cx="220" cy="174" rx="185" ry="110" transform="rotate(-14 220 174)" />
      <ellipse className={styles.orbitSoft} cx="220" cy="174" rx="162" ry="129" transform="rotate(18 220 174)" />

      <g className={styles.walletBack} filter="url(#swap-shadow)">
        <rect x="121" y="32" width="198" height="274" rx="24" fill="#131a31" stroke="#8da4e9" strokeOpacity=".56" strokeWidth="2" />
        <path d="M143 61h154" stroke="#c8d7ff" strokeOpacity=".2" />
        <text x="145" y="54" fill="#dce5ff" fontSize="10" fontWeight="700" letterSpacing="1.5">REWARD WALLET</text>
        <circle cx="280" cy="49" r="3" fill="#7694db" /><circle cx="291" cy="49" r="3" fill="#7694db" fillOpacity=".72" /><circle cx="302" cy="49" r="3" fill="#7694db" fillOpacity=".48" />
        <text x="145" y="91" fill="#aeb8d3" fontSize="10">Eligible balances</text>
        <rect x="143" y="101" width="154" height="53" rx="11" fill="#1b2341" stroke="#aebcff" strokeOpacity=".18" />
        <circle cx="164" cy="127" r="11" fill="#32416f" stroke="#aabaff" strokeOpacity=".5" />
        <path d="m164 119 2.5 5.5 6 .5-4.5 4 1.3 5.5-5.3-3-5.3 3 1.3-5.5-4.5-4 6-.5z" fill="#c4d5ff" />
        <rect x="183" y="121" width="64" height="6" rx="3" fill="#9fb4eb" fillOpacity=".55" />
        <rect x="183" y="133" width="42" height="4" rx="2" fill="#9fb4eb" fillOpacity=".27" />
        <rect x="257" y="121" width="25" height="8" rx="4" fill="#3c4d7a" />
        <rect x="143" y="244" width="154" height="43" rx="10" fill="#1b2341" stroke="#aebcff" strokeOpacity=".18" />
        <circle cx="164" cy="265" r="10" fill="#3c315f" stroke="#e7cb8d" strokeOpacity=".56" />
        <path d="m164 257 2.5 5.5 6 .5-4.5 4 1.3 5.5-5.3-3-5.3 3 1.3-5.5-4.5-4 6-.5z" fill="#f3d999" />
        <rect x="183" y="260" width="70" height="6" rx="3" fill="#d8c48e" fillOpacity=".62" />
        <path d="M269 265h15m-5-5 5 5-5 5" fill="none" stroke="#d8c48e" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <g className={styles.veCard} filter="url(#swap-shadow)">
        <path d="m33 113 26-21h111l25 22v103l-25 21H59l-26-22z" fill="url(#swap-ve)" stroke="#e8c982" strokeOpacity=".78" strokeWidth="2" />
        <path d="m39 115 23-18h101q18 0 25 18H39z" fill="url(#swap-card-gloss)" />
        <path d="M42 118h143" stroke="#ffe4a2" strokeOpacity=".16" />
        <text x="55" y="140" fill="#e9d194" fontSize="10" fontWeight="700" letterSpacing="1.2">VE</text>
        <text x="55" y="155" fill="#c3b58f" fontSize="8" letterSpacing=".7">REWARD BALANCE</text>
        <circle cx="151" cy="182" r="22" fill="#18192b" stroke="url(#swap-gold)" strokeWidth="2" />
        <circle cx="151" cy="182" r="16" fill="none" stroke="#f3d994" strokeOpacity=".5" />
        <path d="m151 169 3.4 8 8.6.8-6.5 5.6 1.9 8.5-7.4-4.5-7.4 4.5 1.9-8.5-6.5-5.6 8.6-.8z" fill="url(#swap-gold)" />
        <rect x="55" y="180" width="56" height="6" rx="3" fill="#ffe4aa" fillOpacity=".75" />
        <rect x="55" y="193" width="42" height="4" rx="2" fill="#d4c6a8" fillOpacity=".4" />
      </g>

      <g className={styles.sveCard} filter="url(#swap-shadow)">
        <path d="m250 113 25-21h111l26 22v103l-26 21H275l-25-22z" fill="url(#swap-sve)" stroke="#77c8f3" strokeOpacity=".82" strokeWidth="2" />
        <path d="m256 115 22-18h100q18 0 25 18H256z" fill="url(#swap-card-gloss)" />
        <path d="M259 118h143" stroke="#c4eaff" strokeOpacity=".18" />
        <text x="273" y="140" fill="#a6dcf7" fontSize="10" fontWeight="700" letterSpacing="1.2">SVE</text>
        <text x="273" y="155" fill="#a1b8ce" fontSize="8" letterSpacing=".7">REWARD BALANCE</text>
        <circle cx="369" cy="182" r="22" fill="#172039" stroke="url(#swap-cyan)" strokeWidth="2" />
        <circle cx="369" cy="182" r="16" fill="none" stroke="#a6e7ff" strokeOpacity=".5" />
        <path d="m369 169 3.4 8 8.6.8-6.5 5.6 1.9 8.5-7.4-4.5-7.4 4.5 1.9-8.5-6.5-5.6 8.6-.8z" fill="url(#swap-cyan)" />
        <rect x="273" y="180" width="56" height="6" rx="3" fill="#c8edff" fillOpacity=".74" />
        <rect x="273" y="193" width="42" height="4" rx="2" fill="#a7cce2" fillOpacity=".4" />
      </g>

      <g className={styles.swapControl}>
        <circle cx="220" cy="174" r="38" fill="#0e1830" stroke="#a7b3ff" strokeOpacity=".8" strokeWidth="2" />
        <circle cx="220" cy="174" r="30" fill="#202a51" stroke="#8ce0f1" strokeOpacity=".55" />
        <path d="M205 168a16 16 0 0 1 26-7l3 3m0-8v8h-8m9 10a16 16 0 0 1-26 7l-3-3m0 8v-8h8" fill="none" stroke="url(#swap-cyan)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <g className={styles.floatCoin}>
        <circle cx="68" cy="65" r="15" fill="url(#swap-gold)" stroke="#fff0bd" strokeOpacity=".8" />
        <text x="68" y="70" textAnchor="middle" fill="#68471f" fontSize="13" fontWeight="800">V</text>
      </g>
      <g className={styles.floatCoinSecond}>
        <circle cx="374" cy="72" r="13" fill="url(#swap-cyan)" stroke="#d2f7ff" strokeOpacity=".8" />
        <text x="374" y="77" textAnchor="middle" fill="#164365" fontSize="12" fontWeight="800">S</text>
      </g>
      <path className={styles.spark} d="m213 57 3 7 7 3-7 3-3 7-3-7-7-3 7-3zM221 259l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#d9c6ff" />
    </svg>
  )
}

function SwapCenterBanner() {
  return (
    <BannerCard className={styles.card} aria-labelledby="swap-banner-title">
      <div className={styles.main}>
        <div className={styles.copy}>
          <span className={styles.pill}><ArrowLeftRight size={15} aria-hidden="true" />{SWAP.eyebrow}</span>
          <h2 id="swap-banner-title" className={styles.title}>
            {SWAP.title}
            <span className={styles.grad}>{SWAP.accentTitle}</span>
          </h2>
          <p className={styles.text}>{SWAP.description}</p>
          <div className={styles.rate}>
            <span className={styles.asset}>{SWAP.sourceAsset}</span>
            <ArrowLeftRight size={15} aria-hidden="true" />
            <span className={styles.asset}>{SWAP.destinationAsset}</span>
            <strong>{SWAP.rate}</strong>
          </div>
          <Link to="/swap" className={styles.cta}>
            <span>{SWAP.action}</span>
            <ArrowRight size={18} aria-hidden="true" className={styles.arrow} />
          </Link>
        </div>
        <div className={styles.visual}>
          <BannerPhoto src={swapPhoto} alt="Cash and a calculator arranged for a currency conversion" caption="Convert with confidence." tone="swap" />
        </div>
      </div>
      <ul className={styles.strip}>
        {FEATURES.map(({ Icon, tone, title, text }) => (
          <li key={title} className={styles.feature}>
            <span className={`${styles.featureIcon} ${styles[tone]}`}><Icon size={18} aria-hidden="true" /></span>
            <span className={styles.featureBody}><strong>{title}</strong><small>{text}</small></span>
          </li>
        ))}
      </ul>
    </BannerCard>
  )
}

export default SwapCenterBanner
