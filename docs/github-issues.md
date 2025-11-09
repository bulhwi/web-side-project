# GitHub Issues - Tailwind CSS Plus 리팩토링

> BD 한의원 웹사이트 Tailwind CSS Plus 템플릿 적용 리팩토링 이슈 목록

**프로젝트**: BD 한의원 웹사이트
**마일스톤**: Tailwind CSS Plus 리팩토링
**작성일**: 2025-11-09

---

## 📋 Phase 0: Tailwind CSS v4 마이그레이션

### Issue #1: Tailwind CSS v4 패키지 업그레이드
**Labels**: `enhancement`, `dependencies`, `phase-0`
**Priority**: 🔴 High
**Assignee**: -

#### Description
Tailwind CSS Plus 템플릿 사용을 위해 Tailwind CSS를 v3.4.1에서 v4로 업그레이드합니다.

#### Tasks
- [ ] `tailwindcss@next` 설치
- [ ] `@tailwindcss/postcss@next` 설치
- [ ] `@tailwindcss/typography@next` 설치
- [ ] package.json 의존성 업데이트 확인

#### Acceptance Criteria
- [ ] Tailwind CSS v4 설치 완료
- [ ] 빌드 에러 없음
- [ ] 기존 스타일 정상 작동

#### References
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- `vooster-docs/tech-spec.md` - Phase 0 섹션

---

### Issue #2: tailwind.config.ts를 v4 형식으로 마이그레이션
**Labels**: `refactor`, `config`, `phase-0`
**Priority**: 🔴 High
**Assignee**: -

#### Description
Tailwind CSS v4의 새로운 설정 형식에 맞게 `tailwind.config.ts`를 변경합니다.

#### Current State
```typescript
// tailwind.config.ts (v3)
const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { /* ... */ }
    }
  }
}
```

#### Target State
```javascript
// tailwind.config.js (v4)
export default {
  content: ['./src/**/*.{ts,tsx}'],
  // v4에서는 CSS 변수 기반 색상 시스템 권장
}
```

#### Tasks
- [ ] `tailwind.config.ts` → `tailwind.config.js` 변환
- [ ] v4 설정 형식 적용
- [ ] 플러그인 설정 ES Module 형식으로 변경

#### Acceptance Criteria
- [ ] v4 형식 설정 파일 작동
- [ ] 모든 플러그인 정상 작동
- [ ] 타입 에러 없음

---

### Issue #3: globals.css를 Tailwind v4 형식으로 변경
**Labels**: `refactor`, `styling`, `phase-0`
**Priority**: 🔴 High
**Assignee**: -

#### Description
`@tailwind` 지시어를 v4의 `@import` 및 `@theme` 블록으로 변경합니다.

#### Current State
```css
/* globals.css (v3) */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    /* ... */
  }
}
```

#### Target State
```css
/* globals.css (v4) */
@import "tailwindcss";

@theme {
  --color-background: #ffffff;
  --color-primary: #007AFF;
  /* ... */
}
```

#### Tasks
- [ ] `@tailwind` → `@import "tailwindcss"` 변경
- [ ] `@layer base` → `@theme` 블록 변경
- [ ] CSS 변수 네이밍 v4 규칙 적용

#### Acceptance Criteria
- [ ] CSS 파일 빌드 성공
- [ ] 스타일 정상 렌더링
- [ ] 다크모드 정상 작동

---

### Issue #4: designTokens.ts를 CSS 변수로 마이그레이션
**Labels**: `refactor`, `design-system`, `phase-0`
**Priority**: 🟡 Medium
**Assignee**: -

#### Description
TypeScript 객체 기반 `designTokens.ts`를 CSS 변수 기반 시스템으로 통합합니다.

#### Current State
```typescript
// src/theme/designTokens.ts
export const designTokens = {
  colors: {
    systemBlue: '#007AFF',
    systemGray: '#8E8E93',
    // ...
  }
}
```

#### Target State
```css
/* globals.css */
@theme {
  /* Apple Design System */
  --color-system-blue: #007AFF;
  --color-system-gray: #8E8E93;

  /* Tailwind aliases */
  --color-primary: var(--color-system-blue);
  --color-secondary: var(--color-system-gray);
}
```

