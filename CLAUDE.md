# BD 한의원 웹사이트 - Claude Development Guide

> **Apple 스타일 디자인 시스템을 적용한 현대적 한의원 웹사이트**
> Next.js 15 + React 19 + TypeScript 기반

**프로젝트**: BD 한의원 웹사이트
**버전**: 2.0.0
**최종 업데이트**: 2025-11-09

---

## 📚 프로젝트 배경

### 원본 참고 사이트
**[www.bdseoulbd.com](https://www.bdseoulbd.com)** (서울비디치과)
- 비디오 배경 히어로 섹션
- 의료진 소개 카드 시스템
- 차별화 요소 섹션
- AOS 스크롤 애니메이션

### 진화 과정
1. **1차 리뉴얼** (v1.0 - 2025.09)
   - 치과 → 한의원 컨셉 전환
   - Apple 디자인 시스템 적용
   - Framer Motion 애니메이션 도입
   - Next.js 15 + React 19 마이그레이션

2. **2차 리팩토링** (v2.0 - 진행 중)
   - **Studio 템플릿** 기반 인터랙션 업그레이드
   - Tailwind CSS v4 마이그레이션
   - BD치과 인터랙션 + Studio 스타일 융합
   - 프리미엄 애니메이션 패턴 도입

**리팩토링 목표**: www.bdseoulbd.com의 인터랙션을 Studio 템플릿의 세련된 디자인/스펙으로 재구현

---

## 📋 프로젝트 문서 구조

이 프로젝트의 문서는 다음과 같이 구성되어 있습니다:

```
docs/
├── PRD.md                  # 제품 요구사항 문서 (Product Requirements Document)
├── architecture.md         # 기술 아키텍처 문서
├── guideline.md           # 개발 가이드라인
├── tech-spec.md           # 기술 사양 (Tailwind Plus 리팩토링)
└── github-issues.md       # GitHub 이슈 목록
```

**주요 참고 문서**:
- **PRD**: `docs/PRD.md` - 비즈니스 요구사항, 사용자 여정, 기능 명세
- **Tech Spec**: `docs/tech-spec.md` - Tailwind CSS Plus 리팩토링 기술 사양
- **Guidelines**: `docs/guideline.md` - 코딩 규칙 및 가이드라인

---

## 🎯 프로젝트 개요

BD 한의원 웹사이트는 **전통 한의학과 Apple의 현대적 디자인을 융합**한 프리미엄 의료 웹사이트입니다.

### 핵심 특징
- ✅ **Apple 디자인 시스템**: SF Pro 폰트, 시스템 컬러 팔레트
- ✅ **고급 애니메이션**: Framer Motion 기반 스크롤 애니메이션
- ✅ **완전 반응형**: 모바일/태블릿/데스크탑 최적화
- ✅ **SEO 최적화**: Next.js 15 App Router SSR/SSG
- ✅ **접근성 준수**: WCAG 2.1 AA 기준

---

## 🛠 기술 스택

### 코어
- **Next.js** 15.1.0 - App Router
- **React** 19.0.0
- **TypeScript** 5.x
- **Tailwind CSS** 3.4.1 (→ v4 마이그레이션 예정)

### UI/UX
- **Framer Motion** 11.x - 애니메이션
- **Radix UI** 1.x - Headless UI 컴포넌트
- **Lucide React** - 아이콘 시스템
- **next-themes** - 다크모드

### 상태 관리 (준비됨)
- **Zustand** - 클라이언트 상태
- **@tanstack/react-query** - 서버 상태

### 폼 & 검증 (준비됨)
- **React Hook Form**
- **Zod**

---

## 📁 프로젝트 구조

```
/
├── src/
│   ├── app/                          # Next.js 15 App Router
│   │   ├── page.tsx                  # 메인 페이지
│   │   ├── services/page.tsx         # 진료과목 페이지
│   │   ├── layout.tsx                # 전역 레이아웃
│   │   ├── providers.tsx             # Theme Provider
│   │   └── globals.css               # Tailwind CSS
│   │
│   ├── components/
│   │   ├── layout/                   # 레이아웃 컴포넌트
│   │   │   ├── AppleHeader.tsx
│   │   │   └── AppleFooter.tsx
│   │   │
│   │   ├── sections/                 # 페이지 섹션
│   │   │   ├── AppleHeroSection.tsx
│   │   │   ├── AppleServicesSection.tsx
│   │   │   ├── TechnologySection.tsx
│   │   │   ├── FaqSection.tsx
│   │   │   ├── ServicesHeroSection.tsx
│   │   │   ├── ServicesGridSection.tsx
│   │   │   └── TreatmentProcessSection.tsx
│   │   │
│   │   └── ui/                       # 재사용 UI 컴포넌트
│   │       ├── ScrollReveal.tsx
│   │       ├── ParallaxSection.tsx
│   │       ├── ImageSequence.tsx
│   │       ├── VideoBackground.tsx
│   │       ├── FaqAccordion.tsx
│   │       └── button.tsx
│   │
│   ├── theme/
│   │   └── designTokens.ts           # Apple 디자인 토큰
│   │
│   └── lib/
│       └── utils.ts                  # 유틸리티 함수
│
├── public/                           # 정적 에셋
├── docs/                             # 프로젝트 문서
└── .claude/                          # Claude 설정
```

---

## 🎨 디자인 시스템

### Apple 컬러 팔레트

```typescript
// Primary Colors
systemBlue: '#007AFF'      // CTA, 링크
systemGreen: '#34C759'     // 성공
systemOrange: '#FF9500'    // 강조
systemRed: '#FF3B30'       // 에러

// Grayscale
systemGray: '#8E8E93'      // 보조 텍스트
systemGray6: '#F2F2F7'     // 섹션 배경
systemBackground: '#FFFFFF' // 메인 배경
```

### 타이포그래피

```typescript
fontFamilies: {
  heading: '-apple-system, BlinkMacSystemFont, "SF Pro Display"',
  body: '-apple-system, BlinkMacSystemFont, "SF Pro Text"'
}

fontSizes: {
  '5xl': '3rem',    // 48px - 히어로 헤딩
  '4xl': '2.25rem', // 36px - 섹션 헤딩 (H1)
  '3xl': '1.875rem',// 30px - 서브 헤딩 (H2)
  '2xl': '1.5rem',  // 24px - 카드 제목 (H3)
  'base': '1rem',   // 16px - 본문
  'sm': '0.875rem'  // 14px - 캡션
}
```

---

## 📝 개발 규칙 및 가이드라인

### 코딩 규칙

1. **클라이언트 컴포넌트 우선**
   ```typescript
   'use client';

   export function MyComponent() {
     // ...
   }
   ```

2. **Promise 기반 params** (page.tsx)
   ```typescript
   export default async function Page({
     params
   }: {
     params: Promise<{ id: string }>
   }) {
     const { id } = await params;
   }
   ```

3. **picsum.photos 사용**
   ```typescript
   imageUrl="https://picsum.photos/1920/1080"
   ```

4. **TypeScript strict mode**
   - 모든 props 타입 정의
   - `any` 사용 금지
   - interface 또는 type 명시

---

### Apple 디자인 시스템 규칙

#### 1. designTokens 필수 사용

```typescript
import { designTokens } from '@/theme/designTokens';

<div style={{
  fontFamily: designTokens.typography.fontFamilies.heading,
  color: designTokens.colors.systemBlue
}}>
```

#### 2. 반응형 클래스 패턴

```typescript
className="
  text-xl lg:text-2xl        // 폰트 크기
  px-4 lg:px-8               // 패딩
  grid grid-cols-1 lg:grid-cols-3  // 그리드
"
```

#### 3. 애니메이션 패턴

```typescript
// 표준 스크롤 애니메이션
<ScrollReveal direction="up" delay={0.2}>
  <div>콘텐츠</div>
</ScrollReveal>

// 패럴랙스 섹션
<ParallaxSection
  imageUrl="https://picsum.photos/1920/1080"
  height="600px"
>
  <div>콘텐츠</div>
</ParallaxSection>
```

---

### 한의학 전문 용어 규칙

#### ✅ 필수 사용 용어
- **한의원 관련**: 한의원, 한의사, 한의학 클리닉
- **치료 서비스**: 침구치료, 한약처방, 추나요법, 체질진단
- **전문 용어**: 경혈, 경락, 기혈순환, 음양오행, 사상체질

#### ❌ 금지 용어
- **치과 관련**: 치과, 임플란트, 치아교정, 스케일링
- **기타**: BD 치과, 치과의사

---

### 컴포넌트 작성 규칙

#### 1. Functional Components만 사용

```typescript
interface MyComponentProps {
  title: string;
  description?: string;
}

export function MyComponent({ title, description }: MyComponentProps) {
  return (
    <div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
```

#### 2. Early Returns

```typescript
export function MyComponent({ data }: Props) {
  if (!data) return null;

  if (data.isLoading) {
    return <LoadingSpinner />;
  }

  return <ActualContent data={data} />;
}
```

#### 3. Props 타입 정의

```typescript
// ✅ Good
interface ButtonProps {
  variant: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  children: React.ReactNode;
}

// ❌ Bad
function Button(props: any) { }
```

---

## 🚀 명령어

```bash
# 개발 서버 (Turbopack)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버
npm start

# 린팅
npm run lint
```

---

## 🔧 성능 최적화 가이드

### 이미지 최적화

```typescript
import Image from 'next/image';

<Image
  src="https://picsum.photos/1920/1080"
  alt="BD 한의원 침구치료"
  width={1920}
  height={1080}
  loading="lazy"
  placeholder="blur"
  blurDataURL="data:image/..."
/>
```

### 코드 스플리팅

```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('@/components/HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});
```

### Framer Motion 최적화

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
  // GPU 가속
  style={{ willChange: 'transform, opacity' }}
>
```

---

## ♿ 접근성 가이드

### ARIA 속성

```typescript
// 네비게이션
<nav aria-label="메인 네비게이션">
  <ul role="list">
    <li><a href="/">홈</a></li>
  </ul>
</nav>

// 버튼
<button
  aria-label="메뉴 열기"
  aria-expanded={isOpen}
  aria-controls="mobile-menu"
>

// 아코디언
<div
  role="button"
  aria-expanded={isExpanded}
  aria-controls="faq-panel-1"
>
```

### 키보드 네비게이션

- **Tab**: 다음 요소로 이동
- **Shift + Tab**: 이전 요소로 이동
- **Enter**: 버튼 활성화
- **Space**: 체크박스/라디오 토글
- **Escape**: 모달/다이얼로그 닫기

### 색상 대비

- **일반 텍스트**: 4.5:1 이상
- **대형 텍스트 (18px+)**: 3:1 이상
- **UI 요소**: 3:1 이상

---

## 📊 현재 프로젝트 상태

### 완료된 기능 (v1.0 - 2025.09)
- ✅ Apple 스타일 디자인 시스템 구축
- ✅ 메인 페이지 (히어로, 서비스, 기술, FAQ)
- ✅ 서비스 페이지 (히어로, 특징, 7단계 진료)
- ✅ 완전 반응형 디자인
- ✅ Framer Motion 애니메이션
- ✅ SEO 메타데이터
- ✅ BD치과 사이트 구조 참고 및 한의원 전환

### 진행 중 (v2.0 - Studio 리팩토링)

**현재 단계**: Studio 템플릿 대기 중

#### 준비 작업
- ⏳ Studio 템플릿 소스코드 제공 대기
- 📝 www.bdseoulbd.com 인터랙션 상세 분석
- 📋 리팩토링 계획 수립 완료 ([Issue #29](https://github.com/bulhwi/web-side-project/issues/29))

#### 예정 작업 (템플릿 제공 후)
- 🔄 **Phase 0**: Tailwind CSS v4 마이그레이션
- 🔄 **Phase 1**: Studio 템플릿 분석 및 컴포넌트 매핑
- 🔄 **Phase 2**: 헤더 인터랙션 업그레이드
- 🔄 **Phase 3**: 히어로 섹션 애니메이션 개선
- 🔄 **Phase 4**: 서비스 섹션 인터랙션 강화
- 🔄 **Phase 5**: 공통 애니메이션 시스템 구축
- 🔄 **Phase 6**: QA 및 성능 최적화

**작업 방식**: 진행하면서 이슈 등록 → 논의 → 수정

**GitHub Issues**: https://github.com/bulhwi/web-side-project/issues
**주요 Issue**: [#29 Studio 템플릿 기반 리팩토링 계획](https://github.com/bulhwi/web-side-project/issues/29)

---

## 🎯 다음 단계 (Roadmap)

### 2025 Q1 (현재)
- [ ] Tailwind CSS v4 마이그레이션
- [ ] Tailwind CSS Plus 템플릿 적용
- [ ] 디자인 시스템 통합

### 2025 Q2
- [ ] 온라인 예약 시스템
- [ ] 한의사 프로필 페이지
- [ ] 치료 후기 시스템

### 2025 Q3
- [ ] 체질진단 온라인 도구
- [ ] 환자 로그인 시스템
- [ ] 커뮤니티 게시판

---

## 🐛 문제 해결

### 이미지 로딩 오류
- **문제**: Unsplash 503 에러
- **해결**: picsum.photos 사용

### 한글 인코딩 문제
- **해결**: UTF-8 인코딩 확인
- **확인**: 모든 한의학 전문 용어 정확한 표기

### 애니메이션 성능 문제
- **해결**: Intersection Observer 활용
- **최적화**: GPU 가속 (`will-change` 속성)

---

## 📚 참고 자료

### 프로젝트 문서
- **PRD**: `docs/PRD.md` - 제품 요구사항 문서
- **Tech Spec**: `docs/tech-spec.md` - 기술 사양
- **Architecture**: `docs/architecture.md` - 기술 아키텍처
- **Guidelines**: `docs/guideline.md` - 개발 가이드라인

### 외부 자료
- **Apple HIG**: https://developer.apple.com/design/human-interface-guidelines/
- **WCAG 2.1**: https://www.w3.org/WAI/WCAG21/quickref/
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/

---

## 💡 개발 팁

### 컴포넌트 개발 순서

1. **구조 작성** (HTML/JSX)
2. **타입 정의** (TypeScript interfaces)
3. **스타일 적용** (Tailwind classes + designTokens)
4. **애니메이션 추가** (Framer Motion)
5. **접근성 검증** (ARIA 속성, 키보드 네비게이션)
6. **반응형 테스트** (모바일/태블릿/데스크탑)

### 디버깅 체크리스트

- [ ] 콘솔 에러 없음
- [ ] TypeScript 에러 없음
- [ ] 모든 이미지 로드됨
- [ ] 모바일 반응형 확인
- [ ] 다크모드 작동 (향후)
- [ ] 스크롤 애니메이션 작동
- [ ] 링크/버튼 모두 작동

---

## 🔒 보안 가이드

### XSS 방지
```typescript
// ❌ Bad
<div dangerouslySetInnerHTML={{ __html: userInput }} />

// ✅ Good
<div>{userInput}</div>
```

### 환경 변수
```bash
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgresql://...  # 서버에서만 접근 가능
```

---

## 📄 라이센스

MIT License

---

**BD 한의원 웹사이트** - 전통과 현대가 만나는 곳

**버전**: 2.0.0
**최종 업데이트**: 2025-11-09
