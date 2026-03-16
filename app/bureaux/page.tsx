import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions Bureaux & Tertiaire | Productivité Intelligente & Efficacité Énergétique | Domotus",
  description:
    "Bien-être collaborateur + productivité + efficacité énergétique. Solutions BMS enterprise pour immeubles bureaux, co-working, zones tertiaires au Maroc.",
  keywords: "domotique bureaux, BMS building management, smart office Maroc, efficacité énergétique tertiaire",
  alternates: { canonical: "https://www.domotus.ma/bureaux" },
  openGraph: {
    title: "Solutions Smart Office pour Bureaux — Productivité & Efficacité | Domotus",
    description: "Espaces de travail optimisés. IA prédictive. Efficience énergétique avancée.",
    url: "https://www.domotus.ma/bureaux",
  },
};

const coreSolutions = [
  {
    title: "Environnement de Travail Personnalisé",
    description: "Chaque collaborateur ajuste lumière, température, air ambiant selon sa zone. Capteurs détectent préférences individuelles. Micro-zones de confort granulaires.",
    features: [
      "Contrôle température par zone/étage",
      "Éclairage avec calibrage luminosité naturelle",
      "Qualité air (CO2, humidité, particules)",
      "App mobile pour ajustements personnels"
    ]
  },
  {
    title: "Gestion Intelligente des Espaces",
    description: "Réservation de salles de réunion intégrée. Détection occupation réelle vs occupants attendus. Optimisation espace collaborative en temps réel.",
    features: [
      "Booking salles depuis calendar",
      "Capteurs présence + détection inactivité",
      "Libération auto salles non-utilisées après 15min",
      "Dashboard manager occupancy live"
    ]
  },
  {
    title: "Efficacité Énergétique Prédictive",
    description: "IA qui apprend patterns de travail (heures de pointe, jours chauds, occupation réelle). Pré-climatise avant arrivée. Éteint systèmes hors-heures.",
    features: [
      "Shut-down automatique 18h",
      "Week-end déploiement réduit",
      "Pré-chauffage/refroidissement anticipé",
      "Détection fenêtre ouverte = arrêt HVAC"
    ]
  },
  {
    title: "Monitoring Énergétique Détaillé",
    description: "Compteurs par étage, par zone, par circuit. Identification immédiate des gaspillages. Benchmarking vs bâtiments similaires.",
    features: [
      "Sous-compteurs par partie commune",
      "Analytics temps réel par espace",
      "Alertes surconsommation anomalie",
      "Rapports ROI énergie mensuels"
    ]
  },
  {
    title: "Intégration Multi-Bâtiments",
    description: "Pilotez 5, 10, 20 immeubles bureaux depuis une plateforme unique. Gestion centralisée chauffage, électricité, sécurité. Economies d'échelle.",
    features: [
      "Dashboard unique multi-sites",
      "Synchronisation horaires tous bâtiments",
      "Reporting consolidé énergie",
      "Alertes incidents centralisées"
    ]
  },
  {
    title: "Sécurité & Contrôle d'Accès Intégré",
    description: "Accès par badge, code, face-recognition. Gestion des droits d'accès. Historique de présence pour équipe. Intégration systèmes d'alarme.",
    features: [
      "Contrôle accès multi-zones",
      "Logs présence collaborateurs",
      "Intégration alarme intrusion",
      "Gestion des visiteurs + badges temporaires"
    ]
  }
];

const impacts = [
  { metric: "+22%", label: "Employee productivity" },
  { metric: "-32%", label: "Consumption energy" },
  { metric: "-28%", label: "Maintenance costs" },
  { metric: "+18%", label: "Occupancy optimization" },
];

const certifications = [
  { label: "LEED", desc: "Efficacité énergétique et qualité environnementale." },
  { label: "BREEAM", desc: "Bien-être collaborateurs + performance énergétique." },
  { label: "ISO 50001", desc: "Management systématique de l'énergie." },
];

