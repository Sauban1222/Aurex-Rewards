import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import BannerCard from '../BannerCard/BannerCard.jsx'
import BannerPhoto from '../BannerPhoto/BannerPhoto.jsx'
import captchaPhoto from '../../assets/banner-photos/captcha.png'
import styles from './CaptchaTasksBanner.module.css'

// Reward values and program claims are placeholders until approved.
const CAPTCHA = {
  eyebrow: 'CAPTCHA TASKS',
  title: 'Solve Captchas.',
  accentTitle: ' Earn VEs.',
  description: 'Preview word tasks and review reward details.',
  reward: 'Task preview',
  rewardDetail: 'Reward details are shown before starting.',
  action: 'Start a task',
}

const FEATURES = [
  { Icon: Zap, tone: 'violet', title: 'Quick Task', text: 'A simple verification.' },
  { Icon: ShieldCheck, tone: 'cyan', title: 'Accuracy First', text: 'Follow each prompt.' },
  { Icon: CheckCircle2, tone: 'gold', title: 'Verified', text: 'Results are checked.' },
]

function CaptchaIllustration() {
  return (
    <svg className={styles.art} viewBox="0 0 440 340" role="img" aria-label="Illustrative task preview with selectable word tiles">
      <defs>
        <linearGradient id="captcha-panel" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#342d77" />
          <stop offset="1" stopColor="#131a39" />
        </linearGradient>
        <linearGradient id="captcha-screen" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#f1f7ff" />
          <stop offset=".55" stopColor="#dcecff" />
          <stop offset="1" stopColor="#aebcda" />
        </linearGradient>
        <linearGradient id="captcha-screen-glare" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#fff" stopOpacity=".72" />
          <stop offset=".55" stopColor="#fff" stopOpacity=".12" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="captcha-gem" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#b7a0ff" />
          <stop offset=".55" stopColor="#7c5ce8" />
          <stop offset="1" stopColor="#3d2a9e" />
        </linearGradient>
        <linearGradient id="captcha-gold" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#fff0c2" />
          <stop offset="1" stopColor="#c89043" />
        </linearGradient>
        <radialGradient id="captcha-halo">
          <stop stopColor="#8067eb" stopOpacity=".24" />
          <stop offset="1" stopColor="#8067eb" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="232" cy="185" rx="206" ry="155" fill="url(#captcha-halo)" />
      <ellipse className={styles.orbit} cx="226" cy="175" rx="184" ry="104" transform="rotate(-18 226 175)" />
      <ellipse className={styles.orbitSoft} cx="226" cy="175" rx="166" ry="127" transform="rotate(24 226 175)" />

      <g className={styles.float}>
        <rect x="108" y="45" width="236" height="192" rx="25" fill="url(#captcha-panel)" stroke="#b7a5ff" strokeOpacity=".68" strokeWidth="2" />
        <path d="M132 50h188q13 0 13 13v6q-92 17-201 5z" fill="url(#captcha-screen-glare)" opacity=".34" />
        <rect x="125" y="61" width="201" height="83" rx="13" fill="url(#captcha-screen)" stroke="#f3ecff" strokeOpacity=".7" />
        <path d="M137 65h166q8 0 8 8v7q-78 12-174 2z" fill="url(#captcha-screen-glare)" opacity=".45" />
        <text x="139" y="76" fill="#302952" fontSize="8" fontWeight="700" letterSpacing=".4">TASK PREVIEW · SELECT A WORD</text>
        <rect x="137" y="83" width="57" height="23" rx="6" fill="#d4ccff" stroke="#6554c8" strokeWidth="1.2" />
        <rect x="197" y="83" width="57" height="23" rx="6" fill="#f6f4ff" stroke="#938daf" strokeOpacity=".55" />
        <rect x="257" y="83" width="57" height="23" rx="6" fill="#f6f4ff" stroke="#938daf" strokeOpacity=".55" />
        <rect x="137" y="112" width="57" height="23" rx="6" fill="#f6f4ff" stroke="#938daf" strokeOpacity=".55" />
        <rect x="197" y="112" width="57" height="23" rx="6" fill="#d4ccff" stroke="#6554c8" strokeWidth="1.2" />
        <rect x="257" y="112" width="57" height="23" rx="6" fill="#f6f4ff" stroke="#938daf" strokeOpacity=".55" />
        <text x="165.5" y="98" textAnchor="middle" fill="#292044" fontSize="8" fontWeight="700">Python</text>
        <text x="225.5" y="98" textAnchor="middle" fill="#413c58" fontSize="8" fontWeight="600">Chair</text>
        <text x="285.5" y="98" textAnchor="middle" fill="#413c58" fontSize="8" fontWeight="600">Java</text>
        <text x="165.5" y="127" textAnchor="middle" fill="#413c58" fontSize="8" fontWeight="600">Apple</text>
        <text x="225.5" y="127" textAnchor="middle" fill="#292044" fontSize="8" fontWeight="700">React</text>
        <text x="285.5" y="127" textAnchor="middle" fill="#413c58" fontSize="8" fontWeight="600">Car</text>

        <rect x="127" y="158" width="161" height="51" rx="13" fill="#0c1028" stroke="#8f84d9" strokeOpacity=".75" strokeWidth="2" />
        <text x="143" y="178" fill="#b9b3da" fontSize="7" fontWeight="700" letterSpacing=".8">TASK STATUS</text>
        <text x="143" y="195" fill="#f1edff" fontSize="11" fontWeight="600">Ready to review</text>
        <rect x="296" y="157" width="36" height="53" rx="11" fill="#386fc0" stroke="#a9d4ff" strokeWidth="2" />
        <path d="m306 183 7 7 12-15" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />

        <path d="m91 247 22-20h235l22 20q4 7-8 10H99q-12-3-8-10Z" fill="#292650" stroke="#c5d5f2" strokeOpacity=".62" strokeWidth="2" />
        <path d="m126 236 208 0-13 8H139z" fill="#151934" stroke="#b0a5ef" strokeOpacity=".48" />
        <g fill="#7970a8" fillOpacity=".9">
          <rect x="145" y="239" width="17" height="4" rx="2" /><rect x="166" y="239" width="17" height="4" rx="2" /><rect x="187" y="239" width="17" height="4" rx="2" /><rect x="208" y="239" width="17" height="4" rx="2" /><rect x="229" y="239" width="17" height="4" rx="2" /><rect x="250" y="239" width="17" height="4" rx="2" /><rect x="271" y="239" width="17" height="4" rx="2" /><rect x="292" y="239" width="17" height="4" rx="2" />
          <rect x="158" y="246" width="17" height="4" rx="2" /><rect x="179" y="246" width="17" height="4" rx="2" /><rect x="200" y="246" width="17" height="4" rx="2" /><rect x="221" y="246" width="17" height="4" rx="2" /><rect x="242" y="246" width="17" height="4" rx="2" /><rect x="263" y="246" width="17" height="4" rx="2" /><rect x="284" y="246" width="17" height="4" rx="2" />
        </g>
        <path d="M186 257h79" stroke="#aaa0e2" strokeOpacity=".55" strokeWidth="2" strokeLinecap="round" />
      </g>

      <g className={styles.gemLeft}>
        <path d="m61 179 17-22 27 2 14 21-26 35z" fill="url(#captcha-gem)" stroke="#d2c6ff" strokeOpacity=".78" strokeWidth="2" />
        <path d="m61 179 31 1 27 0m-41-23 14 23 12 35m15-56-27 21-14 20" fill="none" stroke="#d8caff" strokeOpacity=".5" strokeWidth="1.5" />
      </g>
      <g className={styles.gemRight}>
        <path d="m354 207 14-21 25 2 14 21-26 31z" fill="url(#captcha-gem)" stroke="#d2c6ff" strokeOpacity=".78" strokeWidth="2" />
        <path d="m354 207 27 2 26 0m-39-23 13 23 12 31m13-52-26 21-14 20" fill="none" stroke="#d8caff" strokeOpacity=".5" strokeWidth="1.5" />
      </g>

      <g className={styles.shield}>
        <circle cx="350" cy="94" r="27" fill="#191d45" stroke="#9e8df3" strokeOpacity=".8" strokeWidth="2" />
        <path d="m350 77 14 6v11c0 10-6 17-14 21-8-4-14-11-14-21V83z" fill="#42b8cf" stroke="#c2f7ff" strokeWidth="1.5" />
        <path d="m344 94 5 5 9-11" fill="none" stroke="#112e4b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g className={styles.spark}>
        <path d="m70 103 3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="#d8caff" />
        <path d="m386 128 2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#ffd987" />
        <circle cx="112" cy="86" r="3" fill="url(#captcha-gold)" />
        <circle cx="347" cy="271" r="3" fill="#a897ff" />
      </g>
    </svg>
  )
}

function CaptchaTasksBanner() {
  return (
    <BannerCard className={styles.card} aria-labelledby="captcha-banner-title">
      <div className={styles.main}>
        <div className={styles.copy}>
          <span className={styles.pill}><ShieldCheck size={15} aria-hidden="true" />{CAPTCHA.eyebrow}</span>
          <h2 id="captcha-banner-title" className={styles.title}>
            {CAPTCHA.title}
            <span className={styles.grad}>{CAPTCHA.accentTitle}</span>
          </h2>
          <p className={styles.text}>{CAPTCHA.description}</p>
          <div className={styles.reward}>
            <span className={styles.rewardMark} aria-hidden="true">V</span>
            <strong>{CAPTCHA.reward}</strong>
            <span>{CAPTCHA.rewardDetail}</span>
          </div>
          <Link to="/captcha" className={styles.cta}>
            <span>{CAPTCHA.action}</span>
            <ArrowRight size={18} aria-hidden="true" className={styles.arrow} />
          </Link>
        </div>
        <div className={styles.visual}>
          <BannerPhoto src={captchaPhoto} alt="A person completing a task on a laptop" caption="Focused tasks. Clear progress." tone="captcha" />
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

export default CaptchaTasksBanner
