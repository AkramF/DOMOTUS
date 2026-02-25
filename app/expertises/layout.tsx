import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Expertises Domotique — KNX, Zigbee, Matter, Ubiquiti | Domotus Maroc",
  description:
    "Domotus maîtrise KNX, Zigbee, Matter, Wi-Fi 6E et Z-Wave. Partenaires certifiés Ubiquiti, Lutron, Aqara, Govee, Somfy au Maroc. Casablanca, Marrakech, Rabat.",
  alternates: { canonical: "https://www.domotus.ma/expertises" },
  openGraph: {
    title: "Expertises Domotique KNX, Zigbee, Matter au Maroc — Domotus",
    description:
      "Intégrateur certifié KNX, Ubiquiti Elite, Lutron, Aqara. Tous les protocoles maîtrisés pour votre installation domotique au Maroc.",
    url: "https://www.domotus.ma/expertises",
  },
};

export default function ExpertisesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
