import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TrendingUp, Activity, Gauge } from "lucide-react";

export const metadata: Metadata = {
  title: "Smart Building Certification & ROI pour Promoteurs | Domotus",
  description:
    "Certification Smart Building, labels HQE/LEED, efficience énergétique. Valorisez vos programmes +8-15% et accélérez les ventes avec Domotus.",
  keywords: "smart building certification, HQE LEED Maroc, efficacité énergétique immobilier, domotique promotion immobilière",
  alternates: { canonical: "https://www.domotus.ma/promoteurs" },
  openGraph: {
    title: "Smart Building Certification pour Promoteurs — Valorisation +8-15% | Domotus",
    description: "Certifications et efficience énergétique qui accélèrent ventes et justifient prix premium.",
    url: "https://www.domotus.ma/promoteurs",
  },
};

const valuePillars = [
  {
    metric: "+35%",
    title: "Réduction Énergétique",
    description: "Efficacité énergétique avancée vs bâtiments traditionnels. Valorisation certifiée auprès acheteurs et investisseurs.",
  },
  {
    metric: "+15%",
    title: "Prime de Vente",
    description: "Smart Building = prix premium justifié. Buyers haut de gamme acceptent surcoût 8-15% pour qualité et efficience.",
  },
  {
    metric: "-40%",
    title: "Charges Communes",
    description: "Réduction drastique dépenses énergétiques et maintenance. Argument décisif pour copropriétaires.",
  },
  {
    metric: "HQE/LEED",
    title: "Certifications",
    description: "Labels internationaux reconnus. Accès à financements verts, crédibilité marché, attractivité investisseurs ESG.",
  }
];

const solutions = [
  {
    title: "Monitoring Énergétique Transparent",
    description: "Dashboard immobilier temps réel visible par occupants. Graphiques consommation détaillée par lot. Alertes surconsommation automatiques.",
    features: [
      "Sous-compteurs par bâtiment/zone",
      "Analytics hebdo/mensuels partagés",
      "Benchmarking vs programmes similaires",
      "Prédictions AI sur tendances"
    ]
  },
  {
    title: "Gestion Thermique Prédictive",
    description: "IA qui adapte automatiquement régulation. Apprentissage patterns occupants, météo, préférences. Économies sans intervention manuelle.",
    features: [
      "Régulation par zone intelligente",
      "Optimisation automatique pic/creux",
      "Remplacement radiateur classique",
      "Intégration VMC + chauffage"
    ]
  },
  {
    title: "Comptage Énergétique Granulaire",
    description: "Isolation par bâtiment, étage, lot. Identification immédiate des surconsommateurs. Facturation au réel (pas d'estimation).",
    features: [
      "Compteurs communicants",
      "Facturation automatisée",
      "Détection fuites/anomalies",
      "Traçabilité complète consommation"
    ]
  },
  {
    title: "Optimisation Éclairage Urbain",
    description: "Réduction consommation éclairage parties communes. Variabilité selon heure/flux piétons. 60% d'économies sur cette ligne.",
    features: [
      "Capteurs présence + luminosité",
      "Régulation par zone",
      "Programmation intelligente",
      "LED + dimmers intégrés"
    ]
  }
];

const marketingAssets = [
  {
    title: "Certification Smart Building",
    benefit: "Label internationalement reconnu qui justifie prix premium et attire buyers conscients écologie"
  },
  {
    title: "Efficacité Énergétique -35%",
    benefit: "Charges communes réduites. Argument de vente direct auprès copropriétaires et investisseurs institutionnels"
  },
  {
    title: "Dashboard Occupant",
    benefit: "Experience utilisateur premium. Montre en temps réel valeur de la technologie, différencie vs concurrence"
  },
  {
    title: "ROI Transparent",
    benefit: "Calcul exact économies énergétiques annuelles. Payback immédiat communiqué aux acheteurs"
  }
];

