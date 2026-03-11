# PodcastVille — Project Specification

> **참조 사이트**: https://podcasts.apple.com/us/new
> Apple Podcasts 웹플레이어 레이아웃 복제 + PodcastVille 콘텐츠 교체.
> 디자인 상세 토큰: `CLONE_INSTRUCTIONS.md` 참조.

---

## ⚡ 현재 상태 (2026-03-11 기준)

### 완료된 작업
- [x] 프로젝트 초기화 (Next.js 15 + TypeScript + SCSS Modules)
- [x] `globals.scss` — CSS 변수 + 앱 그리드 레이아웃
- [x] `types/index.ts` — 타입 정의
- [x] `data/podcasts.ts`, `data/episodes.ts` — 데이터
- [x] `layout.tsx` — `#app-container` 그리드 조립
- [x] `PlayerBar.tsx` + `.module.scss` — 완성
- [x] `Sidebar.tsx` + `.module.scss` — 완성
- [x] `MobileNav.tsx` + `.module.scss` — 완성 (≤483px)
- [x] `/new` 페이지 전체 섹션 완성:
  - ShowcaseHero, ShowCategory, NewShowsGrid, TopEpisodesShelf
  - TheMomentShelf (`components/sections/TheMomentShelf.tsx`) ✅
  - GenreShelf ×3 — True Crime / Comedy / News (`components/sections/GenreShelf.tsx`) ✅
  - MoreToDiscover
- [x] 반응형 검증 (375px / 768px / 1440px)
- [x] `/podcast/[slug]` — Podcast Detail 페이지 완성 (PodcastHero, EpisodeList, PodcastDetails)
- [x] `data/podcastDetails.ts` — 팟캐스트 상세 데이터 (The Daily 포함 다수)
- [x] `TopEpisodesShelf` 모바일 개선
- [x] Top Series / Top Comedy / Top True Crime — 순위 숫자 제거
- [x] `PodcastDetails` 반응형 카드 갯수 + Gap 규칙 업데이트
- [x] `/` (Home) 페이지 완성
- [x] `/charts` 페이지 완성 — 탭 필터 (All / True Crime / Comedy / News 등)
- [x] `/search` 페이지 완성 — 실시간 검색 (Shows / Episodes / Channels / Categories)

### 🎯 다음 작업 후보
- 추가 podcast slug 페이지 (`/podcast/[slug]` — the-daily 외 다른 팟캐스트)
- 반응형 최종 점검
- GSAP 애니메이션 추가 (선택)

### Podcast Detail 페이지 — 구현 완료 섹션
1. ✅ PodcastHero — 아트워크 + 제목 + 메타배지 + 설명 + CTA 버튼
2. ✅ EpisodeList — 에피소드 목록
3. ✅ PublisherBanner — 퍼블리셔 프로모션 (수평 스크롤)
4. ✅ Hosts & Guests — 원형 아바타
5. ✅ Ratings & Reviews — 4.3★, 바차트, 리뷰 카드
6. ✅ About — 풀 설명 텍스트
7. ✅ Information — 메타 테이블
8. ✅ More From {author} — 관련 쇼 (수평 스크롤 + ← → 버튼)
9. ✅ You Might Also Like — 추천 쇼 (수평 스크롤 + ← → 버튼)

---

## Tech Stack

- **Next.js 15** (App Router, `src/` directory)
- **TypeScript**
- **SCSS Modules** (Tailwind 제거 완료, `sass` 설치됨)
- **next/font/google** (Inter — SF Pro 대체)
- GSAP: 미설치 (나중에 추가 예정)

> ⚠️ CLAUDE.md 원본의 Tailwind 관련 내용은 **모두 무효**. SCSS Modules 사용.

---

## 레이아웃 구조 (실제 구현)

