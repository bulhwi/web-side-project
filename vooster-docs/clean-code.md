# BD 한의원 웹사이트 Clean Code Guidelines

## 프로젝트 특화 Clean Code 원칙

BD 한의원 웹사이트 개발 과정에서 적용한 클린 코드 원칙과 실제 구현 사례

## Core Principles (핵심 원칙)

### 1. Apple 디자인 시스템 일관성
- **designTokens.ts 중앙 관리**: 모든 스타일 값을 중앙에서 관리
- **재사용 가능한 컴포넌트**: UI 컴포넌트의 일관된 패턴 적용
- **타이포그래피 시스템**: SF Pro 폰트 시스템 체계적 적용

### 2. 한의학 도메인 명확성
- **의미론적 명명**: 치과 용어 대신 정확한 한의학 용어 사용
- **도메인 모델링**: 침구치료, 한약처방, 추나요법, 체질진단 등 명확한 구분
- **콘텐츠 일관성**: 모든 텍스트에서 한의학 전문성 표현

## 실제 적용된 Naming Conventions

### 컴포넌트 명명 규칙
```typescript
// ✅ 좋은 예 - 의도가 명확한 이름
export const AppleHeroSection: React.FC = () => { ... }
export const TechnologySection: React.FC = () => { ... }
export const FaqAccordion: React.FC<FaqAccordionProps> = ({ ... }) => { ... }

// ❌ 나쁜 예 - 애매한 이름
export const Section1: React.FC = () => { ... }
export const Component: React.FC = () => { ... }
```

### 한의학 서비스 명명
```typescript
// ✅ 정확한 한의학 용어 사용
const services = [
  {
    title: '침구치료',
    subtitle: '정밀한 경혈 자극',
    description: '전통 침술과 현대 기법이 결합된 개인 맞춤형 침구 치료'
  },
  {
    title: '한약처방',
    subtitle: '개인 맞춤 한약',
    description: '개인의 체질과 증상에 맞는 정확한 한약 처방'
  }
];

// ❌ 피해야 할 치과 용어
const services = [
  { title: '임플란트', description: '인공치아 식립' },
  { title: '치아교정', description: '치열 개선' }
];
```

## Functions & Methods (함수 설계)

### 1. Single Responsibility Principle
```typescript
// ✅ 단일 책임 원칙 - 각 함수는 하나의 기능만
const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: direction === 'up' ? 50 : -50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};
```

### 2. 파라미터 최적화
```typescript
// ✅ Props 객체로 파라미터 관리
interface TechnologySectionProps {
  className?: string;
  technologies?: Technology[];
  backgroundImage?: string;
}

// ❌ 파라미터가 너무 많음
function createSection(title: string, subtitle: string, description: string,
  bgColor: string, textColor: string, padding: string) { ... }
```

## Code Structure (코드 구조)

### 1. 디렉토리 구조 (Feature-based Organization)
```
src/
├── components/
│   ├── layout/          # 레이아웃 관련 컴포넌트
│   ├── sections/        # 페이지별 섹션 컴포넌트
│   └── ui/             # 재사용 가능한 UI 컴포넌트
├── theme/              # 디자인 시스템
└── app/                # Next.js 페이지
```

### 2. 의존성 방향성
```typescript
// ✅ 의존성이 안쪽을 향함 (Clean Architecture)
// components/ui (낮은 레벨) ← components/sections (높은 레벨)
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ParallaxSection } from '@/components/ui/ParallaxSection';

export const TechnologySection: React.FC = () => {
  return (
    <ParallaxSection backgroundImage="...">
      <ScrollReveal direction="up">
        <h2>현대 한의학 기술</h2>
      </ScrollReveal>
    </ParallaxSection>
  );
};
```

## Comments & Documentation (주석과 문서화)

### 1. 자명한 코드 작성
```typescript
// ✅ 코드가 스스로 설명 - 주석 불필요
const getColorClasses = (color: string) => {
  const colorMap = {
    blue: { bg: 'bg-blue-50', icon: 'text-blue-500', accent: 'bg-blue-500' },
    green: { bg: 'bg-green-50', icon: 'text-green-500', accent: 'bg-green-500' }
  };
  return colorMap[color as keyof typeof colorMap] || colorMap.blue;
};

// ❌ 불필요한 주석
// 색상을 받아서 CSS 클래스를 반환하는 함수
const getColors = (c: string) => { ... }
```

### 2. Why 설명하는 주석
```typescript
// ✅ 왜 이렇게 했는지 설명
useEffect(() => {
  // Unsplash API 503 에러로 인해 picsum.photos로 변경
  const images = equipmentImages.map(url =>
    url.replace('source.unsplash.com', 'picsum.photos')
  );
  setProcessedImages(images);
}, [equipmentImages]);
```

## Error Handling (에러 처리)

