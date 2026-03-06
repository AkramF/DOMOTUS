/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    qualities: [75, 80, 85],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thoughtful-amusement-037aae48eb.media.strapiapp.com',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  productionBrowserSourceMaps: false,
  async redirects() {
    return [
      // ── URLs anciennes avec liens externes (CONSERVER) ──
      // /villas-apparts avait potentiellement des liens, consolidation logique
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
      
      // ── URLs renommées intentionnellement (CONSERVER) ──
      // Blog : potentiellement linée externement
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
      
      // ── SUPPRIMÉ : Typos/variantes orphelines (jamais linées) ──
      // Commenté pour éviter crawl budget inutile
      // - /contact-us → /contact (typo)
      // - /expertise → /expertises (typo)
      // - /technologie → /technologies (typo)
      // - /solutions → /expertises (typo)
      // - /maison_connectee → /maison-connectee (underscore)
      // - /projets-division → /division-projets (slug)
      // - /about → /vision (slug anglais)
      // - /a-propos → /vision (ancien slug)
      // - /simulateur → /espace-client (renommage interne)
      // - /client → /espace-client (ancien slug)
      //
      // 💡 Conseil : Si des backlinks pointent vers ces URLs (vérifier Google Search Console),
      //    les rajouter. Sinon, les garder commentés pour préserver le crawl budget.
    ];
  },
}

export default nextConfig
