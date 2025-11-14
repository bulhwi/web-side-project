import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { RootLayout } from '@/components/layout/RootLayout'
import { SectionIntro } from '@/components/ui/SectionIntro'
import { List, ListItem } from '@/components/ui/List'
import { StylizedImage } from '@/components/ui/StylizedImage'

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

      {/* Services Section */}
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
    </RootLayout>
  )
}