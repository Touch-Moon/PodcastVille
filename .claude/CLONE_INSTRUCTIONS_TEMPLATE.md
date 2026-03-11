# [프로젝트명] — Clone Instructions

참조 사이트: [참조 사이트 URL]
복제 목표: 레이아웃·인터랙션 구조를 그대로 유지하고 콘텐츠를 [프로젝트명]에 맞게 교체.

> **파일 역할**: 디자인 토큰 + 이벤트/인터랙션 스펙 전용. 빌드 순서·페이지 스펙·컴포넌트 구조·데이터는 **CLAUDE.md** 참조.

---

## 1. DESIGN

### 1-1. 컬러 시스템

| Token | Hex | 용도 |
|-------|-----|------|
| `[token-1]` | `[#hex]` | Primary — [용도] |
| `[token-2]` | `[#hex]` | Secondary — [용도] |
| `[token-3]` | `[#hex]` | 배경 — [용도] |
| `[token-4]` | `[#hex]` | [용도] |
| `[token-5]` | `[#hex]` | 본문 텍스트 |
| `white` | `#FFFFFF` | 기본 배경 |

**오버레이 규칙**
- 히어로 이미지 위: `[조사 필요]`
- 어두운 섹션 위 텍스트: `[조사 필요]`
- 카드 hover 오버레이: `[조사 필요]`

---

### 1-2. 타이포그래피

> **폰트 조사 규칙**: 참조 사이트에서 font-family, font-weight, font-size(breakpoint별), line-height, letter-spacing을 DevTools로 직접 확인. 유료/독점 폰트(Söhne, Telegraf, GT America 등)는 **Google Fonts 무료 대체**를 찾아 적용할 것.

| 역할 | Font | Weight | Desktop | Tablet | Mobile |
|------|------|--------|---------|--------|--------|
| H1 Hero | [조사 필요] | [조사 필요] | [조사 필요] | [조사 필요] | [조사 필요] |
| H2 Section | [조사 필요] | [조사 필요] | [조사 필요] | [조사 필요] | [조사 필요] |
| H3 Card | [조사 필요] | [조사 필요] | [조사 필요] | [조사 필요] | [조사 필요] |
| Body | [조사 필요] | [조사 필요] | [조사 필요] | [조사 필요] | [조사 필요] |
| Body small | [조사 필요] | [조사 필요] | [조사 필요] | [조사 필요] | [조사 필요] |
| Nav link | [조사 필요] | [조사 필요] | [조사 필요] | [조사 필요] | [조사 필요] |
| Button label | [조사 필요] | [조사 필요] | [조사 필요] | [조사 필요] | [조사 필요] |

**Line-height 규칙**
- 헤딩 (H1~H3): `[조사 필요]`
- Body: `[조사 필요]`
- Body small / nav: `[조사 필요]`

**Letter-spacing 규칙**
- 버튼·뱃지 레이블: `[조사 필요]`
- 카테고리 태그 (uppercase): `[조사 필요]`
- 본문: `[조사 필요]`

---

### 1-3. 그리드 & 레이아웃

**Breakpoint 기준**

| 이름 | 범위 | 기준 기기 | Tailwind prefix |
|------|------|----------|-----------------|
| Mobile | < 768px | iPhone 17 Pro (393px) | 기본 (prefix 없음) |
| Tablet | 768px – 1023px | iPad Pro 11" (834px) | `md:` |
| Large | 1024px – 1279px | iPad Pro 13" / 소형 노트북 | `lg:` |
| Desktop | 1280px – 1919px | MacBook 13" (1280px) | `xl:` |
| Wide | 1920px – 2559px | FHD 모니터 (1920px) | `2xl:` |
| Ultra | ≥ 2560px | 2K/4K 이상 | 커스텀 `@3xl` |

