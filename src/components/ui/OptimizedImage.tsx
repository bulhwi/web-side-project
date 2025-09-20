'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Loader2 } from 'lucide-react';

interface OptimizedImageProps {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fallbackSrc?: string;
  unsplashQuery?: string;
  aspectRatio?: string;
  priority?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width = 800,
  height = 600,
  className = '',
  fallbackSrc,
  unsplashQuery,
  aspectRatio = 'aspect-[4/3]',
  priority = false
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Generate image URL with fallback
  const getImageSrc = () => {
    if (src) return src;
    if (unsplashQuery) {
      // Use placeholder service with medical theme
      return `https://picsum.photos/${width}/${height}?random=${unsplashQuery}`;
    }
    return fallbackSrc || `https://via.placeholder.com/${width}x${height}/e5e7eb/6b7280?text=BD+치과`;
  };

  const imageSrc = getImageSrc();

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={`relative overflow-hidden bg-gray-100 ${aspectRatio} ${className}`}>
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center text-gray-500">
            <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-2">
              <div className="w-8 h-8 bg-gray-300 rounded"></div>
            </div>
            <p className="text-sm">이미지를 불러올 수 없습니다</p>
          </div>
        </div>
      )}

      {/* Actual Image */}
      {!hasError && (
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className={`object-cover transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={handleLoadComplete}
          onError={handleError}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}
    </div>
  );
};