import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Division Projets — B2B Smart Building | Domotus Maroc",
  description:
    "Solutions domotique B2B : architectes, promoteurs, hôtellerie, bureaux. KNX, BMS, efficience énergétique. Conformité CCTP.",
  keywords: "division projets, B2B domotique, KNX, BMS, smart building, Maroc",
  alternates: { canonical: "https://www.domotus.ma/division-projets" },
  openGraph: {
    title: "Division Projets — Smart Building B2B | Domotus",
    description: "Solutions B2B : architectes, promoteurs, hôtels, bureaux.",
    url: "https://www.domotus.ma/division-projets",
    type: "website",
  },
};

export default function DivisionProjetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
