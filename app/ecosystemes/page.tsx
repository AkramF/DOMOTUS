import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Wifi, Lightbulb, Zap, Plug, RotateCcw } from "lucide-react";
import SectionLabel from "@/components/ui/section-label";

export const metadata: Metadata = {
  title: "Écosystèmes Intelligents — Architecture KNX | Domotus",
  description:
    "Écosystèmes domotiques KNX certifiés. Sécurité, connectivité, lumière, énergie. Architecture intelligente complète au Maroc.",
  alternates: { canonical: "https://www.domotus.ma/ecosystemes" },
  openGraph: {
    title: "Écosystèmes Intelligents — KNX | Domotus",
    description: "Architecture domotique complète et interconnectée.",
    url: "https://www.domotus.ma/ecosystemes",
    images: [
      {
        url: "https://www.domotus.ma/images/og-domotus.jpg",
        width: 1200,
        height: 630,
        alt: "Écosystèmes domotiques",
      },
    ],
  },
};

const ecosystemes = [
  {
    id: 1,
    title: "Sécurité Intelligente",
    manifesto: "Une protection discrète, omniprésente, maîtrisée.",
    description: "Un environnement sécurisé où surveillance, contrôle d'accès et supervision fonctionnent comme un système unifié.",
    features: [
      "Vidéosurveillance haute définition",
      "Contrôle d'accès intelligent",
      "Interphonie connectée",
      "Enregistrement sécurisé",
      "Supervision à distance",
    ],
    icon: Shield,
  },
  {
    id: 2,
    title: "Connectivité & Infrastructure",
    manifesto: "La colonne vertébrale numérique de votre propriété.",
    description: "Une infrastructure réseau stable, performante et évolutive qui soutient l'ensemble des systèmes intelligents.",
    features: [
      "Wi-Fi maillé haute performance",
      "Réseau filaire structuré",
      "Baies techniques professionnelles",
      "Redondance internet",
      "Supervision centralisée",
    ],
    icon: Wifi,
  },
  {
    id: 3,
    title: "Lumière & Ambiance",
    manifesto: "La lumière devient une signature architecturale.",
    description: "Un éclairage scénarisé et intelligent qui valorise les volumes et accompagne chaque moment de vie.",
    features: [
      "Éclairage scénarisé",
      "Variations d'intensité",
      "Mise en valeur architecturale",
      "Automatismes intelligents",
    ],
    icon: Lightbulb,
  },
  {
    id: 4,
    title: "Énergie & Performance",
    manifesto: "Maîtriser l'énergie sans compromettre le confort.",
    description: "Un pilotage intelligent des consommations pour optimiser performance et durabilité.",
    features: [
      "Monitoring énergétique",
      "Optimisation de consommation",
      "Gestion des charges lourdes",
      "Intégration solaire",
    ],
    icon: Zap,
  },
  {
    id: 5,
    title: "Mobilité Électrique",
    manifesto: "La mobilité intégrée à votre résidence.",
    description: "Une infrastructure de recharge pensée comme un prolongement naturel de votre architecture intelligente.",
    features: [
      "Bornes de recharge intelligentes",
      "Gestion dynamique de charge",
      "Intégration au réseau domestique",
    ],
    icon: Plug,
  },
  {
    id: 6,
    title: "Expérience & Interaction",
    manifesto: "Votre propriété, à portée de main.",
    description: "Une interface centralisée qui simplifie le contrôle et rend l'intelligence accessible.",
    features: [
      "Interfaces murales tactiles",
      "Supervision centralisée",
      "Application personnalisée",
      "Automatisations avancées",
    ],
    icon: RotateCcw,
  },
];

const piliers = [
  { title: "Interopérabilité complète", desc: "Tous les systèmes communiquent. Aucun silos. Une cohérence d'ensemble." },
  { title: "Conception sur mesure", desc: "Chaque propriété est unique. Nous adaptons l'écosystème à votre architecture et vos besoins." },
  { title: "Évolutivité dans le temps", desc: "Votre système grandit avec vous. Ajoutez, modifiez, améliorez sans refonte complète." },
  { title: "Intégration certifiée", desc: "KNX, Crestron, Lutron, certifications garanties. Support technique réactif et durable." },
];

