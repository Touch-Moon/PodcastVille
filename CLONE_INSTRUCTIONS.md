# PodcastVille — Clone Instructions

참조 사이트: https://podcasts.apple.com/us/new
복제 목표: Apple Podcasts 웹플레이어의 레이아웃·인터랙션 구조를 그대로 유지하고 콘텐츠를 PodcastVille에 맞게 교체.

> **파일 역할**: 디자인 토큰 + 이벤트/인터랙션 스펙 전용. 빌드 순서·페이지 스펙·컴포넌트 구조·데이터는 **CLAUDE.md** 참조.

---

## 1. DESIGN

### 1-1. 컬러 시스템

> **출처**: Apple Podcasts CSS 직접 추출 (2026-03-09)

| Token | Hex / 값 | 용도 |
|-------|---------|------|
| `--color-bg` | `#1F1F1F` | 전체 페이지 배경 (rgb(31,31,31)) |
| `--color-sidebar-bg` | `rgba(235, 235, 245, 0.03)` | 사이드바 배경 (유리 효과) |
| `--color-player-bg` | `#2C2C2E` | 플레이어 바 배경 |
| `--color-text-primary` | `rgba(255, 255, 255, 0.92)` | 기본 텍스트 (`--sk-headline-text-color`) |
| `--color-text-secondary` | `rgba(255, 255, 255, 0.55)` | 부제목, 메타 텍스트 |
| `--color-text-tertiary` | `rgba(255, 255, 255, 0.25)` | 비활성, 플레이스홀더 |
| `--color-accent` | `#9c5af2` | 핵심 강조색 — 버튼, 선택 상태 (`--keyColor`) |
| `--color-accent-hover` | `#d997ff` | 강조색 hover 상태 (`--keyColor-rollover`) |
| `--color-accent-pressed` | `#ca88ff` | 강조색 pressed 상태 (`--keyColor-pressed`) |
| `--color-separator` | `hsla(0, 0%, 100%, 0.1)` | 구분선 (`--labelDivider`) |
| `--color-hover-bg` | `rgba(51, 51, 51, 0.3)` | 카드 hover 배경 (`--lockupHoverBGColor`) |
| `--color-dropdown-bg` | `#575757` | 드롭다운 메뉴 배경 |
| `--color-modal-btn-bg` | `#333336` | 모달 닫기 버튼 배경 |
| `--color-selection` | `#581ca7` | 텍스트 선택 배경 |
| `--color-highlight` | `rgba(156, 90, 242, 0.5)` | 텍스트 하이라이트 |
| `--color-error` | `#ff3b30` | 에러 (`--systemRed`) |

**오버레이 규칙**
- 카드 hover: `rgba(51,51,51,.3)` 오버레이 + border-radius inherit
- 아트워크 내부 stroke: `--containerInnerStrokeAlpha: 0.25` (dark mode)
- 플레이어 바 그림자: `rgba(0,0,0,.2)`

---

### 1-2. 타이포그래피

> **원본 폰트**: `-apple-system, BlinkMacSystemFont, "SF Pro", "Helvetica Neue", Arial, sans-serif` — 시스템 폰트. **Google Fonts 대체: `Inter`** (가장 유사한 시스템 그로테스크).

| 역할 | Weight | Size | Line-height | 비고 |
|------|--------|------|-------------|------|
| Page Title (h1) | 700 | 34px | 40px (1.176) | `--large-title-emphasized` |
| Section Title (h2 shelf) | 400~600 | 17px | 22px (1.294) | `--title-3` |
| Card Title | 600 | 13px | 16px (1.231) | `--body-heavy-short` |
| Card Subtitle / Meta | 400 | 11px | 13px (1.182) | `--subhead-short` |
| Nav Item | 400 | 13px | 16px | sidebar link |
| Callout / Large Card | 700 | 32px | 36px (1.125) | `--sasskit-callout-bold` |
| Badge / Tag | 600 | 11px | 13px | uppercase 없음 |
| Player timestamp | 400 | 11px | 13px | mono spacing |

