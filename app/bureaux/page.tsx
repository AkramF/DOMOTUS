import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Activity } from "lucide-react";

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

      {/* ── HERO IMAGE ── */}
      <section className="py-0 bg-background" aria-label="Smart office workspace showcase">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 mb-24">
          <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden">
            <Image 
              src="/images/bureaux-smart-office.jpg"
              alt="Espace de travail moderne avec ambiance intelligente et confort collaborateurs"
              fill
              className="object-cover"
              priority
            />
          </div>
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
                      <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0 bg-black" />
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
                      <Activity size={14} className="text-white flex-shrink-0 mt-0.5" aria-hidden="true" />
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
