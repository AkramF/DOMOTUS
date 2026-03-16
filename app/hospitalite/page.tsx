import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users, BarChart3 } from "lucide-react";

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
    icon: "📊",
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
    icon: "💡",
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
    icon: "🎯",
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
    icon: "🔐",
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
      {/* ── HERO ── */}
      <section className="py-32 lg:py-48 bg-background" aria-labelledby="hero-heading">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-3 bg-[#efd555]" aria-hidden="true" />
            <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "13px", lineHeight: "18px", color: "#efd555", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Pour Hospitalité & Retail
            </p>
          </div>
          <h1
            id="hero-heading"
            className="font-black uppercase leading-none text-balance mb-8"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5rem)", letterSpacing: "-0.03em", color: "#ffffff" }}
          >
            Excellence<br />
            <span className="italic" style={{ color: "#efd555" }}>opérationnelle.</span>
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mb-8">
            Expérience client irréprochabl + optimisation espace + efficacité énergétique. Hôtels 4-5*, commerces premium, spas : solutions qui augmentent revenus et réduisent charges de 35%.
          </p>
          <p className="text-base text-foreground/60 leading-relaxed max-w-3xl mb-12">
            Compteurs de flux. Ambiance adaptative. Monitoring maintenance. Visiophonie intégrée. Analytics decisionnels.
          </p>
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
                <p className="text-3xl mb-4">{sol.icon}</p>
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

export const metadata: Metadata = {
  title: "Hospitalité & Retail — Domotique KNX | Domotus",
  description:
    "Hospitalité & retail intelligente : gestion espaces, confort client, efficience énergétique. GRMS, KNX certifié au Maroc.",
  alternates: { canonical: "https://www.domotus.ma/hospitalite" },
  openGraph: {
    title: "Hospitalité & Retail — Domotique Intelligente | Domotus",
    description: "Satisfaction client. Efficience opérationnelle. Gestion centralisée.",
    url: "https://www.domotus.ma/hospitalite",
    images: [
      {
        url: "https://www.domotus.ma/images/og-domotus.jpg",
        width: 1200,
        height: 630,
        alt: "Hospitalité & Retail domotique",
      },
    ],
  },
};

export default function HospitalitePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* ── HERO ── */}
      <section className="py-32 lg:py-40" aria-labelledby="hero-heading">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <p className="text-[12px] uppercase tracking-[0.3em] text-primary font-medium mb-8">
            Hôtellerie, spas, établissements de santé & commerce
          </p>
          <h1
            id="hero-heading"
            className="font-black uppercase leading-none text-foreground text-balance mb-8"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", letterSpacing: "-0.03em" }}
          >
            Augmentez la satisfaction<br />
            <span className="italic text-foreground/50">réduisez les coûts.</span>
          </h1>
          <p className="text-[16px] text-foreground/65 leading-relaxed max-w-2xl mb-12">
            Domotus transforme les établissements hôteliers, spas, centres de soins et espaces commerciaux en écosystèmes intelligents. Gestion centralisée des espaces, optimisation énergétique, confort premium pour vos clients, engagement digital pour vos visiteurs.
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

      {/* ── PROMESSES CLÉS ── */}
      <section className="py-28 lg:py-36 bg-card" aria-labelledby="promesses-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <SectionLabel>L'avantage compétitif</SectionLabel>
            <h2
              id="promesses-heading"
              className="font-black uppercase leading-none text-foreground text-balance"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}
            >
              Ce que la domotique<br />
              <span className="italic text-foreground/45">apporte à votre établissement.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Confort Client Premium", desc: "Chambre/espace intelligente : éclairage, température, rideaux pilotés depuis l'appli mobile ou la télécommande. Les clients découvrent ce qu'ils attendent. Pour le retail, signalétique dynamique et guidance client." },
              { title: "Réduction Énergétique", desc: "Gestion centralisée du chauffage, ventilation, éclairage, détection présence. Jusqu'à 25% de réduction sur les factures énergétiques. ROI en 3-4 ans." },
              { title: "Opérations Simplifiées", desc: "Gestion chambres (check-in/out automatisé), alertes maintenance, monitoring consommation temps réel. Pour le retail : gestion d'ambiance, promotion digitale. Votre équipe se concentre sur le service client." },
              { title: "Fidélisation Client", desc: "L'expérience smart distingue votre établissement. Les clients reconnaissent et apprécient. Pour le retail, expérience immersive et engagement. Satisfaction & NPS en hausse." },
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
              { label: "25%", stat: "Réduction facture énergétique" },
              { label: "+12%", stat: "Augmentation du NPS client" },
              { label: "40%", stat: "Moins d'appels maintenance" },
            ].map((item) => (
              <div key={item.label} className="bg-card p-8 rounded text-center">
                <div className="text-[3rem] font-black text-primary/20 mb-2">{item.label}</div>
                <p className="text-foreground/60 text-[14px]">{item.stat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOTRE EXPERTISE ── */}
      <section className="py-28 lg:py-36 bg-card" aria-labelledby="expertise-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <SectionLabel>Domotus pour vous</SectionLabel>
            <h2
              id="expertise-heading"
              className="font-black uppercase leading-none text-foreground text-balance"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}
            >
              Ce qui nous rend<br />
              <span className="italic text-foreground/45">indispensables.</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              { title: "GRMS Intégrée", desc: "Gestion complète des chambres : check-in/out auto, préférence client sauvegardée, maintenance programmée, nettoyage coordonné. Pour retail : gestion inventaire et présence client." },
              { title: "Support 24/7", desc: "Équipe technique dédiée. Intervention rapide sur site si besoin. Votre établissement ou commerce ne s'arrête jamais." },
              { title: "Multi-établissements", desc: "Une seule plateforme pour piloter plusieurs hôtels, spas ou points de vente. Benchmark énergétique, management centralisé, reporting cohérent." },
              { title: "Intégration Fluide", desc: "Compatible avec vos systèmes existants (PMS, gestion énergétique, systèmes PoS). Installation sans interruption de service." },
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
            Prêt à transformer<br />
            <span className="italic text-foreground/50">l'expérience client ?</span>
          </h2>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-primary px-10 py-5 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-primary/85 transition-all duration-300" style={{ color: "#0a0a0a" }}>
            Prendre rendez-vous <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