#### Tasks
- [ ] designTokens.ts의 모든 색상을 CSS 변수로 변환
- [ ] 타이포그래피 토큰 CSS 변수 변환
- [ ] 컴포넌트에서 CSS 변수 참조로 변경
- [ ] designTokens.ts 레거시 지원 여부 결정

#### Acceptance Criteria
- [ ] 모든 디자인 토큰 CSS 변수로 변환
- [ ] 기존 컴포넌트 스타일 유지
- [ ] Apple 디자인 시스템 일관성 유지

---

### Issue #5: Tailwind v4 빌드 테스트 및 검증
**Labels**: `testing`, `phase-0`
**Priority**: 🔴 High
**Assignee**: -

#### Description
Tailwind v4 마이그레이션 후 전체 프로젝트 빌드 및 작동 검증을 수행합니다.

#### Tasks
- [ ] `npm run dev` 정상 작동 확인
- [ ] `npm run build` 성공 확인
- [ ] 모든 페이지 렌더링 확인
- [ ] 반응형 스타일 작동 확인
- [ ] 다크모드 작동 확인
- [ ] 애니메이션 정상 작동 확인

#### Test Pages
- [ ] `/` (메인 페이지)
- [ ] `/services` (서비스 페이지)

#### Acceptance Criteria
- [ ] 빌드 에러 0개
- [ ] 런타임 에러 0개
- [ ] 시각적 회귀 없음
- [ ] Lighthouse 점수 유지 (90+)

---

## 📋 Phase 1: 템플릿 다운로드 및 분석

### Issue #6: Tailwind CSS Plus 템플릿 다운로드
**Labels**: `setup`, `phase-1`
**Priority**: 🔴 High
**Assignee**: -

#### Description
리팩토링에 필요한 Tailwind CSS Plus 템플릿을 다운로드합니다.

#### Tasks
- [ ] Tailwind CSS Plus 라이센스 구매 확인
- [ ] Studio 템플릿 다운로드
- [ ] Compass 템플릿 다운로드
- [ ] Syntax 템플릿 다운로드
- [ ] `/templates` 디렉토리 생성 및 저장

#### Acceptance Criteria
- [ ] 3개 템플릿 다운로드 완료
- [ ] 템플릿 파일 구조 확인
- [ ] 라이센스 준수 확인

---

### Issue #7: Studio 템플릿 구조 분석
**Labels**: `research`, `phase-1`
**Priority**: 🟡 Medium
**Assignee**: -

#### Description
Studio 템플릿의 컴포넌트 구조, 스타일, 애니메이션 패턴을 분석합니다.

#### Analysis Checklist
- [ ] 컴포넌트 트리 구조 파악
- [ ] Props 및 State 패턴 분석
- [ ] 색상 시스템 분석
- [ ] 타이포그래피 시스템 분석
- [ ] 반응형 브레이크포인트 확인
- [ ] 애니메이션 패턴 분석
- [ ] Headless UI 사용 패턴 확인

#### Deliverables
- [ ] `templates/studio-analysis.md` 문서 작성
- [ ] 컴포넌트 매핑 테이블 작성
- [ ] 변환 전략 수립

---

### Issue #8: Compass 템플릿 구조 분석
**Labels**: `research`, `phase-1`
**Priority**: 🟡 Medium
**Assignee**: -

#### Description
Compass 템플릿의 교육/코스 관련 컴포넌트를 분석하여 진료 과정 페이지에 적용 가능성을 검토합니다.

#### Analysis Checklist
- [ ] 커리큘럼 컴포넌트 분석
- [ ] 단계별 프로세스 UI 분석
- [ ] 진행 상태 표시 패턴 확인
- [ ] CTA(Call-to-Action) 패턴 분석

#### Deliverables
- [ ] `templates/compass-analysis.md` 문서 작성
- [ ] 7단계 진료 과정 매핑 계획

---

### Issue #9: Syntax 템플릿 구조 분석
**Labels**: `research`, `phase-1`
**Priority**: 🟢 Low
**Assignee**: -

#### Description
Syntax 템플릿의 문서/FAQ 컴포넌트를 분석합니다.

#### Analysis Checklist
- [ ] 검색 기능 분석
- [ ] 네비게이션 패턴 분석
- [ ] 아코디언/탭 UI 분석
- [ ] 코드 블록 스타일 확인

