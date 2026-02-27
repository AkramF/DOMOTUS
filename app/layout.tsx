import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import dynamic from "next/dynamic";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ScrollProgress from "@/components/sections/ScrollProgress";
import "./globals.css";

// Lazy load non-critical components to reduce render-blocking CSS
const StickyMobileCTA = dynamic(() => import("@/components/sections/StickyMobileCTA"), {
  loading: () => null,
  ssr: false,
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
  display: "swap",
});

const BASE_URL = "https://www.domotus.ma";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Domotus — Domotique Premium & Maison Intelligente au Maroc",
    template: "%s | Domotus Maroc",
  },
  description:
    "Domotus est l'intégrateur domotique de référence au Maroc pour les villas de luxe, appartements haut de gamme et bâtiments tertiaires. Certifié multi-protocoles : KNX, Crestron, Lutron, Legrand, Somfy. Casablanca, Marrakech, Rabat.",

  keywords: [
    "domotique Maroc",
    "domotique Casablanca",
    "domotique Marrakech",
    "maison intelligente Maroc",
    "smart home Maroc",
    "intégrateur domotique multi-protocoles Maroc",
    "domotique KNX Maroc",
    "Crestron Maroc",
    "Lutron Maroc",
    "automatisation villa Maroc",
    "domotique luxe Maroc",
    "maison connectée Maroc",
    "gestion éclairage intelligent",
    "sécurité maison connectée",
    "Domotus",
  ],

  authors: [{ name: "Domotus", url: BASE_URL }],
  creator: "Domotus",
  publisher: "Domotus",

  alternates: {
    canonical: BASE_URL,
    languages: { "fr-MA": BASE_URL },
  },

  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: BASE_URL,
    siteName: "Domotus",
    title: "Domotus — Domotique Premium & Maison Intelligente au Maroc",
    description:
      "Intégrateur domotique certifié KNX, Crestron & Lutron. Villas de luxe, appartements prestige et bâtiments tertiaires au Maroc.",
    images: [
      {
        url: "/images/og-domotus.jpg",
        width: 1200,
        height: 630,
        alt: "Domotus — Ingénierie de l'invisible au Maroc",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Domotus — Domotique Premium au Maroc",
    description:
      "Intégrateur domotique certifié KNX · Crestron · Lutron pour résidences de prestige et bâtiments tertiaires au Maroc.",
    images: ["/images/og-domotus.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.jpg", type: "image/jpeg" },
    ],
    shortcut: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
  verification: {
    google: "google-site-verification-placeholder",
  },

  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="dark">
      <head>
        {/* Preload critical images without blocking render */}
        <link rel="preload" as="image" href="/images/hero-bg.webp" fetchPriority="high" />
        
        {/* Preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data — LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": BASE_URL,
              name: "Domotus",
              description:
                "Intégrateur domotique premium au Maroc. Spécialiste KNX, Crestron, Lutron pour villas de luxe et bâtiments tertiaires.",
              url: BASE_URL,
              logo: `${BASE_URL}/images/logo-domotus.png`,
              image: `${BASE_URL}/images/og-domotus.jpg`,
              telephone: "+212-XXX-XXXXXX",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Casablanca",
                addressLocality: "Casablanca",
                addressRegion: "Grand Casablanca-Settat",
                postalCode: "20000",
                addressCountry: "MA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 33.5731,
                longitude: -7.5898,
              },
              areaServed: [
                { "@type": "City", name: "Casablanca" },
                { "@type": "City", name: "Marrakech" },
                { "@type": "City", name: "Rabat" },
                { "@type": "City", name: "Tanger" },
              ],
              serviceType: [
                "Domotique Multi-Protocoles",
                "Intégration KNX",
                "Intégration Crestron",
                "Automatisation Lutron",
                "Maison Intelligente",
                "Bâtiment Tertiaire Intelligent",
              ],
              priceRange: "MMMM",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
              sameAs: [
                "https://www.instagram.com/domotus.ma/",
                "https://www.linkedin.com/company/domotusmaroc/",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} font-sans antialiased overflow-x-hidden`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-background focus:rounded"
        >
          Aller au contenu principal
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyMobileCTA />
        <Analytics />
      </body>
    </html>
  );
}
