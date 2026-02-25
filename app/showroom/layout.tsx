import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Showroom Domotique Maroc — Casablanca | Domotus",
  description:
    "Visitez le showroom Domotus à Casablanca et découvrez en conditions réelles nos installations KNX, Crestron et Lutron. Sur rendez-vous.",
  alternates: { canonical: "https://www.domotus.ma/showroom" },
  openGraph: {
    title: "Showroom Domotique Casablanca — Domotus",
    description:
      "Découvrez notre showroom domotique à Casablanca. Testez KNX, Crestron, Lutron en conditions réelles.",
    url: "https://www.domotus.ma/showroom",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
