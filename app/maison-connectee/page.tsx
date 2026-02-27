import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionLabel from "@/components/ui/section-label";

export const metadata: Metadata = {
  title: "Maison Intuitive & Connectée — Domotique Multi-Protocoles au Maroc | Domotus",
  description:
    "Maison intuitive & connectée. L'intelligence au service de votre confort. Expertise certifiée multi-protocoles (KNX, Crestron, Lutron) pour villas et appartements de prestige au Maroc.",
  alternates: { canonical: "https://www.domotus.ma/maison-connectee" },
};

const realisations = [
  { title: "Villa Anfa, Casablanca", subtitle: "1 100 m² — KNX + Crestron", tag: "Résidentiel prestige", image: "/images/villa-prestige.jpg" },
  { title: "Penthouse Marrakech", subtitle: "680 m² — Lutron Homeworks", tag: "Appartement luxe", image: "/images/hero-bg.jpg" },
  { title: "Villa Tanger Golf", subtitle: "950 m² — KNX + Lutron", tag: "Villa haut de gamme", image: "/images/hero-residential.jpg" },
];

const benefices = [
  { num: "−22%", label: "sur la facture énergétique dès le 1er mois" },
  { num: "+18%", label: "de valeur immobilière après intégration" },
  { num: "100%", label: "contrôlable depuis votre smartphone" },
  { num: "15 ans", label: "de durabilité garantie sur les systèmes multi-protocoles" },
];

const modesVie = [
  {
    title: "Réveil Sérénité",
    experience: "Une transition douce vers la lumière du jour.",
    action: "À l'heure choisie, les volets s'entrouvrent, le plancher chauffant de la salle de bain s'active, et une playlist douce accompagne votre premier café.",
    benefit: "Commencer la journée dans une harmonie parfaite.",
    image: "/images/mode-reveil.jpg",
  },
  {
    title: "Réception Royale",
    experience: "Votre villa devient une mise en scène pour vos convives.",
    action: "Un seul clic active l'éclairage architectural extérieur, les cascades de la piscine et une ambiance lumineuse intérieure 'Ambre chaud'.",
    benefit: "Sublimer l'architecture et l'accueil sans quitter vos invités.",
    image: "/images/mode-reception.jpg",
  },
  {
    title: "Cinéma Privé",
    experience: "L'immersion totale du septième art.",
    action: "Les rideaux occultants se ferment, les lumières s'éteignent en fondu, et votre système audio haute-fidélité calibré prend le contrôle.",
    benefit: "Le confort d'une salle obscure, l'intimité de votre foyer.",
    image: "/images/mode-cinema.jpg",
  },
  {
    title: "Vigilance Totale",
    experience: "Le sentiment d'un cocon inviolable.",
    action: "Fermeture centralisée, simulation de présence par l'éclairage et activation de la barrière périmétrique invisible.",
    benefit: "Une tranquillité absolue, que vous soyez chez vous ou à l'autre bout du monde.",
    image: "/images/mode-vigilance.jpg",
  },
];

const etapes = [
  { num: "01", title: "Audit & Immersion", desc: "Nous analysons vos plans et vos habitudes pour une conception sur-mesure. Une visite dédiée en 48h pour comprendre votre vision." },
  { num: "02", title: "Architecture Invisible", desc: "Nos ingénieurs co-conçoivent avec votre architecte pour intégrer la technologie dans le bâti, sans jamais la montrer." },
  { num: "03", title: "Installation Signature", desc: "Un déploiement rigoureux sur les standards mondiaux (KNX, Crestron, Lutron). Précision d'orfèvre, respect des délais." },
  { num: "04", title: "Accompagnement Privilège", desc: "Formation personnalisée, documentation complète et SAV sous 4h. Votre système évolue avec vous, à jamais." },
];

