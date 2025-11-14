import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { FadeIn, FadeInStagger } from '@/components/ui/FadeIn'
import { RootLayout } from '@/components/layout/RootLayout'
import { SectionIntro } from '@/components/ui/SectionIntro'
import { List, ListItem } from '@/components/ui/List'
import { StylizedImage } from '@/components/ui/StylizedImage'
import { Testimonial } from '@/components/ui/Testimonial'
import { ContactSection } from '@/components/ui/ContactSection'

// 통계 섹션 (Clients 대신)
function Achievements() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            20년 이상의 임상 경험으로 검증된 치료
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            <li>
              <FadeIn>
                <div className="text-center">
                  <p className="font-display text-4xl font-semibold text-white">20+</p>
                  <p className="mt-2 text-sm text-neutral-400">년 경력</p>
                </div>
              </FadeIn>
            </li>
            <li>
              <FadeIn>
                <div className="text-center">
                  <p className="font-display text-4xl font-semibold text-white">10,000+</p>
                  <p className="mt-2 text-sm text-neutral-400">치료 케이스</p>
                </div>
              </FadeIn>
            </li>
            <li>
              <FadeIn>
                <div className="text-center">
                  <p className="font-display text-4xl font-semibold text-white">98%</p>
                  <p className="mt-2 text-sm text-neutral-400">환자 만족도</p>
                </div>
              </FadeIn>
            </li>
            <li>
              <FadeIn>
                <div className="text-center">
                  <p className="font-display text-4xl font-semibold text-white">100%</p>
                  <p className="mt-2 text-sm text-neutral-400">한의사 전문의</p>
                </div>
              </FadeIn>
            </li>
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

// 치료 사례 섹션 (CaseStudies 대신)
function TreatmentCases() {
  const cases = [
    {
      title: '만성 요통 완치',
      patient: '김○○ 님',
      duration: '3개월',
      description: '10년간 지속된 만성 요통이 추나 요법과 침구 치료로 완전히 개선되었습니다.',
      imageUrl: 'https://picsum.photos/400/300?random=case1'
    },
    {
      title: '디스크 통증 개선',
      patient: '이○○ 님',
      duration: '2개월',
      description: '허리 디스크로 인한 극심한 통증이 한약 치료와 추나 요법으로 호전되었습니다.',
      imageUrl: 'https://picsum.photos/400/300?random=case2'
    },
    {
      title: '오십견 치료',
      patient: '박○○ 님',
      duration: '4개월',
      description: '어깨가 굳어 일상생활이 불편했던 오십견이 침구 치료로 완치되었습니다.',
      imageUrl: 'https://picsum.photos/400/300?random=case3'
    },
  ]

  return (
    <>
      <SectionIntro
        title="검증된 치료 효과"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          수많은 환자분들이 BD 한의원에서 건강을 되찾았습니다.
          실제 치료 사례를 통해 검증된 치료 효과를 확인해보세요.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {cases.map((caseItem) => (
            <FadeIn key={caseItem.title} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <div className="relative">
                    <Image
                      src={caseItem.imageUrl}
                      alt={caseItem.title}
                      width={400}
                      height={300}
                      className="h-40 w-full rounded-2xl object-cover"
                      unoptimized
                    />
                  </div>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <span className="font-semibold">{caseItem.duration}</span>
                  <span className="text-neutral-300" aria-hidden="true">/</span>
                  <span>{caseItem.patient}</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseItem.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseItem.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

// 서비스 섹션
function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="진료 서비스"
        title="개인 맞춤형 한의학 치료"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          체질과 증상에 따라 최적화된 치료 계획을 제공합니다.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                src="https://picsum.photos/800/600?random=acupuncture"
                width={800}
                height={600}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title="침구 치료">
              전통 침술과 현대 기법이 결합된 개인 맞춤형 침구 치료를 제공합니다.
              무통 침술로 경혈을 정밀하게 자극하여 즉각적인 효과를 경험할 수 있습니다.
            </ListItem>
            <ListItem title="한약 처방">
              개인의 체질과 증상에 맞는 정확한 한약 처방으로 근본 치료를 제공합니다.
              체질 맞춤형 처방으로 부작용 없이 지속적인 효과를 기대할 수 있습니다.
            </ListItem>
            <ListItem title="추나 요법">
              숙련된 한의사의 손기법으로 척추와 관절의 균형을 바로잡아드립니다.
              수기 교정을 통해 즉시 개선 효과를 느낄 수 있는 안전한 치료입니다.
            </ListItem>
            <ListItem title="체질 진단">
              사상체질 진단을 통해 개인의 고유한 체질을 파악하고,
              체질에 맞는 맞춤형 치료 계획을 수립합니다.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export default function Home() {
  return (
    <RootLayout>
      {/* Hero Section */}
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
            전통 한의학과 현대 의학이 만나는 곳
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            BD 한의원은 개인의 체질과 증상에 맞춘 맞춤형 한의학 치료로 건강한 삶을 제공합니다.
            전통 침술, 한약 처방, 추나 요법을 통해 근본적인 치료를 추구합니다.
          </p>
        </FadeIn>
      </Container>

      <Achievements />

      <TreatmentCases />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{
          name: '김○○ 환자',
          logo: 'https://via.placeholder.com/150x50/000000/FFFFFF/?text=BD+한의원'
        }}
      >
        10년 넘게 고생했던 만성 요통이 추나 요법과 침구 치료로 완전히 나았습니다.
        BD 한의원의 체계적인 치료와 세심한 관리에 진심으로 감사드립니다.
      </Testimonial>

      <Services />

      <ContactSection />
    </RootLayout>
  )
}
