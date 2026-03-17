import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Lightbulb, BarChart3, Camera, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions Domotique Hospitalité & Retail | Guest Experience & Analytics | Domotus",
  description:
    "Expérience client irréprochable + compteurs de flux + optimisation d'espace. Solutions retail et hospitalité qui augmentent chiffre d'affaires et réduisent charges d'exploitation.",
  keywords: "domotique hôtel, smart retail, compteur de flux, guest experience, domotique hospitalité Maroc",
  alternates: { canonical: "https://www.domotus.ma/hospitalite" },
  openGraph: {
    title: "Solutions pour Hôtels & Retail — Expérience Client & Efficacité | Domotus",
    description: "Guest experience premium + analytics spatial. Augmentez occupancy et réduisez charges de 35%.",
    url: "https://www.domotus.ma/hospitalite",
  },
};

const hotelSolutions = [
  {
    title: "Ambiance Dynamique par Chambre",
    description: "Scénarisation intelligente : accueil, détente, cinéma, sommeil. Contrôle clima/lumière/son intégré. Guest personnalise via app.",
    features: [
      "Scénarios 1-touch pour guest",
      "Gradation automatique selon heure",
      "Do Not Disturb intelligent",
      "Intégration PMS (Property Management System)"
    ]
  },
  {
    title: "Efficacité Énergétique Occupancy-Aware",
    description: "Capteurs présence qui désactivent automatiquement services lors absence. Économies massives sans sacrifice confort. AI qui prédit checkout.",
    features: [
      "Occupancy detection par pièce",
      "Shut-down automatique absence >10min",
      "Chauffage/climatisation anticipé checkout",
      "Détection ouverture fenêtre/porte"
    ]
  },
  {
    title: "Monitoring Maintenance Prédictive",
    description: "Capteurs d'usure sur équipements critiques. Alertes avant panne. Maintenance programmée vs urgences coûteuses.",
    features: [
      "Monitoring climatisation",
      "Gestion chauffage-eau",
      "État électroménagers suivi",
      "Alertes maintenance programmée"
    ]
  },
  {
    title: "Visiophonie & Sécurité Intégrée",
    description: "Portier vidéo dans chaque chambre. Guest reçoit livraison sans quitter appart. Enregistrement sécurisé cloud.",
    features: [
      "Videophone chambre-entrée",
      "Commande accès à distance",
      "Enregistrement 30j cloud",
      "Intégration alarme intrusion"
    ]
  }
];

const retailSolutions = [
  {
    icon: BarChart3,
    title: "Compteur de Flux Real-Time",
    description: "Analyser flux clients par heure/jour/semaine. Heatmaps des zones chaudes vs froides. Identification zones mortes = optimisation store layout.",
    insights: [
      "Comptage entrées/sorties",
      "Heatmap parcours clients",
      "Peak hours vs off-peak trends",
      "Conversion rate par zone"
    ]
  },
  {
    icon: Lightbulb,
    title: "Ambiance Adaptive par Trafic",
    description: "Éclairage/musique/température s'ajustent selon affluence. Ambiance premium heures de pointe. Économies heures creuses.",
    insights: [
      "Éclairage intense = trafic haut",
      "Musique tempo modulé",
      "Température confort clientèle",
      "Réduction énergie lors fermeture"
    ]
  },
  {
    icon: Camera,
    title: "Targeting Spécialisé & Promotions",
    description: "Affichages digitaux réagissent à flux. Promotions ciblées par zone/heure. Micro-moments de conversion amplifiés.",
    insights: [
      "Signalétique dynamique par flux",
      "Promotions push zone-by-zone",
      "A/B testing ambiance",
      "Analytics promotions ROI"
    ]
  },
  {
    icon: Lock,
    title: "Sécurité & Prévention Perte",
    description: "Caméras intelligentes avec IA anti-vol. Alertes zone sensibles. Gestion accès réserve. Intégration systèmes POS.",
    insights: [
      "Détection comportement suspect",
      "Alertes intrusion après-fermeture",
      "Tracking stock/zone réserve",
      "Intégration caisse + surveillance"
    ]
  }
];

const results = [
  { metric: "+28%", label: "Occupancy hotel" },
  { metric: "+18%", label: "Guest satisfaction score" },
  { metric: "-35%", label: "Charges energy" },
  { metric: "+12%", label: "Retail conversion rate" },
];