const espaces = [
  {
    title: "Salon",
    manifeste: "L'espace de vie principal, confortable et modulable, connecté à tous vos services.",
    angle: "Un salon qui s'adapte à votre rythme de vie, pour recevoir ou vous détendre, sans effort.",
    features: [
      "Éclairage scénarisé selon activité et ambiance",
      "Contrôle audio/vidéo centralisé",
      "Stores et volets automatisés",
    ],
    image: "/images/espace-salon.jpg",
  },
  {
    title: "Cuisine",
    manifeste: "Le cœur fonctionnel de la maison, optimisé pour confort et sécurité.",
    angle: "Une cuisine qui anticipe vos besoins et assure sécurité et efficacité.",
    features: [
      "Pilotage des appareils électroménagers",
      "Éclairage adapté aux zones de préparation",
      "Détection fuite d'eau ou gaz",
    ],
    image: "/images/espace-cuisine.jpg",
  },
  {
    title: "Chambre",
    manifeste: "Des espaces de repos personnalisés, connectés à votre rythme.",
    angle: "Chaque chambre devient un cocon sur-mesure.",
    features: [
      "Éclairage doux pour réveil et sommeil",
      "Contrôle température et ventilation",
      "Volets automatisés",
    ],
    image: "/images/espace-chambre.jpg",
  },
  {
    title: "Salle de Bain",
    manifeste: "Bien-être et confort, connectés à votre mode de vie.",
    angle: "Transformez votre salle de bain en expérience spa haut de gamme.",
    features: [
      "Contrôle de l'éclairage et température de l'eau",
      "Gestion humidité et ventilation",
      "Diffusion sonore ambiante",
    ],
    image: "/images/espace-salle-bain.jpg",
  },
  {
    title: "Bureau",
    manifeste: "Un espace professionnel, intégré à votre maison, sans compromis sur le confort.",
    angle: "Productivité et sérénité dans un environnement parfaitement contrôlé.",
    features: [
      "Gestion lumière adaptée au travail",
      "Pilotage appareils et écran centralisé",
      "Contrôle de la confidentialité",
    ],
    image: "/images/espace-bureau.jpg",
  },
  {
    title: "Jardin & Terrasse",
    manifeste: "L'extérieur, aussi connecté que l'intérieur.",
    angle: "Profitez d'un extérieur toujours prêt, sécurisé et esthétiquement mis en valeur.",
    features: [
      "Arrosage automatique piloté selon météo",
      "Éclairage extérieur scénarisé",
      "Détection intrusion et surveillance",
    ],
    image: "/images/espace-jardin.jpg",
  },
  {
    title: "Piscine",
    manifeste: "L'eau devient un espace vivant et maîtrisé.",
    angle: "Une piscine connectée pour un confort maximal et une sécurité totale.",
    features: [
      "Contrôle température et filtration",
      "Éclairage LED programmable",
      "Couverture automatique",
    ],
    image: "/images/espace-piscine.jpg",
  },
];

