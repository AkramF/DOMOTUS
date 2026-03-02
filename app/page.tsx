import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import HeroSplit from "@/components/sections/HeroSplit";
import { ArrowRight, Zap, Shield, Activity, Wifi, Sun, Lock } from "lucide-react";

// Lazy load non-critical sections to reduce initial JS bundle
const FaqAccordion = dynamic(() => import("@/components/sections/FaqAccordion"), {
  loading: () => <div className="bg-background py-20" />,
  ssr: true,
});

// Lazy load icons used only in non-critical sections
const CheckCircle2Icon = dynamic(async () => {
  const { CheckCircle2 } = await import("lucide-react");
  return { default: CheckCircle2 };
}, { ssr: true });

const PhoneIcon = dynamic(async () => {
  const { Phone } = await import("lucide-react");
  return { default: Phone };
}, { ssr: true });

export const metadata: Metadata = {
  title: "Domotique Maroc — Maison Intelligente Certifiée KNX | Domotus",
  description:
    "Domotus : intégrateur domotique multi-protocoles au Maroc. KNX, Crestron, Lutron pour villas de luxe et bâtiments tertiaires. Audit gratuit.",
  alternates: { canonical: "https://www.domotus.ma" },
  openGraph: {
    title: "Domotique Maroc — Maison Intelligente | Domotus",
    description:
      "Intégrateur certifié KNX, Crestron & Lutron. 150+ projets réalisés. Audit technique gratuit.",
    url: "https://www.domotus.ma",
    images: [
      {
        url: "https://www.domotus.ma/images/og-domotus.jpg",
        width: 1200,
        height: 630,
        alt: "Domotus - Intégrateur domotique au Maroc",
      },
    ],
  },
};

const expertises = [
  {
    icon: Sun,
    title: "Éclairage Intelligent",
    badge: "La signature visuelle de vos espaces",
    description: "L'éclairage suit le rythme naturel du soleil et s'adapte à vos instants de vie grâce au pilotage circadien et aux scènes dynamiques (Lutron HomeWorks). Une élégance qui sublime votre architecture.",
    href: "/expertise/eclairage",
    image: "/images/expertise-eclairage.jpg",
    imageAlt: "Éclairage intelligent Lutron dans une villa de luxe au Maroc",
  },
  {
    icon: Shield,
    title: "Sécurité & Accès",
    badge: "Une tranquillité d'esprit absolue",
    description: "Une protection invisible et infaillible. Accès biométrique discret, vidéosurveillance 4K intelligente et supervision KNX centralisée. Gardez le contrôle total et recevez des alertes ciblées, où que vous soyez.",
    href: "/expertise/securite",
    image: "/images/expertise-securite.jpg",
    imageAlt: "Système de sécurité domotique premium pour villa Maroc",
  },
  {
    icon: Activity,
    title: "Gestion Énergie & Climat",
    badge: "L'efficience invisible",
    description: "Votre maison optimise automatiquement la température et l'énergie en temps réel. Une intelligence qui allie confort thermique absolu et conformité aux normes d'excellence (LEED/HQE), sans le moindre effort.",
    href: "/expertise/energie",
    image: "/images/expertise-energie.jpg",
    imageAlt: "Gestion intelligente de l'énergie dans un bâtiment connecté au Maroc",
  },
  {
    icon: Wifi,
    title: "Réseaux & Connectivité",
    badge: "Le système nerveux de votre habitat",
    description: "Profitez d'une couverture Wi-Fi 6E parfaite et d'une infrastructure fibre redondante (Ubiquiti). Une fiabilité de niveau professionnel, supervisée 24/7 pour une fluidité sans la moindre interruption.",
    href: "/expertise/reseaux",
    image: "/images/expertise-reseau.jpg",
    imageAlt: "Infrastructure réseau Ubiquiti premium installée par Domotus Maroc",
  },
  {
    icon: Zap,
    title: "Audio & Divertissement",
    badge: "L'émotion à l'état pur",
    description: "De la diffusion musicale multi-zones (Sonos) aux salles de cinéma privées 4K Dolby Atmos. L'image et le son haute-fidélité s'intègrent à vos murs avec une discrétion totale, pilotés depuis une interface unique.",
    href: "/expertise/audiovisuel",
    image: "/images/expertise-av.jpg",
    imageAlt: "Home cinema privé Dolby Atmos installé par Domotus au Maroc",
  },
  {
    icon: Lock,
    title: "Supervision Globale (BMS)",
    badge: "Valorisation patrimoniale",
    description: "Le chef d'orchestre de votre propriété. Centralisez l'ensemble des systèmes sur une interface sur-mesure hyper-intuitive. Un atout technologique majeur qui augmente significativement la valeur de votre bien immobilier.",
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
    title: "Immersion & Étude",
    description: "Avant de parler technologie, nous parlons de vous. Nous analysons l'architecture de vos espaces et comprenons vos habitudes.",
  },
  {
    num: "02",
    title: "Ingénierie & Design",
    description: "Dans le respect absolu de votre vision, nous concevons une infrastructure technologique invisible, évolutive et pensée pour sublimer chaque ligne de votre intérieur.",
  },
  {
    num: "03",
    title: "Intégration & Sérénité",
    description: "Nos experts déploient l'ensemble des systèmes avec une précision d'orfèvre. Formation complète, documentation, support continu — votre tranquillité est garantie.",
  },
];

