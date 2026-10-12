import { Users, ArrowRight, Gift, Zap, ShieldCheck, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import BannerCard from '../BannerCard/BannerCard.jsx';
import styles from './ReferEarnBanner.module.css';

// Referral values and feature copy are placeholders until approved.
const BRAND = 'Aurex Rewards';
const REFERRAL = { earn: '50', friend: '200' };

const FEATURES = [
  { key: 'share', Icon: Zap, tone: 'blue', title: 'Easy to Share', text: 'Share your link or code in just one click.' },
  { key: 'rewards', Icon: Gift, tone: 'pink', title: 'Milestone Rewards', text: 'Rewards depend on eligible referral activity.' },
  { key: 'secure', Icon: ShieldCheck, tone: 'cyan', title: 'Eligibility Matters', text: 'Program requirements apply before rewards qualify.' },
  { key: 'earn', Icon: Trophy, tone: 'gold', title: 'Share Your Code', text: 'Invite friends with your personal Aurex link.' },
];

const CONFETTI = [
  [150, 30, 7, '#8B6CF0', 20], [300, 20, 6, '#D46BE6', -15], [405, 120, 7, '#4FB3FF', 30],
  [36, 110, 6, '#D46BE6', 10], [72, 20, 5, '#4FB3FF', 40], [420, 60, 5, '#8B6CF0', -20],
  [388, 258, 6, '#D46BE6', 25], [52, 300, 5, '#8B6CF0', -10],
];

function VCoin({ cx, cy, r, className }) {
  return (
    <g className={className}>
      <circle cx={cx + 2.5} cy={cy + 3} r={r} fill="#0B1250" />
      <circle cx={cx} cy={cy} r={r} fill="url(#rf-blue)" stroke="#8FB2FF" strokeWidth="2" />
      <circle cx={cx} cy={cy} r={r * 0.72} fill="none" stroke="#fff" strokeOpacity=".25" />
      <text x={cx} y={cy + r * 0.36} textAnchor="middle" fontSize={r * 1.05} fontWeight="800" fill="#fff">V</text>
    </g>
  );
}

function Tile({ x, y, rot, children }) {
  return (
    <g transform={`rotate(${rot} ${x + 17} ${y + 17})`}>
      <rect x={x} y={y} width="34" height="34" rx="9" fill="#2C3A9E" fillOpacity=".7" stroke="#7F96FF" strokeOpacity=".6" />
      <g fill="none" stroke="#DDE5FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{children}</g>
    </g>
  );
}

function Illustration() {
  return (
    <svg className={styles.art} viewBox="0 0 440 340" role="group" aria-label="Two friends sharing a gift box and a referral code">
      <defs>
        <linearGradient id="rf-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F8E3AE" /><stop offset=".55" stopColor="#E2B965" /><stop offset="1" stopColor="#B8863A" />
        </linearGradient>
        <linearGradient id="rf-blue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4D7BFF" /><stop offset="1" stopColor="#1B2A9A" />
        </linearGradient>
        <linearGradient id="rf-top" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#B3A6FF" /><stop offset="1" stopColor="#8878F2" /></linearGradient>
        <linearGradient id="rf-left" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#7261E8" /><stop offset="1" stopColor="#4B3FB5" /></linearGradient>
        <linearGradient id="rf-right" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#5646C4" /><stop offset="1" stopColor="#32288A" /></linearGradient>
        <linearGradient id="rf-ring" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#38BDF8" /><stop offset="1" stopColor="#A06BF5" /></linearGradient>
        <linearGradient id="rf-hood" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#4466E8" /><stop offset="1" stopColor="#2B3FA8" /></linearGradient>
        <linearGradient id="rf-top2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#8B5CF0" /><stop offset="1" stopColor="#5B34B8" /></linearGradient>
        <radialGradient id="rf-glow" cx=".5" cy=".5" r=".5"><stop offset="0" stopColor="#6D5BF0" stopOpacity=".35" /><stop offset="1" stopColor="#6D5BF0" stopOpacity="0" /></radialGradient>
      </defs>

      <ellipse cx="220" cy="190" rx="190" ry="150" fill="url(#rf-glow)" />
      {CONFETTI.map(([x, y, s, c, r]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={s} height={s} fill={c} transform={`rotate(${r} ${x} ${y})`} opacity=".85" />
      ))}

      {/* platform */}
      <ellipse cx="220" cy="262" rx="176" ry="32" fill="#10122A" stroke="url(#rf-ring)" strokeWidth="3" />
      <ellipse cx="220" cy="262" rx="132" ry="22" fill="none" stroke="url(#rf-ring)" strokeOpacity=".4" />

      {/* boy */}
      <g>
        <path d="M58 276 Q58 214 100 208 Q142 214 142 276 Z" fill="url(#rf-hood)" />
        <path d="M80 210 Q100 232 120 210" fill="none" stroke="#2B3FA8" strokeWidth="4" strokeLinecap="round" />
        <rect x="94" y="194" width="12" height="16" rx="5" fill="#E8A57F" />
        <circle cx="100" cy="176" r="23" fill="#F2B48E" />
        <path d="M77 174 Q76 148 102 148 Q126 148 123 172 Q112 158 96 160 Q84 162 77 174 Z" fill="#2B1B1B" />
        <circle cx="92" cy="178" r="2.2" fill="#2B1B1B" /><circle cx="109" cy="178" r="2.2" fill="#2B1B1B" />
        <path d="M93 187 Q101 194 109 187" stroke="#8A3A2A" strokeWidth="2" fill="none" strokeLinecap="round" />
        <rect x="118" y="238" width="16" height="28" rx="3" transform="rotate(18 126 252)" fill="#10122A" stroke="#6D7BFF" strokeWidth="1.5" />
        <circle cx="122" cy="264" r="6" fill="#F2B48E" />
      </g>

      {/* girl */}
      <g>
        <path d="M300 182 Q298 146 332 146 Q366 146 364 182 L368 232 Q332 244 296 232 Z" fill="#2A1830" />
        <path d="M286 276 Q286 214 330 208 Q374 214 374 276 Z" fill="url(#rf-top2)" />
        <rect x="324" y="194" width="12" height="16" rx="5" fill="#C98B68" />
        <circle cx="330" cy="177" r="22" fill="#D79A76" />
        <path d="M308 173 Q312 152 332 152 Q352 152 352 173 Q340 163 326 165 Q314 167 308 173 Z" fill="#2A1830" />
        <circle cx="322" cy="179" r="2.1" fill="#2A1830" /><circle cx="339" cy="179" r="2.1" fill="#2A1830" />
        <path d="M323 187 Q331 194 339 187" stroke="#8A3A2A" strokeWidth="2" fill="none" strokeLinecap="round" />
        <rect x="302" y="240" width="16" height="28" rx="3" transform="rotate(-18 310 254)" fill="#10122A" stroke="#B58BFF" strokeWidth="1.5" />
        <circle cx="314" cy="266" r="6" fill="#D79A76" />
      </g>

      {/* gift */}
      <g className={styles.float} transform="translate(10 -4)">
        <ellipse cx="210" cy="254" rx="64" ry="11" fill="#000" opacity=".35" />
        <polygon points="152,145 210,174 210,252 152,223" fill="url(#rf-left)" />
        <polygon points="268,145 210,174 210,252 268,223" fill="url(#rf-right)" />
        <polygon points="210,116 268,145 210,174 152,145" fill="url(#rf-top)" />
        <polygon points="174,156 188,163 188,241 174,234" fill="#E2B965" />
        <polygon points="232,163 246,156 246,234 232,241" fill="#B8863A" />
        <polygon points="174.7,156.4 187.3,162.6 245.3,133.6 232.7,127.4" fill="#F8E3AE" />
        <polygon points="232.7,162.6 245.3,156.4 187.3,127.4 174.7,133.6" fill="#F1D08A" />
        <ellipse cx="192" cy="132" rx="21" ry="11" transform="rotate(-28 192 132)" fill="url(#rf-gold)" />
        <ellipse cx="228" cy="132" rx="21" ry="11" transform="rotate(28 228 132)" fill="url(#rf-gold)" />
        <circle cx="210" cy="139" r="8.5" fill="url(#rf-gold)" />
      </g>

      {/* earn card + chip */}
      <g>
        <rect x="122" y="238" width="196" height="46" rx="12" fill="#1B1E4E" fillOpacity=".92" stroke="#A9A0FF" strokeOpacity=".4" />
        <line x1="220" y1="246" x2="220" y2="276" stroke="#fff" strokeOpacity=".15" />
        <text x="134" y="253" fontSize="12" fill="#C9C4FF">You Earn</text>
        <circle cx="142" cy="268" r="8" fill="url(#rf-gold)" /><text x="142" y="272" textAnchor="middle" fontSize="10" fontWeight="800" fill="#6B4510">V</text>
        <text x="154" y="274" fontSize="18" fontWeight="800" fill="#fff">{REFERRAL.earn}<tspan fontSize="11" fontWeight="600" dx="3">VEs</tspan></text>
        <text x="232" y="253" fontSize="12" fill="#C9C4FF">Your Friend Gets</text>
        <circle cx="240" cy="268" r="8" fill="url(#rf-gold)" /><text x="240" y="272" textAnchor="middle" fontSize="10" fontWeight="800" fill="#6B4510">V</text>
        <text x="252" y="274" fontSize="18" fontWeight="800" fill="#fff">{REFERRAL.friend}<tspan fontSize="11" fontWeight="600" dx="3">VEs</tspan></text>

        <rect x="140" y="296" width="160" height="28" rx="14" fill="#262A6E" fillOpacity=".9" stroke="#A9A0FF" strokeOpacity=".4" />
        <text x="220" y="315" textAnchor="middle" fontSize="12.5" fontWeight="600" fill="#fff">Share • Qualify • Get Rewarded</text>
      </g>

      <VCoin cx={96} cy={62} r={22} className={styles.coinA} />
      <VCoin cx={362} cy={70} r={21} className={styles.coinB} />
      <VCoin cx={66} cy={258} r={19} className={styles.coinC} />
      <VCoin cx={376} cy={262} r={19} className={styles.coinA} />

      <Tile x={14} y={190} rot={-10}>
        <circle cx="28" cy="203" r="4.5" /><path d="M20 218 Q28 209 36 218" /><path d="M40 200 v8 M36 204 h8" />
      </Tile>
      <Tile x={392} y={190} rot={10}>
        <path d="M399 212 L411 200" /><path d="M403 200 H411 V208" />
      </Tile>
    </svg>
  );
}

export default function ReferEarnBanner() {
  return (
    <BannerCard className={styles.card} aria-labelledby="refer-title">
      <div className={styles.main}>
        <div className={styles.copy}>
          <span className={styles.pill}><Users size={15} aria-hidden="true" />REFER &amp; EARN</span>
          <h2 id="refer-title" className={styles.title}>
            Invite Friends.
            <span className={styles.grad}> Earn Rewards.</span>
          </h2>
          <p className={styles.text}>Preview rewards: {REFERRAL.earn} VEs for you and {REFERRAL.friend} for a friend when eligible referral milestones are completed.</p>
          <div className={styles.actions}>
            <Link to="/refer" className={styles.cta}>
              <span>Open referral workspace</span>
              <ArrowRight size={18} aria-hidden="true" className={styles.arrow} />
            </Link>
            <Link to="/refer#how-it-works" className={styles.ghost}>
              <Gift size={16} aria-hidden="true" />
              <span>How It Works</span>
            </Link>
          </div>
        </div>
        <div className={styles.visual}>
          <Illustration />
        </div>
      </div>

      <ul className={styles.strip}>
        {FEATURES.map(({ key, Icon, tone, title, text }) => (
          <li key={key} className={styles.feature}>
            <span className={`${styles.featureIcon} ${styles[tone]}`}><Icon size={18} aria-hidden="true" /></span>
            <span className={styles.featureBody}><strong>{title}</strong><small>{text}</small></span>
          </li>
        ))}
      </ul>
    </BannerCard>
  );
}