import RewardBanner from '../RewardBanner/RewardBanner.jsx'
import { referFeature } from '../../data/bannerData.js'

function ReferEarnBanner({ onAction }) {
  const illustration = (
    <div className="refer-art">
      <svg className="refer-illustration" viewBox="0 0 420 270" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="referral-box-front" x1="178" y1="126" x2="237" y2="190" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8198F7" />
            <stop offset="1" stopColor="#5154BC" />
          </linearGradient>
          <linearGradient id="referral-box-side" x1="237" y1="131" x2="270" y2="181" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7767D9" />
            <stop offset="1" stopColor="#373C91" />
          </linearGradient>
          <linearGradient id="referral-lid" x1="164" y1="113" x2="247" y2="140" gradientUnits="userSpaceOnUse">
            <stop stopColor="#B7C4FF" />
            <stop offset=".55" stopColor="#7D8EEF" />
            <stop offset="1" stopColor="#8E78E4" />
          </linearGradient>
          <linearGradient id="referral-gold" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#FFE7A4" />
            <stop offset="1" stopColor="#C99B4F" />
          </linearGradient>
          <linearGradient id="referral-glass" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#D8E6FF" stopOpacity=".28" />
            <stop offset="1" stopColor="#7388D9" stopOpacity=".08" />
          </linearGradient>
          <filter id="referral-shadow" x="100" y="57" width="227" height="190" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
            <feGaussianBlur in="SourceAlpha" stdDeviation="10" />
            <feOffset dy="10" />
            <feColorMatrix values="0 0 0 0 .02 0 0 0 0 .04 0 0 0 0 .12 0 0 0 .42 0" />
            <feBlend in2="SourceGraphic" result="shadow" />
            <feBlend in="SourceGraphic" in2="shadow" />
          </filter>
        </defs>

        <ellipse cx="210" cy="221" rx="146" ry="18" fill="#080F22" fillOpacity=".36" />
        <ellipse cx="210" cy="216" rx="120" ry="10" fill="#7D8EF0" fillOpacity=".12" />

        <path d="M90 137C121 84 159 81 194 116" stroke="#7F9DFF" strokeOpacity=".56" strokeWidth="1.5" strokeDasharray="4 6" />
        <path d="M226 114C266 76 307 87 332 132" stroke="#8D80F4" strokeOpacity=".55" strokeWidth="1.5" strokeDasharray="4 6" />
        <path d="M95 147C117 186 148 193 180 169" stroke="#69C9E3" strokeOpacity=".32" strokeWidth="1.2" />
        <path d="M241 168C278 190 306 177 328 146" stroke="#8D80F4" strokeOpacity=".35" strokeWidth="1.2" />
        <path d="m155 99 7 1-3 6" stroke="#A5B5FF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m289 92 6-3 1 7" stroke="#A5B5FF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="118" cy="99" r="3" fill="#79D7EA" />
        <circle cx="300" cy="113" r="3" fill="#B5A0FF" />
        <circle cx="145" cy="183" r="2.5" fill="#7BD8E8" />
        <circle cx="275" cy="181" r="2" fill="#C0A7FF" />

        <g filter="url(#referral-shadow)">
          <path d="M174 131 214 111l41 19-42 22-39-21Z" fill="#AEBBFF" fillOpacity=".8" />
          <path d="m174 131 39 21v54l-39-23v-52Z" fill="url(#referral-box-front)" />
          <path d="m213 152 42-22v53l-42 23v-54Z" fill="url(#referral-box-side)" />
          <path d="m174 131 40-21 41 20-42 22-39-21Z" fill="url(#referral-lid)" />
          <path d="m201 117 15 8-13 7-15-8 13-7Z" fill="#F2D99B" fillOpacity=".92" />
          <path d="m201 125 6 3v69l-6-3v-69Z" fill="#D8C17F" />
          <path d="m207 128 7-3v70l-7 2v-69Z" fill="#FFE7A4" />
          <path d="m200 117-9-12c-4-6 2-11 8-7l15 11-14 8Z" fill="#E3CB8E" />
          <path d="m214 117 9-13c4-6-2-11-8-7l-15 12 14 8Z" fill="#F5DFA6" />
          <path d="m181 135 20 11v48l-20-12v-47Z" fill="#A7BCFF" fillOpacity=".12" />
          <path d="m220 154 27-15v34l-27 15v-34Z" fill="#ABB0FF" fillOpacity=".12" />
        </g>

        <g transform="rotate(-13 157 79)">
          <circle cx="157" cy="79" r="15" fill="url(#referral-gold)" />
          <circle cx="157" cy="79" r="11" stroke="#FFF0C5" strokeOpacity=".65" />
          <path d="M157 72v14m-4-10h6a2 2 0 0 1 0 4h-5a2 2 0 0 0 0 4h7" stroke="#FFF4D7" strokeWidth="1.5" strokeLinecap="round" />
        </g>
        <g transform="rotate(12 266 87)">
          <circle cx="266" cy="87" r="11" fill="url(#referral-gold)" />
          <circle cx="266" cy="87" r="8" stroke="#FFF0C5" strokeOpacity=".65" />
          <path d="M266 82v10m-3-7h4a1.5 1.5 0 0 1 0 3h-3a1.5 1.5 0 0 0 0 3h5" stroke="#FFF4D7" strokeWidth="1.2" strokeLinecap="round" />
        </g>
        <circle cx="210" cy="83" r="5" fill="#83D6E8" fillOpacity=".8" />
        <path d="m210 70 1.8 4.2L216 76l-4.2 1.8L210 82l-1.8-4.2L204 76l4.2-1.8L210 70Z" fill="#B9AAFF" />

        <g>
          <circle cx="82" cy="140" r="30" fill="url(#referral-glass)" stroke="#AFC4FF" strokeOpacity=".55" />
          <circle cx="82" cy="129" r="10" fill="#DBAE91" />
          <path d="M66 153c2-10 8-15 16-15s14 5 16 15c-8 8-24 8-32 0Z" fill="#607FD0" />
          <path d="M72 125c1-9 18-13 22-2-7-2-13-1-18 3l-4-1Z" fill="#27314C" />
          <circle cx="72" cy="127" r="2" fill="#29324D" />
          <circle cx="91" cy="127" r="2" fill="#29324D" />
          <path d="M77 134c3 2 7 2 10 0" stroke="#935F59" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="82" cy="140" r="36" stroke="#8EA8FF" strokeOpacity=".17" />
        </g>

        <g>
          <circle cx="337" cy="140" r="30" fill="url(#referral-glass)" stroke="#C1AEFF" strokeOpacity=".55" />
          <circle cx="337" cy="129" r="10" fill="#9A674F" />
          <path d="M321 153c2-10 8-15 16-15s14 5 16 15c-8 8-24 8-32 0Z" fill="#735BBF" />
          <path d="M326 128c-1-12 20-17 23-4l-5 5c-4-5-11-5-17 0l-1-1Z" fill="#271F32" />
          <circle cx="332" cy="129" r="2" fill="#292139" />
          <circle cx="342" cy="129" r="2" fill="#292139" />
          <path d="M333 135c3 2 6 2 9 0" stroke="#75443E" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="337" cy="140" r="36" stroke="#AD98FF" strokeOpacity=".17" />
        </g>

        <g transform="rotate(-8 119 192)">
          <rect x="91" y="181" width="56" height="35" rx="8" fill="#192744" fillOpacity=".92" stroke="#8BA8F4" strokeOpacity=".48" />
          <rect x="98" y="188" width="17" height="17" rx="5" fill="#6887DF" fillOpacity=".48" />
          <path d="M103 197h7m-3.5-3.5v7" stroke="#DCE5FF" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M121 192h17m-17 5h12" stroke="#CDD7F4" strokeOpacity=".7" strokeWidth="2" strokeLinecap="round" />
        </g>

        <g transform="rotate(8 299 193)">
          <rect x="274" y="181" width="51" height="34" rx="8" fill="#202442" fillOpacity=".92" stroke="#AA96F3" strokeOpacity=".48" />
          <circle cx="288" cy="198" r="7" fill="url(#referral-gold)" />
          <path d="M288 194v8m-2-6h3a1.2 1.2 0 0 1 0 2.4h-2a1.2 1.2 0 0 0 0 2.4h3" stroke="#FFF4D7" strokeWidth="1" strokeLinecap="round" />
          <path d="M300 193h17m-17 5h12" stroke="#D6CFFA" strokeOpacity=".7" strokeWidth="2" strokeLinecap="round" />
        </g>

        <circle cx="60" cy="111" r="2" fill="#C5B5FF" />
        <circle cx="365" cy="107" r="2" fill="#73D4E7" />
        <circle cx="179" cy="63" r="1.7" fill="#F2D99B" />
        <circle cx="246" cy="68" r="1.5" fill="#87D8EA" />
        <path d="m349 174 2.5 5.5 5.5 2.5-5.5 2.5-2.5 5.5-2.5-5.5-5.5-2.5 5.5-2.5 2.5-5.5Z" fill="#A697FF" fillOpacity=".8" />
      </svg>
    </div>
  )

  return <RewardBanner feature={referFeature} illustration={illustration} className="refer-wide" onAction={onAction} />
}

export default ReferEarnBanner