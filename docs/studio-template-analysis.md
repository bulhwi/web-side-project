# Studio Template 분석 보고서

> **Tailwind CSS v4 기반 Studio 템플릿 상세 분석**
>
> **분석 날짜**: 2025-11-14
> **템플릿 버전**: Tailwind Plus Studio (TypeScript)

---

## 📋 목차

1. [템플릿 개요](#템플릿-개요)
2. [기술 스택 분석](#기술-스택-분석)
3. [Tailwind CSS v4 마이그레이션](#tailwind-css-v4-마이그레이션)
4. [컴포넌트 아키텍처](#컴포넌트-아키텍처)
5. [애니메이션 시스템](#애니메이션-시스템)
6. [디자인 시스템](#디자인-시스템)
7. [프로젝트 적용 전략](#프로젝트-적용-전략)

---

## 템플릿 개요

### 템플릿 구조

```
tailwind-plus-studio/
├── studio-js/          # JavaScript 버전
└── studio-ts/          # TypeScript 버전 ✅ (분석 대상)
    ├── src/
    │   ├── app/            # Next.js App Router 페이지
    │   ├── components/     # 재사용 가능한 컴포넌트 (25개)
    │   ├── images/         # 정적 이미지 에셋
    │   ├── lib/            # 유틸리티 함수
    │   └── styles/         # Tailwind v4 스타일
    ├── package.json
    └── postcss.config.js
```

### 주요 특징

- ✅ **Tailwind CSS v4** 완전 적용
- ✅ **Next.js 15 + React 19** 최신 스택
- ✅ **Framer Motion 12** 고급 애니메이션
- ✅ **TypeScript 5.8** strict mode
- ✅ **컴포넌트 기반 아키텍처** (25개 컴포넌트)

---

## 기술 스택 분석

### 코어 의존성

```json
{
  "next": "^15",
  "react": "^19",
  "react-dom": "^19",
  "tailwindcss": "^4.1.12",
  "@tailwindcss/postcss": "^4.1.12",
  "typescript": "^5.8.3"
}
```

### 애니메이션 & UI

```json
{
  "framer-motion": "^12.23.11",  // ⬆️ v11 → v12 업그레이드 필요
  "clsx": "^2.1.1"                // 클래스 유틸리티
}
```

### MDX & 코드 하이라이팅

```json
{
  "@mdx-js/loader": "^3.1.0",
  "@mdx-js/react": "^3.1.0",
  "@next/mdx": "^15",
  "@leafac/rehype-shiki": "^2.2.1",
  "shiki": "^0.11.1"
}
```

**우리 프로젝트 적용**: MDX 관련 패키지는 블로그가 없으므로 불필요

---

## Tailwind CSS v4 마이그레이션

### 1. PostCSS 설정

**Before (v3):**
```js
// tailwind.config.ts
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {} },
  plugins: []
}
```

**After (v4):**
```js
// postcss.config.js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}
  }
}
```

**변경사항**:
- `tailwind.config.ts` 삭제 ❌
- `postcss.config.js` 사용 ✅
- CSS 파일로 설정 이동 ✅

### 2. CSS 파일 구조

**Studio 템플릿 스타일 시스템:**

```css
/* src/styles/tailwind.css */
@import 'tailwindcss';
@import './base.css';
@import './typography.css' layer(components);

@theme {
  /* 커스텀 디자인 토큰 정의 */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  /* ... */

  --radius-4xl: 2.5rem;

  --font-sans: Mona Sans, ui-sans-serif, system-ui, sans-serif;
  --font-display: Mona Sans, ui-sans-serif, system-ui, sans-serif;
  --font-display--font-variation-settings: 'wdth' 125;
}
```

**핵심 변경사항**:

1. **@import 'tailwindcss'** - Tailwind v4 기본 임포트
2. **@theme 블록** - CSS 변수로 디자인 토큰 정의
3. **layer(components)** - 타이포그래피를 컴포넌트 레이어로 분리

### 3. 폰트 시스템

**Studio 템플릿:**

```css
/* src/styles/base.css */
@font-face {
  font-family: 'Mona Sans';
  font-weight: 200 900;
  font-display: block;
  font-style: normal;
  font-stretch: 75% 125%;
  src: url('../fonts/Mona-Sans.var.woff2') format('woff2');
}
```

**우리 프로젝트 (Apple 시스템 폰트):**

```css
/* SF Pro 폰트 유지 */
font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display"
```

**마이그레이션 전략**: Mona Sans → SF Pro로 변경

---

## 컴포넌트 아키텍처

### 1. 레이아웃 컴포넌트

#### RootLayout (핵심 레이아웃)

**위치**: `src/components/RootLayout.tsx`

**주요 기능**:
- 네비게이션 메뉴 (햄버거 메뉴 애니메이션)
- 헤더 (로고 hover 인터랙션)
- 푸터 통합
- GridPattern 배경

**핵심 코드 패턴**:

```tsx
'use client'

export function RootLayout({ children }: { children: React.ReactNode }) {
  let pathname = usePathname()
  let [logoHovered, setLogoHovered] = useState(false)

  return (
    <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
      <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
    </RootLayoutContext.Provider>
  )
}
```

**특징**:
- Context API로 로고 hover 상태 관리
- `key={pathname}` - 페이지 전환 시 애니메이션 리셋
- Framer Motion의 `MotionConfig`로 전역 애니메이션 설정

**BD 한의원 적용**:
- ✅ AppleHeader 컴포넌트 리팩토링에 참고
- ✅ 햄버거 메뉴 애니메이션 패턴 도입
- ✅ 로고 hover 인터랙션 추가

#### Container (레이아웃 래퍼)

**위치**: `src/components/Container.tsx`

```tsx
export function Container<T extends React.ElementType = 'div'>({
  as,
  className,
  children,
}: ContainerProps<T>) {
  let Component = as ?? 'div'

  return (
    <Component className={clsx('mx-auto max-w-7xl px-6 lg:px-8', className)}>
      <div className="mx-auto max-w-2xl lg:max-w-none">{children}</div>
    </Component>
  )
}
```

**특징**:
- 제네릭 타입으로 유연한 HTML 요소 지원
- 이중 래퍼 구조 (외부: max-w-7xl, 내부: max-w-2xl/none)
- 반응형 패딩 (px-6 → lg:px-8)

**BD 한의원 적용**:
- ✅ 현재 Container 컴포넌트를 Studio 패턴으로 교체
- ✅ 제네릭 타입 패턴 도입

---

### 2. 애니메이션 컴포넌트

#### FadeIn & FadeInStagger

**위치**: `src/components/FadeIn.tsx`

**핵심 패턴**:

```tsx
'use client'

const FadeInStaggerContext = createContext(false)
const viewport = { once: true, margin: '0px 0px -200px' }

export function FadeIn(props: React.ComponentPropsWithoutRef<typeof motion.div>) {
  let shouldReduceMotion = useReducedMotion()
  let isInStaggerGroup = useContext(FadeInStaggerContext)

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: 'hidden',
            whileInView: 'visible',
            viewport,
          })}
      {...props}
    />
  )
}

export function FadeInStagger({
  faster = false,
  ...props
}: React.ComponentPropsWithoutRef<typeof motion.div> & { faster?: boolean }) {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        {...props}
      />
    </FadeInStaggerContext.Provider>
  )
}
```

**특징**:
1. **Context 기반 Stagger 감지** - 중첩된 FadeIn이 개별 애니메이션 안하도록
2. **접근성 고려** - `useReducedMotion()` 지원
3. **Intersection Observer** - `whileInView`로 스크롤 애니메이션
4. **viewport 설정** - `margin: '0px 0px -200px'` (200px 전에 트리거)

**BD 한의원 적용**:
- ✅ ScrollReveal 컴포넌트를 FadeIn 패턴으로 교체
- ✅ FadeInStagger로 리스트 애니메이션 개선
- ✅ `useReducedMotion` 접근성 지원 추가

**현재 vs Studio 비교**:

| 현재 (ScrollReveal) | Studio (FadeIn) |
|---------------------|-----------------|
| custom hook 기반 | Context 기반 |
| direction prop | 고정 (y: 24) |
| stagger 미지원 | stagger 지원 |
| 접근성 미지원 | useReducedMotion |

---

### 3. UI 컴포넌트

#### Button

**위치**: `src/components/Button.tsx`

```tsx
type ButtonProps = {
  invert?: boolean
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
)

export function Button({ invert = false, className, children, ...props }: ButtonProps) {
  className = clsx(
    className,
    'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition',
    invert
      ? 'bg-white text-neutral-950 hover:bg-neutral-200'
      : 'bg-neutral-950 text-white hover:bg-neutral-800',
  )

  let inner = <span className="relative top-px">{children}</span>

  if (typeof props.href === 'undefined') {
    return <button className={className} {...props}>{inner}</button>
  }

  return <Link className={className} {...props}>{inner}</Link>
}
```

**특징**:
1. **Union Type** - Link 또는 button 자동 감지
2. **invert prop** - 다크 배경용 반전 스타일
3. **타입 안전성** - href 유무로 타입 구분

**BD 한의원 적용**:
- ✅ 현재 Button 컴포넌트를 Studio 패턴으로 교체
- ✅ invert 속성 추가
- ✅ Link/button 자동 감지 로직 도입

#### GridPattern (인터랙티브 배경)

**위치**: `src/components/GridPattern.tsx`

**주요 기능**:
- 마우스 hover 시 격자 블록 애니메이션
- 정적 블록 + 동적 블록
- Framer Motion 애니메이션

**핵심 로직**:

```tsx
useEffect(() => {
  function onMouseMove(event: MouseEvent) {
    // 마우스 좌표를 격자 좌표로 변환
    x = Math.floor(x / 96)
    y = Math.floor(y / 160)

    setHoveredBlocks((blocks) => {
      let key = counter.current++
      let block = [x, y, key]
      return [...blocks, block]
    })
  }

  window.addEventListener('mousemove', onMouseMove)
}, [yOffset, interactive])
```

**BD 한의원 적용**:
- ✅ 히어로 섹션 배경으로 GridPattern 추가
- ✅ interactive 모드로 고급 인터랙션 제공

---

## 애니메이션 시스템

### 1. Framer Motion 패턴

**Studio 템플릿 애니메이션 철학**:

1. **Intersection Observer 기반**
   - `whileInView` + `viewport` 속성 사용
   - 스크롤 위치에 따라 자동 트리거

2. **접근성 우선**
   - `useReducedMotion()` 훅 사용
   - prefers-reduced-motion 설정 존중

3. **Context 기반 Stagger**
   - 부모-자식 관계로 순차 애니메이션
   - 불필요한 중복 애니메이션 방지

### 2. 애니메이션 값 비교

| 속성 | 현재 프로젝트 | Studio 템플릿 |
|------|---------------|---------------|
| **duration** | 0.3s | 0.5s |
| **staggerChildren** | - | 0.2s (기본), 0.12s (faster) |
| **viewport margin** | - | -200px |
| **y offset** | 20px | 24px |

**권장사항**: Studio 템플릿 값 채택 (더 부드러운 애니메이션)

### 3. MotionConfig 전역 설정

```tsx
<MotionConfig
  transition={
    shouldReduceMotion || !isTransitioning
      ? { duration: 0 }
      : undefined
  }
>
  {children}
</MotionConfig>
```

**BD 한의원 적용**:
- ✅ RootLayout에 MotionConfig 래퍼 추가
- ✅ 전역 애니메이션 일관성 확보

---

## 디자인 시스템

### 1. 컬러 시스템

**Studio 템플릿:**

```tsx
// Neutral 그레이스케일 (중립적)
neutral-50, neutral-950 (다크)
```

**BD 한의원 (Apple 시스템):**

```tsx
// systemGray 시리즈 (따뜻한 톤)
systemGray, systemGray6
```

**마이그레이션 전략**:
- `neutral-950` → Apple 다크 컬러로 매핑
- 전체적으로 neutral 기반 유지, 강조색만 Apple 컬러 사용

### 2. 타이포그래피

**Studio 템플릿 (@theme):**

```css
@theme {
  --text-xs: 0.75rem;       /* 12px */
  --text-sm: 0.875rem;      /* 14px */
  --text-base: 1rem;        /* 16px */
  --text-xl: 1.25rem;       /* 20px */
  --text-2xl: 1.5rem;       /* 24px */
  --text-5xl: 2.5rem;       /* 40px */
  --text-7xl: 4rem;         /* 64px */
}
```

**현재 프로젝트:**

```typescript
// designTokens.ts
fontSizes: {
  '5xl': '3rem',    // 48px
  '4xl': '2.25rem', // 36px
  '3xl': '1.875rem',// 30px
}
```

**차이점**:
- Studio: 더 큰 헤딩 (7xl = 64px)
- 현재: 중간 크기 (5xl = 48px)

**마이그레이션**: Studio 기준으로 확대 (프리미엄 느낌)

### 3. Border Radius

**Studio 템플릿:**

```css
--radius-4xl: 2.5rem;  /* 40px */
```

**사용 예시:**

```tsx
className="rounded-4xl"  // 카드, 패널
className="rounded-3xl"  // 버튼, 작은 카드
className="rounded-full" // 원형 버튼
```

**BD 한의원 적용**:
- ✅ 섹션 배경에 `rounded-4xl` 사용
- ✅ 카드 컴포넌트에 `rounded-3xl` 적용

---

## 프로젝트 적용 전략

### Phase 0: Tailwind CSS v4 마이그레이션

**1단계: 패키지 설치**

```bash
npm install -D tailwindcss@^4.1.12 @tailwindcss/postcss@^4.1.12
npm uninstall @tailwindcss/typography  # v4에서 불필요
```

**2단계: PostCSS 설정**

```js
// postcss.config.mjs → postcss.config.js 변경
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}
  }
}
```

**3단계: CSS 파일 재구성**

```css
/* src/app/globals.css */
@import 'tailwindcss';
@import './base.css';
@import './typography.css' layer(components);

@theme {
  /* Apple 디자인 토큰을 CSS 변수로 변환 */
  --color-system-blue: #007AFF;
  --color-system-green: #34C759;

  --font-display: -apple-system, BlinkMacSystemFont, "SF Pro Display";
  --font-body: -apple-system, BlinkMacSystemFont, "SF Pro Text";
}
```

**4단계: 기존 파일 삭제**

```bash
rm tailwind.config.ts  # v4에서 불필요
```

### Phase 1: 컴포넌트 리팩토링 우선순위

**High Priority (즉시 적용)**:

1. **FadeIn 시스템**
   - `ScrollReveal.tsx` → `FadeIn.tsx` 교체
   - `FadeInStagger` 컴포넌트 추가
   - Context 기반 stagger 패턴 도입

2. **Container 컴포넌트**
   - 제네릭 타입 패턴 적용
   - 이중 래퍼 구조 도입

3. **Button 컴포넌트**
   - Link/button 자동 감지
   - invert 속성 추가

**Medium Priority (2차 적용)**:

4. **RootLayout 구조**
   - AppleHeader 리팩토링
   - 햄버거 메뉴 애니메이션

5. **GridPattern 배경**
   - 히어로 섹션에 인터랙티브 배경 추가

**Low Priority (선택 적용)**:

6. **StylizedImage** (이미지 효과)
7. **Border, Blockquote** (콘텐츠 컴포넌트)

### Phase 2: 디자인 토큰 통합

**현재 (designTokens.ts) → Tailwind v4 (@theme)**

```typescript
// ❌ 삭제 예정
export const designTokens = {
  colors: { systemBlue: '#007AFF' }
}
```

```css
/* ✅ 새로운 방식 */
@theme {
  --color-system-blue: #007AFF;
}

/* 사용 */
.text-system-blue { color: var(--color-system-blue); }
```

### Phase 3: 애니메이션 업그레이드

**Framer Motion v11 → v12 마이그레이션**

```bash
npm install framer-motion@^12.23.11
```

**변경사항**:
- Breaking changes 확인 필요
- `useReducedMotion` 훅 추가
- `MotionConfig` 전역 설정

### Phase 4: 성능 최적화

**Studio 템플릿 패턴 도입**:

1. **이미지 최적화**
   - Next.js Image 컴포넌트 활용
   - `unoptimized` 속성 제거

2. **코드 스플리팅**
   - 'use client' 최소화
   - Server Component 우선

3. **CSS 최적화**
   - 불필요한 Tailwind 클래스 제거
   - @theme 변수로 중복 제거

---

## 핵심 변경사항 요약

### 마이그레이션 체크리스트

- [ ] Tailwind CSS v4 설치
- [ ] postcss.config.js 변경
- [ ] @theme 블록으로 디자인 토큰 이동
- [ ] tailwind.config.ts 삭제
- [ ] FadeIn 컴포넌트 교체
- [ ] Container 컴포넌트 업그레이드
- [ ] Button 컴포넌트 리팩토링
- [ ] RootLayout 패턴 적용
- [ ] GridPattern 배경 추가
- [ ] Framer Motion v12 업그레이드
- [ ] useReducedMotion 접근성 추가
- [ ] MotionConfig 전역 설정

### 예상 효과

1. **성능 향상**
   - Tailwind v4의 JIT 모드 개선
   - CSS 번들 크기 감소

2. **개발 경험 향상**
   - @theme 블록으로 디자인 토큰 관리 간소화
   - 타입 안전성 증가

3. **애니메이션 품질 향상**
   - Context 기반 stagger 패턴
   - 접근성 지원 강화

4. **코드 일관성**
   - Studio 템플릿의 검증된 패턴 사용
   - 컴포넌트 재사용성 증가

---

## 참고 자료

- **Studio 템플릿 위치**: `/tailwind-template/tailwind-plus-studio/studio-ts/`
- **Tailwind CSS v4 문서**: https://tailwindcss.com/docs/v4-beta
- **Framer Motion v12**: https://www.framer.com/motion/

---

**다음 단계**: [리팩토링 실행 계획 수립](#프로젝트-적용-전략)
