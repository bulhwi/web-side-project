'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play, Phone, MessageCircle } from 'lucide-react';
import { designTokens } from '@/theme/designTokens';
import { ScrollReveal, FadeIn } from '@/components/ui/ScrollReveal';

export const ImplantHeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20" style={{ backgroundColor: designTokens.colors.systemBackground }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100" />
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Main Title */}
        <div className="text-center mb-16">
          <FadeIn delay={0.2}>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{
                fontFamily: designTokens.typography.fontFamilies.heading,
                fontWeight: designTokens.typography.fontWeights.bold,
                color: designTokens.colors.neutral.black,
                letterSpacing: designTokens.typography.letterSpacing.tight
              }}
            >
              왜{' '}
              <span style={{ color: designTokens.colors.systemBlue }}>
                BD 한의원
              </span>
              인가?
            </h1>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p
              className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto"
              style={{
                fontFamily: designTokens.typography.fontFamilies.body,
                color: designTokens.colors.neutral.gray600,
                fontWeight: designTokens.typography.fontWeights.normal
              }}
            >
              경희대 출신 한의사들의 전문성과 현대 한의학 기술이 만나<br />
              안전하고 정확한 한의학 치료를 제공합니다
            </p>
          </FadeIn>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              number: '연간 수천 건',
              label: '한의학 치료 경험',
              description: '풍부한 임상 경험으로 안전한 치료'
            },
            {
              number: '6개',
              label: '전용 진료실',
              description: '최신 장비를 갖춘 전용 진료실'
            },
            {
              number: '5년',
              label: '품질 보증',
              description: '체계적인 사후관리 시스템'
            },
            {
              number: '경희대',
              label: '출신 한의사진',
              description: '검증된 전문한의료진의 진료'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div
                className="text-3xl lg:text-4xl font-bold mb-3"
                style={{
                  color: designTokens.colors.systemBlue,
                  fontFamily: designTokens.typography.fontFamilies.heading
                }}
              >
                {feature.number}
              </div>
              <div
                className="text-lg font-semibold mb-2"
                style={{
                  color: designTokens.colors.neutral.black,
                  fontFamily: designTokens.typography.fontFamilies.body
                }}
              >
                {feature.label}
              </div>
              <div
                className="text-sm leading-relaxed"
                style={{
                  color: designTokens.colors.neutral.gray600,
                  fontFamily: designTokens.typography.fontFamilies.body
                }}
              >
                {feature.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Section */}
        <FadeIn delay={1.0}>
          <div className="relative max-w-4xl mx-auto mb-16">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl relative group cursor-pointer">
              <img
                src="https://picsum.photos/800/450?random=implant-video"
                alt="임플란트 시술 과정"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Video Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <motion.div
                  className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-8 h-8 text-gray-800 ml-1" />
                </motion.div>
              </div>

              {/* Video Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
                <h3
                  className="text-white text-2xl font-bold mb-2"
                  style={{ fontFamily: designTokens.typography.fontFamilies.heading }}
                >
                  BD 한의원 치료 과정
                </h3>
                <p
                  className="text-gray-300 text-lg"
                  style={{ fontFamily: designTokens.typography.fontFamilies.body }}
                >
                  현대적 장비와 정밀한 치료 과정을 영상으로 확인하세요
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* CTA Buttons */}
        <FadeIn delay={1.2}>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
            <motion.button
              className="group relative overflow-hidden px-10 py-5 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-3"
              style={{
                backgroundColor: designTokens.colors.systemBlue,
                color: designTokens.colors.neutral.white,
                fontFamily: designTokens.typography.fontFamilies.body,
                fontWeight: designTokens.typography.fontWeights.semibold,
                fontSize: designTokens.typography.fontSizes.lg
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              <span>빠른 상담</span>
            </motion.button>

            <motion.button
              className="relative overflow-hidden px-10 py-5 rounded-full font-semibold transition-all duration-300 border-2 flex items-center justify-center space-x-3"
              style={{
                borderColor: designTokens.colors.systemBlue,
                color: designTokens.colors.systemBlue,
                backgroundColor: 'transparent',
                fontFamily: designTokens.typography.fontFamilies.body,
                fontWeight: designTokens.typography.fontWeights.semibold,
                fontSize: designTokens.typography.fontSizes.lg
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: designTokens.colors.systemBlue,
                color: designTokens.colors.neutral.white
              }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              <span>카카오톡 상담</span>
            </motion.button>

            <motion.button
              className="relative overflow-hidden px-10 py-5 rounded-full font-semibold transition-all duration-300 border-2 flex items-center justify-center space-x-3"
              style={{
                borderColor: designTokens.colors.neutral.gray400,
                color: designTokens.colors.neutral.gray700,
                backgroundColor: 'transparent',
                fontFamily: designTokens.typography.fontFamilies.body,
                fontWeight: designTokens.typography.fontWeights.semibold,
                fontSize: designTokens.typography.fontSizes.lg
              }}
              whileHover={{
                scale: 1.05,
                borderColor: designTokens.colors.systemBlue,
                color: designTokens.colors.systemBlue
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>온라인 예약</span>
            </motion.button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};