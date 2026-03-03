import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/section-label";

export const metadata: Metadata = {
  title: "Notre Vision — Habitat Intelligent | Domotus Maroc",
  description:
    "Notre vision : habitat intelligent et accessible. 18 ans d'expertise pour qualité de vie. Architecture, sécurité, efficacité énergétique.",
  alternates: { canonical: "https://www.domotus.ma/vision" },
  openGraph: {
    title: "Vision — Habitat Intelligent | Domotus",
    description: "Transformer l'habitat en écosystème intelligent et évolutif.",
    url: "https://www.domotus.ma/vision",
    images: [
      {
        url: "https://www.domotus.ma/images/og-domotus.jpg",
        width: 1200,
        height: 630,
        alt: "Domotus - Vision habitat intelligent",
      },
    ],
  },
};

const valeurs = [
  { title: "Intelligence Invisible", desc: "La technologie ne doit jamais se montrer. Elle s'intègre à l'architecture, elle disparaît." },
  { title: "Accessibilité Durable", desc: "Des solutions pérennes, indépendantes de tout fabricant, garanties 10 ans minimum." },
  { title: "Accompagnement Humain", desc: "Aucun client ne doit sentir seul face à sa technologie. Support continu et formation complète." },
  { title: "Impact Environnemental", desc: "Réduction énergétique mesurable. Chaque installation contribue à un bâtiment plus responsable." },
];

export default function VisionPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* ── HERO ── */}
      <section className="py-32 lg:py-40" aria-labelledby="hero-heading">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <p className="text-[12px] uppercase tracking-[0.3em] text-primary font-medium mb-8">
            Notre philosophie
          </p>
          <h1
            id="hero-heading"
            className="font-black uppercase leading-none text-foreground text-balance mb-8"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", letterSpacing: "-0.03em" }}
          >
            L&apos;habitat intelligent<br />
            <span className="italic text-foreground/50">est d'abord humain.</span>
          </h1>
          <p className="text-[16px] text-foreground/65 leading-relaxed max-w-2xl mb-12">
            Depuis 10 ans au Maroc, nous croyons que la domotique doit servir la qualité de vie, jamais la compliquer. Nos solutions s'effacent pour laisser place à l'expérience pure de vivre dans un espace qui vous comprend.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/maison-connectee" className="focus-ring inline-flex items-center justify-between bg-white px-8 py-4 rounded-full text-[14px] font-semibold text-black transition-all duration-300 hover:shadow-lg will-change-colors group">
              Découvrir Maison Connectée
              <div className="ml-4 w-10 h-10 bg-black rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                <ArrowRight size={16} className="text-[#efd555]" aria-hidden="true" />
              </div>
            </Link>
            <Link href="/contact" className="focus-ring inline-flex items-center justify-between px-8 py-4 rounded-full text-[14px] font-semibold text-white transition-all duration-300 hover:shadow-lg will-change-colors group" style={{ backgroundColor: "#000000", border: "2px solid #efd555" }}>
              Prenez contact
              <div className="ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110" style={{ backgroundColor: "#efd555" }}>
                <ArrowRight size={16} className="text-black" aria-hidden="true" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── NOS VALEURS ── */}
      <section className="py-28 lg:py-36 bg-card" aria-labelledby="valeurs-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <SectionLabel>Ce qui nous guide</SectionLabel>
            <h2
              id="valeurs-heading"
              className="font-black uppercase leading-none text-foreground text-balance"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}
            >
              Les quatre piliers<br />
              <span className="italic text-foreground/45">de Domotus.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {valeurs.map((v) => (
              <div key={v.title} className="bg-background p-8 rounded">
                <h3 className="font-black uppercase text-foreground text-[13px] mb-3">{v.title}</h3>
                <p className="text-foreground/60 text-[14px] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── L'IMPACT ── */}
      <section className="py-28 lg:py-36 bg-background" aria-labelledby="impact-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <SectionLabel>Notre engagement</SectionLabel>
            <h2
              id="impact-heading"
              className="font-black uppercase leading-none text-foreground text-balance"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}
            >
              Plus qu'une expertise,<br />
              <span className="italic text-foreground/45">une responsabilité.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "10 Ans", stat: "D'expertise au Maroc" },
              { label: "+150", stat: "Projets livrés avec succès" },
              { label: "22%", stat: "Réduction moyenne de consommation" },
            ].map((item) => (
              <div key={item.label} className="bg-card p-8 rounded text-center">
                <div className="text-[3rem] font-black text-primary/20 mb-2">{item.label}</div>
                <p className="text-foreground/60 text-[14px]">{item.stat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-28 bg-background text-center" aria-label="Appel à l'action final">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <h2
            className="font-black uppercase leading-none text-foreground text-balance mb-10"
            style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", letterSpacing: "-0.03em" }}
          >
            Prêt à vivre<br />
            <span className="italic text-foreground/50">différemment ?</span>
          </h2>
            <Link href="/maison-connectee" className="focus-ring inline-flex items-center justify-between bg-white px-10 py-5 rounded-full text-[14px] font-semibold text-black transition-all duration-300 hover:shadow-lg will-change-colors group">
              Démarrer
              <div className="ml-4 w-10 h-10 bg-black rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                <ArrowRight size={16} className="text-[#efd555]" aria-hidden="true" />
              </div>
            </Link>
        </div>
      </section>
    </main>
  );
}
