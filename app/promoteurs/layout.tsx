import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Domotique pour Promoteurs Immobiliers au Maroc",
  description:
    "Domotus accompagne les promoteurs immobiliers au Maroc dans l'intégration de systèmes domotiques KNX certifiés. Augmentez la valeur de vos programmes et obtenez les labels HQE, BREEAM.",
  alternates: { canonical: "https://www.domotus.ma/promoteurs" },
  openGraph: {
    title: "Domotique Promoteurs Immobiliers au Maroc — Domotus",
    description:
      "Intégrateur domotique KNX pour programmes immobiliers au Maroc. Labels HQE, BREEAM, valeur différenciante.",
    url: "https://www.domotus.ma/promoteurs",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
