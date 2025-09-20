'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Zap, Shield, Star, Check } from 'lucide-react';

interface ProductFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  images: string[];
  features: ProductFeature[];
  price?: string;
  specs: { label: string; value: string }[];
}

interface ProductShowcaseProps {
  products: Product[];
  className?: string;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  products,
  className = ''
}) => {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFeatureExpanded, setIsFeatureExpanded] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  const currentProduct = products[selectedProduct];

  const nextProduct = () => {
    setSelectedProduct((prev) => (prev + 1) % products.length);
    setSelectedImage(0);
    setIsFeatureExpanded(false);
  };

  const prevProduct = () => {
    setSelectedProduct((prev) => (prev - 1 + products.length) % products.length);
    setSelectedImage(0);
    setIsFeatureExpanded(false);
  };

  return (
    <div ref={containerRef} className={`relative min-h-screen ${className}`}>
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Product Image & 3D Effect */}
          <div className="relative">
            <motion.div
              className="relative w-full max-w-lg mx-auto"
              style={{ scale, rotateY }}
            >
              {/* Main Product Image */}
              <motion.div
                className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${selectedProduct}-${selectedImage}`}
                    src={currentProduct.images[selectedImage]}
                    alt={currentProduct.name}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>

                {/* Image Navigation Dots */}
                {currentProduct.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {currentProduct.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === selectedImage
                            ? 'bg-white scale-125'
                            : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </motion.div>

              {/* Product Navigation */}
              <div className="absolute top-1/2 -left-16 transform -translate-y-1/2">
                <button
                  onClick={prevProduct}
                  className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              <div className="absolute top-1/2 -right-16 transform -translate-y-1/2">
                <button
                  onClick={nextProduct}
                  className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Floating Feature Card */}
              <AnimatePresence>
                {isFeatureExpanded && (
                  <motion.div
                    className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 max-w-xs"
                    initial={{ opacity: 0, scale: 0, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Zap className="w-4 h-4 text-blue-500" />
                      </div>
                      <h4 className="font-semibold text-gray-800">첨단 기술</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      최신 디지털 기술로 정밀하고 안전한 치료를 제공합니다.
                    </p>
                    <button
                      onClick={() => setIsFeatureExpanded(false)}
                      className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                    >
                      ✕
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Interactive Hotspots */}
            <div className="absolute top-1/4 left-1/4">
              <motion.button
                className="w-6 h-6 bg-blue-500 rounded-full shadow-lg flex items-center justify-center"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsFeatureExpanded(!isFeatureExpanded)}
              >
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </motion.button>
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProduct}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Product Header */}
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                    {currentProduct.category}
                  </span>

                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    {currentProduct.name}
                  </h2>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    {currentProduct.description}
                  </p>

                  {currentProduct.price && (
                    <div className="text-2xl font-bold text-blue-600">
                      {currentProduct.price}
                    </div>
                  )}
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentProduct.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="text-blue-500">
                          {feature.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Specifications */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-800">주요 특징</h3>
                  <div className="space-y-2">
                    {currentProduct.specs.map((spec, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">{spec.label}</span>
                        <span className="font-medium text-gray-800">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                    <span>상담 신청</span>
                  </button>
                  <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-gray-400 transition-colors">
                    자세히 보기
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Product Indicator */}
        <div className="flex justify-center mt-16 space-x-3">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedProduct(index);
                setSelectedImage(0);
                setIsFeatureExpanded(false);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === selectedProduct
                  ? 'bg-blue-500 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// 3D 카드 효과가 있는 간단한 제품 쇼케이스
interface Product3DCardProps {
  product: Product;
  index: number;
  className?: string;
}

export const Product3DCard: React.FC<Product3DCardProps> = ({
  product,
  index,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${className}`}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ perspective: '1000px' }}
    >
      {/* Image */}
      <div className="aspect-square overflow-hidden">
        <motion.img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="inline-block px-2 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full mb-2">
          {product.category}
        </span>

        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {product.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Features */}
        <div className="space-y-2 mb-4">
          {product.features.slice(0, 2).map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-center space-x-2 text-sm">
              <Check className="w-4 h-4 text-green-500" />
              <span className="text-gray-600">{feature.title}</span>
            </div>
          ))}
        </div>

        {product.price && (
          <div className="text-lg font-bold text-blue-600 mb-4">
            {product.price}
          </div>
        )}

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          자세히 보기
        </button>
      </div>

      {/* Hover Effect Overlay */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-blue-600 bg-opacity-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};