### 1. Graceful Degradation
```typescript
// ✅ 이미지 로딩 실패 시 fallback 제공
const VideoBackground: React.FC<VideoBackgroundProps> = ({
  videoSrc,
  fallbackImage,
  children
}) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  return (
    <div className="relative">
      {!videoError && (
        <video
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setVideoError(true)}
          autoPlay
          muted
          loop
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {(videoError || !videoLoaded) && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${fallbackImage})` }}
        />
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
};
```

## Performance Optimization (성능 최적화)

### 1. 이미지 최적화
```typescript
// ✅ 안정적인 이미지 소스 사용
const equipmentImages = [
  'https://picsum.photos/800/600?random=acupuncture-equipment1',
  'https://picsum.photos/800/600?random=herbal-equipment2',
  // Unsplash 대신 picsum.photos 사용으로 503 에러 해결
];
```

### 2. 애니메이션 최적화
```typescript
// ✅ Intersection Observer로 성능 최적화
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};
```

## Accessibility (접근성)

### 1. 시맨틱 HTML
```typescript
// ✅ 의미론적 HTML 구조
export const FaqSection: React.FC = () => {
  return (
    <section aria-labelledby="faq-heading">
      <h2 id="faq-heading">자주 묻는 질문</h2>
      <div role="region" aria-label="FAQ 목록">
        <FaqAccordion />
      </div>
    </section>
  );
};
```

### 2. 키보드 네비게이션
```typescript
// ✅ 접근성을 고려한 인터랙티브 요소
<button
  className="focus:ring-2 focus:ring-blue-500 focus:outline-none"
  aria-expanded={isExpanded}
  aria-controls={`faq-content-${index}`}
  onClick={() => setIsExpanded(!isExpanded)}
>
  {question}
</button>
```

## 프로젝트별 Best Practices

### 1. 디자인 토큰 활용
```typescript
// ✅ 중앙화된 디자인 시스템 사용
<h1 style={{
  fontFamily: designTokens.typography.fontFamilies.heading,
  color: designTokens.colors.primary.primary500
}}>
  BD 한의원
</h1>

// ❌ 하드코딩된 스타일
<h1 style={{ fontFamily: 'Arial', color: '#007AFF' }}>
  BD 한의원
</h1>
```

### 2. 반응형 디자인 패턴
```typescript
// ✅ 모바일 퍼스트 접근법
<div className="text-lg lg:text-xl xl:text-2xl">
  <h2 className="text-2xl md:text-3xl lg:text-4xl">
    한의학 치료
  </h2>
</div>
```

### 3. 타입 안전성
```typescript
// ✅ 엄격한 타입 정의
interface ServiceItem {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  color: 'blue' | 'green' | 'purple';
}

// ❌ any 타입 사용
const service: any = { ... };
```

## 리팩토링 트리거 및 해결 사례

### 1. 중복 코드 제거
```typescript
// Before: 중복된 애니메이션 코드
// 여러 컴포넌트에서 같은 스크롤 애니메이션 반복

// After: 재사용 가능한 컴포넌트 추출
export const ScrollReveal: React.FC<ScrollRevealProps> = ({ ... }) => {
  // 공통 애니메이션 로직
};

// 사용법
<ScrollReveal direction="up" delay={0.2}>
  <h2>제목</h2>
</ScrollReveal>
```

### 2. 긴 함수 분리
```typescript
// Before: 200줄이 넘는 거대한 컴포넌트

// After: 기능별로 분리된 작은 컴포넌트들
export const TechnologySection: React.FC = () => {
  return (
    <section>
      <TechnologyHero />
      <EquipmentShowcase />
      <TechnologyGrid />
      <TechnologyCTA />
    </section>
  );
};
```

## Final Checklist (최종 체크리스트)

BD 한의원 웹사이트 커밋 전 확인사항:
- [ ] ✅ 모든 치과 관련 용어 제거됨
- [ ] ✅ designTokens.ts 사용하여 일관된 스타일 적용
- [ ] ✅ picsum.photos 이미지 정상 로딩 확인
- [ ] ✅ 반응형 디자인 모든 해상도에서 테스트
- [ ] ✅ 접근성 (ARIA, 키보드 네비게이션) 확인
- [ ] ✅ TypeScript 에러 없음
- [ ] ✅ ESLint 경고 없음
- [ ] ✅ Framer Motion 애니메이션 성능 최적화
- [ ] ✅ 한의학 전문 용어 정확성 검증

## 결론

BD 한의원 웹사이트는 클린 코드 원칙을 철저히 적용하여 maintainable하고 scalable한 코드베이스를 구축했습니다. Apple 디자인 시스템의 일관성과 한의학 도메인의 전문성을 코드 품질에 반영하여, 향후 기능 확장과 유지보수가 용이한 구조를 완성했습니다.