### HTML 구조
```
<body>
  <div id="app-container">          ← CSS Grid: 260px | 1fr
    <div id="sidebar-col">
      <Sidebar />                   ← fixed, w:260px
    </div>
    <div id="scrollable-page">      ← overflow-y: auto (스크롤 컨테이너)
      <PlayerBar />                 ← fixed, top:0, left:260px, right:0, h:54px
      <main style="paddingTop: 54px">
        {children}
      </main>
      <MobileNav />                 ← fixed bottom, ≤483px only
    </div>
  </div>
</body>
```

### 핵심 CSS 변수
```scss
--sidebar-width: 260px
--player-bar-height: 54px
--color-bg: #1f1f1f
--color-accent: #9c5af2
--color-text-primary: rgba(255,255,255,0.92)
--color-text-secondary: rgba(255,255,255,0.55)
--color-separator: hsla(0,0%,100%,0.1)
```

### 반응형 브레이크포인트
| 너비 | 변화 |
|------|------|
| ≤483px | Sidebar 숨김, MobileNav 표시, PlayerBar `left:0` |
| ≤600px | SpeedBtn 숨김 |
| ≤768px | VolumeSlider·PodcastIcon 숨김 |
| ≤1100px | SignIn 버튼 숨김 |

---

## 실제 파일 구조 (현재 존재하는 파일)

```
src/
  app/
    globals.scss              ✅ CSS vars + grid layout
    layout.tsx                ✅ #app-container 조립
    page.tsx                  ✅ Home (기본 리다이렉트)
    new/
      page.tsx                ✅ /new 페이지
      page.module.scss        ✅
    podcast/
      [slug]/                 ✅ 구현 완료
        page.tsx
        page.module.scss
  components/
    layout/
      PlayerBar.tsx           ✅ + .module.scss
      Sidebar.tsx             ✅ + .module.scss  (nav 3개: Home/New/Top Charts)
      MobileNav.tsx           ✅ + .module.scss  (nav 4개 포함 Search)
    sections/                 ← /new 페이지 섹션
      ShowcaseHero.tsx        ✅ + .module.scss
      ShowCategory.tsx        ✅ + .module.scss  (구 TopShowsShelf)
      NewShowsGrid.tsx        ✅ + .module.scss
      TopEpisodesShelf.tsx    ✅ + .module.scss  (모바일 개선 완료)
      MoreToDiscover.tsx      ✅ + .module.scss
    ui/
      PodcastCard.tsx         ✅ + .module.scss
      SectionHeader.tsx       ✅ + .module.scss
    podcast/                  ✅ 구현 완료
      PodcastMobileHeader.tsx ✅ + .module.scss
      PodcastHero.tsx         ✅ + .module.scss
      EpisodeList.tsx         ✅ + .module.scss
      PodcastDetails.tsx      ✅ + .module.scss  (구 RelatedSection, 반응형 카드 갯수/Gap 업데이트)
  data/
    podcasts.ts               ✅ topShows, newShows, topTrueCrime, topComedy, topSeries
    episodes.ts               ✅ featuredContent, topEpisodes, momentItems, categoryCards
  types/
    index.ts                  ✅ Podcast, Episode, FeaturedContent, CategoryCard, ShelfSection
  lib/                        ❌ 비어있음
```

---

## 실제 타입 정의 (`src/types/index.ts`)

```typescript
export interface Podcast {
  id: string;           // URL slug로도 사용 (e.g., "the-daily")
  title: string;
  author: string;       // studio/publisher
  artwork: string;      // /images/artwork/filename.jpg
  category: string;
  isExplicit?: boolean;
  description?: string;
  episodeCount?: number;
}

export interface Episode {
  id: string;
  title: string;
  podcastTitle: string;
  podcastId: string;
  artwork: string;
  featureImage?: string;
  duration: string;       // "45 min"
  publishedAt: string;    // "Mar 8, 2026"
  description?: string;
  isNew?: boolean;
}

export interface FeaturedContent {
  id: string;
  type: 'new-season' | 'new-show' | 'featured';
  label: string;
  title: string;
  subtitle: string;
  featureImage: string;
  podcastId?: string;
}

export interface CategoryCard {
  id: string;
  title: string;
  image: string;
  color: string;
  href: string;
}
```

