'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

interface VideoBackgroundProps {
  src?: string;
  poster?: string;
  children?: React.ReactNode;
  className?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  parallaxSpeed?: number;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({
  src,
  poster,
  children,
  className = '',
  overlay = true,
  overlayOpacity = 0.4,
  autoPlay = true,
  muted = true,
  loop = true,
  controls = false,
  parallaxSpeed = 0.5
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.5 });
  const [isPlaying, setIsPlaying] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`0%`, `-${parallaxSpeed * 100}%`]
  );

  // 비디오 플레이 제어
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView && autoPlay) {
      video.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, [isInView, autoPlay]);

  // 비디오가 없을 때 대체 배경 (Unsplash 비디오 스타일 이미지)
  const fallbackImage = poster || 'https://picsum.photos/1920/1080?random=videobg1';

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {src ? (
        <motion.video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ y }}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          controls={controls}
          poster={poster}
          playsInline
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      ) : (
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${fallbackImage})`,
            y
          }}
        />
      )}

      {overlay && (
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      )}

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

interface ScrollVideoProps {
  src?: string;
  poster?: string;
  className?: string;
  height?: string;
  playbackRate?: number;
}

export const ScrollVideo: React.FC<ScrollVideoProps> = ({
  src,
  poster,
  className = '',
  height = '200vh',
  playbackRate = 1
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // 스크롤에 따른 비디오 시간 제어
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const unsubscribe = scrollYProgress.on('change', (progress) => {
      if (video.duration) {
        video.currentTime = progress * video.duration * playbackRate;
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, playbackRate]);

  const fallbackImage = poster || 'https://picsum.photos/1920/1080?random=videobg2';

  return (
    <div ref={containerRef} className={`relative ${className}`} style={{ height }}>
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        {src ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            muted
            poster={poster}
            playsInline
          >
            <source src={src} type="video/mp4" />
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${fallbackImage})` }}
            />
          </video>
        ) : (
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${fallbackImage})` }}
          />
        )}
      </div>
    </div>
  );
};

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  title?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoSrc,
  title
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isOpen) {
      video.play();
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative bg-black rounded-lg overflow-hidden max-w-4xl w-full"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
            <h3 className="text-lg font-semibold">{title}</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
        )}

        <video
          ref={videoRef}
          className="w-full h-auto"
          controls
          autoPlay
          muted
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </motion.div>
  );
};

interface InteractiveVideoProps {
  src?: string;
  poster?: string;
  className?: string;
  overlayContent?: React.ReactNode;
  onVideoClick?: () => void;
}

export const InteractiveVideo: React.FC<InteractiveVideoProps> = ({
  src,
  poster,
  className = '',
  overlayContent,
  onVideoClick
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.log('Video play failed:', error);
      });
    }

    onVideoClick?.();
  };

  const fallbackImage = poster || 'https://picsum.photos/1920/1080?random=videobg3';

  return (
    <div
      className={`relative overflow-hidden cursor-pointer group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleVideoClick}
    >
      {src ? (
        <video
          ref={videoRef}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          muted
          loop
          poster={poster}
          playsInline
        >
          <source src={src} type="video/mp4" />
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${fallbackImage})` }}
          />
        </video>
      ) : (
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${fallbackImage})` }}
        />
      )}

      {/* Play Button Overlay */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered && !isPlaying ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
          <div className="w-0 h-0 border-l-8 border-r-0 border-t-6 border-b-6 border-transparent border-l-black ml-1"></div>
        </div>
      </motion.div>

      {/* Custom Overlay Content */}
      {overlayContent && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {overlayContent}
        </div>
      )}
    </div>
  );
};