#### Deliverables
- [ ] `templates/syntax-analysis.md` 문서 작성

---

## 📋 Phase 2: 메인 페이지 리팩토링 (Studio 템플릿)

### Issue #10: StudioHeader → AppleHeader 리팩토링
**Labels**: `refactor`, `component`, `phase-2`
**Priority**: 🔴 High
**Assignee**: -

#### Description
Studio 템플릿의 Header 컴포넌트를 BD 한의원 스타일로 변환합니다.

#### Tasks
- [ ] JSX → TSX 변환
- [ ] Props 인터페이스 정의
- [ ] Headless UI → Radix UI 변환
- [ ] 네비게이션 메뉴 한의원 메뉴로 변경
- [ ] 모바일 햄버거 메뉴 적용
- [ ] Apple 디자인 토큰 적용
- [ ] `use client` 지시어 추가

#### Menu Items
- [ ] 홈
- [ ] 진료과목
- [ ] 한의학 소개
- [ ] 예약하기

#### Acceptance Criteria
- [ ] 데스크탑/모바일 반응형 작동
- [ ] 스크롤 시 헤더 스타일 변경
- [ ] 접근성 ARIA 속성 적용
- [ ] TypeScript 타입 에러 없음

---

### Issue #11: StudioHero → AppleHeroSection 리팩토링
**Labels**: `refactor`, `component`, `phase-2`
**Priority**: 🔴 High
**Assignee**: -

#### Description
Studio 템플릿의 Hero 섹션을 한의원 히어로 섹션으로 변환합니다.

#### Tasks
- [ ] JSX → TSX 변환
- [ ] 비디오 배경 또는 이미지 배경 선택
- [ ] 한의원 메인 카피 작성
- [ ] CTA 버튼 추가 (예약하기, 상담하기)
- [ ] Framer Motion 애니메이션 추가
- [ ] ScrollReveal 컴포넌트 통합
- [ ] Apple 타이포그래피 적용

#### Content
- [ ] 메인 헤드라인: "전통과 현대가 만나는 곳, BD 한의원"
- [ ] 서브 헤드라인: "경희대 출신 한의사의 체계적인 한의학 치료"
- [ ] CTA: "온라인 예약하기", "카카오톡 상담"

#### Acceptance Criteria
- [ ] 대형 타이포그래피 적용
- [ ] 페이드인 애니메이션 작동
- [ ] 모바일 반응형 완벽 지원
- [ ] 이미지 최적화 (Next.js Image)

---

### Issue #12: StudioServices → AppleServicesSection 리팩토링
**Labels**: `refactor`, `component`, `phase-2`
**Priority**: 🔴 High
**Assignee**: -

#### Description
Studio 템플릿의 Services 섹션을 한의학 서비스 소개 섹션으로 변환합니다.

#### Tasks
- [ ] JSX → TSX 변환
- [ ] 3개 서비스 카드 구조 생성
- [ ] 아이콘 시스템 통합 (Lucide React)
- [ ] 호버 애니메이션 추가
- [ ] ScrollReveal 애니메이션 적용
- [ ] 그리드 레이아웃 반응형 적용

#### Services Content
1. **침구치료**
   - 아이콘: Activity
   - 설명: 무통 침술, 전자침 시스템

2. **한약처방**
   - 아이콘: Pill
   - 설명: 체질 맞춤형 개인 처방

3. **추나요법**
   - 아이콘: Hand
   - 설명: 수기 교정, 척추 치료

#### Acceptance Criteria
- [ ] 3개 카드 그리드 레이아웃
- [ ] 호버 시 카드 상승 효과
- [ ] 모바일에서 단일 컬럼 레이아웃
- [ ] 각 카드 링크 작동

---

### Issue #13: StudioTeam → TeamSection 생성
**Labels**: `feature`, `component`, `phase-2`
**Priority**: 🟡 Medium
**Assignee**: -

#### Description
Studio 템플릿의 Team 섹션을 한의사 소개 섹션으로 변환합니다.

#### Tasks
- [ ] JSX → TSX 변환
- [ ] 한의사 프로필 카드 생성
- [ ] 학력 및 경력 섹션 추가
- [ ] 전문 분야 태그 추가
- [ ] 프로필 이미지 최적화

