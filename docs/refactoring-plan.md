# BD 한의원 v2.0 리팩토링 실행 계획

> **Studio 템플릿 기반 프리미엄 웹사이트 업그레이드**
>
> **목표**: www.bdseoulbd.com 인터랙션 + Studio 스타일 융합
> **기간**: 2025-11-14 ~ 2025-12-31
> **상태**: Phase 0 준비 완료

---

## 📋 목차

1. [프로젝트 개요](#프로젝트-개요)
2. [Phase 0: Tailwind CSS v4 마이그레이션](#phase-0-tailwind-css-v4-마이그레이션)
3. [Phase 1: 핵심 컴포넌트 리팩토링](#phase-1-핵심-컴포넌트-리팩토링)
4. [Phase 2: 레이아웃 시스템 업그레이드](#phase-2-레이아웃-시스템-업그레이드)
5. [Phase 3: 애니메이션 시스템 개선](#phase-3-애니메이션-시스템-개선)
6. [Phase 4: 디자인 시스템 통합](#phase-4-디자인-시스템-통합)
7. [Phase 5: 성능 최적화](#phase-5-성능-최적화)
8. [Phase 6: QA & 배포](#phase-6-qa--배포)

---

## 프로젝트 개요

### 리팩토링 목표

1. **Tailwind CSS v4 완전 마이그레이션**
   - postcss.config.js 기반 설정
   - @theme 블록으로 디자인 토큰 관리
   - tailwind.config.ts 제거

2. **Studio 템플릿 패턴 도입**
   - 검증된 컴포넌트 아키텍처
   - 고급 애니메이션 패턴
   - 타입 안전성 강화

3. **BD치과 인터랙션 구현**
   - 비디오 배경 히어로 섹션
   - 의료진 카드 시스템
   - AOS → Framer Motion 전환

### 성공 지표

- [ ] Lighthouse 성능 점수 90+ 유지
- [ ] TypeScript strict mode 100% 커버리지
- [ ] 모바일 반응형 완벽 지원
- [ ] 접근성 WCAG 2.1 AA 준수
- [ ] Studio 템플릿 패턴 80% 적용

---

## Phase 0: Tailwind CSS v4 마이그레이션

**목표**: Tailwind CSS v3 → v4 완전 마이그레이션
**예상 소요**: 1일
**우선순위**: 🔴 Critical

### 작업 목록

#### 0.1 패키지 업데이트

```bash
# 1. Tailwind v4 설치
npm install -D tailwindcss@^4.1.12 @tailwindcss/postcss@^4.1.12

# 2. 불필요한 패키지 제거
npm uninstall @tailwindcss/typography

# 3. Framer Motion 업그레이드
npm install framer-motion@^12.23.11
```

**검증**:
```bash
npm list tailwindcss  # v4.1.12 확인
npm list framer-motion  # v12.23.11 확인
```

#### 0.2 PostCSS 설정 변경

**파일 생성**: `postcss.config.js`

```js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}
  }
}
```

**파일 삭제**:
- `postcss.config.mjs` (기존 파일)

#### 0.3 CSS 파일 재구성

**현재 구조**:
```
src/app/globals.css  (모든 스타일 포함)
```

**새로운 구조**:
```
src/app/
├── globals.css         (메인 임포트)
├── base.css           (폰트, 기본 스타일)
└── typography.css     (텍스트 스타일)
```

**globals.css 재작성**:

```css
@import 'tailwindcss';
@import './base.css';
@import './typography.css' layer(components);

@theme {
  /* Typography */
  --text-xs: 0.75rem;
  --text-xs--line-height: 1rem;
  --text-sm: 0.875rem;
  --text-sm--line-height: 1.5rem;
  --text-base: 1rem;
  --text-base--line-height: 1.75rem;
  --text-xl: 1.25rem;
  --text-xl--line-height: 2rem;
  --text-2xl: 1.5rem;
  --text-2xl--line-height: 2.25rem;
  --text-3xl: 1.875rem;
  --text-3xl--line-height: 2.25rem;
  --text-4xl: 2.25rem;
  --text-4xl--line-height: 2.5rem;
  --text-5xl: 3rem;
  --text-5xl--line-height: 3.5rem;
  --text-6xl: 3.75rem;
  --text-6xl--line-height: 4rem;
  --text-7xl: 4.5rem;
  --text-7xl--line-height: 5rem;

  /* Border Radius */
  --radius-4xl: 2.5rem;

  /* Apple System Fonts */
  --font-display: -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif;
  --font-body: -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif;

  /* Apple Colors */
  --color-system-blue: #007AFF;
  --color-system-green: #34C759;
  --color-system-orange: #FF9500;
  --color-system-red: #FF3B30;
  --color-system-gray: #8E8E93;
  --color-system-gray-6: #F2F2F7;
}
```

**base.css 생성**:

```css
@font-face {
  font-family: "SF Pro Display";
  font-weight: 100 900;
  font-display: swap;
  src: local("SF Pro Display");
}

@font-face {
  font-family: "SF Pro Text";
  font-weight: 100 900;
  font-display: swap;
  src: local("SF Pro Text");
}

/* 기본 스타일 리셋 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

**typography.css 생성**:

```css
/* 한의원 전용 타이포그래피 */
.font-display {
  font-family: var(--font-display);
}

.font-body {
  font-family: var(--font-body);
}

/* 한글 최적화 */
.text-balance {
  text-wrap: balance;
}
```

#### 0.4 tailwind.config.ts 제거

```bash
rm tailwind.config.ts
```

**확인 사항**:
- [ ] 빌드 에러 없음
- [ ] 스타일 정상 적용
- [ ] Hot Reload 작동

#### 0.5 designTokens.ts 마이그레이션

**현재 (TypeScript)**:
```typescript
// src/theme/designTokens.ts
export const designTokens = {
  colors: {
    systemBlue: '#007AFF'
  }
}
```

**이후 (CSS Variables)**:
```css
/* globals.css @theme 블록에 통합 */
--color-system-blue: #007AFF;
```

**사용 방법 변경**:

```tsx
// ❌ Before
import { designTokens } from '@/theme/designTokens'
style={{ color: designTokens.colors.systemBlue }}

// ✅ After
className="text-[var(--color-system-blue)]"
// 또는
className="text-system-blue"  // Tailwind가 자동 생성
```

**마이그레이션 순서**:
1. @theme 블록에 모든 토큰 추가
2. 컴포넌트에서 CSS 변수로 전환
3. designTokens.ts 제거

#### 0.6 테스트 & 검증

**체크리스트**:
- [ ] `npm run dev` 정상 실행
- [ ] 모든 페이지 스타일 정상
- [ ] 애니메이션 작동
- [ ] 반응형 브레이크포인트 작동
- [ ] 빌드 성공 (`npm run build`)

**예상 문제**:
1. **클래스명 미인식** → @theme 블록 확인
2. **폰트 로딩 실패** → base.css 경로 확인
3. **빌드 에러** → postcss.config.js 문법 확인

---

## Phase 1: 핵심 컴포넌트 리팩토링

**목표**: Studio 템플릿 패턴 적용
**예상 소요**: 2-3일
**우선순위**: 🔴 High

### 1.1 FadeIn 컴포넌트 교체

**현재**: `src/components/ui/ScrollReveal.tsx`

**새로운 파일**: `src/components/ui/FadeIn.tsx`

**Studio 템플릿 코드 복사**:

```tsx
'use client'

import { createContext, useContext } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const FadeInStaggerContext = createContext(false)
const viewport = { once: true, margin: '0px 0px -200px' }

export function FadeIn(
  props: React.ComponentPropsWithoutRef<typeof motion.div>,
) {
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

**마이그레이션 작업**:

1. **FadeIn.tsx 생성** - Studio 코드 복사
2. **컴포넌트 교체**:

```tsx
// ❌ Before
<ScrollReveal direction="up" delay={0.2}>
  <div>콘텐츠</div>
</ScrollReveal>

// ✅ After
<FadeIn>
  <div>콘텐츠</div>
</FadeIn>
```

3. **Stagger 적용**:

```tsx
// ✅ 리스트 애니메이션
<FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  {items.map((item) => (
    <FadeIn key={item.id}>
      <Card {...item} />
    </FadeIn>
  ))}
</FadeInStagger>
```

4. **ScrollReveal.tsx 제거**

### 1.2 Container 컴포넌트 업그레이드

**현재**: 단순 div 래퍼

**새로운 패턴**: 제네릭 타입 + 이중 래퍼

**파일 수정**: `src/components/layout/Container.tsx` (새로 생성)

```tsx
import clsx from 'clsx'

type ContainerProps<T extends React.ElementType> = {
  as?: T
  className?: string
  children: React.ReactNode
}

export function Container<T extends React.ElementType = 'div'>({
  as,
  className,
  children,
}: Omit<React.ComponentPropsWithoutRef<T>, keyof ContainerProps<T>> &
  ContainerProps<T>) {
  let Component = as ?? 'div'

  return (
    <Component className={clsx('mx-auto max-w-7xl px-6 lg:px-8', className)}>
      <div className="mx-auto max-w-2xl lg:max-w-none">{children}</div>
    </Component>
  )
}
```

**사용 예시**:

```tsx
// div (기본)
<Container>콘텐츠</Container>

// section
<Container as="section">콘텐츠</Container>

// 커스텀 클래스
<Container className="py-24">콘텐츠</Container>
```

### 1.3 Button 컴포넌트 리팩토링

**파일 수정**: `src/components/ui/button.tsx`

**현재**: Radix UI + shadcn 패턴

**새로운 패턴**: Studio 템플릿 (Link 자동 감지)

```tsx
import Link from 'next/link'
import clsx from 'clsx'

type ButtonProps = {
  invert?: boolean
  variant?: 'primary' | 'secondary'
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
)

export function Button({
  invert = false,
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonProps) {
  className = clsx(
    className,
    'inline-flex rounded-full px-6 py-3 text-base font-semibold transition',
    variant === 'primary' && !invert && 'bg-neutral-950 text-white hover:bg-neutral-800',
    variant === 'primary' && invert && 'bg-white text-neutral-950 hover:bg-neutral-200',
    variant === 'secondary' && 'bg-transparent border-2 border-neutral-950 text-neutral-950 hover:bg-neutral-50',
  )

  let inner = <span className="relative top-px">{children}</span>

  if (typeof props.href === 'undefined') {
    return <button className={className} {...props}>{inner}</button>
  }

  return <Link className={className} {...props}>{inner}</Link>
}
```

**사용 예시**:

```tsx
// 링크 버튼 (자동 감지)
<Button href="/contact">상담 신청</Button>

// 일반 버튼
<Button onClick={handleClick}>클릭</Button>

// 다크 배경용 (invert)
<Button href="/" invert>홈으로</Button>
```

### 1.4 List 컴포넌트 추가

**파일 생성**: `src/components/ui/List.tsx`

**Studio 템플릿 코드**:

```tsx
import clsx from 'clsx'
import { Border } from '@/components/ui/Border'
import { FadeIn, FadeInStagger } from '@/components/ui/FadeIn'

export function List({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <FadeInStagger>
      <ul role="list" className={clsx('text-base text-neutral-600', className)}>
        {children}
      </ul>
    </FadeInStagger>
  )
}

export function ListItem({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <li className="group mt-10 first:mt-0">
      <FadeIn>
        <Border className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
          <strong className="font-semibold text-neutral-950">{title}. </strong>
          {children}
        </Border>
      </FadeIn>
    </li>
  )
}
```

**사용 예시**:

```tsx
<List>
  <ListItem title="침구치료">
    경혈과 경락을 자극하여 기혈순환을 개선합니다.
  </ListItem>
  <ListItem title="한약처방">
    체질에 맞는 맞춤 한약으로 근본 치료를 진행합니다.
  </ListItem>
</List>
```

### 1.5 Border 컴포넌트 추가

**파일 생성**: `src/components/ui/Border.tsx`

```tsx
import clsx from 'clsx'

export function Border({
  className,
  position = 'top',
  invert = false,
  as: Component = 'div',
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  as?: React.ElementType
  position?: 'top' | 'left'
  invert?: boolean
}) {
  return (
    <Component
      className={clsx(
        className,
        'relative before:absolute after:absolute',
        invert
          ? 'before:bg-white after:bg-white/10'
          : 'before:bg-neutral-950 after:bg-neutral-950/10',
        position === 'top' &&
          'before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px',
        position === 'left' &&
          'before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px',
      )}
      {...props}
    />
  )
}
```

---

## Phase 2: 레이아웃 시스템 업그레이드

**목표**: RootLayout 패턴 적용
**예상 소요**: 2일
**우선순위**: 🟡 Medium

### 2.1 RootLayout 컴포넌트 생성

**파일 생성**: `src/components/layout/RootLayout.tsx`

**주요 기능**:
1. 헤더 (로고 hover 인터랙션)
2. 햄버거 메뉴 애니메이션
3. GridPattern 배경
4. 푸터 통합

**구현 순서**:

1. **Context 설정**:

```tsx
'use client'

import { createContext, useContext, useState } from 'react'
import { usePathname } from 'next/navigation'

const RootLayoutContext = createContext<{
  logoHovered: boolean
  setLogoHovered: React.Dispatch<React.SetStateAction<boolean>>
} | null>(null)

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

2. **햄버거 메뉴 애니메이션**:

```tsx
function RootLayoutInner({ children }: { children: React.ReactNode }) {
  let [expanded, setExpanded] = useState(false)

  return (
    <MotionConfig transition={{ duration: 0.3 }}>
      <header>
        {/* 닫힌 상태 헤더 */}
        <Header
          icon={MenuIcon}
          expanded={expanded}
          onToggle={() => setExpanded(!expanded)}
        />

        {/* 펼쳐진 메뉴 */}
        <motion.div
          layout
          style={{ height: expanded ? 'auto' : '0.5rem' }}
          className="overflow-hidden bg-neutral-950"
        >
          <Navigation />
        </motion.div>
      </header>

      {/* 메인 콘텐츠 */}
      <motion.div layout className="bg-white rounded-t-[40px]">
        <main>{children}</main>
        <Footer />
      </motion.div>
    </MotionConfig>
  )
}
```

### 2.2 GridPattern 배경 추가

**파일 생성**: `src/components/ui/GridPattern.tsx`

**Studio 템플릿 코드 복사** (129줄)

**적용 위치**:
- 히어로 섹션 배경
- 서비스 페이지 상단

**사용 예시**:

```tsx
<div className="relative">
  <GridPattern
    className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full"
    yOffset={-96}
    interactive
  />
  <div className="relative z-10">
    콘텐츠
  </div>
</div>
```

### 2.3 AppleHeader 리팩토링

**파일**: `src/components/layout/AppleHeader.tsx`

**변경사항**:

1. **로고 hover 인터랙션 추가**:

```tsx
function Header() {
  let { logoHovered, setLogoHovered } = useContext(RootLayoutContext)!

  return (
    <header>
      <Link
        href="/"
        onMouseEnter={() => setLogoHovered(true)}
        onMouseLeave={() => setLogoHovered(false)}
      >
        <Logo filled={logoHovered} />
      </Link>
    </header>
  )
}
```

2. **햄버거 메뉴 애니메이션**:

```tsx
<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="p-2.5 rounded-full transition hover:bg-neutral-950/10"
>
  <motion.div
    animate={{ rotate: menuOpen ? 45 : 0 }}
    transition={{ duration: 0.3 }}
  >
    <MenuIcon />
  </motion.div>
</button>
```

---

## Phase 3: 애니메이션 시스템 개선

**목표**: Framer Motion v12 패턴 적용
**예상 소요**: 1-2일
**우선순위**: 🟡 Medium

### 3.1 MotionConfig 전역 설정

**파일**: `src/app/providers.tsx` (새로 생성)

```tsx
'use client'

import { MotionConfig, useReducedMotion } from 'framer-motion'
import { ThemeProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
  let shouldReduceMotion = useReducedMotion()

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <MotionConfig
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.3 }}
      >
        {children}
      </MotionConfig>
    </ThemeProvider>
  )
}
```

**layout.tsx 수정**:

```tsx
import { Providers } from './providers'

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
```

### 3.2 ParallaxSection 업그레이드

**파일**: `src/components/ui/ParallaxSection.tsx`

**현재**: 단순 transform
**새로운**: Intersection Observer + smooth scroll

```tsx
'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function ParallaxSection({
  imageUrl,
  height = '600px',
  children,
}: {
  imageUrl: string
  height?: string
  children: React.ReactNode
}) {
  let ref = useRef<HTMLDivElement>(null)
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  let y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <div ref={ref} className="relative overflow-hidden" style={{ height }}>
      <motion.div
        className="absolute inset-0"
        style={{ y }}
      >
        <img
          src={imageUrl}
          alt=""
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
```

### 3.3 ImageSequence 컴포넌트 추가

**파일 생성**: `src/components/ui/ImageSequence.tsx`

**기능**: 스크롤 기반 이미지 시퀀스 애니메이션 (Apple 스타일)

```tsx
'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function ImageSequence({
  images,
  height = '100vh',
}: {
  images: string[]
  height?: string
}) {
  let ref = useRef<HTMLDivElement>(null)
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  let imageIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, images.length - 1]
  )

  return (
    <div ref={ref} style={{ height }} className="relative">
      <motion.div className="sticky top-0">
        {images.map((src, idx) => (
          <motion.img
            key={src}
            src={src}
            style={{
              opacity: useTransform(
                imageIndex,
                [idx - 0.5, idx, idx + 0.5],
                [0, 1, 0]
              ),
            }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ))}
      </motion.div>
    </div>
  )
}
```

---

## Phase 4: 디자인 시스템 통합

**목표**: Apple 디자인 토큰 + Studio 패턴 융합
**예상 소요**: 1일
**우선순위**: 🟢 Low

### 4.1 @theme 블록 확장

**파일**: `src/app/globals.css`

```css
@theme {
  /* 기존 Typography, Radius, Fonts ... */

  /* Apple Colors - Primary */
  --color-system-blue: #007AFF;
  --color-system-green: #34C759;
  --color-system-orange: #FF9500;
  --color-system-red: #FF3B30;

  /* Apple Colors - Grayscale */
  --color-system-gray: #8E8E93;
  --color-system-gray-2: #AEAEB2;
  --color-system-gray-3: #C7C7CC;
  --color-system-gray-4: #D1D1D6;
  --color-system-gray-5: #E5E5EA;
  --color-system-gray-6: #F2F2F7;

  /* Studio Neutral (다크 모드 대비) */
  --color-neutral-50: #FAFAFA;
  --color-neutral-100: #F5F5F5;
  --color-neutral-200: #E5E5E5;
  --color-neutral-800: #262626;
  --color-neutral-900: #171717;
  --color-neutral-950: #0A0A0A;

  /* 한의원 브랜드 컬러 */
  --color-brand-primary: var(--color-system-green);
  --color-brand-secondary: var(--color-system-blue);
}
```

### 4.2 Tailwind 클래스 자동 생성

**Tailwind v4 자동 생성 클래스**:

```tsx
// Apple 시스템 컬러
className="text-system-blue"
className="bg-system-green"
className="border-system-gray"

// Neutral 컬러
className="bg-neutral-950"
className="text-neutral-600"

// 브랜드 컬러
className="text-brand-primary"
```

### 4.3 designTokens.ts 제거

**마이그레이션 순서**:

1. 모든 컴포넌트에서 CSS 변수로 전환
2. 빌드 테스트
3. `src/theme/designTokens.ts` 삭제

---

## Phase 5: 성능 최적화

**목표**: Lighthouse 90+ 달성
**예상 소요**: 1일
**우선순위**: 🟡 Medium

### 5.1 이미지 최적화

**현재**: picsum.photos 사용
**개선**: Next.js Image 컴포넌트 + blur placeholder

```tsx
import Image from 'next/image'

<Image
  src="/images/hero.jpg"
  alt="BD 한의원"
  width={1920}
  height={1080}
  priority  // 히어로 이미지
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

### 5.2 코드 스플리팅

**동적 임포트 적용**:

```tsx
import dynamic from 'next/dynamic'

// 무거운 애니메이션 컴포넌트
const ImageSequence = dynamic(() => import('@/components/ui/ImageSequence'), {
  loading: () => <div>로딩중...</div>,
  ssr: false  // 클라이언트 전용
})
```

### 5.3 Framer Motion 최적화

**GPU 가속 활성화**:

```tsx
<motion.div
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  style={{
    willChange: 'transform, opacity',
    transform: 'translateZ(0)',  // GPU 가속
  }}
/>
```

---

## Phase 6: QA & 배포

**목표**: 프로덕션 배포
**예상 소요**: 1일
**우선순위**: 🔴 Critical

### 6.1 테스트 체크리스트

- [ ] 모든 페이지 정상 렌더링
- [ ] 모바일 반응형 (375px ~ 1920px)
- [ ] 애니메이션 부드러움
- [ ] 접근성 (키보드 네비게이션)
- [ ] 다크모드 (향후 추가 시)
- [ ] SEO 메타데이터
- [ ] 빌드 성공 (`npm run build`)
- [ ] Lighthouse 점수 90+

### 6.2 브라우저 호환성

**테스트 브라우저**:
- Chrome (최신)
- Safari (최신)
- Firefox (최신)
- Edge (최신)
- iOS Safari (최신)
- Android Chrome (최신)

### 6.3 배포

```bash
# 프로덕션 빌드
npm run build

# 로컬 프로덕션 테스트
npm start

# Vercel 배포
vercel --prod
```

---

## 마일스톤 & 타임라인

| Phase | 작업 내용 | 예상 소요 | 우선순위 | 상태 |
|-------|----------|----------|---------|------|
| **Phase 0** | Tailwind v4 마이그레이션 | 1일 | 🔴 Critical | ✅ 준비 완료 |
| **Phase 1** | 핵심 컴포넌트 리팩토링 | 2-3일 | 🔴 High | ⏳ 대기 |
| **Phase 2** | 레이아웃 시스템 업그레이드 | 2일 | 🟡 Medium | ⏳ 대기 |
| **Phase 3** | 애니메이션 시스템 개선 | 1-2일 | 🟡 Medium | ⏳ 대기 |
| **Phase 4** | 디자인 시스템 통합 | 1일 | 🟢 Low | ⏳ 대기 |
| **Phase 5** | 성능 최적화 | 1일 | 🟡 Medium | ⏳ 대기 |
| **Phase 6** | QA & 배포 | 1일 | 🔴 Critical | ⏳ 대기 |

**총 예상 기간**: 9-11일 (약 2주)

---

## 리스크 & 대응 방안

### 1. Tailwind v4 Breaking Changes

**리스크**: 일부 클래스 작동 안 함
**대응**:
- Phase 0에서 충분한 테스트
- Studio 템플릿 참고하여 검증

### 2. Framer Motion v12 마이그레이션

**리스크**: 애니메이션 API 변경
**대응**:
- 공식 마이그레이션 가이드 참고
- Studio 템플릿 패턴 그대로 적용

### 3. 성능 저하

**리스크**: 애니메이션 과다로 인한 성능 이슈
**대응**:
- `useReducedMotion` 적극 활용
- GPU 가속 활성화
- 동적 임포트로 코드 스플리팅

---

## 다음 단계

1. **Phase 0 시작**: Tailwind CSS v4 마이그레이션
2. **진행 상황 공유**: GitHub Issue #29 업데이트
3. **문제 발생 시**: 이슈 등록 후 논의

**GitHub Issue**: [#29 Studio 템플릿 기반 리팩토링 계획](https://github.com/bulhwi/web-side-project/issues/29)

---

**리팩토링 시작일**: 2025-11-14
**예상 완료일**: 2025-11-28 (2주)
**최종 목표**: 프리미엄 한의원 웹사이트 완성
