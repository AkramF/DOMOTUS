/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
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
        permanent: true,
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
