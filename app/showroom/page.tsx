import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Clock, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Showroom Domotus — Visite KNX, Crestron, Lutron | Maroc",
  description:
    "Visitez le showroom Domotus : salons KNX, Crestron, Lutron grandeur nature. Démonstration en conditions réelles. Casablanca.",
  alternates: { canonical: "https://www.domotus.ma/showroom" },
  openGraph: {
    title: "Showroom Domotus — Visite Démo | Maroc",
    description: "Salons KNX, Crestron, Lutron. Démonstrations en direct.",
    url: "https://www.domotus.ma/showroom",
    images: [
      {
        url: "https://www.domotus.ma/images/showroom.webp",
        width: 1200,
        height: 630,
        alt: "Showroom Domotus",
      },
    ],
  },
};

const espaces = [
  { title: "Salon KNX", desc: "Découvrez la puissance du protocole KNX sur une installation résidentielle grandeur nature : éclairage, volets, climatisation, multi-room audio.", image: "/images/hero-bg.jpg" },
  { title: "Suite Crestron", desc: "Expérience complète Crestron Home — contrôle tactile, scènes d'ambiance, intégration AV et sécurité dans un espace de 80 m².", image: "/images/showroom.jpg" },
  { title: "Corner Lutron", desc: "La précision Lutron Homeworks en conditions réelles. Gradation, scènes circadiennes, compatibilité Matter et Apple Home.", image: "/images/villa-prestige.jpg" },
];

const infos = [
  { icon: MapPin, title: "Adresse", lines: ["Bd Abdelmoumen, Racine, Casablanca", "Route de l'Ourika, Km 5, Marrakech"] },
  { icon: Clock, title: "Horaires", lines: ["Lun–Ven : 9h–18h", "Sam : sur rendez-vous"] },
  { icon: Phone, title: "Réservation", lines: ["+212 5 22 00 00 00", "showroom@domotus.ma"] },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-5">
      <span className="block w-8 h-px bg-foreground/30" aria-hidden="true" />
      <p className="text-[11px] uppercase tracking-[0.3em] text-primary font-semibold">{children}</p>
    </div>
  );
}

export default function ShowroomPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative w-full h-[75vh] overflow-hidden" aria-label="Showroom domotique Casablanca Maroc">
        <Image src="/images/showroom.jpg" alt="Showroom domotique Domotus — Casablanca, Maroc" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-background/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-8 h-px bg-foreground/40" aria-hidden="true" />
            <p className="text-[11px] uppercase tracking-[0.35em] text-foreground/60">Casablanca — Marrakech</p>
            <span className="block w-8 h-px bg-foreground/40" aria-hidden="true" />
          </div>
          <h1
            className="font-black uppercase leading-none text-foreground text-balance"
            style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)", letterSpacing: "-0.03em" }}
          >
            Showroom
          </h1>
          <p className="mt-6 text-[15px] text-foreground/60 max-w-md text-balance leading-relaxed">
            Vivez l&apos;expérience domotique Domotus avant de l&apos;intégrer dans votre résidence au Maroc.
          </p>
        </div>
      </section>

      {/* ── ESPACES ── */}
      <section className="py-28 bg-background" aria-labelledby="espaces-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <SectionLabel>Espaces d&apos;exposition</SectionLabel>
            <h2
              id="espaces-heading"
              className="font-black uppercase leading-none text-foreground text-balance max-w-xl"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
            >
              Touchez,<br />
              <span className="italic text-foreground/50">testez, ressentez.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-px bg-white/8">
            {espaces.map((e, i) => (
              <div
                key={e.title}
                className="bg-background hover:bg-card transition-colors duration-300 grid md:grid-cols-2"
              >
                <div className="relative aspect-video md:aspect-auto overflow-hidden">
                  <Image
                    src={e.image}
                    alt={`${e.title} — ${e.desc.slice(0, 60)}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-background/40" />
                </div>
                <div className="p-10 flex flex-col justify-center">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-primary mb-4">
                    Espace 0{i + 1}
                  </p>
                  <p className="font-black uppercase text-foreground text-xl tracking-tight mb-4">{e.title}</p>
                  <p className="text-[14px] text-foreground/60 leading-relaxed mb-6">{e.desc}</p>
                  <Link
                    href="/contact"
                    className="focus-ring inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-primary/70 hover:text-primary transition-colors duration-300 group w-max"
                  >
                    Réserver une visite{" "}
                    <ArrowRight size={12} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INFOS PRATIQUES ── */}
      <section className="py-20 bg-card border-y border-white/8" aria-label="Informations pratiques showroom">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-px bg-white/8">
            {infos.map((info) => {
              const Icon = info.icon;
              return (
                <div key={info.title} className="bg-background p-8 flex flex-col gap-4">
                  <div className="w-10 h-10 border border-white/15 flex items-center justify-center text-primary">
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <p className="font-bold uppercase tracking-[0.1em] text-foreground text-sm">{info.title}</p>
                  {info.lines.map((l) => (
                    <p key={l} className="text-[13px] text-foreground/50">{l}</p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-background text-center">
        <div className="mx-auto max-w-lg px-6">
          <SectionLabel>Prendre rendez-vous</SectionLabel>
          <h2
            className="font-black uppercase leading-none text-foreground text-balance mb-8"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            Vivez l&apos;expérience<br />
            <span className="italic text-foreground/50">en personne.</span>
          </h2>
          <Link
            href="/contact"
            className="focus-ring inline-flex items-center gap-3 bg-foreground px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-background hover:opacity-80 transition-opacity group"
          >
            Réserver ma visite <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
