'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue, useReducedMotion } from 'framer-motion';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down';
  backgroundImage?: string;
  overlay?: boolean;
  overlayOpacity?: number;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  className = '',
  speed = 0.5,
  direction = 'up',
  backgroundImage,
  overlay = false,
  overlayOpacity = 0.4
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion
      ? ['0%', '0%']
      : direction === 'up' ? ['0%', `-${speed * 100}%`] : ['0%', `${speed * 100}%`]
  );

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {backgroundImage && (
        <motion.div
          className="absolute inset-0 w-full h-[120%]"
          style={{ y }}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          {overlay && (
            <div
              className="absolute inset-0 bg-black"
              style={{ opacity: overlayOpacity }}
            />
          )}
        </motion.div>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

interface ScrollProgressBarProps {
  className?: string;
}

export const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({
  className = ''
}) => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform-gpu z-50 ${className}`}
      style={{
        scaleX: scrollYProgress,
        transformOrigin: '0%'
      }}
    />
  );
};

interface StickyScrollSectionProps {
  children: React.ReactElement<{ scrollYProgress?: MotionValue<number> }>;
  className?: string;
  height?: string;
}

export const StickyScrollSection: React.FC<StickyScrollSectionProps> = ({
  children,
  className = '',
  height = '300vh'
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end']
  });

  return (
    <div ref={targetRef} className={className} style={{ height }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {React.cloneElement(children, { scrollYProgress } as any)}
      </div>
    </div>
  );
};

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  scrollYProgress: MotionValue<number>;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt,
  className = '',
  scrollYProgress
}) => {
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1.5]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      className={`absolute inset-0 flex items-center justify-center ${className}`}
      style={{ opacity }}
    >
      <motion.img
        src={src}
        alt={alt}
        className="max-w-md max-h-md object-contain"
        style={{ scale, rotate }}
      />
    </motion.div>
  );
};

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  scrollYProgress: MotionValue<number>;
  start?: number;
  end?: number;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  children,
  className = '',
  scrollYProgress,
  start = 0,
  end = 1
}) => {
  const opacity = useTransform(scrollYProgress, [start, start + 0.2, end - 0.2, end], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [start, end], [100, -100]);

  return (
    <motion.div
      className={`absolute inset-0 flex items-center justify-center ${className}`}
      style={{ opacity, y }}
    >
      {children}
    </motion.div>
  );
};

interface ZoomParallaxProps {
  images: string[];
  className?: string;
}

export const ZoomParallax: React.FC<ZoomParallaxProps> = ({
  images,
  className = ''
}) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const scales = [scale4, scale5, scale6, scale8, scale9];

  return (
    <div ref={container} className={`relative h-[300vh] ${className}`}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {images.map((src, index) => (
          <motion.div
            key={index}
            style={{ scale: scales[index] || scale4 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div
              className="relative w-[25vw] h-[25vh] bg-cover bg-center rounded-2xl"
              style={{
                backgroundImage: `url(${src})`,
                top: `${index * 15}%`,
                left: `${index * 10}%`
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};