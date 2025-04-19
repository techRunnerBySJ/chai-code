/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['assets.aceternity.com'], // Add your image domains here
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  // Enable React strict mode for better development practices
  reactStrictMode: true,
  // Enable SWC minification for better performance
  swcMinify: true,
  // Enable compression
  compress: true,
  // Optimize fonts
  optimizeFonts: true,
  // Enable progressive image loading
  experimental: {
    optimizeImages: true,
    optimizeCss: true,
  },
}

module.exports = nextConfig 