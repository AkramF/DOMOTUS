import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maison Connectée — Domotique de Luxe au Maroc",
  description:
    "Domotus transforme votre maison en écosystème intelligent. Intégration KNX, Crestron et Lutron pour confort absolu, sécurité invisible et énergie maîtrisée. Casablanca, Marrakech, Rabat.",
  alternates: { canonical: "https://www.domotus.ma/villas-apparts" },
  openGraph: {
    title: "Maison Connectée — Domotique Premium au Maroc — Domotus",
    description:
      "Intégration domotique multi-protocoles pour villas et appartements haut de gamme. Confort, sécurité, énergie optimisée.",
    url: "https://www.domotus.ma/villas-apparts",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
