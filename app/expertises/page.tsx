import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Lightbulb, Wifi, Lock, Zap, Building2, TrendingUp } from "lucide-react";
import type { Metadata } from "next";
import SectionLabel from "@/components/ui/section-label";

export const metadata: Metadata = {
  title: "Expertises Domotique Multi-Protocoles — Architecture Intelligente | Domotus",
  description:
    "Expertise complète en domotique multi-protocoles : architecture réseau, intégration certifiée, sécurité, gestion énergétique, éclairage intelligent. 18 ans d'expérience au Maroc.",
  alternates: { canonical: "https://www.domotus.ma/expertises" },
};

const methodologie = [
  {
    num: "01",
    title: "Analyse & Audit",
    desc: "Étude approfondie des plans, des usages et des contraintes techniques. Nous cartographions l'infrastructure pour dimensionner chaque système.",
  },
  {
    num: "02",
    title: "Conception d'Architecture",
    desc: "Définition complète de l'infrastructure réseau et des systèmes intelligents. Plans techniques, schémas d'intégration et spécifications détaillées.",
  },
  {
    num: "03",
    title: "Coordination Technique",
    desc: "Collaboration étroite avec architectes, bureaux d'études et entreprises. Nous assurons la cohérence du projet du gros-œuvre à la finition.",
  },
  {
    num: "04",
    title: "Intégration & Paramétrage",
    desc: "Installation, configuration fine et scénarisation avancée de tous les systèmes. Chaque fonction est testée et validée en conditions réelles.",
  },
  {
    num: "05",
    title: "Tests & Validation",
    desc: "Vérification complète des performances, stabilité et interopérabilité. Nous certifions que tous les systèmes fonctionnent en harmonie.",
  },
  {
    num: "06",
    title: "Suivi & Évolution",
    desc: "Accompagnement à long terme et support technique réactif. Votre système grandit et s'adapte à vos besoins futurs sans refonte complète.",
  },
];

const domaines = [
  {
    icon: Wifi,
    title: "Architecture Réseau Avancée",
    desc: "Conception d'infrastructures robustes et évolutives, adaptées aux propriétés haut standing.",
    features: ["Réseaux segmentés et sécurisés", "Redondance Internet", "Baies techniques professionnelles", "Optimisation des flux"],
  },
  {
    icon: Building2,
    title: "Intégration Domotique Certifiée",
    desc: "Interopérabilité complète et scénarisation avancée pour une intelligence cohérente.",
    features: ["Protocoles ouverts multi-marques", "Intégration multi-systèmes", "Automatisations complexes", "Centralisation des commandes"],
  },
  {
    icon: Lock,
    title: "Sécurité & Contrôle d'Accès",
    desc: "Conception de systèmes de sécurité structurés et supervisés.",
    features: ["Vidéosurveillance intelligente", "Contrôle d'accès centralisé", "Interphonie intégrée", "Supervision distante"],
  },
  {
    icon: Zap,
    title: "Gestion Énergétique Intelligente",
    desc: "Pilotage et optimisation des consommations sans compromis sur le confort.",
    features: ["Monitoring énergétique", "Gestion des charges lourdes", "Intégration solaire", "Optimisation automatique"],
  },
  {
    icon: Lightbulb,
    title: "Éclairage Scénarisé",
    desc: "Création d'ambiances lumineuses adaptées à chaque moment et chaque usage.",
    features: ["Scènes dynamiques", "Pilotage circadien", "Variation d'intensité", "Mise en valeur architecturale"],
  },
  {
    icon: TrendingUp,
    title: "Supervision & Monitoring",
    desc: "Pilotage centralisé et intelligence décisionnelle pour optimiser chaque système.",
    features: ["Dashboard unifié", "Alertes temps réel", "Maintenance prédictive", "Reporting énergétique"],
  },
];

const certifications = [
  { title: "Formation Continue", desc: "Nos équipes maintiennent à jour leurs certifications auprès des principaux protocoles et marques." },
  { title: "Partenariats Technologiques", desc: "Nous collaborons étroitement avec les leaders mondiaux de la domotique et des réseaux." },
  { title: "Veille Permanente", desc: "Suivi actif des standards internationaux et des évolutions technologiques émergentes." },
  { title: "Qualité & Responsabilité", desc: "Chaque installation est documentée, testée et garantie. Nos engagements sont écrits et tenus." },
];

