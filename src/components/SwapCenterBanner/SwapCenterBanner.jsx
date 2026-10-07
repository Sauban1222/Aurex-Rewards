import RewardBanner from '../RewardBanner/RewardBanner.jsx'
import { swapFeature } from '../../data/bannerData.js'

function SwapCenterBanner({ onAction }) {
  const illustration = (
    <div className="swap-art">
      <svg className="swap-illustration" viewBox="0 0 440 280" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="swap-card-blue" x1="45" y1="59" x2="187" y2="198" gradientUnits="userSpaceOnUse">
            <stop stopColor="#243B64" />
            <stop offset="1" stopColor="#17233B" />
          </linearGradient>
          <linearGradient id="swap-card-violet" x1="261" y1="76" x2="398" y2="219" gradientUnits="userSpaceOnUse">
            <stop stopColor="#302A5E" />
            <stop offset="1" stopColor="#1B203B" />
          </linearGradient>
          <linearGradient id="swap-coin-cyan" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#A3F0F3" />
            <stop offset="1" stopColor="#3D9EC4" />
          </linearGradient>
          <linearGradient id="swap-coin-violet" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#D7C5FF" />
            <stop offset="1" stopColor="#8064D9" />
          </linearGradient>
          <linearGradient id="swap-ring" x1="156" y1="92" x2="280" y2="183" gradientUnits="userSpaceOnUse">
            <stop stopColor="#78D8E8" />
            <stop offset=".52" stopColor="#9BA7FF" />
            <stop offset="1" stopColor="#B79AFF" />
          </linearGradient>
          <linearGradient id="swap-wallet" x1="194" y1="112" x2="245" y2="164" gradientUnits="userSpaceOnUse">
            <stop stopColor="#405A87" />
            <stop offset="1" stopColor="#263756" />
          </linearGradient>
          <filter id="swap-shadow" x="12" y="35" width="418" height="221" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
            <feGaussianBlur in="SourceAlpha" stdDeviation="9" />
            <feOffset dy="9" />
            <feColorMatrix values="0 0 0 0 .02 0 0 0 0 .04 0 0 0 0 .12 0 0 0 .42 0" />
            <feBlend in2="SourceGraphic" result="shadow" />
            <feBlend in="SourceGraphic" in2="shadow" />
          </filter>
        </defs>

        <ellipse cx="220" cy="235" rx="185" ry="17" fill="#070E20" fillOpacity=".42" />
        <ellipse cx="220" cy="231" rx="151" ry="9" fill="#6DAFEA" fillOpacity=".1" />

        <path d="M54 141C73 76 127 57 183 80" stroke="#79CFE5" strokeOpacity=".35" strokeWidth="1.4" strokeDasharray="3 7" />
        <path d="M258 77c62-24 112 3 127 61" stroke="#AA93F4" strokeOpacity=".38" strokeWidth="1.4" strokeDasharray="3 7" />
        <path d="M61 176c35 46 83 50 124 25" stroke="#7DBEEB" strokeOpacity=".22" strokeWidth="1.2" />
        <path d="M258 204c51 17 91-4 117-45" stroke="#AA93F4" strokeOpacity=".25" strokeWidth="1.2" />

        <g filter="url(#swap-shadow)">
          <g transform="rotate(-5 105 145)">
            <rect x="35" y="91" width="137" height="111" rx="15" fill="url(#swap-card-blue)" stroke="#89CBEA" strokeOpacity=".45" />
            <path d="M36 107c0-8.837 7.163-16 16-16h105a15 15 0 0 1 15 15v8H36v-7Z" fill="#9BDCF0" fillOpacity=".09" />
            <rect x="47" y="104" width="24" height="24" rx="8" fill="#64B5D7" fillOpacity=".22" stroke="#8BD8EB" strokeOpacity=".4" />
            <circle cx="59" cy="116" r="6.5" stroke="url(#swap-coin-cyan)" strokeWidth="1.5" />
            <path d="M57 116h4m-2-2v4" stroke="#B8F3F0" strokeWidth="1.2" strokeLinecap="round" />
            <rect x="79" y="109" width="39" height="4" rx="2" fill="#D9EDFF" fillOpacity=".72" />
            <rect x="79" y="117" width="25" height="3" rx="1.5" fill="#A9C8E8" fillOpacity=".42" />
            <circle cx="146" cy="116" r="2" fill="#90D7EC" />
            <circle cx="153" cy="116" r="2" fill="#90D7EC" fillOpacity=".52" />
            <path d="M50 143h108" stroke="#D7E8FF" strokeOpacity=".12" />
            <circle cx="65" cy="166" r="13" fill="url(#swap-coin-cyan)" />
            <circle cx="65" cy="166" r="9.5" stroke="#E0FBFF" strokeOpacity=".64" />
            <path d="M65 160v12m-3-8h4a2 2 0 0 1 0 4h-3a2 2 0 0 0 0 4h5" stroke="#F2FFFF" strokeWidth="1.3" strokeLinecap="round" />
            <rect x="87" y="157" width="55" height="5" rx="2.5" fill="#E7F0FF" fillOpacity=".82" />
            <rect x="87" y="168" width="39" height="4" rx="2" fill="#B9C9E0" fillOpacity=".44" />
            <rect x="87" y="178" width="49" height="4" rx="2" fill="#B9C9E0" fillOpacity=".3" />
          </g>

          <g transform="rotate(5 337 145)">
            <rect x="268" y="91" width="137" height="111" rx="15" fill="url(#swap-card-violet)" stroke="#B7A3FF" strokeOpacity=".47" />
            <path d="M269 107c0-8.837 7.163-16 16-16h105a15 15 0 0 1 15 15v8H269v-7Z" fill="#D0BAFF" fillOpacity=".09" />
            <rect x="280" y="104" width="24" height="24" rx="8" fill="#A58AE8" fillOpacity=".2" stroke="#C4AEFF" strokeOpacity=".38" />
            <path d="m292 108 7 4v8l-7 4-7-4v-8l7-4Z" stroke="url(#swap-coin-violet)" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="m292 108 7 4-7 4-7-4 7-4Zm0 8v8" stroke="#E4D7FF" strokeWidth="1" strokeLinejoin="round" />
            <rect x="312" y="109" width="39" height="4" rx="2" fill="#E7DDFF" fillOpacity=".76" />
            <rect x="312" y="117" width="25" height="3" rx="1.5" fill="#C1B5E8" fillOpacity=".44" />
            <circle cx="379" cy="116" r="2" fill="#C8B3FF" />
            <circle cx="386" cy="116" r="2" fill="#C8B3FF" fillOpacity=".52" />
            <path d="M283 143h108" stroke="#E8DDFF" strokeOpacity=".12" />
            <circle cx="298" cy="166" r="13" fill="url(#swap-coin-violet)" />
            <circle cx="298" cy="166" r="9.5" stroke="#F0E8FF" strokeOpacity=".68" />
            <path d="m298 160 5 3v6l-5 3-5-3v-6l5-3Z" stroke="#FFF" strokeOpacity=".88" strokeWidth="1.2" strokeLinejoin="round" />
            <path d="m298 160 5 3-5 3-5-3 5-3Zm0 6v6" stroke="#FFF" strokeOpacity=".88" strokeWidth="1" strokeLinejoin="round" />
            <rect x="320" y="157" width="55" height="5" rx="2.5" fill="#EEE8FF" fillOpacity=".82" />
            <rect x="320" y="168" width="39" height="4" rx="2" fill="#CBC0E8" fillOpacity=".44" />
            <rect x="320" y="178" width="49" height="4" rx="2" fill="#CBC0E8" fillOpacity=".3" />
          </g>
        </g>

        <path d="M174 105a59 59 0 0 1 91 6" stroke="url(#swap-ring)" strokeWidth="3" strokeLinecap="round" />
        <path d="m260 102 7 9-11 1" stroke="#B4ADFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M266 171a59 59 0 0 1-91-6" stroke="url(#swap-ring)" strokeWidth="3" strokeLinecap="round" />
        <path d="m180 174-7-9 11-1" stroke="#8ADBE9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

        <g>
          <circle cx="220" cy="138" r="27" fill="#111D34" fillOpacity=".96" stroke="#A9B9FF" strokeOpacity=".42" />
          <circle cx="220" cy="138" r="22" fill="url(#swap-wallet)" stroke="#D0DDFF" strokeOpacity=".24" />
          <path d="M207 130a4 4 0 0 1 4-4h17a4 4 0 0 1 4 4v17a4 4 0 0 1-4 4h-17a4 4 0 0 1-4-4v-17Z" stroke="#D9E4FF" strokeWidth="1.5" />
          <path d="M207 132h24v5h-24m17 4h1" stroke="#D9E4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="225" cy="141" r="1.6" fill="#8BE0EB" />
        </g>

        <circle cx="89" cy="72" r="3" fill="#86DFEA" />
        <circle cx="333" cy="69" r="2.5" fill="#C4ABFF" />
        <circle cx="195" cy="61" r="2" fill="#E5D5AC" />
        <circle cx="236" cy="218" r="2.4" fill="#8FD9EC" />
        <circle cx="53" cy="207" r="2" fill="#B7A3FF" />
        <circle cx="392" cy="195" r="2" fill="#82D8E9" />
        <path d="m219 70 2.2 5.2 5.3 2.3-5.3 2.2-2.2 5.3-2.3-5.3-5.2-2.2 5.2-2.3 2.3-5.2Z" fill="#E3D3A9" fillOpacity=".9" />
        <path d="m244 197 1.7 4 4.1 1.8-4.1 1.7-1.7 4.1-1.8-4.1-4-1.7 4-1.8 1.8-4Z" fill="#B8A5FF" fillOpacity=".8" />
      </svg>
    </div>
  )

  return <RewardBanner feature={swapFeature} illustration={illustration} onAction={onAction} />
}

export default SwapCenterBanner