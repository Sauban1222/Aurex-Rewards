# Aurex Rewards: Promotional Banners

## Project Overview

A responsive Aurex Rewards promotional experience showcasing five ways to earn, share, convert, and redeem placeholder rewards. Feature interactions and example balances are demonstrations only; no account, reward provider, or referral backend is connected.

## Banner List

| Banner | Route | Purpose |
| --- | --- | --- |
| Captcha Tasks | `/captcha` | Try a sample verification task. |
| Bonus VEs | `/bonus` | Explore illustrative bonus opportunities. |
| Swap Center | `/swap` | Preview a conversion between sample balances. |
| Exchange Center | `/exchange` | Review sample redemption options. |
| Refer & Earn | `/refer` | Review the invite journey and copy a non-personalized preview link. |

## Features

- Five feature banners rendered through the shared `RewardBanner` component.
- Dedicated, refreshable routes for every banner, implemented with React Router and a Netlify SPA fallback.
- Example balances, rates, and reward amounts are identified as placeholders.
- Keyboard-visible focus styles, named controls, descriptive illustrations, and polite status messages.
- Mobile, tablet, and desktop layouts with reduced-motion support.
- Demo-only task, swap, exchange, and referral interactions; no real transactions or rewards are issued.

## Technology Stack

- React 18 and JavaScript JSX
- Vite 6
- React Router
- CSS Modules and shared CSS design tokens
- Inline SVG illustrations and custom SVG icons

Bootstrap and Lucide React are not used by the current implementation.

## Installation Instructions

Requirements: Node.js (Node 20 is used for Netlify builds) and npm.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173/`.

## Development Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create the production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |

## Folder Structure

```text
.
├── files/                         # Supplied banner references and Aurex logo sources
├── public/
│   ├── aurex-icon.svg
│   ├── aurex-logo.svg
│   └── og-aurex.png
├── src/
│   ├── app.jsx
│   ├── main.jsx
│   ├── components/
│   │   ├── BonusVEsBanner/
│   │   ├── CaptchaTasksBanner/
│   │   ├── ExchangeCenterBanner/
│   │   ├── ReferEarnBanner/
│   │   ├── RewardBanner/
│   │   └── SwapCenterBanner/
│   ├── data/
│   │   └── bannerData.js
│   ├── hooks/
│   │   └── useRewardHooks.js
│   ├── pages/
│   └── styles/
│       ├── global.css
│       └── tokens.css
├── index.html
├── netlify.toml
└── package.json
```

## Responsive Design

The home page stacks feature cards on narrow viewports, places illustrations before the copy on mobile, and arranges cards in two columns on wide screens. Card heights are bounded for phone, tablet, and desktop breakpoints; touch controls use minimum 44px targets.

## Animation Details

CSS animates banner artwork and copy with restrained transform and opacity effects. `useInView` starts entrance effects as cards enter the viewport, `useReducedMotion` disables motion when requested, and `useCountUp` animates the sample balance. The Refer & Earn preview uses `useCopyToClipboard`.

## Screenshots

The repository includes supplied banner reference images, which are design targets rather than captures of the current page:

| Banner reference | Image |
| --- | --- |
| Captcha Tasks | ![Captcha Tasks reference](./files/captcha.jpg) |
| Bonus VEs | ![Bonus VEs reference](./files/bonus.jpg) |
| Swap Center | ![Swap Center reference](./files/swap.jpg) |
| Exchange Center | ![Exchange Center reference](./files/exchange.jpg) |
| Refer & Earn | ![Refer & Earn reference](./files/refer.jpg) |

## Live Demo

[Aurex Rewards on Netlify](https://aurexreward-s.netlify.app/)

## GitHub Repository

[Sauban1222/Aurex-Rewards](https://github.com/Sauban1222/Aurex-Rewards)

## Author

Project owner. The author's name was not included in the supplied project files.
