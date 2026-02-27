/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
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