#### Content Structure
```typescript
interface Doctor {
  name: string;
  title: string;
  education: string[];
  specialties: string[];
  image: string;
}
```

#### Acceptance Criteria
- [ ] 한의사 프로필 카드 렌더링
- [ ] 반응형 그리드 레이아웃
- [ ] 이미지 lazy loading
- [ ] 접근성 준수

---

### Issue #14: StudioTestimonials → TestimonialsSection 생성
**Labels**: `feature`, `component`, `phase-2`
**Priority**: 🟡 Medium
**Assignee**: -

#### Description
Studio 템플릿의 Testimonials 섹션을 환자 후기 섹션으로 변환합니다.

#### Tasks
- [ ] JSX → TSX 변환
- [ ] 슬라이더/캐러셀 UI 구현
- [ ] 별점 시스템 추가
- [ ] 익명/실명 처리 옵션
- [ ] 자동 재생 애니메이션

#### Content Structure
```typescript
interface Testimonial {
  id: string;
  name: string;
  treatment: string;
  rating: number;
  comment: string;
  date: string;
}
```

#### Acceptance Criteria
- [ ] 3개 후기 슬라이더 작동
- [ ] 자동 재생 및 수동 조작 가능
- [ ] 모바일 스와이프 제스처 지원

---

### Issue #15: StudioCTA → CTASection 생성
**Labels**: `feature`, `component`, `phase-2`
**Priority**: 🟡 Medium
**Assignee**: -

#### Description
Studio 템플릿의 CTA(Call-to-Action) 섹션을 예약 유도 섹션으로 변환합니다.

#### Tasks
- [ ] JSX → TSX 변환
- [ ] 대형 CTA 버튼 생성
- [ ] 카카오톡 상담 버튼 추가
- [ ] 전화 상담 링크 추가
- [ ] 배경 그라디언트 또는 이미지 적용

#### Buttons
- [ ] "온라인 예약하기" (Primary)
- [ ] "카카오톡 상담" (Secondary)
- [ ] "전화 상담" (Tertiary)

#### Acceptance Criteria
- [ ] 버튼 클릭 시 해당 액션 실행
- [ ] 호버 애니메이션 작동
- [ ] 모바일에서 버튼 세로 배치

---

### Issue #16: StudioFooter → AppleFooter 리팩토링
**Labels**: `refactor`, `component`, `phase-2`
**Priority**: 🟡 Medium
**Assignee**: -

#### Description
Studio 템플릿의 Footer를 한의원 푸터로 변환합니다.

#### Tasks
- [ ] JSX → TSX 변환
- [ ] 한의원 정보 섹션 추가
- [ ] 링크 섹션 구성
- [ ] SNS 아이콘 추가
- [ ] 저작권 표시

#### Sections
1. **한의원 정보**
   - 주소, 전화번호, 이메일
   - 진료 시간

2. **빠른 링크**
   - 홈, 진료과목, 예약하기

3. **SNS**
   - Instagram, Facebook, Blog

#### Acceptance Criteria
- [ ] 4컬럼 그리드 레이아웃 (데스크탑)
- [ ] 모바일에서 단일 컬럼
- [ ] 링크 모두 작동
- [ ] 다크모드 지원

---

## 📋 Phase 3: 서비스 페이지 리팩토링 (Compass 템플릿)

### Issue #17: CompassHero → ServicesHeroSection 리팩토링
**Labels**: `refactor`, `component`, `phase-3`
**Priority**: 🔴 High
**Assignee**: -

#### Description
Compass 템플릿의 Hero 섹션을 "왜 BD 한의원인가?" 히어로로 변환합니다.

#### Tasks
- [ ] JSX → TSX 변환
- [ ] 차별화 포인트 리스트 추가
- [ ] 통계 수치 표시 (환자 수, 경력 등)
- [ ] 배경 이미지 또는 비디오 적용

#### Content
- [ ] 헤드라인: "왜 BD 한의원인가?"
- [ ] 차별점 3가지
- [ ] 통계: "10년 경력", "1,000+ 환자", "98% 만족도"

#### Acceptance Criteria
- [ ] 통계 애니메이션 (카운트업)
- [ ] 반응형 레이아웃
- [ ] 스크롤 애니메이션

---

### Issue #18: CompassCurriculum → TreatmentProcessSection 리팩토링
**Labels**: `refactor`, `component`, `phase-3`
**Priority**: 🔴 High
**Assignee**: -

