import { ArrowRight, Info, Send, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import BannerCard from '../BannerCard/BannerCard.jsx'
import BannerPhoto from '../BannerPhoto/BannerPhoto.jsx'
import referralPhoto from '../../assets/banner-photos/referrals.jpg'
import styles from './ReferEarnBanner.module.css'

function ReferralIllustration() {
  return (
    <svg
      className={styles.art}
      viewBox="0 42 520 280"
      role="img"
      aria-labelledby="referral-illustration-title referral-illustration-description"
    >
      <title id="referral-illustration-title">Aurex referral invitation</title>
      <desc id="referral-illustration-description">You invite a friend, they join Aurex, and a reward is unlocked.</desc>
      <defs>
        <linearGradient id="referral-orbit" x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#249fe8" />
          <stop offset="1" stopColor="#8265ed" />
        </linearGradient>
        <linearGradient id="referral-ribbon" x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#f4d88d" />
          <stop offset="1" stopColor="#bb8c42" />
        </linearGradient>
        <linearGradient id="referral-box-front" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#596de4" />
          <stop offset="1" stopColor="#3444ae" />
        </linearGradient>
        <linearGradient id="referral-box-side" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#4e43bb" />
          <stop offset="1" stopColor="#292875" />
        </linearGradient>
        <linearGradient id="referral-box-lid" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#8975ff" />
          <stop offset="1" stopColor="#5146c3" />
        </linearGradient>
        <linearGradient id="referral-profile-blue" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#1c9fbf" />
          <stop offset="1" stopColor="#2453a3" />
        </linearGradient>
        <linearGradient id="referral-profile-violet" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#a477e8" />
          <stop offset="1" stopColor="#5944ae" />
        </linearGradient>
        <radialGradient id="referral-halo">
          <stop stopColor="#275bca" stopOpacity=".24" />
          <stop offset="1" stopColor="#275bca" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="referral-avatar-glow">
          <stop stopColor="#5cbfff" stopOpacity=".22" />
          <stop offset="1" stopColor="#5cbfff" stopOpacity="0" />
        </radialGradient>
        <clipPath id="referral-boy-clip">
          <circle cx="111" cy="150" r="49" />
        </clipPath>
        <clipPath id="referral-girl-clip">
          <circle cx="409" cy="201" r="43" />
        </clipPath>
        <filter id="referral-shadow" x="-30%" y="-30%" width="160%" height="175%">
          <feDropShadow dx="0" dy="10" stdDeviation="9" floodColor="#070b20" floodOpacity=".55" />
        </filter>
      </defs>

      <ellipse cx="275" cy="174" rx="235" ry="148" fill="url(#referral-halo)" />
      <ellipse
        className={styles.orbit}
        cx="264"
        cy="205"
        rx="96"
        ry="61"
        transform="rotate(-18 264 205)"
        fill="none"
        stroke="#8c9bff"
        strokeOpacity=".34"
        strokeWidth="1.4"
        strokeDasharray="3 7"
      />
      <path
        className={styles.connection}
        d="M111 168c43-97 101-111 158-66 33 26 51 75 108 62 37-8 58 10 76 37"
        fill="none"
        stroke="url(#referral-orbit)"
        strokeOpacity=".58"
        strokeWidth="2"
        strokeDasharray="5 8"
        strokeLinecap="round"
      />
      <path d="m371 158 10 5-10 4m54 29 11 4-9 7" fill="none" stroke="#79bcff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      <g className={styles.profileLeft} filter="url(#referral-shadow)">
        <circle cx="111" cy="150" r="57" fill="url(#referral-avatar-glow)" />
        <circle cx="111" cy="150" r="53" fill="url(#referral-profile-blue)" stroke="#80dcf4" strokeWidth="2" />
        <g clipPath="url(#referral-boy-clip)">
          <rect x="61" y="100" width="100" height="100" fill="url(#referral-profile-blue)" />
          <circle cx="86" cy="120" r="36" fill="#8de6f3" fillOpacity=".15" />
          <path d="M67 206c4-24 20-38 44-38s40 14 44 38v18H67z" fill="#182d51" />
          <path d="m97 169 14 13 14-13 9 8-9 10 10 27H87l10-27-9-10z" fill="#62d3e7" />
          <path d="M103 158h16v17l-8 8-8-8z" fill="#d69b77" />
          <path d="M91 128c0-17 8-28 21-28 15 0 23 12 21 29l-4 18c-2 12-9 20-18 20s-17-8-19-20z" fill="#f0bd96" />
          <path d="M89 131c-2-19 7-34 22-36 19-2 29 13 25 34l-8-9c-10 2-20-1-27-7-3 8-7 14-12 18z" fill="#17233f" />
          <path d="M98 139h.5m23 0h.5" fill="none" stroke="#3b2b2d" strokeWidth="3" strokeLinecap="round" />
          <path d="M104 150c4 4 10 4 14 0" fill="none" stroke="#9d5a55" strokeWidth="1.8" strokeLinecap="round" />
          <path d="m93 144-4 4 4 4m36-8 4 4-4 4" fill="#e8ad88" />
        </g>
        <circle cx="111" cy="150" r="49" fill="none" stroke="#d2f7ff" strokeOpacity=".76" strokeWidth="1.5" />
      </g>

      <g className={styles.profileRight} filter="url(#referral-shadow)">
        <circle cx="409" cy="201" r="50" fill="url(#referral-avatar-glow)" />
        <circle cx="409" cy="201" r="47" fill="url(#referral-profile-violet)" stroke="#d3b4ff" strokeWidth="2" />
        <g clipPath="url(#referral-girl-clip)">
          <rect x="365" y="157" width="88" height="88" fill="url(#referral-profile-violet)" />
          <circle cx="433" cy="175" r="31" fill="#f0d6ff" fillOpacity=".16" />
          <path d="M367 250c3-21 18-34 42-34s39 13 43 34v17h-85z" fill="#352d68" />
          <path d="m394 214 15 13 15-13 9 8-9 11 8 25h-46l8-25-9-11z" fill="#b99aff" />
          <path d="M402 207h15v16l-8 8-7-8z" fill="#bd8068" />
          <path d="M388 186c-1-17 7-29 21-29s23 11 23 28l-3 17c-2 13-9 21-20 21s-18-9-20-21z" fill="#e9b89a" />
          <path d="M386 187c-1-19 7-34 22-35 18-1 28 13 25 32l-7-5-5-13c-7 8-17 12-31 12z" fill="#342549" />
          <path d="M396 191h.5m22 0h.5" fill="none" stroke="#452e35" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M401 202c4 4 9 4 13 0" fill="none" stroke="#ad645b" strokeWidth="1.7" strokeLinecap="round" />
          <circle cx="389" cy="178" r="7" fill="#342549" />
          <circle cx="428" cy="178" r="7" fill="#342549" />
        </g>
        <circle cx="409" cy="201" r="43" fill="none" stroke="#f1e7ff" strokeOpacity=".78" strokeWidth="1.5" />
      </g>

      <g className={styles.invite} filter="url(#referral-shadow)">
        <rect x="190" y="61" width="161" height="45" rx="22.5" fill="#172b59" stroke="#4e79dc" strokeOpacity=".82" />
        <path d="m208 82 10-10a7 7 0 0 1 10 10l-5 5m-1-1-10 10a7 7 0 0 1-10-10l5-5m5 6 12-12" fill="none" stroke="#a9d7ff" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
        <text x="254" y="88" fill="#edf4ff" fontSize="13" fontWeight="650">Invite a friend</text>
      </g>

      <g className={styles.gift} filter="url(#referral-shadow)">
        <ellipse cx="264" cy="278" rx="94" ry="13" fill="#070c20" opacity=".62" />
        <path d="m192 194 72 36v48l-72-36z" fill="url(#referral-box-front)" stroke="#aebaff" strokeOpacity=".9" strokeWidth="1.5" />
        <path d="m336 194-72 36v48l72-36z" fill="url(#referral-box-side)" stroke="#c2b6ff" strokeOpacity=".92" strokeWidth="1.5" />
        <path d="m192 194 72 36 72-36" fill="none" stroke="#e0e4ff" strokeOpacity=".66" strokeWidth="2" />
        <path d="m164 168 100-48 100 48-100 50z" fill="url(#referral-box-lid)" stroke="#d8d1ff" strokeWidth="2" />
        <path d="m164 168 100 50v17l-100-48z" fill="#5e50d0" stroke="#b0a5ff" strokeOpacity=".92" strokeWidth="1.4" />
        <path d="m364 168-100 50v17l100-48z" fill="#443ba8" stroke="#c4b7ff" strokeOpacity=".9" strokeWidth="1.4" />
        <path d="m243 207 21 11v59l-21-10z" fill="url(#referral-ribbon)" />
        <path d="m264 218 21-11v60l-21 10z" fill="#d4a452" />
        <path d="m244 168 20-10 20 10-20 10z" fill="#ffe9ad" stroke="#fff6d8" strokeOpacity=".9" />
        <path d="m244 168 20 10v41l-20-10z" fill="#f4d88d" />
        <path d="m264 178 20-10v41l-20 10z" fill="#c88f42" />
        <path d="M260 158c-14-5-26-16-21-24 6-10 23 0 27 18 4-18 21-28 27-18 5 8-7 19-21 24z" fill="#f4d88d" stroke="#fff0c5" strokeWidth="1.8" />
        <path d="M260 154c-9-5-15-12-12-16 4-5 12 1 16 12m0 4c9-5 15-12 12-16-4-5-12 1-16 12" fill="none" stroke="#fff4d1" strokeOpacity=".92" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="264" cy="158" rx="8" ry="6" fill="#ffe8a6" stroke="#fff7dd" strokeWidth="1.2" />
        <path className={styles.giftSheen} d="m181 169 73 37m-59-43 54 28" fill="none" stroke="#e1dcff" strokeOpacity=".86" strokeWidth="2.2" strokeLinecap="round" />
      </g>

      <g className={styles.rewardCoin}>
        <circle cx="169" cy="239" r="17" fill="#d8b86d" stroke="#f5e6b7" strokeOpacity=".85" />
        <circle cx="169" cy="239" r="12" fill="none" stroke="#fff4d2" strokeOpacity=".52" />
        <text x="169" y="245" textAnchor="middle" fill="#46371e" fontSize="15" fontWeight="800">A</text>
      </g>
      <g className={styles.rewardCoinSecond}>
        <circle cx="363" cy="113" r="14" fill="#c99f55" stroke="#f5e6b7" strokeOpacity=".82" />
        <text x="363" y="118" textAnchor="middle" fill="#46371e" fontSize="12" fontWeight="800">A</text>
      </g>
      <circle className={styles.spark} cx="180" cy="94" r="3" fill="#a9c8ff" />
      <circle className={styles.sparkSecond} cx="350" cy="274" r="3" fill="#b59aff" />

      <g className={styles.joined}>
        <rect x="160" y="286" width="208" height="31" rx="15.5" fill="#142b45" stroke="#3d8bc0" strokeOpacity=".7" />
        <circle cx="180" cy="301.5" r="9" fill="#287ca9" stroke="#82dafa" strokeWidth="1" />
        <path d="m176 301 3 3 5-6" fill="none" stroke="#effcff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <text x="198" y="305" fill="#e6f4ff" fontSize="9.5" fontWeight="650">Friend joins · reward unlocks</text>
      </g>
    </svg>
  )
}

export default function ReferEarnBanner() {
  return (
    <BannerCard className={styles.card} aria-labelledby="refer-title">
      <div className={styles.main}>
        <div className={styles.copy}>
          <span className={styles.pill}><Users size={16} aria-hidden="true" />REFER &amp; EARN</span>
          <h2 id="refer-title" className={styles.title}>
            Refer Friends,
            <span className={styles.grad}> Earn Rewards</span>
          </h2>
          <p className={styles.text}>Your friend gets 200 VEs. You get 50 VEs when they qualify, plus 20% whenever they earn eligible VEs.</p>
          <div className={styles.rewardSplit} aria-label="Referral rewards: your friend gets 200 VEs when eligible; you get 50 VEs when they qualify, plus 20% of each eligible VE earning">
            <div className={styles.reward}>
              <span>FOR YOUR FRIEND</span>
              <strong>200 <small>VEs</small></strong>
              <p>One-time reward when eligible</p>
            </div>
            <div className={styles.reward}>
              <span>FOR YOU</span>
              <div className={styles.rewardValue}>
                <strong>50 <small>VEs</small></strong>
                <span>+ 20%</span>
              </div>
              <p>Every time they earn eligible VEs</p>
            </div>
          </div>
          <div className={styles.actions}>
            <Link to="/refer" className={styles.cta}>
              <Send size={17} aria-hidden="true" />
              <span>Invite Friends</span>
              <ArrowRight size={17} aria-hidden="true" className={styles.arrow} />
            </Link>
            <Link to="/refer#how-it-works" className={styles.ghost}>
              <Info size={17} aria-hidden="true" />
              <span>How It Works</span>
            </Link>
          </div>
          <p className={styles.note}><Info size={14} aria-hidden="true" />Preview only. Eligibility and program terms apply.</p>
        </div>
        <div className={styles.visual}>
          <BannerPhoto src={referralPhoto} alt="Friends sharing a phone and exploring something together" caption="Invite a friend. Earn together." tone="referral" />
        </div>
      </div>
    </BannerCard>
  )
}
