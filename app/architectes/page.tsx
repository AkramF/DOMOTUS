import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, Lock, Clock } from "lucide-react";
import SectionLabel from "@/components/ui/section-label";

export const metadata: Metadata = {
  title: "Domotique pour Architectes — Multi-Protocoles, Invisible, Sans Compromis | Domotus",
  description:
    "Intégration domotique invisible pour architectes : multi-protocoles (KNX, Crestron, Lutron), collaboration BIM, support complet, garantie 10 ans. Casablanca, Marrakech, Rabat, Tanger.",
  alternates: { canonical: "https://www.domotus.ma/architectes" },
  openGraph: {
    title: "Domotique pour Architectes — Multi-Protocoles & Invisible",
    description: "Intégration technologique sans compromis esthétique. Bureau d'étude intégré pour vos projets résidentiels.",
    url: "https://www.domotus.ma/architectes",
  },
};

const avantages = [
  {
    icon: Lock,
    title: "Multi-protocoles",
    description: "KNX, Crestron, Lutron — liberté de choix, zéro enfermement propriétaire.",
  },
  {
    icon: Zap,
    title: "Invisible",
    description: "Aucune pollution visuelle. Appareillages haut de gamme intégrés, capteurs dissimulés.",
  },
  {
    icon: Clock,
    title: "Sérénité chantier",
    description: "Intervention background durant les travaux. Votre planning respecté, zéro retard.",
  },
];

const process = [
  {
    step: "01",
    title: "Audit BIM",
    description: "Intégration des schémas multi-protocoles dans votre projet. Validation collaborative.",
  },
  {
    step: "02",
    title: "Design invisible",
    description: "Interfaces (tablettes, voice, gestes) qui s'effacent dans votre esthétique.",
  },
  {
    step: "03",
    title: "Installation background",
    description: "Intervention durant la phase travaux. Livraison discrète et sereine.",
  },
  {
    step: "04",
    title: "Support continu",
    description: "Documentation, formation, hotline 24/7. Votre réputation protégée.",
  },
];

const credentials = [
  { metric: "10+", label: "Années en architecture domotique" },
  { metric: "+150", label: "Projets réalisés depuis 2017" },
  { metric: "10 ans", label: "Garantie sur systèmes certifiés" },
  { metric: "24/7", label: "Astreinte technique" },
];