**font-weight 규칙**
- `--body-heavy-short`: `800 13px/1.0769`
- `--title-3-emphasized`: `600 15px/1.333`
- `--large-title-emphasized-tall`: `700 26px/1.308`

**Letter-spacing**: `normal` (Apple 시스템 폰트 기본값 사용)

---

### 1-3. 그리드 & 레이아웃

**전체 레이아웃 구조**

```
┌─────────────────────────────────────────────┐
│  Player Bar  (fixed top, height: 54px)      │
├───────────┬─────────────────────────────────┤
│           │                                 │
│  Sidebar  │  Main Content Area              │
│  (260px)  │  (padding-left: 260px)          │
│  fixed    │  padding-top: 54px              │
│           │                                 │
└───────────┴─────────────────────────────────┘
```

**Breakpoint 기준** (CSS에서 추출)

| 이름 | 범위 | Tailwind prefix | 비고 |
|------|------|-----------------|------|
| Mobile S | < 484px | 기본 | 검색 UI 변경, grid 2col |
| Mobile | 484px – 606px | `sm:` | 검색 취소 버튼 숨김 |
| Tablet | 607px – 866px | `md:` | bricks grid 변화 |
| Laptop | 867px – 999px | `lg:` | shelf grid nav 표시 |
| Desktop | 1000px – 1319px | `xl:` | 3-col bricks grid |
| Wide | 1320px – 1679px | `2xl:` | artwork radius 10px |
| Ultra | 1680px – 1999px | `3xl:` | artwork radius 12px |
| 4K | ≥ 2000px | `4xl:` | artwork radius 18px |

**핵심 치수**
- Player bar height: `54px` (fixed top)
- Sidebar width: `260px` (fixed left)
- Main content padding-top: `54px`
- Main content padding-left: `260px`
- Body gutter (`--bodyGutter`): 반응형, `var(--shelfGridPaddingInline, var(--bodyGutter))`
- Shelf grid padding: `0 var(--bodyGutter)` → mobile: `padding-inline: 0px`

**그리드 패턴**
- `grid--bricks` (More to Discover): 2col → 3col (≥1000px) → 2col (drawer 열림, 1260~1939px)
- `grid--channel-list`: 4col → 2col (≤483px)
- Shelf (horizontal scroll): `overflow-x: scroll`, scroll-snap
- Shelf grid: `≤999px`에서 nav arrows 숨김

---

### 1-4. Border & Radius & Shadow

| 요소 | 규칙 |
|------|------|
| Podcast 아트워크 (기본) | `border-radius: 7px` |
| Podcast 아트워크 (≥1320px) | `border-radius: 10px` |
| Podcast 아트워크 (≥1680px) | `border-radius: 12px` |
| Podcast 아트워크 (≥2000px) | `border-radius: 18px` |
| Bricks 카드 (More to Discover) | `border-radius: 10px` |
| 버튼 (pill) | `border-radius: 980px` (완전 라운드) |
| 검색 인풋 | `border-radius: 6px` 내외 |
| 모달 닫기 버튼 | circular |
| 카드 shadow | **없음** (hover시 bg색 변화만) |
| Player bar shadow | `box-shadow: 0 -1px rgba(0,0,0,.2)` |

**Artwork 내부 stroke (dark mode)**
```css
.container-style::after {
  opacity: var(--containerInnerStrokeAlpha, 0.25);
  /* 미세한 내부 테두리 효과 */
}
```

**Transition 기준값** (CSS 직접 추출)

| 속도 | duration | 용도 |
|------|----------|------|
| Instant | `0.1s ease-in` | 전역 기본 (`--global-transition`) |
| Fast | `0.2s ease-out` | 재생속도 버튼 색상 |
| Base | `0.25s` | 카드 hover, 링크 색상 |
| Slow | `0.35s` | 페이지 전환, 사이드바 |

