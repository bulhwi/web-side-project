import React from 'react';
import { AppleHeader } from '@/components/layout/AppleHeader';
import { AppleFooter } from '@/components/layout/AppleFooter';
import { ImplantHeroSection } from '@/components/sections/ImplantHeroSection';
import { ImplantProcessSection } from '@/components/sections/ImplantProcessSection';
import { ImplantFeaturesSection } from '@/components/sections/ImplantFeaturesSection';
import { ScrollProgressBar } from '@/components/ui/ParallaxSection';
import { designTokens } from '@/theme/designTokens';

export default function ServicesPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: designTokens.colors.systemBackground }}>
      <ScrollProgressBar />
      <AppleHeader />
      <main>
        <ImplantHeroSection />
        <ImplantFeaturesSection />
        <ImplantProcessSection />
      </main>
      <AppleFooter />
    </div>
  );
}