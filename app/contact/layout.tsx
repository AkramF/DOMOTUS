import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";

export const metadata: Metadata = {
  title: "Contact | Domotus",
  description: "Contactez Domotus pour votre projet domotique. Expert en maison intelligente certifiée KNX, Crestron, Lutron.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar variant="contact" />
      <main id="main-content">{children}</main>
    </>
  );
}