**Smooth Scroll**: `scroll-behavior: smooth` (전역)

---

### 1-5. 이미지 처리 규칙

- 모든 아트워크: `next/image` 사용, 정사각형 (`1:1` aspect-ratio)
- 아트워크 컨테이너: `overflow: hidden`, `border-radius` 반응형 적용
- `object-fit: cover` 기본
- 아트워크 fallback: `background-color: var(--genericJoeColor)` (placeholder 색상)
- Showcase 히어로 카드: 각 카드 `562.5px × 411.4px` (16:9 근사, 데스크톱 기준)
- 아트워크 width: `var(--artwork-override-width, 100%)`
- `contain: content` 적용 (성능 최적화)

---

### 1-6. 컴포넌트별 스타일 규칙

**Shelf (수평 스크롤 섹션)**
```css
.shelf-grid {
  padding: 0 var(--bodyGutter);
  width: 100%;
  z-index: var(--z-default);  /* z-index: 1 */
}
/* 모바일 */
@media (max-width: 999px) {
  .shelf-grid { padding-inline: 0; }
  .shelf-grid__header { margin-inline-end: 25px; padding-inline-start: 25px; }
}
.shelf-grid__body { box-sizing: content-box; margin-inline: -2px; overflow: visible; }
```

**Sidebar Nav**
```css
.sidebar {
  width: 260px;
  background-color: rgba(235, 235, 245, 0.03);
  position: fixed;
  top: 54px;  /* player bar height */
  left: 0;
  bottom: 0;
}
```

**Artwork Component**
```css
.artwork-component {
  background-color: var(--genericJoeColor);
  border-radius: inherit;
  contain: content;
  overflow: hidden;
  position: relative;
  width: var(--artwork-override-width, 100%);
  z-index: var(--z-default);
}
```

**Z-index 레이어 시스템** (CSS 직접 추출)

| z값 | CSS var | 용도 |
|-----|---------|------|
| `1` | `--z-default` | 기본 콘텐츠 |
| `50` | `--z-bubbles` | 알림, 버블 |
| `1001` | `--z-gpu` | GPU 가속 요소 |
| `9901` | `--z-web-chrome` | 웹 크롬 (header, sidebar) |
| `9951` | `--z-contextual-menus` | 컨텍스트 메뉴 |
| `10001` | `--z-modal` | 모달 |

---

## 2. EVENTS

### 2-1. 페이지 로드 애니메이션

| 대상 | 구현 방식 | 상세 |
|------|----------|------|
| 없음 (Apple 원본) | — | 페이지 로드 인트로 없음 |
| Shelf 카드들 | CSS opacity | 콘텐츠 로드 후 fade-in (선택적 구현) |

> **주의**: 모든 클라이언트 애니메이션은 `"use client"` + `useEffect` 조합. SSR 환경 오류 방지 필수.

---

### 2-2. 스크롤 트리거 애니메이션

| 애니메이션 | 대상 | 설정 |
|-----------|------|------|
| Shelf fade-in | 각 shelf 섹션 | `start: "top 90%"`, `opacity: 0→1` |
| 없음 (원본) | — | Apple 원본은 스크롤 트리거 없음 |

**ScrollTrigger 공통 설정** (적용 시)
```typescript
trigger: element,
start: "top 90%",
toggleActions: "play none none none",
```

---

### 2-3. Hover 이벤트

| 대상 요소 | Hover 동작 | 구현 방식 |
|----------|-----------|----------|
| Podcast 카드 (lockup) | 배경 `rgba(51,51,51,.3)` 추가 | CSS `transition: background 0.25s` |
| Artwork 이미지 | 미세한 scale 또는 brightness 변화 | CSS `transform: scale(1.03)` |
| Sidebar nav 링크 | 배경 highlight | CSS `background: rgba(255,255,255,0.1)` |
| "Top Shows →" 링크 | 색상 변화 `rgba(255,255,255,0.92) → #9c5af2` | CSS transition 0.25s |
| Footer 링크 | `opacity: 0.92 → 1` | CSS transition |
| Play 버튼 | 아이콘 색 변화 | CSS transition 0.2s ease-out |

