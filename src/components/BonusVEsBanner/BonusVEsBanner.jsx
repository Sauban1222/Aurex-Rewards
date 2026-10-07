import RewardBanner from '../RewardBanner/RewardBanner.jsx'
import { bonusFeature } from '../../data/bannerData.js'

function RewardCoin({ cx, cy, radius, fill, stroke = '#b9c9ff', opacity = 1 }) {
  return (
    <g transform={`translate(${cx} ${cy})`} opacity={opacity} filter="url(#bonus-shadow)">
      <circle r={radius} fill={fill} stroke={stroke} strokeWidth="1.5" />
      <circle r={radius * 0.78} fill="url(#bonus-coin-face)" stroke="rgba(255,255,255,.45)" strokeWidth="1" />
      <circle r={radius * 0.61} fill="none" stroke="rgba(255,255,255,.25)" strokeWidth=".8" />
      <path
        d={`M 0 ${-radius * 0.37} L ${radius * 0.25} 0 L 0 ${radius * 0.37} L ${-radius * 0.25} 0 Z`}
        fill="none"
        stroke="rgba(255,255,255,.88)"
        strokeWidth={Math.max(1.4, radius * 0.07)}
        strokeLinejoin="round"
      />
      <circle cy={radius * 0.48} r={radius * 0.045} fill="rgba(255,255,255,.8)" />
    </g>
  )
}

