import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Eye, Lightbulb, Zap } from "lucide-react";
import SectionLabel from "@/components/ui/section-label";

export const metadata: Metadata = {
  title: "Domotique pour Architectes & Designers — Intégration Invisible | Domotus Maroc",
  description:
    "Partenaire technologique pour architectes : intégration domotique invisible, design-first, multi-protocoles. Conception collaborative BIM, support complet, expertise premium au Maroc.",
  alternates: { canonical: "https://www.domotus.ma/architectes" },
  openGraph: {
    title: "Domotique pour Architectes — Sublimez vos espaces",
    description:
      "Vous concevez l'exception, nous lui donnons vie. Intégration technologique discrète et intuitive pour vos projets résidentiels au Maroc.",
    url: "https://www.domotus.ma/architectes",
  },
};

const piliers = [
  {
    icon: Eye,
    title: "L'esthétique avant tout",
    subtitle: "L'intégration invisible",
    description:
      "Fini la pollution visuelle. Nous sourçons des appareillages de très haute finition (claviers en laiton, pierre, verre), des enceintes invisibles intégrées dans les cloisons et des capteurs dissimulés. La technologie épouse vos choix de matériaux.",
  },
  {
    icon: Lightbulb,
    title: "La sublimation par la lumière",
    subtitle: "Conception d'éclairage",
    description:
      "Nous travaillons avec vous pour mettre en valeur les volumes de vos projets. Gestion de l'éclairage naturel, gradation fine (dimming), scénarios d'ambiance... Nous révélons l'âme de vos créations, de jour comme de nuit.",
  },
  {
    icon: Zap,
    title: "Un accompagnement de A à Z",
    subtitle: "Sérénité sur le chantier",
    description:
      "De la phase de conception (plans, synoptiques, carnets de câblage) jusqu'à la coordination des lots (électricité, climatisation) et la livraison finale au client. Nous prenons en charge toute la complexité technique pour vous laisser l'esprit libre.",
  },
];

const etapes = [
  {
    num: "01",
    title: "Audit BIM collaboratif",
    desc: "Vous nous partagez votre projet, nous intégrons les schémas multi-protocoles (KNX/Lutron/Crestron). Réunion de validation avec votre équipe. Zéro impromptus.",
  },
  {
    num: "02",
    title: "Design d'interface invisible",
    desc: "Nos UX designers co-créent des interfaces (tablettes, voice, gestes) qui se fondent dans votre esthétique. Pas de boîtier noir en coin de pièce.",
  },
  {
    num: "03",
    title: "Installation & commissioning transparent",
    desc: "Tout se passe en background. Nous intervenons pendant la phase travaux, respectant votre planning strict de chantier. Livraison sereine.",
  },
  {
    num: "04",
    title: "Support technique continu",
    desc: "Post-handover : documentation détaillée, formation équipe maître d'ouvrage, hotline réactive 24/7. Votre réputation reste impeccable.",
  },
];