export default function ArchitectesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative w-full h-[80vh] overflow-hidden" aria-label="Domotique pour architectes">
        <Image
          src="/images/villa-prestige.jpg"
          alt="Intégration domotique invisible dans architecture premium"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <div className="flex items-center gap-4 mb-8">
            <span className="block w-8 h-px bg-foreground/40" aria-hidden="true" />
            <p className="text-[11px] uppercase tracking-[0.35em] text-primary font-medium">
              Bureau d'Étude Domotique
            </p>
            <span className="block w-8 h-px bg-foreground/40" aria-hidden="true" />
          </div>
          <h1
            className="font-black uppercase leading-tight text-foreground text-balance mb-6"
            style={{ fontSize: "clamp(2.2rem, 6vw, 5.5rem)", letterSpacing: "-0.03em" }}
          >
            Domotique<br />
            <span className="italic text-foreground/60">sans compromis.</span>
          </h1>
          <p className="text-[15px] text-foreground/65 max-w-2xl text-balance leading-relaxed mb-12">
            Intégration technologique invisible qui préserve votre vision architecturale. Multi-protocoles certifiés, collaboration BIM, livraison sereine. Pour villas et résidences de prestige au Maroc.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="focus-ring inline-flex items-center gap-3 bg-primary px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-primary/85 transition-all duration-300"
              style={{ color: "#0a0a0a" }}
            >
              Prendre rendez-vous <ArrowRight size={13} aria-hidden="true" />
            </Link>
            <Link
              href="#projets"
              className="focus-ring inline-flex items-center gap-3 border border-white/25 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-foreground/70 hover:border-primary hover:text-primary transition-all duration-300"
            >
              Voir nos projets <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TROIS AVANTAGES ── */}
      <section className="py-24 bg-background" aria-labelledby="avantages-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 id="avantages-heading" className="sr-only">Nos avantages pour architectes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {avantages.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex flex-col gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit">
                    <Icon size={24} className="text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold uppercase tracking-[0.08em] text-foreground text-[14px]">
                    {item.title}
                  </h3>
                  <p className="text-foreground/60 leading-relaxed text-[14px]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── VALUE PROP ── */}
      <section className="py-24 bg-card" aria-labelledby="value-heading">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel>Pourquoi Domotus</SectionLabel>
              <h2
                id="value-heading"
                className="font-black uppercase leading-none text-foreground text-balance mb-8"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
              >
                Architecte,<br />
                <span className="italic text-foreground/50">pas intégrateur.</span>
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-6 text-[15px]">
                Nous ne vendons pas des boîtiers. Nous concevons vos systèmes comme des architectes conçoivent vos espaces — avec rigueur, flexibilité et vision long terme.
              </p>
              <ul className="space-y-3 text-[14px] text-foreground/60">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Collaboration BIM native, plans et synoptiques</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Certification multi-protocoles (KNX, Crestron, Lutron)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>10 ans de garantie sur infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Sérénité chantier : intervention background, zéro retard</span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/hero-residential.jpg"
                alt="Intégration domotique en architecture"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 bg-background" aria-labelledby="process-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <SectionLabel>Du concept à la livraison</SectionLabel>
            <h2
              id="process-heading"
              className="font-black uppercase leading-none text-foreground text-balance"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              4 étapes,<br />
              <span className="italic text-foreground/50">zéro surprises.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/6">
            {process.map((p) => (
              <div key={p.step} className="bg-background p-8 flex flex-col gap-4">
                <span className="text-[10px] font-bold text-primary/70 uppercase tracking-widest">{p.step}</span>
                <h3 className="font-bold uppercase tracking-[0.08em] text-foreground text-[13px]">{p.title}</h3>
                <p className="text-[13px] text-foreground/50 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS ── */}
      <section className="py-24 bg-card" aria-labelledby="creds-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 id="creds-heading" className="sr-only">Notre expérience</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {credentials.map((cred, idx) => (
              <div key={idx} className="text-center">
                <p className="font-black text-primary text-[2.5rem] leading-none mb-2">
                  {cred.metric}
                </p>
                <p className="text-foreground/60 text-[13px] leading-relaxed">{cred.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJETS ── */}
      <section id="projets" className="py-24 bg-background" aria-labelledby="projets-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <SectionLabel>Portfolio</SectionLabel>
            <h2
              id="projets-heading"
              className="font-black uppercase leading-none text-foreground text-balance"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Réalisations<br />
              <span className="italic text-foreground/50">pour architectes.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-white/6">
            {[
              {
                title: "Villa signature Casablanca",
                type: "Architecture premium",
                image: "/images/villa-prestige.jpg",
              },
              {
                title: "Penthouse Rabat",
                type: "Résidentiel haut gamme",
                image: "/images/hero-residential.jpg",
              },
              {
                title: "Résidence Marrakech",
                type: "Hospitalité luxe",
                image: "/images/hero-bg.jpg",
              },
            ].map((proj) => (
              <div key={proj.title} className="relative overflow-hidden group aspect-[4/5] bg-background">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-primary mb-2 font-semibold">
                    {proj.type}
                  </p>
                  <p className="font-bold uppercase tracking-[0.05em] text-foreground text-[13px]">
                    {proj.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-28 bg-card" aria-label="Discutons de votre projet">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionLabel>Prêt à collaborer ?</SectionLabel>
          <h2
            className="font-black uppercase leading-none text-foreground text-balance mb-8"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.03em" }}
          >
            Discutons de votre<br />
            <span className="italic text-foreground/50">prochaine réalisation.</span>
          </h2>
          <p className="text-foreground/55 text-[15px] leading-relaxed mb-12 max-w-xl mx-auto">
            Intégration technologique invisible, collaboration BIM, garantie long terme. Parlons de comment augmenter la valeur de vos projets.
          </p>
          <Link
            href="/contact"
            className="focus-ring inline-flex items-center gap-3 bg-primary px-12 py-4 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-primary/85 transition-all duration-300"
            style={{ color: "#0a0a0a" }}
          >
            Prendre rendez-vous <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
