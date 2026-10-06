function ExchangeIllustration({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 460 300"
      fill="none"
      role="presentation"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="exchange-wallet" x1="76" y1="91" x2="211" y2="214" gradientUnits="userSpaceOnUse">
          <stop stopColor="#536bb0" />
          <stop offset=".55" stopColor="#283e70" />
          <stop offset="1" stopColor="#192847" />
        </linearGradient>
        <linearGradient id="exchange-card" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#e1eaff" stopOpacity=".31" />
          <stop offset="1" stopColor="#7585df" stopOpacity=".12" />
        </linearGradient>
        <linearGradient id="exchange-gold" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#ffedb6" />
          <stop offset=".54" stopColor="#e0bd72" />
          <stop offset="1" stopColor="#a3783f" />
        </linearGradient>
        <linearGradient id="exchange-cyan" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#8cf0f1" />
          <stop offset="1" stopColor="#328dc5" />
        </linearGradient>
        <linearGradient id="exchange-violet" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#c1a9ff" />
          <stop offset="1" stopColor="#6551c9" />
        </linearGradient>
        <filter id="exchange-shadow" x="-40%" y="-40%" width="190%" height="200%">
          <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#030816" floodOpacity=".48" />
        </filter>
        <filter id="exchange-halo" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="13" />
        </filter>
      </defs>

      <ellipse cx="233" cy="160" rx="205" ry="125" fill="#6657d4" fillOpacity=".09" />
      <ellipse cx="232" cy="159" rx="175" ry="104" stroke="#abb8ff" strokeOpacity=".14" transform="rotate(-16 232 159)" />
      <ellipse cx="232" cy="159" rx="151" ry="90" stroke="#70deed" strokeOpacity=".11" transform="rotate(15 232 159)" />
      <ellipse cx="222" cy="249" rx="177" ry="15" fill="#030816" fillOpacity=".48" filter="url(#exchange-halo)" />

      <path d="M180 154c36-37 56 37 94 0s58 34 89 0" stroke="url(#exchange-cyan)" strokeOpacity=".22" strokeWidth="10" strokeLinecap="round" filter="url(#exchange-halo)" />
      <path d="M181 154c34-33 58 31 94 0s57 29 87 0" stroke="url(#exchange-cyan)" strokeOpacity=".8" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 7" />
      <path d="m353 148 10 6-10 6" stroke="#b5eff8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m270 148 10 6-10 6" stroke="#c4b4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      <g filter="url(#exchange-shadow)">
        <path d="M70 113q0-12 12-16l91-28q10-3 19 3l19 14v103q0 10-11 14l-102 30q-13 4-22-5l-6-8z" fill="url(#exchange-wallet)" stroke="#b8caff" strokeOpacity=".65" strokeWidth="1.6" />
        <path d="m70 113 20 12 2 96-13 7q-9 2-9-8z" fill="#1b2a4c" stroke="#8ba4e1" strokeOpacity=".43" />
        <path d="m90 125 112-35v90L92 216z" fill="#1c3157" stroke="#aabff0" strokeOpacity=".43" />
        <path d="m99 132 96-30v72l-94 29z" fill="url(#exchange-card)" stroke="#b7cafa" strokeOpacity=".25" />
        <path d="m108 146 37-11m-37 20 28-9" stroke="#d5e2ff" strokeOpacity=".42" strokeWidth="3" strokeLinecap="round" />
        <rect x="153" y="120" width="31" height="31" rx="8" fill="#273d6a" stroke="#d7c282" strokeOpacity=".52" />
        <circle cx="168.5" cy="135.5" r="10" fill="url(#exchange-gold)" />
        <path d="m168.5 128.5 2.1 4.8 5.2.5-3.9 3.4 1.1 5.1-4.5-2.7-4.5 2.7 1.1-5.1-3.9-3.4 5.2-.5z" fill="#fff3cf" />
        <path d="m92 221 101-30 15 7q4 3-2 6l-99 31q-7 2-13-3z" fill="#263b66" stroke="#9db2e6" strokeOpacity=".44" />
      </g>

      <g filter="url(#exchange-shadow)" transform="rotate(-7 302 103)">
        <rect x="276" y="76" width="93" height="62" rx="12" fill="#152543" stroke="#9be7ef" strokeOpacity=".6" />
        <rect x="282" y="82" width="81" height="50" rx="8" fill="url(#exchange-card)" />
        <rect x="291" y="92" width="22" height="22" rx="7" fill="url(#exchange-gold)" fillOpacity=".88" />
        <path d="m302 96 1.8 4.4 4.7.4-3.6 3.1 1 4.6-3.9-2.5-3.9 2.5 1-4.6-3.6-3.1 4.7-.4z" fill="#fff4d4" />
        <path d="M319 97h32m-32 7h25m-53 18h40" stroke="#e4edff" strokeOpacity=".49" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      <g filter="url(#exchange-shadow)" transform="rotate(7 329 182)">
        <rect x="291" y="149" width="101" height="65" rx="12" fill="#172543" stroke="#b7a4ff" strokeOpacity=".64" />
        <rect x="297" y="155" width="89" height="53" rx="8" fill="url(#exchange-card)" />
        <circle cx="315" cy="174" r="10" fill="url(#exchange-cyan)" fillOpacity=".84" />
        <path d="M311 174h8m-4-4v8" stroke="#e4ffff" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M332 169h41m-41 7h28m-49 19h58" stroke="#e4edff" strokeOpacity=".43" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      <g filter="url(#exchange-shadow)" transform="rotate(-4 369 111)">
        <rect x="345" y="82" width="57" height="42" rx="10" fill="#20254f" stroke="#9db5ff" strokeOpacity=".61" />
        <path d="M358 101h31" stroke="#aebdf9" strokeOpacity=".42" strokeWidth="2" strokeLinecap="round" />
        <circle cx="360" cy="112" r="3" fill="#dfc079" />
        <circle cx="369" cy="112" r="3" fill="#85deeb" />
        <circle cx="378" cy="112" r="3" fill="#b7a4ff" />
      </g>

      <g filter="url(#exchange-shadow)">
        <circle cx="226" cy="154" r="24" fill="#101c35" stroke="#bdc9ff" strokeOpacity=".72" />
        <circle cx="226" cy="154" r="18" fill="#39346e" stroke="#a9c4ff" strokeOpacity=".4" />
        <path d="m217 154 6 6 12-13" stroke="url(#exchange-cyan)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <g filter="url(#exchange-shadow)">
        <circle cx="117" cy="75" r="20" fill="url(#exchange-gold)" stroke="#fff1c9" strokeOpacity=".78" />
        <circle cx="117" cy="75" r="14" fill="none" stroke="#fff5dc" strokeOpacity=".5" />
        <path d="M117 65v20m-5-14h8a3 3 0 0 1 0 6h-6a3 3 0 0 0 0 6h8" stroke="#fff8e5" strokeWidth="1.8" strokeLinecap="round" />
      </g>
      <g filter="url(#exchange-shadow)">
        <circle cx="239" cy="82" r="14" fill="url(#exchange-violet)" stroke="#ddd0ff" strokeOpacity=".8" />
        <path d="m239 74 2.2 5 5.4.5-4.1 3.5 1.2 5.2-4.7-2.8-4.7 2.8 1.2-5.2-4.1-3.5 5.4-.5z" fill="#f2edff" />
      </g>

      <path d="m241 211 2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#92e4ef" />
      <path d="m421 155 1.6 4 4 1.6-4 1.6-1.6 4-1.6-4-4-1.6 4-1.6z" fill="#d5c5ff" />
      <circle cx="267" cy="105" r="2" fill="#f1d791" />
      <circle cx="403" cy="237" r="2" fill="#8be2ed" />
      <circle cx="53" cy="179" r="1.8" fill="#b5a4ff" />
    </svg>
  )
}

export default ExchangeIllustration