#### Description
Compass 템플릿의 커리큘럼 섹션을 7단계 진료 과정 섹션으로 변환합니다.

#### Tasks
- [ ] JSX → TSX 변환
- [ ] 7단계 프로세스 UI 생성
- [ ] 단계별 아이콘 추가
- [ ] 진행 바(Progress Bar) 추가
- [ ] 아코디언 또는 탭 UI 적용

#### 7단계 진료 과정
1. 초진 상담
2. 체질 진단
3. 침구 치료
4. 한약 처방
5. 추나 요법
6. 경과 관찰
7. 사후 관리

#### Acceptance Criteria
- [ ] 7개 단계 순차 표시
- [ ] 각 단계 클릭 시 상세 정보 표시
- [ ] 진행 바 애니메이션
- [ ] 모바일 수직 레이아웃

---

### Issue #19: CompassFeatures → ServicesGridSection 리팩토링
**Labels**: `refactor`, `component`, `phase-3`
**Priority**: 🟡 Medium
**Assignee**: -

#### Description
Compass 템플릿의 Features 섹션을 한의원 특징 그리드로 변환합니다.

#### Tasks
- [ ] JSX → TSX 변환
- [ ] 4개 특징 카드 생성
- [ ] 아이콘 및 이미지 추가
- [ ] 그리드 레이아웃 적용

#### Features
1. 경희대 출신 전문의
2. 체계적 진료 시스템
3. 최신 한의학 기술
4. 1:1 맞춤 치료

#### Acceptance Criteria
- [ ] 4개 카드 2x2 그리드
- [ ] 모바일 단일 컬럼
- [ ] 호버 효과
- [ ] 스크롤 애니메이션

---

## 📋 Phase 4: FAQ/문서 페이지 (Syntax 템플릿)

### Issue #20: Syntax 검색 기능 통합
**Labels**: `feature`, `component`, `phase-4`
**Priority**: 🟢 Low
**Assignee**: -

#### Description
Syntax 템플릿의 검색 기능을 FAQ 페이지에 통합합니다.

#### Tasks
- [ ] 검색 입력 필드 생성
- [ ] 실시간 검색 필터링 구현
- [ ] 검색 결과 하이라이트
- [ ] 검색 히스토리 저장 (로컬 스토리지)

#### Acceptance Criteria
- [ ] 타이핑 시 실시간 필터링
- [ ] 한글 검색 지원
- [ ] 검색 결과 0개 시 안내 메시지
- [ ] 모바일 최적화

---

### Issue #21: Syntax FAQ 아코디언 리팩토링
**Labels**: `refactor`, `component`, `phase-4`
**Priority**: 🟡 Medium
**Assignee**: -

#### Description
Syntax 템플릿의 아코디언을 한의원 FAQ에 적용합니다.

#### Tasks
- [ ] 기존 FaqAccordion 개선
- [ ] 카테고리별 FAQ 분류
- [ ] 접기/펼치기 애니메이션 개선
- [ ] 공유 링크 기능 추가

#### FAQ Categories
- [ ] 진료 예약
- [ ] 치료 과정
- [ ] 보험 적용
- [ ] 한약 처방
- [ ] 부작용

#### Acceptance Criteria
- [ ] 카테고리 탭 작동
- [ ] 모든 FAQ 검색 가능
- [ ] 접근성 ARIA 속성
- [ ] 딥링크 지원

---

## 📋 Phase 5: 디자인 시스템 통합

### Issue #22: CSS 변수 시스템 통합
**Labels**: `refactor`, `design-system`, `phase-5`
**Priority**: 🔴 High
**Assignee**: -

#### Description
템플릿 CSS 변수와 Apple 디자인 시스템을 통합합니다.

#### Tasks
- [ ] 템플릿 CSS 변수 추출
- [ ] Apple 디자인 토큰과 매핑
- [ ] 중복 변수 제거
- [ ] 네임스페이스 정리

#### Variables Mapping
```css
@theme {
  /* Tailwind Plus 템플릿 */
  --color-primary: var(--color-system-blue);
  --color-secondary: var(--color-system-gray);

  /* Apple Design System */
  --color-system-blue: #007AFF;
  --color-system-gray: #8E8E93;
}
```

