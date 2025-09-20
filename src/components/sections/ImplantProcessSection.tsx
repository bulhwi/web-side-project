'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { CheckCircle, ArrowRight, Phone, Calendar, MessageCircle, Clock, Users, Shield, Target } from 'lucide-react';
import { designTokens } from '@/theme/designTokens';
import { ScrollReveal, SlideInContainer, SlideInItem } from '@/components/ui/ScrollReveal';

export const ImplantProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // BD 서울 사이트와 동일한 7단계 진료 과정
  const steps = [
    {
      id: 1,
      title: '초진 상담',
      subtitle: '정밀한 진단과 계획 수립',
      description: '체질 진단, 맥진, 설진을 통한 정밀 진단 후 개인 맞춤 한의학 치료 계획을 수립합니다.',
      details: [
        '체질 진단 및 분석',
        '맥진, 설진을 통한 정밀 검사',
        '개인 맞춤 치료 계획 수립',
        '비용 및 치료 기간 상담',
        '환자 상태별 한의학 치료법 선택'
      ],
      image: 'https://picsum.photos/600/400?random=consultation1',
      duration: '약 60분',
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 2,
      title: '치료 준비',
      subtitle: '안전한 치료를 위한 철저한 준비',
      description: '치료 전 필요한 검사와 준비 과정을 통해 안전하고 성공적인 치료 환경을 조성합니다.',
      details: [
        '전신 건강상태 및 기저질환 확인',
        '한약 복용 및 알레르기 반응 검사',
        '치료 방법 결정 및 상담',
        '치료 전 주의사항 교육',
        '응급상황 대비 시스템 점검'
      ],
      image: 'https://picsum.photos/600/400?random=preparation1',
      duration: '약 30분',
      icon: <Shield className="w-6 h-6" />
    },
    {
      id: 3,
      title: '침구 치료',
      subtitle: '정밀하고 안전한 침구 치료',
      description: '경혈 자극을 통한 정확한 침구 치료로 최고의 치료 효과를 제공합니다.',
      details: [
        '무통 침술 또는 최소 자극 치료',
        '전자침 시스템 활용',
        '실시간 모니터링 시스템',
        '부항, 뜸 치료 병행 (필요시)',
        '치료 과정 전체 기록 관리'
      ],
      image: 'https://picsum.photos/600/400?random=acupuncture1',
      duration: '약 30-60분',
      icon: <Target className="w-6 h-6" />
    },
    {
      id: 4,
      title: '한약 처방',
      subtitle: '체계적인 한약 치료',
      description: '치료 후 빠른 회복을 위한 체계적인 한약 처방과 정기적인 검진을 시행합니다.',
      details: [
        '개인 맞춤 한약 처방 및 복용법 교육',
        '정기 검진 스케줄 관리',
        '24시간 응급 연락 체계 운영',
        '치료 효과 모니터링',
        '부작용 예방을 위한 지속 관리'
      ],
      image: 'https://picsum.photos/600/400?random=herbal-medicine1',
      duration: '2-4주',
      icon: <Clock className="w-6 h-6" />
    },
    {
      id: 5,
      title: '추나 요법',
      subtitle: '정밀한 수기 치료 과정',
      description: '수기 요법을 활용한 정밀한 추나 치료로 완벽한 척추 교정을 진행합니다.',
      details: [
        '척추 정렬 상태 정밀 검사',
        '전통적 추나 기법 적용',
        '관절 가동범위 개선',
        '근육 긴장도 완화',
        '치료 효과 즉시 확인'
      ],
      image: 'https://picsum.photos/600/400?random=chuna1',
      duration: '약 30분',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      id: 6,
      title: '생활 관리',
      subtitle: '개인 맞춤형 생활 습관 개선',
      description: '체계적인 생활 관리 교육을 통한 정밀한 건강 관리로 자연스럽고 지속적인 치료 효과를 완성합니다.',
      details: [
        '식이요법 및 운동 처방',
        '생활 습관 개선 계획 수립',
        '다단계 건강 관리 과정',
        '체질에 맞는 맞춤형 관리법',
        '지속 가능한 건강 관리 방안'
      ],
      image: 'https://picsum.photos/600/400?random=lifestyle1',
      duration: '1-2주',
      icon: <ArrowRight className="w-6 h-6" />
    },
    {
      id: 7,
      title: '치료 후 보증기간 및 사후관리',
      subtitle: '평생 관리 시스템',
      description: '5년 품질 보증과 정기적인 검진 시스템으로 지속적이고 체계적인 관리를 제공합니다.',
      details: [
        '5년 품질 보증 서비스',
        '정기 검진 및 체질 관리',
        '24시간 응급 대응 시스템',
        '한의학 건강 관리 교육',
        '장기간 치료 효과 모니터링'
      ],
      image: 'https://picsum.photos/600/400?random=warranty1',
      duration: '평생',
      icon: <Shield className="w-6 h-6" />
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
              체계적인{' '}
              <span style={{ color: designTokens.colors.systemBlue }}>
                7단계 진료과정
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
              투명하고 안전한 진료 과정으로<br />
              최상의 한의학 치료 결과를 보장합니다
            </p>
          </div>
        </ScrollReveal>

        {/* Process Timeline */}
        <div className="relative">
          {/* Progress Line - Desktop Only */}
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
                  {/* Step Number - Desktop */}
                  <div className="relative z-10 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 mb-8 lg:mb-0">
                    <motion.div
                      className={`w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'bg-blue-500 border-blue-500 text-white'
                          : 'bg-white border-gray-300 text-gray-600 hover:border-blue-300'
                      }`}
                      style={{
                        fontFamily: designTokens.typography.fontFamilies.heading,
                        fontWeight: designTokens.typography.fontWeights.bold
                      }}
                      whileHover={{ scale: 1.1 }}
                      onClick={() => setActiveStep(step.id)}
                    >
                      <div className="flex flex-col items-center">
                        <span className="text-sm font-bold">{step.id}</span>
                      </div>
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
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                              isActive ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-500'
                            }`}>
                              {step.icon}
                            </div>
                            <h3
                              className="text-2xl font-bold"
                              style={{
                                fontFamily: designTokens.typography.fontFamilies.heading,
                                color: designTokens.colors.neutral.black
                              }}
                            >
                              {step.title}
                            </h3>
                          </div>
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
                            세부 진료 과정:
                          </h4>
                          <ul className="space-y-3">
                            {step.details.map((detail, idx) => (
                              <motion.li
                                key={idx}
                                className="flex items-start space-x-3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                              >
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span
                                  className="text-sm leading-relaxed"
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
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
              <h3
                className="text-3xl lg:text-4xl font-bold mb-6"
                style={{ fontFamily: designTokens.typography.fontFamilies.heading }}
              >
                한의학 상담을 받아보세요
              </h3>
              <p
                className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto"
                style={{ fontFamily: designTokens.typography.fontFamilies.body }}
              >
                7단계 체계적인 진료 과정으로 안전하고 성공적인 한의학 치료를 경험하세요
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