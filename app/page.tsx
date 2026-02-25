import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroSplit from "@/components/sections/HeroSplit";
import FaqAccordion from "@/components/sections/FaqAccordion";
import { ArrowRight, Zap, Shield, Activity, Wifi, Sun, Lock, CheckCircle2, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Domotus — Intégrateur Domotique Certifié Multi-Protocoles au Maroc | Casablanca, Marrakech, Rabat",
  description:
    "Domotus intègre des systèmes domotiques multi-protocoles (KNX, Crestron, Lutron) dans villas de luxe, appartements prestige et bâtiments tertiaires au Maroc. Audit technique personnalisé. Casablanca, Marrakech, Rabat, Tanger.",
  alternates: { canonical: "https://www.domotus.ma" },
  openGraph: {
    title: "Domotus — Intégrateur Domotique Premium au Maroc",
      description:
      "Certifié multi-protocoles KNX, Crestron & Lutron. 350+ projets réalisés. Audit technique personnalisé. Casablanca, Marrakech, Rabat.",
    url: "https://www.domotus.ma",
  },
};

const expertises = [
  {
    icon: Sun,
    title: "Éclairage Intelligent",
    benefit: "−40% sur la facture",
    description: "Scènes dynamiques, pilotage circadien automatique, Lutron Homeworks QSX. Votre espace s'adapte à votre humeur sans y penser.",
    href: "/expertise/eclairage",
    image: "/images/expertise-eclairage.jpg",
    imageAlt: "Éclairage intelligent Lutron dans une villa de luxe au Maroc",
  },
  {
    icon: Shield,
    title: "Sécurité & Accès",
    benefit: "Protection 24h/24",
    description: "Accès biométrique, vidéosurveillance 4K IA, alarme KNX centralisée. Alertes instantanées sur smartphone.",
    href: "/expertise/securite",
    image: "/images/expertise-securite.jpg",
    imageAlt: "Système de sécurité domotique premium pour villa Maroc",
  },
  {
    icon: Activity,
    title: "Gestion Énergie",
    benefit: "Économies dès le 1er mois",
    description: "Suivi temps réel, optimisation automatique des équipements, conformité LEED/HQE et normes marocaines.",
    href: "/expertise/energie",
    image: "/images/expertise-energie.jpg",
    imageAlt: "Gestion intelligente de l'énergie dans un bâtiment connecté au Maroc",
  },
  {
    icon: Wifi,
    title: "Réseaux & Infra",
    benefit: "Zéro coupure",
    description: "Infrastructure Ubiquiti redondante, Wi-Fi 6E mesh, fibre dédiée, supervision réseau 24/7 depuis Casablanca.",
    href: "/expertise/reseaux",
    image: "/images/expertise-reseau.jpg",
    imageAlt: "Infrastructure réseau Ubiquiti premium installée par Domotus Maroc",
  },
  {
    icon: Zap,
    title: "Audio / Vidéo",
    benefit: "Home cinema chez soi",
    description: "Distribution multi-zone, home cinema 4K Dolby Atmos, Sonos intégré. Contrôle unifié depuis une seule interface.",
    href: "/expertise/audiovisuel",
    image: "/images/expertise-av.jpg",
    imageAlt: "Home cinema privé Dolby Atmos installé par Domotus au Maroc",
  },
  {
    icon: Lock,
    title: "Supervision BMS",
    benefit: "+25% valeur immobilière",
    description: "Tableau de bord unifié, alertes temps réel, maintenance prédictive IA. Idéal pour promoteurs et gestionnaires au Maroc.",
    href: "/expertise/bms",
    image: "/images/expertise-bms.jpg",
    imageAlt: "Système BMS de supervision de bâtiment intelligent au Maroc",
  },
];

const stats = [
  { value: "+150", label: "Projets livrés au Maroc" },
  { value: "10 ans", label: "D'expertise domotique" },
  { value: "99.8%", label: "Disponibilité garantie" },
  { value: "24h", label: "Etude personnalisée" },
];

