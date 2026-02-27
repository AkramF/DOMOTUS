/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  async redirects() {
    return [
      {
        source: '/villas-apparts',
        destination: '/maison-connectee',
        permanent: true, // 301 redirect
      },
      {
        source: '/villas-apparts/:path*',
        destination: '/maison-connectee/:path*',
        permanent: true,
      },
    ];
  },
}

export default nextConfig
