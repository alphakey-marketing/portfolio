# Personal Portfolio Website - Marketing Professional Portfolio

## Overview
A Next.js personal portfolio website for a marketing professional featuring **bilingual content** with English as the primary language (default at `/`) and Chinese as the optional secondary language (accessible via `/zh` path). The website showcases a modern **cosmic/outer space visual theme** with twinkling stars animation.

## Tech Stack
- **Framework**: Next.js 15 with React 19
- **Styling**: Tailwind CSS 4.0 with cosmic theme
- **Language**: TypeScript
- **Content**: Git-based content management with Stackbit
- **Build**: Static Site Generation (SSG)

## Project Structure
- `/src/pages/` - Next.js pages with dynamic routing
- `/src/components/` - Reusable React components (atoms, molecules, sections, effects)
- `/src/components/atoms/LanguageSwitcher/` - Language toggle component (EN/中)
- `/src/components/effects/` - Visual effects (StarfieldBackground with twinkling stars animation)
- `/src/css/` - Tailwind CSS configuration and custom styles
- `/content/pages/` - English content (default language)
- `/content/pages/zh/` - Chinese content (accessible via /zh path)
- `/content/data/config.json` - Site configuration with English navigation labels
- `/public/images/` - Cosmic/space themed background images (bg1-4.jpg: nebulas, galaxies, deep space)

## Internationalization (i18n) Architecture
- **Path-based routing**: English at `/`, Chinese at `/zh`
- **Client-side translation**: Components detect language via `router.asPath.startsWith('/zh')`
- **Translation mapping**: Dictionary-based translations in Header and RandomFactSection
- **Language switcher**: Globe icon (🌐) with "EN" or "中" label in navigation header
- **Known limitation**: Brief English flash on /zh initial load due to client-side hydration (functional but not SSR-optimized)

## Visual Design - Cosmic Theme
- **背景圖片**: 四張高質量宇宙主題圖（星雲、星系、深空景觀）
- **星星動畫**: Canvas-based twinkling starfield animation using requestAnimationFrame
- **按鈕配色**: Cosmic gradient (indigo → purple → pink) with glow effects
- **文字**: White text with dark overlay for readability on cosmic backgrounds

## Key Components
- **StarfieldBackground** (`src/components/effects/StarfieldBackground.tsx`): 
  - Canvas-based animated starfield with twinkling effect
  - Responsive design with automatic canvas resizing
  - Optimized with requestAnimationFrame
  - Integrated in BaseLayout for site-wide cosmic atmosphere

- **Action Component** (`src/components/atoms/Action/index.tsx`):
  - Cosmic gradient buttons (indigo-purple-pink)
  - Hover effects with shadow glow
  - Links styled with purple accent colors

- **RandomFactButton** (`src/components/sections/RandomFactSection/index.tsx`):
  - Displays 4 fun facts about the portfolio owner
  - Cosmic styled button matching site theme
  - Prevents showing the same fact twice in a row
  - Bilingual support with language-specific facts

- **LanguageSwitcher** (`src/components/atoms/LanguageSwitcher/index.tsx`):
  - Globe icon (🌐) with language label (EN or 中)
  - Cosmic gradient styling matching site theme
  - Toggles between `/` (English) and `/zh` (Chinese) paths
  - Integrated in Header component (both desktop and mobile views)

## Content Structure
**English Version (Default - `/`):**
- **Homepage**: Typewriter animation title, personal introduction, random facts button
- **Portfolio**: Three major marketing case studies (Hypnotherapy Client Acquisition, EdTech 332% Growth, Telecom Digital Transformation)
- **About**: Professional resume, work experience (HTCL, Big Bang Academy, Alphaknot)
- **Contact**: WhatsApp (+85296783395), Email (curryfishcake@gmail.com), Location (Sai Wan, Hong Kong)

**Chinese Version (`/zh`):**
- **首頁**: 打字機動畫標題、個人簡介、趣味小知識按鈕
- **作品集**: 三個重要行銷案例（催眠獲客、教育科技332%增長、電訊數碼轉型）
- **關於我**: 專業履歷，工作經驗（HTCL, Big Bang Academy, Alphaknot）
- **聯絡方式**: WhatsApp (+85296783395), Email (curryfishcake@gmail.com), 地址（香港西灣）

## Development
The project runs on port 5000 with hot module replacement enabled. The development server is configured to work with Replit's proxy environment.

## Deployment
Configured for autoscale deployment with:
- Build command: `npm run build`
- Start command: `npm run start`
- Deployment target: autoscale (suitable for static sites)

## Recent Changes
- 2025-10-07: **Project Case Studies Translation**
  - Translated all three major project case studies to English
  - Project One: Hypnosis Clients On Demand system
  - Project Two: EdTech 332% revenue growth case study
  - Project Three: Telecom digital transformation case study
  - Maintained professional marketing tone and accurate terminology
- 2025-10-07: **Bilingual System Implementation**
  - Implemented English-first bilingual website (English at `/`, Chinese at `/zh`)
  - Created LanguageSwitcher component with globe icon and language label (EN/中)
  - Translated all homepage and info page content to English
  - Added client-side language detection and translation logic in Header and RandomFactSection
  - Removed duplicate config-zh.json file that was causing navigation bugs
  - Successfully tested both language versions with proper UI localization
- 2025-10-06: **Cosmic Theme Complete Redesign**
  - Downloaded and integrated space/nebula background images (bg1-bg4.jpg)
  - Created StarfieldBackground component with twinkling stars animation
  - Updated all buttons to cosmic gradient (indigo-purple-pink) with glow effects
  - Updated link styles with purple accent colors for cosmic theme
  - Ensured text readability on dark cosmic backgrounds
- 2025-09-29: Added RandomFactButton feature with 4 fun facts
- 2025-09-29: Updated all content to Chinese for Hong Kong market
- 2025-09-29: Configured for Replit environment
- 2025-09-29: Set up Next.js development server with proper host configuration
- 2025-09-29: Configured deployment settings for production

## Features
- **Cosmic visual theme** with twinkling stars animation
- **Bilingual support** with English (default) and Chinese (via /zh path)
- **Language switcher** with globe icon for easy language switching
- Responsive design with mobile-first approach
- Three major marketing case studies showcase
- Professional resume with work history
- WhatsApp-enabled contact integration
- Random fun facts feature with bilingual content
- SEO optimized with meta tags
- Hot module replacement for development
- Static site generation for optimal performance