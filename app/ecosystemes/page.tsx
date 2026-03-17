import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Wifi, Lightbulb, Zap, Plug, RotateCcw, Lock, Home, Zap as ZapIcon, Leaf } from "lucide-react";
import SectionLabel from "@/components/ui/section-label";

export const metadata: Metadata = {
  title: "Écosystème Domotique Intégré — Interopérabilité & Modularité | Domotus",
  description:
    "Écosystème domotique unifié et interopérable. 6 domaines intégrés : sécurité, connectivité, lumière, énergie, mobilité, expérience. Sans silos technologiques. KNX, Crestron, Lutron, Matter certifiés.",
  keywords: "écosystème domotique, interopérabilité, KNX, Crestron, maison intelligente, Maroc, système intégré",
  alternates: { canonical: "https://www.domotus.ma/ecosystemes" },
  openGraph: {
    title: "Écosystème Domotique Intégré — Interopérabilité & Modularité",
    description: "Architecture domotique complète et interconnectée. Système unifié sans fragmentation technologique.",
    url: "https://www.domotus.ma/ecosystemes",
    type: "website",
    images: [
      {
        url: "https://www.domotus.ma/images/og-ecosystem.jpg",
        width: 1200,
        height: 630,
        alt: "Écosystème Domotus intégré",
      },
    ],
  },
};

// JSON-LD Schema pour SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Écosystème Domotus",
  description: "Système domotique intégré et interopérable",
  offers: [
    {
      "@type": "Offer",
      name: "Sécurité & Contrôle d'Accès",
      description: "Protection intégrée avec supervision centralisée"
    },
    {
      "@type": "Offer",
      name: "Connectivité & Infrastructure",
      description: "Backbone du système interconnecté"
    },
    {
      "@type": "Offer",
      name: "Lumière & Ambiance",
      description: "Éclairage scénarisé adaptatif"
    },
    {
      "@type": "Offer",
      name: "Énergie & Performance",
      description: "Optimisation énergétique temps réel"
    },
    {
      "@type": "Offer",
      name: "Mobilité Électrique",
      description: "Recharge intelligente intégrée"
    },
    {
      "@type": "Offer",
      name: "Expérience & Interaction",
      description: "Interface centralisée intelligente"
    }
  ]
};

const ecosystemes = [
  {
    id: 1,
    title: "Sécurité & Contrôle d'Accès",
    manifesto: "Cœur de la supervision intelligente.",
    description: "Système de sécurité unifié qui communique avec tous les autres domaines : éclairage, lumière de bienvenue, alertes énergétiques.",
    interconnections: [
      "📡 Parle à Lumière pour scènes de bienvenue",
      "📡 Intégré à Expérience pour contrôle centralisé",
      "📡 Alertes vers Connectivité pour notifications"
    ],
    features: [
      "Vidéosurveillance haute définition",
      "Contrôle d'accès intelligent",
      "Interphonie connectée",
    ],
    icon: Shield,
  },
  {
    id: 2,
    title: "Connectivité & Infrastructure",
    manifesto: "Backbone du système unifié.",
    description: "Infrastructure réseau qui relie tous les domaines. Pas d'îlos — chaque système communique via le même backbone robuste.",
    interconnections: [
      "📡 Connecte tous les 5 autres domaines",
      "📡 Soutient la communication multi-protocoles",
      "📡 Résilience garantie pour continuité"
    ],
    features: [
      "Wi-Fi maillé haute performance",
      "Réseau filaire structuré",
      "Multi-protocoles intégrés",
    ],
    icon: Wifi,
  },
  {
    id: 3,
    title: "Lumière & Ambiance",
    manifesto: "Expérience architectorale.",
    description: "Éclairage scénarisé qui s'adapte au contexte global : mode travail, absence, accueil. Dialogue continu avec sécurité et énergie.",
    interconnections: [
      "📡 Coordonnée avec Sécurité (scènes bienvenue)",
      "📡 Optimisée par Énergie (efficacité)",
      "📡 Adaptée par Expérience (automation)"
    ],
    features: [
      "Éclairage scénarisé adaptatif",
      "Mise en valeur architecturale",
      "Automatismes intelligents",
    ],
    icon: Lightbulb,
  },
  {
    id: 4,
    title: "Énergie & Performance",
    manifesto: "Optimisation continue.",
    description: "Pilotage énergétique intelligent qui dialogue avec climat, mobilité et charge. Chaque décision tient compte du système complet.",
    interconnections: [
      "📡 Optimise Lumière et Climat",
      "📡 Coordonne recharge Mobilité",
      "📡 Alertes via Connectivité"
    ],
    features: [
      "Monitoring énergétique temps réel",
      "Optimisation charge-aware",
      "Intégration solaire native",
    ],
    icon: Zap,
  },
  {
    id: 5,
    title: "Mobilité Électrique",
    manifesto: "Recharge intégrée.",
    description: "Bornes de recharge qui s'orchestrent avec l'énergie disponible, le climat intérieur, et les scènes du bâtiment.",
    interconnections: [
      "📡 Coordonnée avec Énergie (charge optimale)",
      "📡 Informée par Expérience (timing)",
      "📡 Intégrée via Connectivité"
    ],
    features: [
      "Bornes de recharge intelligentes",
      "Gestion dynamique de charge",
      "Intégration énergétique native",
    ],
    icon: Plug,
  },
  {
    id: 6,
    title: "Expérience & Interaction",
    manifesto: "Interface du système.",
    description: "Tableau de bord central où l'utilisateur orchestre l'ensemble. Chaque action a visibilité sur l'impact système complet.",
    interconnections: [
      "📡 Centralise les 5 autres domaines",
      "📡 Visualise les interconnexions",
      "📡 Orchestre les scénarios"
    ],
    features: [
      "Interfaces murales intelligentes",
      "Supervision globale en temps réel",
      "Automatisations multi-système",
    ],
    icon: RotateCcw,
  },
];

