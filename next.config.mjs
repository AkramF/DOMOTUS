/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    qualities: [75, 80, 85],
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  productionBrowserSourceMaps: false,
  async redirects() {
    return [
      // Ancien URL de villas/apparts
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
      // Variantes d'URLs cassées communes
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/expertise/:path*',
        destination: '/expertises/:path*',
        permanent: true,
      },
      {
        source: '/technologie/:path*',
        destination: '/technologies/:path*',
        permanent: true,
      },
      {
        source: '/solutions/:path*',
        destination: '/expertises/:path*',
        permanent: true,
      },
      // Anciennes variantes avec tirets/underscores
      {
        source: '/maison_connectee',
        destination: '/maison-connectee',
        permanent: true,
      },
      {
        source: '/projets-division',
        destination: '/division-projets',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/vision',
        permanent: true,
      },
      {
        source: '/a-propos',
        destination: '/vision',
        permanent: true,
      },
      // Anciennes URLs renommées
      {
        source: '/journal',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/journal/:path*',
        destination: '/blog/:path*',
        permanent: true,
      },
      {
        source: '/simulateur',
        destination: '/espace-client',
        permanent: true,
      },
      {
        source: '/client',
        destination: '/espace-client',
        permanent: true,
      },
    ];
  },
}

export default nextConfig
