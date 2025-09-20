'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { designTokens } from '@/theme/designTokens';

const navigationItems = [
  { label: '한의원소개', href: '/' },
  {
    label: '진료과목',
    href: '/services',
    subItems: [
      { label: '침구치료', href: '/services/acupuncture' },
      { label: '한약처방', href: '/services/herbal' },
      { label: '추나요법', href: '/services/chuna' },
      { label: '체질진단', href: '/services/constitution' },
    ]
  },
  { label: '커뮤니티', href: '/community' },
  { label: '진료안내', href: '/contact' },
];

export const AppleHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSubmenuToggle = (label: string) => {
    setActiveSubmenu(activeSubmenu === label ? null : label);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-xl shadow-sm' : 'backdrop-blur-sm'
      }`}
      style={{
        zIndex: 9999,
        backgroundColor: isScrolled
          ? `${designTokens.colors.systemBackground}F8`
          : 'rgba(0, 0, 0, 0.3)',
        borderBottom: isScrolled
          ? `1px solid ${designTokens.colors.systemGray5}`
          : 'none'
      }}
    >
      {/* Main Navigation */}
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div
              className="text-2xl font-bold tracking-tight"
              style={{
                color: isScrolled ? designTokens.colors.neutral.black : designTokens.colors.neutral.white,
                fontFamily: designTokens.typography.fontFamilies.heading,
                fontWeight: designTokens.typography.fontWeights.bold,
                textShadow: !isScrolled ? '0 2px 4px rgba(0, 0, 0, 0.4)' : 'none'
              }}
            >
              BD 한의원
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="font-medium transition-all duration-200 hover:opacity-80"
                  style={{
                    color: isScrolled ? designTokens.colors.neutral.black : designTokens.colors.neutral.white,
                    fontFamily: designTokens.typography.fontFamilies.body,
                    fontWeight: designTokens.typography.fontWeights.medium,
                    fontSize: designTokens.typography.fontSizes.base,
                    textShadow: !isScrolled ? '0 1px 2px rgba(0, 0, 0, 0.3)' : 'none'
                  }}
                >
                  {item.label}
                </Link>

                {/* Dropdown Menu */}
                {item.subItems && (
                  <div
                    className="absolute top-full left-0 mt-3 w-48 rounded-2xl shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                    style={{
                      backgroundColor: designTokens.colors.systemBackground,
                      borderColor: designTokens.colors.systemGray5,
                      boxShadow: designTokens.shadows.xl
                    }}
                  >
                    <div className="py-3">
                      {item.subItems.map((subItem, index) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-3 text-sm transition-all duration-200 hover:opacity-70"
                          style={{
                            color: designTokens.colors.neutral.black,
                            fontFamily: designTokens.typography.fontFamilies.body,
                            fontWeight: designTokens.typography.fontWeights.normal
                          }}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Call to Action */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              className="px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                backgroundColor: designTokens.colors.systemBlue,
                color: designTokens.colors.neutral.white,
                fontFamily: designTokens.typography.fontFamilies.body,
                fontWeight: designTokens.typography.fontWeights.semibold,
                fontSize: designTokens.typography.fontSizes.sm,
                boxShadow: !isScrolled ? '0 2px 8px rgba(0, 0, 0, 0.2)' : '0 1px 3px rgba(0, 0, 0, 0.1)'
              }}
            >
              예약하기
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 transition-all duration-200 rounded-lg hover:bg-white hover:bg-opacity-10"
            aria-label="메뉴 열기"
            style={{
              color: isScrolled ? designTokens.colors.neutral.black : designTokens.colors.neutral.white,
              textShadow: !isScrolled ? '0 1px 2px rgba(0, 0, 0, 0.3)' : 'none'
            }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden border-t backdrop-blur-xl"
          style={{
            backgroundColor: `${designTokens.colors.systemBackground}F8`,
            borderColor: designTokens.colors.systemGray5
          }}
        >
          <nav className="container mx-auto px-6 py-6">
            {navigationItems.map((item) => (
              <div key={item.label}>
                <div className="flex justify-between items-center py-4">
                  <Link
                    href={item.href}
                    className="font-medium text-lg"
                    style={{
                      color: designTokens.colors.neutral.black,
                      fontFamily: designTokens.typography.fontFamilies.body,
                      fontWeight: designTokens.typography.fontWeights.medium
                    }}
                    onClick={() => !item.subItems && setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.subItems && (
                    <button
                      onClick={() => handleSubmenuToggle(item.label)}
                      style={{ color: designTokens.colors.systemGray }}
                    >
                      {activeSubmenu === item.label ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                  )}
                </div>

                {/* Mobile Submenu */}
                {item.subItems && activeSubmenu === item.label && (
                  <div className="pl-6 pb-4 space-y-3">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block py-2"
                        style={{
                          color: designTokens.colors.systemGray,
                          fontFamily: designTokens.typography.fontFamilies.body,
                          fontWeight: designTokens.typography.fontWeights.normal
                        }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            <div className="mt-8 space-y-4">
              <button
                className="w-full py-4 rounded-2xl font-semibold"
                style={{
                  backgroundColor: designTokens.colors.systemBlue,
                  color: designTokens.colors.neutral.white,
                  fontFamily: designTokens.typography.fontFamilies.body,
                  fontWeight: designTokens.typography.fontWeights.semibold
                }}
              >
                온라인 예약
              </button>
              <button
                className="w-full py-4 rounded-2xl font-semibold border-2 flex items-center justify-center space-x-2"
                style={{
                  borderColor: designTokens.colors.systemBlue,
                  color: designTokens.colors.systemBlue,
                  fontFamily: designTokens.typography.fontFamilies.body,
                  fontWeight: designTokens.typography.fontWeights.semibold
                }}
              >
                <Phone className="w-5 h-5" />
                <span>02-123-4567</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};