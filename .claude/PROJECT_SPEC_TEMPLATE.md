# [프로젝트명] — Project Specification

## Project Overview

[회사명] 기업 웹사이트. [참조 사이트 URL]의 **레이아웃/인터랙션을 그대로 복제**하되, 콘텐츠를 [회사명]에 맞게 교체.

- **회사**: [회사명]
- **사업**: [사업 설명]
- **슬로건**: "[슬로건]"
- **타겟**: [B2B / B2C / 타겟 설명]

---

## Tech Stack

- **Next.js 15** (App Router, `src/` directory)
- **TypeScript**
- **Tailwind CSS v4**
- **GSAP 3** + ScrollTrigger (`gsap`, `@gsap/react`)
- **next/font/google** ([사용 폰트 나열])

### 초기화 명령어
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
npm install gsap @gsap/react
```

> **디자인 토큰·이벤트 스펙**: `CLONE_INSTRUCTIONS.md` 참조.

---

## Sitemap & Page Specifications

### Navigation Mapping

| 메뉴 | URL | 원본 (참조 사이트) |
|------|-----|------------------|
| [메뉴명] | `/[path]` | `/[원본 path]/` |
| [메뉴명] | `/[path]` | `/[원본 path]/` |
| [메뉴명] | `/[path]` | `/[원본 path]/` |
| [메뉴명] | `/[path]` | `/[원본 path]/` |
| [메뉴명] | `/[path]` | (신규 - 원본에 없음) |

---

### 1. Homepage (`/`) — `src/app/page.tsx`

**섹션 순서 (위→아래):**

#### 1-1. [섹션명] (`src/components/home/[ComponentName].tsx`)
- [레이아웃 설명]
- [콘텐츠 설명]
- [데이터/슬라이드 내용]

#### 1-2. [섹션명] (`src/components/home/[ComponentName].tsx`)
- [레이아웃 설명]
- [콘텐츠 설명]

---

### 2. [페이지명] (`/[path]`) — `src/app/[path]/page.tsx`

1. **[컴포넌트명]**: [설명]
2. **[컴포넌트명]**: [설명]

---

### 3. [페이지명] (`/[path]/[slug]`) — `src/app/[path]/[slug]/page.tsx`

`generateStaticParams()`로 [N]개 slug 사전 렌더링.

---

## Shared Components

### Layout

| 컴포넌트 | 파일 | 설명 |
|---------|------|------|
| Header | `src/components/layout/Header.tsx` | `"use client"`. fixed top, z-50. 스크롤 시 배경 전환. 로고 + nav + CTA. 모바일: 햄버거 → 풀스크린 오버레이 |
| Footer | `src/components/layout/Footer.tsx` | [컬러] 배경. [N]컬럼→스택. 로고+태그라인 / 메뉴 / 연락처 / 법적링크 |
| ScrollUpBadge | `src/components/layout/ScrollUpBadge.tsx` | 회전 원형 SVG. 클릭 시 `scrollTo(top)` |

### Shared UI

| 컴포넌트 | 파일 | 설명 |
|---------|------|------|
| AnimatedText | `src/components/shared/AnimatedText.tsx` | GSAP clipPath text reveal |
| Button | `src/components/shared/Button.tsx` | CTA. props: `href`, `label`, `variant` |
| Badge | `src/components/shared/Badge.tsx` | 카테고리 태그 |
| ImageWithPlaceholder | `src/components/shared/ImageWithPlaceholder.tsx` | next/image wrapper, placehold.co fallback |
| SectionHeading | `src/components/shared/SectionHeading.tsx` | 섹션 제목 + 선택적 서브타이틀 |

---

## File Structure

```
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    not-found.tsx
    [path]/
      page.tsx
      [slug]/
        page.tsx
  components/
    layout/
      Header.tsx
      Footer.tsx
      ScrollUpBadge.tsx
    home/
      [ComponentName].tsx
    [page]/
      [ComponentName].tsx
    shared/
      AnimatedText.tsx
      Button.tsx
      Badge.tsx
      ImageWithPlaceholder.tsx
      SectionHeading.tsx
  lib/
    gsap-config.ts
    animations.ts
    utils.ts
  data/
    [entity].ts
  types/
    index.ts
public/
  images/
    logo/
    hero/
    products/
    backgrounds/
    partners/
    icons/
```

---

## Data Schemas (`src/types/index.ts`)

```typescript
export interface [MainEntity] {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  shortDescription: string;
  heroImage: string;
  thumbnailImage: string;
  categories: [CategoryType][];
  features: { title: string; description: string }[];
}

export type [CategoryType] =
  | "[category-1]"
  | "[category-2]"
  | "[category-3]";

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
}

export interface Partner {
  name: string;
  logo: string;
  location: string;
  province: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  companyName: string;
  tagline: string;
  email: string;
  phone: string;
  parentCompany: string;
}
```

---

## Content Data

### [Main Entity] Data ([N]개)

```
1. [항목명]
   - slug: [slug]
   - tagline: "[tagline]"
   - shortDescription: "[짧은 설명]"
   - description: "[긴 설명]"
   - categories: ["[category]"]
   - heroImage: [이미지 경로]

2. [항목명]
   ...
```

### Team Data ([N]명)

```
1. [이름] - [직함] - "[약력]"
2. [이름] - [직함] - "[약력]"
```

이미지: 모두 placeholder `https://placehold.co/400x400/[색상]/FFFFFF?text=[이니셜]`

### Partner Data

```
{ name: "[파트너명]", logo: "[로고 경로]", location: "[도시]", province: "[주/도]" }
```

---

## Asset Download URLs

빌드 시작 전 다운로드하여 `public/images/`에 저장:

```bash
curl -o public/images/logo/logo.png "[로고 URL]"
curl -o public/images/hero/hero.webp "[히어로 이미지 URL]"
# ... 추가 에셋
```

---

## GSAP 초기화 (`src/lib/gsap-config.ts`)

```typescript
"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export { gsap, ScrollTrigger };
```

---

## Build Order (권장 순서)

1. 프로젝트 초기화 + 의존성 설치
2. 에셋 다운로드 (curl)
3. 기초 파일: `types/`, `data/`, `lib/`
4. Root layout (`layout.tsx`) — 폰트, 메타데이터
5. Header + Footer
6. Shared components
7. Homepage 섹션 (위→아래 순서)
8. 나머지 페이지 (우선순위 순)
9. 동적 라우트 (`[slug]`)
10. `not-found.tsx`
11. 반응형 테스트 + 애니메이션 미세 조정

---

## Verification

빌드 후 확인사항:
1. `npm run dev` → 에러 없이 실행
2. 모든 라우트 접근 가능
3. 히어로 슬라이더/애니메이션 작동
4. 스크롤 시 텍스트 reveal 작동
5. 헤더 스크롤 시 배경색 전환
6. 모바일 메뉴 열기/닫기
7. 반응형 레이아웃 (Mobile / Tablet / Desktop)
8. `npm run build` → 에러 없이 빌드 성공
