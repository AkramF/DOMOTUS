import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Lock, Radio, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Projets Spéciaux — ANPR Parking, Factory 4.0, Environnements Critiques | Domotus",
  description:
    "Gestion parking ANPR. Usines Industry 4.0. Hôpitaux. Musées. Laboratoires. Cybersécurité renforcée. Intégration multi-protocoles. Solutions pour environnements exceptionnels.",
  keywords: "ANPR parking, Factory 4.0, contrôle accès avancé, IoT industriel, domotique critique, cybersécurité",
  alternates: { canonical: "https://www.domotus.ma/projets-speciaux" },
  openGraph: {
    title: "Projets Spéciaux — Solutions Avancées & Exceptionnelles | Domotus",
    description: "ANPR, Factory 4.0, hôpitaux, musées, laboratoires. Expertise pour l'exceptionnel.",
    url: "https://www.domotus.ma/projets-speciaux",
  },
};

const solutions = [
  {
    category: "Gestion de Parking",
    icon: Lock,
    title: "Système ANPR Intégré",
    description: "Reconnaissance automatique plaques (ANPR). Capteurs occupancy. Signalétique dynamique guidage. Dashboard manager temps réel.",
    features: [
      "Reconnaissance plaque entrée/sortie",
      "Occupancy par niveau",
      "Signalétique LED dynamique",
      "Paiement automatisé intégré",
      "Historique accès/statistiques"
    ]
  },
  {
    category: "Industrie 4.0",
    icon: Zap,
    title: "IoT Industriel & Monitoring",
    description: "Capteurs sur machines critiques. Prédiction panne par AI. Maintenance programmée vs urgences. Intégration ERP/MES.",
    features: [
      "Capteurs vibration/température",
      "Prédiction panne via ML",
      "Tracking palettes RFID",
      "Synchronisation chaînes production",
      "Dashboard superviseur temps réel"
    ]
  },
  {
    category: "Environnements Critiques",
    icon: Radio,
    title: "Hôpitaux & Soins",
    description: "Gestion alarmes patient. Accès sécurisé zones stériles. Monitoring conditions critères (température, humidité) blocs stériles.",
    features: [
      "Intégration systèmes appels patient",
      "Accès sécurisé zones sensibles",
      "Monitoring temp/humidité critique",
      "Alertes urgence temps réel",
      "Traçabilité chaîne froide"
    ]
  },
  {
    category: "Culture & Patrimoine",
    icon: Lock,
    title: "Musées & Patrimoine",
    description: "Gestion micro-climat vitrines (lumière, température, humidité). Détection mouvements. Accès sécurisé zones réserve.",
    features: [
      "Micro-climat vitrines optimisé",
      "Détection intrusion + vibration",
      "Gestion accès réserve + inventaire",
      "Monitoring 24/7 pièces précieuses",
      "Intégration alarme silencieuse"
    ]
  }
];