export default function ArchitectesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative w-full h-[80vh] overflow-hidden"
        aria-label="Partenaire technologique pour architectes et designers"
      >
        <Image
          src="/images/villa-prestige.jpg"
          alt="Projet architectural premium avec intégration domotique invisible"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/65" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 40%, transparent 30%, oklch(0 0 0 / 0.45) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-8 h-px bg-foreground/40" aria-hidden="true" />
            <p className="text-[11px] uppercase tracking-[0.35em] text-primary font-medium">
              Partenaire Technologique — Architectes & Designers
            </p>
            <span className="block w-8 h-px bg-foreground/40" aria-hidden="true" />
          </div>
          <h1
            className="font-black uppercase leading-none text-foreground text-balance mb-6"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", letterSpacing: "-0.03em" }}
          >
            Sublimez vos espaces,<br />
            <span className="italic text-foreground/60">l'intelligence en toute discrétion.</span>
          </h1>
          <p className="text-[15px] text-foreground/70 max-w-lg text-balance leading-relaxed mb-10">
            Vous concevez l'exception, nous lui donnons vie. Un accompagnement sur mesure pour intégrer une domotique invisible et intuitive dans vos projets résidentiels au Maroc, dans le respect absolu de vos lignes architecturales. Sans compromis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="focus-ring inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85"
              style={{ color: "#0a0a0a" }}
            >
              Planifier un échange <ArrowRight size={13} aria-hidden="true" />
            </Link>
            <Link
              href="#realisations"
              className="focus-ring inline-flex items-center gap-3 border border-white/25 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-foreground/70 hover:border-primary hover:text-primary transition-all duration-300"
            >
              Voir nos réalisations <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── HARMONIE DESIGN-TECHNOLOGIE ── */}
      <section className="py-28 bg-card" aria-labelledby="harmonie-heading">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="mb-16">
            <SectionLabel>Notre proposition de valeur</SectionLabel>
            <h2
              id="harmonie-heading"
              className="font-black uppercase leading-none text-foreground text-balance mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}
            >
              L'harmonie parfaite<br />
              <span className="italic text-foreground/45">entre design et technologie.</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-foreground/70 leading-relaxed mb-6 text-[15px]">
                Pour vos projets de villas et résidences de prestige, nous agissons comme votre bureau d'étude technologique intégré. Notre mission n'est pas d'ajouter des écrans partout, mais de faire disparaître la technique pour que seule l'expérience et la pureté de vos espaces demeurent.
              </p>
              <p className="text-foreground/60 leading-relaxed text-[15px]">
                La technologie s'efface, votre design rayonne.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/expertise-eclairage.jpg"
                alt="Harmonie entre design architectural et technologie domotique"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── LES 3 PILIERS ── */}
      <section className="py-28 bg-background" aria-labelledby="piliers-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-20">
            <SectionLabel>Les fondements de notre collaboration</SectionLabel>
            <h2
              id="piliers-heading"
              className="font-black uppercase leading-none text-foreground text-balance"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
            >
              Les 3 piliers{" "}
              <span className="italic text-foreground/45">de notre approche.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {piliers.map((pilier, idx) => {
              const Icon = pilier.icon;
              return (
                <div key={idx} className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                      <Icon size={24} className="text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold uppercase tracking-[0.08em] text-foreground text-[14px]">
                        {pilier.title}
                      </h3>
                      <p className="text-primary text-[12px] mt-1 font-semibold">
                        {pilier.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-foreground/60 leading-relaxed text-[14px]">
                    {pilier.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-28 bg-card" aria-labelledby="process-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <SectionLabel>De la conception à la livraison</SectionLabel>
            <h2
              id="process-heading"
              className="font-black uppercase leading-none text-foreground text-balance max-w-2xl"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
            >
              Notre méthode<br />
              <span className="italic text-foreground/45">étape par étape.</span>
            </h2>
          </div>
          <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/6">
            {etapes.map((e) => (
              <li key={e.num} className="bg-background p-8 flex flex-col gap-4">
                <span className="text-[10px] font-bold text-primary/60 uppercase tracking-widest">
                  {e.num}
                </span>
                <h3 className="font-bold uppercase tracking-[0.08em] text-foreground text-[13px]">
                  {e.title}
                </h3>
                <p className="text-[13px] text-foreground/50 leading-relaxed">{e.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── REALISATIONS ── */}
      <section id="realisations" className="py-28 bg-background" aria-labelledby="real-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <SectionLabel>Portfolio architectes</SectionLabel>
            <h2
              id="real-heading"
              className="font-black uppercase leading-none text-foreground text-balance"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
            >
              Nos réalisations{" "}
              <span className="italic text-foreground/45">au Maroc.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-white/6">
            {[
              {
                title: "Villa signature, Casablanca",
                arch: "Collaboration architecte local",
                category: "Architecture premium",
                image: "/images/villa-prestige.jpg",
              },
              {
                title: "Penthouse Rabat",
                arch: "Design & domotique fusionnés",
                category: "Résidentiel haut gamme",
                image: "/images/hero-residential.jpg",
              },
              {
                title: "Résidence prestige Marrakech",
                arch: "Expertise multi-protocoles",
                category: "Hospitalité luxe",
                image: "/images/hero-bg.jpg",
              },
            ].map((proj) => (
              <div
                key={proj.title}
                className="relative overflow-hidden group aspect-[4/5]"
              >
                <Image
                  src={proj.image}
                  alt={`${proj.title} — ${proj.arch}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-primary mb-2 font-semibold">
                    {proj.category}
                  </p>
                  <p className="font-bold uppercase tracking-[0.05em] text-foreground text-[13px]">
                    {proj.title}
                  </p>
                  <p className="text-[12px] text-foreground/55 mt-1">{proj.arch}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-28 bg-card" aria-label="Collaboration pour votre projet">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionLabel>Donnons vie à votre vision</SectionLabel>
          <h2
            className="font-black uppercase leading-none text-foreground text-balance mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", letterSpacing: "-0.03em" }}
          >
            Donnons vie à votre<br />
            <span className="italic text-foreground/50">prochaine réalisation.</span>
          </h2>
          <p className="text-foreground/50 text-[15px] leading-relaxed mb-10 max-w-md mx-auto">
            Discutons de la manière dont une intégration technologique réfléchie peut ajouter une valeur inédite à vos projets d'architecture au Maroc.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="focus-ring inline-flex items-center gap-3 bg-primary px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-primary/85 transition-all duration-300"
              style={{ color: "#0a0a0a" }}
            >
              Planifier un échange <ArrowRight size={13} aria-hidden="true" />
            </Link>
            <Link
              href="#realisations"
              className="focus-ring inline-flex items-center gap-3 border border-white/20 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-foreground/60 hover:border-primary hover:text-primary transition-all duration-300"
            >
              Voir nos projets <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
