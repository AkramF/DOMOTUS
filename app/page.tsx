import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import HeroSplit from "@/components/sections/HeroSplit";
import { ExpertisesShowcase } from "@/components/sections/ExpertisesShowcase";
import StackedTestimonialCards from "@/components/StackedTestimonialCards";
import StackingCardsSection from "@/components/StackingCardsSection";
import ArchitecturePortfolio from "@/components/ArchitecturePortfolio";
import { ArrowRight } from "lucide-react";

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

const stackingCards = [
  {
    title: "Sustainable",
    description: "A contemporary, light-filled shopping center offering an unforgettable visitor experience with ecological technologies and recyclable materials.",
    image: "/images/villa-prestige.jpg",
    imageAlt: "Villa équipée en domotique KNX par Domotus",
  },
  {
    title: "Shopping Center",
    description: "A contemporary, light-filled shopping center offering an unforgettable visitor experience with integrated smart building solutions.",
    image: "/images/showroom.jpg",
    imageAlt: "Showroom domotique Domotus Casablanca",
  },
  {
    title: "Gardens",
    description: "Beautiful landscapes perfect for walks and outdoor spaces with automated irrigation and ambient lighting control systems.",
    image: "/images/immeuble-tertiaire.jpg",
    imageAlt: "Bâtiment tertiaire connecté par Domotus au Maroc",
  },
];

const portfolioProjects = [
  {
    id: "eclairage-intelligent",
    title: "Éclairage Intelligent",
    location: "Solutions d'ambiance adaptative",
    description: "Créez des ambiances lumineuses dynamiques qui s'adaptent à vos besoins. Économies énergétiques jusqu'à 70%, transition douce entre scènes prédéfinies, et synchronisation automatique avec les rythmes circadiens.",
    tags: ["KNX", "Lutron", "Philips Hue"],
    image: "/images/expertise-eclairage.jpg",
    imageAlt: "Éclairage Intelligent - Ambiance Adaptative",
  },
  {
    id: "securite-acces",
    title: "Sécurité & Accès",
    location: "Protection complète et gestion d'accès",
    description: "Protégez vos espaces avec systèmes intégrés multi-couches. Contrôle d'accès biométrique, alarme intelligente, caméras IP, et rapports en temps réel. Tranquillité d'esprit totale avec surveillance 24/7.",
    tags: ["Sécurité", "Biométrique", "Surveillance"],
    image: "/images/showroom.jpg",
    imageAlt: "Sécurité & Accès - Système Intégré",
  },
  {
    id: "gestion-energie-climat",
    title: "Gestion Énergie & Climat",
    location: "Confort thermique et efficacité énergétique",
    description: "Optimisez votre consommation énergétique tout en maximisant le confort. Contrôle climatique zone par zone, anticipation météo, et réduction jusqu'à 40% des factures d'énergie grâce à l'IA.",
    tags: ["BMS", "Climatisation", "Efficacité"],
    image: "/images/expertise-energie.jpg",
    imageAlt: "Gestion Énergie & Climat - Régulation Intelligente",
  },
  {
    id: "reseaux-connectivite",
    title: "Réseaux & Connectivité",
    location: "Infrastructure réseau fiable et performante",
    description: "Fondation solide pour tous vos systèmes intelligents. WiFi 7, connectivité mesh redondante, et cybersécurité intégrée. Latence ultra-faible garantie pour les applications critiques.",
    tags: ["WiFi 7", "Matter", "Thread"],
    image: "/images/villa-prestige.jpg",
    imageAlt: "Réseaux & Connectivité - Infrastructure Sécurisée",
  },
  {
    id: "audio-divertissement",
    title: "Audio & Divertissement",
    location: "Immersion sensorielle multimédia",
    description: "Transformez vos espaces en théâtres privés. Systèmes audio surround immersifs, distribution vidéo multi-zone, et gaming haute fidélité. Qualité studio professionnel à portée de main.",
    tags: ["Cinéma", "Son surround", "Streaming"],
    image: "/images/expertise-av.jpg",
    imageAlt: "Audio & Divertissement - Expérience Immersive",
  },
  {
    id: "supervision-globale",
    title: "Supervision Globale (BMS)",
    location: "Pilotage centralisé complète",
    description: "Tableau de bord unique pour tous vos systèmes domotiques. Automatisations complexes, scénarios programmés, et analytics prédictive. Gestion intelligente de l'ensemble de votre infrastructure connectée.",
    tags: ["BMS", "Automatisation", "Analytics"],
    image: "/images/immeuble-tertiaire.jpg",
    imageAlt: "Supervision Globale - Pilotage Centralisé BMS",
  },
];

