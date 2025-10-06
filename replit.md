# Personal Portfolio Website - 行銷專家作品集

## Overview
這是一個為香港行銷專家打造的 Next.js 個人作品集網站，採用現代網頁技術，整體視覺以**宇宙/外太空主題**為設計概念。網站內容全部以中文呈現，專為香港市場設計。

## Tech Stack
- **Framework**: Next.js 15 with React 19
- **Styling**: Tailwind CSS 4.0 with cosmic theme
- **Language**: TypeScript
- **Content**: Git-based content management with Stackbit
- **Build**: Static Site Generation (SSG)

## Project Structure
- `/src/pages/` - Next.js pages with dynamic routing
- `/src/components/` - Reusable React components (atoms, molecules, sections, effects)
- `/src/components/effects/` - Visual effects (StarfieldBackground with twinkling stars animation)
- `/src/css/` - Tailwind CSS configuration and custom styles
- `/content/` - Markdown content files (Chinese language) for pages and projects
- `/public/images/` - Cosmic/space themed background images (bg1-4.jpg: nebulas, galaxies, deep space)

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

## Content (Chinese Language)
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
- Responsive design with mobile-first approach
- Chinese language content targeting Hong Kong market
- Three major marketing case studies showcase
- Professional resume with work history
- WhatsApp-enabled contact integration
- Random fun facts feature
- SEO optimized with meta tags
- Hot module replacement for development
- Static site generation for optimal performance