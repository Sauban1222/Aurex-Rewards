<p><img src="./src/assets/aurex-logo.webp" width="220" alt="Aurex Rewards" /></p>

# Aurex Rewards

A premium, responsive rewards and engagement dashboard built with React, Vite, and Bootstrap. Aurex Rewards showcases five distinct earning, conversion, and redemption opportunities with an elegant fintech aesthetic and professional interactions.

## Overview

Aurex Rewards is a modern rewards dashboard concept featuring:

- **Five engagement banners** covering referrals, bonuses, conversions, redemptions, and tasks
- **Responsive design** optimized for mobile (320px–430px), tablet (768px–1024px), and desktop (1280px–1440px)
- **Professional interactions** with fully functional demo swap, exchange, referral, and task pages
- **Accessible interface** with semantic HTML, keyboard navigation, focus indicators, and reduced-motion support
- **Clean fintech design** using a centralized color token system and premium visual hierarchy
- **Demo-only environment** with clearly labeled sample balances and placeholder data

All interactions and balances are examples for demonstration purposes. No real transactions, rewards, or referral tracking occur.

## Features

### Five Core Banners

| Banner | Route | Purpose |
|--------|-------|---------|
| **Refer & Earn** | `/refer` | Invite friends to Aurex Rewards and share a personalized invite link. |
| **Swap Center** | `/swap` | Convert between supported reward balances with demo rates and quotes. |
| **Bonus VEs** | `/bonus` | Discover bonus earning opportunities and increase your VE balance. |
| **Captcha Tasks** | `/captcha` | Complete sample verification tasks to earn rewards. |
| **Exchange Center** | `/exchange` | Redeem VEs for supported rewards and grow your balance. |

### Additional Features

- **Responsive grid layouts** that adapt seamlessly across all device sizes
- **Interactive demo interfaces** including swap controls, referral link sharing, and task previews
- **Clear placeholder indicators** on all demo values and sample data
- **Breadcrumb navigation** on feature pages for easy orientation
- **Keyboard-accessible buttons and controls** with visible focus states
- **Viewport-based animations** that respect user motion preferences
- **SVG illustrations** with professional visual hierarchy
- **Toast notifications** for user feedback
- **Reusable component architecture** for consistent UI patterns

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 18** | Component framework and state management |
| **Vite 6** | Fast build tool and dev server |
| **Bootstrap 5** | Responsive grid utilities and layout components |
| **CSS Modules** | Scoped styles and component encapsulation |
| **React Hooks** | State, effects, and custom logic |
| **React Icons** | Interface icons and UI elements |
| **Lucide React** | Additional icon library for versatile icon coverage |
| **React Router** | Client-side routing and navigation |

## Installation

**Requirements:** Node.js 20+ and npm 10+

```bash
# Clone the repository
git clone https://github.com/Sauban1222/Aurex-Rewards.git
cd Aurex-Rewards

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will open at `http://localhost:5173/` by default.

## Development & Build

