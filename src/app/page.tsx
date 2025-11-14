import React from 'react'
import { RootLayout } from '@/components/layout/RootLayout'
import { AppleHeroSection } from '@/components/sections/AppleHeroSection'
import { AppleServicesSection } from '@/components/sections/AppleServicesSection'
import { TechnologySection } from '@/components/sections/TechnologySection'
import { FaqSection } from '@/components/sections/FaqSection'

export default function HomePage() {
  return (
    <RootLayout>
      <AppleHeroSection />
      <AppleServicesSection />
      <TechnologySection />
      <FaqSection />
    </RootLayout>
  )
}