> **터치 디바이스 제외**: 모든 hover에 `@media(hover:hover)` 필수.

---

### 2-4. 클릭 이벤트

| 대상 | 동작 |
|------|------|
| Podcast 카드 | Next.js `<Link>` → `/podcast/[slug]` |
| Play 버튼 | `isPlaying` 상태 토글 (오디오 재생/정지) |
| Follow 버튼 | `isFollowing` 상태 토글 |
| Sidebar Home | `/` 라우트 이동 |
| Sidebar New | `/new` 라우트 이동 |
| Sidebar Top Charts | `/charts` 라우트 이동 |
| 검색창 | `/search?q=` 라우트 이동 |
| Section "→" 링크 | 해당 카테고리 페이지 이동 |
| Genre 카테고리 카드 | 장르 필터 페이지 이동 |
| Player bar | 재생 컨트롤 (재생/정지/탐색) |
| Speed 버튼 | 재생속도 드롭다운 토글 |
| 언어 선택 (footer) | 국가/언어 변경 |

---

### 2-5. Sticky 이벤트

**Player Bar (상단 고정)**

| 상태 | 조건 | 스타일 |
|------|------|--------|
| 항상 고정 | — | `position: fixed; top: 0; z-index: 9901` |
| 그림자 | 항상 | `box-shadow: 0 -1px rgba(0,0,0,.2)` |

**Sidebar (좌측 고정)**

| 상태 | 조건 | 스타일 |
|------|------|--------|
| 항상 고정 | ≥1000px | `position: fixed; left: 0; width: 260px` |
| 모바일 | <1000px | 숨김 또는 bottom nav로 전환 |

---

### 2-6. 마우스 커서

- 참조 사이트: 기본 OS 커서 사용 (커스텀 없음)
- `cursor-pointer` 필수 요소: 카드, 버튼, 링크, play 버튼, follow 버튼

---

### 2-7. 모바일 터치 이벤트

| 대상 | 동작 | 구현 방식 |
|------|------|----------|
| Shelf (수평 스크롤) | 좌우 swipe 스크롤 | CSS `overflow-x: scroll` + `scroll-snap` |
| Podcast 카드 | tap = 클릭 동일 | `<Link>` 기본 동작 |
| Play 버튼 | tap = 재생/정지 | `onClick` |
| 사이드바 | 모바일에서 bottom nav 변환 | 별도 `MobileNav` 컴포넌트 |

**Tap Target 크기**: 최소 `44×44px` (Apple HIG)
**Shelf nav arrows**: `≤999px`에서 `display: none`

---

### 2-8. 자동 실행 이벤트

| 이벤트 | 설정 |
|--------|------|
| 오디오 자동재생 | **없음** (클릭 시만 재생) |
| Showcase 자동 슬라이드 | **없음** (Apple 원본 정적) |
| 마키/스크롤 | **없음** |

---

## 3. 참조 사이트 페이지별 섹션 구조

### `/new` — New 페이지 (메인 클론 대상)

