import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Lightbulb, Thermometer, Zap, Lock, Eye, Music } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions Domotique pour Architectes & Designers | Domotus",
  description:
    "Intégration domotique discrète sans compromettre l'esthétique. Solutions invisibles, minimalistes et sur-mesure pour vos projets architecturaux exceptionnels au Maroc.",
  keywords: "domotique architectes, intégration domotique discrète, maison intelligente design, automatisation invisible, Maroc",
  alternates: { canonical: "https://www.domotus.ma/architectes" },
  openGraph: {
    title: "Solutions Domotique pour Architectes — Intégration Esthétique | Domotus",
    description: "Domotique invisible qui magnifie vos créations architecturales.",
    url: "https://www.domotus.ma/architectes",
  },
};

const solutions = [
  {
    icon: Lightbulb,
    title: "Éclairage Architectural Intelligent",
    description: "Scénarios d'ambiance programmés intégrés dans les systèmes de contrôle d'éclairage. Dimmers invisibles, capteurs de luminosité discrèts, dimming dynamique selon la lumière naturelle.",
    features: ["Variation fluide 1-100%", "Température de couleur ajustable (2700K-6500K)", "Scénarios mémorisés par zone", "Adaptation lumière naturelle en temps réel"]
  },
  {
    icon: Thermometer,
    title: "Gestion du Climat Invisible",
    description: "Thermostats intelligents design, radiateurs connectés minimalistes. Zoning thermique granulaire sans renoncer à l'esthétique. Régulation autonome basée sur occupation et horaires.",
    features: ["Thermostats sans fil muraux discrets", "Valet de climat par pièce", "Apprentissage des patterns de confort", "Intégration complète au design intérieur"]
  },
  {
    icon: Zap,
    title: "Gestion de l'Énergie Discrète",
    description: "Monitoring consommation énergétique visible via app mobile uniquement. Alertes intelligentes sur surconsommation. Délestage automatique en cas de surcharge.",
    features: ["Compteurs d'énergie cachés", "Dashboard mobile épuré", "Alertes intelligentes", "Optimisation automatique pic/creux"]
  },
  {
    icon: Lock,
    title: "Contrôle d'Accès Architectural",
    description: "Serrures invisibles avec motorisation silencieuse. Accès par code, smartphone ou badge RFID sans rupture visuelle. Gestion des droits d'accès granulaire.",
    features: ["Serrures motorisées design", "Accès smartphone sans clé", "Codes d'accès temporaires", "Journalisation discrète"]
  },
  {
    icon: Eye,
    title: "Sécurité Intégrée au Design",
    description: "Caméras discrètes intégrées en luminaires ou mobilier. Détecteurs de mouvement esthétiques. Enregistrement cloud sécurisé sans boîtier visible.",
    features: ["Caméras cachées en luminaires", "Détecteurs de présence élégants", "Vision nocturne infrarouge", "Stockage cloud chiffré"]
  },
  {
    icon: Music,
    title: "Audio Ambient Distributed",
    description: "Système audio multiroom invisible. Haut-parleurs intégrés en plafonds, mobilier ou murs. Contrôle par zone, synchronisation audio précise.",
    features: ["Haut-parleurs encastrés", "Synchronisation sans latence", "Contrôle par pièce indépendant", "Streaming haute fidélité"]
  }
];

const processSteps = [
  {
    step: 1,
    title: "Audit Architectural",
    description: "Analyse complète des plans, matériaux et vision esthétique. Identification des points d'intégration non-invasifs."
  },
  {
    step: 2,
    title: "Conception Intégrée",
    description: "Schémas détaillés d'intégration invisible. Localisation des gaines, passages discrets, choix des matériaux premium."
  },
  {
    step: 3,
    title: "Documentation CCTP",
    description: "Carnets de câblage détaillés, standards techniques. Compatible avec tous les protocoles ouverts (KNX, Matter, Zigbee)."
  },
  {
    step: 4,
    title: "Coordination de Chantier",
    description: "Présence sur site durant les phases critiques. Liaison avec tous corps de métier. Respect calendrier architectural."
  },
  {
    step: 5,
    title: "Mise en Service Premium",
    description: "Configuration fine des scénarios. Formation occupants. Support technique dédié."
  }
];

const casesStudy = [
  {
    title: "Villa Prestige Marrakech",
    description: "Intégration domotique complète dans projet architectural d'exception. Zoning intelligent thermique/lumineux par pièce sans visible change.",
    result: "100% invisible, 35% gain énergétique"
  },
  {
    title: "Boutique Design Casablanca",
    description: "Ambiance dynamique programmée selon heure et affluence clients. Éclairage architectural magnifiant les créations.",
    result: "Ambiance totalement contrôlée, 0 équipement visible"
  }
];

