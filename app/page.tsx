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
    a: "Chez Domotus, nous ne proposons pas de « kits standards ». Le budget de votre installation dépend de la superficie de vos espaces, de la complexité des scénarios souhaités et du choix des finitions (claviers en matériaux nobles, écrans tactiles). Lors de notre étude initiale, nous concevons une proposition sur mesure. Gardez à l'esprit qu'une installation domotique dans les règles de l'art valorise votre patrimoine immobilier de 15 à 25%.",
  },
  {
    q: "Pourquoi privilégiez-vous le standard mondial KNX ?",
    a: "Le luxe, c'est la pérennité. Contrairement aux solutions « gadgets » fermées qui deviennent obsolètes en quelques années, le standard KNX est un protocole ouvert, partagé par plus de 500 fabricants mondiaux. Il garantit que votre installation sera toujours réparable, évolutive et à la pointe de la technologie, même dans 20 ans. C'est l'assurance d'une infrastructure fiable et robuste.",
  },
  {
    q: "Intervenez-vous sur des propriétés déjà existantes ?",
    a: "Absolument. Si la construction neuve permet une intégration filaire native, nos ingénieurs maîtrisent également les protocoles sans fil de très haute performance (Zigbee, Z-Wave, Matter). Nous pouvons ainsi sublimer une résidence existante ou en cours de rénovation, avec un minimum d'impact sur vos murs et une esthétique toujours irréprochable.",
  },
  {
    q: "Comment s'intègre votre intervention dans le planning du chantier ?",
    a: "Notre force réside dans la synergie avec vos équipes. Nous intervenons très en amont, dès la phase de conception, pour fournir les plans techniques (carnets de câblage) à votre architecte et à votre électricien. Nous coordonnons ensuite nos interventions au rythme du chantier pour garantir une livraison fluide, sans le moindre retard.",
  },
  {
    q: "Comment vais-je interagir avec mon nouvel espace ?",
    a: "De la manière la plus intuitive possible. Si l'application smartphone vous permet un contrôle total à distance, au quotidien, la technologie s'efface. Vos espaces s'animent automatiquement selon l'heure ou votre présence, et vous gardez la main grâce à des claviers de commande au design épuré, ou par simple commande vocale. L'environnement s'adapte à vous, et non l'inverse.",
  },
  {
    q: "Comment m'accompagnez-vous une fois le projet livré ?",
    a: "La remise des clés n'est que le début de l'expérience Domotus. Nous vous formons à l'utilisation de votre écosystème et restons à vos côtés grâce à un service de supervision proactive. En cas de besoin, ou si vous souhaitez faire évoluer vos scénarios de vie, notre équipe technique intervient avec réactivité et discrétion.",
  },
];

// ── Schema.org ────────────────────────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Quel budget prévoir pour une intégration sur mesure ?", acceptedAnswer: { "@type": "Answer", text: "Chez Domotus, nous ne proposons pas de kits standards. Le budget dépend de la superficie, de la complexité des scénarios et des finitions. Une installation domotique valorise votre patrimoine de 15 à 25%." } },
    { "@type": "Question", name: "Pourquoi privilégiez-vous le standard KNX ?", acceptedAnswer: { "@type": "Answer", text: "KNX est un protocole ouvert partagé par 500+ fabricants mondiaux. Il garantit que votre installation reste réparable, évolutive et à la pointe, même dans 20 ans." } },
    { "@type": "Question", name: "Intervenez-vous sur des propriétés existantes ?", acceptedAnswer: { "@type": "Answer", text: "Oui. Nous maîtrisons les protocoles sans fil haute performance (Zigbee, Z-Wave, Matter) pour sublimer une résidence existante avec un minimum d'impact." } },
    { "@type": "Question", name: "Comment s'intègre votre intervention dans le planning du chantier ?", acceptedAnswer: { "@type": "Answer", text: "Nous intervenons en amont pour fournir les plans techniques à votre architecte et électricien, puis coordonnons au rythme du chantier pour une livraison fluide." } },
    { "@type": "Question", name: "Comment vais-je interagir avec mon nouvel espace ?", acceptedAnswer: { "@type": "Answer", text: "Au quotidien, la technologie s'efface. Vos espaces s'animent automatiquement, avec claviers épurés ou commande vocale. L'environnement s'adapte à vous." } },
    { "@type": "Question", name: "Comment m'accompagnez-vous après la livraison ?", acceptedAnswer: { "@type": "Answer", text: "Nous vous formons à l'utilisation de votre écosystème et restons à vos côtés grâce à un service de supervision proactive avec interventions réactives." } },
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
                Découvrir davantage
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
              <SectionLabel>L'intelligence de vos espaces</SectionLabel>
              <h2
                id="services-heading"
                className="font-black uppercase leading-none text-foreground text-balance"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
              >
                La maîtrise absolue{" "}
                <span className="italic text-foreground/45">de votre environnement.</span>
              </h2>
            </div>
            <Link
              href="/maison-connectee"
              className="focus-ring shrink-0 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-foreground/40 hover:text-primary transition-colors duration-300"
            >
              Découvrir nos réalisations d'exception <ArrowRight size={12} aria-hidden="true" />
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

                  {/* Default state — icon + title + badge always visible */}
                  <div className="absolute inset-0 flex flex-col justify-end p-7 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-2">
                    <div className="mb-3 w-9 h-9 border border-white/20 flex items-center justify-center text-primary">
                      <Icon size={16} aria-hidden="true" />
                    </div>
                    <h3 className="font-bold uppercase tracking-[0.1em] text-foreground text-[13px] mb-1">
                      {item.title}
                    </h3>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">
                      {item.badge}
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
            <SectionLabel>L'accompagnement Domotus</SectionLabel>
            <h2
              id="process-heading"
              className="font-black uppercase leading-none text-foreground text-balance"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
            >
              De la vision à la perfection,{" "}
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
        <Link href="/maison-connectee" className="relative overflow-hidden group focus-ring block">
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
              Bâtiment Intelligent
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
            <SectionLabel>Pour aller plus loin</SectionLabel>
            <h2
              id="faq-heading"
              className="font-black uppercase leading-none text-foreground text-balance"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
            >
              Mieux comprendre{" "}
              <span className="italic text-foreground/45">notre approche.</span>
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
          <div className="mt-16 bg-card p-10 rounded-sm">
            <h3 className="font-black uppercase text-foreground text-balance mb-4" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>
              Chaque projet est unique.
            </h3>
            <p className="text-foreground/60 text-[15px] leading-relaxed mb-8 max-w-2xl">
              Vous avez une vision précise pour votre résidence ou votre programme immobilier ? Discutons-en.
            </p>
            <Link
              href="/contact"
              className="focus-ring inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85"
              style={{ color: "#0a0a0a" }}
            >
              Échanger avec un expert <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>
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
