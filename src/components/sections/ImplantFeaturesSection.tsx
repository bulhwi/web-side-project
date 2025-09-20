'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Zap, Users, Clock, Heart } from 'lucide-react';
import { designTokens } from '@/theme/designTokens';
import { ScrollReveal, SlideInContainer, SlideInItem } from '@/components/ui/ScrollReveal';

export const ImplantFeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: '경희대 출신 한의사진',
      description: '경희대학교 한의과대학 출신의 검증된 전문한의사들이 직접 진료합니다.',
      image: 'https://picsum.photos/600/400?random=doctor',
      color: 'blue'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: '현대 한의학 장비',
      description: '전자침, 경락측정기 등 최신 한의학 장비로 정밀한 진단과 치료를 제공합니다.',
      image: 'https://picsum.photos/600/400?random=equipment',
      color: 'purple'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: '안전한 치료 시스템',
      description: '6개의 전용 진료실과 체계적인 멸균 시스템으로 안전한 치료 환경을 조성합니다.',
      image: 'https://picsum.photos/600/400?random=treatment-room',
      color: 'green'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: '개인 맞춤 한의학 치료',
      description: '환자 개개인의 체질과 증상에 맞는 맞춤형 한의학 치료 계획을 수립합니다.',
      image: 'https://picsum.photos/600/400?random=custom-treatment',
      color: 'orange'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '투명한 진료 과정',
      description: '7단계의 체계적인 진료 과정을 통해 투명하고 안전한 치료를 진행합니다.',
      image: 'https://picsum.photos/600/400?random=process',
      color: 'indigo'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: '5년 품질 보증',
      description: '한의학 치료 후 5년간 품질을 보증하며 체계적인 사후관리를 제공합니다.',
      image: 'https://picsum.photos/600/400?random=warranty',
      color: 'pink'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-50',
        icon: 'text-blue-500',
        accent: 'bg-blue-500',
        gradient: 'from-blue-500 to-blue-600'
      },
      purple: {
        bg: 'bg-purple-50',
        icon: 'text-purple-500',
        accent: 'bg-purple-500',
        gradient: 'from-purple-500 to-purple-600'
      },
      green: {
        bg: 'bg-green-50',
        icon: 'text-green-500',
        accent: 'bg-green-500',
        gradient: 'from-green-500 to-green-600'
      },
      orange: {
        bg: 'bg-orange-50',
        icon: 'text-orange-500',
        accent: 'bg-orange-500',
        gradient: 'from-orange-500 to-orange-600'
      },
      indigo: {
        bg: 'bg-indigo-50',
        icon: 'text-indigo-500',
        accent: 'bg-indigo-500',
        gradient: 'from-indigo-500 to-indigo-600'
      },
      pink: {
        bg: 'bg-pink-50',
        icon: 'text-pink-500',
        accent: 'bg-pink-500',
        gradient: 'from-pink-500 to-pink-600'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section
      className="py-20"
      style={{ backgroundColor: designTokens.colors.systemGray6 }}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2
              className="text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              style={{
                fontFamily: designTokens.typography.fontFamilies.heading,
                color: designTokens.colors.neutral.black,
                fontWeight: designTokens.typography.fontWeights.bold,
                letterSpacing: designTokens.typography.letterSpacing.tight
              }}
            >
              BD 한의원만의{' '}
              <span style={{ color: designTokens.colors.systemBlue }}>
                특별함
              </span>
            </h2>
            <p
              className="text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto"
              style={{
                fontFamily: designTokens.typography.fontFamilies.body,
                color: designTokens.colors.neutral.gray600,
                fontWeight: designTokens.typography.fontWeights.normal
              }}
            >
              연간 수천 건의 한의학 치료 경험과<br />
              현대적 장비를 바탕으로 한 차별화된 서비스
            </p>
          </div>
        </ScrollReveal>

        {/* Features Grid */}
        <SlideInContainer staggerDelay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const colors = getColorClasses(feature.color);

              return (
                <SlideInItem key={index} direction="up">
                  <motion.div
                    className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group"
                    style={{ backgroundColor: designTokens.colors.neutral.white }}
                    whileHover={{ y: -8 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* Image Section */}
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${colors.gradient} opacity-20`} />

                      {/* Icon */}
                      <div className="absolute top-4 right-4">
                        <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center backdrop-blur-sm bg-opacity-90`}>
                          <div className={colors.icon}>
                            {feature.icon}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="space-y-4">
                        <h3
                          className="text-2xl font-bold"
                          style={{
                            fontFamily: designTokens.typography.fontFamilies.heading,
                            color: designTokens.colors.neutral.black,
                            fontWeight: designTokens.typography.fontWeights.bold
                          }}
                        >
                          {feature.title}
                        </h3>

                        <p
                          className="text-base leading-relaxed"
                          style={{
                            fontFamily: designTokens.typography.fontFamilies.body,
                            color: designTokens.colors.neutral.gray600
                          }}
                        >
                          {feature.description}
                        </p>

                        {/* Accent Line */}
                        <div className={`w-12 h-1 ${colors.accent} rounded-full`}></div>
                      </div>
                    </div>
                  </motion.div>
                </SlideInItem>
              );
            })}
          </div>
        </SlideInContainer>

        {/* Bottom CTA */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
              <h3
                className="text-3xl lg:text-4xl font-bold mb-6"
                style={{ fontFamily: designTokens.typography.fontFamilies.heading }}
              >
                전문의와 상담해보세요
              </h3>
              <p
                className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto"
                style={{ fontFamily: designTokens.typography.fontFamilies.body }}
              >
                개인 맞춤형 한의학 치료 계획을 위한 전문 상담을 받아보세요
              </p>
              <motion.button
                className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                style={{ fontFamily: designTokens.typography.fontFamilies.body }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                무료 상담 신청
              </motion.button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};