const steps = [
  {
    num: "01",
    title: "Audit technique",
    description: "Nous analysons votre espace, vos usages et vos objectifs en moins de 48h. Sans engagement, sans frais cachés.",
  },
  {
    num: "02",
    title: "Conception sur mesure",
    description: "Nos ingénieurs certifiés multi-protocoles co-conçoivent avec votre architecte un système invisible, évolutif, parfaitement intégré.",
  },
  {
    num: "03",
    title: "Installation & Formation",
    description: "Nos équipes interviennent avec précision. Vous repartez maître de votre installation, avec un support réactif à vie.",
  },
];

const testimonials = [
  {
    quote: "Domotus a transformé notre villa à Casablanca en un espace à part entière. Le système KNX est d'une fluidité remarquable — et l'équipe a livré dans les délais, ce qui est rare.",
    name: "Mehdi R.",
    role: "Propriétaire, Villa Anfa — Casablanca",
  },
  {
    quote: "En tant que promoteur, intégrer Domotus dès la conception a augmenté notre taux de vente de 18%. Les acheteurs demandent la domotique, Domotus la rend accessible.",
    name: "Laila M.",
    role: "Directrice développement, Groupe Immobilier Marrakech",
  },
];

const faqs = [
  {
    q: "Combien coûte une installation domotique au Maroc ?",
      a: "Le coût varie selon la superficie et les systèmes choisis. Pour une villa de 300 m², comptez entre 150 000 et 400 000 MAD pour une intégration multi-protocoles complète. Nous proposons un devis personnalisé en 48h, sans engagement.",
  },
  {
    q: "Qu'est-ce que la domotique KNX et pourquoi est-ce la référence ?",
    a: "KNX est le seul standard mondial ouvert pour l'automatisation des bâtiments. Il garantit l'interopérabilité entre 500+ marques certifiées, une durée de vie supérieure à 30 ans et une maintenance indépendante de tout fabricant — idéal pour les projets au Maroc.",
  },
  {
    q: "Intervenez-vous en rénovation ou uniquement en neuf ?",
    a: "Les deux. Nous intégrons des systèmes intelligents dans des bâtiments existants grâce à nos solutions sans fil certifiées KNX RF, avec un impact minimal sur les travaux existants. Nous intervenons à Casablanca, Marrakech, Rabat et Tanger.",
  },
  {
    q: "Quelle est la durée d'un projet résidentiel ?",
    a: "Pour une villa de 200–500 m², les travaux durent entre 3 et 8 semaines. La programmation et la mise en service représentent 30% du temps total — c'est là que se joue la qualité de l'expérience finale.",
  },
  {
    q: "Puis-je contrôler mon installation depuis mon smartphone ?",
    a: "Oui. Toutes nos installations sont pilotables via application mobile (iOS & Android), Apple HomeKit, Google Home et interface web sécurisée. Nous configurons également des automatisations vocales Siri, Google Assistant ou Alexa.",
  },
  {
    q: "Proposez-vous une maintenance après installation ?",
    a: "Oui. Contrats annuels avec supervision à distance 24/7, mises à jour logicielles incluses, intervention sur site garantie sous 24h à Casablanca et 48h dans les autres villes du Maroc.",
  },
];

