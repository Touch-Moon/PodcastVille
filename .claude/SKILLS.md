# Claude Code - 웹사이트 빌드 스킬 가이드

## 사용법

새 프로젝트 시작 시 이 폴더를 프로젝트 루트의 `.claude/`로 복사:

```bash
cp -r _claude_template/ 새프로젝트/.claude/
```

---

## 파일 구성

| 파일 | 역할 |
|------|------|
| `settings.json` | 프로젝트 권한 설정 (git 커밋 가능, 팀 공유) |
| `settings.local.json` | 개인 권한 설정 (git 무시, 로컬 전용) |
| `launch.json` | 프리뷰 서버 설정 |
| `SKILLS.md` | 이 문서 |

---

## 권한 패턴 레퍼런스

### Bash 명령어

| 패턴 | 설명 |
|------|------|
| `Bash(npm *)` | npm install, run build, run dev 등 모든 npm 명령 |
| `Bash(npx *)` | create-next-app, tailwindcss 등 npx 실행 |
| `Bash(curl *)` | 이미지/에셋 다운로드 |
| `Bash(mkdir *)` | 디렉토리 생성 |
| `Bash(git *)` | git 명령 (commit, push 등) |
| `Bash(rm public/*)` | public 폴더 내 파일 삭제만 허용 |
| `Bash(rm .next/*)` | 빌드 캐시 삭제만 허용 |

### 웹 접근

| 패턴 | 설명 |
|------|------|
| `WebFetch(domain:example.com)` | 특정 도메인만 허용 |

프로젝트별로 참조 사이트, 에셋 CDN 도메인을 추가할 것.

### Preview 서버

`mcp__Claude_Preview__preview_*` 패턴으로 프리뷰 관련 도구 전체 허용.

---

## 프로젝트 세팅 체크리스트

새 웹사이트 프로젝트 시작 시:

### 1. .claude 폴더 복사
```bash
cp -r _claude_template/ 새프로젝트/.claude/
```

### 2. settings.json에 프로젝트별 도메인 추가
```json
"WebFetch(domain:참조사이트.com)",
"WebFetch(domain:클라이언트CDN.com)"
```

### 3. launch.json 프로젝트명 수정
```json
{
  "name": "프로젝트명",
  "runtimeExecutable": "npm",
  "runtimeArgs": ["run", "dev"],
  "port": 3000,
  "autoPort": true
}
```

### 4. CLAUDE.md 작성
프로젝트 루트에 `CLAUDE.md` 생성 - 아래 구조 권장:

```markdown
# 프로젝트명

## Project Overview
- 회사/클라이언트 정보
- 사이트 목적

## Tech Stack
- 프레임워크, 라이브러리

## Design Style Guide
- Colors (토큰 테이블)
- Typography (폰트, 크기)
- Spacing System
- Animations

## Sitemap & Page Specifications
- 각 페이지별 상세 스펙

## Data Schemas
- TypeScript 타입 정의

## File Structure
- 폴더/파일 구조

## Build Order
- 권장 빌드 순서

## Verification
- 빌드 후 확인사항
```

---

## 참조 사이트 조사 워크플로우

### 조사 항목 (빠짐없이)

1. **폰트**
   - DevTools > Computed > font-family 확인
   - weight, size, line-height, letter-spacing
   - Google Fonts vs 커스텀 폰트 여부

2. **레이아웃/스페이싱**
   - container max-width
   - margin vs padding 방식
   - 섹션 간 간격
   - 그리드 컬럼 비율

3. **컬러 팔레트**
   - Primary, Secondary, Accent
   - 배경색, 텍스트색
   - 호버/액티브 상태 색상

4. **애니메이션 스택**
   - 사용 라이브러리 (GSAP, Lenis, Luge, Framer Motion 등)
   - 페이지 로드 애니메이션
   - 스크롤 트리거 애니메이션
   - 호버 효과
   - 페이지 전환 효과

5. **반응형 브레이크포인트**
   - Desktop / Tablet / Mobile 기준점
   - 네비게이션 전환 시점
   - 그리드 변화 시점

### 조사 결과 저장

프로젝트 루트에 `INVESTIGATION_NOTES.md` 생성:
- 원본 사이트 URL
- 위 5개 항목별 상세 분석
- 스크린샷 참조
- 구현 시 주의사항

---

## 이미지 에셋 워크플로우

### 소스 우선순위
1. 클라이언트 제공 에셋
2. 클라이언트 기존 사이트에서 다운로드
3. Unsplash (무료, 상업적 사용 가능)
4. Pexels (무료, 상업적 사용 가능)

### Unsplash 이미지 URL 형식
```
https://images.unsplash.com/photo-{ID}?w={WIDTH}&h={HEIGHT}&fit=crop&q=80
```

### 헤드샷 (얼굴 중심 크롭)
```
https://images.unsplash.com/photo-{ID}?w=400&h=400&fit=crop&crop=face&q=80
```

### 다운로드 패턴
```bash
curl -L -o public/images/카테고리/파일명.jpg "URL"
```

### Placeholder 제거 체크
빌드 완료 후 반드시 확인:
```bash
grep -r "placehold.co" src/
```
0건이어야 함.

---

## 빌드 검증 체크리스트

매 빌드 완료 시 확인:

- [ ] `npm run build` 에러 없이 성공
- [ ] 모든 라우트 접근 가능
- [ ] 이미지 전부 로드됨 (placeholder 없음)
- [ ] 반응형 (모바일/태블릿/데스크톱)
- [ ] 네비게이션 (헤더, 모바일 메뉴, 푸터 링크)
- [ ] 애니메이션 동작 (스크롤, 호버, 로드)
- [ ] 폼 동작 (있을 경우)
- [ ] 콘솔 에러 0건
- [ ] Lighthouse 기본 점수 확인

---

## 자주 쓰는 명령어

```bash
# 프로젝트 초기화
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# GSAP 설치
npm install gsap @gsap/react

# 빌드 확인
npm run build

# 빌드 캐시 삭제
rm -rf .next

# placeholder 이미지 검색
grep -r "placehold.co" src/
```
