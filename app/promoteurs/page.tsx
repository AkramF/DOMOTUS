import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Check } from "lucide-react";
import SectionLabel from "@/components/ui/section-label";

export const metadata: Metadata = {
  title: "Domotique Promoteurs — +18% Vente et +15% Valeur | Domotus",
  description:
    "Augmentez vente de +18% et valeur immobilière de +15% avec domotique certifiée KNX. Labels HQE/LEED. Intégration programme immobilier au Maroc.",
  alternates: { canonical: "https://www.domotus.ma/promoteurs" },
  openGraph: {
    title: "Domotique Promoteurs — Rentabilité KNX | Domotus",
    description:
      "+18% taux de vente, +15% valeur m². Intégration dès conception des programmes.",
    url: "https://www.domotus.ma/promoteurs",
    images: [
      {
        url: "https://www.domotus.ma/images/immeuble-tertiaire.webp",
        width: 1200,
        height: 630,
        alt: "Immeuble tertiaire avec domotique intelligente",
      },
    ],
  },
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

const packs = [
  {
    name: "Pack Basic",
    subtitle: "Sécurité & Énergie",
    description: "Le socle indispensable pour tous vos programmes",
    features: [
      "Éclairage intelligent (capteurs de présence, gradation)",
      "Contrôle du climat (thermostats programmables)",
      "Détection d'intrusion et vidéosurveillance",
      "Serrures électroniques connectées",
      "Architecture KNX/Zigbee",
      "Interface simple par smartphone",
    ],
    use_case: "Résidences à l'accès progressif, programmes pérennes",
    seo_keywords: "KNX, énergie intelligente, sécurité résidentielle",
  },
  {
    name: "Pack Premium",
    subtitle: "Expérience Totale",
    description: "Pour vos programmes très haut de gamme",
    features: [
      "Tous les avantages du Pack Basic",
      "Scénarisation d'ambiance (Cinéma, Accueil, Détente)",
      "Audio multi-room avec intégration musicale",
      "Contrôle des stores motorisés",
      "Interface tactile centrale dans chaque unité",
      "Intégration Crestron ou Lutron",
      "API pour domotique personnalisée",
    ],
    use_case: "Villas de prestige, penthouses, résidences de luxe",
    seo_keywords: "Crestron, Lutron, scénarisation, audio multi-room",
  },
  {
    name: "Smart Building",
    subtitle: "Gestion Immeuble",
    description: "Pour la gestion collective et l'efficience énergétique",
    features: [
      "Tous les avantages du Pack Premium",
      "Système BMS (Building Management System)",
      "Contrôle d'accès centralisé pour parties communes",
      "Visiophonie sur smartphone pour syndic",
      "Monitoring énergétique par lot et global",
      "Alertes maintenance préventive",
      "Certification HQE / BREEAM / LEED",
      "Rapport ROI énergétique détaillé",
    ],
    use_case: "Immeubles collectifs, complexes résidentiels, copropriétés",
    seo_keywords: "BMS, gestion énergétique, Smart Building, HQE",
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
            <p className="text-[11px] uppercase tracking-[0.35em] text-primary font-medium">Promoteurs Immobiliers — Maroc</p>
            <span className="block w-8 h-px bg-foreground/40" aria-hidden="true" />
          </div>
          <h1
            className="font-black uppercase leading-none text-foreground text-balance mb-6"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", letterSpacing: "-0.03em" }}
          >
            Vendez mieux<br />
            <span className="italic text-foreground/60">Vendez plus.</span>
          </h1>
          <p className="text-[15px] text-foreground/70 max-w-2xl text-balance leading-relaxed mb-10">
            Accélérez la commercialisation de vos programmes grâce à la labellisation Smart Building. Domotus intègre des solutions certifiées multi-protocoles qui valorisent vos actifs, séduisent une clientèle exigeante et augmentent votre prix de vente moyen jusqu&apos;à 18%.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="focus-ring inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85" style={{ color: "#0a0a0a" }}>
              Discutons de votre programme <ArrowRight size={13} aria-hidden="true" />
            </Link>
            <Link href="/division-projets" className="focus-ring inline-flex items-center gap-3 border border-white/25 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-foreground/70 hover:border-primary hover:text-primary transition-all duration-300">
              Division Projets <ArrowRight size={13} aria-hidden="true" />
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

      {/* ── NOS PACKS D'ÉQUIPEMENT ── */}
      <section className="py-28 bg-background" aria-labelledby="packs-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <SectionLabel>Moduler votre offre</SectionLabel>
            <h2
              id="packs-heading"
              className="font-black uppercase leading-none text-foreground text-balance"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
            >
              Nos packs d'équipement<br />
              <span className="italic text-foreground/45">adaptés à chaque standing.</span>
            </h2>
          </div>
          <p className="text-[15px] text-foreground/60 max-w-2xl mb-16">
            Modulez votre offre selon le standing de votre programme. De l'accès progressif au très haut de gamme, nous avons les solutions. Chaque pack est livré avec support réactif et maintenance incluse.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {packs.map((pack, idx) => (
              <div
                key={pack.name}
                className={`rounded-lg overflow-hidden transition-all duration-300 flex flex-col ${idx === 1 ? "lg:scale-105 lg:shadow-2xl border-2 border-primary" : "border border-white/10"} bg-card`}
              >
                {/* Header */}
                <div className={`px-8 pt-10 pb-8 ${idx === 1 ? "bg-primary/10" : "bg-background"}`}>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-primary font-bold">{pack.subtitle}</span>
                  <h3 className="font-black uppercase text-foreground text-[24px] mt-3 mb-2">{pack.name}</h3>
                  <p className="text-[14px] text-foreground/60">{pack.description}</p>
                </div>

                {/* Features */}
                <div className="flex-1 px-8 py-8">
                  <ul className="flex flex-col gap-4">
                    {pack.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check size={16} className="text-primary shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-[13px] text-foreground/70 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
                <div className="px-8 py-8 border-t border-white/8">
                  <p className="text-[11px] uppercase tracking-[0.15em] text-foreground/40 mb-2">Cas d'usage</p>
                  <p className="text-[13px] font-semibold text-foreground mb-4">{pack.use_case}</p>
                  <p className="text-[10px] text-foreground/40 italic">Keywords SEO: {pack.seo_keywords}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-card p-10 rounded border border-white/8">
            <p className="text-[14px] text-foreground/70 max-w-3xl">
              <span className="font-bold text-foreground">Note importante :</span> Tous nos packs sont installés selon la méthodologie Domotus rigoureuse : intégration anticipée dès conception, architecture invisible, coordination BIM, documentation technique complète, et support SAV 4h inclus pendant 5 ans minimum.
            </p>
          </div>
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
