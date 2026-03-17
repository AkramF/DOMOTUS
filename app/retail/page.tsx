import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BarChart3, Lightbulb, Camera, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions Domotique Retail | Flux Clients & Conversion | Domotus",
  description:
    "Compteur de flux real-time. Heatmaps clients. Ambiance adaptive. Sécurité anti-vol. Augmentez chiffre d'affaires et optimisez espace avec data actionable.",
  keywords: "domotique retail, compteur de flux, smart store Maroc, analytics spatial, augmentation conversion",
  alternates: { canonical: "https://www.domotus.ma/retail" },
  openGraph: {
    title: "Solutions Retail — Conversion & Optimisation d'Espace | Domotus",
    description: "Flux clients + analytics + ambiance adaptive. Augmentez CA et réduisez charges de 25%.",
    url: "https://www.domotus.ma/retail",
  },
};

const retailSolutions = [
  {
    icon: BarChart3,
    title: "Compteur de Flux Real-Time",
    description: "Analyser flux clients par heure/jour/semaine. Heatmaps des zones chaudes vs froides. Identification zones mortes = optimisation store layout.",
    insights: [
      "Comptage entrées/sorties exact",
      "Heatmap parcours clients en live",
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
      "Musique tempo modulé par flux",
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
      "A/B testing ambiance en live",
      "Analytics ROI promotions"
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
  { metric: "+18%", label: "Conversion rate" },
  { metric: "+22%", label: "Client dwell time" },
  { metric: "-25%", label: "Operating costs" },
  { metric: "+32%", label: "Stock visibility" },
];

const useCases = [
  {
    name: "Boutique Mode Paris",
    challenge: "Zones mortes, faible conversion zones 1-2",
    solution: "Compteur flux + heatmap + sinage dynamique",
    result: "Conversion +24%, ventes +18%, layout optimisé"
  },
  {
    name: "Supermarché Casablanca",
    challenge: "Énergie excessive, pas de ciblage promotions",
    solution: "Ambiance adaptive + promotions par zone",
    result: "Énergie -28%, CA +15%, satisfaction client +19%"
  },
  {
    name: "Mall Rabat",
    challenge: "Multi-tenant, pas de vue centralisée",
    solution: "Plateforme tenant analytics partagée",
    result: "Occupancy +22%, ventes communes +12%"
  }
];

export default function RetailPage() {
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
                  Pour Retail
                </p>
              </div>
              <h1
                id="hero-heading"
                className="font-black uppercase leading-none text-balance mb-8"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", color: "#ffffff" }}
              >
                Augmenter<br />
                <span className="italic" style={{ color: "#efd555" }}>avec data.</span>
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                Flux clients en temps réel. Heatmaps zones chaudes/froides. Ambiance adaptive par trafic. Solutions retail qui augmentent conversion de 18% et réduisent charges de 25%.
              </p>
              <p className="text-base text-foreground/60 leading-relaxed mb-12">
                Compteur flux. Analytics spatiaux. Promotions ciblées. Sécurité anti-vol. Dashboard centralisé.
              </p>
              <Link 
                href="/contact"
                className="focus-ring inline-flex items-center justify-between bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg group"
              >
                Analyse Gratuite
                <div className="ml-4 w-10 h-10 bg-black rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                  <ArrowRight size={16} className="text-[#efd555]" aria-hidden="true" />
                </div>
              </Link>
            </div>

            {/* RIGHT: IMAGE */}
            <div className="relative w-full h-80 lg:h-96">
              <Image 
                src="/images/retail-smart-store.jpg"
                alt="Boutique retail moderne avec analytics flux et ambiance intelligente"
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

      {/* ── SOLUTIONS SECTION ── */}
      <section className="py-24 lg:py-32 bg-white" aria-labelledby="solutions-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-black" aria-hidden="true" />
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "12px", lineHeight: "18px", color: "#000000", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Solutions Retail
              </p>
            </div>
            <h2
              id="solutions-heading"
              className="font-black uppercase leading-tight text-balance"
              style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", letterSpacing: "-0.02em", color: "#000000" }}
            >
              Optimiser l'espace<br />
              <span className="italic text-black/50">avec analytics.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {retailSolutions.map((sol) => (
              <div key={sol.title} className="bg-[#f5f5f5] p-8 rounded-lg border border-black/5">
                <sol.icon size={28} className="mb-4 text-black" aria-hidden="true" />
                <h3 className="font-black uppercase text-black text-sm mb-3">{sol.title}</h3>
                <p className="text-xs text-black/70 leading-relaxed mb-6">{sol.description}</p>
                <div className="space-y-1 border-t border-black/10 pt-4">
                  {sol.insights.map((ins) => (
                    <p key={ins} className="text-xs text-black/60">• {ins}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section className="py-24 lg:py-32 bg-background" aria-labelledby="cases-heading">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-3 h-3 bg-[#efd555]" aria-hidden="true" />
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "13px", lineHeight: "18px", color: "#efd555", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Résultats Terrain
              </p>
            </div>
            <h2
              id="cases-heading"
              className="font-black uppercase leading-tight text-balance"
              style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", letterSpacing: "-0.02em", color: "#ffffff" }}
            >
              Transformations<br />
              <span className="italic text-foreground/50">en cours.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((cs) => (
              <div key={cs.name} className="bg-card p-8 rounded-lg border border-foreground/10">
                <h3 className="font-black uppercase text-white text-sm mb-4">{cs.name}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-foreground/60 uppercase">Challenge</p>
                    <p className="text-sm text-foreground/80">{cs.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground/60 uppercase">Solution</p>
                    <p className="text-sm text-foreground/80">{cs.solution}</p>
                  </div>
                  <div className="bg-[#efd555]/10 p-4 rounded">
                    <p className="text-xs font-semibold text-[#efd555] uppercase">Résultat</p>
                    <p className="text-sm font-bold text-white">{cs.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPLEMENTATION ── */}
      <section className="py-24 lg:py-32 bg-white" aria-labelledby="implementation-heading">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-2 h-2 bg-black" aria-hidden="true" />
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "12px", lineHeight: "18px", color: "#000000", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Déploiement
              </p>
              <div className="w-2 h-2 bg-black" aria-hidden="true" />
            </div>
            <h2
              id="implementation-heading"
              className="font-black uppercase leading-tight text-balance"
              style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", letterSpacing: "-0.02em", color: "#000000" }}
            >
              Rapide & sans<br />
              <span className="italic text-black/50">disruption.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1. Audit",
                title: "Analyse Flux",
                desc: "Audit gratuit: flux actuels, zones mortes, optimization potentielle. Recommandations prioritisées par ROI."
              },
              {
                step: "2. Design",
                title: "Plan d'Action",
                desc: "Conception layout optimisé. Dashboard custom. Intégration POS/billetterie existante."
              },
              {
                step: "3. Deploy",
                title: "Go Live",
                desc: "Installation 1-2 jours hors heures ouverture. Zero disruption client. Support 24/7."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#f5f5f5] p-8 rounded-lg border border-black/5">
                <div className="w-10 h-10 rounded-full bg-[#efd555] flex items-center justify-center mb-4">
                  <p className="font-black text-black text-sm">{item.step}</p>
                </div>
                <h3 className="font-black uppercase text-black text-sm mb-3">{item.title}</h3>
                <p className="text-sm text-black/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-20 lg:py-28 bg-background" aria-label="Appel à l'action final">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <h2
            className="font-black uppercase leading-tight text-balance mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", letterSpacing: "-0.03em", color: "#ffffff" }}
          >
            Prêt à augmenter<br />
            <span className="italic text-foreground/50">votre chiffre d'affaires?</span>
          </h2>
          
          <p className="text-base lg:text-lg text-foreground/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Audit gratuit du flux client. Recommandations data-driven. ROI démontré. Démarrage rapide 2-4 semaines.
          </p>

          <Link 
            href="/contact"
            className="focus-ring inline-flex items-center justify-between bg-white hover:bg-gray-100 text-black px-10 py-4 rounded-full text-sm lg:text-base font-semibold transition-all duration-300 hover:shadow-2xl group"
          >
            Demander Audit Gratuit
            <div className="ml-4 w-10 h-10 bg-black rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
              <ArrowRight size={16} className="text-[#efd555]" aria-hidden="true" />
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
