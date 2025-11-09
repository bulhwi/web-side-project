# BD 한의원 웹사이트 - Product Requirements Document (PRD)

**프로젝트명**: BD 한의원 웹사이트
**버전**: 2.0.0
**최종 업데이트**: 2025-11-09
**상태**: ✅ Phase 0 준비 완료

---

## 📋 목차

1. [프로젝트 개요](#프로젝트-개요)
2. [비즈니스 목표](#비즈니스-목표)
3. [타겟 사용자](#타겟-사용자)
4. [사용자 여정](#사용자-여정)
5. [핵심 기능](#핵심-기능)
6. [페이지 구조](#페이지-구조)
7. [디자인 시스템](#디자인-시스템)
8. [기술 스택](#기술-스택)
9. [성능 & SEO](#성능--seo)
10. [접근성](#접근성)
11. [향후 로드맵](#향후-로드맵)

---

## 프로젝트 개요

### 프로젝트 배경

BD 한의원 웹사이트는 **전통 한의학과 현대 디자인을 융합**한 프리미엄 의료 웹사이트입니다. Apple의 디자인 철학을 차용하여 고급스러운 사용자 경험을 제공하며, Next.js 15와 React 19 기반의 최신 기술로 구축되었습니다.

### 핵심 가치 제안

1. **전문성 강조**: 경희대 출신 한의사의 체계적인 진료 시스템
2. **현대적 브랜딩**: Apple 스타일 디자인으로 신뢰감과 고급감 제공
3. **사용자 친화성**: 직관적인 UI/UX로 정보 접근성 극대화
4. **디지털 우선**: 온라인 예약, 상담 시스템 통합 준비

### 주요 특징

- ✅ **Apple 디자인 시스템**: SF Pro 폰트, 시스템 컬러, 정밀한 타이포그래피
- ✅ **고급 애니메이션**: Framer Motion 기반 스크롤 애니메이션, 패럴랙스 효과
- ✅ **완전 반응형**: 모바일/태블릿/데스크탑 모든 디바이스 최적화
- ✅ **SEO 최적화**: Next.js 15 App Router SSR/SSG
- ✅ **접근성 준수**: WCAG 2.1 AA 기준 준수

---

## 비즈니스 목표

### 단기 목표 (3개월)

1. **온라인 인지도 확보**
   - SEO 최적화를 통한 검색 순위 상위 노출
   - 소셜 미디어 연동 및 공유 최적화
   - 목표: 월 방문자 1,000명 이상

2. **예약 전환율 향상**
   - 온라인 예약 시스템 도입
   - 카카오톡 상담 연동
   - 목표: 방문자 대비 예약 전환율 5% 이상

3. **브랜드 차별화**
   - 프리미엄 디자인으로 경쟁사 대비 차별화
   - 한의학 전문성 및 신뢰도 강조
   - 목표: 브랜드 인지도 30% 향상

### 중장기 목표 (6-12개월)

1. **디지털 생태계 구축**
   - 환자 관리 시스템 통합
   - 체질진단 도구 온라인화
   - 치료 후기 커뮤니티 구축

2. **데이터 기반 의사결정**
   - 사용자 행동 분석 (Google Analytics)
   - A/B 테스트 기반 개선
   - 목표: 데이터 기반 월 1회 이상 개선

---

## 타겟 사용자

### 주요 페르소나

#### 페르소나 1: 직장인 김서윤 (34세, 여성)

**배경**:
- 서울 강남 직장인, IT 기업 재직
- 만성 두통 및 목/어깨 통증 호소
- 건강에 대한 관심 높음, 온라인 정보 탐색 능숙

**Pain Points**:
- 병원 방문 시간 확보 어려움
- 신뢰할 수 있는 한의원 찾기 어려움
- 치료 과정 및 비용 정보 부족

**Goal**:
- 퇴근 후 또는 주말에 편리하게 방문 가능한 한의원
- 체계적인 진료 시스템과 명확한 치료 계획
- 온라인으로 예약 및 상담 가능

**웹사이트 사용 시나리오**:
1. 모바일로 "강남 한의원" 검색
2. BD 한의원 웹사이트 방문
3. 7단계 진료 과정 확인
4. 한의사 프로필 및 경력 확인
5. 온라인 예약 또는 카카오톡 상담

---

#### 페르소나 2: 중년 박민수 (52세, 남성)

**배경**:
- 자영업자, 허리 디스크 및 무릎 통증
- 수술 없이 보존적 치료 선호
- 디지털 기기 사용 보통 수준

**Pain Points**:
- 양방 치료의 한계 경험
- 한의학 치료 효과에 대한 확신 부족
- 치료 비용 및 기간에 대한 우려

**Goal**:
- 수술 없이 통증 완화
- 경험 많은 한의사에게 치료받기
- 합리적인 비용으로 체계적인 치료

**웹사이트 사용 시나리오**:
1. 데스크탑으로 웹사이트 방문
2. 추나요법 및 침구치료 상세 정보 확인
3. 치료 사례 및 FAQ 확인
4. 진료비 안내 확인
5. 전화 상담 또는 방문 예약

---

#### 페르소나 3: 건강 관리족 이지은 (28세, 여성)

**배경**:
- 요가 강사, 건강 및 웰빙에 관심 많음
- 체질 개선 및 예방 의학 관심
- SNS 활동 활발, 트렌디한 브랜드 선호

**Pain Points**:
- 체질에 맞는 한약 처방 찾기 어려움
- 일반적인 한의원의 구식 이미지
- 신뢰할 수 있는 정보 부족

**Goal**:
- 체질 맞춤형 건강 관리
- 현대적이고 깨끗한 환경
- 예방 의학 중심의 치료

**웹사이트 사용 시나리오**:
1. Instagram에서 BD 한의원 광고 클릭
2. 체질진단 서비스 확인
3. 한약 처방 프로세스 이해
4. 한의원 Instagram 팔로우
5. 온라인 예약

---

### 사용자 특성

| 특성 | 세부 내용 |
|------|----------|
| **연령대** | 20-60대 (핵심: 30-50대) |
| **직업** | 직장인, 자영업자, 전문직 |
| **소득 수준** | 중상위 (프리미엄 서비스 지불 의향) |
| **디지털 리터러시** | 중상 (모바일 기기 능숙 사용) |
| **건강 관심도** | 높음 (건강 투자 의향) |
| **지리적 위치** | 서울 강남 및 인근 지역 |

---

## 사용자 여정

### Journey Map

```
인지 (Awareness)
    ↓
정보 탐색 (Consideration)
    ↓
비교 평가 (Evaluation)
    ↓
상담 예약 (Action)
    ↓
진료 방문 (Experience)
    ↓
추천 및 재방문 (Advocacy)
```

### 단계별 세부 여정

#### 1단계: 인지 (Awareness)

**채널**:
- 네이버/구글 검색 ("강남 한의원", "추나요법", "허리 디스크 한의원")
- 소셜 미디어 (Instagram, Facebook 광고)
- 지인 추천

**사용자 행동**:
- 검색 결과에서 웹사이트 클릭
- 첫 인상으로 브랜드 신뢰도 판단

**웹사이트 역할**:
- 3초 이내 핵심 메시지 전달
- 고급스러운 디자인으로 신뢰감 구축
- 모바일 최적화된 로딩 속도

---

#### 2단계: 정보 탐색 (Consideration)

**사용자 니즈**:
- 진료 과목 상세 정보
- 한의사 프로필 및 경력
- 진료 시간 및 위치

**사용자 행동**:
- 메인 페이지 스크롤
- 서비스 페이지 방문
- FAQ 확인

**웹사이트 역할**:
- 명확한 정보 구조
- 시각적으로 매력적인 콘텐츠
- 쉬운 네비게이션

**주요 페이지**:
- 메인 페이지: 브랜드 소개, 핵심 서비스
- 서비스 페이지: 침구치료, 한약처방, 추나요법, 체질진단
- FAQ: 자주 묻는 질문

---

#### 3단계: 비교 평가 (Evaluation)

**사용자 니즈**:
- 다른 한의원과의 차별점
- 치료 효과 및 사례
- 진료비 정보

**사용자 행동**:
- "왜 BD 한의원인가?" 섹션 확인
- 7단계 진료 과정 이해
- 치료 후기 (향후 추가)

**웹사이트 역할**:
- 차별화 포인트 명확히 전달
- 체계적인 진료 프로세스 시각화
- 신뢰 구축 요소 (한의사 프로필, 경력)

**차별화 요소**:
1. 경희대 출신 전문 한의사
2. 7단계 체계적 진료 시스템
3. 최신 한의학 기술 (전자침, 무통 침술)
4. Apple 스타일 프리미엄 환경

---

#### 4단계: 상담 예약 (Action)

**사용자 니즈**:
- 간편한 예약 프로세스
- 빠른 상담 응답
- 예약 확인

**사용자 행동**:
- CTA 버튼 클릭 ("온라인 예약", "카카오톡 상담", "전화 상담")
- 예약 폼 작성 (향후 추가)
- 예약 확인 대기

**웹사이트 역할**:
- 명확한 CTA 배치 (각 섹션 하단)
- 다양한 상담 채널 제공
- 모바일 원클릭 전화 걸기

**CTA 전략**:
- **Primary CTA**: "온라인 예약하기" (향후 추가)
- **Secondary CTA**: "카카오톡 상담"
- **Tertiary CTA**: "전화 상담" (010-XXXX-XXXX)

---

#### 5단계: 진료 방문 (Experience)

**사용자 니즈**:
- 위치 안내 및 교통편
- 주차 정보
- 진료 준비 사항

**사용자 행동**:
- 위치 및 오시는 길 확인 (향후 추가)
- 진료 시간 재확인
- 예약 시간에 방문

**웹사이트 역할**:
- Google Maps 연동 (향후 추가)
- 대중교통 안내
- 주차 정보 제공

---

#### 6단계: 추천 및 재방문 (Advocacy)

**사용자 니즈**:
- 치료 효과 확인
- 정기 검진 예약
- 지인에게 추천

**사용자 행동**:
- 재방문 예약
- 후기 작성 (향후 추가)
- SNS 공유

**웹사이트 역할**:
- 재방문 유도 (정기 검진 안내)
- 후기 시스템 (향후 추가)
- SNS 공유 버튼

---

## 핵심 기능

### 현재 구현 완료 기능 (v1.0)

#### 1. 브랜드 소개 및 신뢰 구축
- ✅ Apple 스타일 히어로 섹션 (비디오 배경)
- ✅ "전통과 현대가 만나는 곳, BD 한의원" 메인 카피
- ✅ 경희대 출신 한의사 전문성 강조
- ✅ 7단계 체계적 진료 과정 시각화

#### 2. 한의학 서비스 소개
- ✅ 침구치료: 무통 침술, 전자침 시스템
- ✅ 한약처방: 체질 맞춤형 개인 처방
- ✅ 추나요법: 수기 교정, 척추 치료
- ✅ 체질진단: 과학적 체질 분석 (예정)

#### 3. 정보 제공
- ✅ 현대 한의학 기술 4가지 소개
- ✅ FAQ 섹션 (아코디언 UI)
- ✅ "왜 BD 한의원인가?" 차별화 포인트

#### 4. 디자인 & UX
- ✅ 완전 반응형 디자인 (모바일/태블릿/데스크탑)
- ✅ Framer Motion 스크롤 애니메이션
- ✅ 패럴랙스 스크롤 효과
- ✅ Apple 디자인 시스템 (색상, 폰트, 타이포그래피)

#### 5. 성능 & SEO
- ✅ Next.js 15 SSR/SSG
- ✅ 메타데이터 최적화
- ✅ 이미지 최적화 (picsum.photos)
- ✅ 코드 스플리팅 및 lazy loading

---

### 우선순위 높은 추가 기능 (v2.0 - Tailwind Plus 리팩토링)

#### Phase 0-2: 메인 페이지 리팩토링 (Studio 템플릿)
- [ ] **StudioHeader**: 개선된 네비게이션 (햄버거 메뉴, 스크롤 헤더)
- [ ] **StudioHero**: 더 임팩트 있는 히어로 섹션
- [ ] **StudioServices**: 3D 카드 효과, 호버 애니메이션
- [ ] **StudioTeam**: 한의사 프로필 섹션 (사진, 학력, 경력)
- [ ] **StudioTestimonials**: 환자 후기 슬라이더
- [ ] **StudioCTA**: 예약 유도 섹션 (온라인 예약, 카카오톡, 전화)
- [ ] **StudioFooter**: SNS 링크, 한의원 정보

#### Phase 3-4: 서비스 페이지 리팩토링 (Compass/Syntax 템플릿)
- [ ] **CompassHero**: "왜 BD 한의원인가?" 통계 애니메이션
- [ ] **CompassCurriculum**: 7단계 진료 과정 인터랙티브 UI
- [ ] **CompassFeatures**: 한의원 특징 4가지 그리드
- [ ] **Syntax 검색**: FAQ 실시간 검색 기능
- [ ] **Syntax 아코디언**: 카테고리별 FAQ (진료, 치료, 보험, 한약, 부작용)

---

### 향후 로드맵 기능 (v3.0+)

#### 온라인 예약 시스템
- [ ] 실시간 예약 캘린더
- [ ] 예약 확인 문자 발송
- [ ] 예약 취소/변경 기능
- [ ] 대기 명단 관리

#### 체질진단 도구
- [ ] 온라인 설문 기반 체질 진단
- [ ] 결과 리포트 생성
- [ ] 맞춤 한약 추천

#### 환자 관리 시스템
- [ ] 진료 기록 열람 (환자 로그인)
- [ ] 처방전 확인
- [ ] 재방문 일정 관리

#### 커뮤니티 & 콘텐츠
- [ ] 치료 후기 게시판
- [ ] 한의학 건강 정보 블로그
- [ ] 공지사항

#### 다국어 지원
- [ ] 영어 버전
- [ ] 중국어 버전 (선택)

---

## 페이지 구조

### 사이트맵

```
Home (/)
├── About (향후 추가)
├── Services (/services)
│   ├── 침구치료
│   ├── 한약처방
│   ├── 추나요법
│   └── 체질진단 (향후 추가)
├── Doctors (향후 추가)
├── Community (향후 추가)
│   ├── 공지사항
│   ├── 치료 후기
│   └── FAQ
├── Reservation (향후 추가)
└── Contact (향후 추가)
```

---

### 페이지별 상세 구조

#### 메인 페이지 (`/`)

**목적**: 브랜드 소개, 핵심 서비스 안내, 신뢰 구축

**섹션 구성**:
1. **AppleHeader** (고정 네비게이션)
   - 로고
   - 메뉴: 홈, 진료과목, 한의학 소개, 예약하기
   - 모바일 햄버거 메뉴

2. **AppleHeroSection** (히어로 섹션)
   - 비디오 배경 (또는 고품질 이미지)
   - 메인 카피: "전통과 현대가 만나는 곳, BD 한의원"
   - 서브 카피: "경희대 출신 한의사의 체계적인 한의학 치료"
   - CTA: "온라인 예약하기", "카카오톡 상담"
   - 스크롤 다운 인디케이터

3. **AppleServicesSection** (핵심 서비스 소개)
   - 3개 서비스 카드 (침구치료, 한약처방, 추나요법)
   - 각 카드: 아이콘, 제목, 설명, "자세히 보기" 링크
   - 호버 애니메이션 (카드 상승, 그림자)
   - 스크롤 페이드인 애니메이션

4. **TechnologySection** (현대 한의학 기술)
   - 4가지 기술 소개 (무통 침술, 전자침, 체질 분석, 맞춤 처방)
   - 2x2 그리드 레이아웃
   - 아이콘 + 제목 + 설명
   - 패럴랙스 배경 이미지 (선택)

5. **FaqSection** (자주 묻는 질문)
   - Radix UI 아코디언
   - 5-7개 FAQ
   - 검색 기능 (Syntax 템플릿 적용 후)
   - 카테고리별 탭 (향후 추가)

6. **CTASection** (예약 유도) - Tailwind Plus 추가 예정
   - 대형 CTA 섹션
   - "지금 바로 상담받으세요"
   - 3개 버튼: 온라인 예약, 카카오톡, 전화
   - 배경 그라디언트 또는 이미지

7. **AppleFooter** (푸터)
   - 한의원 정보 (주소, 전화, 이메일, 진료 시간)
   - 빠른 링크 (홈, 진료과목, 예약)
   - SNS 아이콘 (Instagram, Facebook, Blog)
   - 저작권 표시

---

#### 서비스 페이지 (`/services`)

**목적**: 진료 과목 상세 소개, 진료 프로세스 이해

**섹션 구성**:
1. **ServicesHeroSection** ("왜 BD 한의원인가?")
   - 차별화 포인트 3가지
   - 통계 수치 (10년 경력, 1,000+ 환자, 98% 만족도)
   - 카운트업 애니메이션 (Tailwind Plus 추가 예정)

2. **ServicesGridSection** (한의원 특징)
   - 4가지 특징 (경희대 전문의, 체계적 진료, 최신 기술, 1:1 맞춤)
   - 2x2 그리드
   - 이미지 + 제목 + 설명

3. **TreatmentProcessSection** (7단계 진료 과정)
   - 초진 상담 → 체질 진단 → 침구 치료 → 한약 처방 → 추나 요법 → 경과 관찰 → 사후 관리
   - 세로 타임라인 (모바일) / 가로 스텝 (데스크탑)
   - 각 단계 아이콘 + 제목 + 상세 설명
   - 진행 바 애니메이션 (Tailwind Plus 추가 예정)

4. **ServicesDetailSection** (서비스별 상세) - 향후 추가
   - 탭 UI (침구, 한약, 추나, 체질)
   - 각 탭: 상세 설명, 치료 효과, 소요 시간, 가격

---

## 디자인 시스템

### Apple Human Interface Guidelines 준수

BD 한의원 웹사이트는 **Apple의 디자인 철학**을 기반으로 합니다:

1. **명확성 (Clarity)**
   - 텍스트는 모든 크기에서 읽기 쉬워야 함
   - 아이콘은 정확하고 명확해야 함
   - 장식은 적절하고 기능적이어야 함

2. **순응성 (Deference)**
   - 콘텐츠가 인터페이스를 지배해야 함
   - 반투명 요소와 블러 효과로 깊이 표현

3. **깊이 (Depth)**
   - 시각적 레이어로 계층 구조 표현
   - 애니메이션으로 상호작용의 활력 부여

---

### 컬러 팔레트

#### Apple System Colors

```typescript
// Primary Colors
systemBlue: '#007AFF'      // CTA, 링크, 주요 액션
systemGreen: '#34C759'     // 성공 메시지
systemOrange: '#FF9500'    // 강조 포인트
systemRed: '#FF3B30'       // 에러, 경고

// Gray Scale
systemGray: '#8E8E93'      // 보조 텍스트
systemGray2: '#AEAEB2'     // 비활성 요소
systemGray3: '#C7C7CC'     // 구분선
systemGray4: '#D1D1D6'     // 배경 구분
systemGray5: '#E5E5EA'     // 밝은 배경
systemGray6: '#F2F2F7'     // 섹션 배경

// Background
systemBackground: '#FFFFFF'             // 메인 배경
secondarySystemBackground: '#F2F2F7'    // 카드 배경
```

#### 사용 가이드

| 요소 | 컬러 | 사용 예시 |
|------|------|----------|
| **Primary CTA** | systemBlue | "온라인 예약하기" 버튼 |
| **헤딩** | 100% Black (#000000) | 제목, 큰 텍스트 |
| **본문** | 60% Black (#666666) | 일반 텍스트 |
| **보조 텍스트** | systemGray | 캡션, 메타 정보 |
| **배경** | systemBackground | 메인 배경 |
| **섹션 배경** | systemGray6 | 번갈아 나타나는 섹션 |
| **구분선** | systemGray3 | 요소 간 구분 |

---

### 타이포그래피

#### 폰트 패밀리

```typescript
// Apple System Fonts
heading: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
body: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif'
mono: '"SF Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'

// Fallback Fonts
korean: '"Noto Sans KR", "Malgun Gothic", sans-serif'
```

#### 폰트 크기 스케일

| 크기 | rem | px | 용도 |
|------|-----|----|----|
| **9xl** | 8rem | 128px | 대형 히어로 (데스크탑만) |
| **8xl** | 6rem | 96px | - |
| **7xl** | 4.5rem | 72px | - |
| **6xl** | 3.75rem | 60px | - |
| **5xl** | 3rem | 48px | 메인 히어로 헤딩 (모바일) |
| **4xl** | 2.25rem | 36px | 섹션 헤딩 (H1) |
| **3xl** | 1.875rem | 30px | 서브 헤딩 (H2) |
| **2xl** | 1.5rem | 24px | 카드 제목 (H3) |
| **xl** | 1.25rem | 20px | 강조 텍스트 |
| **lg** | 1.125rem | 18px | 본문 (대형) |
| **base** | 1rem | 16px | 본문 (기본) |
| **sm** | 0.875rem | 14px | 캡션 |
| **xs** | 0.75rem | 12px | 메타 정보 |

#### 타이포그래피 스타일 예시

```css
/* Hero Heading */
font-size: 3rem (mobile) / 6rem (desktop)
font-weight: 700 (Bold)
line-height: 1.1
letter-spacing: -0.02em

/* Section Heading (H2) */
font-size: 1.875rem (mobile) / 2.25rem (desktop)
font-weight: 600 (Semibold)
line-height: 1.2
letter-spacing: -0.01em

/* Body Text */
font-size: 1rem (mobile) / 1.125rem (desktop)
font-weight: 400 (Regular)
line-height: 1.6
letter-spacing: 0
```

---

### 스페이싱 시스템

#### 8px 그리드 시스템

```typescript
spacing: {
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
  32: '8rem',     // 128px
}
```

#### 사용 가이드

- **섹션 간 간격**: 80px (mobile) / 128px (desktop)
- **카드 간 간격**: 24px (mobile) / 32px (desktop)
- **텍스트 간 간격**: 16px (기본)
- **버튼 패딩**: 16px (vertical) / 32px (horizontal)

---

### 보더 반경 (Border Radius)

```typescript
borderRadius: {
  none: '0',
  sm: '0.125rem',   // 2px
  base: '0.25rem',  // 4px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px (카드)
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  '3xl': '1.5rem',  // 24px (대형 카드)
  full: '9999px'    // 원형 버튼
}
```

---

### 그림자 (Shadows)

#### Apple 스타일 그림자

```css
/* Small - 작은 요소 */
box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

/* Base - 카드 */
box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);

/* Medium - 호버 카드 */
box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

/* Large - 모달 */
box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

/* XL - 강조 */
box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
```

---

## 기술 스택

### 프론트엔드

| 기술 | 버전 | 용도 |
|------|------|------|
| **Next.js** | 15.1.0 | App Router SSR/SSG |
| **React** | 19.0.0 | UI 라이브러리 |
| **TypeScript** | 5.x | 타입 안정성 |
| **Tailwind CSS** | 3.4.1 → 4.x | 유틸리티 CSS |
| **Framer Motion** | 11.x | 애니메이션 |
| **Radix UI** | 1.x | Headless UI |
| **Lucide React** | 0.469.0 | 아이콘 |

### 상태 관리 (준비됨)

- **Zustand**: 클라이언트 전역 상태
- **@tanstack/react-query**: 서버 상태 관리

### 폼 & 검증 (준비됨)

- **React Hook Form**: 폼 관리
- **Zod**: 스키마 검증

### 유틸리티

- **es-toolkit**: 유틸리티 함수
- **date-fns**: 날짜 처리
- **clsx** / **tailwind-merge**: 클래스 유틸리티

---

## 성능 & SEO

### 성능 목표

| 지표 | 목표 | 현재 상태 |
|------|------|----------|
| **Lighthouse Performance** | 90+ | ✅ 달성 |
| **First Contentful Paint** | < 1.8s | ✅ 달성 |
| **Largest Contentful Paint** | < 2.5s | ✅ 달성 |
| **Time to Interactive** | < 3.8s | ✅ 달성 |
| **Cumulative Layout Shift** | < 0.1 | ✅ 달성 |
| **Total Bundle Size** | < 500KB | ✅ 달성 |

### 성능 최적화 전략

1. **이미지 최적화**
   - Next.js Image 컴포넌트 사용
   - WebP/AVIF 자동 변환
   - Lazy loading 적용
   - picsum.photos (플레이스홀더)

2. **코드 최적화**
   - 코드 스플리팅 (Next.js 자동)
   - Tree shaking
   - 동적 임포트 (`next/dynamic`)

3. **애니메이션 최적화**
   - Intersection Observer 사용
   - GPU 가속 (`will-change` 속성)
   - Framer Motion 최적화 모드

4. **폰트 최적화**
   - 시스템 폰트 우선 (`-apple-system`)
   - `font-display: swap`

---

### SEO 최적화

#### 메타데이터 전략

```typescript
// 메인 페이지 메타데이터 예시
{
  title: 'BD 한의원 - 서울 강남 한의학 치료 전문',
  description: '경희대 출신 한의사의 체계적인 한의학 치료. 침구치료, 한약처방, 추나요법, 체질진단 전문. 강남역 위치, 온라인 예약 가능.',
  keywords: ['강남 한의원', '침구치료', '한약처방', '추나요법', '체질진단', '경희대 한의사'],
  openGraph: {
    title: 'BD 한의원 - 전통과 현대가 만나는 곳',
    description: '경희대 출신 전문 한의사의 체계적인 진료 시스템',
    images: ['/og-image.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BD 한의원',
    description: '전통 한의학과 현대 기술의 조화',
    images: ['/twitter-image.jpg'],
  }
}
```

#### 구조화된 데이터 (Schema.org)

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "BD 한의원",
  "description": "경희대 출신 한의사의 체계적인 한의학 치료",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "서울",
    "addressRegion": "강남구",
    "streetAddress": "강남역 XXX"
  },
  "telephone": "+82-10-XXXX-XXXX",
  "openingHours": "Mo-Fr 09:00-18:00, Sa 09:00-14:00",
  "priceRange": "₩₩",
  "image": "https://bd-clinic.com/og-image.jpg"
}
```

---

## 접근성

### WCAG 2.1 AA 준수

#### 색상 대비

- **일반 텍스트**: 4.5:1 이상
- **대형 텍스트 (18px+)**: 3:1 이상
- **UI 요소**: 3:1 이상

#### 키보드 네비게이션

- [ ] 모든 인터랙티브 요소 Tab 키로 접근 가능
- [ ] 포커스 인디케이터 명확히 표시
- [ ] Skip to content 링크 제공
- [ ] 모달/다이얼로그 Escape 키로 닫기

#### ARIA 속성

```html
<!-- 네비게이션 -->
<nav aria-label="메인 네비게이션">

<!-- 버튼 -->
<button aria-label="메뉴 열기" aria-expanded="false">

<!-- 아코디언 -->
<div role="button" aria-expanded="true" aria-controls="faq-1">

<!-- 이미지 -->
<img alt="BD 한의원 침구치료 시술 모습" />
```

#### 스크린 리더 지원

- [ ] 의미론적 HTML 구조 (`<header>`, `<nav>`, `<main>`, `<footer>`)
- [ ] 헤딩 계층 구조 (H1 → H2 → H3)
- [ ] 이미지 alt 텍스트
- [ ] 링크 명확한 레이블

---

## 향후 로드맵

### 2025 Q1 (현재 진행 중)
- ✅ Phase 0: Tailwind CSS v4 마이그레이션
- [ ] Phase 1-2: Studio 템플릿 적용 (메인 페이지 리팩토링)
- [ ] Phase 3-4: Compass/Syntax 템플릿 적용 (서비스 페이지)
- [ ] Phase 5: 디자인 시스템 통합
- [ ] Phase 6: QA 및 성능 최적화

### 2025 Q2
- [ ] 온라인 예약 시스템 구축
- [ ] 한의사 프로필 페이지
- [ ] 치료 후기 시스템
- [ ] Google Maps 연동

### 2025 Q3
- [ ] 체질진단 온라인 도구
- [ ] 환자 로그인 시스템
- [ ] 커뮤니티 게시판

### 2025 Q4
- [ ] 모바일 앱 (선택)
- [ ] 다국어 지원 (영어)
- [ ] AI 챗봇 상담

---

## 부록

### 용어 사전

| 용어 | 설명 |
|------|------|
| **침구치료** | 침과 뜸을 이용한 한의학 치료 |
| **한약처방** | 체질과 증상에 맞춘 한약 처방 |
| **추나요법** | 수기를 이용한 척추 및 관절 교정 |
| **체질진단** | 사상체질(태양, 태음, 소양, 소음) 분석 |
| **경혈** | 침을 놓는 혈자리 |
| **경락** | 기혈이 흐르는 통로 |

### 참고 자료

- **디자인**: [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- **접근성**: [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)
- **SEO**: [Google Search Central](https://developers.google.com/search)
- **Next.js**: [Next.js 15 Documentation](https://nextjs.org/docs)
- **Tailwind CSS**: [Tailwind CSS Plus](https://tailwindcss.com/plus)

---

**문서 버전**: 2.0.0
**최종 업데이트**: 2025-11-09
**작성자**: BD 한의원 웹 개발팀
**승인자**: -

---

**© 2025 BD 한의원. All rights reserved.**
