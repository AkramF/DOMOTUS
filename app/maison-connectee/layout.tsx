import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maison Intuitive & Connectée — Domotique de Luxe au Maroc",
  description:
    "Maison intuitive & connectée. L'intelligence au service de votre confort. Expertise certifiée multi-protocoles (KNX, Crestron, Lutron) pour villas et appartements de prestige au Maroc.",
  alternates: { canonical: "https://www.domotus.ma/maison-connectee" },
  openGraph: {
    title: "Maison Intuitive & Connectée — Domotique Premium au Maroc — Domotus",
    description:
      "Intégration domotique multi-protocoles pour villas et appartements haut de gamme. Confort, sécurité, énergie optimisée.",
    url: "https://www.domotus.ma/maison-connectee",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
