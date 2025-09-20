'use client';

import React from 'react';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { designTokens } from '@/theme/designTokens';

export const FaqSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{
              fontFamily: designTokens.typography.fontFamilies.heading,
              color: designTokens.colors.grayscale.gray700
            }}
          >
            자주 묻는 질문
            <span style={{ color: designTokens.colors.primary.primary500 }}>
              FAQ
            </span>
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: designTokens.typography.fontFamilies.body }}
          >
            BD 한의원에 대해 궁금한 점들을<br />
            미리 확인해보세요.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <FaqAccordion />
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-blue-50 rounded-2xl">
          <h3
            className="text-xl font-bold mb-4"
            style={{
              fontFamily: designTokens.typography.fontFamilies.body,
              color: designTokens.colors.grayscale.gray700
            }}
          >
            더 궁금한 점이 있으시나요?
          </h3>
          <p
            className="text-gray-600 mb-6"
            style={{ fontFamily: designTokens.typography.fontFamilies.body }}
          >
            전문 상담사가 친절하게 답변해드립니다.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
              style={{ fontFamily: designTokens.typography.fontFamilies.body }}
            >
              1:1 상담하기
            </button>
            <button
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium border border-blue-600 hover:bg-blue-50 transition-colors"
              style={{ fontFamily: designTokens.typography.fontFamilies.body }}
            >
              전화 문의하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};