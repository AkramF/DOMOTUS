import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionLabel from "@/components/ui/section-label";

export const metadata: Metadata = {
  title: "Domotique pour Promoteurs Immobiliers — Valeur & Différenciation | Domotus",
  description: "Domotique multi-protocoles (KNX, Crestron, Lutron) pour programmes immobiliers au Maroc. +18% de taux de vente, +15% de valeur m². Intégration dès conception.",
  alternates: { canonical: "https://www.domotus.ma/promoteurs" },
};

const chiffres = [
  { num: "+18%", label: "de taux de vente sur les programmes équipés" },
  { num: "+15%", label: "de valeur au m² certifiée HQE / Smart" },
  { num: "108", label: "lots livrés en 2024 sur 4 villes du Maroc" },
  { num: "6 mois", label: "intégration anticipée dès la conception" },
];

const references = [
  { name: "Résidence Anfa Place", location: "Casablanca", units: "64 lots", system: "KNX + Crestron" },
  { name: "Tour Marsa Résidences", location: "Rabat", units: "108 lots", system: "KNX + Lutron" },
  { name: "Palmeraie Prestige", location: "Marrakech", units: "38 villas", system: "Crestron Home" },
  { name: "Tanger Bay Living", location: "Tanger", units: "92 lots", system: "KNX + Fibaro" },
];

const avantages = [
  {
    num: "01",
    title: "Différenciation commerciale immédiate",
    desc: "Dans un marché marocain de plus en plus concurrentiel, la domotique est devenu un argument de vente décisif. Nos acheteurs ne comparent plus — ils choisissent.",
  },
  {
    num: "02",
    title: "Intégration dès la conception",
    desc: "Nous intervenons avant le permis de construire. Pré-câblage gros œuvre, coordination BIM, zéro surprise en phase finition. Le coût d'intégration est divisé par 3 versus rénovation.",
  },
  {
    num: "03",
    title: "Labels & conformité",
    desc: "HQE, BREEAM, LEED, R2S — nos architectures facilitent l'obtention des certifications qui ouvrent les portes du financement institutionnel et des acheteurs internationaux.",
  },
  {
    num: "04",
    title: "SAV & garantie longue durée",
    desc: "Nous prenons en charge la maintenance de vos résidents après livraison. Contrats pluriannuels, astreinte 24h/7j, télémaintenance. Votre image de marque est protégée.",
  },
];

const temoignage = {
  quote: "Intégrer Domotus dès la conception de notre programme Anfa Place a transformé notre approche commerciale. Nos appartements se sont vendus 14% au-dessus du prix du marché. L'équipe livre dans les délais, ce qui est rare — et précieux.",
  name: "Mme Laila M.",
  role: "Directrice Développement — Groupe Immobilier, Casablanca",
};

