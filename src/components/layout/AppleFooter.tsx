'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react';
import { designTokens } from '@/theme/designTokens';

const footerLinks = {
  services: [
    { label: '임플란트', href: '/services/implant' },
    { label: '치아교정', href: '/services/ortho' },
    { label: '심미치료', href: '/services/aesthetic' },
    { label: '일반진료', href: '/services/general' }
  ],
  info: [
    { label: '병원소개', href: '/about' },
    { label: '의료진', href: '/about/staff' },
    { label: '시설안내', href: '/about/facility' },
    { label: '진료안내', href: '/contact' }
  ],
  support: [
    { label: '자주 묻는 질문', href: '/faq' },
    { label: '예약 안내', href: '/reservation' },
    { label: '보험 안내', href: '/insurance' },
    { label: '개인정보처리방침', href: '/privacy' }
  ]
};

export const AppleFooter: React.FC = () => {
  return (
    <footer
      className="relative"
      style={{ backgroundColor: designTokens.colors.systemGray6 }}
    >
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <h3
              className="text-3xl font-bold tracking-tight"
              style={{
                color: designTokens.colors.neutral.black,
                fontFamily: designTokens.typography.fontFamilies.heading,
                fontWeight: designTokens.typography.fontWeights.bold
              }}
            >
              BD 한의원
            </h3>
            <p
              className="text-base leading-relaxed"
              style={{
                color: designTokens.colors.neutral.gray600,
                fontFamily: designTokens.typography.fontFamilies.body,
                lineHeight: designTokens.typography.lineHeights.relaxed
              }}
            >
              첨단 기술과 따뜻한 마음으로<br />
              환자 중심의 치료를 제공합니다
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${designTokens.colors.systemBlue}15` }}
                >
                  <Phone className="w-5 h-5" style={{ color: designTokens.colors.systemBlue }} />
                </div>
                <div>
                  <div
                    className="text-lg font-semibold"
                    style={{
                      color: designTokens.colors.neutral.black,
                      fontFamily: designTokens.typography.fontFamilies.body,
                      fontWeight: designTokens.typography.fontWeights.semibold
                    }}
                  >
                    02-123-4567
                  </div>
                  <div
                    className="text-sm"
                    style={{ color: designTokens.colors.systemGray2 }}
                  >
                    24시간 응급 진료
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mt-1"
                  style={{ backgroundColor: `${designTokens.colors.systemGreen}15` }}
                >
                  <MapPin className="w-5 h-5" style={{ color: designTokens.colors.systemGreen }} />
                </div>
                <div>
                  <div
                    className="text-base leading-relaxed"
                    style={{
                      color: designTokens.colors.neutral.gray700,
                      fontFamily: designTokens.typography.fontFamilies.body
                    }}
                  >
                    서울특별시 강남구 테헤란로 123<br />
                    BD메디컬빌딩 3-5층
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4
              className="text-lg font-semibold mb-6"
              style={{
                color: designTokens.colors.neutral.black,
                fontFamily: designTokens.typography.fontFamilies.body,
                fontWeight: designTokens.typography.fontWeights.semibold
              }}
            >
              진료과목
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center space-x-1 transition-all duration-200 hover:translate-x-1"
                    style={{
                      color: designTokens.colors.neutral.gray600,
                      fontFamily: designTokens.typography.fontFamilies.body,
                      fontSize: designTokens.typography.fontSizes.base
                    }}
                  >
                    <span className="group-hover:text-blue-600 transition-colors">
                      {link.label}
                    </span>
                    <ChevronRight
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: designTokens.colors.systemBlue }}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Links */}
          <div>
            <h4
              className="text-lg font-semibold mb-6"
              style={{
                color: designTokens.colors.neutral.black,
                fontFamily: designTokens.typography.fontFamilies.body,
                fontWeight: designTokens.typography.fontWeights.semibold
              }}
            >
              병원정보
            </h4>
            <ul className="space-y-3">
              {footerLinks.info.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center space-x-1 transition-all duration-200 hover:translate-x-1"
                    style={{
                      color: designTokens.colors.neutral.gray600,
                      fontFamily: designTokens.typography.fontFamilies.body,
                      fontSize: designTokens.typography.fontSizes.base
                    }}
                  >
                    <span className="group-hover:text-blue-600 transition-colors">
                      {link.label}
                    </span>
                    <ChevronRight
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: designTokens.colors.systemBlue }}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4
              className="text-lg font-semibold mb-6"
              style={{
                color: designTokens.colors.neutral.black,
                fontFamily: designTokens.typography.fontFamilies.body,
                fontWeight: designTokens.typography.fontWeights.semibold
              }}
            >
              고객지원
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center space-x-1 transition-all duration-200 hover:translate-x-1"
                    style={{
                      color: designTokens.colors.neutral.gray600,
                      fontFamily: designTokens.typography.fontFamilies.body,
                      fontSize: designTokens.typography.fontSizes.base
                    }}
                  >
                    <span className="group-hover:text-blue-600 transition-colors">
                      {link.label}
                    </span>
                    <ChevronRight
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: designTokens.colors.systemBlue }}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Operating Hours */}
        <div
          className="mt-12 p-8 rounded-2xl"
          style={{ backgroundColor: designTokens.colors.neutral.white }}
        >
          <div className="flex items-center space-x-3 mb-6">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${designTokens.colors.systemOrange}15` }}
            >
              <Clock className="w-6 h-6" style={{ color: designTokens.colors.systemOrange }} />
            </div>
            <h4
              className="text-xl font-semibold"
              style={{
                color: designTokens.colors.neutral.black,
                fontFamily: designTokens.typography.fontFamilies.body,
                fontWeight: designTokens.typography.fontWeights.semibold
              }}
            >
              진료시간 안내
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div
                className="text-sm font-medium mb-2"
                style={{ color: designTokens.colors.systemGray }}
              >
                평일
              </div>
              <div
                className="text-lg"
                style={{
                  color: designTokens.colors.neutral.black,
                  fontFamily: designTokens.typography.fontFamilies.body
                }}
              >
                09:00 - 19:00
              </div>
              <div
                className="text-sm mt-1"
                style={{ color: designTokens.colors.systemGray2 }}
              >
                점심시간 13:00 - 14:00
              </div>
            </div>

            <div>
              <div
                className="text-sm font-medium mb-2"
                style={{ color: designTokens.colors.systemGray }}
              >
                토요일
              </div>
              <div
                className="text-lg"
                style={{
                  color: designTokens.colors.neutral.black,
                  fontFamily: designTokens.typography.fontFamilies.body
                }}
              >
                09:00 - 14:00
              </div>
              <div
                className="text-sm mt-1"
                style={{ color: designTokens.colors.systemGray2 }}
              >
                점심시간 없음
              </div>
            </div>

            <div>
              <div
                className="text-sm font-medium mb-2"
                style={{ color: designTokens.colors.systemGray }}
              >
                일요일 및 공휴일
              </div>
              <div
                className="text-lg"
                style={{
                  color: designTokens.colors.systemRed,
                  fontFamily: designTokens.typography.fontFamilies.body
                }}
              >
                휴진
              </div>
              <div
                className="text-sm mt-1"
                style={{ color: designTokens.colors.systemGray2 }}
              >
                응급 진료만 가능
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t"
        style={{
          borderColor: designTokens.colors.systemGray5,
          backgroundColor: designTokens.colors.neutral.white
        }}
      >
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div
              className="text-sm"
              style={{
                color: designTokens.colors.systemGray2,
                fontFamily: designTokens.typography.fontFamilies.body
              }}
            >
              © 2024 BD 한의원. All rights reserved.
            </div>

            <div className="flex space-x-6">
              <Link
                href="/terms"
                className="text-sm transition-colors hover:text-blue-600"
                style={{
                  color: designTokens.colors.systemGray,
                  fontFamily: designTokens.typography.fontFamilies.body
                }}
              >
                이용약관
              </Link>
              <Link
                href="/privacy"
                className="text-sm transition-colors hover:text-blue-600"
                style={{
                  color: designTokens.colors.systemGray,
                  fontFamily: designTokens.typography.fontFamilies.body
                }}
              >
                개인정보처리방침
              </Link>
              <Link
                href="/sitemap"
                className="text-sm transition-colors hover:text-blue-600"
                style={{
                  color: designTokens.colors.systemGray,
                  fontFamily: designTokens.typography.fontFamilies.body
                }}
              >
                사이트맵
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};