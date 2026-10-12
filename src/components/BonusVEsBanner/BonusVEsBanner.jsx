import { ArrowRight, CalendarCheck, CheckCircle2, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import BannerCard from '../BannerCard/BannerCard.jsx'
import styles from './BonusVEsBanner.module.css'

// Reward values and program claims are placeholders until approved.
const BONUS = {
  eyebrow: 'BONUS OPPORTUNITIES',
  title: 'Boost Your',
  accentTitle: ' VE Balance.',
  description: 'Complete eligible activities and discover opportunities to earn additional VEs.',
  action: 'Explore bonuses',
}

const FEATURES = [
  { Icon: CalendarCheck, tone: 'violet', title: 'Daily Check-in', text: 'Stay active with eligible tasks.' },
  { Icon: Users, tone: 'cyan', title: 'Invite Friends', text: 'Share your referral details.' },
  { Icon: CheckCircle2, tone: 'gold', title: 'Complete Tasks', text: 'Check progress in your wallet.' },
]

function BonusIllustration() {
  return (
    <svg className={styles.art} viewBox="0 0 440 340" role="img" aria-label="Daily tasks and community activities lead to a bonus VE reward">
      <defs>
        <radialGradient id="bonus-halo">
          <stop stopColor="#dbb86e" stopOpacity=".28" />
          <stop offset=".55" stopColor="#7860e3" stopOpacity=".16" />
          <stop offset="1" stopColor="#161827" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="bonus-panel" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#282443" />
          <stop offset="1" stopColor="#151a33" />
        </linearGradient>
        <linearGradient id="bonus-card" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#302d5d" />
          <stop offset="1" stopColor="#1b203c" />
        </linearGradient>
        <linearGradient id="bonus-gold" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#fff0b9" />
          <stop offset=".48" stopColor="#e4bc67" />
          <stop offset="1" stopColor="#a77335" />
        </linearGradient>
        <linearGradient id="bonus-violet" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#ad99ff" />
          <stop offset="1" stopColor="#5740ba" />
        </linearGradient>
        <linearGradient id="bonus-vault" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#33365d" />
          <stop offset=".55" stopColor="#20243f" />
          <stop offset="1" stopColor="#12172d" />
        </linearGradient>
        <filter id="bonus-shadow" x="-40%" y="-40%" width="180%" height="190%">
          <feDropShadow dx="0" dy="8" stdDeviation="7" floodColor="#050815" floodOpacity=".55" />
        </filter>
      </defs>

      <ellipse cx="229" cy="180" rx="198" ry="150" fill="url(#bonus-halo)" />
      <ellipse className={styles.orbit} cx="226" cy="174" rx="179" ry="106" transform="rotate(-15 226 174)" />
      <ellipse className={styles.orbitSoft} cx="226" cy="174" rx="157" ry="125" transform="rotate(19 226 174)" />

      <g className={styles.activityCard} filter="url(#bonus-shadow)">
        <rect x="34" y="77" width="145" height="56" rx="13" fill="url(#bonus-card)" stroke="#a89afb" strokeOpacity=".55" />
        <rect x="46" y="90" width="29" height="29" rx="8" fill="#25254d" stroke="#9f91ee" strokeOpacity=".6" />
        <path d="M54 97h13v15H54zM57 94h7M57 102h7M57 107h5" fill="none" stroke="#c9beff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <text x="83" y="99" fill="#fff" fontSize="10.5" fontWeight="700">Daily Check-in</text>
        <text x="83" y="115" fill="#b9b4d3" fontSize="9">Stay active</text>
        <circle cx="163" cy="105" r="9" fill="#4358bd" stroke="#91a9ff" strokeOpacity=".75" />
        <path d="m159 105 3 3 5-6" fill="none" stroke="#e4edff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <g className={styles.activityCardSecond} filter="url(#bonus-shadow)">
        <rect x="22" y="146" width="157" height="56" rx="13" fill="url(#bonus-card)" stroke="#a89afb" strokeOpacity=".48" />
        <rect x="34" y="159" width="29" height="29" rx="8" fill="#25254d" stroke="#9f91ee" strokeOpacity=".54" />
        <circle cx="44" cy="169" r="4" fill="#b9aaff" /><circle cx="54" cy="169" r="4" fill="#8874e1" />
        <path d="M38 183q1-9 6-9t6 9m1 0q1-9 6-9t6 9" fill="none" stroke="#c9beff" strokeWidth="1.5" strokeLinecap="round" />
        <text x="71" y="168" fill="#fff" fontSize="10.5" fontWeight="700">Invite Friends</text>
        <text x="71" y="184" fill="#b9b4d3" fontSize="9">Grow together</text>
        <circle cx="162" cy="174" r="9" fill="#4358bd" stroke="#91a9ff" strokeOpacity=".7" />
        <path d="m158 174 3 3 5-6" fill="none" stroke="#e4edff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <g className={styles.activityCardThird} filter="url(#bonus-shadow)">
        <rect x="35" y="215" width="148" height="56" rx="13" fill="url(#bonus-card)" stroke="#a89afb" strokeOpacity=".42" />
        <rect x="47" y="228" width="29" height="29" rx="8" fill="#25254d" stroke="#9f91ee" strokeOpacity=".5" />
        <path d="M53 250v-8l5-4 4 2 5-7M63 233h4v4" fill="none" stroke="#9fc9ff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <text x="84" y="237" fill="#fff" fontSize="10.5" fontWeight="700">Complete Tasks</text>
        <text x="84" y="253" fill="#b9b4d3" fontSize="9">Track your progress</text>
        <circle cx="166" cy="243" r="9" fill="#4358bd" stroke="#91a9ff" strokeOpacity=".65" />
        <path d="m162 243 3 3 5-6" fill="none" stroke="#e4edff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <path className={styles.flow} d="M184 105c32 4 37 31 54 43m-54 26c26 0 32 0 47 2m-48 66c34-8 44-33 59-46" fill="none" stroke="#9e91ff" strokeOpacity=".7" strokeWidth="2" strokeDasharray="4 6" strokeLinecap="round" />
      <path d="m231 141 9 6-10 2m1 17 10 1-9 6m1 38 9-4-2 10" fill="none" stroke="#c3b6ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      <g className={styles.vault} filter="url(#bonus-shadow)">
        <path d="m233 236 42-24 123 0 28 24-12 61q-2 11-15 13H253q-14-2-16-15z" fill="url(#bonus-vault)" stroke="#9e91f1" strokeOpacity=".7" strokeWidth="2" />
        <path d="m244 237 31-17 112 0 22 18-10 47q-2 8-11 9H260q-10-2-11-11z" fill="#191d34" stroke="#7f78c5" strokeOpacity=".65" />
        <path d="M261 251h137" stroke="#e4c77d" strokeOpacity=".56" strokeWidth="2" />
        <circle cx="329" cy="259" r="39" fill="#11172c" stroke="url(#bonus-gold)" strokeWidth="5" />
        <circle cx="329" cy="259" r="31" fill="#242440" stroke="#f6d889" strokeOpacity=".55" strokeWidth="1.5" />
        <text x="329" y="253" textAnchor="middle" fill="#eac979" fontSize="10" fontWeight="700" letterSpacing="1.5">BONUS</text>
        <text x="329" y="273" textAnchor="middle" fill="#fff1c5" fontSize="20" fontWeight="800">VE</text>
        <path d="M251 300h154q-4 14-18 14H270q-14 0-19-14Z" fill="#242640" stroke="#8f83e1" strokeOpacity=".62" />
        <path d="m320 307 9-10 9 10" fill="none" stroke="#f1d489" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <g className={styles.rewardCoin}>
        <circle cx="296" cy="177" r="22" fill="url(#bonus-gold)" stroke="#fff0c6" strokeWidth="1.5" />
        <circle cx="296" cy="177" r="16" fill="none" stroke="#fff5da" strokeOpacity=".7" />
        <text x="296" y="183" textAnchor="middle" fill="#714a20" fontSize="17" fontWeight="800">V</text>
      </g>
      <g className={styles.rewardCoinSecond}>
        <circle cx="385" cy="110" r="15" fill="url(#bonus-violet)" stroke="#d7cbff" strokeOpacity=".8" />
        <text x="385" y="115" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800">V</text>
      </g>
      <path className={styles.spark} d="m277 91 3 8 8 3-8 3-3 8-3-8-8-3 8-3zM405 179l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#f4d98f" />
    </svg>
  )
}

function BonusVEsBanner() {
  return (
    <BannerCard className={styles.card} aria-labelledby="bonus-banner-title">
      <div className={styles.main}>
        <div className={styles.copy}>
          <span className={styles.pill}><CalendarCheck size={15} aria-hidden="true" />{BONUS.eyebrow}</span>
          <h2 id="bonus-banner-title" className={styles.title}>
            {BONUS.title}
            <span className={styles.grad}>{BONUS.accentTitle}</span>
          </h2>
          <p className={styles.text}>{BONUS.description}</p>
          <Link to="/bonus" className={styles.cta}>
            <span>{BONUS.action}</span>
            <ArrowRight size={18} aria-hidden="true" className={styles.arrow} />
          </Link>
        </div>
        <div className={styles.visual}>
          <BonusIllustration />
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

export default BonusVEsBanner
