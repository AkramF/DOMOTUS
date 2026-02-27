import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import SectionLabel from "@/components/ui/section-label";

export const metadata: Metadata = {
  title: "Division Projets — Solutions B2B Smart Building pour Professionnels | Domotus",
  description:
    "Domotus Division Projets : solutions domotiques certifiées B2B pour architectes, promoteurs, hôtellerie, bureaux. KNX, BMS, efficience énergétique, conformité CCTP. Smart Building au Maroc.",
  alternates: { canonical: "https://www.domotus.ma/division-projets" },
  openGraph: {
    title: "Division Projets — Solutions B2B Smart Building | Domotus",
    description: "Partenaire technologique pour vos projets intelligents : KNX, BMS, monitoring énergétique, CCTP, conformité.",
    url: "https://www.domotus.ma/division-projets",
  },
};

const metiers = [
  {
    title: "Architectes & Designers",
    description: "Sublimer vos concepts sans contraintes techniques. Une intégration invisible pour une esthétique préservée.",
    href: "/architectes",
  },
  {
    title: "Promoteurs Immobiliers",
    description: "Différenciez vos programmes et accélérez vos ventes grâce à la labellisation Smart Building.",
    href: "/promoteurs",
  },
  {
    title: "Hôtellerie & Hospitalité",
    description: "Optimisez l'expérience client et réduisez vos coûts opératoires grâce à la gestion énergétique intelligente.",
    href: "/contact",
  },
  {
    title: "Bureaux d'Études & Tertiaire",
    description: "Une expertise technique rigoureuse pour des bâtiments connectés, évolutifs et conformes aux normes internationales.",
    href: "/contact",
  },
];

const engagements = [
  {
    title: "Conformité & Protocoles",
    description: "Maîtrise totale des standards ouverts (KNX, BACnet, Modbus) garantissant l'interopérabilité et la pérennité du système.",
  },
  {
    title: "Efficience Énergétique",
    description: "Monitoring en temps réel et pilotage intelligent (HVAC, Éclairage) pour une réduction drastique des charges d'exploitation.",
  },
  {
    title: "Accompagnement de A à Z",
    description: "Rédaction des CCTP, carnets de câblage, suivi de chantier et coordination avec les corps d'état secondaires.",
  },
  {
    title: "Garantie de Livraison",
    description: "Respect strict des plannings de chantier et mise en service certifiée avec documentation technique complète.",
  },
];

const phases = [
  {
    num: "01",
    title: "Étude de Faisabilité & Avant-projet",
    description: "Analyse des besoins fonctionnels et budgétisation précise.",
  },
  {
    num: "02",
    title: "Ingénierie & Planification",
    description: "Conception des schémas de principe et intégration dans les plans BIM/AutoCAD.",
  },
  {
    num: "03",
    title: "Déploiement & Programmation",
    description: "Installation par nos ingénieurs certifiés et tests de charge système.",
  },
  {
    num: "04",
    title: "Maintenance & Supervision",
    description: "Contrats de maintenance préventive et support technique prioritaire.",
  },
];