export default function PromoteursPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative w-full h-[80vh] overflow-hidden" aria-label="Domotique pour promoteurs immobiliers au Maroc">
        <Image src="/images/immeuble-tertiaire.jpg" alt="Programme immobilier intelligent connecté KNX — Domotus Maroc" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-background/65" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 40%, transparent 30%, oklch(0 0 0 / 0.45) 100%)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-8 h-px bg-foreground/40" aria-hidden="true" />
            <p className="text-[11px] uppercase tracking-[0.35em] text-primary font-medium">Tertiaire & Promoteurs — Maroc</p>
            <span className="block w-8 h-px bg-foreground/40" aria-hidden="true" />
          </div>
          <h1
            className="font-black uppercase leading-none text-foreground text-balance mb-6"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", letterSpacing: "-0.03em" }}
          >
            Vendez plus.<br />
            <span className="italic text-foreground/60">Vendez mieux.</span>
          </h1>
          <p className="text-[15px] text-foreground/70 max-w-xl text-balance leading-relaxed mb-10">
            Domotus intègre l'intelligence domotique dans vos programmes dès la conception — pour augmenter votre valeur au m², accélérer vos ventes et décrocher les labels qui font la différence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="focus-ring inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85" style={{ color: "#0a0a0a" }}>
              Discutons de votre programme <ArrowRight size={13} aria-hidden="true" />
            </Link>
            <Link href="/expertises" className="focus-ring inline-flex items-center gap-3 border border-white/25 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-foreground/70 hover:border-primary hover:text-primary transition-all duration-300">
              Nos expertises <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS IMPACT ── */}
      <section className="bg-card border-y border-white/6" aria-label="Impact commercial de la domotique pour promoteurs au Maroc">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <dl className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/6">
            {chiffres.map((c) => (
              <div key={c.label} className="px-8 py-8 flex flex-col gap-1">
                <dt className="text-[11px] uppercase tracking-[0.18em] text-foreground/40 order-2 leading-snug">{c.label}</dt>
                <dd className="font-black text-foreground order-1" style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>{c.num}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── PROPOSITION VALEUR ── */}
      <section className="py-28 bg-background" aria-labelledby="proposition-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <SectionLabel>L'argument décisif</SectionLabel>
            <h2
              id="proposition-heading"
              className="font-black uppercase leading-none text-foreground text-balance mb-8"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Vos acheteurs veulent<br />
              <span className="italic text-foreground/50">la domotique.</span><br />
              Donnez-leur.
            </h2>
            <p className="text-foreground/55 leading-relaxed text-[15px] mb-5">
              Au Maroc comme à l'international, les acquéreurs premium intègrent désormais la connectivité du bâtiment dans leurs critères d'achat. Un programme sans domotique laisse de l'argent sur la table.
            </p>
            <p className="text-foreground/55 leading-relaxed text-[15px] mb-10">
              Domotus intervient dès la phase conception pour intégrer les systèmes KNX dans vos plans — coût optimisé, délais maîtrisés, valeur maximisée.
            </p>
            <ul className="flex flex-col gap-3 mb-10">
              {[
                "Intégration anticipée = coût divisé par 3 vs rénovation",
                "Documentation technique complète pour vos acheteurs",
                "Coordination avec vos architectes et BET",
                "Maintenance longue durée de vos résidents incluse",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] text-foreground/60">
                  <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="focus-ring inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-primary/85 transition-all duration-300" style={{ color: "#0a0a0a" }}>
              Planifier un échange <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/expertise-bms.jpg"
              alt="Supervision BMS d'un programme immobilier intelligent au Maroc"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── 4 AVANTAGES ── */}
      <section className="py-28 bg-card" aria-labelledby="avantages-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <SectionLabel>Pourquoi Domotus</SectionLabel>
            <h2
              id="avantages-heading"
              className="font-black uppercase leading-none text-foreground text-balance max-w-2xl"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
            >
              Ce que vous gagnez à chaque{" "}
              <span className="italic text-foreground/45">étape.</span>
            </h2>
          </div>
          <ol className="grid md:grid-cols-2 gap-px bg-white/8">
            {avantages.map((a) => (
              <li key={a.num} className="bg-background hover:bg-background/80 transition-colors duration-300 p-10 flex flex-col gap-4">
                <span className="text-[11px] font-bold text-primary/60 uppercase tracking-widest">{a.num}</span>
                <h3 className="font-bold uppercase tracking-[0.08em] text-foreground text-[14px]">{a.title}</h3>
                <p className="text-[13px] text-foreground/50 leading-relaxed">{a.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── TEMOIGNAGE ── */}
      <section className="py-28 bg-background" aria-label="Témoignage promoteur domotique Maroc">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <blockquote>
            <div className="flex justify-center gap-1 mb-8" aria-label="5 étoiles">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-primary" aria-hidden="true">★</span>
              ))}
            </div>
            <p className="text-[17px] text-foreground/70 leading-relaxed italic mb-10 text-balance">
              &ldquo;{temoignage.quote}&rdquo;
            </p>
            <footer>
              <cite className="not-italic">
                <span className="block text-[13px] font-bold text-foreground uppercase tracking-[0.1em]">{temoignage.name}</span>
                <span className="block text-[11px] text-foreground/40 mt-1">{temoignage.role}</span>
              </cite>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ── REFERENCES ── */}
      <section className="py-28 bg-card" aria-labelledby="ref-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <SectionLabel>Références</SectionLabel>
            <h2
              id="ref-heading"
              className="font-black uppercase leading-none text-foreground"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
            >
              Programmes livrés au Maroc.
            </h2>
          </div>
          <div className="flex flex-col gap-px bg-white/8">
            {references.map((r) => (
              <div key={r.name} className="bg-background hover:bg-background/80 transition-colors duration-300 px-8 py-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-0">
                <div className="flex-1">
                  <p className="font-bold uppercase tracking-[0.08em] text-foreground text-[13px]">{r.name}</p>
                </div>
                <div className="flex gap-8 md:gap-16 text-[12px] text-foreground/45">
                  <span>{r.location}</span>
                  <span>{r.units}</span>
                  <span className="text-primary font-semibold">{r.system}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 bg-background text-center" aria-label="Contact promoteur domotique Maroc">
        <div className="mx-auto max-w-2xl px-6">
          <SectionLabel>Votre prochain programme</SectionLabel>
          <h2
            className="font-black uppercase leading-none text-foreground text-balance mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", letterSpacing: "-0.03em" }}
          >
            Intégrons Domotus<br />
            <span className="italic text-foreground/50">dès maintenant.</span>
          </h2>
          <p className="text-foreground/50 text-[15px] leading-relaxed mb-10 max-w-lg mx-auto">
            Plus tôt nous intervenons dans votre programme, plus le coût est optimisé et la valeur créée est importante. Prenez rendez-vous cette semaine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="focus-ring inline-flex items-center gap-3 bg-primary px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-primary/85 transition-all duration-300" style={{ color: "#0a0a0a" }}>
              Prendre rendez-vous <ArrowRight size={13} aria-hidden="true" />
            </Link>
            <Link href="/expertises" className="focus-ring inline-flex items-center gap-3 border border-white/20 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-foreground/60 hover:border-primary hover:text-primary transition-all duration-300">
              Nos expertises <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