const experiences = [
  { metric: "10+", label: "Années d'expérience en architecture domotique" },
  { metric: "+150", label: "Projets réalisés au Maroc depuis 2017" },
  { metric: "10 ans", label: "de durabilité garantie sur les systèmes certifiés" },
  { metric: "24/7", label: "Astreinte technique disponible pour tous nos clients" },
];

export default function ExpertisesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative w-full h-[80vh] overflow-hidden" aria-label="Notre expertise en architecture intelligente">
        <Image
          src="/images/showroom.jpg"
          alt="Architecture domotique professionnelle — expertise Domotus Maroc"
          fill priority sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/65" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 40%, transparent 30%, oklch(0 0 0 / 0.45) 100%)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-8 h-px bg-foreground/40" aria-hidden="true" />
            <p className="text-[11px] uppercase tracking-[0.35em] text-primary font-medium">Expertise Technique</p>
            <span className="block w-8 h-px bg-foreground/40" aria-hidden="true" />
          </div>
          <h1
            className="font-black uppercase leading-none text-foreground text-balance mb-6"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", letterSpacing: "-0.03em" }}
          >
            Notre Expertise
          </h1>
          <p className="text-[15px] text-foreground/70 max-w-xl text-balance leading-relaxed mb-3">
            Une ingénierie maîtrisée, de la conception à l'intégration.
          </p>
          <p className="text-[14px] text-foreground/60 max-w-lg text-balance leading-relaxed mb-10">
            Concevoir une propriété intelligente exige rigueur, méthode et maîtrise technique. Domotus structure chaque projet comme une véritable architecture numérique.
          </p>
          <Link href="/contact" className="focus-ring inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85" style={{ color: "#0a0a0a" }}>
            Découvrir notre approche <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ── VISION ── */}
      <section className="py-28 bg-card" aria-labelledby="vision-heading">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="mb-12">
            <SectionLabel>Notre philosophie</SectionLabel>
            <h2
              id="vision-heading"
              className="font-black uppercase leading-none text-foreground text-balance mb-8"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Durabilité &amp; Pérennité
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-bold uppercase tracking-[0.08em] text-foreground text-[14px] mb-4">Notre vision</h3>
              <p className="text-foreground/70 leading-relaxed mb-6 text-[15px]">
                La domotique durable, c'est construire des infrastructures intelligentes qui persistent au-delà des modes technologiques. Nos systèmes multi-protocoles sont architecturés pour évoluer, s'adapter et servir votre habitat pendant des décennies.
              </p>
              <p className="text-foreground/60 leading-relaxed text-[14px]">
                Chez Domotus, nous rejetons l'approche propriétaire et l'obsolescence programmée. Chaque installation est conçue comme une fondation solide, flexible et ouverte — prête pour les technologies de demain.
              </p>
            </div>
            <div>
              <h3 className="font-bold uppercase tracking-[0.08em] text-foreground text-[14px] mb-4">Notre différenciation</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <div>
                    <span className="font-bold text-foreground text-[14px]">Multi-protocoles certifiés</span>
                    <p className="text-foreground/60 text-[13px] mt-1">KNX, Crestron, Lutron, Zigbee, Matter — liberté de choix, zéro enfermement.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <div>
                    <span className="font-bold text-foreground text-[14px]">Architecture ouverte</span>
                    <p className="text-foreground/60 text-[13px] mt-1">Vos systèmes restent accessibles, maintenables et évolutifs — pas de propriétaire.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <div>
                    <span className="font-bold text-foreground text-[14px]">Garantie long terme</span>
                    <p className="text-foreground/60 text-[13px] mt-1">10 ans de durabilité certifiée — c'est notre engagement envers votre patrimoine.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── MÉTHODOLOGIE ── */}
      <section className="py-28 bg-background" aria-labelledby="methodologie-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <SectionLabel>Processus</SectionLabel>
            <h2
              id="methodologie-heading"
              className="font-black uppercase leading-none text-foreground text-balance"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Une approche structurée<br />
              <span className="italic text-foreground/50">et maîtrisée.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8">
            {methodologie.map((m) => (
              <div key={m.num} className="bg-background hover:bg-background/80 transition-colors duration-300 p-10 flex flex-col gap-4">
                <span className="text-[11px] font-bold text-primary/60 uppercase tracking-widest">{m.num}</span>
                <h3 className="font-bold uppercase tracking-[0.08em] text-foreground text-[14px]">{m.title}</h3>
                <p className="text-[13px] text-foreground/50 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOMAINES D'EXPERTISE ── */}
      <section className="py-28 bg-card" aria-labelledby="domaines-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <SectionLabel>Domaines d'Expertise</SectionLabel>
            <h2
              id="domaines-heading"
              className="font-black uppercase leading-none text-foreground text-balance max-w-2xl"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Une maîtrise<br />
              <span className="italic text-foreground/50">transversale des systèmes intelligents.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8">
            {domaines.map((d) => {
              const Icon = d.icon;
              return (
                <div key={d.title} className="bg-background hover:bg-background/80 transition-colors duration-300 p-10 flex flex-col gap-4">
                  <Icon size={20} className="text-primary" aria-hidden="true" />
                  <h3 className="font-bold uppercase tracking-[0.08em] text-foreground text-[14px]">{d.title}</h3>
                  <p className="text-[13px] text-foreground/60 leading-relaxed mb-4">{d.desc}</p>
                  <ul className="space-y-2 text-[12px] text-foreground/45">
                    {d.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS & ENGAGEMENT ── */}
      <section className="py-28 bg-background" aria-labelledby="certif-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <SectionLabel>Crédibilité</SectionLabel>
            <h2
              id="certif-heading"
              className="font-black uppercase leading-none text-foreground text-balance max-w-2xl"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Une expertise<br />
              <span className="italic text-foreground/50">reconnue et maintenue à jour.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/8">
            {certifications.map((c, i) => (
              <div key={i} className="bg-background hover:bg-background/80 transition-colors duration-300 p-8 flex flex-col gap-3">
                <h3 className="font-bold uppercase tracking-[0.08em] text-foreground text-[13px]">{c.title}</h3>
                <p className="text-[13px] text-foreground/50 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPÉRIENCE ── */}
      <section className="py-28 bg-card border-y border-white/8" aria-labelledby="exp-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-12 max-w-2xl">
            <SectionLabel>Parcours</SectionLabel>
            <h2
              id="exp-heading"
              className="font-black uppercase leading-none text-foreground text-balance"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Une expérience<br />
              <span className="italic text-foreground/50">éprouvée sur le terrain.</span>
            </h2>
          </div>
          <dl className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/6">
            {experiences.map((e) => (
              <div key={e.metric} className="px-8 py-8 flex flex-col gap-2">
                <dt className="text-[11px] uppercase tracking-[0.18em] text-foreground/40 order-2 leading-snug">{e.label}</dt>
                <dd className="font-black text-foreground order-1" style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>{e.metric}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-28 bg-background text-center" aria-label="Consultation stratégique architecture intelligente">
        <div className="mx-auto max-w-2xl px-6">
          <h2
            className="font-black uppercase leading-none text-foreground text-balance mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            Construisons une<br />
            <span className="italic text-foreground/50">architecture intelligente durable.</span>
          </h2>
          <p className="text-[15px] text-foreground/60 leading-relaxed mb-4">
            Chaque projet nécessite une réflexion structurée et une expertise maîtrisée.
          </p>
          <p className="text-[14px] text-foreground/50 leading-relaxed mb-12">
            Nos équipes vous accompagnent dans la conception d'un système cohérent, évolutif et parfaitement intégré.
          </p>
          <Link
            href="/contact"
            className="focus-ring inline-flex items-center gap-3 bg-primary px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-primary/85 transition-all duration-300"
            style={{ color: "#0a0a0a" }}
          >
            Planifier une consultation stratégique <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
