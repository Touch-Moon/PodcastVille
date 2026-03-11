# PodcastVille

> A full renewal of a podcast platform — targeting Apple Podcasts–level interaction quality.
> Designed and built solo, end-to-end: UX/UI design through front-end development.

🔗 **[Live Demo](https://podcast-ville.vercel.app)** · **[Case Study](https://podcast-ville.vercel.app/podcastville-casestudy.html)**

---

## Overview

PodcastVille is a completely redesigned podcast web app, created to resolve the visual inconsistency, usability gaps, and performance issues of the previous version. Using Apple Podcasts as a reference for interaction and design quality, the entire product cycle — research, UX design, UI design, development, and deployment — was handled by a single person.

## Tech Stack

| Area | Technology |
|------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | SCSS Modules + CSS Custom Properties |
| Font | Inter via `next/font/google` |
| Image | `next/image` |
| Deployment | Vercel (GitHub CI/CD) |

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — featured content and latest episodes |
| `/new` | New — new shows, genre shelves, editorial sections |
| `/charts` | Top Charts — tab filter across 8 categories |
| `/search` | Search — real-time search across Shows, Episodes, Channels, and Categories |
| `/podcast/[slug]` | Podcast Detail — episode list, ratings, host profiles, related shows |
| `/library/*` | Library — Latest Episodes, Shows, Channels, Saved |

## Key Features

- **Ambient Full-Screen Player** — Canvas API + `requestAnimationFrame` renders album artwork as 4 rotating sprites, creating a living background that updates dynamically with the current track
- **CSS Container Queries** — card grids respond to parent container width rather than viewport, dramatically improving component reusability
- **Fully Responsive** — seamless layout from 375px mobile through 1440px desktop
- **Real-time Search** — client-side filtering with URL parameter sync for shareability and back-navigation
- **Dark Design System** — CSS custom property tokens (`--color-bg`, `--color-accent`, `--color-separator`, etc.) as the single source of truth for all styling

## Layout Structure

```
<body>
  <div id="app-container">          ← CSS Grid: 260px | 1fr
    <div id="sidebar-col">
      <Sidebar />                   ← fixed, 260px wide (≥ 484px)
    </div>
    <div id="scrollable-page">
      <PlayerBar />                 ← fixed top, height: 54px
      <main>
        {children}
      </main>
      <MobileNav />                 ← fixed bottom, ≤ 483px only
    </div>
  </div>
</body>
```

## Responsive Breakpoints

| Width | Behavior |
|-------|----------|
| ≤ 483px | Sidebar hidden → MobileNav shown, PlayerBar `left: 0` |
| ≤ 600px | Speed control hidden |
| ≤ 768px | Volume slider and podcast icon hidden |
| ≤ 1100px | Sign In button hidden |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Production build
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── globals.scss          CSS variables + grid layout
│   ├── layout.tsx            App container assembly
│   ├── new/                  /new page
│   ├── charts/               /charts page
│   ├── search/               /search page
│   ├── library/              /library/* pages
│   └── podcast/[slug]/       Podcast detail page
├── components/
│   ├── layout/               PlayerBar · Sidebar · MobileNav · FullScreenPlayer
│   ├── sections/             Page-level section components
│   ├── podcast/              Podcast detail–specific components
│   └── ui/                   Shared UI (PodcastCard · SectionHeader, etc.)
├── data/                     Static data (podcasts · episodes · podcastDetails)
└── types/                    TypeScript type definitions
```

---

## Designer & Developer

**Moon** — UX/UI Designer & Front-end Developer
[View Case Study (KO/EN)](https://podcast-ville.vercel.app/podcastville-casestudy.html)