const testimonials = [
  {
    quote: "Domotus a sublimé notre villa à Casablanca avec une fluidité KNX remarquable. Ce qui nous a vraiment impressionnés, c'est la rigueur : respect du calendrier, intégration invisible, et une équipe qui comprend l'architecture avant de vendre de la technologie.",
    name: "Mehdi R.",
    role: "Propriétaire, Villa Anfa — Casablanca",
  },
  {
    quote: "En tant que promoteur, intégrer Domotus dès la conception a transformé nos ventes. Les acquéreurs cherchent un atout technologique credible — Domotus le rend accessible, documenté, garanti. C'est un vrai levier commercial.",
    name: "Laila M.",
    role: "Directrice développement, Groupe Immobilier Marrakech",
  },
];

const faqs = [
  {
    q: "Quel budget prévoir pour une intégration sur mesure ?",
    a: "Chez Domotus, nous ne proposons pas de « kits standards ». Le budget dépend de la superficie, de la complexité des scénarios souhaités et du choix des finitions. Lors de notre étude, nous proposons une solution sur mesure. Une installation valorise votre patrimoine de 15 à 25%.",
  },
  {
    q: "Pourquoi privilégiez-vous le standard KNX ?",
    a: "Le luxe, c'est la pérennité. KNX est un protocole ouvert partagé par 500+ fabricants mondiaux. Il garantit que votre installation reste réparable, évolutive et à la pointe, même dans 20 ans. C'est l'assurance d'une infrastructure fiable.",
  },
  {
    q: "Intervenez-vous sur des propriétés existantes ?",
    a: "Absolument. Si la construction neuve permet une intégration filaire native, nous maîtrisons aussi les protocoles sans fil haute performance (Zigbee, Z-Wave, Matter). Nous sublimes une résidence existante avec un minimum d'impact visuel.",
  },
  {
    q: "Comment s'intègre votre intervention dans le planning du chantier ?",
    a: "Nous intervenons en amont pour fournir les plans techniques à votre architecte et électricien. Nous coordonnons ensuite nos interventions au rythme du chantier pour garantir une livraison fluide et aucun retard.",
  },
  {
    q: "Comment m'accompagnez-vous après la livraison ?",
    a: "La remise des clés n'est que le début. Nous vous formons complètement et restons à vos côtés grâce à un service de supervision proactive. Si vous souhaitez faire évoluer vos scénarios, notre équipe intervient avec réactivité.",
  },
];