export default function DivisionProjetsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* ── 1. HERO HEADER (L'Autorité B2B) ── */}
      <section className="py-28 lg:py-36" aria-labelledby="hero-heading">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div>
            <p className="text-[12px] uppercase tracking-[0.3em] text-primary font-medium mb-8">
              Solutions domotiques certifiées pour professionnels — Maroc
            </p>
            <h1
              id="hero-heading"
              className="font-black uppercase leading-none text-foreground text-balance mb-8"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", letterSpacing: "-0.03em" }}
            >
              L&apos;ingénierie domotique<br />
              <span className="italic text-foreground/50">au service des grands projets.</span>
            </h1>
            <p className="text-[16px] text-foreground/65 leading-relaxed max-w-2xl mb-10">
              Domotus accompagne les acteurs de l&apos;immobilier et du design dans la création de bâtiments intelligents et durables. De la conception à la mise en service, nous intégrons des solutions multi-protocoles (KNX, BMS) pour valoriser vos actifs et garantir une exploitation simplifiée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85" style={{ color: "#0a0a0a" }}>
                Consulter nos solutions métiers <ArrowRight size={13} aria-hidden="true" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-3 border border-white/25 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-foreground/70 transition-all duration-300 hover:border-primary hover:text-primary">
                Demander un cahier des charges <ArrowRight size={13} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. LE HUB MÉTIERS (Maillage SEO & UX) ── */}
      <section className="py-24 lg:py-36 bg-card" aria-labelledby="metiers-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <SectionLabel>Vos besoins spécifiques</SectionLabel>
            <h2
              id="metiers-heading"
              className="font-black uppercase leading-none text-foreground text-balance"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}
            >
              Quelle que soit votre industrie,<br />
              <span className="italic text-foreground/45">nous avons la solution.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {metiers.map((metier) => (
              <Link
                key={metier.title}
                href={metier.href}
                className="group relative bg-background p-8 rounded hover:bg-foreground/5 transition-all duration-300"
              >
                <h3 className="font-black uppercase text-foreground text-[13px] mb-3">
                  {metier.title}
                </h3>
                <p className="text-foreground/60 text-[14px] leading-relaxed mb-6">
                  {metier.description}
                </p>
                <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-primary group-hover:gap-3 transition-all duration-300">
                  En savoir plus <ArrowRight size={12} aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. NOS ENGAGEMENTS PROFESSIONNELS (Le Rationnel) ── */}
      <section className="py-24 lg:py-36 bg-background" aria-labelledby="engagements-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <SectionLabel>Votre sérénité</SectionLabel>
            <h2
              id="engagements-heading"
              className="font-black uppercase leading-none text-foreground text-balance"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}
            >
              Nos engagements<br />
              <span className="italic text-foreground/45">professionnels.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {engagements.map((engagement) => (
              <div key={engagement.title} className="bg-card p-8 rounded">
                <div className="flex items-start gap-4">
                  <Check size={20} className="text-primary shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-black uppercase text-foreground text-[13px] mb-3">
                      {engagement.title}
                    </h3>
                    <p className="text-foreground/60 text-[14px] leading-relaxed">
                      {engagement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. LA MÉTHODOLOGIE B2B (Le Processus Rigoureux) ── */}
      <section className="py-24 lg:py-36 bg-card" aria-labelledby="process-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <SectionLabel>De la conception à la livraison</SectionLabel>
            <h2
              id="process-heading"
              className="font-black uppercase leading-none text-foreground text-balance"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}
            >
              Notre méthodologie<br />
              <span className="italic text-foreground/45">éprouvée.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {phases.map((phase) => (
              <div key={phase.num} className="bg-background p-8 rounded">
                <div className="text-[3rem] font-black text-primary/20 mb-6">{phase.num}</div>
                <h3 className="font-black uppercase text-foreground text-[13px] mb-3">
                  {phase.title}
                </h3>
                <p className="text-foreground/60 text-[13px] leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PREUVE DE CONCEPT (Références B2B) ── */}
      <section className="py-24 lg:py-36 bg-background" aria-labelledby="references-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <SectionLabel>Nos réalisations</SectionLabel>
            <h2
              id="references-heading"
              className="font-black uppercase leading-none text-foreground text-balance"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}
            >
              Nos références<br />
              <span className="italic text-foreground/45">professionnelles.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Résidences de Luxe", desc: "Intégration globale pour complexes résidentiels haut de gamme (Ex: Casablanca Finance City)" },
              { title: "Espaces de Bureaux", desc: "Gestion intelligente de l'éclairage et du climat pour plateaux tertiaires" },
              { title: "Hôtels & Spas", desc: "Automatisation des chambres (GRMS) pour un confort client premium à Marrakech" },
            ].map((ref) => (
              <div key={ref.title} className="bg-card p-8 rounded">
                <h3 className="font-black uppercase text-foreground text-[13px] mb-3">
                  {ref.title}
                </h3>
                <p className="text-foreground/60 text-[13px] leading-relaxed">
                  {ref.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CALL-TO-ACTION FINAL (Génération de Leads) ── */}
      <section className="py-28 bg-card" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <h2
            id="cta-heading"
            className="font-black uppercase leading-none text-foreground text-balance mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", letterSpacing: "-0.03em" }}
          >
            Collaborons<br />
            <span className="italic text-foreground/50">sur votre prochain projet.</span>
          </h2>
          <p className="text-foreground/60 text-[15px] leading-relaxed mb-12 max-w-xl mx-auto">
            Vous avez un appel d&apos;offres ou un projet en phase de conception ? Nos ingénieurs vous conseillent sur les meilleures options technologiques et les meilleures pratiques d&apos;intégration.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-primary px-10 py-5 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85" style={{ color: "#0a0a0a" }}>
            Prendre rendez-vous avec un consultant B2B <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