function BonusVEsBanner({ onAction }) {
  const illustration = (
    <div className="bonus-art">
      <svg
        className="bonus-illustration"
        viewBox="0 0 400 340"
        role="presentation"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="bonus-aura">
            <stop stopColor="#5f5cf6" stopOpacity=".34" />
            <stop offset=".58" stopColor="#2ca9e8" stopOpacity=".12" />
            <stop offset="1" stopColor="#131b35" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="bonus-vault" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#344c78" />
            <stop offset=".48" stopColor="#1c3156" />
            <stop offset="1" stopColor="#111c35" />
          </linearGradient>
          <linearGradient id="bonus-door" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#d9e8ff" stopOpacity=".64" />
            <stop offset=".35" stopColor="#7388ca" stopOpacity=".36" />
            <stop offset="1" stopColor="#262b58" stopOpacity=".82" />
          </linearGradient>
          <linearGradient id="bonus-coin-face" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#f8e2a4" />
            <stop offset=".45" stopColor="#d8b967" />
            <stop offset="1" stopColor="#9a7542" />
          </linearGradient>
          <linearGradient id="bonus-token-face" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#91edfa" />
            <stop offset="1" stopColor="#416be6" />
          </linearGradient>
          <linearGradient id="bonus-card" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#dce7ff" stopOpacity=".24" />
            <stop offset="1" stopColor="#7785df" stopOpacity=".1" />
          </linearGradient>
          <linearGradient id="bonus-badge" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#ffe9b1" />
            <stop offset="1" stopColor="#b98a48" />
          </linearGradient>
          <filter id="bonus-blur" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="12" />
          </filter>
          <filter id="bonus-shadow" x="-80%" y="-80%" width="260%" height="260%">
            <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#060a18" floodOpacity=".42" />
          </filter>
        </defs>

        <ellipse cx="207" cy="177" rx="163" ry="143" fill="url(#bonus-aura)" />
        <ellipse cx="200" cy="288" rx="112" ry="14" fill="#050a1a" opacity=".42" filter="url(#bonus-blur)" />
        <ellipse cx="199" cy="184" rx="116" ry="95" fill="none" stroke="#9aabff" strokeOpacity=".13" />
        <ellipse cx="199" cy="184" rx="137" ry="112" fill="none" stroke="#67dff1" strokeOpacity=".09" transform="rotate(-22 199 184)" />

        <g transform="rotate(10 304 141)" filter="url(#bonus-shadow)">
          <rect x="260" y="104" width="79" height="104" rx="11" fill="#0e1830" stroke="#8394d4" strokeOpacity=".48" />
          <rect x="266" y="110" width="67" height="92" rx="8" fill="url(#bonus-card)" stroke="#b7c6ff" strokeOpacity=".22" />
          <path d="M278 129h27M278 136h40M278 163h38M278 170h28" stroke="#d3dcff" strokeOpacity=".42" strokeWidth="3" strokeLinecap="round" />
          <rect x="278" y="146" width="24" height="8" rx="4" fill="#8bdff0" fillOpacity=".72" />
          <path d="M313 183h10" stroke="#f1d595" strokeOpacity=".72" strokeWidth="3" strokeLinecap="round" />
        </g>
        <g transform="rotate(-11 318 159)" opacity=".8" filter="url(#bonus-shadow)">
          <rect x="281" y="124" width="70" height="90" rx="10" fill="#25305d" stroke="#b49bff" strokeOpacity=".42" />
          <rect x="288" y="131" width="56" height="76" rx="7" fill="url(#bonus-card)" />
          <path d="M299 149h29M299 157h22M299 182h33" stroke="#d3dcff" strokeOpacity=".4" strokeWidth="3" strokeLinecap="round" />
        </g>

        <g filter="url(#bonus-shadow)">
          <path d="M112 168q0-15 15-18l98-11q11-1 19 7l32 28-14 82q-2 13-16 15l-111 10q-17 1-20-15z" fill="url(#bonus-vault)" stroke="#91a9ec" strokeOpacity=".62" strokeWidth="1.5" />
          <path d="m112 168 28 14 4 94-20-12q-12-4-12-16z" fill="#192747" stroke="#7f97da" strokeOpacity=".45" />
          <path d="m140 182 117-13 5 78-116 14z" fill="#111d37" stroke="#9aaff0" strokeOpacity=".44" />
          <path d="m142 187 109-12 3 66-107 12z" fill="#192844" stroke="#61c5ed" strokeOpacity=".42" />
          <path d="m141 186 111-12" stroke="#dce7ff" strokeOpacity=".28" strokeWidth="2" />
          <path d="m145 254 111-12" stroke="#7f9be0" strokeOpacity=".4" strokeWidth="1.2" />
          <circle cx="204" cy="207" r="48" fill="#0b142a" stroke="#9db6f0" strokeOpacity=".74" strokeWidth="3" />
          <circle cx="204" cy="207" r="39" fill="#172849" stroke="#58d8f2" strokeOpacity=".44" strokeWidth="1.5" />
          <circle cx="204" cy="207" r="30" fill="url(#bonus-aura)" />
          <path d="M178 207a26 26 0 0 1 48-14" fill="none" stroke="#83e6f1" strokeOpacity=".8" strokeWidth="2" strokeLinecap="round" />
        </g>

        <g transform="rotate(-13 253 184)" filter="url(#bonus-shadow)">
          <circle cx="253" cy="184" r="56" fill="url(#bonus-door)" stroke="#d9e5ff" strokeOpacity=".75" strokeWidth="2" />
          <circle cx="253" cy="184" r="47" fill="none" stroke="#c4d2ff" strokeOpacity=".49" strokeWidth="1.4" />
          <circle cx="253" cy="184" r="38" fill="#1b2c50" fillOpacity=".58" stroke="#86d9f0" strokeOpacity=".42" strokeWidth="1.4" />
          <circle cx="253" cy="184" r="12" fill="#a8bbec" fillOpacity=".43" stroke="#f0f4ff" strokeOpacity=".72" />
          <path d="M253 146v26M253 196v26M215 184h26M265 184h26" stroke="#e2eaff" strokeOpacity=".7" strokeWidth="4" strokeLinecap="round" />
          <circle cx="253" cy="134" r="2.5" fill="#fff" fillOpacity=".82" />
          <circle cx="303" cy="184" r="2.5" fill="#fff" fillOpacity=".82" />
          <circle cx="253" cy="234" r="2.5" fill="#fff" fillOpacity=".82" />
          <circle cx="203" cy="184" r="2.5" fill="#fff" fillOpacity=".82" />
        </g>

        <RewardCoin cx={194} cy={117} radius={27} fill="url(#bonus-coin-face)" stroke="#fff0c1" />
        <RewardCoin cx={315} cy={222} radius={19} fill="url(#bonus-token-face)" stroke="#a8f2ff" />
        <RewardCoin cx={90} cy={212} radius={22} fill="url(#bonus-coin-face)" stroke="#ffe7ad" opacity=".95" />
        <RewardCoin cx={226} cy={74} radius={15} fill="url(#bonus-token-face)" stroke="#b4f5ff" opacity=".94" />

        <g transform="rotate(12 335 87)" filter="url(#bonus-shadow)">
          <circle cx="335" cy="87" r="23" fill="#152340" stroke="#e4cb8b" strokeOpacity=".72" />
          <circle cx="335" cy="87" r="18" fill="url(#bonus-badge)" fillOpacity=".9" />
          <path d="m335 76 3.2 7.1 7.8.8-5.9 5.1 1.7 7.6-6.8-4-6.8 4 1.7-7.6-5.9-5.1 7.8-.8z" fill="#fff4d6" fillOpacity=".96" />
        </g>

        <g transform="rotate(-10 79 119)" filter="url(#bonus-shadow)">
          <rect x="59" y="99" width="40" height="40" rx="13" fill="#302c62" stroke="#b8a6ff" strokeOpacity=".7" />
          <text x="79" y="126" fill="#e8e2ff" fontFamily="Manrope, sans-serif" fontSize="24" fontWeight="700" textAnchor="middle">×</text>
        </g>

        <path d="m129 87 2.1 5.4 5.4 2.1-5.4 2.1-2.1 5.4-2.1-5.4-5.4-2.1 5.4-2.1z" fill="#b4a4ff" />
        <path d="m350 246 1.6 4.1 4.1 1.6-4.1 1.6-1.6 4.1-1.6-4.1-4.1-1.6 4.1-1.6z" fill="#f0d99e" opacity=".9" />
        <circle cx="105" cy="159" r="2" fill="#83e4f5" />
        <circle cx="286" cy="82" r="1.7" fill="#d0c0ff" />
        <circle cx="341" cy="192" r="1.7" fill="#9be8fa" />
        <circle cx="164" cy="75" r="1.4" fill="#f1d99e" />
      </svg>
    </div>
  )

  return <RewardBanner feature={bonusFeature} illustration={illustration} onAction={onAction} />
}

export default BonusVEsBanner