> Podcast Detail용 추가 타입은 `podcastDetails.ts` 파일에서 별도 정의.

---

## 이미지 에셋 현황 (`public/images/`)

### artwork/ (주요 파일)
- `the-daily.jpg` ✅ (에피소드 썸네일 통일용으로도 사용)
- `portrait-1.jpg ~ portrait-6.jpg` ✅ (Hosts & Guests 프로필용)
- `crime-junkie.jpg`, `pod-save-america.jpg`, `the-joe-rogan-experience.jpg` 등 다수 ✅

### episodes/
- `moment-1.png ~ moment-11.png` ✅ (16:9 썸네일)
- `true-crime.png`, `series.png`, `news.png`, `history.png`, `kids-family.png` ✅

---

## Sidebar 네비게이션 구조

**Sidebar (≥484px)**: 3개 항목만
- Home `/`
- New `/new`
- Top Charts `/charts`
- (Search는 사이드바 상단 입력창으로 처리, nav 링크 없음)

**MobileNav (≤483px)**: 4개 항목
- Home / New / Charts / Search

---

## `/new` 페이지 섹션 컴포넌트 위치

> ⚠️ 실제 파일은 `src/components/sections/` 에 있음 (CLAUDE.md 원본의 `new/` 아님)

| 섹션 | 파일 | 상태 |
|------|------|------|
| ShowcaseHero | `components/sections/ShowcaseHero.tsx` | ✅ |
| ShowCategory | `components/sections/ShowCategory.tsx` | ✅ |
| NewShowsGrid | `components/sections/NewShowsGrid.tsx` | ✅ |
| TopEpisodesShelf | `components/sections/TopEpisodesShelf.tsx` | ✅ |
| TheMomentShelf | `components/sections/TheMomentShelf.tsx` | ✅ |
| GenreShelf ×3 | `components/sections/GenreShelf.tsx` | ✅ True Crime / Comedy / News |
| MoreToDiscover | `components/sections/MoreToDiscover.tsx` | ✅ |

### ShowcaseHero 구조
- 텍스트(뱃지 + 제목) **위** → 16:9 이미지 **아래** (텍스트 오버레이 아님)
- 2컬럼 grid (≤767px에서 1컬럼)
- 이미지 aspect-ratio: `528/303`

---

## 개발 서버

```bash
cd /Users/jin-chulmoon/Documents/Work/01_CreativeMoon/_portfolio_sites_renewal/PodcastVille
npm run dev   # http://localhost:3000
```

`.claude/launch.json`에 "PodcastVille" 서버 설정 있음.

---

## 페이지 구현 현황

| 페이지 | 상태 | 비고 |
|--------|------|------|
| `/` (Home) | ✅ 완성 | |
| `/new` | ✅ 완성 | GenreShelf ×3 포함 |
| `/charts` | ✅ 완성 | 탭 필터 (8개 카테고리) |
| `/search` | ✅ 완성 | Shows / Episodes / Channels 검색 |
| `/podcast/[slug]` | ✅ 완성 | The Daily 외 다수 |

## RelatedSection 클래스명 매핑 (리네임 이력)

| 이전 (nyt 기반) | 현재 (컴포넌트 기반) |
|---|---|
| `NYTBanner` 함수 | `PublisherBanner` |
| `.nytBanner` | `.publisherBanner` |
| `.nytHeader` | `.bannerHeader` |
| `.nytTitle` | `.bannerTitle` |
| `.nytCard` | `.bannerCard` |
| `.nytCardBg/Content/Desc/Meta/Controls/Trailer/Add` | `.bannerCard*` |
| `.nytPlayIcon` | `.bannerPlayIcon` |
| `.nytSubscribe/Btn/Left/Text/Arrow` | `.bannerSubscribe*` |
| `.nytLogo` | `.bannerLogo` |

> `podcast.nytPodcasts` 데이터 프로퍼티는 리네임 대상 아님 (classname 한정).