const expertises = [
  {
    title: "Éclairage Intelligent",
    badge: "La signature visuelle de vos espaces",
    description: "L'éclairage suit le rythme naturel du soleil et s'adapte à vos instants de vie grâce au pilotage circadien et aux scènes dynamiques (Lutron HomeWorks). Une élégance qui sublime votre architecture.",
    href: "/expertise/eclairage",
    image: "/images/expertise-eclairage.jpg",
    imageAlt: "Éclairage intelligent Lutron dans une villa de luxe au Maroc",
  },
  {
    title: "Sécurité & Accès",
    badge: "Une tranquillité d'esprit absolue",
    description: "Une protection invisible et infaillible. Accès biométrique discret, vidéosurveillance 4K intelligente et supervision KNX centralisée. Gardez le contrôle total et recevez des alertes ciblées, où que vous soyez.",
    href: "/expertise/securite",
    image: "/images/expertise-securite.jpg",
    imageAlt: "Système de sécurité domotique premium pour villa Maroc",
  },
  {
    title: "Gestion Énergie & Climat",
    badge: "L'efficience invisible",
    description: "Votre maison optimise automatiquement la température et l'énergie en temps réel. Une intelligence qui allie confort thermique absolu et conformité aux normes d'excellence (LEED/HQE), sans le moindre effort.",
    href: "/expertise/energie",
    image: "/images/expertise-energie.jpg",
    imageAlt: "Gestion intelligente de l'énergie dans un bâtiment connecté au Maroc",
  },
  {
    title: "Réseaux & Connectivité",
    badge: "Le système nerveux de votre habitat",
    description: "Profitez d'une couverture Wi-Fi 6E parfaite et d'une infrastructure fibre redondante (Ubiquiti). Une fiabilité de niveau professionnel, supervisée 24/7 pour une fluidité sans la moindre interruption.",
    href: "/expertise/reseaux",
    image: "/images/expertise-reseau.jpg",
    imageAlt: "Infrastructure réseau Ubiquiti premium installée par Domotus Maroc",
  },
  {
    title: "Audio & Divertissement",
    badge: "L'émotion à l'état pur",
    description: "De la diffusion musicale multi-zones (Sonos) aux salles de cinéma privées 4K Dolby Atmos. L'image et le son haute-fidélité s'intègrent à vos murs avec une discrétion totale, pilotés depuis une interface unique.",
    href: "/expertise/audiovisuel",
    image: "/images/expertise-av.jpg",
    imageAlt: "Home cinema privé Dolby Atmos installé par Domotus au Maroc",
  },
  {
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
    name: "Particulier Villa",
    firstName: "Ahmed",
    title: "Villa Anfa - Casablanca",
    description: "Domotus a sublimé notre villa avec une fluidité KNX remarquable. Respect du calendrier, intégration invisible, et une équipe qui comprend l'architecture avant de vendre de la technologie.",
    image: "/images/expertise-eclairage.jpg",
    imageAlt: "Villa particulier - Domotique luxe",
    segment: "B2C",
  },
  {
    name: "Directrice Promoteur Immobilier",
    firstName: "Laila",
    title: "Groupe Immobilier Marrakech",
    description: "Intégrer Domotus dès la conception a transformé nos ventes. Les acquéreurs cherchent un atout technologique crédible — Domotus le rend accessible, documenté, garanti.",
    image: "/images/expertise-av.jpg",
    imageAlt: "Projet immobilier - Domotique commerciale",
    segment: "B2B",
  },
  {
    name: "Ambassade de Chine",
    firstName: "Li",
    title: "Rabat, Maroc",
    description: "Les systèmes Domotus offrent une sécurité et une gestion énergétique de classe mondiale. Fiabilité exceptionnelle, support technique impeccable, et intégration transparente.",
    image: "/images/expertise-bms.jpg",
    imageAlt: "Ambassade - Infrastructure gouvernementale",
    segment: "Projet Spécifique",
  },
  {
    name: "Laboratoire CBS",
    firstName: "Dr. Karim",
    title: "Centre Biomédicale Casablanca",
    description: "La précision et la fiabilité des installations Domotus sont cruciales pour nos opérations. Automatisation complète, redondance système, et monitoring en temps réel.",
    image: "/images/expertise-energie.jpg",
    imageAlt: "Laboratoire - Installation critique",
    segment: "B2B2C",
  },
];

