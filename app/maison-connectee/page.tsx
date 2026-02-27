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

const experiences = [
  {
    time: "06:45",
    title: "Le matin qui vous attend",
    description: "Les volets s'ouvrent doucement. La lumière monte progressivement. La cafetière démarre. La température passe à 21°. Votre maison vous dit bonjour.",
    image: "/images/expertise-eclairage.jpg",
    imageAlt: "Éclairage circadien automatique Lutron dans une villa de luxe",
    details: ["Éclairage circadien", "Ouverture volets", "Chauffage", "Café prêt"],
  },
  {
    time: "15:30",
    title: "La sécurité que vous méritez",
    description: "Vos enfants rentrent : notification. Une présence à l'entrée : alerte. Votre villa veille sur ce qui compte le plus pour vous.",
    image: "/images/expertise-securite.jpg",
    imageAlt: "Sécurité biométrique et vidéosurveillance domotique au Maroc",
    details: ["Détection présence", "Notifications temps réel", "Biométrie", "Surveillance 24/7"],
  },
  {
    time: "18:00",
    title: "L'ambiance que vous créez",
    description: "Vous invitez du monde. Un clic. La lumière devient douce et chaleureuse. La musique s'adapte à votre sélection. Les volets se ferment. Vous n'êtes plus en train de gérer, vous vivez.",
    image: "/images/expertise-energia.jpg",
    imageAlt: "Ambiance personnalisée dans une villa connectée Domotus",
    details: ["Scénarios d'ambiance", "Éclairage RGBW", "Musique multi-zone", "Intimité garantie"],
  },
];