export default function PromoteursPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* ── HERO ── */}
      <section className="py-32 lg:py-48 bg-background" aria-labelledby="hero-heading">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-3 bg-[#efd555]" aria-hidden="true" />
            <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "13px", lineHeight: "18px", color: "#efd555", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Pour Promoteurs Immobiliers
            </p>
          </div>
          <h1
            id="hero-heading"
            className="font-black uppercase leading-none text-balance mb-8"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5rem)", letterSpacing: "-0.03em", color: "#ffffff" }}
          >
            Vendre plus,<br />
            <span className="italic" style={{ color: "#efd555" }}>plus cher.</span>
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mb-8">
            Certification Smart Building + efficience énergétique = prix premium justifié et temps de vente réduit. Solutions domotique qui valorisent vos programmes de 8-15% et réduisent charges communes de 40%.
          </p>
          <p className="text-base text-foreground/60 leading-relaxed max-w-3xl mb-12">
            Labels HQE/LEED certifiés. Accès financements verts. Attractivité investisseurs ESG. Dashboard occupant transparent.
          </p>
        </div>
      </section>

      {/* ── HERO IMAGE ── */}
      <section className="py-0 bg-background" aria-label="Smart Building showcase">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 mb-24">
          <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden">
            <Image 
              src="/images/promoteurs-smart-building.jpg"
              alt="Immeuble résidentiel avec certification Smart Building et efficience énergétique"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── VALUE PILLARS ── */}
      <section className="py-24 lg:py-32 bg-[#efd555]" aria-labelledby="pillars-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16 text-center">
            <h2
              id="pillars-heading"
              className="font-black uppercase leading-tight text-balance"
              style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", letterSpacing: "-0.02em", color: "#000000" }}
            >
              Valorisation<br />
              <span className="italic text-black/50">mesurable.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valuePillars.map((pillar) => (
              <div key={pillar.metric} className="bg-white/80 p-8 rounded-lg text-center">
                <p className="font-black text-3xl mb-2" style={{ color: "#efd555" }}>{pillar.metric}</p>
                <h3 className="font-black uppercase text-black text-sm mb-4">{pillar.title}</h3>
                <p className="text-sm text-black/70 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS CIBLÉES ── */}
      <section className="py-24 lg:py-32 bg-white" aria-labelledby="solutions-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-black" aria-hidden="true" />
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "12px", lineHeight: "18px", color: "#000000", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Solutions Énergie
              </p>
            </div>
            <h2
              id="solutions-heading"
              className="font-black uppercase leading-tight text-balance"
              style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", letterSpacing: "-0.02em", color: "#000000" }}
            >
              Efficience<br />
              <span className="italic text-black/50">qui se voit sur la facture.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((sol) => (
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

      {/* ── MARKETING & VENTE ── */}
      <section className="py-24 lg:py-32 bg-background" aria-labelledby="marketing-heading">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-[#efd555]" aria-hidden="true" />
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "13px", lineHeight: "18px", color: "#efd555", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Différenciation Marché
              </p>
            </div>
            <h2
              id="marketing-heading"
              className="font-black uppercase leading-tight text-balance"
              style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", letterSpacing: "-0.02em", color: "#ffffff" }}
            >
              Assets de vente<br />
              <span className="italic text-foreground/50">puissants.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {marketingAssets.map((asset) => (
              <div key={asset.title} className="bg-card p-8 rounded-lg border border-foreground/10 flex gap-4">
                <TrendingUp size={24} className="text-white flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-black uppercase text-white text-sm mb-2">{asset.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{asset.benefit}</p>
                </div>
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
                Labels & Certifications
              </p>
              <div className="w-2 h-2 bg-black" aria-hidden="true" />
            </div>
            <h2
              id="certifications-heading"
              className="font-black uppercase leading-tight text-balance"
              style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", letterSpacing: "-0.02em", color: "#000000" }}
            >
              Crédibilité<br />
              <span className="italic text-black/50">qui ouvre des portes.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { label: "HQE", desc: "Haute Qualité Environnementale. Label français reconnu internationalement." },
              { label: "LEED", desc: "Leadership in Energy and Environmental Design. Standard américain pour durabilité." },
              { label: "BREEAM", desc: "Building Research Establishment Environmental Assessment Method. Certification UK." },
            ].map((cert) => (
              <div key={cert.label} className="bg-white p-8 rounded-lg border border-black/5 text-center">
                <p className="font-black uppercase text-2xl text-[#efd555] mb-3">{cert.label}</p>
                <p className="text-sm text-black/70">{cert.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-lg text-center border border-black/5">
            <p className="text-sm text-black/70 leading-relaxed max-w-2xl mx-auto">
              Toutes certifications incluent accès à financements verts, crédits d'impôt énergie, et attractivité accrue auprès investisseurs ESG. ROI démontré = augmentation valeur programme immobilier.
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
            Valorisez votre programme<br />
            <span className="italic text-black/50">avec Smart Building.</span>
          </h2>
          
          <p className="text-base lg:text-lg text-black/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Étude de faisabilité gratuite. ROI calculator. Certification path clair. Parlons de votre programme immobilier.
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
