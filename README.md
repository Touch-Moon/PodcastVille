# PodcastVille

> Apple Podcasts 수준의 인터랙션을 목표로 한 팟캐스트 플랫폼 완전 리뉴얼 프로젝트.
> UX/UI 디자인부터 프론트엔드 개발까지 1인 풀 사이클로 진행했습니다.

🔗 **[Live Demo](https://podcast-ville.vercel.app)** · **[Case Study](https://podcast-ville.vercel.app/podcastville-casestudy.html)**

---

## Overview

PodcastVille은 기존 서비스의 시각적 일관성·사용성·퍼포먼스 문제를 해소하기 위해 완전히 재설계된 팟캐스트 웹앱입니다. Apple Podcasts의 레이아웃과 인터랙션 품질을 레퍼런스로 삼아, 기획·디자인·구현·배포 전 과정을 단독으로 수행했습니다.

## Tech Stack

| 영역 | 기술 |
|------|------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | SCSS Modules + CSS Custom Properties |
| Font | Inter via `next/font/google` |
| Image | `next/image` |
| Deployment | Vercel (GitHub CI/CD) |

## Pages

| 경로 | 설명 |
|------|------|
| `/` | Home — 추천 콘텐츠 및 최신 에피소드 |
| `/new` | New — 신규 쇼 · 장르별 선반 · 에디토리얼 섹션 |
| `/charts` | Top Charts — 8개 카테고리 탭 필터 |
| `/search` | Search — 실시간 검색 (Shows / Episodes / Channels / Categories) |
| `/podcast/[slug]` | Podcast Detail — 에피소드 목록, 평점, 호스트, 관련 쇼 |
| `/library/*` | Library — Latest Episodes, Shows, Channels, Saved |

## Key Features

- **앰비언트 풀스크린 플레이어** — Canvas API + `requestAnimationFrame`으로 앨범 아트워크를 4개 회전 스프라이트로 렌더링, 현재 트랙에 맞게 동적 업데이트
- **CSS Container Queries** — 미디어 쿼리 대신 컨테이너 기준 카드 그리드 반응형 구현
- **완전 반응형** — 375px 모바일 → 1440px 데스크탑 전 구간 대응
- **실시간 검색** — 클라이언트 사이드 필터링, URL 파라미터 동기화
- **다크 디자인 시스템** — CSS 변수 기반 토큰 (`--color-bg`, `--color-accent`, `--color-separator` 등)

## Layout Structure

```
<body>
  <div id="app-container">          ← CSS Grid: 260px | 1fr
    <div id="sidebar-col">
      <Sidebar />                   ← fixed, 260px (≥484px)
    </div>
    <div id="scrollable-page">
      <PlayerBar />                 ← fixed top, h:54px
      <main>
        {children}
      </main>
      <MobileNav />                 ← fixed bottom, ≤483px
    </div>
  </div>
</body>
```

## Responsive Breakpoints

| 너비 | 변화 |
|------|------|
| ≤ 483px | Sidebar 숨김 → MobileNav 표시, PlayerBar `left: 0` |
| ≤ 600px | Speed 버튼 숨김 |
| ≤ 768px | Volume Slider · Podcast Icon 숨김 |
| ≤ 1100px | Sign In 버튼 숨김 |

## Getting Started

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── globals.scss          CSS 변수 + 그리드 레이아웃
│   ├── layout.tsx            앱 컨테이너 조립
│   ├── new/                  /new 페이지
│   ├── charts/               /charts 페이지
│   ├── search/               /search 페이지
│   ├── library/              /library/* 페이지
│   └── podcast/[slug]/       팟캐스트 상세 페이지
├── components/
│   ├── layout/               PlayerBar · Sidebar · MobileNav · FullScreenPlayer
│   ├── sections/             페이지별 섹션 컴포넌트
│   ├── podcast/              팟캐스트 상세 전용 컴포넌트
│   └── ui/                   공용 UI (PodcastCard · SectionHeader 등)
├── data/                     정적 데이터 (podcasts · episodes · podcastDetails)
└── types/                    TypeScript 타입 정의
```

---

## Designer & Developer

**Moon** — UX/UI Designer & Front-end Developer
[Case Study (KO/EN)](https://podcast-ville.vercel.app/podcastville-casestudy.html)
