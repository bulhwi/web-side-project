import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: '**',
      },
    ],
  },
  // tailwind-template 디렉토리 제외
  transpilePackages: [],
  webpack: (config) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/tailwind-template/**', '**/tailwind-plus-studio/**'],
    };
    return config;
  },
};

export default nextConfig;