export default function HospitalitePage() {
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
                  Pour Hospitalité
                </p>
              </div>
              <h1
                id="hero-heading"
                className="font-black uppercase leading-none text-balance mb-8"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", color: "#ffffff" }}
              >
                Excellence<br />
                <span className="italic" style={{ color: "#efd555" }}>opérationnelle.</span>
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                Expérience client irréprochable + optimisation espace + efficacité énergétique. Hôtels 4-5*, résidences de prestige : solutions qui augmentent occupancy et réduisent charges de 35%.
              </p>
              <p className="text-base text-foreground/60 leading-relaxed mb-12">
                Ambiance dynamique par chambre. Monitoring maintenance prédictive. Visiophonie intégrée. Analytics décisionnels.
              </p>
              <Link 
                href="/contact"
                className="focus-ring inline-flex items-center justify-between bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg group"
              >
                Audit Gratuit
                <div className="ml-4 w-10 h-10 bg-black rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                  <ArrowRight size={16} className="text-[#efd555]" aria-hidden="true" />
                </div>
              </Link>
            </div>

            {/* RIGHT: IMAGE */}
            <div className="relative w-full h-80 lg:h-96">
              <Image 
                src="/images/hospitalite-luxury-hotel.jpg"
                alt="Chambre d'hôtel de luxe avec ambiance intelligente et confort optimal"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="py-16 lg:py-20 bg-[#efd555]" aria-labelledby="results-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 id="results-heading" className="sr-only">Résultats mesurables</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((r) => (
              <div key={r.metric} className="text-center">
                <p className="font-black text-3xl mb-2" style={{ color: "#000000" }}>{r.metric}</p>
                <p className="text-sm font-semibold" style={{ color: "#000000" }}>{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HÔTELLERIE SECTION ── */}
      <section className="py-24 lg:py-32 bg-white" aria-labelledby="hotel-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-black" aria-hidden="true" />
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "12px", lineHeight: "18px", color: "#000000", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Hospitalité Premium
              </p>
            </div>
            <h2
              id="hotel-heading"
              className="font-black uppercase leading-tight text-balance"
              style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", letterSpacing: "-0.02em", color: "#000000" }}
            >
              Expérience client<br />
              <span className="italic text-black/50">sans compromis.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {hotelSolutions.map((sol) => (
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

      {/* ── RETAIL SECTION ── */}
      <section className="py-24 lg:py-32 bg-background" aria-labelledby="retail-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-[#efd555]" aria-hidden="true" />
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "13px", lineHeight: "18px", color: "#efd555", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Retail de Masse
              </p>
            </div>
            <h2
              id="retail-heading"
              className="font-black uppercase leading-tight text-balance"
              style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", letterSpacing: "-0.02em", color: "#ffffff" }}
            >
              Augmenter chiffre<br />
              <span className="italic text-foreground/50">avec data.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {retailSolutions.map((sol) => (
              <div key={sol.title} className="bg-card p-8 rounded-lg border border-foreground/10">
                <sol.icon size={28} className="mb-4 text-white" aria-hidden="true" />
                <h3 className="font-black uppercase text-white text-sm mb-3">{sol.title}</h3>
                <p className="text-xs text-foreground/70 leading-relaxed mb-6">{sol.description}</p>
                <div className="space-y-1 border-t border-foreground/10 pt-4">
                  {sol.insights.map((ins) => (
                    <p key={ins} className="text-xs text-foreground/60">• {ins}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section className="py-24 lg:py-32 bg-[#f5f5f5]" aria-labelledby="cases-heading">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-2 h-2 bg-black" aria-hidden="true" />
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "12px", lineHeight: "18px", color: "#000000", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Résultats Terrain
              </p>
              <div className="w-2 h-2 bg-black" aria-hidden="true" />
            </div>
            <h2
              id="cases-heading"
              className="font-black uppercase leading-tight text-balance"
              style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", letterSpacing: "-0.02em", color: "#000000" }}
            >
              Transformations<br />
              <span className="italic text-black/50">en cours.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Hôtel 4* Casablanca",
                challenge: "Occupancy stagnant, coûts energy trop élevés",
                solution: "Ambiance adaptive + occupancy-aware HVAC",
                result: "Occupancy +28%, energy -32%"
              },
              {
                name: "Mall Retail Marrakech",
                challenge: "Zones mortes, faible conversion",
                solution: "Compteur flux + ambiance adaptive + targeting",
                result: "Conversion +15%, tenant satisfaction +22%"
              }
            ].map((cs) => (
              <div key={cs.name} className="bg-white p-8 rounded-lg border border-black/5">
                <h3 className="font-black uppercase text-black text-sm mb-4">{cs.name}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-black/60">CHALLENGE</p>
                    <p className="text-sm text-black/80">{cs.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-black/60">SOLUTION</p>
                    <p className="text-sm text-black/80">{cs.solution}</p>
                  </div>
                  <div className="bg-[#efd555]/10 p-4 rounded">
                    <p className="text-xs font-semibold text-[#efd555]">RÉSULTAT</p>
                    <p className="text-sm font-bold text-black">{cs.result}</p>
                  </div>
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
            Optimisez votre espace<br />
            <span className="italic text-black/50">avec data actionable.</span>
          </h2>
          
          <p className="text-base lg:text-lg text-black/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Audit gratuit : flux analysis + energy profiling. Recommandations prioritisées par ROI. Démarrage rapide en 4-8 semaines.
          </p>

          <Link 
            href="/contact"
            className="focus-ring inline-flex items-center justify-between bg-black hover:bg-gray-900 text-white px-10 py-4 rounded-full text-sm lg:text-base font-semibold transition-all duration-300 hover:shadow-2xl group"
          >
            Audit Gratuit
            <div className="ml-4 w-10 h-10 bg-[#efd555] rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
              <ArrowRight size={16} className="text-black" aria-hidden="true" />
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
