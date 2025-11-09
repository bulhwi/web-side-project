# BD 한의원 웹사이트 Technical Architecture Document

## Tech Stack

Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, Radix UI, lucide-react, @tanstack/react-query, es-toolkit, date-fns, axios

## 실제 구현된 Directory Structure

/
├── src/
│   ├── app/                    # Next.js 15 App Router
│   │   ├── page.tsx            # 메인 페이지 (Apple 스타일 한의원 홈페이지)
│   │   ├── services/           # 진료과목 페이지
│   │   │   └── page.tsx        # BD Seoul 스타일 7단계 진료 과정
│   │   ├── layout.tsx          # 전체 레이아웃
│   │   ├── providers.tsx       # Next Themes Provider
│   │   └── globals.css         # Tailwind CSS
│   ├── components/
│   │   ├── layout/             # 레이아웃 컴포넌트
│   │   │   └── AppleHeader.tsx # Apple 스타일 네비게이션 헤더
│   │   ├── sections/           # 페이지 섹션 컴포넌트
│   │   │   ├── AppleHeroSection.tsx      # 메인 히어로 섹션
│   │   │   ├── AppleServicesSection.tsx  # 한의학 서비스 소개
│   │   │   ├── TechnologySection.tsx     # 현대 한의학 기술
│   │   │   ├── FaqSection.tsx           # FAQ 아코디언
│   │   │   ├── ImplantHeroSection.tsx   # 서비스 페이지 히어로
│   │   │   ├── ImplantFeaturesSection.tsx # 한의원 특징
│   │   │   └── ImplantProcessSection.tsx  # 7단계 진료 과정
│   │   └── ui/                 # 재사용 가능한 UI 컴포넌트
│   │       ├── FaqAccordion.tsx         # FAQ 아코디언
│   │       ├── ScrollReveal.tsx         # 스크롤 애니메이션
│   │       ├── ImageSequence.tsx        # 이미지 시퀀스 애니메이션
│   │       ├── ParallaxSection.tsx      # 패럴랙스 스크롤
│   │       ├── VideoBackground.tsx      # 비디오 배경
│   │       └── Button.tsx              # Apple 스타일 버튼
│   ├── theme/
│   │   └── designTokens.ts     # Apple 디자인 시스템 토큰
│   └── lib/
│       └── supabase/           # Supabase 클라이언트 (미사용)
├── public/                     # 정적 에셋
└── vooster-docs/              # 프로젝트 문서화
    ├── prd.md                 # Product Requirements Document
    ├── architecture.md        # Technical Architecture
    ├── guideline.md          # Development Guidelines
    ├── step-by-step.md       # Implementation Steps
    └── clean-code.md         # Clean Code Guidelines

## 구현된 주요 기술 아키텍처

### 1. Apple 디자인 시스템 (Design System)
- **위치**: `src/theme/designTokens.ts`
- **특징**: Apple SF Pro 폰트, 시스템 블루 색상 팔레트
- **활용**: 모든 컴포넌트에서 일관된 스타일 적용

### 2. 고급 애니메이션 시스템
- **Framer Motion 기반**: 스크롤 애니메이션, 패럴랙스 효과
- **구현 컴포넌트**:
  - `ScrollReveal.tsx`: fade-in, slide-in 애니메이션
  - `ParallaxSection.tsx`: 배경 이미지 패럴랙스
  - `ImageSequence.tsx`: 스크롤 기반 이미지 시퀀스 전환
  - `VideoBackground.tsx`: 비디오 배경과 fallback 이미지

### 3. 반응형 컴포넌트 아키텍처
- **모바일 퍼스트**: Tailwind CSS 기반 반응형 디자인
- **접근성**: ARIA 속성, 키보드 네비게이션, 의미론적 HTML
- **성능**: 이미지 lazy loading, 코드 스플리팅

### 4. 한의학 전문 콘텐츠 구조
- **치과 → 한의원 전환**: 모든 치과 관련 용어를 한의학 용어로 변경
- **서비스 체계**:
  - 침구치료 (무통 침술, 전자침 시스템)
  - 한약처방 (체질 맞춤형 처방)
  - 추나요법 (수기 교정, 척추 치료)
  - 체질진단 (과학적 체질 분석)

### 5. 페이지별 아키텍처

#### 메인 페이지 (/)
- `AppleHeroSection`: 비디오 배경 히어로 섹션
- `AppleServicesSection`: 3개 주요 서비스 소개
- `TechnologySection`: 현대 한의학 기술 4가지
- `FaqSection`: 자주 묻는 질문 아코디언

#### 서비스 페이지 (/services)
- `ImplantHeroSection`: "왜 BD 한의원인가?" 히어로
- `ImplantFeaturesSection`: 한의원 특징 및 강점
- `ImplantProcessSection`: 7단계 체계적 진료 과정

### 6. 성능 최적화 전략
- **이미지 최적화**: Picsum.photos 사용으로 503 에러 해결
- **코드 스플리팅**: Next.js 15 App Router 기반 자동 코드 분할
- **캐싱**: React Query 준비 (향후 API 연동 시 활용)

### 7. 개발 도구 및 품질 관리
- **TypeScript**: 전체 코드베이스 타입 안정성
- **ESLint**: 코드 품질 및 일관성 유지
- **Tailwind CSS**: 유틸리티 퍼스트 스타일링

## 향후 확장 계획

### 백엔드 연동 준비
- **Supabase 클라이언트**: 이미 설치되어 있으나 미사용
- **React Query**: 서버 상태 관리 준비
- **API Routes**: Next.js API 라우트 활용 예정

### 추가 기능 개발
- 온라인 예약 시스템
- 체질진단 도구
- 환자 상담 시스템
- 치료 후기 및 사례 관리

### SEO 및 성능 개선
- 메타데이터 최적화 완료
- 구조화된 데이터 (JSON-LD) 추가 예정
- Core Web Vitals 최적화

## 기술적 의사결정 이유

1. **Next.js 15**: SSR/SSG를 통한 SEO 최적화
2. **Framer Motion**: 고품질 애니메이션 구현
3. **Tailwind CSS**: 빠른 개발과 일관된 디자인
4. **TypeScript**: 타입 안정성과 개발 생산성
5. **Picsum.photos**: 안정적인 플레이스홀더 이미지 제공

## 브랜딩 전환 완료

- **BD 치과 → BD 한의원**: 모든 텍스트 및 콘텐츠 변경 완료
- **서비스 전환**: 임플란트, 치아교정 → 침구치료, 한약처방, 추나요법
- **전문성 강조**: 경희대 출신 한의사, 체계적 진료 과정 홍보