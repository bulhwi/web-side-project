'use client';

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, Shield, Award, Heart, Sparkles, Eye } from 'lucide-react';
import { designTokens } from '@/theme/designTokens';
import { ScrollReveal, SlideInContainer, SlideInItem } from '@/components/ui/ScrollReveal';
import { InteractiveVideo } from '@/components/ui/VideoBackground';

export const ServicesGridSection: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      icon: <Zap className="w-8 h-8" />,
      title: '임플란트',
      subtitle: '완벽한 복원',
      description: '첨단 3D 가이드 시스템으로 정확하고 안전한 임플란트 시술',
      details: [
        '무절개 임플란트',
        '즉시 식립',
        '디지털 가이드 수술',
        '평생 보증 시스템'
      ],
      image: 'https://picsum.photos/800/600?random=implant',
      color: 'blue'
    },
    {
      id: 2,
      icon: <Sparkles className="w-8 h-8" />,
      title: '치아교정',
      subtitle: '아름다운 미소',
      description: '투명교정, 설측교정 등 다양한 교정 치료 옵션',
      details: [
        '투명교정 (인비절라인)',
        '설측교정',
        '부분교정',
        '3D 시뮬레이션'
      ],
      image: 'https://picsum.photos/800/600?random=orthodontics',
      color: 'purple'
    },
    {
      id: 3,
      icon: <Heart className="w-8 h-8" />,
      title: '심미치료',
      subtitle: '자연스러운 아름다움',
      description: '라미네이트, 올세라믹 크라운으로 완벽한 심미 치료',
      details: [
        '포셀린 라미네이트',
        '올세라믹 크라운',
        '치아미백',
        '잇몸성형'
      ],
      image: 'https://picsum.photos/800/600?random=cosmetic',
      color: 'pink'
    },
    {
      id: 4,
      icon: <Shield className="w-8 h-8" />,
      title: '일반진료',
      subtitle: '예방과 치료',
      description: '충치치료, 신경치료, 잇몸치료 등 기본 진료',
      details: [
        '충치치료',
        '신경치료',
        '잇몸치료',
        '정기검진'
      ],
      image: 'https://picsum.photos/800/600?random=general',
      color: 'green'
    },
    {
      id: 5,
      icon: <Award className="w-8 h-8" />,
      title: '보철치료',
      subtitle: '기능 회복',
      description: '틀니, 브릿지 등 다양한 보철 치료',
      details: [
        '임플란트 보철',
        '브릿지',
        '부분틀니',
        '완전틀니'
      ],
      image: 'https://picsum.photos/800/600?random=prosthetics',
      color: 'orange'
    },
    {
      id: 6,
      icon: <Eye className="w-8 h-8" />,
      title: '정밀진단',
      subtitle: '정확한 분석',
      description: '3D CT, 구강스캐너를 통한 정밀 진단',
      details: [
        '3D CT 촬영',
        '구강스캐너',
        '디지털 진단',
        '치료계획 수립'
      ],
      image: 'https://picsum.photos/800/600?random=diagnosis',
      color: 'indigo'
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
      pink: {
        bg: 'bg-pink-50',
        icon: 'text-pink-500',
        accent: 'bg-pink-500',
        gradient: 'from-pink-500 to-pink-600'
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
              className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{
                fontFamily: designTokens.typography.fontFamilies.heading,
                color: designTokens.colors.neutral.black,
                fontWeight: designTokens.typography.fontWeights.bold,
                letterSpacing: designTokens.typography.letterSpacing.tight
              }}
            >
              전문 진료과목
            </h2>
            <p
              className="text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto"
              style={{
                fontFamily: designTokens.typography.fontFamilies.body,
                color: designTokens.colors.neutral.gray600,
                fontWeight: designTokens.typography.fontWeights.normal
              }}
            >
              각 분야 전문의가 최고의 치료를 제공합니다
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <SlideInContainer staggerDelay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color);
              const isActive = activeService === service.id;

              return (
                <SlideInItem key={service.id} direction="up">
                  <motion.div
                    className={`bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer ${
                      isActive ? 'scale-105' : 'hover:scale-105'
                    }`}
                    style={{ backgroundColor: designTokens.colors.neutral.white }}
                    onClick={() => setActiveService(isActive ? null : service.id)}
                    whileHover={{ y: -8 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* Image Section */}
                    <div className="aspect-video overflow-hidden relative">
                      <InteractiveVideo
                        poster={service.image}
                        className="w-full h-full"
                      />

                      {/* Overlay with gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${colors.gradient} opacity-20`} />

                      {/* Icon */}
                      <div className="absolute top-4 right-4">
                        <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center backdrop-blur-sm bg-opacity-90`}>
                          <div className={colors.icon}>
                            {service.icon}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="space-y-4">
                        <div>
                          <h3
                            className="text-2xl font-bold mb-2"
                            style={{
                              fontFamily: designTokens.typography.fontFamilies.heading,
                              color: designTokens.colors.neutral.black,
                              fontWeight: designTokens.typography.fontWeights.bold
                            }}
                          >
                            {service.title}
                          </h3>
                          <p
                            className="text-sm font-medium mb-3"
                            style={{
                              fontFamily: designTokens.typography.fontFamilies.body,
                              color: designTokens.colors.systemBlue
                            }}
                          >
                            {service.subtitle}
                          </p>
                        </div>

                        <p
                          className="text-base leading-relaxed"
                          style={{
                            fontFamily: designTokens.typography.fontFamilies.body,
                            color: designTokens.colors.neutral.gray600
                          }}
                        >
                          {service.description}
                        </p>

                        {/* Expandable Details */}
                        <motion.div
                          initial={false}
                          animate={{
                            height: isActive ? 'auto' : 0,
                            opacity: isActive ? 1 : 0
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 border-t border-gray-100">
                            <h4
                              className="text-sm font-semibold mb-3"
                              style={{
                                color: designTokens.colors.neutral.gray700,
                                fontFamily: designTokens.typography.fontFamilies.body
                              }}
                            >
                              주요 치료:
                            </h4>
                            <ul className="space-y-2">
                              {service.details.map((detail, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-center space-x-2 text-sm"
                                  style={{
                                    color: designTokens.colors.neutral.gray600,
                                    fontFamily: designTokens.typography.fontFamilies.body
                                  }}
                                >
                                  <div className={`w-2 h-2 ${colors.accent} rounded-full`} />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>

                        {/* Action Button */}
                        <motion.button
                          className={`w-full py-3 rounded-2xl font-semibold transition-all duration-300 ${
                            isActive ? colors.accent + ' text-white' : 'bg-gray-100 text-gray-700'
                          }`}
                          style={{
                            fontFamily: designTokens.typography.fontFamilies.body,
                            fontWeight: designTokens.typography.fontWeights.semibold
                          }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {isActive ? '상담 예약' : '자세히 보기'}
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </SlideInItem>
              );
            })}
          </div>
        </SlideInContainer>
      </div>
    </section>
  );
};