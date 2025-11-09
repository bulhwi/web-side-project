# BD 한의원 웹사이트 - 기술 사양 문서 (Tech Specification)

> Tailwind CSS Plus 템플릿 활용 리팩토링을 위한 기술 분석 및 사양 문서

**작성일**: 2025-11-09
**버전**: 1.0.0
**프로젝트**: BD 한의원 웹사이트 리뉴얼

---

## 📋 목차

1. [현재 기술 스택 분석](#현재-기술-스택-분석)
2. [Tailwind CSS Plus 템플릿 분석](#tailwind-css-plus-템플릿-분석)
3. [호환성 분석](#호환성-분석)
4. [리팩토링 전략](#리팩토링-전략)
5. [마이그레이션 계획](#마이그레이션-계획)
6. [기술적 고려사항](#기술적-고려사항)

---

## 현재 기술 스택 분석

### 코어 프레임워크

| 기술 | 버전 | 상태 | 용도 |
|------|------|------|------|
| **Next.js** | 15.1.0 | ✅ 최신 | App Router 기반 SSR/SSG |
| **React** | 19.0.0 | ✅ 최신 | UI 라이브러리 |
| **TypeScript** | 5.x | ✅ 최신 | 타입 안정성 |
| **Node.js** | ES2017+ | ✅ 호환 | 런타임 환경 |

### 스타일링 & UI

| 기술 | 버전 | 상태 | 용도 |
|------|------|------|------|
| **Tailwind CSS** | 3.4.1 | ⚠️ v3 | 유틸리티 CSS 프레임워크 |
| **PostCSS** | 8.x | ✅ 호환 | CSS 후처리 |
| **Autoprefixer** | 10.4.20 | ✅ 호환 | 벤더 프리픽스 자동화 |
| **tailwindcss-animate** | 1.0.7 | ✅ 사용중 | 애니메이션 유틸리티 |
| **@tailwindcss/typography** | 0.5.10 | ✅ 사용중 | 타이포그래피 플러그인 |
| **tailwind-merge** | 2.5.2 | ✅ 사용중 | 클래스 병합 유틸리티 |

### UI 컴포넌트 라이브러리

| 기술 | 버전 | 상태 | 용도 |
|------|------|------|------|
| **Radix UI** | 1.x | ✅ 호환 | Headless UI 컴포넌트 |
| **Framer Motion** | 11.x | ✅ 사용중 | 애니메이션 라이브러리 |
| **Lucide React** | 0.469.0 | ✅ 사용중 | 아이콘 시스템 |
| **class-variance-authority** | 0.7.0 | ✅ 사용중 | 조건부 스타일링 |
| **clsx** | 2.1.1 | ✅ 사용중 | 클래스 유틸리티 |

### 상태 관리 & 데이터 페칭 (준비됨)

| 기술 | 버전 | 상태 | 용도 |
|------|------|------|------|
| **@tanstack/react-query** | 5.x | 🔶 설치됨 | 서버 상태 관리 |
| **Zustand** | 4.x | 🔶 설치됨 | 클라이언트 상태 관리 |
| **Axios** | 1.7.9 | 🔶 설치됨 | HTTP 클라이언트 |

### 폼 & 검증 (준비됨)

| 기술 | 버전 | 상태 | 용도 |
|------|------|------|------|
| **React Hook Form** | 7.x | 🔶 설치됨 | 폼 관리 |
| **Zod** | 3.x | 🔶 설치됨 | 스키마 검증 |
| **@hookform/resolvers** | 4.x | 🔶 설치됨 | Zod 리졸버 |

### 유틸리티

| 기술 | 버전 | 상태 | 용도 |
|------|------|------|------|
| **es-toolkit** | 1.x | ✅ 사용중 | 유틸리티 함수 |
| **date-fns** | 4.x | 🔶 설치됨 | 날짜 처리 |
| **ts-pattern** | 5.x | 🔶 설치됨 | 패턴 매칭 |
| **react-use** | 17.x | 🔶 설치됨 | React 훅 유틸리티 |

### 빌드 & 개발 도구

| 기술 | 버전 | 상태 | 용도 |
|------|------|------|------|
| **ESLint** | 9.x | ✅ 설정됨 | 코드 품질 검사 |
| **eslint-config-next** | 15.1.0 | ✅ 설정됨 | Next.js ESLint 설정 |
| **Turbopack** | - | ✅ 사용중 | 빌드 도구 (dev 모드) |

### TypeScript 설정

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "strict": true,
    "strictNullChecks": false,
    "noImplicitAny": false,
    "jsx": "preserve",
    "moduleResolution": "bundler",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**특징**:
- `strict: true` (단, `strictNullChecks: false`, `noImplicitAny: false`)
- Path alias: `@/*` → `./src/*`
- JSX 보존 모드 (Next.js가 처리)

---

## Tailwind CSS Plus 템플릿 분석

### 템플릿 개요

Tailwind CSS Plus는 **12개의 프리미엄 템플릿**을 제공합니다:

| 템플릿 | 용도 | BD 한의원 적용 가능성 |
|--------|------|---------------------|
| **Spotlight** | 개인 웹사이트 | ❌ 부적합 |
| **Radiant** | SaaS 마케팅 | 🔶 일부 적용 가능 |
| **Compass** | 코스/교육 | ✅ 체질진단 교육 콘텐츠 |
| **Salient** | SaaS 마케팅 | 🔶 일부 적용 가능 |
| **Studio** | 에이전시 | ✅ 한의원 소개 |
| **Primer** | 정보 상품 | ✅ 한약 처방 정보 |
| **Protocol** | API 문서 | ❌ 부적합 |
| **Commit** | 변경 로그 | ❌ 부적합 |
| **Transmit** | 팟캐스트 | ❌ 부적합 |
| **Pocket** | 앱 마케팅 | 🔶 예약 시스템 소개 |
| **Syntax** | 문서화 | ✅ FAQ, 치료 가이드 |
| **Keynote** | 컨퍼런스 | ❌ 부적합 |

### 권장 템플릿 (BD 한의원)

1. **Studio** (에이전시 템플릿)
   - ✅ 전문성 강조
   - ✅ 포트폴리오/사례 섹션
   - ✅ 팀 소개 (한의사 프로필)

2. **Compass** (교육 템플릿)
   - ✅ 체질진단 교육
   - ✅ 코스 구조 (치료 프로세스)
   - ✅ 학습 자료 (한의학 지식)

3. **Syntax** (문서 템플릿)
   - ✅ FAQ 섹션
   - ✅ 치료 가이드
   - ✅ 검색 기능

4. **Primer** (정보 상품 템플릿)
   - ✅ 한약 처방 정보
   - ✅ 제품 소개 (한약재)
   - ✅ 구매/예약 플로우

### 기술 요구사항

#### Tailwind CSS Plus 공식 스펙

| 항목 | 요구사항 | 현재 프로젝트 | 상태 |
|------|----------|--------------|------|
| **Framework** | React + Next.js | ✅ Next.js 15 + React 19 | ✅ 완벽 호환 |
| **Tailwind CSS** | v4.1 | ⚠️ v3.4.1 | ⚠️ 업그레이드 필요 |
| **Headless UI** | 권장 | ✅ Radix UI 사용중 | ✅ 호환 가능 |
| **Component Format** | React/Vue/HTML | ✅ React | ✅ 호환 |
| **Browser Support** | 최신 Chrome, Firefox, Safari, Edge | ✅ 호환 | ✅ 호환 |
| **IE11** | 미지원 | ✅ 미지원 | ✅ 동일 |

#### 주요 발견사항

1. **Tailwind CSS 버전 불일치**
   - 템플릿: v4.1 (최신)
   - 현재 프로젝트: v3.4.1
   - **액션**: Tailwind CSS v3 → v4 마이그레이션 필요

2. **Headless UI 차이**
   - 템플릿: Headless UI (Tailwind Labs 공식)
   - 현재 프로젝트: Radix UI
   - **액션**: Radix UI 유지 가능 (동일한 Headless 패턴)

3. **완벽한 React/Next.js 호환**
   - React 19 + Next.js 15는 템플릿 요구사항 충족
   - 컴포넌트 구조 동일 (함수형 컴포넌트, Hooks)

---

## 호환성 분석

### ✅ 완벽 호환

- **React 19**: Tailwind Plus 템플릿은 React 기반
- **Next.js 15 App Router**: 템플릿 컴포넌트를 App Router 구조에 통합 가능
- **TypeScript**: 템플릿 코드를 TypeScript로 변환 용이
- **Framer Motion**: 템플릿 애니메이션과 조합 가능
- **Radix UI**: Headless UI 대신 사용 가능 (동일한 Headless 패턴)

### ⚠️ 주의 필요

- **Tailwind CSS v3 → v4**: 마이그레이션 가이드 필요
- **CSS 변수 시스템**: 현재 `designTokens.ts` 와 템플릿 CSS 변수 통합
- **Dark Mode**: `next-themes` 유지 vs 템플릿 방식 선택

### ❌ 충돌 가능성

- **Apple 디자인 시스템**: 템플릿 스타일과 충돌 가능
  - 해결: 선택적 적용, 커스터마이징
- **한의학 도메인 콘텐츠**: 템플릿을 한의원 맥락으로 변경 필요

---

## 리팩토링 전략

### Phase 1: Tailwind CSS v4 마이그레이션 (선행 작업)

#### 1.1 Tailwind CSS v4 업그레이드

```bash
# Tailwind CSS v4 설치
npm install tailwindcss@next @tailwindcss/postcss@next

# 플러그인 업데이트 확인
npm install @tailwindcss/typography@next
```

#### 1.2 설정 파일 마이그레이션

**tailwind.config.ts** → **tailwind.config.js** (v4 형식)

```javascript
// tailwind.config.js (v4)
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      // v4에서는 CSS 변수 기반 색상 시스템 권장
    }
  }
}
```

**CSS 변수 방식으로 전환** (`globals.css`):

```css
@import "tailwindcss";

@theme {
  --color-primary: #007AFF;
  --color-systemGray: #8E8E93;
  /* ... */
}
```

#### 1.3 변경사항 체크리스트

- [ ] `tailwind.config.ts` → v4 형식 변경
- [ ] `globals.css` → `@theme` 블록 추가
- [ ] `designTokens.ts` → CSS 변수 통합
- [ ] 플러그인 호환성 확인
- [ ] 빌드 테스트

### Phase 2: 템플릿 선택 및 다운로드

#### 2.1 우선순위 템플릿

1. **Studio** (메인 페이지 리팩토링)
2. **Compass** (서비스/교육 페이지)
3. **Syntax** (FAQ/문서 페이지)

#### 2.2 템플릿 구조 분석

```
studio-template/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── Team.jsx
│   └── Footer.jsx
├── pages/
│   └── index.jsx
└── styles/
    └── globals.css
```

**분석 항목**:
- 컴포넌트 구조 (props, state)
- 애니메이션 패턴
- 반응형 브레이크포인트
- 색상 시스템

### Phase 3: 컴포넌트 변환 (Template → Project)

#### 3.1 변환 프로세스

```
템플릿 컴포넌트 (JSX)
  ↓
TypeScript 변환
  ↓
Radix UI 통합 (Headless UI 대체)
  ↓
한의학 도메인 적용
  ↓
Apple 디자인 시스템 적용
  ↓
Framer Motion 애니메이션 추가
```

#### 3.2 변환 예시

**템플릿 코드** (Studio Hero):
```jsx
// Hero.jsx (템플릿)
export function Hero() {
  return (
    <div className="bg-gray-50 py-20">
      <h1 className="text-5xl font-bold">
        Welcome to our studio
      </h1>
    </div>
  )
}
```

**변환 후** (BD 한의원):
```typescript
// AppleHeroSection.tsx (변환 후)
'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { designTokens } from '@/theme/designTokens';

export function AppleHeroSection() {
  return (
    <section
      className="py-20"
      style={{ backgroundColor: designTokens.colors.systemGray6 }}
    >
      <ScrollReveal direction="up" delay={0.2}>
        <h1
          className="text-5xl lg:text-7xl font-bold"
          style={{ fontFamily: designTokens.typography.fontFamilies.heading }}
        >
          전통과 현대가 만나는 곳, BD 한의원
        </h1>
      </ScrollReveal>
    </section>
  )
}
```

#### 3.3 변환 체크리스트 (컴포넌트별)

- [ ] `use client` 지시어 추가
- [ ] JSX → TSX 변환
- [ ] Props 인터페이스 정의
- [ ] Headless UI → Radix UI 변경
- [ ] 한의학 콘텐츠 적용
- [ ] `designTokens` 적용
- [ ] Framer Motion 애니메이션 추가
- [ ] 반응형 클래스 확인
- [ ] 접근성 속성 추가

### Phase 4: 페이지 단위 통합

#### 4.1 메인 페이지 (`/`) 리팩토링

**현재 구조**:
```tsx
// src/app/page.tsx
<AppleHeader />
<AppleHeroSection />
<AppleServicesSection />
<TechnologySection />
<FaqSection />
<AppleFooter />
```

**리팩토링 후** (Studio 템플릿 적용):
```tsx
// src/app/page.tsx
<StudioHeader />          // 템플릿 Header → 한의원 맞춤
<StudioHero />            // 템플릿 Hero → 한의원 히어로
<StudioServices />        // 템플릿 Services → 침구/한약/추나
<StudioTeam />            // 템플릿 Team → 한의사 소개
<StudioTestimonials />    // 템플릿 추가 → 환자 후기
<StudioCTA />             // 템플릿 추가 → 예약 유도
<StudioFooter />          // 템플릿 Footer → 한의원 맞춤
```

#### 4.2 서비스 페이지 (`/services`) 리팩토링

**Compass 템플릿 적용**:
```tsx
// src/app/services/page.tsx
<CompassHero />           // 7단계 진료 과정 소개
<CompassCurriculum />     // 치료 프로세스 단계별 설명
<CompassFeatures />       // 한의학 치료 특징
<CompassPricing />        // 진료비 안내 (선택)
```

### Phase 5: 디자인 시스템 통합

#### 5.1 CSS 변수 통합

**현재** (`designTokens.ts`):
```typescript
export const designTokens = {
  colors: {
    systemBlue: '#007AFF',
    systemGray: '#8E8E93',
    // ...
  }
}
```

**Tailwind v4 방식** (`globals.css`):
```css
@theme {
  --color-system-blue: #007AFF;
  --color-system-gray: #8E8E93;

  /* 템플릿 변수 통합 */
  --color-primary: var(--color-system-blue);
  --color-secondary: var(--color-system-gray);
}
```

#### 5.2 타이포그래피 통합

```css
@theme {
  --font-family-heading: -apple-system, BlinkMacSystemFont, "SF Pro Display";
  --font-family-body: -apple-system, BlinkMacSystemFont, "SF Pro Text";

  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  /* ... */
}
```

### Phase 6: 애니메이션 통합

#### 6.1 Framer Motion + 템플릿 애니메이션

**템플릿 CSS 애니메이션**:
```css
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

**Framer Motion 변환**:
```typescript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.3 }}
>
  {children}
</motion.div>
```

#### 6.2 ScrollReveal 재사용

기존 `ScrollReveal` 컴포넌트를 템플릿에 적용:

```typescript
<ScrollReveal direction="up" delay={0.2}>
  {/* 템플릿 섹션 */}
</ScrollReveal>
```

---

## 마이그레이션 계획

### 타임라인

| Phase | 작업 | 예상 시간 | 우선순위 |
|-------|------|----------|---------|
| **Phase 0** | Tailwind v4 업그레이드 | 1-2일 | 🔴 높음 |
| **Phase 1** | Studio 템플릿 다운로드 및 분석 | 0.5일 | 🔴 높음 |
| **Phase 2** | 메인 페이지 리팩토링 | 2-3일 | 🔴 높음 |
| **Phase 3** | Compass 템플릿 적용 (서비스 페이지) | 2일 | 🟡 중간 |
| **Phase 4** | Syntax 템플릿 적용 (FAQ/문서) | 1일 | 🟡 중간 |
| **Phase 5** | 디자인 시스템 통합 | 1-2일 | 🟡 중간 |
| **Phase 6** | QA 및 성능 최적화 | 1-2일 | 🟢 낮음 |

**총 예상 시간**: 8-12일

### 리스크 관리

| 리스크 | 영향도 | 완화 전략 |
|--------|--------|----------|
| Tailwind v4 마이그레이션 실패 | 🔴 높음 | 별도 브랜치에서 테스트, 롤백 계획 |
| 템플릿 스타일 충돌 | 🟡 중간 | CSS 변수 네임스페이스 분리 |
| 한의학 콘텐츠 부족 | 🟡 중간 | 기존 콘텐츠 재활용, 플레이스홀더 사용 |
| 성능 저하 | 🟢 낮음 | Lighthouse 모니터링, 코드 스플리팅 |

---

## 기술적 고려사항

### 1. Tailwind CSS v3 vs v4 주요 변경사항

| 항목 | v3 | v4 | 마이그레이션 |
|------|----|----|-------------|
| **설정 파일** | `tailwind.config.ts` | `tailwind.config.js` | ⚠️ 변경 필요 |
| **CSS 변수** | 수동 정의 | `@theme` 블록 | ✅ 권장 |
| **Import 방식** | `@tailwind base;` | `@import "tailwindcss";` | ⚠️ 변경 필요 |
| **플러그인** | `require('...')` | ES Module | ⚠️ 변경 필요 |
| **JIT 모드** | 기본 활성화 | 기본 활성화 | ✅ 동일 |

#### 마이그레이션 가이드

**Before (v3)**:
```css
/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --primary: #007AFF;
  }
}
```

**After (v4)**:
```css
/* globals.css */
@import "tailwindcss";

@theme {
  --color-primary: #007AFF;
}
```

### 2. Headless UI vs Radix UI

| 항목 | Headless UI | Radix UI | 선택 |
|------|-------------|----------|------|
| **제공사** | Tailwind Labs | Modulz | - |
| **현재 사용** | ❌ | ✅ | Radix UI 유지 |
| **API 스타일** | Render Props | Composition | - |
| **접근성** | ✅ ARIA 지원 | ✅ ARIA 지원 | 동일 |
| **스타일링** | Tailwind 친화적 | 스타일 무관 | 동일 |

**결론**: Radix UI 유지 가능 (템플릿 Headless UI 컴포넌트를 Radix로 변환)

#### 변환 예시

**Headless UI** (템플릿):
```jsx
import { Disclosure } from '@headlessui/react'

<Disclosure>
  <Disclosure.Button>FAQ 질문</Disclosure.Button>
  <Disclosure.Panel>답변 내용</Disclosure.Panel>
</Disclosure>
```

**Radix UI** (변환):
```tsx
import * as Accordion from '@radix-ui/react-accordion'

<Accordion.Root type="single" collapsible>
  <Accordion.Item value="item-1">
    <Accordion.Trigger>FAQ 질문</Accordion.Trigger>
    <Accordion.Content>답변 내용</Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
```

### 3. Apple 디자인 시스템 유지

#### 전략: 템플릿 + Apple 하이브리드

```css
@theme {
  /* Tailwind Plus 템플릿 변수 */
  --color-primary: #007AFF;
  --color-secondary: #8E8E93;

  /* Apple 디자인 시스템 변수 */
  --color-system-blue: #007AFF;
  --color-system-green: #34C759;
  --color-system-orange: #FF9500;

  /* 폰트 */
  --font-family-heading: -apple-system, BlinkMacSystemFont, "SF Pro Display";
  --font-family-body: -apple-system, BlinkMacSystemFont, "SF Pro Text";
}
```

### 4. 성능 최적화

#### 4.1 코드 스플리팅

```typescript
// 템플릿 컴포넌트 동적 임포트
import dynamic from 'next/dynamic';

const StudioHero = dynamic(() => import('@/components/studio/Hero'), {
  loading: () => <div>Loading...</div>,
});
```

#### 4.2 CSS 최적화

```javascript
// next.config.ts
const nextConfig = {
  experimental: {
    optimizeCss: true, // CSS 최적화
  },
}
```

### 5. 한의학 도메인 적용

#### 템플릿 → 한의원 매핑 테이블

| 템플릿 섹션 | 한의원 적용 |
|------------|------------|
| **Services** | 침구치료, 한약처방, 추나요법 |
| **Team** | 경희대 출신 한의사 소개 |
| **Testimonials** | 환자 치료 후기 |
| **Pricing** | 진료비 안내 (보험/비보험) |
| **CTA** | 온라인 예약, 카카오톡 상담 |
| **Features** | 7단계 체계적 진료 과정 |
| **About** | BD 한의원 역사, 철학 |

---

## 체크리스트

### 사전 준비

- [ ] Tailwind CSS Plus 라이센스 구매
- [ ] 템플릿 다운로드 (Studio, Compass, Syntax)
- [ ] 백업 브랜치 생성 (`git checkout -b tailwind-plus-refactor`)

### Phase 0: Tailwind v4 마이그레이션

- [ ] `npm install tailwindcss@next @tailwindcss/postcss@next`
- [ ] `tailwind.config.js` v4 형식으로 변경
- [ ] `globals.css` → `@import` 및 `@theme` 변경
- [ ] `designTokens.ts` → CSS 변수로 마이그레이션
- [ ] 빌드 테스트 (`npm run build`)
- [ ] 개발 서버 테스트 (`npm run dev`)

### Phase 1: 템플릿 분석

- [ ] Studio 템플릿 다운로드
- [ ] 컴포넌트 구조 분석
- [ ] 애니메이션 패턴 분석
- [ ] 색상/타이포그래피 시스템 분석

### Phase 2: 컴포넌트 변환

- [ ] `StudioHeader` → `AppleHeader` 변환
- [ ] `StudioHero` → `AppleHeroSection` 변환
- [ ] `StudioServices` → `AppleServicesSection` 변환
- [ ] `StudioTeam` → `TeamSection` 생성
- [ ] TypeScript 타입 정의
- [ ] Radix UI 통합

### Phase 3: 페이지 통합

- [ ] 메인 페이지 리팩토링
- [ ] 서비스 페이지 리팩토링
- [ ] FAQ 페이지 생성 (Syntax 템플릿)

### Phase 4: QA

- [ ] 반응형 테스트 (모바일/태블릿/데스크탑)
- [ ] 브라우저 호환성 테스트
- [ ] 접근성 테스트 (WCAG 2.1 AA)
- [ ] 성능 테스트 (Lighthouse)
- [ ] SEO 메타데이터 확인

---

## 참고 자료

### 공식 문서

- [Tailwind CSS v4 마이그레이션 가이드](https://tailwindcss.com/docs/upgrade-guide)
- [Tailwind CSS Plus 템플릿](https://tailwindcss.com/plus)
- [Next.js 15 문서](https://nextjs.org/docs)
- [Radix UI 문서](https://www.radix-ui.com/)

### 프로젝트 문서

- `vooster-docs/prd.md` - 제품 요구사항
- `vooster-docs/architecture.md` - 기술 아키텍처
- `vooster-docs/guideline.md` - 개발 가이드라인
- `CLAUDE.md` - 프로젝트 개요

---

## 버전 히스토리

| 버전 | 날짜 | 변경사항 | 작성자 |
|------|------|---------|--------|
| 1.0.0 | 2025-11-09 | 초안 작성 | Claude |

---

**문서 상태**: ✅ 완료
**다음 액션**: Tailwind CSS v4 마이그레이션 시작