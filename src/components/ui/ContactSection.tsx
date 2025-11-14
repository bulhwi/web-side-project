import { Container } from '@/components/layout/Container'
import { FadeIn } from '@/components/ui/FadeIn'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-balance text-white sm:text-4xl">
              진료 예약 및 상담
            </h2>
            <p className="mt-6 text-xl text-neutral-300">
              전화 또는 온라인으로 간편하게 예약하실 수 있습니다.
            </p>
            <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="font-display text-base font-semibold text-white">
                BD 한의원
              </h3>
              <div className="mt-6 text-neutral-300">
                <p className="text-sm">서울특별시 강남구</p>
                <p className="mt-2 text-sm">영업시간: 평일 09:00 - 18:00</p>
                <p className="mt-2 text-sm">전화: 02-1234-5678</p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