export default function EcosystemesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative w-full h-[80vh] overflow-hidden" aria-label="Les Écosystèmes Domotus">
        <Image src="/images/architects-hero.jpg" alt="Écosystème domotique intelligent — architecture cohérent" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-background/65" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 40%, transparent 30%, oklch(0 0 0 / 0.45) 100%)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-8 h-px bg-foreground/40" aria-hidden="true" />
            <p className="text-[11px] uppercase tracking-[0.35em] text-primary font-medium">Écosystèmes Intelligents</p>
            <span className="block w-8 h-px bg-foreground/40" aria-hidden="true" />
          </div>
          <h1
            className="font-black uppercase leading-none text-foreground text-balance mb-6"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", letterSpacing: "-0.03em" }}
          >
            Les Écosystèmes<br />
            <span className="italic text-foreground/60">Domotus</span>
          </h1>
          <p className="text-[15px] text-foreground/70 max-w-xl text-balance leading-relaxed mb-3">
            Une architecture intelligente pensée comme un tout cohérent.
          </p>
          <p className="text-[14px] text-foreground/60 max-w-lg text-balance leading-relaxed mb-10">
            Chaque propriété moderne repose sur une infrastructure invisible. Domotus conçoit des écosystèmes interconnectés, évolutifs et parfaitement intégrés.
          </p>
          <Link href="/contact" className="focus-ring inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85" style={{ color: "#0a0a0a" }}>
            Planifier une consultation <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ── PHILOSOPHIE ── */}
      <section className="py-28 bg-background" aria-labelledby="philo-heading">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2
            id="philo-heading"
            className="font-black uppercase leading-tight text-foreground text-balance mb-8"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
          >
            Une approche globale,<br />
            <span className="italic text-foreground/50">pas une accumulation d'équipements.</span>
          </h2>
          <div className="space-y-6 text-foreground/70 text-[15px] leading-relaxed max-w-2xl mx-auto mb-12">
            <p>
              Un bâtiment intelligent n'est pas une somme de technologies indépendantes.
              C'est un système structuré où chaque composant communique avec l'ensemble.
            </p>
            <p>
              Domotus conçoit des écosystèmes complets intégrant :
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {["Sécurité", "Connectivité", "Lumière", "Énergie", "Mobilité", "Expérience utilisateur"].map((item) => (
              <div key={item} className="px-4 py-3 bg-card border border-white/8 text-sm font-medium text-foreground/70 text-center">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LES ÉCOSYSTÈMES ── */}
      <section className="py-28 bg-card" aria-labelledby="ecosystemes-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <SectionLabel>Écosystèmes</SectionLabel>
            <h2
              id="ecosystemes-heading"
              className="font-black uppercase leading-none text-foreground text-balance"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
            >
              Six piliers de votre intelligence résidentielle.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/6">
            {ecosystemes.map((eco) => {
              const IconComponent = eco.icon;
              return (
                <div key={eco.id} className="bg-background hover:bg-background/80 transition-colors duration-300 p-10 flex flex-col gap-5">
                  <IconComponent size={24} className="text-primary" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold uppercase tracking-[0.08em] text-foreground text-[13px] mb-2">{eco.title}</h3>
                    <p className="italic text-foreground/60 text-[13px] leading-snug mb-4">{eco.manifesto}</p>
                    <p className="text-[13px] text-foreground/50 leading-relaxed mb-6">{eco.description}</p>
                  </div>
                  <ul className="space-y-2 text-[12px] text-foreground/45">
                    {eco.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── DIFFÉRENCIATION ── */}
      <section className="py-28 bg-background" aria-labelledby="diff-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <SectionLabel>Avantages</SectionLabel>
            <h2
              id="diff-heading"
              className="font-black uppercase leading-none text-foreground text-balance"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
            >
              Pourquoi un écosystème Domotus ?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-white/8">
            {piliers.map((p, i) => (
              <div key={i} className="bg-background/50 border border-white/6 hover:border-white/20 transition-colors duration-300 p-10 flex flex-col gap-4">
                <h3 className="font-bold uppercase tracking-[0.08em] text-foreground text-[14px]">{p.title}</h3>
                <p className="text-[14px] text-foreground/60 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TÉMOIGNAGE ── */}
      <section className="py-24 bg-card border-y border-white/8 text-center" aria-label="Projets Écosystèmes réalisés">
        <div className="mx-auto max-w-4xl px-6">
          <SectionLabel>Approche</SectionLabel>
          <h2
            className="font-black uppercase leading-none text-foreground text-balance mb-10 mt-6"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}
          >
            Concevons votre architecture intelligente.
          </h2>
          <p className="text-foreground/65 leading-relaxed text-[15px] max-w-2xl mx-auto mb-3">
            Chaque projet débute par une réflexion stratégique. Nos équipes analysent votre propriété afin de concevoir un écosystème cohérent, évolutif et parfaitement intégré.
          </p>
          <p className="text-foreground/55 text-[14px] max-w-2xl mx-auto">
            De l'audit initial à la livraison finale, nous pensons global. Aucun système n'existe en isolation chez Domotus.
          </p>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-28 bg-background text-center" aria-label="Consultation écosystème domotique">
        <div className="mx-auto max-w-2xl px-6">
          <h2
            className="font-black uppercase leading-none text-foreground text-balance mb-8"
            style={{ fontSize: "clamp(1.8rem, 5vw, 3.6rem)", letterSpacing: "-0.03em" }}
          >
            Planifier une<br />
            <span className="italic text-foreground/50">consultation privée</span>
          </h2>
          <p className="text-foreground/60 text-[15px] leading-relaxed mb-12 max-w-lg mx-auto">
            Découvrez comment un écosystème Domotus peut transformer votre résidence en un environnement entièrement maîtrisé.
          </p>
          <Link href="/contact" className="focus-ring inline-flex items-center gap-3 bg-primary px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-primary/85 transition-all duration-300" style={{ color: "#0a0a0a" }}>
            Planifier une consultation <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
