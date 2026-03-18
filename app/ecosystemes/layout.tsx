import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Écosystème Domotus — L'Intelligence Unifiée | Domotique Casablanca Maroc",
  description:
    "Découvrez Domotus OS : l'écosystème domotique intelligent qui unifie sécurité, énergie et confort. Solutions intégrées KNX, Matter pour maisons intelligentes haut de gamme au Maroc.",
  keywords: "écosystème domotique Maroc, maison intelligente Casablanca, Domotus OS, KNX Matter, système domotique intégré, domotique haut de gamme",
  alternates: { canonical: "https://www.domotus.ma/ecosystemes" },
  openGraph: {
    title: "Écosystème Domotus — L'Intelligence Unifiée",
    description: "Domotus OS : le cerveau de votre maison intelligente",
    url: "https://www.domotus.ma/ecosystemes",
    type: "website",
  },
};

export default function EcosystemesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
