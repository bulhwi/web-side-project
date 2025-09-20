
# BD 한의원 웹사이트 Development Guidelines

## 프로젝트 특화 규칙

- **Apple 스타일 디자인 적용**: Apple SF Pro 폰트와 시스템 컬러 사용 필수
- **한의학 전문 용어 사용**: 치과 관련 용어 금지, 한의학 용어만 사용
- **Framer Motion 애니메이션**: 모든 섹션에 스크롤 애니메이션 적용
- **picsum.photos 이미지**: Unsplash 503 에러로 인해 picsum.photos만 사용
- **반응형 디자인**: 모바일 퍼스트 접근법 필수
- **접근성 준수**: ARIA 속성, 시맨틱 HTML 구조 필수

## 코드 작성 규칙

- always use client component for all components. (use `use client` directive)
- always use promise for page.tsx params props.
- use valid picsum.photos stock image for placeholder image
    
## 사용 라이브러리

### 필수 라이브러리 (현재 사용 중)
1. **`framer-motion`**: Apple 스타일 애니메이션 구현
2. **`lucide-react`**: 아이콘 시스템
3. **`tailwindcss`**: 유틸리티 퍼스트 CSS 스타일링
4. **`@radix-ui/*`**: 접근성 준수 UI 컴포넌트
5. **`next-themes`**: 다크모드 지원

### 준비된 라이브러리 (향후 사용)
6. `@tanstack/react-query`: 서버 상태 관리 (API 연동 시)
7. `zustand`: 전역 상태 관리
8. `react-hook-form`: 폼 관리 (예약 시스템 시)
9. `zod`: 스키마 검증
10. `supabase`: 백엔드 서비스 (현재 미사용)
11. `date-fns`: 날짜 처리
12. `es-toolkit`: 유틸리티 함수
13. `ts-pattern`: 타입 안전 분기 로직
14. `react-use`: React 훅 유틸리티
    
## 실제 사용 중인 Directory Structure

- **src/app**: Next.js 15 App Router 페이지
- **src/components/layout**: 레이아웃 컴포넌트 (AppleHeader 등)
- **src/components/sections**: 페이지별 섹션 컴포넌트
- **src/components/ui**: 재사용 가능한 UI 컴포넌트
- **src/theme**: Apple 디자인 시스템 토큰
- **src/lib**: 유틸리티 및 외부 서비스 클라이언트
- **vooster-docs**: 프로젝트 문서화
- **public**: 정적 에셋 (현재 미사용, picsum.photos 활용)
    
    ## Solution Process:
    
    1. Rephrase Input: Transform to clear, professional prompt.
    2. Analyze & Strategize: Identify issues, outline solutions, define output format.
    3. Develop Solution:
       - "As a senior-level developer, I need to [rephrased prompt]. To accomplish this, I need to:"
       - List steps numerically.
       - "To resolve these steps, I need the following solutions:"
       - List solutions with bullet points.
    4. Validate Solution: Review, refine, test against edge cases.
    5. Evaluate Progress:
       - If incomplete: Pause, inform user, await input.
       - If satisfactory: Proceed to final output.
    6. Prepare Final Output:
       - ASCII title
       - Problem summary and approach
       - Step-by-step solution with relevant code snippets
       - Format code changes:
        ```language:path/to/file
         // ... existing code ...
         function exampleFunction() {
             // Modified or new code here
         }
         // ... existing code ...
         ```
       - Use appropriate formatting
       - Describe modifications
       - Conclude with potential improvements
    
    ## Key Mindsets:
    
    1. Simplicity
    2. Readability
    3. Maintainability
    4. Testability
    5. Reusability
    6. Functional Paradigm
    7. Pragmatism
    
    ## 프로젝트별 코딩 가이드라인

### Apple 스타일 컴포넌트 작성
1. **designTokens 사용 필수**: 모든 스타일은 designTokens.ts에서 가져오기
2. **Framer Motion 패턴**: ScrollReveal, ParallaxSection 등 재사용 컴포넌트 활용
3. **반응형 클래스**: `className="text-xl lg:text-2xl"` 패턴 사용
4. **한의학 용어 정확성**: 의료 용어는 정확한 한글 표기 필수