const piliers = [
  { 
    title: "Harmonie Systémique", 
    desc: "Chaque domaine (sécurité, lumière, énergie) fonctionne comme une seule entité. Les décisions sont systémiques, pas isolées.",
    icon: Home
  },
  { 
    title: "Interopérabilité Native", 
    desc: "Pas de couches additionnelles. Les systèmes parlent le même langage — KNX, Crestron, Lutron, Matter, Zigbee.",
    icon: Wifi
  },
  { 
    title: "Évolution Transparente", 
    desc: "Grandissez sans refondre. Modularité garantie : ajoutez domaines et capacités sans démolition technologique.",
    icon: ZapIcon
  },
];

const scenarios = [
  {
    title: "Mode Absence",
    description: "Lorsque la maison est vide, l'écosystème s'orchestre automatiquement.",
    orchestration: [
      { system: "Sécurité", action: "Monitoring continu + alertes", delay: "Immédiat" },
      { system: "Lumière", action: "Éclairage simulé aléatoire (simulation présence)", delay: "Dès départ" },
      { system: "Énergie", action: "Mode économique, charges reportées", delay: "Continu" },
      { system: "Connectivité", action: "Notifications en temps réel", delay: "Immédiat" },
    ],
    icon: Lock
  },
  {
    title: "Arrivée à la Maison",
    description: "L'écosystème vous accueille de manière orchestrée et naturelle.",
    orchestration: [
      { system: "Sécurité", action: "Déverrouillage, validation", delay: "0s" },
      { system: "Lumière", action: "Illumination progressive bienvenue", delay: "1s" },
      { system: "Climat", action: "Chauffage/Rafraîchissement ajusté", delay: "2s" },
      { system: "Expérience", action: "Ambiance personnalisée active", delay: "3s" },
    ],
    icon: Home
  },
  {
    title: "Journée de Travail",
    description: "Mode professionnel : sécurité, connectivité, efficacité énergétique.",
    orchestration: [
      { system: "Connectivité", action: "VPN sécurisé, réseau professionnel", delay: "Au réveil" },
      { system: "Énergie", action: "Optimisation pour charges de travail", delay: "Continu" },
      { system: "Lumière", action: "Concentration + bienêtre lumière naturelle", delay: "Continu" },
      { system: "Sécurité", action: "Mode discret, monitoring passif", delay: "Continu" },
    ],
    icon: ZapIcon
  },
];

const advantages = [
  {
    title: "Complétude sans Fragmentation",
    description: "6 domaines intégrés en un seul écosystème. Plus besoin de 10 prestataires différents."
  },
  {
    title: "Interopérabilité Garantie",
    description: "Chaque système parle aux autres sans couches additionnelles de complexité."
  },
  {
    title: "Modularité Évolutive",
    description: "Commencez petit, grandissez sans redéployer. Vos besoins évoluent, le système aussi."
  },
  {
    title: "Expertise Certifiée Multi-Protocoles",
    description: "Équipe référente au Maroc avec certifications KNX, Crestron, Lutron. Support 24/7."
  },
];

