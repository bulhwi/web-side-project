'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Phone, Calendar, ArrowDown } from 'lucide-react';
import { designTokens } from '@/theme/designTokens';
import { ScrollReveal, FadeIn } from '@/components/ui/ScrollReveal';
import { VideoBackground, VideoModal, InteractiveVideo } from '@/components/ui/VideoBackground';

export const AppleHeroSection: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const heroStats = [
    { number: '25+', label: '년 경력' },
    { number: '10,000+', label: '성공 케이스' },
    { number: '98%', label: '환자 만족도' },
    { number: '24/7', label: '응급 대응' }
  ];

  return (
    <>
      <section className="relative h-screen overflow-hidden" style={{ backgroundColor: designTokens.colors.systemBackground }}>
        <VideoBackground
          poster="https://picsum.photos/1920/1080?random=hero"
          overlay={true}
          overlayOpacity={0.3}
          className="h-full"
        >
          <div className="h-full flex items-center justify-center">
            <div className="container mx-auto px-6 text-center pt-20">

              {/* Main Content */}
              <div className="max-w-5xl mx-auto space-y-8">
                <FadeIn delay={0.2}>
                  <h1
                    className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tighter"
                    style={{
                      fontFamily: designTokens.typography.fontFamilies.heading,
                      fontWeight: designTokens.typography.fontWeights.bold,
                      letterSpacing: designTokens.typography.letterSpacing.tighter,
                      color: designTokens.colors.neutral.white
                    }}
                  >
                    한의학 치료의<br />
                    <span style={{ color: designTokens.colors.systemBlue }}>
                      새로운 경험
                    </span>
                  </h1>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <p
                    className="text-xl md:text-2xl lg:text-2xl leading-relaxed max-w-3xl mx-auto"
                    style={{
                      fontFamily: designTokens.typography.fontFamilies.body,
                      color: designTokens.colors.neutral.gray300,
                      fontWeight: designTokens.typography.fontWeights.normal,
                      lineHeight: designTokens.typography.lineHeights.relaxed
                    }}
                  >
                    전통과 현대가 만나는 곳<br />
                    BD 한의원
                  </p>
                </FadeIn>

                {/* Stats Grid - Apple Style */}
                <FadeIn delay={0.6}>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-8">
                    {heroStats.map((stat, index) => (
                      <motion.div
                        key={index}
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.8 + index * 0.1,
                          duration: 0.8,
                          ease: [0.25, 0.1, 0.25, 1]
                        }}
                      >
                        <div
                          className="text-3xl lg:text-4xl font-bold mb-2"
                          style={{
                            color: designTokens.colors.systemBlue,
                            fontFamily: designTokens.typography.fontFamilies.heading,
                            fontWeight: designTokens.typography.fontWeights.bold
                          }}
                        >
                          {stat.number}
                        </div>
                        <div
                          className="text-sm lg:text-base"
                          style={{
                            color: designTokens.colors.neutral.gray400,
                            fontFamily: designTokens.typography.fontFamilies.body,
                            fontWeight: designTokens.typography.fontWeights.medium
                          }}
                        >
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </FadeIn>

                {/* CTA Buttons - Apple Style */}
                <FadeIn delay={1.0}>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
                    <button
                      onClick={() => setIsVideoModalOpen(true)}
                      className="group relative overflow-hidden px-10 py-5 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-3"
                      style={{
                        backgroundColor: designTokens.colors.systemBlue,
                        color: designTokens.colors.neutral.white,
                        fontFamily: designTokens.typography.fontFamilies.body,
                        fontWeight: designTokens.typography.fontWeights.semibold,
                        fontSize: designTokens.typography.fontSizes.lg
                      }}
                    >
                      <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span>한의원 투어</span>
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
                      <Calendar className="w-5 h-5" />
                      <span>예약하기</span>
                    </button>
                  </div>
                </FadeIn>
              </div>

              {/* Scroll Indicator - Apple Style */}
              <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1.5,
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

      {/* Technology Highlight Section - Apple Style */}
      <section
        className="py-20"
        style={{ backgroundColor: designTokens.colors.systemGray6 }}
      >
        <div className="container mx-auto px-6">
          <ScrollReveal direction="up">
            <div className="text-center max-w-4xl mx-auto">
              <h2
                className="text-4xl lg:text-6xl font-bold mb-8 leading-tight"
                style={{
                  fontFamily: designTokens.typography.fontFamilies.heading,
                  color: designTokens.colors.neutral.black,
                  fontWeight: designTokens.typography.fontWeights.bold,
                  letterSpacing: designTokens.typography.letterSpacing.tight
                }}
              >
                정밀함이 만드는<br />
                <span style={{ color: designTokens.colors.systemBlue }}>
                  완벽한 결과
                </span>
              </h2>
              <p
                className="text-xl lg:text-2xl leading-relaxed"
                style={{
                  fontFamily: designTokens.typography.fontFamilies.body,
                  color: designTokens.colors.neutral.gray600,
                  fontWeight: designTokens.typography.fontWeights.normal
                }}
              >
                첨단 3D 스캐닝 기술과 정밀 가이드 시스템으로<br />
                단 한 번의 시술로 완성되는 치료
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: '3D 디지털 스캔',
                description: '정밀한 구강 스캔으로 완벽한 진단',
                image: 'https://picsum.photos/600/400?random=scan'
              },
              {
                title: '가이드 수술',
                description: '컴퓨터 가이드로 정확한 위치 식립',
                image: 'https://picsum.photos/600/400?random=surgery'
              },
              {
                title: '당일 완성',
                description: '즉시 식립 후 임시치아 장착',
                image: 'https://picsum.photos/600/400?random=teeth'
              }
            ].map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.2}>
                <div
                  className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                  style={{ backgroundColor: designTokens.colors.neutral.white }}
                >
                  <div className="aspect-video overflow-hidden">
                    <InteractiveVideo
                      poster={item.image}
                      className="w-full h-full"
                      onVideoClick={() => setIsVideoModalOpen(true)}
                    />
                  </div>

                  <div className="p-8">
                    <h3
                      className="text-2xl font-bold mb-4"
                      style={{
                        fontFamily: designTokens.typography.fontFamilies.heading,
                        color: designTokens.colors.neutral.black,
                        fontWeight: designTokens.typography.fontWeights.bold
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-lg leading-relaxed"
                      style={{
                        fontFamily: designTokens.typography.fontFamilies.body,
                        color: designTokens.colors.neutral.gray600
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoSrc="/videos/clinic-tour.mp4"
        title="BD 한의원 클리닉 투어"
      />
    </>
  );
};