**간격 시스템**
- Container: `[조사 필요]` / 좌우 padding `[조사 필요]` (mobile) → `[조사 필요]` (md:) → `[조사 필요]` (lg:)
- Section 상하 padding: `[조사 필요]` (mobile) → `[조사 필요]` (md:) → `[조사 필요]` (lg:)
- 카드 그리드 gap: `[조사 필요]` (mobile) → `[조사 필요]` (desktop)
- 컴포넌트 내부 gap: `[조사 필요]`

**섹션별 그리드 구조**

| 섹션 | Desktop | Tablet | Mobile |
|------|---------|--------|--------|
| [섹션명] | [조사 필요] | [조사 필요] | [조사 필요] |
| [섹션명] | [조사 필요] | [조사 필요] | [조사 필요] |
| [섹션명] | [조사 필요] | [조사 필요] | [조사 필요] |

---

### 1-4. Border & Radius & Shadow

| 요소 | 규칙 |
|------|------|
| CTA 버튼 | `[조사 필요]` |
| 카드 이미지 | `[조사 필요]` |
| 뱃지 | `[조사 필요]` |
| 입력 필드 | `[조사 필요]` |
| 카드 shadow | `[조사 필요]` |
| Header scroll shadow | `[조사 필요]` |

**Transition 기준값**

| 속도 | duration | 용도 |
|------|----------|------|
| Fast | `duration-200` | hover 색상 전환 (링크, 버튼 opacity) |
| Base | `duration-300` | Header 배경 전환, 카드 shadow, 버튼 bg 반전 |
| Slow | `duration-500` | 이미지 scale, 필터 전환 |

**Smooth Scroll**
- `html` 요소에 `scroll-behavior: smooth` 전역 적용 (`globals.css`)

---

### 1-5. 이미지 처리 규칙

- 모든 이미지: `next/image` 사용, `fill` 또는 고정 aspect-ratio
- 카드 이미지 aspect-ratio: `[조사 필요]`
- 이미지 없을 때 fallback: `placehold.co` URL
- 이미지 컨테이너: `overflow-hidden` 필수 (scale hover를 위해)
- `object-fit: cover` 기본 적용

---

### 1-6. 컴포넌트별 스타일 규칙

**버튼 variant**
- `outline`: `[조사 필요]`
- `filled`: `[조사 필요]`
- 공통: `[조사 필요]`

**뱃지**
- `[조사 필요]`

**Form 스타일**
- Input 기본: `[조사 필요]`
- Input focus: `[조사 필요]`
- Placeholder: `[조사 필요]`
- Label: `[조사 필요]`

**Z-index 레이어 시스템**

| z값 | 용도 |
|-----|------|
| `z-0` | 기본 콘텐츠 |
| `z-10` | 카드 hover 상태, 이미지 오버레이 |
| `z-20` | Sticky 보조 요소 |
| `z-40` | 모바일 메뉴 오버레이 배경 (dimmed) |
| `z-50` | Header, 모바일 메뉴 패널 |
| `z-[60]` | 상단 고정 배지류 (항상 최상단) |

---

## 2. EVENTS

### 2-1. 페이지 로드 애니메이션

| 대상 | 구현 방식 | 상세 |
|------|----------|------|
| [요소명] | [GSAP / CSS] | `[조사 필요]` |
| [요소명] | [GSAP / CSS] | `[조사 필요]` |

> **주의**: 모든 페이지 로드 애니메이션은 `useEffect` + `useGSAP` 조합으로 구현. SSR 환경 오류 방지를 위해 `"use client"` 필수.

---

### 2-2. 스크롤 트리거 애니메이션 (ScrollTrigger)

| 애니메이션 | 대상 컴포넌트 | GSAP 설정 |
|-----------|-------------|----------|
| [애니메이션명] | [컴포넌트명] | `[조사 필요]` |
| [애니메이션명] | [컴포넌트명] | `[조사 필요]` |

**ScrollTrigger 공통 설정**
```typescript
trigger: element,
start: "[조사 필요]",
toggleActions: "play none none none",
```

**라우트 변경 시**
```typescript
ScrollTrigger.refresh();  // 페이지 전환 후 호출 필수
```

---