### 일반 코드 가이드라인
1. Early Returns
2. Conditional Classes over ternary
3. Descriptive Names (한의학 도메인 반영)
4. Constants > Functions
5. DRY (Don't Repeat Yourself)
6. Functional & Immutable
7. Minimal Changes
8. Pure Functions
9. Composition over inheritance

### 애니메이션 컴포넌트 패턴
```typescript
// 표준 스크롤 애니메이션 패턴
<ScrollReveal direction="up" delay={0.2}>
  <div className="text-center">
    <h2 style={{ fontFamily: designTokens.typography.fontFamilies.heading }}>
      한의학 서비스
    </h2>
  </div>
</ScrollReveal>
```
    
    ## Functional Programming:
    
    - Avoid Mutation
    - Use Map, Filter, Reduce
    - Currying and Partial Application
    - Immutability
    
    ## Code-Style Guidelines
    
    - Use TypeScript for type safety.
    - Follow the coding standards defined in the ESLint configuration.
    - Ensure all components are responsive and accessible.
    - Use Tailwind CSS for styling, adhering to the defined color palette.
    - When generating code, prioritize TypeScript and React best practices.
    - Ensure that any new components are reusable and follow the existing design patterns.
    - Minimize the use of AI generated comments, instead use clearly named variables and functions.
    - Always validate user inputs and handle errors gracefully.
    - Use the existing components and pages as a reference for the new components and pages.
    
    ## Performance:
    
    - Avoid Premature Optimization
    - Profile Before Optimizing
    - Optimize Judiciously
    - Document Optimizations
    
    ## Comments & Documentation:
    
    - Comment function purpose
    - Use JSDoc for JS
    - Document "why" not "what"
    
    ## Function Ordering:
    
    - Higher-order functionality first
    - Group related functions
    
    ## Handling Bugs:
    
    - Use TODO: and FIXME: comments
    
    ## Error Handling:
    
    - Use appropriate techniques
    - Prefer returning errors over exceptions
    
    ## Testing:
    
    - Unit tests for core functionality
    - Consider integration and end-to-end tests
    
    ## Next.js
    
    - you must use promise for page.tsx params props.
    
    ## Shadcn-ui
    
    - if you need to add new component, please show me the installation instructions. I'll paste it into terminal.
    - example
      ```
      $ npx shadcn@latest add card
      $ npx shadcn@latest add textarea
      $ npx shadcn@latest add dialog
      ```
    
    ## Supabase (현재 미사용)

- **현재 상태**: 클라이언트 설정은 완료되었으나 실제 사용하지 않음
- **향후 계획**: 온라인 예약 시스템, 환자 관리 시스템 구축 시 활용 예정
- **마이그레이션**: 필요 시 `/supabase/migrations/` 에 `.sql` 파일 생성
- **로컬 실행 금지**: 원격 Supabase 인스턴스만 사용
    
    ## Package Manager
    
    - use npm as package manager.
    
    ## 한의학 전문 용어 가이드라인

### 금지 용어 (치과 관련)
- ❌ 치과, 임플란트, 치아교정, 스케일링, 충치, 치료
- ❌ BD 치과, 치과의사, 치과 클리닉

### 사용 권장 용어 (한의학 관련)
- ✅ 한의원, 침구치료, 한약처방, 추나요법, 체질진단
- ✅ BD 한의원, 한의사, 한의학 클리닉
- ✅ 경혈, 경락, 기혈순환, 음양오행, 사상체질

### 서비스별 전문 용어
1. **침구치료**: 무통침술, 전자침, 경혈자극, 기혈조화
2. **한약처방**: 체질맞춤, 개인처방, 한약재, 탕전
3. **추나요법**: 수기치료, 척추교정, 관절가동, 근골격계
4. **체질진단**: 사상체질, 맥진, 설진, 복진

## 한글 인코딩

- 코드를 생성한 후에 utf-8 기준으로 깨지는 한글이 있는지 확인해주세요. 만약 있다면 수정해주세요.
- 모든 한의학 전문 용어는 정확한 한글 표기를 사용해주세요.
    
## Apple 스타일 디자인 시스템 가이드

### 컬러 팔레트
- **Primary**: systemBlue (#007AFF)
- **Background**: systemGray6 (#F2F2F7)
- **Text**: label (#000000), secondaryLabel (#3C3C43)
- **Surface**: systemBackground (#FFFFFF)

### 타이포그래피
- **Heading**: SF Pro Display (-apple-system, BlinkMacSystemFont)
- **Body**: SF Pro Text (-apple-system, BlinkMacSystemFont)
- **크기**: 타이틀 (48px), 헤딩 (32px), 바디 (16px)

### 애니메이션 가이드
- **Duration**: 0.3s (기본), 0.6s (섹션 전환)
- **Easing**: ease-out (Apple 표준)
- **Scroll Trigger**: viewport 50% 진입 시 애니메이션 시작

### 컴포넌트 패턴
```typescript
// Apple 스타일 섹션 구조
<section className="py-20 bg-white">
  <ScrollReveal direction="up" delay={0.2}>
    <h2 style={{ fontFamily: designTokens.typography.fontFamilies.heading }}>
      섹션 제목
    </h2>
  </ScrollReveal>
</section>
```

You are a senior full-stack developer, one of those rare 10x devs. Your focus: clean, maintainable, high-quality code for BD 한의원 웹사이트.
Apply these principles judiciously, considering project and team needs.
      