// ── Schema.org ────────────────────────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Combien coûte une installation domotique au Maroc ?", acceptedAnswer: { "@type": "Answer", text: "Pour une villa de 300 m², comptez entre 150 000 et 400 000 MAD pour une intégration multi-protocoles complète. Audit technique personnalisé, sans engagement." } },
    { "@type": "Question", name: "Qu'est-ce que la domotique multi-protocoles et pourquoi est-ce la référence ?", acceptedAnswer: { "@type": "Answer", text: "Les systèmes multi-protocoles (KNX, Crestron, Lutron) garantissent une interopérabilité maximale. KNX notamment est le seul standard mondial ouvert avec 500+ marques certifiées, une durée de vie supérieure à 30 ans et une maintenance indépendante de tout fabricant." } },
    { "@type": "Question", name: "Intervenez-vous en rénovation ou uniquement en neuf ?", acceptedAnswer: { "@type": "Answer", text: "Les deux. Nous intégrons des systèmes intelligents dans des bâtiments existants grâce à nos solutions sans fil certifiées multi-protocoles (KNX RF, Crestron, Lutron). Nous intervenons à Casablanca, Marrakech, Rabat et Tanger." } },
    { "@type": "Question", name: "Quelle est la durée d'un projet résidentiel ?", acceptedAnswer: { "@type": "Answer", text: "Pour une villa de 200–500 m², les travaux durent entre 3 et 8 semaines selon la complexité du système." } },
    { "@type": "Question", name: "Puis-je contrôler mon installation depuis mon smartphone ?", acceptedAnswer: { "@type": "Answer", text: "Oui. Toutes nos installations sont pilotables via iOS, Android, Apple HomeKit, Google Home et interface web sécurisée." } },
    { "@type": "Question", name: "Proposez-vous une maintenance après installation ?", acceptedAnswer: { "@type": "Answer", text: "Oui. Contrats annuels avec supervision à distance 24/7, mises à jour logicielles incluses, intervention sur site garantie sous 24h à Casablanca." } },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Domotus",
  url: "https://www.domotus.ma",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: "https://www.domotus.ma/journal?q={search_term_string}" },
    "query-input": "required name=search_term_string",
  },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-5">
      <span className="block w-8 h-px bg-foreground/30" aria-hidden="true" />
      <p className="text-[11px] uppercase tracking-[0.3em] text-primary font-semibold">{children}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ── Schema.org ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />

      <HeroSplit />

      {/* ── SOCIAL PROOF BAND — stats immédiates ── */}
      <section className="bg-card border-b border-white/6" aria-label="Chiffres clés Domotus Maroc">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <dl className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/6">
            {stats.map((s) => (
              <div key={s.label} className="px-8 py-8 flex flex-col gap-1">
                <dt className="text-[11px] uppercase tracking-[0.2em] text-foreground/45 order-2">{s.label}</dt>
                <dd className="font-black text-foreground order-1" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── BENEFIT-LED PROPOSITION ── */}
      <section className="py-24 lg:py-36 bg-background" aria-labelledby="value-prop-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <SectionLabel>Pourquoi Domotus</SectionLabel>
              <h2
                id="value-prop-heading"
                className="font-black uppercase leading-none text-foreground mb-6 text-balance"
                style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", letterSpacing: "-0.02em" }}
              >
                Votre maison vous obéit.{" "}
                <span className="italic text-foreground/45">Sans effort.</span>
              </h2>
              <p className="text-foreground/55 leading-relaxed mb-6 text-[15px]">
                Imaginez entrer chez vous : les lumières s'adaptent à l'heure, la climatisation est déjà à la bonne température, les volets se ferment automatiquement au coucher du soleil. Tout ça, sans rien toucher.
              </p>
              <p className="text-foreground/55 leading-relaxed mb-10 text-[15px]">
                C'est ce que nous livrons dans chaque villa, appartement et immeuble de bureaux au Maroc depuis 18 ans — avec les certifications multi-protocoles (KNX, Crestron et Lutron) qui le prouvent.
              </p>
              <ul className="flex flex-col gap-3 mb-10" role="list">
                {[
                  "Contrôle total depuis votre smartphone",
                  "Économies d'énergie mesurables dès le 1er mois",
                  "Sécurité renforcée, accès à distance",
                  "Valeur immobilière augmentée de 15 à 25%",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-foreground/65">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="focus-ring inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85"
                style={{ color: "#0a0a0a" }}
              >
                Demander un audit gratuit
                <ArrowRight size={13} aria-hidden="true" />
              </Link>
            </div>

            {/* Split image */}
            <div className="grid grid-cols-2 gap-3 h-[480px]">
              <div className="relative overflow-hidden rounded-sm row-span-2">
                <Image
                  src="/images/villa-prestige.jpg"
                  alt="Villa équipée en domotique KNX par Domotus Casablanca"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-sm">
                <Image
                  src="/images/showroom.jpg"
                  alt="Showroom domotique Domotus Casablanca"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-sm">
                <Image
                  src="/images/immeuble-tertiaire.jpg"
                  alt="Bâtiment tertiaire connecté par Domotus au Maroc"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID — benefit-first ── */}
      <section className="py-24 bg-card" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <div>
              <SectionLabel>Nos expertises</SectionLabel>
              <h2
                id="services-heading"
                className="font-black uppercase leading-none text-foreground text-balance"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
              >
                Ce que vous gagnez{" "}
                <span className="italic text-foreground/45">concrètement.</span>
              </h2>
            </div>
            <Link
              href="/villas-apparts"
              className="focus-ring shrink-0 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-foreground/40 hover:text-primary transition-colors duration-300"
            >
              Voir nos réalisations <ArrowRight size={12} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/6">
            {expertises.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="relative overflow-hidden aspect-[4/3] group"
                >
                  {/* Background image */}
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Permanent dark overlay */}
                  <div className="absolute inset-0 bg-background/70 group-hover:bg-background/20 transition-colors duration-500" />

                  {/* Default state — icon + title + benefit always visible */}
                  <div className="absolute inset-0 flex flex-col justify-end p-7 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-2">
                    <div className="mb-3 w-9 h-9 border border-white/20 flex items-center justify-center text-primary">
                      <Icon size={16} aria-hidden="true" />
                    </div>
                    <h3 className="font-bold uppercase tracking-[0.1em] text-foreground text-[13px] mb-1">
                      {item.title}
                    </h3>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">
                      {item.benefit}
                    </span>
                  </div>

                  {/* Hover state — full content revealed */}
                  <div className="absolute inset-0 flex flex-col justify-end p-7 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out">
                    <div className="mb-3 w-9 h-9 border border-primary/50 flex items-center justify-center text-primary">
                      <Icon size={16} aria-hidden="true" />
                    </div>
                    <h3 className="font-bold uppercase tracking-[0.1em] text-foreground text-[13px] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[12px] text-foreground/75 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <Link
                      href={item.href}
                      className="focus-ring inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-primary font-semibold"
                    >
                      En savoir plus <ArrowRight size={11} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROCESS — 3 steps ── */}
      <section className="py-24 lg:py-36 bg-background" aria-labelledby="process-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-16">
            <SectionLabel>Comment ça marche</SectionLabel>
            <h2
              id="process-heading"
              className="font-black uppercase leading-none text-foreground text-balance"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
            >
              De l&apos;idée à la maison intelligente{" "}
              <span className="italic text-foreground/45">en 3 étapes.</span>
            </h2>
          </div>
          <ol className="grid lg:grid-cols-3 gap-px bg-white/6" role="list">
            {steps.map((step, i) => (
              <li key={step.num} className="bg-card p-10 flex flex-col gap-5 relative">
                <span
                  className="font-black text-foreground/8 leading-none select-none"
                  style={{ fontSize: "clamp(4rem, 8vw, 7rem)" }}
                  aria-hidden="true"
                >
                  {step.num}
                </span>
                <h3 className="font-bold uppercase tracking-[0.1em] text-foreground text-[14px] -mt-4">
                  {step.title}
                </h3>
                <p className="text-[13px] text-foreground/50 leading-relaxed">
                  {step.description}
                </p>
                {i < steps.length - 1 && (
                  <ArrowRight
                    size={16}
                    className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-primary/40"
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ol>
          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="focus-ring inline-flex items-center gap-3 bg-primary px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85"
              style={{ color: "#0a0a0a" }}
            >
              Commencer l&apos;étape 1 — Audit technique
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-card" aria-labelledby="temoignages-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-14 text-center">
            <SectionLabel>Ils nous font confiance</SectionLabel>
            <h2
              id="temoignages-heading"
              className="font-black uppercase leading-none text-foreground text-balance"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
            >
              Ce que disent nos{" "}
              <span className="italic text-foreground/45">clients.</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-px bg-white/6">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="bg-background p-10 flex flex-col gap-6">
                <div className="flex gap-1" aria-label="5 étoiles">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-primary text-sm" aria-hidden="true">★</span>
                  ))}
                </div>
                <p className="text-[15px] text-foreground/70 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-auto pt-4 border-t border-white/8">
                  <cite className="not-italic">
                    <span className="block text-[13px] font-bold text-foreground uppercase tracking-[0.08em]">{t.name}</span>
                    <span className="block text-[11px] text-foreground/40 mt-0.5">{t.role}</span>
                  </cite>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARCHÉS — Résidentiel & Tertiaire ── */}
      <section className="h-[55vh] lg:h-[65vh] grid lg:grid-cols-2 overflow-hidden" aria-label="Nos marchés domotique au Maroc">
        <Link href="/villas-apparts" className="relative overflow-hidden group focus-ring block">
          <Image
            src="/images/villa-prestige.jpg"
            alt="Domotique villas et appartements de luxe au Maroc — Domotus"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-background/50 group-hover:bg-background/35 transition-colors duration-500" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
            <SectionLabel>Résidentiel</SectionLabel>
            <h2 className="font-black uppercase text-foreground leading-none text-balance" style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)", letterSpacing: "-0.02em" }}>
              Maison Connectée
            </h2>
            <p className="mt-3 text-[13px] text-foreground/60 max-w-xs leading-relaxed">
              À partir de 150 000 MAD · Livraison en 4–8 semaines
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-primary">
              Voir les réalisations <ArrowRight size={11} aria-hidden="true" />
            </span>
          </div>
        </Link>
        <Link href="/promoteurs" className="relative overflow-hidden group focus-ring block">
          <Image
            src="/images/immeuble-tertiaire.jpg"
            alt="Domotique pour promoteurs et bâtiments tertiaires au Maroc"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-colors duration-500" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
            <SectionLabel>Tertiaire &amp; Promoteurs</SectionLabel>
            <h2 className="font-black uppercase text-foreground leading-none text-balance" style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)", letterSpacing: "-0.02em" }}>
              Immeubles &amp; Bureaux
            </h2>
            <p className="mt-3 text-[13px] text-foreground/60 max-w-xs leading-relaxed">
              Labels HQE, BREEAM · +20% valeur locative
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-primary">
              Travailler avec nous <ArrowRight size={11} aria-hidden="true" />
            </span>
          </div>
        </Link>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 lg:py-36 bg-background" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="mb-14">
            <SectionLabel>Questions fréquentes</SectionLabel>
            <h2
              id="faq-heading"
              className="font-black uppercase leading-none text-foreground text-balance"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
            >
              Vos questions,{" "}
              <span className="italic text-foreground/45">nos réponses.</span>
            </h2>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              }),
            }}
          />
          <FaqAccordion items={faqs} />
          <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-[13px] text-foreground/45">Une question spécifique à votre projet ?</p>
            <Link
              href="/contact"
              className="focus-ring inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-primary hover:text-primary/70 transition-colors duration-300"
            >
              Parler à un expert <ArrowRight size={12} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL — urgence + double action ── */}
      <section className="relative py-32 overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute inset-0 bg-card" />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 70% 60% at 50% 110%, oklch(0.91 0.12 188 / 0.09), transparent)" }}
        />
        <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <SectionLabel>Démarrez maintenant</SectionLabel>
          <h2
            id="cta-heading"
            className="font-black uppercase leading-none text-foreground text-balance mb-6"
            style={{ fontSize: "clamp(2.2rem, 6vw, 5rem)", letterSpacing: "-0.03em" }}
          >
            Votre audit technique{" "}
            <span className="italic text-foreground/45">en 24h.</span>
          </h2>
          <p className="text-foreground/45 leading-relaxed mb-4 max-w-md mx-auto text-[15px]">
            Plus de 150 familles et promoteurs au Maroc nous ont fait confiance. Rejoignez-les.
          </p>
          <p className="text-primary text-[13px] font-semibold mb-10 uppercase tracking-[0.1em]">
            Audit technique · Sans engagement · Étude personnalisée en 48h
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/contact"
              className="focus-ring inline-flex items-center gap-3 bg-primary px-10 py-5 text-[12px] font-black uppercase tracking-[0.2em] text-background transition-all duration-300 hover:bg-primary/85 rounded-sm w-full sm:w-auto justify-center"
            >
              Obtenir mon devis gratuit
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <a
              href="tel:+212663666627"
              className="focus-ring inline-flex items-center gap-3 border border-white/20 px-10 py-5 text-[12px] uppercase tracking-[0.2em] text-foreground/60 transition-all duration-300 hover:border-primary hover:text-primary rounded-sm w-full sm:w-auto justify-center"
            >
              <Phone size={13} aria-hidden="true" />
              +212 663 66 66 27
            </a>
          </div>
          <p className="text-[11px] text-foreground/25 uppercase tracking-[0.1em]">
            Casablanca · Marrakech · Rabat · Tanger — et tout le Maroc
          </p>
        </div>
      </section>
    </>
  );
}
