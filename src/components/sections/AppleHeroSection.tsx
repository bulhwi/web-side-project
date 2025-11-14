'use client'

import React from 'react'
import { Container } from '@/components/layout/Container'
import { FadeIn } from '@/components/ui/FadeIn'

export const AppleHeroSection: React.FC = () => {
  return (
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
  )
}