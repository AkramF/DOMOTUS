import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Division Projets — Solutions B2B pour Architectes & Promoteurs | Domotus",
  description:
    "Domotus Division Projets : partenaire technologique pour architectes, designers et promoteurs immobiliers. Solutions multi-protocoles, collaboration, expertise.",
  alternates: { canonical: "https://www.domotus.ma/division-projets" },
};

export default function DivisionProjetsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center py-24" aria-labelledby="hero-heading">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 w-full">
          <div className="max-w-3xl">
            <p className="text-[12px] uppercase tracking-[0.3em] text-primary font-medium mb-8">
              Solutions B2B
            </p>
            <h1
              id="hero-heading"
              className="font-black uppercase leading-none text-foreground text-balance mb-8"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", letterSpacing: "-0.03em" }}
            >
              La technologie au service<br />
              <span className="italic text-foreground/50">de vos projets.</span>
            </h1>
            <p className="text-[16px] text-foreground/65 leading-relaxed max-w-xl mb-10">
              Architectes, designers, promoteurs — Domotus est votre partenaire stratégique pour intégrer l'intelligence technologique dans vos réalisations, du concept à la livraison.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/architectes" className="inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85" style={{ color: "#0a0a0a" }}>
                Pour les Architectes & Designers <ArrowRight size={13} aria-hidden="true" />
              </Link>
              <Link href="/promoteurs" className="inline-flex items-center gap-3 border border-white/25 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-foreground/70 transition-all duration-300 hover:border-primary hover:text-primary">
                Pour les Promoteurs <ArrowRight size={13} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2 COLONNES OFFRE ── */}
      <section className="py-28 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
          {/* Architectes */}
          <div>
            <h2 className="font-black uppercase text-foreground mb-6" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", letterSpacing: "-0.02em" }}>
              Architectes &amp; Designers
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-8 text-[15px]">
              Collaborez avec Domotus pour intégrer la domotique sans compromettre l'intégrité architecturale de vos projets. Nous proposons une expertise multi-protocoles certifiée, une intégration invisible et un accompagnement complet du concept à la livraison.
            </p>
            <ul className="space-y-3 mb-10 text-[14px] text-foreground/60">
              <li>✓ Collaboration BIM native</li>
              <li>✓ Intégration invisible et design-centric</li>
              <li>✓ Certifications multi-protocoles (KNX, Crestron, Lutron)</li>
              <li>✓ Support technique 24/7 après livraison</li>
            </ul>
            <Link href="/architectes" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-primary hover:text-primary/70 transition-colors duration-300">
              En savoir plus <ArrowRight size={12} aria-hidden="true" />
            </Link>
          </div>

          {/* Promoteurs */}
          <div>
            <h2 className="font-black uppercase text-foreground mb-6" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", letterSpacing: "-0.02em" }}>
              Promoteurs Immobiliers
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-8 text-[15px]">
              Intégrez la domotique dès la phase conception pour maximiser la valeur de vos programmes. Nos solutions certifiées facilitent l'obtention des labels commerciaux (HQE, LEED) et augmentent le prix de vente moyen de vos unités jusqu'à 18%.
            </p>
            <ul className="space-y-3 mb-10 text-[14px] text-foreground/60">
              <li>✓ Intégration dès conception = coût optimisé</li>
              <li>✓ +18% de taux de vente en moyenne</li>
              <li>✓ Labels & certifications inclus</li>
              <li>✓ Maintenance longue durée incluse</li>
            </ul>
            <Link href="/promoteurs" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-primary hover:text-primary/70 transition-colors duration-300">
              En savoir plus <ArrowRight size={12} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 bg-background text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2
            className="font-black uppercase leading-none text-foreground text-balance mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", letterSpacing: "-0.03em" }}
          >
            Parlons de votre prochain<br />
            <span className="italic text-foreground/50">projet.</span>
          </h2>
          <p className="text-foreground/50 text-[15px] leading-relaxed mb-10 max-w-lg mx-auto">
            Quelle que soit votre expertise, Domotus est prêt à collaborer sur votre vision.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-primary px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-primary/85 transition-all duration-300" style={{ color: "#0a0a0a" }}>
            Contacter l'équipe <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