export default function BureauxPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* ── HERO ── */}
      <section className="py-32 lg:py-48 bg-background" aria-labelledby="hero-heading">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-3 bg-[#efd555]" aria-hidden="true" />
            <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "13px", lineHeight: "18px", color: "#efd555", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Pour Bureaux & Tertiaire
            </p>
          </div>
          <h1
            id="hero-heading"
            className="font-black uppercase leading-none text-balance mb-8"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5rem)", letterSpacing: "-0.03em", color: "#ffffff" }}
          >
            Productivité<br />
            <span className="italic" style={{ color: "#efd555" }}>intelligente.</span>
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mb-8">
            Créez des espaces de travail optimisés pour bien-être et efficacité. Solutions BMS enterprise-grade pour immeubles bureaux, co-working, zones tertiaires. Réduction énergétique de 32%, satisfaction collaborateurs +22%.
          </p>
          <p className="text-base text-foreground/60 leading-relaxed max-w-3xl mb-12">
            Gestion multi-bâtiments centralisée. IA prédictive. Certifications LEED/BREEAM. Efficience énergétique avancée.
          </p>
        </div>
      </section>

      {/* ── IMPACTS ── */}
      <section className="py-16 lg:py-20 bg-[#efd555]" aria-labelledby="impacts-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 id="impacts-heading" className="sr-only">Impacts mesurables</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impacts.map((r) => (
              <div key={r.metric} className="text-center">
                <p className="font-black text-3xl mb-2" style={{ color: "#000000" }}>{r.metric}</p>
                <p className="text-sm font-semibold" style={{ color: "#000000" }}>{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE SOLUTIONS ── */}
      <section className="py-24 lg:py-32 bg-white" aria-labelledby="solutions-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-black" aria-hidden="true" />
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "12px", lineHeight: "18px", color: "#000000", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Solutions Complètes
              </p>
            </div>
            <h2
              id="solutions-heading"
              className="font-black uppercase leading-tight text-balance"
              style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", letterSpacing: "-0.02em", color: "#000000" }}
            >
              BMS Enterprise<br />
              <span className="italic text-black/50">pour immeubles intelligents.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {coreSolutions.map((sol) => (
              <div key={sol.title} className="bg-[#f5f5f5] p-8 rounded-lg border border-black/5">
                <h3 className="font-black uppercase text-sm mb-3 text-black">{sol.title}</h3>
                <p className="text-sm text-black/70 leading-relaxed mb-6">{sol.description}</p>
                <ul className="space-y-2">
                  {sol.features.map((feat) => (
                    <li key={feat} className="flex gap-2 text-xs text-black/60">
                      <div className="w-1.5 h-1.5 rounded-sm mt-1.5 flex-shrink-0" style={{ backgroundColor: "#efd555" }} />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WELL-BEING FOCUS ── */}
      <section className="py-24 lg:py-32 bg-background" aria-labelledby="wellbeing-heading">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-[#efd555]" aria-hidden="true" />
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "13px", lineHeight: "18px", color: "#efd555", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Impact Collaborateurs
              </p>
            </div>
            <h2
              id="wellbeing-heading"
              className="font-black uppercase leading-tight text-balance"
              style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", letterSpacing: "-0.02em", color: "#ffffff" }}
            >
              Espaces de travail<br />
              <span className="italic text-foreground/50">bien-être.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Confort Thermique Personnalisé",
                benefits: ["Zones thermiques granulaires", "Pas de débats température", "Économies + satisfaction"]
              },
              {
                title: "Lumière Naturelle Optimisée",
                benefits: ["Éclairage 4000K (productivité)", "Adaptation circadienne", "Réduction fatigue visuelle"]
              },
              {
                title: "Qualité de l'Air",
                benefits: ["Monitoring CO2 continu", "Ventilation ajustée occupancy", "Filtration + humidité"]
              },
              {
                title: "Réduction Bruit",
                benefits: ["Gestion sonore par zone", "Fermeture auto lors non-usage", "Isolation acoustique optimale"]
              }
            ].map((item) => (
              <div key={item.title} className="bg-card p-8 rounded-lg border border-foreground/10">
                <h3 className="font-black uppercase text-white text-sm mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.benefits.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-foreground/70">
                      <Zap size={14} className="text-[#efd555] flex-shrink-0 mt-0.5" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="py-24 lg:py-32 bg-[#f5f5f5]" aria-labelledby="certifications-heading">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-2 h-2 bg-black" aria-hidden="true" />
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "12px", lineHeight: "18px", color: "#000000", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Labels Reconnus
              </p>
              <div className="w-2 h-2 bg-black" aria-hidden="true" />
            </div>
            <h2
              id="certifications-heading"
              className="font-black uppercase leading-tight text-balance"
              style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", letterSpacing: "-0.02em", color: "#000000" }}
            >
              Certifications<br />
              <span className="italic text-black/50">premium.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {certifications.map((cert) => (
              <div key={cert.label} className="bg-white p-8 rounded-lg border border-black/5 text-center">
                <p className="font-black uppercase text-2xl text-[#efd555] mb-3">{cert.label}</p>
                <p className="text-sm text-black/70">{cert.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-lg text-center border border-black/5">
            <p className="text-sm text-black/70 leading-relaxed max-w-2xl mx-auto">
              Certifications facilitent financement ESG, attractivité auprès tenants premium, différenciation marché immobilier. ROI démontré = premium annuel de 8-12% sur loyers.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-20 lg:py-28 bg-white" aria-label="Appel à l'action final">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <h2
            className="font-black uppercase leading-tight text-balance mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", letterSpacing: "-0.03em", color: "#000000" }}
          >
            Transformez votre<br />
            <span className="italic text-black/50">immeuble bureaux.</span>
          </h2>
          
          <p className="text-base lg:text-lg text-black/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Audit énergétique gratuit. Recommandations ROI. Plan de déploiement multi-phases. Parlons de votre bâtiment.
          </p>

          <Link 
            href="/contact"
            className="focus-ring inline-flex items-center justify-between bg-black hover:bg-gray-900 text-white px-10 py-4 rounded-full text-sm lg:text-base font-semibold transition-all duration-300 hover:shadow-2xl group"
          >
            Consultation Gratuite
            <div className="ml-4 w-10 h-10 bg-[#efd555] rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
              <ArrowRight size={16} className="text-black" aria-hidden="true" />
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Bureaux & Tertiaire — Domotique Confort | Domotus Maroc",
  description:
    "Bureaux intelligents : gestion énergétique, confort collaborateurs, productivité. KNX certifié, BMS au Maroc.",
  alternates: { canonical: "https://www.domotus.ma/bureaux" },
  openGraph: {
    title: "Bureaux Intelligents — Domotique KNX | Domotus",
    description: "Gestion énergétique. Confort collaborateurs. Productivité accrue.",
    url: "https://www.domotus.ma/bureaux",
    images: [
      {
        url: "https://www.domotus.ma/images/immeuble-tertiaire.webp",
        width: 1200,
        height: 630,
        alt: "Bureaux intelligents domotique",
      },
    ],
  },
};

export default function BureauxPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* ── HERO ── */}
      <section className="py-32 lg:py-40" aria-labelledby="hero-heading">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <p className="text-[12px] uppercase tracking-[0.3em] text-primary font-medium mb-8">
            Immeubles de bureaux, espaces tertiaires
          </p>
          <h1
            id="hero-heading"
            className="font-black uppercase leading-none text-foreground text-balance mb-8"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", letterSpacing: "-0.03em" }}
          >
            Des bureaux intelligents<br />
            <span className="italic text-foreground/50">pour des collaborateurs productifs.</span>
          </h1>
          <p className="text-[16px] text-foreground/65 leading-relaxed max-w-2xl mb-12">
            Domotus optimise les immeubles de bureaux et espaces tertiaires au Maroc. Gestion énergétique en temps réel, confort thermique et lumineux, productivité accrue. Building Management System intégré.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-primary/85 transition-all duration-300" style={{ color: "#0a0a0a" }}>
              Consulter nos solutions <ArrowRight size={13} aria-hidden="true" />
            </Link>
            <Link href="/division-projets" className="inline-flex items-center gap-3 border border-white/25 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-foreground/70 hover:border-primary hover:text-primary transition-all duration-300">
              Division Projets <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── LES ENJEUX ── */}
      <section className="py-28 lg:py-36 bg-card" aria-labelledby="enjeux-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <SectionLabel>Vos priorités</SectionLabel>
            <h2
              id="enjeux-heading"
              className="font-black uppercase leading-none text-foreground text-balance"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}
            >
              L'immobilier tertiaire<br />
              <span className="italic text-foreground/45">a besoin d'intelligence.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Réduction Énergétique", desc: "HVAC, éclairage, appareils bureautiques. Jusqu'à 30% de réduction sur les charges d'exploitation par l'optimisation intelligente." },
              { title: "Confort Collaborateurs", desc: "Température, qualité de l'air, éclairage naturel optimisé. Les collaborateurs productifs sont des collaborateurs confortables." },
              { title: "Flexibilité des Espaces", desc: "Open-space, salles de réunion, bureaux privés. Scénarios d'ambiance adaptés à chaque espace et moment de la journée." },
              { title: "Reporting & Conformité", desc: "Dashboard BMS temps réel, alertes maintenance, certification environnementale. Vos locataires et investisseurs satisfaits." },
            ].map((item) => (
              <div key={item.title} className="bg-background p-8 rounded">
                <h3 className="font-black uppercase text-foreground text-[13px] mb-3">{item.title}</h3>
                <p className="text-foreground/60 text-[14px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACTS MESURABLES ── */}
      <section className="py-28 lg:py-36 bg-background" aria-labelledby="impacts-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <SectionLabel>Résultats certifiés</SectionLabel>
            <h2
              id="impacts-heading"
              className="font-black uppercase leading-none text-foreground text-balance"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}
            >
              Les chiffres de nos<br />
              <span className="italic text-foreground/45">installations.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "−30%", stat: "Réduction consommation énergétique" },
              { label: "+18%", stat: "Augmentation satisfaction collaborateurs" },
              { label: "−35%", stat: "Moins d'appels maintenance" },
            ].map((item) => (
              <div key={item.label} className="bg-card p-8 rounded text-center">
                <div className="text-[3rem] font-black text-primary/20 mb-2">{item.label}</div>
                <p className="text-foreground/60 text-[14px]">{item.stat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOTRE APPROCHE ── */}
      <section className="py-28 lg:py-36 bg-card" aria-labelledby="approche-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <SectionLabel>Domotus pour vous</SectionLabel>
            <h2
              id="approche-heading"
              className="font-black uppercase leading-none text-foreground text-balance"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}
            >
              Expertise complète<br />
              <span className="italic text-foreground/45">BMS tertiaire.</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              { title: "BMS Intégré", desc: "Gestion centralisée de tous les systèmes : chauffage, ventilation, éclairage, sécurité. Dashboard en temps réel, alertes préventives." },
              { title: "Optimisation Énergétique", desc: "Occupancy-based controls, daylight harvesting, ventilation intelligente. ROI garanti en 3-4 ans." },
              { title: "Support Opérationnel", desc: "Équipe dédiée pour la maintenance préventive. Intervention rapide en cas d'anomalie. Votre immeuble fonctionne sans interruption." },
              { title: "Certification Environnementale", desc: "Compatible HQE, BREEAM, LEED. Facilite l'accès au financement vert et attire les locataires responsables." },
            ].map((item) => (
              <div key={item.title} className="bg-background p-8 rounded">
                <h3 className="font-black uppercase text-foreground text-[13px] mb-3">{item.title}</h3>
                <p className="text-foreground/60 text-[14px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-28 bg-background text-center" aria-label="Appel à l'action final">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <h2
            className="font-black uppercase leading-none text-foreground text-balance mb-10"
            style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", letterSpacing: "-0.03em" }}
          >
            Optimisez votre<br />
            <span className="italic text-foreground/50">immobilier tertiaire.</span>
          </h2>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-primary px-10 py-5 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-primary/85 transition-all duration-300" style={{ color: "#0a0a0a" }}>
            Prendre rendez-vous <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