```
[Player Bar] — fixed top, h:54px, z:9901
  ← → | 1x | ⏮ ▶ ⏭ | 아트워크 | progress bar | 🍎 | 🔊 | 📋 | ▶ | Sign In

[Sidebar] — fixed left, w:260px
  🎙 Apple Podcasts (로고)
  🔍 Search (인풋)
  🏠 Home
  🆕 New  ← (현재 선택, 강조)
  📊 Top Charts
  ─────────────
  Open in Podcasts ↗

[Main Content] — margin-left:260px, padding-top:54px

  ## New (h1, 34px 700)

  [Section: Showcase Hero] — 2 featured 카드, 50/50 분할
    ├ [NEW SEASON 뱃지] + [제목 텍스트]
    └ [Artwork 이미지]  (각 562px 데스크톱)

  [Shelf: Top Shows →]
    → 수평 스크롤, 5개 visible
    → 정사각형 아트워크(201px) + 제목 + 스튜디오명

  [Grid: New Shows] — 5열 그리드
    → 아트워크 + 장르 태그 + 업데이트 주기
    → 두 줄 표시 (10개)

  [Shelf: Top Episodes →] — 2열 번호 리스트
    → 번호 | 아트워크 | 날짜 | 제목 | 설명 | 시간
    → 6개 표시 (2×3)

  [Shelf: The Moment →]
    설명: "Find out what's happening. Updated weekdays."
    → 와이드 에피소드 카드 (썸네일 + 제목 + 설명)

  [Shelf: Top Series →]  수평 스크롤
  [Shelf: Top Comedy Shows →]  수평 스크롤
  [Shelf: Top True Crime Shows →]  수평 스크롤

  [More to Discover] — 3열 컬러 카드
    → True Crime (파란색)
    → Series (빨간색)
    → News (하늘색)
    → border-radius: 10px

[Footer]
  United States | 언어 선택들
  Copyright © 2026 Apple Inc. | Internet Service Terms | Privacy | Cookies | Support | Feedback
```

### `/home` — Home 페이지

```
[Player Bar] + [Sidebar] (동일)

[Main Content]
  ## Home (h1)
  → 개인화 컨텐츠 (Following 섹션 등)
  → Sign In 유도 배너 (미로그인시)
```

### `/charts` — Top Charts 페이지

```
[Player Bar] + [Sidebar] (동일)

[Main Content]
  ## Top Charts (h1)
  [Shelf: Top Shows →]  번호 + 아트워크 + 제목
  [Shelf: Top Episodes →]  번호 + 에피소드
  [Shelf: Top Comedy Shows →]
  [Shelf: Top True Crime Shows →]
  ...장르별 Top 리스트
```

---

## 4. Google Fonts 설정 (Inter)

```typescript
// src/app/layout.tsx
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-primary",
  display: "swap",
});
```

```css
/* globals.css */
:root {
  /* 원본 CSS 변수 매핑 */
  --z-default: 1;
  --z-bubbles: 50;
  --z-gpu: 1001;
  --z-web-chrome: 9901;
  --z-contextual-menus: 9951;
  --z-modal: 10001;

  --global-transition: opacity 0.1s ease-in;
  --keyline-border-style: 0.5px solid var(--color-separator);
}

body {
  font-family: var(--font-primary), -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
  background-color: #1F1F1F;
  color: rgba(255, 255, 255, 0.92);
  -webkit-font-smoothing: antialiased;
}
```

---

## 5. Tailwind 커스텀 토큰 (`globals.css` @theme 블록)

```css
@theme {
  /* Colors */
  --color-bg: #1F1F1F;
  --color-sidebar-bg: rgba(235, 235, 245, 0.03);
  --color-player-bg: #2C2C2E;
  --color-text-primary: rgba(255, 255, 255, 0.92);
  --color-text-secondary: rgba(255, 255, 255, 0.55);
  --color-text-tertiary: rgba(255, 255, 255, 0.25);
  --color-accent: #9c5af2;
  --color-accent-hover: #d997ff;
  --color-separator: hsla(0, 0%, 100%, 0.1);
  --color-hover-bg: rgba(51, 51, 51, 0.3);

  /* Layout */
  --sidebar-width: 260px;
  --player-bar-height: 54px;

  /* Radius */
  --radius-artwork: 7px;
  --radius-artwork-lg: 10px;
  --radius-artwork-xl: 12px;
  --radius-artwork-2xl: 18px;
  --radius-card: 10px;
  --radius-pill: 980px;

  /* Duration */
  --duration-instant: 0.1s;
  --duration-fast: 0.2s;
  --duration-base: 0.25s;
  --duration-slow: 0.35s;
}
```
