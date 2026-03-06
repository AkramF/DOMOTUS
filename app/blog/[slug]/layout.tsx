import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Article — Blog Domotique | Domotus',
  description:
    'Lire cet article sur la domotique, les protocoles intelligents et les solutions smart home au Maroc.',
  alternates: { canonical: 'https://www.domotus.ma/blog' },
  openGraph: {
    title: 'Article — Blog Domotique | Domotus',
    description: 'Découvrez nos articles sur la domotique et les maisons intelligentes au Maroc.',
    url: 'https://www.domotus.ma/blog',
    images: [
      {
        url: 'https://www.domotus.ma/images/og-domotus.jpg',
        width: 1200,
        height: 630,
        alt: 'Blog Domotus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Article — Blog Domotique | Domotus',
    description: 'Découvrez nos articles sur la domotique et les maisons intelligentes au Maroc.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
