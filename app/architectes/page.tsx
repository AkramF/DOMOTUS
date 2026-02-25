import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionLabel from "@/components/ui/section-label";

export const metadata: Metadata = {
  title: "Domotique pour Architectes — Intégration invisible & design-first | Domotus",
  description: "Domotique multi-protocoles certifiée intégrée dès la conception. Design invisible, BIM collaboratif, certifications HQE/LEED. Partenaire pour architectes premium au Maroc.",
  alternates: { canonical: "https://www.domotus.ma/architectes" },
  openGraph: {
    title: "Domotique pour Architectes — Systèmes invisibles & premium",
    description: "Intégrez l'intelligence domotique multi-protocoles dans vos projets sans compromettre le design. Conception collaborative, support complet.",
    url: "https://www.domotus.ma/architectes",
  },
};

const projetsArchitectes = [
  { title: "Villa signature, Casablanca", subtitle: "Archeo & Domotus", tag: "Architecture premium", image: "/images/architects-hero.jpg" },
  { title: "Boutique hôtel Marrakech", subtitle: "Design invisible", tag: "Hospitalité luxe", image: "/images/hero-bg.jpg" },
  { title: "Penthouse Rabat", subtitle: "Design & domotique fusionnés", tag: "Résidentiel haut gamme", image: "/images/hero-residential.jpg" },
];

const avantagesArchitectes = [
  { num: "100%", label: "invisible — câblage structuré, zéro élément visible" },
  { num: "+15%", label: "valeur architecturale grâce à l'automation transparente" },
  { num: "Design-first", label: "approche — domotique intégrée dès le concept" },
  { num: "30 ans", label: "de support technique réactif post-livraison" },
];

const experiences = [
  {
    title: "Design préservé, intelligence ajoutée",
    description: "L'architecture que vous avez conçue reste impeccable. Aucun panneau de contrôle visible, aucun câble. L'intelligence domotique opère discrètement derrière les murs et les interfaces intégrées.",
    image: "/images/expertise-eclairage.jpg",
    imageAlt: "Domotique invisible dans un projet architectural premium",
  },
  {
    title: "Collaboration BIM dès la conception",
    description: "Nous intégrons les systèmes KNX dans votre BIM avant construction. Pas de surprises, pas de modifications d'urgence. Tout est prévu, dimensionné, validé avec votre équipe.",
    image: "/images/expertise-securite.jpg",
    imageAlt: "Collaboration BIM pour domotique architecturale au Maroc",
  },
  {
    title: "Certifications HQE/BREEAM/LEED acquises",
    description: "Les projets équipés Domotus gagnent automatiquement des crédits certification. Gestion énergétique optimale, confort passager, monitoring environnemental inclus.",
    image: "/images/expertise-energie.jpg",
    imageAlt: "Systèmes certifiés durables pour architecture verte",
  },
];

const etapes = [
  { num: "01", title: "Audit BIM collaboratif", desc: "Vous nous partagez votre projet, nous intégrons les schémas multi-protocoles (KNX/Lutron/Crestron). Réunion de validation avec votre équipe. Zéro impromptus." },
  { num: "02", title: "Design d'interface invisible", desc: "Nos UX designers co-créent des interfaces (tablettes, voice, gestes) qui se fondent dans votre esthétique. Pas de boîtier noir en coin de pièce." },
  { num: "03", title: "Installation & commissioning transparent", desc: "Tout se passe en background. Nous intervenons pendant la phase travaux, respectant votre planning strict de chantier. Livraison sereine." },
  { num: "04", title: "Support technique continu", desc: "Post-handover : documentation détaillée, formation équipe maître d'ouvrage, hotline réactive 24/7. Votre réputation reste impeccable." },
];

export default function ArchitectesPage() {
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
            <p className="text-[11px] uppercase tracking-[0.35em] text-primary font-medium">Résidentiel prestige — Maroc</p>
            <span className="block w-8 h-px bg-foreground/40" aria-hidden="true" />
          </div>
          <h1
            className="font-black uppercase leading-none text-foreground text-balance mb-6"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", letterSpacing: "-0.03em" }}
          >
            Votre maison<br />
            <span className="italic text-foreground/60">vous obéit.</span>
          </h1>
          <p className="text-[15px] text-foreground/70 max-w-lg text-balance leading-relaxed mb-10">
            Partenaire domotique certifié multi-protocoles au Maroc. Vos projets architecturaux méritent l'excellence technique — invisible, scalable, futur-proof.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="focus-ring inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85" style={{ color: "#0a0a0a" }}>
              Audit gratuit sous 48h <ArrowRight size={13} aria-hidden="true" />
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
            {avantagesArchitectes.map((b) => (
              <div key={`${b.num}-${b.label}`} className="px-8 py-8 flex flex-col gap-1">
                <dt className="text-[11px] uppercase tracking-[0.18em] text-foreground/40 order-2 leading-snug">{b.label}</dt>
                <dd className="font-black text-foreground order-1" style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>{b.num}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── STORYTELLING EXPERIENCES ── */}
      <section className="py-28 bg-background" aria-labelledby="experiences-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-20">
            <SectionLabel>Ce que vous vivez vraiment</SectionLabel>
            <h2
              id="experiences-heading"
              className="font-black uppercase leading-none text-foreground text-balance"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
            >
              Une journée dans une maison{" "}
              <span className="italic text-foreground/45">Domotus.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-px bg-white/6">
            {experiences.map((exp, i) => (
              <div
                key={exp.title}
                className={`bg-background grid lg:grid-cols-2 overflow-hidden ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
              >
                <div className={`relative aspect-[16/9] lg:aspect-auto overflow-hidden ${i % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                  <Image src={exp.image} alt={exp.imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                  <div className="absolute inset-0 bg-background/30" />
                </div>
                <div className={`flex flex-col justify-center p-10 lg:p-16 ${i % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                  <span className="text-[11px] font-bold text-primary/60 uppercase tracking-widest mb-4">0{i + 1}</span>
                  <h3
                    className="font-black uppercase leading-none text-foreground mb-5"
                    style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", letterSpacing: "-0.02em" }}
                  >
                    {exp.title}
                  </h3>
                  <p className="text-[14px] text-foreground/55 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
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
            {projetsArchitectes.map((r) => (
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
            Etude personnalisée gratuite. Aucun engagement.
          </p>
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-10">
            {["Certifié KNX", "Intervention Casablanca & Marrakech", "SAV sous 4h"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-[12px] text-foreground/50">
                <CheckCircle2 size={13} className="text-primary shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="focus-ring inline-flex items-center gap-3 bg-primary px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-primary/85 transition-all duration-300" style={{ color: "#0a0a0a" }}>
              Demander mon devis gratuit <ArrowRight size={13} aria-hidden="true" />
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
