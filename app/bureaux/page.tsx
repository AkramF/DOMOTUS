import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import SectionLabel from "@/components/ui/section-label";

export const metadata: Metadata = {
  title: "Solutions Domotique pour Bureaux & Tertiaire — Efficience & Confort Collaborateurs | Domotus",
  description: "Optimisez vos espaces de travail avec la domotique intelligente. Gestion énergétique, confort collaborateurs, productivité accrue. KNX certifié, BMS intégré au Maroc.",
  alternates: { canonical: "https://www.domotus.ma/bureaux" },
};

export default function BureauxPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* ── HERO ── */}
      <section className="py-32 lg:py-40" aria-labelledby="hero-heading">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <p className="text-[12px] uppercase tracking-[0.3em] text-primary font-medium mb-8">
            Immeubles de bureaux, espaces tertiaires
          </p>
          <h1
            id="hero-heading"
            className="font-black uppercase leading-none text-foreground text-balance mb-8"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", letterSpacing: "-0.03em" }}
          >
            Des bureaux intelligents<br />
            <span className="italic text-foreground/50">pour des collaborateurs productifs.</span>
          </h1>
          <p className="text-[16px] text-foreground/65 leading-relaxed max-w-2xl mb-12">
            Domotus optimise les immeubles de bureaux et espaces tertiaires au Maroc. Gestion énergétique en temps réel, confort thermique et lumineux, productivité accrue. Building Management System intégré.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-primary/85 transition-all duration-300" style={{ color: "#0a0a0a" }}>
              Consulter nos solutions <ArrowRight size={13} aria-hidden="true" />
            </Link>
            <Link href="/division-projets" className="inline-flex items-center gap-3 border border-white/25 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-foreground/70 hover:border-primary hover:text-primary transition-all duration-300">
              Division Projets <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── LES ENJEUX ── */}
      <section className="py-28 lg:py-36 bg-card" aria-labelledby="enjeux-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <SectionLabel>Vos priorités</SectionLabel>
            <h2
              id="enjeux-heading"
              className="font-black uppercase leading-none text-foreground text-balance"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}
            >
              L'immobilier tertiaire<br />
              <span className="italic text-foreground/45">a besoin d'intelligence.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Réduction Énergétique", desc: "HVAC, éclairage, appareils bureautiques. Jusqu'à 30% de réduction sur les charges d'exploitation par l'optimisation intelligente." },
              { title: "Confort Collaborateurs", desc: "Température, qualité de l'air, éclairage naturel optimisé. Les collaborateurs productifs sont des collaborateurs confortables." },
              { title: "Flexibilité des Espaces", desc: "Open-space, salles de réunion, bureaux privés. Scénarios d'ambiance adaptés à chaque espace et moment de la journée." },
              { title: "Reporting & Conformité", desc: "Dashboard BMS temps réel, alertes maintenance, certification environnementale. Vos locataires et investisseurs satisfaits." },
            ].map((item) => (
              <div key={item.title} className="bg-background p-8 rounded">
                <h3 className="font-black uppercase text-foreground text-[13px] mb-3">{item.title}</h3>
                <p className="text-foreground/60 text-[14px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACTS MESURABLES ── */}
      <section className="py-28 lg:py-36 bg-background" aria-labelledby="impacts-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <SectionLabel>Résultats certifiés</SectionLabel>
            <h2
              id="impacts-heading"
              className="font-black uppercase leading-none text-foreground text-balance"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}
            >
              Les chiffres de nos<br />
              <span className="italic text-foreground/45">installations.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "−30%", stat: "Réduction consommation énergétique" },
              { label: "+18%", stat: "Augmentation satisfaction collaborateurs" },
              { label: "−35%", stat: "Moins d'appels maintenance" },
            ].map((item) => (
              <div key={item.label} className="bg-card p-8 rounded text-center">
                <div className="text-[3rem] font-black text-primary/20 mb-2">{item.label}</div>
                <p className="text-foreground/60 text-[14px]">{item.stat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOTRE APPROCHE ── */}
      <section className="py-28 lg:py-36 bg-card" aria-labelledby="approche-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <SectionLabel>Domotus pour vous</SectionLabel>
            <h2
              id="approche-heading"
              className="font-black uppercase leading-none text-foreground text-balance"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}
            >
              Expertise complète<br />
              <span className="italic text-foreground/45">BMS tertiaire.</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              { title: "BMS Intégré", desc: "Gestion centralisée de tous les systèmes : chauffage, ventilation, éclairage, sécurité. Dashboard en temps réel, alertes préventives." },
              { title: "Optimisation Énergétique", desc: "Occupancy-based controls, daylight harvesting, ventilation intelligente. ROI garanti en 3-4 ans." },
              { title: "Support Opérationnel", desc: "Équipe dédiée pour la maintenance préventive. Intervention rapide en cas d'anomalie. Votre immeuble fonctionne sans interruption." },
              { title: "Certification Environnementale", desc: "Compatible HQE, BREEAM, LEED. Facilite l'accès au financement vert et attire les locataires responsables." },
            ].map((item) => (
              <div key={item.title} className="bg-background p-8 rounded">
                <h3 className="font-black uppercase text-foreground text-[13px] mb-3">{item.title}</h3>
                <p className="text-foreground/60 text-[14px] leading-relaxed">{item.desc}</p>
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
            Optimisez votre<br />
            <span className="italic text-foreground/50">immobilier tertiaire.</span>
          </h2>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-primary px-10 py-5 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-primary/85 transition-all duration-300" style={{ color: "#0a0a0a" }}>
            Prendre rendez-vous <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
