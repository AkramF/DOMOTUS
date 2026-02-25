import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Sun } from "lucide-react";
import SectionLabel from "@/components/ui/section-label";

export const metadata: Metadata = {
  title: "Éclairage Intelligent Multi-Protocoles Maroc | Domotus",
  description:
    "Systèmes d'éclairage intelligent multi-protocoles (KNX, Lutron) au Maroc. Scènes lumineuses dynamiques, pilotage circadien, consommation −40%. Casablanca, Marrakech, Rabat.",
  alternates: { canonical: "https://www.domotus.ma/expertise/eclairage" },
  openGraph: {
    title: "Éclairage Intelligent Domotique | Multi-Protocoles | Domotus Maroc",
    description: "Éclairage automatisé adapté à vos rythmes circadiens. Scènes lumineuses, économies 40%, Maroc.",
    url: "https://www.domotus.ma/expertise/eclairage",
  },
};

export default function EclairagePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[700px] overflow-hidden flex items-center justify-center">
        <Image
          src="/images/expertise-eclairage-hero.jpg"
          alt="Éclairage intelligent Lutron dans une villa de luxe au Maroc"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/65" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 40%, transparent 30%, oklch(0 0 0 / 0.45) 100%)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <SectionLabel>Expertise Domotus</SectionLabel>
          <h1 className="font-black uppercase leading-tight text-foreground text-balance mt-6" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", letterSpacing: "-0.03em" }}>
            Éclairage<br />
            <span className="italic text-foreground/60">Intelligent.</span>
          </h1>
          <p className="mt-8 text-[15px] text-foreground/60 leading-relaxed max-w-xl mx-auto">
            Scènes lumineuses dynamiques, pilotage circadien automatique, économies jusqu'à 40%. Vos espaces s'adaptent à votre rythme.
          </p>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-black uppercase text-foreground text-balance mb-6" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", letterSpacing: "-0.02em" }}>
                Pourquoi l'éclairage<br />intelligent multi-protocoles ?
              </h2>
              <p className="text-[14px] text-foreground/60 leading-relaxed mb-6">
                L'éclairage représente 15% de la consommation électrique mondiale. Nos systèmes multi-protocoles certifiés (KNX et Lutron Homeworks) offrent un contrôle granulaire, adaptive et invisible de vos ambiances lumineuses — tout en réduisant vos factures de 30 à 40%.
              </p>
              <p className="text-[14px] text-foreground/60 leading-relaxed">
                Pilotage circadien : vos lumières suivent les rythmes naturels du jour pour optimiser concentration, bien-être et sommeil. Compatible iOS, Android, Apple HomeKit, Google Home.
              </p>
            </div>
            <div className="aspect-video relative overflow-hidden border border-white/8">
              <Image
                src="/images/expertise-eclairage.jpg"
                alt="Installation d'éclairage intelligent Lutron"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="py-20 bg-card/40">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <h2 className="font-black uppercase text-foreground text-balance mb-12" style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", letterSpacing: "-0.02em" }}>
            Caractéristiques clés
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Scènes lumineuses prédéfinies", desc: "Ambiance lecture, cinéma, repas, sommeil — adaptables en un clic." },
              { title: "Pilotage circadien", desc: "Lumières adaptées à votre rythme biologique, du lever au coucher du soleil." },
              { title: "Variation sans flicker", desc: "Technologie LED sans scintillement, confort visuel maximal." },
              { title: "Intégration multi-zones", desc: "Chaque pièce peut avoir sa propre ambiance, pilotée indépendamment ou en groupe." },
              { title: "Économies energétiques", desc: "Réduction de 30–40% de la consommation électrique liée à l'éclairage." },
              { title: "Contrôle multi-dispositif", desc: "Smartphone, tablette, boutons muraux, assistants vocaux — un contrôle unifié." },
            ].map((item, i) => (
              <div key={i} className="border border-white/8 p-6 flex gap-4">
                <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="font-bold uppercase text-foreground text-sm mb-2">{item.title}</h3>
                  <p className="text-[13px] text-foreground/50">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <h2 className="font-black uppercase text-foreground text-balance mb-12" style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", letterSpacing: "-0.02em" }}>
            Votre parcours vers l'éclairage intelligent
          </h2>
          <div className="space-y-6">
            {[
              { num: "01", title: "Audit lumière", desc: "Nous analysons les lieux, usages, budgets et vos préférences esthétiques pour proposer les zones d'automatisation prioritaires." },
              { num: "02", title: "Conception", desc: "Nos ingénieurs certifiés multi-protocoles créent un système sur mesure : schémas de câblage, choix luminaires (LED haute gamme), intégration dans votre architecture." },
              { num: "03", title: "Installation discrète", desc: "Pose de l'infrastructure certifiée invisibly, intégration des variateurs, programmation des scènes lumineuses dans votre panel de contrôle." },
              { num: "04", title: "Formation & support", desc: "Vous maîtrisez votre système. Support réactif 24/7 pour ajustements et optimisations futures." },
            ].map((step) => (
              <div key={step.num} className="border-l-2 border-primary pl-6 py-4">
                <p className="text-primary font-black text-sm mb-1">{step.num}</p>
                <h3 className="font-bold uppercase text-foreground mb-2">{step.title}</h3>
                <p className="text-[13px] text-foreground/50">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-card/40 border-y border-white/8">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-black uppercase text-foreground mb-6" style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", letterSpacing: "-0.02em" }}>
            Prêt à éclairer votre vision ?
          </h2>
          <p className="text-[14px] text-foreground/60 mb-8">
            Démarrez avec un audit technique. Nos experts analizent votre espace et proposent un devis personnalisé en 48h.
          </p>
          <Link
            href="/contact"
            className="focus-ring inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85"
            style={{ color: "#0a0a0a" }}
          >
            Audit technique
            <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