#### Acceptance Criteria
- [ ] 모든 색상 CSS 변수로 관리
- [ ] 다크모드 변수 정의
- [ ] 컴포넌트에서 참조 변경 완료

---

### Issue #23: 타이포그래피 시스템 통합
**Labels**: `refactor`, `design-system`, `phase-5`
**Priority**: 🟡 Medium
**Assignee**: -

#### Description
템플릿 타이포그래피와 Apple 시스템 폰트를 통합합니다.

#### Tasks
- [ ] 폰트 패밀리 통합
- [ ] 폰트 크기 스케일 통합
- [ ] 라인 높이 시스템 통합
- [ ] 폰트 굵기 시스템 통합

#### Acceptance Criteria
- [ ] SF Pro 폰트 패밀리 유지
- [ ] 모든 페이지 일관된 타이포그래피
- [ ] 반응형 폰트 크기 작동

---

### Issue #24: 다크모드 시스템 통합
**Labels**: `feature`, `design-system`, `phase-5`
**Priority**: 🟡 Medium
**Assignee**: -

#### Description
next-themes와 템플릿 다크모드를 통합합니다.

#### Tasks
- [ ] 다크모드 CSS 변수 정의
- [ ] 모든 컴포넌트 다크모드 지원
- [ ] 토글 버튼 UI 추가
- [ ] 로컬 스토리지 저장

#### Acceptance Criteria
- [ ] 다크/라이트 모드 전환 작동
- [ ] 페이지 새로고침 시 모드 유지
- [ ] 시스템 테마 감지 옵션
- [ ] 모든 섹션 다크모드 대응

---

## 📋 Phase 6: QA 및 성능 최적화

### Issue #25: 반응형 테스트 (모바일/태블릿/데스크탑)
**Labels**: `testing`, `phase-6`
**Priority**: 🔴 High
**Assignee**: -

#### Description
모든 디바이스에서 레이아웃 및 기능을 테스트합니다.

#### Test Devices
- [ ] iPhone SE (375px)
- [ ] iPhone 12 Pro (390px)
- [ ] iPad (768px)
- [ ] iPad Pro (1024px)
- [ ] Desktop (1440px)
- [ ] Desktop Large (1920px)

#### Test Items
- [ ] 네비게이션 메뉴
- [ ] 히어로 섹션
- [ ] 카드 그리드
- [ ] 푸터
- [ ] 폼 입력
- [ ] 모달/다이얼로그

#### Acceptance Criteria
- [ ] 모든 디바이스에서 정상 렌더링
- [ ] 가로/세로 모드 모두 대응
- [ ] 터치 제스처 작동 (모바일)

---

### Issue #26: 브라우저 호환성 테스트
**Labels**: `testing`, `phase-6`
**Priority**: 🟡 Medium
**Assignee**: -

#### Description
주요 브라우저에서 호환성을 테스트합니다.

#### Browsers
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

#### Test Items
- [ ] CSS Grid/Flexbox 레이아웃
- [ ] CSS 변수
- [ ] JavaScript 기능
- [ ] 애니메이션
- [ ] 폰트 렌더링

#### Acceptance Criteria
- [ ] 모든 브라우저에서 정상 작동
- [ ] 시각적 일관성 유지
- [ ] 성능 저하 없음

---

### Issue #27: 접근성 테스트 (WCAG 2.1 AA)
**Labels**: `accessibility`, `testing`, `phase-6`
**Priority**: 🔴 High
**Assignee**: -

#### Description
WCAG 2.1 AA 기준 접근성을 검증합니다.

#### Test Tools
- [ ] axe DevTools
- [ ] Lighthouse Accessibility
- [ ] Screen Reader (NVDA/VoiceOver)
- [ ] Keyboard Navigation

#### Test Items
- [ ] 색상 대비율 (4.5:1 이상)
- [ ] 키보드 네비게이션
- [ ] ARIA 속성
- [ ] 폼 레이블
- [ ] 이미지 alt 텍스트
- [ ] 헤딩 구조

#### Acceptance Criteria
- [ ] axe 에러 0개
- [ ] Lighthouse 접근성 90+ 점수
- [ ] 스크린 리더 테스트 통과
- [ ] 키보드만으로 모든 기능 사용 가능

---

