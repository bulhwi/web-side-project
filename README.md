# BD 한의원 웹사이트

**전통과 현대가 만나는 곳, BD 한의원**

Apple 스타일 디자인 시스템을 적용한 모던 한의원 웹사이트입니다. Next.js 15와 React 19를 기반으로 구축되어 고급 인터랙션과 반응형 UI를 제공합니다.

## 🌟 주요 특징

### 🎨 Apple 스타일 디자인 시스템
- **San Francisco 폰트**: Apple의 시스템 폰트 적용
- **시스템 컬러**: Apple 표준 색상 팔레트 (systemBlue, systemGray 등)
- **정밀한 타이포그래피**: 계층적 텍스트 시스템
- **마이크로 인터랙션**: 세밀한 애니메이션과 피드백

### 🏥 한의학 전문 서비스
- **침구치료**: 무통 침술, 전자침 시스템
- **한약처방**: 체질 맞춤형 개인 처방
- **추나요법**: 수기 교정, 척추 치료
- **체질진단**: 과학적 체질 분석

### ⚡ 고급 인터랙션
- **Framer Motion 애니메이션**: 스크롤 기반 fade-in, slide-in
- **패럴랙스 스크롤링**: 배경과 콘텐츠의 다른 속도 움직임
- **이미지 시퀀스 전환**: 스크롤에 따른 자연스러운 이미지 변화
- **비디오 배경**: 고품질 비디오와 모바일 fallback

## 🛠 기술 스택

### 프론트엔드
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **UI Components**: Radix UI
- **Icons**: Lucide React

### 개발 도구
- **State Management**: Zustand (준비됨)
- **Data Fetching**: TanStack Query (준비됨)
- **Form Management**: React Hook Form (준비됨)
- **Validation**: Zod (준비됨)
- **Utilities**: es-toolkit, date-fns

### 디자인 시스템
- **Design Tokens**: Apple 표준 색상 및 타이포그래피
- **Responsive Design**: 모바일 퍼스트 접근법
- **Accessibility**: WCAG 준수, ARIA 속성 적용

## 📁 프로젝트 구조

```
src/
├── app/                    # Next.js 15 App Router
│   ├── page.tsx           # 메인 페이지 (Apple 스타일 홈)
│   ├── services/          # 진료과목 페이지
│   └── layout.tsx         # 전역 레이아웃
├── components/
│   ├── layout/           # 레이아웃 컴포넌트
│   │   └── AppleHeader.tsx # Apple 스타일 네비게이션
│   ├── sections/         # 페이지별 섹션
│   │   ├── AppleHeroSection.tsx     # 비디오 배경 히어로
│   │   ├── AppleServicesSection.tsx # 한의학 서비스 소개
│   │   ├── TechnologySection.tsx    # 현대 한의학 기술
│   │   └── FaqSection.tsx          # FAQ 아코디언
│   └── ui/              # 재사용 UI 컴포넌트
│       ├── ScrollReveal.tsx        # 스크롤 애니메이션
│       ├── ParallaxSection.tsx     # 패럴랙스 효과
│       ├── ImageSequence.tsx       # 이미지 시퀀스
│       └── VideoBackground.tsx     # 비디오 배경
├── theme/
│   └── designTokens.ts   # Apple 디자인 시스템 토큰
└── vooster-docs/         # 프로젝트 문서화
    ├── prd.md           # 제품 요구사항
    ├── architecture.md  # 기술 아키텍처
    └── guidelines.md    # 개발 가이드라인
```

## 🚀 시작하기

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프로덕션 실행
npm start
```

브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하여 확인할 수 있습니다.

### 개발 환경 설정

```bash
# 타입 체크
npm run type-check

# 린팅
npm run lint

# 코드 포맷팅
npm run format
```

## 💻 주요 페이지

### 메인 페이지 (`/`)
- **Apple 스타일 히어로 섹션**: 비디오 배경과 대형 타이포그래피
- **한의학 서비스 소개**: 3개 주요 치료 분야
- **현대 한의학 기술**: 4가지 첨단 기술 소개
- **FAQ 섹션**: 자주 묻는 질문 아코디언

### 서비스 페이지 (`/services`)
- **"왜 BD 한의원인가?" 히어로**: 차별화된 전문성 강조
- **한의원 특징**: 경희대 출신 전문의, 체계적 진료
- **7단계 진료 과정**: 초진상담부터 사후관리까지

## 🎯 개발 철학

### Apple Human Interface Guidelines 준수
- **명확성**: 사용자가 이해하기 쉬운 인터페이스
- **존중**: 사용자의 시간과 관심을 존중하는 디자인
- **깊이**: 시각적 계층과 현실적인 모션으로 의미 전달

### 한의학 전문성 표현
- **신뢰감**: 전문적이고 안정적인 시각적 언어
- **현대성**: 전통 한의학과 현대 기술의 조화
- **접근성**: 모든 연령대가 이해하기 쉬운 콘텐츠

## 🔧 성능 최적화

### 이미지 최적화
- **Picsum.photos**: 안정적인 플레이스홀더 이미지 사용
- **Lazy Loading**: 스크롤 기반 지연 로딩
- **WebP/AVIF**: Next.js Image 컴포넌트 자동 최적화

### 애니메이션 성능
- **Intersection Observer**: 효율적인 스크롤 감지
- **will-change**: GPU 가속 최적화
- **동적 임포트**: 컴포넌트 코드 스플리팅

### SEO 최적화
- **서버사이드 렌더링**: Next.js 15 App Router
- **메타데이터 최적화**: 각 페이지별 SEO 설정
- **구조화된 데이터**: Schema.org 마크업 (계획됨)

## 📱 반응형 디자인

### 브레이크포인트
- **Mobile**: 320px ~ 768px
- **Tablet**: 768px ~ 1024px
- **Desktop**: 1024px+

### 모바일 최적화
- **터치 친화적**: 44px 이상 터치 타겟
- **thumb-friendly**: 하단 네비게이션 영역 고려
- **성능 최적화**: 모바일 환경 최적화된 이미지/동영상

## 🎨 디자인 토큰

### 컬러 시스템
```typescript
colors: {
  systemBlue: '#007AFF',      // Primary action color
  systemGray: '#8E8E93',      // Secondary text
  systemBackground: '#FFFFFF', // Main background
  systemGray6: '#F2F2F7'      // Section background
}
```

### 타이포그래피
```typescript
fontFamilies: {
  heading: '-apple-system, BlinkMacSystemFont, "SF Pro Display"',
  body: '-apple-system, BlinkMacSystemFont, "SF Pro Text"'
}
```

## 🤝 기여하기

1. **Fork** 프로젝트
2. **Feature branch** 생성 (`git checkout -b feature/AmazingFeature`)
3. **Commit** 변경사항 (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to branch (`git push origin feature/AmazingFeature`)
5. **Pull Request** 생성

### 개발 가이드라인
- **Apple 디자인 시스템** 준수
- **한의학 전문 용어** 정확성 유지
- **접근성 표준** 준수 (WCAG 2.1 AA)
- **타입 안전성** 보장 (TypeScript strict mode)

## 📄 라이센스

이 프로젝트는 MIT 라이센스를 따릅니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 🙋‍♂️ 문의

**BD 한의원** - 전통과 현대가 만나는 곳

- **Email**: contact@bd-hanyiwon.com
- **Phone**: 02-1234-5678
- **Address**: 서울특별시 강남구 강남대로 123

---

> **"혁신적인 기술과 전통 한의학의 만남"**
> Apple의 디자인 철학과 한의학의 전문성이 결합된 웹사이트입니다.