const etapes = [
  { num: "01", title: "Audit technique en 48h", desc: "Nous visitons, nous écoutons, nous analysons. Aucun frais, aucun engagement. Juste une écoute professionnelle de vos besoins et de votre espace." },
  { num: "02", title: "Architecture invisible", desc: "Nos ingénieurs certifiés multi-protocoles co-conçoivent avec votre architecte. Tout est pensé pour disparaître dans les murs. L'intelligence est là. Elle ne se voit pas." },
  { num: "03", title: "Installation en 4–8 semaines", desc: "Nos équipes maîtrisent chaque phase de chantier. Pose propre, câblage structuré, tests systémiques complets avant la remise des clés." },
  { num: "04", title: "Vous restez maître", desc: "Formation complète, documentation personnalisée. Notre SAV répond sous 4h. Votre système évolue avec vous, sans jamais vous rendre dépendant." },
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
              Audit technique en 48h <ArrowRight size={13} aria-hidden="true" />
            </Link>
            <Link href="/expertises" className="focus-ring inline-flex items-center gap-3 border border-white/25 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-foreground/70 hover:border-primary hover:text-primary transition-all duration-300">
              Nos expertises <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ROW ── */}
      <section className="bg-card border-y border-white/6" aria-label="Résultats mesurables domotique Domotus">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <dl className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/6">
            {benefices.map((b) => (
              <div key={b.label} className="px-8 py-8 flex flex-col gap-1">
                <dt className="text-[11px] uppercase tracking-[0.18em] text-foreground/40 order-2 leading-snug">{b.label}</dt>
                <dd className="font-black text-foreground order-1" style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>{b.num}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── ESPACES INTELLIGENTS ── */}
      <section className="relative py-0 bg-background overflow-hidden" aria-labelledby="espaces-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-28 pb-20">
          <SectionLabel>Chaque espace réinventé</SectionLabel>
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

      {/* ── STORYTELLING EXPERIENCES ── */}
      <section className="relative py-28 bg-background" aria-labelledby="experiences-heading">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          {/* Header */}
          <div className="mb-20 max-w-2xl">
            <SectionLabel>24 heures dans votre maison</SectionLabel>
            <h2
              id="experiences-heading"
              className="font-black uppercase leading-none text-foreground text-balance"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
            >
              Ce que vous vivez{" "}
              <span className="italic text-foreground/45">vraiment.</span>
            </h2>
            <p className="text-[14px] text-foreground/60 leading-relaxed mt-6">
              Chaque moment de votre journée transformé. Pas de technologie visible. Juste une maison qui vous comprend et qui s'adapte.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line - vertical */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent transform -translate-x-1/2" />

            {/* Timeline items */}
            <div className="space-y-20 md:space-y-32">
              {experiences.map((exp, idx) => (
                <div key={exp.title} className="group">
                  <div className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Image side */}
                    <div className={`relative overflow-hidden aspect-video md:aspect-square ${idx % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                      <Image
                        src={exp.image}
                        alt={exp.imageAlt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        loading={idx === 0 ? "eager" : "lazy"}
                      />
                      {/* Overlay time badge */}
                      <div className="absolute top-6 left-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-background/90 backdrop-blur border border-primary/30">
                        <span className="font-black text-primary text-[18px] tracking-tight">{exp.time}</span>
                      </div>
                    </div>

                    {/* Content side */}
                    <div className={`flex flex-col justify-center ${idx % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                      {/* Timeline dot - visible on desktop */}
                      <div className="hidden md:block absolute left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/4 -ml-2 border-4 border-background shadow-lg" />

                      {/* Content */}
                      <div className="max-w-xl">
                        {/* Time label mobile */}
                        <div className="md:hidden mb-4 flex items-baseline gap-3">
                          <span className="text-[24px] font-black text-primary">{exp.time}</span>
                          <div className="h-px flex-grow bg-primary/30" />
                        </div>

                        {/* Title */}
                        <h3
                          className="font-black uppercase leading-tight text-foreground mb-4"
                          style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", letterSpacing: "-0.01em" }}
                        >
                          {exp.title}
                        </h3>

                        {/* Description */}
                        <p className="text-[15px] text-foreground/70 leading-relaxed mb-8">
                          {exp.description}
                        </p>

                        {/* Details tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                          {exp.details.map((detail) => (
                            <span
                              key={detail}
                              className="inline-block px-3 py-1.5 bg-primary/10 border border-primary/20 rounded text-[11px] font-semibold text-primary uppercase tracking-wider hover:bg-primary/20 transition-colors duration-300"
                            >
                              {detail}
                            </span>
                          ))}
                        </div>

                        {/* Arrow indicator */}
                        <div className="flex items-center gap-2 text-[11px] text-foreground/40 group-hover:text-primary transition-colors duration-300">
                          <span>Découvrir plus</span>
                          <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-24 pt-20 border-t border-white/8 text-center">
            <p className="text-[14px] text-foreground/60 mb-6">
              Prêt à vivre cette expérience dans votre propre maison ?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-background font-black uppercase tracking-[0.1em] text-[11px] hover:bg-primary/90 transition-all duration-300 group/cta"
            >
              Démarrer votre transformation
              <ArrowRight size={12} className="transition-transform group-hover/cta:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-28 bg-card" aria-labelledby="process-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <SectionLabel>Notre méthode</SectionLabel>
            <h2
              id="process-heading"
              className="font-black uppercase leading-none text-foreground text-balance max-w-xl"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
            >
              De la visite à la remise{" "}
              <span className="italic text-foreground/45">des clés.</span>
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
          <SectionLabel>Passez à l'action</SectionLabel>
          <h2
            className="font-black uppercase leading-none text-foreground text-balance mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", letterSpacing: "-0.03em" }}
          >
            Votre villa mérite mieux<br />
            <span className="italic text-foreground/50">qu'un interrupteur.</span>
          </h2>
          <p className="text-foreground/50 text-[15px] leading-relaxed mb-4 max-w-md mx-auto">
            Audit technique personnalisé. Aucun engagement.
          </p>
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-10">
            {["Certifié Multi-Protocoles", "Intervention Casablanca & Marrakech", "SAV sous 4h"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-[12px] text-foreground/50">
                <CheckCircle2 size={13} className="text-primary shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="focus-ring inline-flex items-center gap-3 bg-primary px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-primary/85 transition-all duration-300" style={{ color: "#0a0a0a" }}>
              Demander mon audit technique <ArrowRight size={13} aria-hidden="true" />
            </Link>
            <Link href="/expertises" className="focus-ring inline-flex items-center gap-3 border border-white/20 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-foreground/60 hover:border-primary hover:text-primary transition-all duration-300">
              Découvrir nos expertises <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
