# Claude Command Examples
# 토큰 절약 + 작업 최적화를 위한 단계별 명령 모음

> **원칙**: 파일에 있는 내용을 채팅에서 반복하지 않는다. 파일명 + 섹션 번호만 참조한다.

---

## STEP 0. 새 프로젝트 시작

```
CLONE_INSTRUCTIONS_TEMPLATE.md → CLONE_INSTRUCTIONS.md
PROJECT_SPEC_TEMPLATE.md → CLAUDE.md
로 이름을 바꾸고, 두 파일의 [프로젝트명] [참조 사이트 URL] 을 [실제값]으로 교체해줘.
```

---

## STEP 1. 리서치 (참조 사이트 분석 → 파일 채우기)

```
[참조 사이트 URL] 을 분석해서
CLONE_INSTRUCTIONS.md의 [조사 필요] 항목을 순서대로 채워줘.

조사 순서:
1. DESIGN: 컬러 → 폰트(DevTools) → 그리드/간격 → Border/Shadow → 이벤트
2. EVENTS: 페이지로드 → 스크롤 → hover → 클릭 → sticky → 터치 → 자동실행

유료 폰트 발견 시 Google Fonts 대체를 찾아서 같이 기록해줘.
```

---

## STEP 2. 디자인 단계 (레이아웃 · 스타일링만)

### 2-1. 프로젝트 초기 셋업
```
CLAUDE.md의 Tech Stack과 Build Order 1~4단계를 실행해줘.
(초기화, 에셋 다운로드, 기초 파일, root layout)
애니메이션은 아직 붙이지 마.
```

### 2-2. Header + Footer
```
CLAUDE.md Shared Components와
CLONE_INSTRUCTIONS.md Section 1 (DESIGN) 1-1~1-6을 참조해서
Header.tsx와 Footer.tsx를 만들어줘.
sticky 동작 포함, 애니메이션 제외.
```

### 2-3. 페이지 섹션 (하나씩)
```
CLAUDE.md [섹션명] 스펙과
CLONE_INSTRUCTIONS.md Section 1 (DESIGN)을 참조해서
[ComponentName].tsx를 만들어줘.
이벤트/애니메이션은 아직 붙이지 마.
```

### 2-4. 전체 디자인 검토
```
현재 구현된 컴포넌트들을 CLONE_INSTRUCTIONS.md Section 1 기준으로 점검해줘.
컬러, 폰트, 간격, 그리드, breakpoint 위주로 확인하고 틀린 것만 수정해줘.
```

---

## STEP 3. 이벤트 단계 (인터랙션 · 애니메이션)

### 3-1. 페이지 로드 애니메이션
```
CLONE_INSTRUCTIONS.md Section 2-1 (페이지 로드 애니메이션)을 참조해서
HeroSlider.tsx와 Header.tsx에 진입 애니메이션을 추가해줘.
```

### 3-2. 스크롤 트리거
```
CLONE_INSTRUCTIONS.md Section 2-2 (ScrollTrigger)를 참조해서
[ComponentName].tsx에 스크롤 애니메이션을 추가해줘.
```

### 3-3. Hover + 클릭
```
CLONE_INSTRUCTIONS.md Section 2-3, 2-4를 참조해서
[ComponentName].tsx의 hover와 클릭 이벤트를 추가해줘.
```

### 3-4. 모바일 터치
```
CLONE_INSTRUCTIONS.md Section 2-7 (모바일 터치 이벤트)를 참조해서
HeroSlider swipe와 tap target을 처리해줘.
```

### 3-5. 자동 실행
```
CLONE_INSTRUCTIONS.md Section 2-8 (자동 실행 이벤트)를 참조해서
[슬라이더/마키/배지]의 자동 실행을 추가해줘.
```

---

## STEP 4. 개발 단계 (나머지 페이지)

### 페이지 단위 작업
```
CLAUDE.md [페이지명] 스펙과
CLONE_INSTRUCTIONS.md를 참조해서
[페이지명] 페이지를 완성해줘.
디자인 → 이벤트 순서로.
```

### 동적 라우트
```
CLAUDE.md products/[slug] 스펙을 참조해서
동적 라우트 페이지를 만들어줘.
generateStaticParams() 포함.
```

---

## STEP 5. 검증

### 빠른 점검
```
CLAUDE.md Verification 항목을 기준으로
현재 구현 상태를 점검하고 빠진 것만 알려줘.
```

### 반응형 점검
```
CLONE_INSTRUCTIONS.md Section 1-3 Breakpoint 기준으로
Mobile(393px) / Tablet(834px) / Desktop(1280px) / FHD(1920px)
각 화면에서 레이아웃이 올바른지 점검해줘.
```

### 빌드 전 최종 점검
```
npm run build 전에 TypeScript 오류, 누락된 import,
next/image 설정, generateStaticParams 누락 여부를 확인해줘.
```

---

## 토큰 절약 규칙

| 하지 말 것 | 대신 |
|-----------|------|
| 채팅에 스펙 내용 직접 붙여넣기 | 파일명 + 섹션 번호만 참조 |
| 전체 페이지를 한 번에 요청 | 컴포넌트 하나씩 순서대로 |
| 디자인 + 이벤트 동시 요청 | 디자인 완성 후 이벤트 분리 작업 |
| "모든 것을 완성해줘" | 단계별로 명확한 범위 지정 |
| 오류 발생 시 전체 재작성 요청 | 오류 메시지만 붙여넣고 수정 요청 |