export default function ProjetsSpeciauxPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* ── HERO SPLIT LAYOUT ── */}
      <section className="py-32 lg:py-40 bg-background" aria-labelledby="hero-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* LEFT: TEXT CONTENT */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 bg-[#efd555]" aria-hidden="true" />
                <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "13px", lineHeight: "18px", color: "#efd555", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  Pour Projets Spéciaux
                </p>
              </div>
              <h1
                id="hero-heading"
                className="font-black uppercase leading-none text-balance mb-8"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", color: "#ffffff" }}
              >
                L'exceptionnel<br />
                <span className="italic" style={{ color: "#efd555" }}>maîtrisé.</span>
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                Projets exceptionnels demandent expertise exceptionnelle. ANPR parking, Industry 4.0, hôpitaux, musées, laboratoires : solutions sur-mesure pour environnements critiques.
              </p>
              <p className="text-base text-foreground/60 leading-relaxed mb-12">
                Multi-protocoles avancés. Intégration ERP/MES. Monitoring temps réel. Traçabilité complète. Conformité réglementaire.
              </p>
              <Link 
                href="/contact"
                className="focus-ring inline-flex items-center justify-between bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg group"
              >
                Nous Contacter
                <div className="ml-4 w-10 h-10 bg-black rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                  <ArrowRight size={16} className="text-[#efd555]" aria-hidden="true" />
                </div>
              </Link>
            </div>

            {/* RIGHT: IMAGE */}
            <div className="relative w-full h-80 lg:h-96">
              <Image 
                src="/images/projets-speciaux-factory.jpg"
                alt="Usine Industry 4.0 avec monitoring intelligent et IoT industriel"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS PAR DOMAINE ── */}
      <section className="py-24 lg:py-32 bg-white" aria-labelledby="solutions-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-black" aria-hidden="true" />
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "12px", lineHeight: "18px", color: "#000000", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Spécialisations
              </p>
            </div>
            <h2
              id="solutions-heading"
              className="font-black uppercase leading-tight text-balance"
              style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", letterSpacing: "-0.02em", color: "#000000" }}
            >
              Solutions<br />
              <span className="italic text-black/50">par domaine.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((sol) => (
              <div key={sol.title} className="bg-[#f5f5f5] p-8 rounded-lg border border-black/5">
                <div className="flex items-start gap-4 mb-4">
                  <sol.icon size={28} className="text-black flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "11px", lineHeight: "16px", color: "#000000", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      {sol.category}
                    </p>
                  </div>
                </div>
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

      {/* ── TECHNICAL HIGHLIGHTS ── */}
      <section className="py-24 lg:py-32 bg-background" aria-labelledby="technical-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-[#efd555]" aria-hidden="true" />
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "13px", lineHeight: "18px", color: "#efd555", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Expertise Technique
              </p>
            </div>
            <h2
              id="technical-heading"
              className="font-black uppercase leading-tight text-balance"
              style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", letterSpacing: "-0.02em", color: "#ffffff" }}
            >
              Fondations<br />
              <span className="italic text-foreground/50">robustes.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Intégration Multi-Protocoles Avancée",
                description: "KNX, BACnet, Modbus, OPC-UA, MQTT. Pas d'enfermement technologique. Architecture ouverte et modulaire."
              },
              {
                title: "Cybersécurité Renforcée",
                description: "Isolation réseau. VPN chiffré. Authentification multifacteur. Audit logs complète. Conformité NIST, ISO 27001."
              },
              {
                title: "IA & Machine Learning",
                description: "Prédiction anomalies. Détection patterns suspects. Recommandations maintenance autonomes."
              },
              {
                title: "Supervision Temps Réel",
                description: "Dashboard custom. Alertes intelligentes (pas d'alertes superflues). Intégration ticketing automatique."
              },
              {
                title: "Documentation Complète",
                description: "Schémas techniques détaillés. Carnets d'exploitation. Formation opérateurs. Support hand-over professionnel."
              },
              {
                title: "Redondance & Résilience",
                description: "Systèmes failover automatiques. Pas de single point of failure. Continuité de service garantie."
              }
            ].map((item) => (
              <div key={item.title} className="bg-card p-8 rounded-lg border border-foreground/10">
                <div className="w-10 h-10 rounded-full bg-[#efd555]/10 flex items-center justify-center mb-4">
                  <Zap size={20} className="text-[#efd555]" aria-hidden="true" />
                </div>
                <h3 className="font-black uppercase text-white text-sm mb-3">{item.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
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
            Parlons de votre<br />
            <span className="italic text-black/50">projet d'exception.</span>
          </h2>
          
          <p className="text-base lg:text-lg text-black/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Consultation dédiée avec nos experts spécialisés. Analyse complète de vos besoins. Proposition architecture sur-mesure. Commençons dès maintenant.
          </p>

          <Link 
            href="/contact"
            className="focus-ring inline-flex items-center justify-between bg-black hover:bg-gray-900 text-white px-10 py-4 rounded-full text-sm lg:text-base font-semibold transition-all duration-300 hover:shadow-2xl group"
          >
            Consultation Expertise
            <div className="ml-4 w-10 h-10 bg-[#efd555] rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
              <ArrowRight size={16} className="text-black" aria-hidden="true" />
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
