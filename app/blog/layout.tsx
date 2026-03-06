import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Domotique — Guides KNX, Crestron | Domotus Maroc",
  description:
    "Blog domotique : guides multi-protocoles, projets, actualités. KNX, Crestron, Lutron, tendances smart home au Maroc.",
  alternates: { canonical: "https://www.domotus.ma/blog" },
  openGraph: {
    title: "Blog — Actualités Domotique | Domotus",
    description: "Guides, études de cas, tendances domotique.",
    url: "https://www.domotus.ma/blog",
    images: [
      {
        url: "https://www.domotus.ma/images/og-domotus.jpg",
        width: 1200,
        height: 630,
        alt: "Blog Domotus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Domotique Maroc | Domotus",
    description: "Guides multi-protocoles, retours projets et actualités domotique au Maroc.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ── Schema.org BlogPosting list ──────────────────────────────────────────────
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog Domotus — Domotique premium au Maroc",
    description:
      "Guides, retours de projets et actualités domotique par Domotus, intégrateur certifié multi-protocoles au Maroc.",
    url: "https://www.domotus.ma/blog",
    publisher: {
      "@type": "Organization",
      name: "Domotus",
      url: "https://www.domotus.ma",
      logo: { "@type": "ImageObject", url: "https://www.domotus.ma/images/hero-bg.jpg" },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      {children}
    </>
  );
}
