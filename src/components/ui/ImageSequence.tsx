'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ImageSequenceProps {
  images: string[];
  className?: string;
  height?: string;
  speed?: number;
  direction?: 'forward' | 'reverse';
}

export const ImageSequence: React.FC<ImageSequenceProps> = ({
  images,
  className = '',
  height = '200vh',
  speed = 1,
  direction = 'forward'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loadedImages, setLoadedImages] = useState<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // 이미지 로딩
  useEffect(() => {
    const imagePromises = images.map((src) => {
      return new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
      });
    });

    Promise.all(imagePromises)
      .then((imgs) => {
        setLoadedImages(imgs);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('이미지 로딩 실패:', error);
        setIsLoading(false);
      });
  }, [images]);

  // 스크롤에 따른 이미지 인덱스 계산
  const imageIndex = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'forward'
      ? [0, images.length - 1]
      : [images.length - 1, 0]
  );

  // 캔버스에 이미지 그리기
  useEffect(() => {
    if (!canvasRef.current || loadedImages.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const unsubscribe = imageIndex.on('change', (latest) => {
      const index = Math.min(Math.max(Math.round(latest), 0), loadedImages.length - 1);
      const img = loadedImages[index];

      if (img) {
        // 캔버스 크기 설정
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        // 이미지 비율 유지하며 캔버스에 맞게 그리기
        const canvasRatio = canvas.width / canvas.height;
        const imageRatio = img.width / img.height;

        let drawWidth = canvas.width;
        let drawHeight = canvas.height;
        let offsetX = 0;
        let offsetY = 0;

        if (imageRatio > canvasRatio) {
          drawWidth = canvas.height * imageRatio;
          offsetX = (canvas.width - drawWidth) / 2;
        } else {
          drawHeight = canvas.width / imageRatio;
          offsetY = (canvas.height - drawHeight) / 2;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    });

    return () => unsubscribe();
  }, [imageIndex, loadedImages]);

  if (isLoading) {
    return (
      <div
        ref={containerRef}
        className={`relative ${className}`}
        style={{ height }}
      >
        <div className="sticky top-0 w-full h-screen flex items-center justify-center bg-gray-100">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ height }}
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-contain"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
};

interface ProgressiveImageLoadProps {
  baseName: string;
  totalFrames: number;
  extension?: string;
  className?: string;
  height?: string;
}

export const ProgressiveImageLoad: React.FC<ProgressiveImageLoadProps> = ({
  baseName,
  totalFrames,
  extension = 'jpg',
  className = '',
  height = '200vh'
}) => {
  // 이미지 URL 생성 (예: frame-001.jpg, frame-002.jpg...)
  const images = Array.from({ length: totalFrames }, (_, i) => {
    const frameNumber = (i + 1).toString().padStart(3, '0');
    return `/images/sequences/${baseName}/frame-${frameNumber}.${extension}`;
  });

  return (
    <ImageSequence
      images={images}
      className={className}
      height={height}
    />
  );
};

interface SmoothImageTransitionProps {
  images: string[];
  className?: string;
  transitionDuration?: number;
}

export const SmoothImageTransition: React.FC<SmoothImageTransitionProps> = ({
  images,
  className = '',
  transitionDuration = 0.5
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const imageIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, images.length - 1]
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = imageIndex.on('change', (latest) => {
      const index = Math.min(Math.max(Math.round(latest), 0), images.length - 1);
      setCurrentIndex(index);
    });

    return () => unsubscribe();
  }, [imageIndex, images.length]);

  return (
    <div ref={containerRef} className={`relative h-[200vh] ${className}`}>
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`이미지 ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentIndex ? 1 : 0
            }}
            transition={{ duration: transitionDuration }}
          />
        ))}
      </div>
    </div>
  );
};

// Apple 스타일 제품 회전 효과
interface ProductRotationProps {
  images: string[];
  className?: string;
  rotationSpeed?: number;
}

export const ProductRotation: React.FC<ProductRotationProps> = ({
  images,
  className = '',
  rotationSpeed = 1
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });

  const rotateY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 360 * rotationSpeed]
  );

  const imageIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, images.length - 1]
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = imageIndex.on('change', (latest) => {
      const index = Math.min(Math.max(Math.round(latest), 0), images.length - 1);
      setCurrentIndex(index);
    });

    return () => unsubscribe();
  }, [imageIndex, images.length]);

  return (
    <div ref={containerRef} className={`relative h-[150vh] ${className}`}>
      <div className="sticky top-0 w-full h-screen flex items-center justify-center">
        <motion.div
          className="relative w-80 h-80"
          style={{ rotateY }}
        >
          <img
            src={images[currentIndex]}
            alt="회전하는 제품"
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
};