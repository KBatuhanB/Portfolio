/** @type {import('next').NextConfig} */
const nextConfig = {
  // React strict mode - development sırasında potential problemleri yakalar
  reactStrictMode: true,
  
  // SWC minification - daha hızlı build
  swcMinify: true,
  
  // GitHub Pages deployment - static export
  output: 'export',
  
  // Base path for GitHub Pages subdirectory
  basePath: '/Portfolio',
  
  // Disable Image Optimization for static export
  images: {
    unoptimized: true,
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  
  // Performans optimizasyonu
  poweredByHeader: false,
  
  // i18n desteği için hazırlık (gelecekte gerekirse)
  // i18n: {
  //   locales: ['tr', 'en'],
  //   defaultLocale: 'tr',
  // },
}

module.exports = nextConfig
