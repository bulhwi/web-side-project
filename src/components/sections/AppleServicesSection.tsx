'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Star, Clock, ArrowRight } from 'lucide-react';
import { designTokens } from '@/theme/designTokens';
import { ScrollReveal, SlideInContainer, SlideInItem } from '@/components/ui/ScrollReveal';

export const AppleServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: '침구 치료',
      subtitle: '정밀한 경혈 자극',
      description: '전통 침술과 현대 기법이 결합된 개인 맞춤형 침구 치료를 제공합니다.',
      features: ['무통 침술', '즉시 효과', '10년 경험'],
      color: designTokens.colors.systemBlue,
      image: 'https://picsum.photos/800/600?random=acupuncture'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: '한약 처방',
      subtitle: '개인 맞춤 한약',
      description: '개인의 체질과 증상에 맞는 정확한 한약 처방으로 근본 치료를 제공합니다.',
      features: ['체질 맞춤', '무부작용', '지속 효과'],
      color: designTokens.colors.systemGreen,
      image: 'https://picsum.photos/800/600?random=herbal-medicine'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: '추나 요법',
      subtitle: '척추 교정 치료',
      description: '숙련된 한의사의 손기법으로 척추와 관절의 균형을 바로잡아드립니다.',
      features: ['수기 교정', '즉시 개선', '안전 치료'],
      color: designTokens.colors.systemPurple,
      image: 'https://picsum.photos/800/600?random=chuna'
    }
  ];

  return (
    <section
      className="py-32"
      style={{ backgroundColor: designTokens.colors.neutral.black }}
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-20">
            <h2
              className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
              style={{
                fontFamily: designTokens.typography.fontFamilies.heading,
                color: designTokens.colors.neutral.white,
                fontWeight: designTokens.typography.fontWeights.bold,
                letterSpacing: designTokens.typography.letterSpacing.tight
              }}
            >
              전문 한의학<br />
              <span style={{ color: designTokens.colors.systemBlue }}>
                치료
              </span>
            </h2>
            <p
              className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed"
              style={{
                fontFamily: designTokens.typography.fontFamilies.body,
                color: designTokens.colors.neutral.gray400,
                fontWeight: designTokens.typography.fontWeights.normal
              }}
            >
              개인의 체질에 맞춘 맞춤형 한의학 치료로<br />
              건강한 삶을 제공합니다
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              viewport={{ once: true, margin: '-100px' }}
            >
              {/* Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="space-y-6">
                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${service.color}20` }}
                  >
                    <div style={{ color: service.color }}>
                      {service.icon}
                    </div>
                  </div>

                  {/* Title and Subtitle */}
                  <div className="space-y-3">
                    <p
                      className="text-lg font-medium"
                      style={{
                        color: service.color,
                        fontFamily: designTokens.typography.fontFamilies.body,
                        fontWeight: designTokens.typography.fontWeights.medium
                      }}
                    >
                      {service.subtitle}
                    </p>
                    <h3
                      className="text-4xl lg:text-5xl font-bold leading-tight"
                      style={{
                        fontFamily: designTokens.typography.fontFamilies.heading,
                        color: designTokens.colors.neutral.white,
                        fontWeight: designTokens.typography.fontWeights.bold
                      }}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p
                    className="text-xl leading-relaxed"
                    style={{
                      fontFamily: designTokens.typography.fontFamilies.body,
                      color: designTokens.colors.neutral.gray300,
                      lineHeight: designTokens.typography.lineHeights.relaxed
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-3 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="text-center p-4 rounded-2xl border"
                        style={{
                          borderColor: designTokens.colors.neutral.gray800,
                          backgroundColor: designTokens.colors.neutral.gray900
                        }}
                      >
                        <div
                          className="text-sm font-medium"
                          style={{
                            color: designTokens.colors.neutral.gray300,
                            fontFamily: designTokens.typography.fontFamilies.body
                          }}
                        >
                          {feature}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    className="group flex items-center space-x-3 px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1"
                    style={{
                      backgroundColor: service.color,
                      color: designTokens.colors.neutral.white,
                      fontFamily: designTokens.typography.fontFamilies.body,
                      fontWeight: designTokens.typography.fontWeights.semibold
                    }}
                  >
                    <span>자세히 알아보기</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <motion.div
                  className="relative aspect-square rounded-3xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay Gradient */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}20 0%, transparent 50%)`
                    }}
                  />

                  {/* Floating Number */}
                  <div
                    className="absolute top-8 right-8 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold"
                    style={{
                      backgroundColor: designTokens.colors.neutral.white,
                      color: service.color,
                      fontFamily: designTokens.typography.fontFamilies.heading
                    }}
                  >
                    {index + 1}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal direction="up">
          <div className="text-center mt-32 space-y-8">
            <h3
              className="text-3xl lg:text-4xl font-bold"
              style={{
                fontFamily: designTokens.typography.fontFamilies.heading,
                color: designTokens.colors.neutral.white
              }}
            >
              어떤 치료가 필요한지 궁금하세요?
            </h3>
            <p
              className="text-xl max-w-2xl mx-auto"
              style={{
                fontFamily: designTokens.typography.fontFamilies.body,
                color: designTokens.colors.neutral.gray400
              }}
            >
              전문의와의 무료 상담을 통해 개인에게 최적화된 치료 계획을 세워보세요
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
              <button
                className="px-10 py-5 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: designTokens.colors.systemBlue,
                  color: designTokens.colors.neutral.white,
                  fontFamily: designTokens.typography.fontFamilies.body,
                  fontWeight: designTokens.typography.fontWeights.semibold,
                  fontSize: designTokens.typography.fontSizes.lg
                }}
              >
                무료 상담 신청
              </button>
              <button
                className="px-10 py-5 rounded-full font-semibold border-2 transition-all duration-300 hover:-translate-y-1"
                style={{
                  borderColor: designTokens.colors.neutral.gray600,
                  color: designTokens.colors.neutral.white,
                  fontFamily: designTokens.typography.fontFamilies.body,
                  fontWeight: designTokens.typography.fontWeights.semibold,
                  fontSize: designTokens.typography.fontSizes.lg
                }}
              >
                치료 사례 보기
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};