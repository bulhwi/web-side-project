'use client';

/**
 * ScrollReveal 컴포넌트 - 레거시 호환성 유지
 * 새로운 Studio 패턴(FadeIn)으로 내부 구현 전환
 */

import React from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { FadeIn as StudioFadeIn, FadeInStagger } from './FadeIn';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  distance?: number;
}

/**
 * @deprecated Use FadeIn from './FadeIn' instead
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.5,
  distance = 24
}) => {
  const shouldReduceMotion = useReducedMotion();

  const getInitialPosition = () => {
    if (shouldReduceMotion) return { y: 0, x: 0 };

    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { y: 0, x: distance };
      case 'right':
        return { y: 0, x: -distance };
      default:
        return { y: distance, x: 0 };
    }
  };

  const initialPosition = getInitialPosition();

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        ...initialPosition
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0
      }}
      viewport={{
        once: true,
        margin: '0px 0px -200px'
      }}
      transition={{
        duration,
        delay,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.div>
  );
};

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

/**
 * @deprecated Use FadeIn from './FadeIn' instead
 */
export const FadeIn: React.FC<FadeInProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.5
}) => {
  return (
    <StudioFadeIn className={className} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </StudioFadeIn>
  );
};

interface ScaleInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  scale?: number;
}

export const ScaleIn: React.FC<ScaleInProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  scale = 0.95
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : scale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '0px 0px -200px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

interface SlideInContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

/**
 * @deprecated Use FadeInStagger from './FadeIn' instead
 */
export const SlideInContainer: React.FC<SlideInContainerProps> = ({
  children,
  className = '',
  staggerDelay = 0.2
}) => {
  const faster = staggerDelay < 0.15;

  return (
    <FadeInStagger className={className} faster={faster}>
      {children}
    </FadeInStagger>
  );
};

interface SlideInItemProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

/**
 * @deprecated Use FadeIn from './FadeIn' instead (inside FadeInStagger)
 */
export const SlideInItem: React.FC<SlideInItemProps> = ({
  children,
  className = '',
  direction = 'up'
}) => {
  // FadeInStagger 안에서 사용되므로 Studio FadeIn 사용
  return (
    <StudioFadeIn className={className}>
      {children}
    </StudioFadeIn>
  );
};

interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export const Parallax: React.FC<ParallaxProps> = ({
  children,
  className = '',
  speed = 0.5
}) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -1000 * speed]);

  return (
    <motion.div
      className={className}
      style={{ y }}
    >
      {children}
    </motion.div>
  );
};