export default function VillasPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative w-full h-[80vh] overflow-hidden" aria-label="Domotique villas et appartements prestige au Maroc">
        <Image src="/images/villa-prestige.jpg" alt="Villa de prestige équipée en domotique KNX par Domotus Maroc" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-background/65" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 40%, transparent 30%, oklch(0 0 0 / 0.45) 100%)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-8 h-px bg-foreground/40" aria-hidden="true" />
            <p className="text-[11px] uppercase tracking-[0.35em] text-primary font-medium">Domotique pour habitat d'exception — Maroc</p>
            <span className="block w-8 h-px bg-foreground/40" aria-hidden="true" />
          </div>
          <h1
            className="font-black uppercase leading-none text-foreground text-balance mb-6"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", letterSpacing: "-0.03em" }}
          >
            Maison intuitive<br />
            <span className="italic text-foreground/60">&amp; connectée.</span>
          </h1>
          <p className="text-[15px] text-foreground/70 max-w-lg text-balance leading-relaxed mb-10">
            L'intelligence au service de votre confort. Votre espace de vie comprend vos habitudes, ressent vos besoins et adapte votre environnement en temps réel. Sans effort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="focus-ring inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85" style={{ color: "#0a0a0a" }}>
              Démarrer mon étude personnalisée <ArrowRight size={13} aria-hidden="true" />
            </Link>
            <Link href="#modes-vie" className="focus-ring inline-flex items-center gap-3 border border-white/25 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-foreground/70 hover:border-primary hover:text-primary transition-all duration-300">
              Explorer les modes de vie <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR (La Réassurance Immédiate) ── */}
      <section className="bg-card border-y border-white/6" aria-label="Promesses Domotus">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <dl className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/6">
            <div className="px-8 py-8 flex flex-col gap-2">
              <dt className="text-[11px] uppercase tracking-[0.18em] text-foreground/40 leading-snug">10 Ans d'Expertise</dt>
              <dd className="font-semibold text-foreground text-[13px]">L'intégrateur de référence pour les projets résidentiels de prestige au Maroc.</dd>
            </div>
            <div className="px-8 py-8 flex flex-col gap-2">
              <dt className="text-[11px] uppercase tracking-[0.18em] text-foreground/40 leading-snug">+18% de Valeur</dt>
              <dd className="font-semibold text-foreground text-[13px]">Valorisez votre patrimoine grâce à une infrastructure technologique pérenne.</dd>
            </div>
            <div className="px-8 py-8 flex flex-col gap-2">
              <dt className="text-[11px] uppercase tracking-[0.18em] text-foreground/40 leading-snug">−22% Facture</dt>
              <dd className="font-semibold text-foreground text-[13px]">Optimisation intelligente du climat et de l'éclairage dès le premier mois.</dd>
            </div>
            <div className="px-8 py-8 flex flex-col gap-2">
              <dt className="text-[11px] uppercase tracking-[0.18em] text-foreground/40 leading-snug">SAV Prioritaire 4h</dt>
              <dd className="font-semibold text-foreground text-[13px]">Une assistance VIP dédiée pour une sérénité totale, 7j/7.</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ── ESPACES INTELLIGENTS ── */}
      <section className="relative py-0 bg-background overflow-hidden" aria-labelledby="espaces-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-28 pb-20">
          <h2
            id="espaces-heading"
            className="font-black uppercase leading-none text-foreground text-balance mb-4"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
          >
            Le Smart Home,{" "}
            <span className="italic text-foreground/45">c'est vivre intensément.</span>
          </h2>
          <p className="text-[14px] text-foreground/60 max-w-2xl">
            Découvrez comment chaque pièce de votre maison se transforme en espace intelligent, anticipant vos besoins.
          </p>
        </div>

        {/* Scroll snap container */}
        <div className="relative scroll-snap-type-x-mandatory overflow-x-auto snap-mandatory pb-20" style={{ scrollBehavior: "smooth" }}>
          <div className="flex gap-0">
            {espaces.map((espace, idx) => (
              <article
                key={espace.title}
                className="flex-none w-full scroll-snap-align-start snap-start"
              >
                {/* Alternate layout - image left/right */}
                <div className={`grid md:grid-cols-2 gap-0 items-stretch min-h-screen md:min-h-auto ${idx % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
                  {/* Image */}
                  <div className={`relative min-h-[60vh] md:min-h-full overflow-hidden group ${idx % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                    <Image
                      src={espace.image}
                      alt={espace.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/20 to-transparent group-hover:from-background/40 group-hover:via-background/10 transition-all duration-700" />
                    {/* Floating number background */}
                    <div className="absolute inset-0 flex items-center justify-end pr-8 md:pr-16 pointer-events-none">
                      <span className="font-black text-foreground/5 select-none" style={{ fontSize: "clamp(4rem, 20vw, 12rem)" }}>
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-8 md:p-12 lg:p-20 flex flex-col justify-center gap-6 bg-background relative z-10 ${idx % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                    <div className="max-w-2xl">
                      {/* Progress indicator */}
                      <div className="flex items-center gap-3 mb-8">
                        <div className="h-px bg-primary" style={{ width: `${((idx + 1) / espaces.length) * 100}%` }} />
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary">
                          {idx + 1} / {espaces.length}
                        </span>
                      </div>

                      {/* Title with accent */}
                      <h3 className="font-black uppercase leading-tight text-foreground mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.01em" }}>
                        {espace.title}
                        <span className="block h-1 w-16 bg-primary mt-3" />
                      </h3>

                      {/* Manifeste */}
                      <p className="text-[14px] italic text-primary/80 font-medium mb-6 leading-relaxed">
                        "{espace.manifeste}"
                      </p>

                      {/* Description */}
                      <p className="text-[15px] text-foreground/70 leading-relaxed mb-10">
                        {espace.angle}
                      </p>

                      {/* Features with icons */}
                      <ul className="space-y-4 mb-10">
                        {espace.features.map((feature, f_idx) => (
                          <li key={f_idx} className="flex items-start gap-3 text-[13px] text-foreground/65">
                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/15 text-primary text-[10px] font-black shrink-0 mt-0.5">
                              ✓
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 px-8 py-3 bg-primary/10 border border-primary/30 hover:bg-primary/20 hover:border-primary transition-all duration-300 text-[11px] font-black uppercase tracking-[0.15em] text-foreground group/cta"
                      >
                        Explorer {espace.title}
                        <ArrowRight size={12} className="transition-transform group-hover/cta:translate-x-1" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── L'IMMERSION: VOS MODES DE VIE (Le Cœur Émotionnel) ── */}
      <section id="modes-vie" className="relative py-28 bg-background" aria-labelledby="modes-heading">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="mb-20 max-w-2xl">
            <SectionLabel>Vos moments de vie</SectionLabel>
            <h2
              id="modes-heading"
              className="font-black uppercase leading-none text-foreground text-balance"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
            >
              L'immersion: vos<br />
              <span className="italic text-foreground/45">modes de vie.</span>
            </h2>
            <p className="text-[14px] text-foreground/60 leading-relaxed mt-6">
              Chaque instant transformé en expérience. De l'aube sereine au repos paisible, votre maison s'adapte à chaque moment de votre vie.
            </p>
          </div>

          {/* Modes Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {modesVie.map((mode) => (
              <div key={mode.title} className="group relative bg-card rounded overflow-hidden hover:shadow-lg transition-all duration-300">
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-background/50">
                  <Image
                    src={mode.image}
                    alt={mode.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="font-black uppercase text-foreground text-[14px] mb-3">{mode.title}</h3>
                  <p className="text-primary text-[13px] font-medium mb-4">{mode.experience}</p>
                  
                  <div className="bg-background/50 p-4 rounded mb-4 border border-white/5">
                    <p className="text-[13px] text-foreground/70 leading-relaxed">{mode.action}</p>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-0.5">✓</span>
                    <p className="text-[13px] text-foreground/60">{mode.benefit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LA MÉTHODE DOMOTUS (Le Parcours sans friction) ── */}
      <section className="py-28 bg-card" aria-labelledby="process-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <SectionLabel>Du rêve à la réalité</SectionLabel>
            <h2
              id="process-heading"
              className="font-black uppercase leading-none text-foreground text-balance max-w-xl"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
            >
              La méthode<br />
              <span className="italic text-foreground/45">Domotus.</span>
            </h2>
          </div>
          <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/6">
            {etapes.map((e) => (
              <li key={e.num} className="bg-background p-8 flex flex-col gap-4">
                <span className="text-[10px] font-bold text-primary/60 uppercase tracking-widest">{e.num}</span>
                <h3 className="font-bold uppercase tracking-[0.08em] text-foreground text-[13px]">{e.title}</h3>
                <p className="text-[13px] text-foreground/50 leading-relaxed">{e.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── REALISATIONS ── */}
      <section id="realisations" className="py-28 bg-background" aria-labelledby="real-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <SectionLabel>Portfolio</SectionLabel>
              <h2
                id="real-heading"
                className="font-black uppercase leading-none text-foreground"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
              >
                Réalisations au Maroc.
              </h2>
            </div>
            <Link href="/contact" className="focus-ring shrink-0 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-foreground/40 hover:text-primary transition-colors duration-300">
              Votre projet <ArrowRight size={12} aria-hidden="true" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-white/6">
            {realisations.map((r) => (
              <div key={r.title} className="relative overflow-hidden group aspect-[4/5]">
                <Image src={r.image} alt={`${r.title} — ${r.subtitle}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-primary mb-2 font-semibold">{r.tag}</p>
                  <p className="font-bold uppercase tracking-[0.05em] text-foreground text-[13px]">{r.title}</p>
                  <p className="text-[12px] text-foreground/55 mt-1">{r.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 bg-card" aria-label="Demande de devis domotique Maroc">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2
            className="font-black uppercase leading-none text-foreground text-balance mb-10"
            style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", letterSpacing: "-0.03em" }}
          >
            Votre villa mérite mieux<br />
            <span className="italic text-foreground/50">qu'un interrupteur.</span>
          </h2>
          <Link href="/contact" className="focus-ring inline-flex items-center gap-3 bg-primary px-10 py-5 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-primary/85 transition-all duration-300" style={{ color: "#0a0a0a" }}>
            Demander mon audit technique gratuit <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