### Issue #28: 성능 최적화 및 Lighthouse 테스트
**Labels**: `performance`, `testing`, `phase-6`
**Priority**: 🔴 High
**Assignee**: -

#### Description
성능 최적화를 수행하고 Lighthouse 점수를 검증합니다.

#### Optimization Tasks
- [ ] 이미지 최적화 (WebP, lazy loading)
- [ ] 코드 스플리팅 확인
- [ ] 번들 크기 분석
- [ ] Unused CSS 제거
- [ ] JavaScript 최소화
- [ ] 폰트 로딩 최적화

#### Lighthouse Targets
- [ ] Performance: 90+
- [ ] Accessibility: 90+
- [ ] Best Practices: 90+
- [ ] SEO: 90+

#### Core Web Vitals
- [ ] LCP (Largest Contentful Paint): < 2.5s
- [ ] FID (First Input Delay): < 100ms
- [ ] CLS (Cumulative Layout Shift): < 0.1

#### Acceptance Criteria
- [ ] 모든 Lighthouse 점수 90+
- [ ] Core Web Vitals 모두 통과
- [ ] 번들 크기 합리적 (< 500KB)

---

### Issue #29: SEO 메타데이터 검증
**Labels**: `seo`, `testing`, `phase-6`
**Priority**: 🟡 Medium
**Assignee**: -

#### Description
모든 페이지의 SEO 메타데이터를 검증합니다.

#### Test Pages
- [ ] `/` (메인)
- [ ] `/services` (서비스)

#### Metadata Checklist (각 페이지)
- [ ] `<title>` 태그
- [ ] `<meta name="description">`
- [ ] Open Graph 태그
- [ ] Twitter Card 태그
- [ ] Canonical URL
- [ ] 구조화된 데이터 (JSON-LD)

#### Acceptance Criteria
- [ ] 모든 페이지 메타데이터 완비
- [ ] Google Rich Results 테스트 통과
- [ ] 소셜 미디어 공유 프리뷰 정상

---

### Issue #30: 최종 회귀 테스트
**Labels**: `testing`, `phase-6`
**Priority**: 🔴 High
**Assignee**: -

#### Description
리팩토링 후 전체 기능 회귀 테스트를 수행합니다.

#### Test Scenarios
- [ ] 페이지 간 네비게이션
- [ ] 모든 링크 작동
- [ ] 폼 제출 (있는 경우)
- [ ] 모달/다이얼로그 열기/닫기
- [ ] 아코디언 열기/닫기
- [ ] 스크롤 애니메이션
- [ ] 호버 효과
- [ ] 다크모드 전환

#### Acceptance Criteria
- [ ] 모든 시나리오 통과
- [ ] 에러 로그 0개
- [ ] 콘솔 경고 0개
- [ ] 404 에러 없음

---

## 📊 Issues Summary

### By Phase
- **Phase 0** (Tailwind v4 마이그레이션): 5 issues
- **Phase 1** (템플릿 분석): 4 issues
- **Phase 2** (메인 페이지): 7 issues
- **Phase 3** (서비스 페이지): 3 issues
- **Phase 4** (FAQ/문서): 2 issues
- **Phase 5** (디자인 시스템): 3 issues
- **Phase 6** (QA): 6 issues

**Total**: 30 issues

### By Priority
- 🔴 High: 13 issues
- 🟡 Medium: 12 issues
- 🟢 Low: 5 issues

### By Label
- `refactor`: 10 issues
- `component`: 9 issues
- `testing`: 7 issues
- `feature`: 4 issues
- `design-system`: 4 issues
- Other: 6 issues

---

## 🏷️ Labels to Create

```
phase-0
phase-1
phase-2
phase-3
phase-4
phase-5
phase-6
enhancement
refactor
feature
component
testing
performance
accessibility
seo
design-system
config
styling
research
setup
dependencies
```

---

## 🎯 Milestones

1. **Phase 0 Complete**: Tailwind v4 마이그레이션
2. **Phase 1-2 Complete**: 메인 페이지 리팩토링
3. **Phase 3-4 Complete**: 서비스/문서 페이지
4. **Phase 5 Complete**: 디자인 시스템 통합
5. **Phase 6 Complete**: QA 및 배포 준비

---

**문서 작성**: 2025-11-09
**마지막 업데이트**: 2025-11-09