### 2-3. Hover 이벤트

| 대상 요소 | Hover 동작 | 구현 방식 |
|----------|-----------|----------|
| 카드 이미지 | `[조사 필요]` | `[조사 필요]` |
| CTA 버튼 | `[조사 필요]` | `[조사 필요]` |
| Nav 링크 | `[조사 필요]` | `[조사 필요]` |
| Footer 링크 | `[조사 필요]` | `[조사 필요]` |
| [기타 요소] | `[조사 필요]` | `[조사 필요]` |

---

### 2-4. 클릭 이벤트

| 대상 | 동작 |
|------|------|
| 제품/콘텐츠 카드 | Next.js `<Link>` → 라우트 이동 |
| CTA 버튼 | `[조사 필요]` |
| 이메일 | `href="mailto:[조사 필요]"` |
| 전화 | `href="tel:[조사 필요]"` |
| ScrollUpBadge | `window.scrollTo({ top: 0, behavior: 'smooth' })` |
| 모바일 햄버거 | 풀스크린 오버레이 메뉴 열기 |
| 모바일 메뉴 닫기 | `isMenuOpen: false` + 스크롤 복원 |
| 모바일 메뉴 링크 | 이동 후 메뉴 자동 닫기 |
| [기타 요소] | `[조사 필요]` |

---

### 2-5. Sticky 이벤트

**Header Sticky**

| 상태 | 조건 | 스타일 변화 |
|------|------|------------|
| 초기 (top) | `scrollY === 0` | `[조사 필요]` |
| 스크롤 후 | `scrollY > [조사 필요]` | `[조사 필요]`, transition 300ms |
| 메뉴 열림 | `isMenuOpen === true` | `[조사 필요]` |

**모바일 메뉴 오버레이 Scroll Lock**
- 메뉴 열림 시: `document.body.style.overflow = "hidden"`
- 메뉴 닫힘 시: `document.body.style.overflow = ""`

---

### 2-6. 마우스 커서

- 참조 사이트 커스텀 커서 여부: `[조사 필요]`
- 구현 기준: `[커스텀 커서 구현 / 기본 OS 커서 유지]`

단, 클릭 가능 요소에는 반드시 `cursor-pointer` 명시:
- 카드 전체 (`<Link>` wrapping)
- 버튼 (`<button>`, `<a>`)
- 고정 배지류

---

### 2-7. 모바일 터치 이벤트

| 대상 | 동작 | 구현 방식 |
|------|------|----------|
| 슬라이더/캐러셀 | 좌우 swipe로 전환 | `touchstart` / `touchend` deltaX 감지 → 50px 이상 시 prev/next |
| 모바일 메뉴 오버레이 | 외부 tap으로 닫기 | 오버레이 배경 `onClick` → `setMenuOpen(false)` |
| 카드 | tap = 클릭과 동일 | `<Link>` 기본 동작 |
| [기타 요소] | `[조사 필요]` | `[조사 필요]` |

**Tap Target 크기**
- 모든 클릭 가능 요소 최소 크기: `44x44px` (Apple HIG 기준)
- 햄버거 버튼, 닫기 버튼, pagination dot: `min-w-[44px] min-h-[44px]` 보장

**Hover → Touch 전환 규칙**
- hover 효과(이미지 scale, 색상 전환)는 터치 기기에서 미동작이 정상
- 터치 기기에서 별도 active 상태 필요 시: `:active` pseudo-class 사용
- `@media (hover: none)`으로 터치 환경 분기 가능

---

### 2-8. 자동 실행 이벤트

| 이벤트 | 대상 | 설정 |
|--------|------|------|
| 슬라이더 자동 전환 | [컴포넌트명] | `[조사 필요]` interval, `[조사 필요]` 전환 방식 |
| 마키 자동 스크롤 | [컴포넌트명] | CSS `@keyframes marquee`, `[조사 필요]` linear infinite |
| 회전 배지 | [컴포넌트명] | CSS `animation: spin [조사 필요] linear infinite` |
