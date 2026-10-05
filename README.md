# Aurex Rewards

A responsive rewards dashboard concept for exploring ways to earn, convert, and redeem VEs. The five feature banners use illustrative demo content; no rewards, balances, referral links, or task submissions are connected to a backend.

## Project Overview

Aurex Rewards presents earning and redemption opportunities in one dashboard. Each banner has its own visual treatment. Refer & Earn opens a dedicated page with the invite journey, an example share link, referral activity, and program eligibility information. The Swap Center explains balance conversion, while the Exchange Center focuses on redeeming eligible VEs for supported rewards.

## Banner List

| Banner | Purpose |
| --- | --- |
| Refer & Earn | Explains the invite journey and eligibility. Personalized referral links and tracking are not connected in this preview. |
| Bonus VEs | Highlights eligible activities and bonus opportunities without promising a fixed amount. |
| Captcha Tasks | Presents task-based earning, distinct from ad viewing. |
| Swap Center | Describes conversion between supported reward balances. |
| Exchange Center | Introduces redemption options for eligible VEs. |

## Features

- Five individually composed banners using a shared `RewardBanner` shell.
- Each feature pairs a clear heading and concise value proposition with a direct action.
- Feature-specific dialogs with keyboard dismissal, focus trapping, and focus restoration.
- Dedicated Refer & Earn page linked from the primary navigation.
- Responsive dashboard layouts and touch-sized calls to action.
- Accessible descriptions for the banner illustrations.
- Reduced-motion support and lightweight CSS animations.
- Demo-only task completion feedback; there is no backend integration.
- Refer & Earn provides copy/share controls for an example site link and clearly indicates that referrals are not tracked in the preview.

## Technology Stack

- React 18 and React Hooks
- Vite 6
- CSS Modules for banner surfaces, with shared responsive styling in global CSS
- Custom inline SVG icons

Bootstrap, React Icons, and Lucide React are not dependencies in the current implementation. The project uses its own CSS and SVG icons instead.

## Installation Instructions

Requirements: Node.js (an active LTS release is recommended) and npm.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173/`.

## Development Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local Vite development server. |
| `npm run build` | Create the production build in `dist/`. |
| `npm run preview` | Serve the production build locally after running the build command. |

## Netlify Deployment

Connect the GitHub repository (`Sauban1222/Aurex-Rewards`) to Netlify and deploy the `main` branch. The root `netlify.toml` configures Netlify to run `npm run build`, publish `dist/`, use Node.js 20, and build assets for the site root. If `VITE_BASE_PATH` is also set in the Netlify dashboard, remove it or set it to `/` so assets load from the site root.

## Local Verification

The app was run locally and checked in a browser from 320px through 1440px viewport widths, including mobile, tablet, and desktop sizes. All five banners rendered within their target card heights; keyboard activation opened each CTA dialog, and Escape dismissal restored focus. No browser console or page errors were reported during the smoke check. The production build completed successfully with `npm run build`.

## Asset Optimization

Banner artwork is drawn with CSS and inline SVG rather than large raster images or video. This keeps the illustrations lightweight and avoids a separate asset-processing step.

## Folder Structure

```text
.
├── index.html
├── package.json
├── src/
│   ├── app.jsx
│   ├── main.jsx
│   ├── components/
│   │   ├── BonusVEsBanner/
│   │   ├── CaptchaTasksBanner/
│   │   ├── ExchangeCenterBanner/
│   │   ├── ReferEarnBanner/
│   │   ├── RewardBanner/
│   │   ├── SwapCenterBanner/
│   │   └── Icon.jsx
│   ├── pages/                 # Additional page components
│   ├── styles/
│   │   ├── global.css
│   │   └── variables.css
│   └── utils/
│       └── bannerData.js
└── README.md
```

## Responsive Design

The dashboard uses responsive CSS breakpoints to adapt navigation, content spacing, banner layout, and artwork to smaller screens. The banner grid and mobile artwork layout are checked at phone and desktop viewport sizes; controls retain touch-friendly target sizes.

## Animation Details

CSS animations bring banner copy into view, gently float illustrations, and pulse feature-specific details such as the bonus badge and conversion indicators. Hover feedback is limited to pointer-capable devices, and `prefers-reduced-motion: reduce` minimizes animation and transition duration.

## Screenshots

No screenshot files are currently included in the project. To capture the current UI, run the local development server, capture the dashboard at desktop and mobile widths, and add the images to a `docs/screenshots/` folder before linking them here.

## Live Demo

The live demo is provided by the Netlify site connected to the repository. Use the site URL shown in the Netlify dashboard after the first successful deploy.

## GitHub Repository

Source code: [https://github.com/Sauban1222/Aurex-Rewards](https://github.com/Sauban1222/Aurex-Rewards).

## Author

Author information was not provided with the project.