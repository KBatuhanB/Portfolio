/** @type {import('next').NextConfig} */
const nextConfig = {
  // React strict mode - development sırasında potential problemleri yakalar
  reactStrictMode: true,
  
  // SWC minification - daha hızlı build
  swcMinify: true,
  
  // Performans optimizasyonu
  poweredByHeader: false,
  
  // Image optimization ayarları
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  
  // i18n desteği için hazırlık (gelecekte gerekirse)
  // i18n: {
  //   locales: ['tr', 'en'],
  //   defaultLocale: 'tr',
  // },
}

module.exports = nextConfig
