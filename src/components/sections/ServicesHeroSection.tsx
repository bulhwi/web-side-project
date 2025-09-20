'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { designTokens } from '@/theme/designTokens';
import { ScrollReveal, FadeIn } from '@/components/ui/ScrollReveal';
import { VideoBackground } from '@/components/ui/VideoBackground';

export const ServicesHeroSection: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden" style={{ backgroundColor: designTokens.colors.systemBackground }}>
      <VideoBackground
        poster="https://picsum.photos/1920/1080?random=dental-clinic"
        overlay={true}
        overlayOpacity={0.4}
        className="h-full"
      >
        <div className="h-full flex items-center justify-center">
          <div className="container mx-auto px-6 text-center pt-20">

            {/* Main Content */}
            <div className="max-w-5xl mx-auto space-y-8">
              <FadeIn delay={0.2}>
                <h1
                  className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter"
                  style={{
                    fontFamily: designTokens.typography.fontFamilies.heading,
                    fontWeight: designTokens.typography.fontWeights.bold,
                    letterSpacing: designTokens.typography.letterSpacing.tighter,
                    color: designTokens.colors.neutral.white
                  }}
                >
                  전문 진료
                  <br />
                  <span style={{ color: designTokens.colors.systemBlue }}>
                    시스템
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.4}>
                <p
                  className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto"
                  style={{
                    fontFamily: designTokens.typography.fontFamilies.body,
                    color: designTokens.colors.neutral.gray300,
                    fontWeight: designTokens.typography.fontWeights.normal,
                    lineHeight: designTokens.typography.lineHeights.relaxed
                  }}
                >
                  체계적인 7단계 진료 과정으로<br />
                  최고의 치료 결과를 제공합니다
                </p>
              </FadeIn>

              <FadeIn delay={0.6}>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
                  <button
                    className="group relative overflow-hidden px-10 py-5 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-3"
                    style={{
                      backgroundColor: designTokens.colors.systemBlue,
                      color: designTokens.colors.neutral.white,
                      fontFamily: designTokens.typography.fontFamilies.body,
                      fontWeight: designTokens.typography.fontWeights.semibold,
                      fontSize: designTokens.typography.fontSizes.lg
                    }}
                  >
                    <span>진료 상담 받기</span>
                  </button>

                  <button
                    className="relative overflow-hidden px-10 py-5 rounded-full font-semibold transition-all duration-300 border-2 flex items-center justify-center space-x-3 backdrop-blur-sm hover:backdrop-blur-md"
                    style={{
                      borderColor: designTokens.colors.neutral.white,
                      color: designTokens.colors.neutral.white,
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      fontFamily: designTokens.typography.fontFamilies.body,
                      fontWeight: designTokens.typography.fontWeights.semibold,
                      fontSize: designTokens.typography.fontSizes.lg
                    }}
                  >
                    <span>진료과목 보기</span>
                  </button>
                </div>
              </FadeIn>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.0,
                repeat: Infinity,
                duration: 2,
                repeatType: 'reverse',
                ease: 'easeInOut'
              }}
            >
              <div className="flex flex-col items-center space-y-2">
                <div
                  className="w-6 h-10 border-2 rounded-full relative"
                  style={{ borderColor: designTokens.colors.neutral.gray400 }}
                >
                  <motion.div
                    className="w-1 h-2 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2"
                    style={{ backgroundColor: designTokens.colors.neutral.gray400 }}
                    animate={{ y: [0, 12, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </VideoBackground>
    </section>
  );
};