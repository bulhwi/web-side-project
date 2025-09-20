'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, Shield, Award, Eye } from 'lucide-react';
import { designTokens } from '@/theme/designTokens';
import { ScrollReveal, SlideInContainer, SlideInItem } from '@/components/ui/ScrollReveal';
import { SmoothImageTransition, ProductRotation } from '@/components/ui/ImageSequence';
import { ParallaxSection } from '@/components/ui/ParallaxSection';

export const TechnologySection: React.FC = () => {
  // 한의학 기기 이미지들
  const equipmentImages = [
    'https://picsum.photos/800/600?random=acupuncture-equipment1',
    'https://picsum.photos/800/600?random=herbal-equipment2',
    'https://picsum.photos/800/600?random=cupping-equipment3',
    'https://picsum.photos/800/600?random=moxibustion-equipment4',
    'https://picsum.photos/800/600?random=diagnosis-equipment5'
  ];

  // 한의학 치료 과정 이미지들
  const procedureImages = [
    'https://picsum.photos/800/600?random=acupuncture-procedure1',
    'https://picsum.photos/800/600?random=herbal-procedure2',
    'https://picsum.photos/800/600?random=cupping-procedure3',
    'https://picsum.photos/800/600?random=chuna-procedure4',
    'https://picsum.photos/800/600?random=diagnosis-procedure5'
  ];

  const technologies = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: '전자 침술',
      description: '현대적 전자 침술로 정밀하고 효과적인 치료',
      color: 'blue'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: '한약 추출',
      description: '최신 한약 추출 시스템으로 고품질 약재 제공',
      color: 'green'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: '체질 진단',
      description: '과학적 체질 분석으로 맞춤형 치료 계획 수립',
      color: 'purple'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: '경락 측정',
      description: '정밀한 경락 상태 측정으로 정확한 진단',
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: { bg: 'bg-blue-50', icon: 'text-blue-500', accent: 'bg-blue-500' },
      green: { bg: 'bg-green-50', icon: 'text-green-500', accent: 'bg-green-500' },
      purple: { bg: 'bg-purple-50', icon: 'text-purple-500', accent: 'bg-purple-500' },
      orange: { bg: 'bg-orange-50', icon: 'text-orange-500', accent: 'bg-orange-500' }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      {/* Hero Technology Section with Parallax */}
      <ParallaxSection
        backgroundImage="https://picsum.photos/1920/1080?random=techbg"
        overlay={true}
        overlayOpacity={0.7}
        className="min-h-screen flex items-center"
      >
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal direction="up" delay={0.2}>
            <h2
              className="text-5xl lg:text-7xl font-bold mb-6"
              style={{
                fontFamily: designTokens.typography.fontFamilies.heading,
                background: 'linear-gradient(135deg, #60A5FA 0%, #A78BFA 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              현대 한의학 기술
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4}>
            <p
              className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: designTokens.typography.fontFamilies.body }}
            >
              전통 한의학과 현대 기술이 결합된<br />
              체계적이고 안전한 치료를 제공합니다
            </p>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* Equipment Showcase with Image Sequence */}
      <div className="relative">
        <SmoothImageTransition
          images={equipmentImages}
          className="z-0"
          transitionDuration={0.8}
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <ScrollReveal direction="left" delay={0.3}>
                <h3
                  className="text-4xl lg:text-5xl font-bold mb-6"
                  style={{ fontFamily: designTokens.typography.fontFamilies.heading }}
                >
                  현대식 한의학 기기
                </h3>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.5}>
                <p
                  className="text-lg text-gray-300 mb-8 leading-relaxed"
                  style={{ fontFamily: designTokens.typography.fontFamilies.body }}
                >
                  전통 한의학과 현대 기술이 결합된 고품질 기기로<br />
                  정확하고 효과적인 치료가 가능합니다.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.7}>
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-colors"
                  style={{ fontFamily: designTokens.typography.fontFamilies.body }}
                >
                  장비 소개 자세히 보기
                </button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Grid */}
      <div className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h3
                className="text-3xl lg:text-4xl font-bold mb-4"
                style={{ fontFamily: designTokens.typography.fontFamilies.heading }}
              >
                핵심 기술 시스템
              </h3>
              <p
                className="text-lg text-gray-400 max-w-2xl mx-auto"
                style={{ fontFamily: designTokens.typography.fontFamilies.body }}
              >
                BD 한의원만의 특별한 기술로 더 나은 치료 결과를 제공합니다
              </p>
            </div>
          </ScrollReveal>

          <SlideInContainer staggerDelay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => {
                const colors = getColorClasses(tech.color);

                return (
                  <SlideInItem key={index} direction="up">
                    <div className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-colors group hover:-translate-y-2 transform duration-300">
                      {/* Icon */}
                      <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <div className={colors.icon}>
                          {tech.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <h4
                          className="text-xl font-bold text-white"
                          style={{ fontFamily: designTokens.typography.fontFamilies.body }}
                        >
                          {tech.title}
                        </h4>

                        <p
                          className="text-gray-400 text-sm leading-relaxed"
                          style={{ fontFamily: designTokens.typography.fontFamilies.body }}
                        >
                          {tech.description}
                        </p>

                        {/* Accent Line */}
                        <div className={`w-12 h-1 ${colors.accent} rounded-full`}></div>
                      </div>
                    </div>
                  </SlideInItem>
                );
              })}
            </div>
          </SlideInContainer>
        </div>
      </div>

      {/* Procedure Timeline with Product Rotation */}
      <div className="relative">
        <h3
          className="text-center text-4xl lg:text-5xl font-bold py-16"
          style={{ fontFamily: designTokens.typography.fontFamilies.heading }}
        >
          치료 과정 미리보기
        </h3>

        <ProductRotation
          images={procedureImages}
          rotationSpeed={0.5}
          className="bg-gradient-to-b from-gray-900 to-gray-800"
        />
      </div>

      {/* Bottom CTA */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal direction="up" delay={0.2}>
            <h3
              className="text-3xl lg:text-4xl font-bold mb-6"
              style={{ fontFamily: designTokens.typography.fontFamilies.heading }}
            >
              첨단 기술로 새로운 치료 경험을
            </h3>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4}>
            <p
              className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: designTokens.typography.fontFamilies.body }}
            >
              최신 장비와 기술로 더 안전하고 정확한 치료를 받아보세요
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.6}>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <button
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                style={{ fontFamily: designTokens.typography.fontFamilies.body }}
              >
                기술 상담 받기
              </button>
              <button
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                style={{ fontFamily: designTokens.typography.fontFamilies.body }}
              >
                장비 투어 신청
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};