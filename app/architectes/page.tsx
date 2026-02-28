import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Architectes & Designers — Domotique KNX | Domotus",
  description:
    "Partenaire domotique pour architectes. Multi-protocoles certifiés, invisible, 10 ans garanti. 150+ réalisations au Maroc.",
  alternates: { canonical: "https://www.domotus.ma/architectes" },
  openGraph: {
    title: "Architectes & Designers — Domotique | Domotus",
    description: "Domotique invisible certifiée. 10 ans garanti. Intégration architecture.",
    url: "https://www.domotus.ma/architectes",
    images: [
      {
        url: "https://www.domotus.ma/images/og-domotus.jpg",
        width: 1200,
        height: 630,
        alt: "Domotus partenaire architectes",
      },
    ],
  },
};

export default function ArchitectesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center py-24" aria-labelledby="hero-heading">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 w-full">
          <div className="max-w-3xl">
            <p className="text-[12px] uppercase tracking-[0.3em] text-primary font-medium mb-8">
              Partenaire technologique
            </p>
            <h1
              id="hero-heading"
              className="font-black uppercase leading-none text-foreground text-balance mb-8"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", letterSpacing: "-0.03em" }}
            >
              Vos clients méritent<br />
              <span className="italic text-foreground/50">la meilleure domotique.</span>
            </h1>
            <p className="text-[16px] text-foreground/65 leading-relaxed max-w-xl mb-10">
              Domotus collabore avec les meilleurs architectes et designers du Maroc pour intégrer la domotique sans compromettre l'intégrité de leurs projets. Multi-protocoles, invisible, garantie.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85" style={{ color: "#0a0a0a" }}>
              Discutons de votre projet <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CRÉDIBILITÉ ── */}
      <section className="py-20 bg-card" aria-labelledby="credibility-heading">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <h2 id="credibility-heading" className="sr-only">Pourquoi nous faire confiance</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <p className="font-black text-[2.5rem] text-primary mb-2">10+</p>
              <p className="text-[13px] uppercase tracking-[0.1em] text-foreground/60">Années d'expérience<br />en architecture domotique</p>
            </div>
            <div>
              <p className="font-black text-[2.5rem] text-primary mb-2">+150</p>
              <p className="text-[13px] uppercase tracking-[0.1em] text-foreground/60">Projets réalisés<br />depuis 2017</p>
            </div>
            <div>
              <p className="font-black text-[2.5rem] text-primary mb-2">100%</p>
              <p className="text-[13px] uppercase tracking-[0.1em] text-foreground/60">Certifications<br />multi-protocoles</p>
            </div>
            <div>
              <p className="font-black text-[2.5rem] text-primary mb-2">24/7</p>
              <p className="text-[13px] uppercase tracking-[0.1em] text-foreground/60">Support technique<br />pour vos clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── POURQUOI NOUS ── */}
      <section className="py-28" aria-labelledby="why-us-heading">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <h2 id="why-us-heading" className="font-black uppercase text-foreground text-balance mb-16" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}>
            Recommander Domotus,<br />
            <span className="italic text-foreground/50">c'est protéger votre réputation.</span>
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Multi-protocoles */}
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded mb-6 flex items-center justify-center">
                <span className="text-primary font-black text-lg">∞</span>
              </div>
              <h3 className="font-black uppercase text-foreground mb-3 text-[14px]">Multi-protocoles</h3>
              <p className="text-foreground/60 text-[14px] leading-relaxed">
                KNX, Crestron, Lutron, Zigbee, Matter. Vos clients ne sont jamais enfermés. Flexibilité totale pour l'évolution de leurs systèmes.
              </p>
            </div>

            {/* Design invisible */}
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded mb-6 flex items-center justify-center">
                <span className="text-primary font-black text-lg">◇</span>
              </div>
              <h3 className="font-black uppercase text-foreground mb-3 text-[14px]">Design invisible</h3>
              <p className="text-foreground/60 text-[14px] leading-relaxed">
                Zéro câbles apparents, zéro boîtiers visibles. La technologie s'intègre à votre architecture, pas l'inverse.
              </p>
            </div>

            {/* Garanti */}
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded mb-6 flex items-center justify-center">
                <span className="text-primary font-black text-lg">✓</span>
              </div>
              <h3 className="font-black uppercase text-foreground mb-3 text-[14px]">10 ans garanti</h3>
              <p className="text-foreground/60 text-[14px] leading-relaxed">
                Durabilité certifiée, support 24/7, aucun souci post-livraison. Vos clients sont sereins, vous aussi.
              </p>
            </div>
          </div>

          {/* Risk mitigation */}
          <div className="bg-card p-8 rounded">
            <h3 className="font-black uppercase text-foreground mb-6 text-[14px]">Zéro risque pour votre chantier</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check size={18} className="text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p className="text-foreground/70 text-[14px]"><span className="font-bold">Calendrier respecté</span> — Intégration sans retard chantier</p>
              </div>
              <div className="flex items-start gap-3">
                <Check size={18} className="text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p className="text-foreground/70 text-[14px]"><span className="font-bold">Documentation complète</span> — Livrables BIM et schémas techniques</p>
              </div>
              <div className="flex items-start gap-3">
                <Check size={18} className="text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p className="text-foreground/70 text-[14px]"><span className="font-bold">Maintenance transparente</span> — Votre client bénéficie d'une garantie 10 ans</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESSUS ── */}
      <section className="py-28 bg-card" aria-labelledby="process-heading">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <h2 id="process-heading" className="font-black uppercase text-foreground text-balance mb-16" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}>
            Comment on collabore
          </h2>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Audit BIM", desc: "Intégration sur vos plans, sans impacter la conception" },
              { step: "02", title: "Design intégré", desc: "Schémas techniques et interfaces validés ensemble" },
              { step: "03", title: "Installation fluide", desc: "Coordination calendrier, zéro perturbation chantier" },
              { step: "04", title: "Handover complet", desc: "Formation client, documentation, support 24/7" },
            ].map((item) => (
              <div key={item.step}>
                <div className="text-[3rem] font-black text-primary/20 mb-4">{item.step}</div>
                <h3 className="font-black uppercase text-foreground text-[13px] mb-3">{item.title}</h3>
                <p className="text-foreground/60 text-[13px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RÉALISATIONS ── */}
      <section className="py-28" aria-labelledby="portfolio-heading">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <h2 id="portfolio-heading" className="font-black uppercase text-foreground text-balance mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}>
            Collaborations<br />
            <span className="italic text-foreground/50">avec les meilleurs.</span>
          </h2>
          <p className="text-foreground/60 text-[15px] mb-16 max-w-2xl">
            +150 projets d'architectes intégrés avec Domotus. Villas de prestige, immeubles de bureaux, résidences d'exception au Maroc.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Villa prestige, Casablanca", architect: "Studio Arch+", category: "Résidentiel" },
              { title: "Immeuble bureaux, Marrakech", architect: "Design Collective", category: "Tertiaire" },
              { title: "Résidence de luxe, Rabat", architect: "Architecture Studio", category: "Résidentiel" },
            ].map((project, idx) => (
              <div key={idx} className="bg-card p-8 rounded">
                <div className="w-full h-40 bg-foreground/5 rounded mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-foreground/30 text-[12px] uppercase tracking-[0.1em] mb-2">Réalisation</div>
                    <div className="text-foreground/40 font-bold">{project.category}</div>
                  </div>
                </div>
                <h3 className="font-black uppercase text-foreground text-[13px] mb-2">{project.title}</h3>
                <p className="text-foreground/50 text-[12px]">Avec {project.architect}</p>
              </div>
            ))}
          </div>

          <Link href="/contact" className="inline-flex items-center gap-3 mt-12 border border-foreground/20 px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:border-foreground/40">
            Voir toutes les réalisations <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-28 bg-card" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <h2 id="cta-heading" className="font-black uppercase text-foreground text-balance mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}>
            Parlons de votre<br />
            <span className="italic text-foreground/50">prochain projet.</span>
          </h2>
          <p className="text-foreground/60 text-[15px] mb-12 max-w-xl mx-auto">
            Qu'il s'agisse d'une nouvelle conception ou d'une intégration sur un projet existant, Domotus est votre partenaire stratégique.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-primary px-10 py-5 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85" style={{ color: "#0a0a0a" }}>
            Contacter l'équipe <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
