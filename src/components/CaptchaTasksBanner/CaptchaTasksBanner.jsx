import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import BannerCard from '../BannerCard/BannerCard.jsx'
import styles from './CaptchaTasksBanner.module.css'

// Reward values and program claims are placeholders until approved.
const CAPTCHA = {
  eyebrow: 'CAPTCHA TASKS',
  title: 'Solve Captchas.',
  accentTitle: ' Earn VEs.',
  description: 'Complete two daily verification tasks and earn rewards for accurate selections.',
  reward: '40 VEs each',
  rewardDetail: 'Preview · up to 80 VEs/day',
  action: 'Start a task',
}

const FEATURES = [
  { Icon: Zap, tone: 'violet', title: 'Quick Task', text: 'A simple verification.' },
  { Icon: ShieldCheck, tone: 'cyan', title: 'Accuracy First', text: 'Follow each prompt.' },
  { Icon: CheckCircle2, tone: 'gold', title: 'Verified', text: 'Results are checked.' },
]

function CaptchaIllustration() {
  return (
    <svg className={styles.art} viewBox="0 0 440 340" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="captcha-panel" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#342d77" />
          <stop offset="1" stopColor="#131a39" />
        </linearGradient>
        <linearGradient id="captcha-screen" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#e7e1ff" />
          <stop offset="1" stopColor="#aca5d7" />
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
        <rect x="125" y="61" width="201" height="83" rx="13" fill="url(#captcha-screen)" stroke="#f3ecff" strokeOpacity=".7" />
        <path d="M139 77h174M139 127h174" stroke="#4c456d" strokeOpacity=".17" />
        <path d="M150 68v68M183 68v68M217 68v68M252 68v68M287 68v68" stroke="#4c456d" strokeOpacity=".1" />
        <text x="225" y="116" textAnchor="middle" fill="#211a3b" fontSize="41" fontWeight="800" letterSpacing="4">K7M4</text>
        <path d="m142 94 168 13M151 127l137-44M138 114l171-29" stroke="#312949" strokeOpacity=".18" strokeWidth="1.5" />

        <rect x="127" y="158" width="161" height="51" rx="13" fill="#0c1028" stroke="#8f84d9" strokeOpacity=".75" strokeWidth="2" />
        <text x="146" y="190" fill="#f1edff" fontSize="22" fontWeight="600" letterSpacing="3">K7M4</text>
        <path d="M207 174v21" stroke="#bbaaff" strokeWidth="2" />
        <rect x="296" y="157" width="36" height="53" rx="11" fill="#7258da" stroke="#c3b4ff" strokeWidth="2" />
        <path d="m306 183 7 7 12-15" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />

        <path d="m91 247 22-20h235l22 20q4 7-8 10H99q-12-3-8-10Z" fill="#292650" stroke="#aaa0e2" strokeOpacity=".74" strokeWidth="2" />
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
          <CaptchaIllustration />
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
