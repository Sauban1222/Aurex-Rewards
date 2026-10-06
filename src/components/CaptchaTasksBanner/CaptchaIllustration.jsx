function CaptchaIllustration({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 440 320"
      fill="none"
      role="presentation"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="captcha-screen" x1="105" y1="62" x2="324" y2="226" gradientUnits="userSpaceOnUse">
          <stop stopColor="#45649b" />
          <stop offset=".53" stopColor="#253b68" />
          <stop offset="1" stopColor="#192849" />
        </linearGradient>
        <linearGradient id="captcha-laptop" x1="101" y1="220" x2="349" y2="277" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a9bddf" />
          <stop offset=".43" stopColor="#586e9e" />
          <stop offset="1" stopColor="#303e65" />
        </linearGradient>
        <linearGradient id="captcha-glass" x1="143" y1="92" x2="294" y2="210" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f0f5ff" stopOpacity=".2" />
          <stop offset="1" stopColor="#8ab2ed" stopOpacity=".04" />
        </linearGradient>
        <linearGradient id="captcha-gold" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#ffe5a0" />
          <stop offset="1" stopColor="#b88740" />
        </linearGradient>
        <linearGradient id="captcha-cyan" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#9df4f5" />
          <stop offset="1" stopColor="#45a8d9" />
        </linearGradient>
        <filter id="captcha-shadow" x="-30%" y="-40%" width="160%" height="190%">
          <feDropShadow dx="0" dy="14" stdDeviation="12" floodColor="#030816" floodOpacity=".5" />
        </filter>
        <filter id="captcha-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>

      <ellipse cx="223" cy="270" rx="154" ry="19" fill="#030816" fillOpacity=".53" filter="url(#captcha-glow)" />
      <ellipse cx="222" cy="167" rx="180" ry="128" fill="#5166db" fillOpacity=".08" />
      <ellipse cx="222" cy="167" rx="156" ry="109" stroke="#9db6ff" strokeOpacity=".16" transform="rotate(-17 222 167)" />
      <ellipse cx="222" cy="167" rx="135" ry="94" stroke="#6fe1f0" strokeOpacity=".11" transform="rotate(17 222 167)" />

      <g filter="url(#captcha-shadow)">
        <path d="M116 68q2-11 14-11h183q12 0 14 12l15 151q1 13-13 15l-204 0q-14-2-13-16z" fill="#111b30" stroke="#b2c9f0" strokeOpacity=".62" strokeWidth="2" />
        <path d="M128 73q1-5 7-5h172q7 0 8 6l13 132q1 7-7 8H137q-8-1-7-9z" fill="url(#captcha-screen)" stroke="#90b9ed" strokeOpacity=".49" />
        <path d="M140 82h163q4 0 5 5l11 114H141z" fill="url(#captcha-glass)" />

        <rect x="149" y="91" width="144" height="107" rx="9" fill="#121f39" fillOpacity=".86" stroke="#a9c5f0" strokeOpacity=".34" />
        <circle cx="160" cy="103" r="2" fill="#9df4f5" />
        <circle cx="167" cy="103" r="2" fill="#f3d58f" fillOpacity=".9" />
        <circle cx="174" cy="103" r="2" fill="#b8a5ff" fillOpacity=".9" />
        <path d="M155 111h132" stroke="#c5d9ff" strokeOpacity=".12" />

        <g stroke="#c8d8f3" strokeOpacity=".65" strokeWidth="1.5">
          <rect x="159" y="119" width="8" height="8" rx="2" />
          <rect x="159" y="135" width="8" height="8" rx="2" />
          <rect x="159" y="151" width="8" height="8" rx="2" />
        </g>
        <path d="m161 123 2 2 4-5m-6 21 2 2 4-5m-4 20 2 2 4-5" stroke="#79e6ea" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

        <g>
          <rect x="175" y="117" width="31" height="16" rx="4" fill="#30527c" stroke="#8bc7ec" strokeOpacity=".6" />
          <rect x="211" y="117" width="31" height="16" rx="4" fill="#344779" stroke="#b5aaff" strokeOpacity=".55" />
          <rect x="247" y="117" width="31" height="16" rx="4" fill="#31556f" stroke="#87dff0" strokeOpacity=".6" />
          <rect x="175" y="138" width="31" height="16" rx="4" fill="#344779" stroke="#b5aaff" strokeOpacity=".55" />
          <rect x="211" y="138" width="31" height="16" rx="4" fill="#31556f" stroke="#87dff0" strokeOpacity=".6" />
          <rect x="247" y="138" width="31" height="16" rx="4" fill="#30527c" stroke="#8bc7ec" strokeOpacity=".6" />
          <rect x="175" y="159" width="31" height="16" rx="4" fill="#31556f" stroke="#87dff0" strokeOpacity=".6" />
          <rect x="211" y="159" width="31" height="16" rx="4" fill="#30527c" stroke="#8bc7ec" strokeOpacity=".6" />
          <rect x="247" y="159" width="31" height="16" rx="4" fill="#344779" stroke="#b5aaff" strokeOpacity=".55" />
          <path d="m181 127 4-6 5 7m26-2 4-6 5 7m26-2 4-6 5 7m-70 23 4-6 5 7m26-2 4-6 5 7m26-2 4-6 5 7m-70 23 4-6 5 7m26-2 4-6 5 7m26-2 4-6 5 7" stroke="#c9e7f5" strokeOpacity=".72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        <path d="m105 232 14-13h203l14 13q3 5-5 7H110q-8-2-5-7Z" fill="url(#captcha-laptop)" stroke="#d5e2f7" strokeOpacity=".68" strokeWidth="1.5" />
        <path d="m137 222 167 0-8 8H145z" fill="#17243e" stroke="#a7bedf" strokeOpacity=".45" />
        <path d="M192 239h42l5 4h-52z" fill="#243452" stroke="#c3d2e8" strokeOpacity=".3" />
        <path d="M110 234h226" stroke="#eef4ff" strokeOpacity=".42" />
      </g>

      <g filter="url(#captcha-shadow)" transform="rotate(-9 326 111)">
        <rect x="302" y="85" width="48" height="52" rx="15" fill="#172846" stroke="#b1c8f3" strokeOpacity=".61" />
        <path d="M326 95 339 100v10c0 9-5 15-13 19-8-4-13-10-13-19v-10z" fill="url(#captcha-cyan)" fillOpacity=".83" stroke="#d8ffff" strokeOpacity=".72" />
        <path d="m320 109 4 4 8-9" stroke="#123251" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <g filter="url(#captcha-shadow)">
        <circle cx="300" cy="183" r="28" fill="#09152a" fillOpacity=".92" stroke="#a6bbf4" strokeOpacity=".67" strokeWidth="1.5" />
        <circle cx="300" cy="183" r="22" fill="#342d78" stroke="#b9a8ff" strokeOpacity=".76" />
        <path d="m288 183 8 8 16-18" stroke="url(#captcha-cyan)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <g filter="url(#captcha-shadow)">
        <circle cx="95" cy="173" r="20" fill="url(#captcha-gold)" stroke="#fff0c9" strokeOpacity=".82" />
        <circle cx="95" cy="173" r="14" fill="none" stroke="#fff4d8" strokeOpacity=".56" />
        <path d="m95 163 2.6 6.8 7.3.6-5.6 4.7 1.8 7.1-6.1-3.8-6.1 3.8 1.8-7.1-5.6-4.7 7.3-.6z" fill="#fff5dc" />
      </g>
      <g filter="url(#captcha-shadow)">
        <circle cx="354" cy="204" r="16" fill="url(#captcha-gold)" stroke="#fff0c9" strokeOpacity=".75" />
        <path d="M354 195v18m-5-13h8a3 3 0 0 1 0 6h-6a3 3 0 0 0 0 6h8" stroke="#fff6df" strokeWidth="1.8" strokeLinecap="round" />
      </g>

      <path d="m78 112 2.4 6.1 6.1 2.4-6.1 2.4-2.4 6.1-2.4-6.1-6.1-2.4 6.1-2.4z" fill="#b9a8ff" />
      <path d="m365 138 1.7 4.3 4.3 1.7-4.3 1.7-1.7 4.3-1.7-4.3-4.3-1.7 4.3-1.7z" fill="#89e6f1" />
      <circle cx="111" cy="93" r="2" fill="#f3d895" />
      <circle cx="367" cy="176" r="2" fill="#b9a8ff" />
      <circle cx="82" cy="202" r="1.6" fill="#8ae8f2" />
    </svg>
  )
}

export default CaptchaIllustration