export default function ArchitectesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* ── HERO ── */}
      <section className="py-32 lg:py-48 bg-background" aria-labelledby="hero-heading">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-3 bg-[#efd555]" aria-hidden="true" />
            <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "13px", lineHeight: "18px", color: "#efd555", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Pour Architectes & Designers
            </p>
          </div>
          <h1
            id="hero-heading"
            className="font-black uppercase leading-none text-balance mb-8"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5rem)", letterSpacing: "-0.03em", color: "#ffffff" }}
          >
            L'invisible<br />
            <span className="italic" style={{ color: "#efd555" }}>qui magnifie.</span>
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mb-8">
            Intégration domotique aux normes architecturales les plus exigeantes. Solutions discrètes qui préservent l'esthétique tout en apportant confort et efficacité énergétique. Aucun compromis sur le design.
          </p>
          <p className="text-base text-foreground/60 leading-relaxed max-w-3xl mb-12">
            Conception invisible. Documentation CCTP intégrée. Coordination complète chantier. Support technique architectural.
          </p>
        </div>
      </section>

      {/* ── HERO IMAGE ── */}
      <section className="py-0 bg-background" aria-label="Architectural integration showcase">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 mb-24">
          <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden">
            <Image 
              src="/images/architectes-design-integration.jpg"
              alt="Intégration domotique discrète dans appartement architectural"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS CORE ── */}
      <section className="py-24 lg:py-32 bg-white" aria-labelledby="solutions-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-black" aria-hidden="true" />
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "12px", lineHeight: "18px", color: "#000000", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Solutions Invisibles
              </p>
            </div>
            <h2
              id="solutions-heading"
              className="font-black uppercase leading-tight text-balance"
              style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", letterSpacing: "-0.02em", color: "#000000" }}
            >
              Domotique<br />
              <span className="italic text-black/50">sans compromis esthétique.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((sol) => (
              <div key={sol.title} className="bg-[#f5f5f5] p-8 rounded-lg border border-black/5 hover:border-[#efd555]/20 transition-colors">
                <sol.icon size={28} className="mb-4 text-black" aria-hidden="true" />
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

      {/* ── PROCESSUS ── */}
      <section className="py-24 lg:py-32 bg-[#efd555]" aria-labelledby="process-heading">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-2 h-2 bg-black" aria-hidden="true" />
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "12px", lineHeight: "18px", color: "#000000", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Approche Dédiée
              </p>
              <div className="w-2 h-2 bg-black" aria-hidden="true" />
            </div>
            <h2
              id="process-heading"
              className="font-black uppercase leading-tight text-balance"
              style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", letterSpacing: "-0.02em", color: "#000000" }}
            >
              Intégration<br />
              <span className="italic text-black/50">de A à Z.</span>
            </h2>
          </div>

          <div className="space-y-6">
            {processSteps.map((step) => (
              <div key={step.step} className="bg-white/80 p-8 rounded-lg flex gap-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                    <p className="font-black text-[#efd555] text-sm">{step.step}</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-black uppercase text-black text-sm mb-2">{step.title}</h3>
                  <p className="text-sm text-black/70">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAS DE PROJETS ── */}
      <section className="py-24 lg:py-32 bg-background" aria-labelledby="cases-heading">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-[#efd555]" aria-hidden="true" />
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "13px", lineHeight: "18px", color: "#efd555", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Références
              </p>
            </div>
            <h2
              id="cases-heading"
              className="font-black uppercase leading-tight text-balance"
              style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", letterSpacing: "-0.02em", color: "#ffffff" }}
            >
              Projets<br />
              <span className="italic text-foreground/50">d'exception.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {casesStudy.map((cs) => (
              <div key={cs.title} className="bg-card p-8 rounded-lg border border-foreground/10">
                <h3 className="font-black uppercase text-white text-sm mb-3">{cs.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed mb-6">{cs.description}</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#efd555]" aria-hidden="true" />
                  <p className="text-xs font-semibold text-[#efd555]">{cs.result}</p>
                </div>
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
            <span className="italic text-black/50">vision architecturale.</span>
          </h2>
          
          <p className="text-base lg:text-lg text-black/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Consultation gratuite avec notre équipe spécialisée architectes. Nous analysons votre projet et proposons une intégration domotique 100% alignée à votre vision esthétique.
          </p>

          <Link 
            href="/contact"
            className="focus-ring inline-flex items-center justify-between bg-black hover:bg-gray-900 text-white px-10 py-4 rounded-full text-sm lg:text-base font-semibold transition-all duration-300 hover:shadow-2xl group"
          >
            Consulter nos experts
            <div className="ml-4 w-10 h-10 bg-[#efd555] rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
              <ArrowRight size={16} className="text-black" aria-hidden="true" />
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
