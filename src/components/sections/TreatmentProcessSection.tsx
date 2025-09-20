'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { CheckCircle, ArrowRight, Phone, Calendar, MessageCircle } from 'lucide-react';
import { designTokens } from '@/theme/designTokens';
import { ScrollReveal, SlideInContainer, SlideInItem } from '@/components/ui/ScrollReveal';

export const TreatmentProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const steps = [
    {
      id: 1,
      title: '수술 상담',
      subtitle: '정밀한 진단과 계획',
      description: '3D CT, 구강스캐너를 통한 정밀 진단 후 개인 맞춤 치료 계획을 수립합니다.',
      details: [
        '3D CT 촬영 및 분석',
        '구강 상태 정밀 검사',
        '치료 계획 상담',
        '비용 및 기간 안내'
      ],
      image: 'https://picsum.photos/600/400?random=consultation',
      duration: '약 60분'
    },
    {
      id: 2,
      title: '수술 준비',
      subtitle: '안전한 시술을 위한 준비',
      description: '수술 전 필요한 검사와 준비 과정을 통해 안전한 시술 환경을 조성합니다.',
      details: [
        '혈액검사 및 건강상태 확인',
        '수술 가이드 제작',
        '마취 상담',
        '수술 전 주의사항 안내'
      ],
      image: 'https://picsum.photos/600/400?random=preparation',
      duration: '약 30분'
    },
    {
      id: 3,
      title: '수술 시행',
      subtitle: '정밀하고 안전한 시술',
      description: '디지털 가이드를 활용한 정확한 임플란트 식립으로 최고의 결과를 제공합니다.',
      details: [
        '무절개 임플란트 시술',
        '실시간 모니터링',
        '정밀 가이드 시스템 활용',
        '즉시 임시 보철 장착'
      ],
      image: 'https://picsum.photos/600/400?random=surgery',
      duration: '약 45분'
    },
    {
      id: 4,
      title: '회복 기간',
      subtitle: '체계적인 관리',
      description: '수술 후 빠른 회복을 위한 체계적인 관리와 정기적인 검진을 시행합니다.',
      details: [
        '수술 후 관리 교육',
        '정기 검진 스케줄 관리',
        '24시간 응급 연락 체계',
        '회복 상태 모니터링'
      ],
      image: 'https://picsum.photos/600/400?random=recovery',
      duration: '2-4개월'
    },
    {
      id: 5,
      title: '인상 채득',
      subtitle: '정밀한 본뜨기',
      description: '디지털 스캐너를 활용한 정밀한 인상 채득으로 완벽한 보철물을 제작합니다.',
      details: [
        '디지털 스캐너 활용',
        '정밀 인상 채득',
        '색상 매칭',
        '임시 보철물 점검'
      ],
      image: 'https://picsum.photos/600/400?random=impression',
      duration: '약 30분'
    },
    {
      id: 6,
      title: '보철 제작',
      subtitle: '맞춤형 완성',
      description: 'CAD/CAM 시스템을 통한 정밀한 보철물 제작으로 자연스러운 결과를 완성합니다.',
      details: [
        'CAD/CAM 시스템 활용',
        '정밀 보철물 제작',
        '품질 검증',
        '최종 조정'
      ],
      image: 'https://picsum.photos/600/400?random=prosthetic',
      duration: '1-2주'
    },
    {
      id: 7,
      title: '수술 후 보증',
      subtitle: '평생 관리 시스템',
      description: '정기적인 검진과 평생 보증 시스템으로 지속적인 관리를 제공합니다.',
      details: [
        '정기 검진 시스템',
        '평생 보증 서비스',
        '24시간 응급 대응',
        '유지 관리 교육'
      ],
      image: 'https://picsum.photos/600/400?random=warranty',
      duration: '평생'
    }
  ];

  const progressTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, steps.length - 1]
  );

  return (
    <section
      ref={containerRef}
      className="relative py-20 overflow-hidden"
      style={{ backgroundColor: designTokens.colors.neutral.white }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100" />
      </div>

      <div className="container mx-auto px-6 relative">
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
              7단계{' '}
              <span style={{ color: designTokens.colors.systemBlue }}>
                치료 과정
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
              체계적이고 안전한 치료 과정으로<br />
              최상의 결과를 보장합니다
            </p>
          </div>
        </ScrollReveal>

        {/* Process Timeline */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200 hidden lg:block">
            <motion.div
              className="w-full bg-gradient-to-b from-blue-500 to-purple-500 origin-top"
              style={{
                scaleY: isInView ? scrollYProgress : 0
              }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              const isActive = activeStep === step.id;

              return (
                <motion.div
                  key={step.id}
                  className={`relative flex items-center ${
                    isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Step Number */}
                  <div className="relative z-10 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
                    <motion.div
                      className={`w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                        isActive
                          ? 'bg-blue-500 border-blue-500 text-white'
                          : 'bg-white border-gray-300 text-gray-600'
                      }`}
                      style={{
                        fontFamily: designTokens.typography.fontFamilies.heading,
                        fontWeight: designTokens.typography.fontWeights.bold
                      }}
                      whileHover={{ scale: 1.1 }}
                      onClick={() => setActiveStep(step.id)}
                    >
                      {step.id}
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className={`w-full lg:w-5/12 ${
                      isLeft ? 'lg:pr-16' : 'lg:pl-16'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setActiveStep(step.id)}
                  >
                    <div
                      className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer ${
                        isActive ? 'ring-2 ring-blue-500 shadow-blue-100' : ''
                      }`}
                    >
                      {/* Image */}
                      <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3
                            className="text-2xl font-bold"
                            style={{
                              fontFamily: designTokens.typography.fontFamilies.heading,
                              color: designTokens.colors.neutral.black
                            }}
                          >
                            {step.title}
                          </h3>
                          <span
                            className="text-sm px-3 py-1 rounded-full bg-blue-100"
                            style={{
                              color: designTokens.colors.systemBlue,
                              fontFamily: designTokens.typography.fontFamilies.body,
                              fontWeight: designTokens.typography.fontWeights.medium
                            }}
                          >
                            {step.duration}
                          </span>
                        </div>
                        <p
                          className="text-lg font-medium mb-3"
                          style={{
                            color: designTokens.colors.systemBlue,
                            fontFamily: designTokens.typography.fontFamilies.body
                          }}
                        >
                          {step.subtitle}
                        </p>
                      </div>

                      {/* Description */}
                      <p
                        className="text-base leading-relaxed mb-6"
                        style={{
                          fontFamily: designTokens.typography.fontFamilies.body,
                          color: designTokens.colors.neutral.gray600
                        }}
                      >
                        {step.description}
                      </p>

                      {/* Details */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: isActive ? 'auto' : 0,
                          opacity: isActive ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-gray-100 pt-6">
                          <h4
                            className="text-sm font-semibold mb-4"
                            style={{
                              color: designTokens.colors.neutral.gray700,
                              fontFamily: designTokens.typography.fontFamilies.body
                            }}
                          >
                            주요 과정:
                          </h4>
                          <ul className="space-y-3">
                            {step.details.map((detail, idx) => (
                              <motion.li
                                key={idx}
                                className="flex items-center space-x-3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                              >
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                <span
                                  className="text-sm"
                                  style={{
                                    color: designTokens.colors.neutral.gray600,
                                    fontFamily: designTokens.typography.fontFamilies.body
                                  }}
                                >
                                  {detail}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="mt-20 text-center">
            <div
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white"
            >
              <h3
                className="text-3xl lg:text-4xl font-bold mb-6"
                style={{ fontFamily: designTokens.typography.fontFamilies.heading }}
              >
                치료 과정이 궁금하신가요?
              </h3>
              <p
                className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto"
                style={{ fontFamily: designTokens.typography.fontFamilies.body }}
              >
                전문 상담을 통해 개인 맞춤 치료 계획을 안내해드립니다
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                <motion.button
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                  style={{ fontFamily: designTokens.typography.fontFamilies.body }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-5 h-5" />
                  <span>전화 상담</span>
                </motion.button>

                <motion.button
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center space-x-2"
                  style={{ fontFamily: designTokens.typography.fontFamilies.body }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="w-5 h-5" />
                  <span>온라인 예약</span>
                </motion.button>

                <motion.button
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center space-x-2"
                  style={{ fontFamily: designTokens.typography.fontFamilies.body }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>카카오톡 상담</span>
                </motion.button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};