const projectTypes = [
  {
    title: "Architectes & Designers",
    description: "Partenariat avec les plus grands noms de l'architecture pour intégrer la domotique dès la conception. Design invisible, expérience maximale.",
    image: "/images/expertise-eclairage.jpg",
    imageAlt: "Architectes et designers - Conception intégrée",
    segment: "B2B",
  },
  {
    title: "Promoteurs Immobiliers",
    description: "Solutions clés en main pour valoriser vos programmes. Accélère les ventes, fidélise les acquéreurs, augmente le prix de sortie.",
    image: "/images/expertise-av.jpg",
    imageAlt: "Promoteurs immobiliers - Programme intégré",
    segment: "B2B",
  },
  {
    title: "Hôtellerie & Hospitalité",
    description: "Gestion centralisée pour chaînes hôtelières. Confort client, efficacité opérationnelle, économies énergétiques garanties.",
    image: "/images/expertise-bms.jpg",
    imageAlt: "Hôtellerie et hospitalité",
    segment: "B2B2C",
  },
  {
    title: "Bureaux & Tertiaire",
    description: "Espaces de travail intelligents et productifs. Automatisation complète, bien-être collaborateur, optimisation énergétique.",
    image: "/images/expertise-energie.jpg",
    imageAlt: "Bureaux et tertiaire - Espaces connectés",
    segment: "B2B",
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
    a: "La remise des clés n'est que le début. Nous vous formons complètement et restons à vos côtés grâce �� un service de supervision proactive. Si vous souhaitez faire évoluer vos scénarios, notre équipe intervient avec réactivité.",
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

function SectionLabel({ children, color = "#000000", className = "" }: { children: React.ReactNode; color?: string; className?: string }) {
  return (
    <div className={`flex items-center gap-3 mb-5 ${className}`}>
      <span className="block w-2.5 h-2.5" style={{ backgroundColor: color }} aria-hidden="true" />
      <p className="uppercase font-semibold" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "14px", lineHeight: "20px", color }}>{children}</p>
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

      {/* ── BENEFIT-LED PROPOSITION ── */}
      <section className="py-14 lg:py-18" style={{ backgroundColor: "#efd555" }} aria-labelledby="value-prop-heading">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <SectionLabel style={{ color: "#000000" }}>La différence Domotus</SectionLabel>
              <h2
                id="value-prop-heading"
                className="font-black uppercase leading-none text-balance mb-6"
                style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", letterSpacing: "-0.02em", color: "#000000" }}
              >
                L&apos;art d&apos;anticiper vos besoins.{" "}
                <span className="italic" style={{ color: "#000000" }}>Sans effort.</span>
              </h2>
              <p className="leading-relaxed mb-6 text-[15px]" style={{ color: "#000000" }}>
                Imaginez des espaces qui s&apos;éveillent à votre arrivée : la lumière s&apos;ajuste délicatement à l&apos;heure du jour, l&apos;atmosphère est déjà à la température idéale, et les volets accompagnent le coucher du soleil. Le confort absolu, sans la moindre intervention.
              </p>
              <p className="leading-relaxed mb-10 text-[15px]" style={{ color: "#000000" }}>
                Depuis 10 ans au Maroc, c&apos;est le standard d&apos;excellence que nous intégrons dans les résidences et espaces professionnels les plus exigeants. Une fiabilité garantie par nos certifications multi-protocoles de référence (KNX, Crestron, Lutron).
              </p>
              <ul className="flex flex-col gap-3 mb-10" role="list">
                {[
                  "Maîtrise absolue & intuitive",
                  "Sérénité totale",
                  "Intelligence énergétique",
                  "Valorisation patrimoniale",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px]" style={{ color: "#000000" }}>
                    <CheckCircle2Icon size={15} className="shrink-0 mt-0.5" style={{ color: "#000000" }} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="focus-ring inline-flex items-center justify-between px-8 py-4 rounded-full text-[14px] font-semibold transition-all duration-300 hover:shadow-lg will-change-colors group"
                style={{ backgroundColor: "#000000", color: "#ffffff" }}
              >
                Découvrir davantage
                <div className="ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110" style={{ backgroundColor: "#efd555" }}>
                  <ArrowRight size={16} className="text-black" aria-hidden="true" />
                </div>
              </Link>
            </div>

            {/* Stacking Cards Section */}
            <StackingCardsSection cards={stackingCards} />
          </div>
        </div>
      </section>

      {/* ── LA DIFFÉRENCE DOMOTUS — Architecture Portfolio ── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#ffffff" }} aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="mb-8">
            <SectionLabel color="#000000">LA DIFFÉRENCE DOMOTUS</SectionLabel>
            <h2
              id="services-heading"
              className="font-black leading-tight text-black text-balance"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "-0.02em" }}
            >
              Explorez nos expertises
            </h2>
          </div>
          
          <ArchitecturePortfolio projects={portfolioProjects} />
        </div>
      </section>

      {/* ── PROCESS — 3 steps ── */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "#000000" }} aria-labelledby="process-heading">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="text-center mb-12">
            <SectionLabel color="#ffffff">L'ACCOMPAGNEMENT DOMOTUS</SectionLabel>
            <h2
              id="process-heading"
              className="font-black uppercase leading-none text-white text-balance"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
            >
              De la vision à la perfection,{" "}
              <span className="italic text-white/45">en 3 étapes.</span>
            </h2>
          </div>
          <ol className="grid lg:grid-cols-3 gap-px bg-white/6" role="list">
            {steps.map((step, i) => (
              <li key={step.num} className="bg-card p-8 flex flex-col gap-4 relative">
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
                    className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10"
                    style={{ color: "#efd555" }}
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ol>
          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="focus-ring inline-flex items-center justify-between px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl group"
              style={{ backgroundColor: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.1)" }}
            >
              <span className="text-black font-semibold" style={{ fontSize: "16px" }}>Commencer l&apos;étape 1 — Audit technique</span>
              <div className="ml-6 w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 flex-shrink-0" style={{ backgroundColor: "#efd555" }}>
                <ArrowRight size={16} className="text-white" aria-hidden="true" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      {/* ── PROJECT TYPES DIVISION ── */}
      <section className="py-28 lg:py-36" style={{ backgroundColor: "#f0efed" }} aria-labelledby="project-types-heading">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left column — Title and badge */}
            <div className="lg:col-span-4">
              <SectionLabel color="#000000" className="mb-6">NOTRE DIVISION PROJETS</SectionLabel>
              <h2
                id="project-types-heading"
                className="font-black leading-tight text-black text-balance"
                style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "-0.02em" }}
              >
                Collaborations
                <br />
                professionnelles
              </h2>
              <p className="mt-6 text-base text-black/70 leading-relaxed max-w-sm">
                De la conception à la livraison, nous pilotons des projets domotiques complexes pour les promoteurs immobiliers, les architectes et les maîtres d'ouvrage au Maroc. Notre expertise en intégration multi-protocoles et notre gestion de projet rigoureuse garantissent la réussite de vos ambitions.
              </p>
            </div>

            {/* Right column — Grid of project types */}
            <div className="lg:col-span-8">
              <div className="grid md:grid-cols-2 gap-6">
                {projectTypes.map((project) => (
                  <div
                    key={project.title}
                    className="bg-white rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
                  >
                    {/* Image */}
                    <div className="relative w-full aspect-video overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col justify-between flex-1">
                      {/* Segment tag */}
                      <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-black/50 mb-2">
                        {project.segment}
                      </span>
                      <h3 className="text-black font-bold text-lg mb-3" style={{ fontSize: "18px", lineHeight: "26px" }}>
                        {project.title}
                      </h3>
                      <p className="text-black/70 text-sm leading-relaxed mb-6" style={{ fontSize: "14px", lineHeight: "20px" }}>
                        {project.description}
                      </p>
                      <Link
                        href="#"
                        className="text-black font-semibold text-sm underline hover:text-black/70 transition-colors w-fit"
                        style={{ fontSize: "12px", letterSpacing: "0.12em" }}
                      >
                        EN SAVOIR PLUS
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20" style={{ backgroundColor: "#000000" }} aria-labelledby="temoignages-heading">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          {/* Title section */}
          <div className="mb-12 text-center">
            <SectionLabel color="#ffffff" className="justify-center mb-6">CE QUE DISENT NOS CLIENTS</SectionLabel>
            <h2
              id="temoignages-heading"
              className="font-black uppercase leading-none text-white text-balance"
              style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", letterSpacing: "-0.02em" }}
            >
              Ce que disent nos{" "}
              <span className="italic" style={{ color: "#efd555" }}>clients.</span>
            </h2>
          </div>

          {/* Carousel component */}
          <StackedTestimonialCards testimonials={testimonials} />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "#ffffff" }} aria-labelledby="faq-heading">
        <div className="mx-auto max-w-5xl px-4 lg:px-6">
          <div className="mb-12 text-center">
            <SectionLabel color="#000000" className="justify-center mb-6">POUR ALLER PLUS LOIN</SectionLabel>
            <h2
              id="faq-heading"
              className="font-black uppercase leading-none text-black text-balance mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.03em" }}
            >
              Questions<br />
              <span className="italic text-black">fréquentes.</span>
            </h2>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(faqSchema),
            }}
          />
          <div className="max-w-3xl mx-auto">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* ── CTA FINAL — Consultation Gratuite ── */}
      <section className="relative py-12 lg:py-16 overflow-hidden" style={{ backgroundColor: "#efd555" }} aria-labelledby="cta-heading">
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-12 flex flex-col">
          {/* Badge — far left aligned with absolute positioning */}
          <div className="absolute top-6 left-4 lg:left-6">
            <span className="text-[10px] uppercase tracking-[0.4em] text-black font-black inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-black" />
              DÉMARRER MAINTENANT
            </span>
          </div>

          {/* Asymmetric content — large left space, content on right */}
          <div className="grid lg:grid-cols-12 gap-6 mt-8 lg:mt-0">
            {/* Left empty space (4 columns for white space) */}
            <div className="hidden lg:block lg:col-span-4" />
            
            {/* Right content (8 columns) */}
            <div className="lg:col-span-8 flex flex-col">
              {/* Main heading */}
              <h2
                id="cta-heading"
                className="text-black text-balance mb-4 leading-tight"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "72px", lineHeight: "79px" }}
              >
                Planifiez votre<br />
                étude personnalisée
              </h2>

              {/* Description */}
              <p className="text-black mb-6" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "24px", maxWidth: "560px" }}>
                Découvrez comment la domotique KNX transforme votre maison en espace intelligent. Nos experts analysent vos besoins et créent une solution sur mesure qui allie performance, design et durabilité.
              </p>

              {/* CTA Button */}
              <div className="w-fit">
                <Link
                  href="/contact"
                  className="focus-ring inline-flex items-center justify-between px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl group"
                  style={{ backgroundColor: "#000000" }}
                >
                  <span className="text-white font-semibold" style={{ fontSize: "16px" }}>Consulter nos experts</span>
                  <div className="ml-6 w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 flex-shrink-0" style={{ backgroundColor: "#efd555" }}>
                    <ArrowRight size={16} className="text-black" aria-hidden="true" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