// ── Schema.org ────────────────────────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.domotus.ma/#faq",
  datePublished: "2024-01-01T00:00:00Z",
  dateModified: new Date().toISOString(),
  mainEntity: [
    { 
      "@type": "Question", 
      name: "Quel budget prévoir pour une intégration sur mesure ?",
      url: "https://www.domotus.ma/#faq-q1",
      acceptedAnswer: { 
        "@type": "Answer", 
        text: "Chez Domotus, nous ne proposons pas de kits standards. Le budget dépend de la superficie, de la complexité des scénarios et des finitions. Une installation domotique valorise votre patrimoine de 15 à 25%." 
      } 
    },
    { 
      "@type": "Question", 
      name: "Pourquoi privilégiez-vous le standard KNX ?",
      url: "https://www.domotus.ma/#faq-q2",
      acceptedAnswer: { 
        "@type": "Answer", 
        text: "KNX est un protocole ouvert partagé par 500+ fabricants mondiaux. Il garantit que votre installation reste réparable, évolutive et à la pointe, même dans 20 ans." 
      } 
    },
    { 
      "@type": "Question", 
      name: "Intervenez-vous sur des propriétés existantes ?",
      url: "https://www.domotus.ma/#faq-q3",
      acceptedAnswer: { 
        "@type": "Answer", 
        text: "Oui. Nous maîtrisons les protocoles sans fil haute performance (Zigbee, Z-Wave, Matter) pour sublimer une résidence existante avec un minimum d'impact." 
      } 
    },
    { 
      "@type": "Question", 
      name: "Comment s'intègre votre intervention dans le planning du chantier ?",
      url: "https://www.domotus.ma/#faq-q4",
      acceptedAnswer: { 
        "@type": "Answer", 
        text: "Nous intervenons en amont pour fournir les plans techniques à votre architecte et électricien, puis coordonnons au rythme du chantier pour une livraison fluide." 
      } 
    },
    { 
      "@type": "Question", 
      name: "Comment m'accompagnez-vous après la livraison ?",
      url: "https://www.domotus.ma/#faq-q5",
      acceptedAnswer: { 
        "@type": "Answer", 
        text: "Nous vous formons à l'utilisation de votre écosystème et restons à vos côtés grâce à un service de supervision proactive avec interventions réactives." 
      } 
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Domotus — Intégrateur Domotique au Maroc",
  description: "Domotus est votre expert en domotique KNX au Maroc pour maisons intelligentes et bâtiments tertiaires.",
  url: "https://www.domotus.ma",
  image: {
    "@type": "ImageObject",
    url: "https://www.domotus.ma/images/og-domotus.jpg",
    width: 1200,
    height: 630,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: { 
      "@type": "EntryPoint", 
      urlTemplate: "https://www.domotus.ma/search?q={search_term_string}" 
    },
    "query-input": "required name=search_term_string",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: "https://www.domotus.ma/",
    },
  ],
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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
      <section className="py-28 lg:py-36 bg-background" aria-labelledby="value-prop-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <SectionLabel>La différence Domotus</SectionLabel>
              <h2
                id="value-prop-heading"
                className="font-black uppercase leading-none text-foreground mb-6 text-balance"
                style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", letterSpacing: "-0.02em" }}
              >
                L&apos;art d&apos;anticiper vos besoins.{" "}
                <span className="italic text-foreground/45">Sans effort.</span>
              </h2>
              <p className="text-foreground/55 leading-relaxed mb-6 text-[15px]">
                Imaginez des espaces qui s&apos;éveillent à votre arrivée : la lumière s&apos;ajuste délicatement à l&apos;heure du jour, l&apos;atmosphère est déjà à la température idéale, et les volets accompagnent le coucher du soleil. Le confort absolu, sans la moindre intervention.
              </p>
              <p className="text-foreground/55 leading-relaxed mb-10 text-[15px]">
                Depuis 10 ans au Maroc, c&apos;est le standard d&apos;excellence que nous intégrons dans les résidences et espaces professionnels les plus exigeants. Une fiabilité garantie par nos certifications multi-protocoles de référence (KNX, Crestron, Lutron).
              </p>
              <ul className="flex flex-col gap-3 mb-10" role="list">
                {[
                  "Maîtrise absolue & intuitive",
                  "Sérénité totale",
                  "Intelligence énergétique",
                  "Valorisation patrimoniale",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-foreground/65">
                    <CheckCircle2Icon size={15} className="text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="focus-ring inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85"
                style={{ color: "#0a0a0a" }}
              >
                Découvrir davantage
                <ArrowRight size={13} aria-hidden="true" />
              </Link>
            </div>

            {/* Split image — with aspect-ratio to prevent CLS */}
            <div className="grid grid-cols-2 gap-3 h-[480px] contain-layout">
              <div className="relative overflow-hidden rounded-sm row-span-2 aspect-square">
                <Image
                  src="/images/villa-prestige.webp"
                  alt="Villa équipée en domotique KNX par Domotus Casablanca"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                  quality={80}
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-sm aspect-video">
                <Image
                  src="/images/showroom.webp"
                  alt="Showroom domotique Domotus Casablanca"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                  quality={80}
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-sm aspect-video">
                <Image
                  src="/images/immeuble-tertiaire.webp"
                  alt="Bâtiment tertiaire connecté par Domotus au Maroc"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                  quality={80}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID — Apple-inspired Premium Layout ── */}
      <section className="py-32 lg:py-48 bg-background" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Header with generous spacing */}
          <div className="mb-32 max-w-3xl">
            <SectionLabel>L'intelligence de vos espaces</SectionLabel>
            <h2
              id="services-heading"
              className="font-black leading-tight text-foreground text-balance"
              style={{ fontSize: "clamp(2.4rem, 8vw, 4.5rem)", letterSpacing: "-0.03em" }}
            >
              Maîtrise<br />absolue de votre<br />environnement.
            </h2>
            <p className="mt-8 text-[16px] text-foreground/60 leading-relaxed max-w-lg">
              Contrôlez chaque aspect de vos espaces avec précision. Éclairage, climat, sécurité, confort — tout orchestré en harmonie.
            </p>
          </div>

          {/* 3-column grid with premium spacing */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-8">
            {expertises.map((item, idx) => {
              const Icon = item.icon;
              
              return (
                <article
                  key={item.title}
                  className="group relative flex flex-col justify-between py-12 px-6 lg:px-0 border-b border-white/8 transition-all duration-500 hover:border-primary/40"
                >
                  {/* Icon — Larger and simpler */}
                  <div className="mb-6">
                    <div className="w-12 h-12 flex items-center justify-center transition-all duration-500">
                      <Icon size={28} className="text-foreground/50 group-hover:text-primary group-hover:scale-110 transition-all duration-500" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Title — Optimized for 3 columns */}
                  <div className="mb-4">
                    <h3 className="text-[16px] lg:text-[18px] font-semibold text-foreground leading-tight mb-2 transition-colors duration-500 group-hover:text-primary">
                      {item.title}
                    </h3>
                    <div className="w-1 h-6 bg-primary/0 group-hover:bg-primary transition-all duration-500" />
                  </div>

                  {/* Description — Better spacing */}
                  <p className="text-[13px] lg:text-[14px] text-foreground/55 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Badge with hover */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground/40 group-hover:text-primary/80 transition-colors duration-500">
                      {item.badge}
                    </span>
                    <Link
                      href={item.href}
                      className="focus-ring opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-primary"
                    >
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {/* View all link */}
          <div className="flex justify-end pt-12 border-t border-white/8">
            <Link
              href="/expertises"
              className="focus-ring inline-flex items-center gap-3 text-[13px] uppercase tracking-[0.2em] text-foreground/50 hover:text-primary transition-colors duration-300 font-semibold"
            >
              Toutes les expertises <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS — 3 steps transition section ── */}
      <section className="py-16 lg:py-24 bg-background" aria-labelledby="process-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Compact header */}
          <div className="mb-12">
            <SectionLabel>L'accompagnement Domotus</SectionLabel>
            <h2
              id="process-heading"
              className="font-semibold leading-tight text-foreground text-balance"
              style={{ fontSize: "clamp(1.6rem, 5vw, 2.8rem)", letterSpacing: "-0.02em" }}
            >
              De la vision à la perfection, en 3 étapes.
            </h2>
          </div>

          {/* Minimal 3-step layout */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <div key={step.num} className="flex flex-col">
                {/* Step number — Subtle but visible */}
                <div className="mb-4">
                  <span className="text-[14px] font-semibold uppercase tracking-[0.15em] text-primary">
                    Étape {step.num}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[16px] lg:text-[17px] font-semibold text-foreground mb-3 leading-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] lg:text-[14px] text-foreground/55 leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow to next (desktop only) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex mt-8 text-primary/30">
                    <ArrowRight size={18} aria-hidden="true" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA — Centered, simple */}
          <div className="mt-12 pt-12 border-t border-white/8 flex justify-center">
            <Link
              href="/contact"
              className="focus-ring inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.15em] text-foreground/60 hover:text-primary transition-colors duration-300"
            >
              Commencer l&apos;audit gratuit
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-28 lg:py-36 bg-card" aria-labelledby="temoignages-heading">
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

      {/* ── FAQ ── */}
      <section className="py-28 lg:py-36 bg-background" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="mb-16">
            <SectionLabel>Pour aller plus loin</SectionLabel>
            <h2
              id="faq-heading"
              className="font-black uppercase leading-none text-foreground text-balance"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
            >
              Questions fréquentes<br />
              <span className="italic text-foreground/45">sur votre projet.</span>
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
          <div className="mt-16 pt-12 border-t border-white/8">
            <p className="text-[13px] text-foreground/50 mb-4">
              Votre question ne figure pas ci-dessus ?
            </p>
            <Link
              href="/contact"
              className="focus-ring inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-primary hover:text-primary/70 transition-colors duration-300"
            >
              Nous contacter directement <ArrowRight size={12} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL — urgence + double action ── */}
      <section className="relative py-32 lg:py-40 overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute inset-0 bg-card" />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 70% 60% at 50% 110%, oklch(0.91 0.12 188 / 0.09), transparent)" }}
        />
        <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <div className="mb-8">
            <span className="text-[12px] uppercase tracking-[0.3em] text-primary font-semibold">Démarrez maintenant</span>
          </div>
          <h2
            id="cta-heading"
            className="font-black uppercase leading-none text-foreground text-balance mb-8"
            style={{ fontSize: "clamp(2.2rem, 6vw, 5rem)", letterSpacing: "-0.03em" }}
          >
            Transformez votre habitat<br />
            <span className="italic text-foreground/45">en 24 à 48h.</span>
          </h2>
          <p className="text-foreground/60 leading-relaxed mb-4 max-w-md mx-auto text-[15px]">
            Plus de 150 familles et promoteurs au Maroc nous ont fait confiance pour réaliser leur vision d'un habitat intelligent, esthétique et évolutif.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/contact"
              className="focus-ring inline-flex items-center gap-3 bg-primary px-10 py-5 text-[12px] font-black uppercase tracking-[0.2em] text-background transition-all duration-300 hover:bg-primary/85 w-full sm:w-auto justify-center"
            >
              Lancer mon projet
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <a
              href="tel:+212663666627"
              className="focus-ring inline-flex items-center gap-3 border border-white/20 px-10 py-5 text-[12px] uppercase tracking-[0.2em] text-foreground/60 transition-all duration-300 hover:border-primary hover:text-primary w-full sm:w-auto justify-center"
            >
              <PhoneIcon size={13} aria-hidden="true" />
              +212 663 66 66 27
            </a>
          </div>
          <p className="text-[11px] text-foreground/35 uppercase tracking-[0.1em]">
            Casablanca · Marrakech · Rabat · Tanger
          </p>
        </div>
      </section>
    </>
  );
}