export default function EcosystemesPage() {
  return (
    <>
      {/* ── JSON-LD SCHEMA ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ── */}
      <section className="relative w-full h-[80vh] overflow-hidden" aria-label="Écosystème Domotique Intégré Domotus">
        <Image src="/images/architects-hero.jpg" alt="Écosystème domotique intelligent — architecture cohérente" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-background/65" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 40%, transparent 30%, oklch(0 0 0 / 0.45) 100%)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-8 h-px bg-foreground/40" aria-hidden="true" />
            <p className="text-[11px] uppercase tracking-[0.35em] text-primary font-medium">Approche Holistique</p>
            <span className="block w-8 h-px bg-foreground/40" aria-hidden="true" />
          </div>
          <h1
            className="font-black uppercase leading-none text-foreground text-balance mb-6"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", letterSpacing: "-0.03em" }}
          >
            Écosystème<br />
            <span className="italic text-foreground/60">Véritablement Intégré</span>
          </h1>
          <p className="text-[15px] text-foreground/70 max-w-xl text-balance leading-relaxed mb-3">
            Pas une somme d'équipements. Un système unifié où chaque composant dialogue avec les autres.
          </p>
          <p className="text-[14px] text-foreground/60 max-w-lg text-balance leading-relaxed mb-10">
            Sécurité, connectivité, lumière, énergie, mobilité, expérience — orchestrés comme un seul organisme vivant.
          </p>
          <Link href="/contact" className="focus-ring inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85" style={{ color: "#0a0a0a" }}>
            Consulter un expert <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ── PHILOSOPHIE INTÉGRATIVE ── */}
      <section className="py-20 lg:py-32 bg-white" aria-labelledby="philosophy-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16 lg:mb-24">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-black" aria-hidden="true"></div>
              <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "14px", lineHeight: "20px", color: "#000000", textTransform: "uppercase", letterSpacing: "0.1em" }}>PHILOSOPHIE</span>
            </div>
            <h2
              id="philosophy-heading"
              className="font-black uppercase leading-tight text-black text-balance mb-8"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}
            >
              Un écosystème<br />
              <span className="italic font-light">véritablement intégré.</span>
            </h2>
            <p className="text-lg text-black/70 leading-relaxed max-w-3xl">
              L'intelligence réside dans la cohérence, pas dans l'accumulation. Chaque domaine fonctionne en harmonie avec les autres, créant une expérience systémique où la somme est bien plus grande que ses parties.
            </p>
          </div>

          {/* 3 Piliers */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {piliers.map((pilier, idx) => {
              const Icon = pilier.icon;
              return (
                <div key={idx} className="group">
                  <div className="p-8 rounded-xl bg-black/2 border border-black/8 transition-all duration-500 hover:border-black/20 hover:shadow-lg hover:-translate-y-1">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-black/8 group-hover:bg-black/12 transition-colors duration-300 mb-6">
                      <Icon size={24} className="text-black" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold uppercase text-black text-sm leading-tight tracking-wide mb-3">
                      {pilier.title}
                    </h3>
                    <p className="text-sm text-black/70 leading-relaxed">
                      {pilier.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CARTOGRAPHIE INTÉGRATIVE ── */}
      <section className="py-20 lg:py-32 bg-background" aria-labelledby="architecture-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16 lg:mb-24">
            <SectionLabel>Architecture</SectionLabel>
            <h2
              id="architecture-heading"
              className="font-black uppercase leading-none text-foreground text-balance mt-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
            >
              Les 6 Domaines Interconnectés
            </h2>
            <p className="text-foreground/70 text-[15px] leading-relaxed max-w-2xl mt-6">
              Chaque domaine communique avec les autres. L'architecture est construite sur l'interopérabilité, sans îlos technologiques.
            </p>
          </div>

          {/* Solutions Grid - Mobile First Responsive */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/6">
            {ecosystemes.map((eco) => {
              const IconComponent = eco.icon;
              return (
                <div key={eco.id} className="bg-background hover:bg-background/80 transition-colors duration-300 p-8 lg:p-10 flex flex-col gap-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-bold uppercase tracking-[0.08em] text-foreground text-[13px] mb-1">{eco.title}</h3>
                      <p className="italic text-foreground/60 text-[12px]">{eco.manifesto}</p>
                    </div>
                    <IconComponent size={24} className="text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  </div>

                  <p className="text-[13px] text-foreground/50 leading-relaxed">
                    {eco.description}
                  </p>

                  {/* Interconnections highlight */}
                  <div className="pt-4 border-t border-white/8">
                    <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-primary mb-3">Interconnexions</p>
                    <ul className="space-y-2">
                      {eco.interconnections.map((conn, idx) => (
                        <li key={idx} className="text-[12px] text-foreground/50 leading-snug">
                          {conn}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features */}
                  <div className="pt-4 border-t border-white/8">
                    <ul className="space-y-1.5 text-[12px] text-foreground/45">
                      {eco.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SCÉNARIOS INTÉGRÉS ── */}
      <section className="py-20 lg:py-32 bg-card" aria-labelledby="scenarios-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16 lg:mb-24">
            <SectionLabel>Orchestration</SectionLabel>
            <h2
              id="scenarios-heading"
              className="font-black uppercase leading-none text-foreground text-balance mt-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
            >
              L'Écosystème en Action
            </h2>
            <p className="text-foreground/70 text-[15px] leading-relaxed max-w-2xl mt-6">
              Voici comment l'écosystème s'orchestre pour créer des expériences transparentes et intelligentes.
            </p>
          </div>

          {/* Scenarios Grid */}
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {scenarios.map((scenario, idx) => {
              const Icon = scenario.icon;
              return (
                <div key={idx} className="bg-background border border-white/6 rounded-lg p-8 hover:border-white/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon size={20} className="text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold uppercase text-foreground text-sm tracking-wide">
                      {scenario.title}
                    </h3>
                  </div>

                  <p className="text-[14px] text-foreground/60 leading-relaxed mb-6">
                    {scenario.description}
                  </p>

                  {/* Orchestration Timeline */}
                  <div className="space-y-4">
                    {scenario.orchestration.map((step, stepIdx) => (
                      <div key={stepIdx} className="flex gap-4 text-sm">
                        <div className="flex-shrink-0 w-20">
                          <span className="text-[11px] font-bold uppercase text-primary">{step.delay}</span>
                        </div>
                        <div className="flex-grow">
                          <p className="font-medium text-foreground/80 text-[13px]">{step.system}</p>
                          <p className="text-foreground/50 text-[12px] mt-1">{step.action}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── AVANTAGES DOMOTUS ── */}
      <section className="py-20 lg:py-32 bg-background" aria-labelledby="advantages-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16 lg:mb-24">
            <SectionLabel>Avantages</SectionLabel>
            <h2
              id="advantages-heading"
              className="font-black uppercase leading-none text-foreground text-balance mt-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
            >
              Pourquoi Choisir Domotus ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {advantages.map((adv, idx) => (
              <div key={idx} className="bg-card border border-white/6 rounded-lg p-8 hover:border-white/20 transition-all duration-300">
                <h3 className="font-bold uppercase text-foreground text-sm tracking-wide mb-3">
                  {adv.title}
                </h3>
                <p className="text-foreground/60 text-[14px] leading-relaxed">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FONDATIONS TECHNIQUES ── */}
      <section className="py-20 lg:py-32 bg-card border-y border-white/6" aria-label="Fondations techniques ouvertes">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
          <SectionLabel>Fondations</SectionLabel>
          <h2
            className="font-black uppercase leading-none text-foreground text-balance mt-4 mb-8"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}
          >
            Multi-Protocoles Certifiés
          </h2>
          <p className="text-foreground/70 text-[15px] leading-relaxed max-w-2xl mx-auto mb-10">
            Pas d'enfermement technologique. Domotus intègre les standards ouverts qui comptent : KNX, Crestron, Lutron, Matter, Zigbee. Votre système grandit avec la technologie.
          </p>
          <div className="inline-flex flex-wrap gap-3 justify-center">
            {["KNX", "Crestron", "Lutron", "Matter", "Zigbee"].map((protocol) => (
              <span key={protocol} className="px-4 py-2 bg-background border border-white/10 rounded-full text-sm font-medium text-foreground/70">
                {protocol}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-28 bg-background text-center" aria-label="Consultation écosystème intégré">
        <div className="mx-auto max-w-2xl px-6">
          <h2
            className="font-black uppercase leading-none text-foreground text-balance mb-8"
            style={{ fontSize: "clamp(1.8rem, 5vw, 3.6rem)", letterSpacing: "-0.03em" }}
          >
            Concevons votre<br />
            <span className="italic text-foreground/50">écosystème intégré</span>
          </h2>
          <p className="text-foreground/60 text-[15px] leading-relaxed mb-12 max-w-lg mx-auto">
            Découvrez comment les 6 domaines peuvent fonctionner comme un système unifié pour transformer votre résidence.
          </p>
          <Link href="/contact" className="focus-ring inline-flex items-center gap-3 bg-primary px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-primary/85 transition-all duration-300" style={{ color: "#0a0a0a" }}>
            Planifier une consultation <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