```bash
# Start local dev server with hot reload
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```text
Aurex-Rewards/
├── public/
│   ├── favicon.ico              # Multi-size browser favicon
│   ├── favicon-32.png           # 32px browser favicon
│   ├── apple-touch-icon.png     # iOS home screen icon
│   ├── icon-192.png             # PWA icon
│   ├── icon-512.png             # PWA icon
│   ├── site.webmanifest         # Web app metadata
│   └── og-image.png             # Open Graph image for social sharing
├── src/
│   ├── assets/
│   │   └── aurex-logo.webp      # Optimized Aurex Rewards logo
│   ├── main.jsx                 # App entry point, Bootstrap + CSS imports
│   ├── app.jsx                  # Root component with routing logic
│   ├── components/
│   │   ├── RewardBanner.jsx      # Shared banner component (Refer, Swap, Bonus, Captcha, Exchange)
│   │   ├── ReferEarnBanner/      # Refer & Earn banner with custom illustration
│   │   ├── SwapCenterBanner/     # Swap Center banner with SVG
│   │   ├── BonusVEsBanner/       # Bonus VEs banner with SVG
│   │   ├── CaptchaTasksBanner/   # Captcha Tasks banner with SVG
│   │   ├── ExchangeCenterBanner/ # Exchange Center banner with SVG
│   │   ├── Icon.jsx              # Icon wrapper for React Icons
│   │   └── navbar/               # Navigation components
│   ├── pages/
│   │   ├── ReferEarn.jsx         # Referral page with invite link functionality
│   │   ├── SwapCenter.jsx        # Swap demo with balance conversion
│   │   ├── BonusVEs.jsx          # Bonus exploration page
│   │   ├── CaptchaTasks.jsx      # Task preview page
│   │   ├── ExchangeCenter.jsx    # Redemption options page
│   │   ├── Login.jsx             # Login preview page
│   │   └── NotFound.jsx          # 404 fallback page
│   ├── data/
│   │   └── bannerData.js         # Centralized banner content and labels
│   ├── hooks/
│   │   └── useRewardHooks.js     # Custom hooks (useCountUp, useInView, useReducedMotion, useCopyToClipboard)
│   ├── styles/
│   │   ├── variables.css         # Design tokens and Aurex color system
│   │   ├── global.css            # Shared styles, layout, and responsive breakpoints
│   │   └── animations.css        # Keyframe animations with reduced-motion support
│   └── utils/
├── index.html                   # HTML template with meta tags and favicon
├── vite.config.js              # Vite configuration
├── netlify.toml                # Netlify deployment config with SPA fallback
├── package.json                # Project metadata and dependencies
└── README.md                   # This file
```

## Responsive Breakpoints

Aurex Rewards is optimized for all modern devices:

| Viewport | Breakpoint | Layout |
|----------|-----------|--------|
| **Mobile S** | 320px–360px | Single column, compact spacing |
| **Mobile M** | 360px–375px | Single column with adjusted typography |
| **Mobile L** | 375px–430px | Single column, optimized touch targets |
| **Tablet** | 768px–1024px | Two-column banner grids, larger cards |
| **Desktop** | 1280px–1440px | Full-width layout, premium spacing |

- Illustrations scale responsively and adapt to viewport
- Buttons and controls maintain minimum 44px touch targets on mobile
- Text remains readable across all sizes with fluid typography
- No horizontal scrolling or content overflow

## Design System

### Color Tokens

Aurex uses a centralized, premium fintech color palette:

```css
--aurex-bg: #161827;           /* Deep navy page background */
--aurex-surface: #1d1f2f;      /* Elevated surface elements */
--aurex-surface-deep: #25283a; /* Deepest surface for depth */
--aurex-purple: #7c3aed;       /* Primary action color */
--aurex-violet: #8b5cf6;       /* Secondary accent */
--aurex-blue: #3b82f6;         /* Information and links */
--aurex-cyan: #06b6d4;         /* Highlights and data */
--aurex-gold: #c9b57b;         /* Premium accents and focus */
--aurex-text: #f0f1f7;         /* Primary text color */
--aurex-muted: #b5b7c4;        /* Secondary text and disabled states */
```

### Typography

- **Headlines:** Manrope (600–800 weight) for brand presence
- **Body:** DM Sans (400–600 weight) for clarity and legibility
- **Monospace:** System monospace for technical content

### Animations

- **Entrance effects:** Fade-in and rise-in animations on card load
- **Hover states:** Subtle lift and shadow transitions on interactive elements
- **Balance counter:** Smooth count-up animation from 0 on page load
- **Respect motion preferences:** All animations disable when `prefers-reduced-motion` is set

## Accessibility

Aurex Rewards is built with accessibility as a core principle:

- ✅ **Semantic HTML** with proper heading hierarchy (h1 → h2 → h3)
- ✅ **ARIA labels** for icon buttons and complex controls
- ✅ **Keyboard navigation** fully functional with visible focus states
- ✅ **Color contrast** meets WCAG AA standards across all elements
- ✅ **Focus management** with keyboard outline (3px gold offset)
- ✅ **Touch targets** minimum 44px height for mobile usability
- ✅ **Reduced motion** support: animations disable automatically
- ✅ **Dialog management** with Escape key and focus trapping
- ✅ **Escape key** closes modals and dialogs
- ✅ **Screen reader support** with descriptive alt text and status regions

## Performance

Aurex is lightweight and performant:

- Minimal dependencies (no unnecessary libraries)
- Inline SVG illustrations (no image HTTP requests)
- CSS Modules for scoped, optimized styles
- Intersection Observer for viewport-based animations
- Lazy loading of feature pages with React Router
- Production build: ~280KB JS, ~335KB CSS (gzipped: ~84KB JS, ~54KB CSS)

## Interactions & Demo Features

### Home Page
- Welcome section with animated demo balance counter
- Five promotional banners with smooth entrance animations
- Breadcrumb-style section navigation
- Toast notifications for user feedback

### Refer & Earn Page (`/refer`)
- Personal referral link preview (non-functional demo)
- Copy-to-clipboard functionality
- Three-step referral process explanation
- Referral activity tracking placeholder
- Clear indication that tracking is not connected

### Swap Center Page (`/swap`)
- Interactive balance conversion demo
- Input spinbutton for amount selection
- Asset type dropdown selectors
- Bidirectional swap toggle
- Quote details sidebar with estimated amounts
- Rate and fee breakdown (all illustrative)

### Bonus VEs Page (`/bonus`)
- Bonus earning opportunities showcase
- Task lists and bonus structure
- Eligibility information

### Captcha Tasks Page (`/captcha`)
- Task completion preview
- Sample CAPTCHA grid
- Progress tracking visualization

### Exchange Center Page (`/exchange`)
- Redemption options for supported currencies
- Exchange rate display
- Eligible rewards preview

### Login Page
- Professional login form preview
- Remember me option
- Forgot password link

## Browser Support

Aurex Rewards works on all modern browsers:

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 90+)

## Deployment

The application is deployed on **Netlify** with automatic SPA fallback.

**Live Demo:** https://aurexreward-s.netlify.app/

### Netlify Configuration

The `netlify.toml` file includes:
- SPA redirect rule for client-side routing
- Build command: `npm run build`
- Publish directory: `dist/`

### GitHub Repository

**Repository:** https://github.com/Sauban1222/Aurex-Rewards

To deploy your own instance:

1. Fork the repository
2. Connect to Netlify and select your fork
3. Set build command to `npm run build`
4. Set publish directory to `dist/`
5. Deploy!

## Code Quality

- **No build warnings or errors**
- **No console errors in development or production**
- **Clean, well-organized component structure**
- **Consistent naming conventions** for components and utilities
- **Removed unused imports and dead code**
- **Linted and formatted for professional standards**

## Troubleshooting

### Dev server not starting
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Build fails
```bash
# Clear Vite cache
rm -rf .vite dist
npm run build
```

### Changes not reflecting
- Ensure dev server is running: `npm run dev`
- Clear browser cache (Cmd+Shift+Delete)
- Hot reload should work automatically; if not, refresh the page

## Contributing

This is a demonstration project. For questions or suggestions, please create an issue on GitHub.

## License

Copyright © 2026 Aurex Rewards. All rights reserved.

## Author

**Sauban Ali**  
Web Developer | Frontend Engineer  
Portfolio: https://devsauban.netlify.app/  
GitHub: https://github.com/Sauban1222

---

**Created as:** A professional frontend assignment demonstrating modern React development practices, responsive design, accessibility standards, and fintech UI design patterns.
