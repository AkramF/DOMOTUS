import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Division Projets — B2B Smart Building | Domotus Maroc",
  description:
    "Solutions domotique B2B : architectes, promoteurs, hôtellerie, bureaux. KNX, BMS, efficience énergétique. Conformité CCTP.",
  alternates: { canonical: "https://www.domotus.ma/division-projets" },
  openGraph: {
    title: "Division Projets — Smart Building B2B | Domotus",
    description: "Solutions B2B : architectes, promoteurs, hôtels, bureaux.",
    url: "https://www.domotus.ma/division-projets",
    images: [
      {
        url: "https://www.domotus.ma/images/og-domotus.jpg",
        width: 1200,
        height: 630,
        alt: "Division Projets Domotus",
      },
    ],
  },
};

const industries = [
  {
    id: "architectes",
    title: "Architectes & Designers",
    tagline: "L'invisible qui transforme",
    description: "Intégrez l'intelligence domotique sans compromettre l'esthétique. Solutions KNX discrètes et modulaires qui magnifient vos créations architecturales.",
    value: [
      "Intégration invisible et esthétique préservée",
      "Protocoles ouverts (KNX, Matter) compatibles avec tous projets",
      "Accompagnement complet : conception aux détails de câblage",
      "Conformité architecturale et normes de construction"
    ],
    href: "/architectes",
    bgColor: "#ffffff",
    textColor: "#000000",
    accentColor: "#efd555"
  },
  {
    id: "promoteurs",
    title: "Promoteurs Immobiliers",
    tagline: "Vendre plus, plus cher",
    description: "Amplifiez la valeur de vos programmes avec la certification Smart Building. Solutions d'efficience énergétique qui accélèrent les ventes et justifient les prix premium.",
    value: [
      "Certification Smart Building et labels HQE/LEED",
      "Réduction consommation énergétique jusqu'à 35%",
      "Valorisation de 8-15% du prix de vente",
      "Différenciation marché et avantage concurrentiel"
    ],
    href: "/promoteurs",
    bgColor: "#efd555",
    textColor: "#000000",
    accentColor: "#000000"
  },
  {
    id: "hospitalite",
    title: "Hospitalité",
    tagline: "Excellence opérationnelle",
    description: "Transformez l'expérience client et optimisez vos charges. Solutions hôtellerie-grade pour hôtels 4-5*, resorts et résidences de prestige.",
    value: [
      "Expérience client irréprochable et ambiance adaptative",
      "Réduction charges d'exploitation jusqu'à 35%",
      "Gestion intégrée éclairage, climat, sécurité, accès",
      "Dashboard superviseur pour pilotage centralisé"
    ],
    href: "/hospitalite",
    bgColor: "#000000",
    textColor: "#ffffff",
    accentColor: "#efd555"
  },
  {
    id: "retail",
    title: "Retail",
    tagline: "Augmenter avec data",
    description: "Flux clients en temps réel. Heatmaps zones chaudes/froides. Ambiance adaptive par trafic. Solutions retail qui augmentent conversion et réduisent charges.",
    value: [
      "Compteur de flux real-time et heatmaps",
      "Augmentation conversion +18% et CA +15%",
      "Ambiance adaptive selon trafic client",
      "Sécurité anti-vol et gestion des promotions"
    ],
    href: "/retail",
    bgColor: "#ffffff",
    textColor: "#000000",
    accentColor: "#efd555"
  },
  {
    id: "bureaux",
    title: "Bureaux & Tertiaire",
    tagline: "Productivité intelligente",
    description: "Créez des espaces de travail optimisés pour le bien-être et l'efficacité. Solutions BMS enterprise-grade pour immeubles de bureaux, co-working et zones tertiaires.",
    value: [
      "Confort thermique et lumineux personnalisé par zone",
      "Efficacité énergétique avancée avec IA prédictive",
      "Gestion multi-bâtiments depuis plateforme unique",
      "Résilience et conformité normes environnementales"
    ],
    href: "/bureaux",
    bgColor: "#f5f5f5",
    textColor: "#000000",
    accentColor: "#efd555"
  },
  {
    id: "projets-speciaux",
    title: "Projets Spéciaux",
    tagline: "L'exceptionnel maîtrisé",
    description: "Solutions sur-mesure pour environnements critiques. ANPR parking, Industry 4.0, hôpitaux, musées, laboratoires avec cybersécurité renforcée.",
    value: [
      "Multi-protocoles avancés et intégrations complexes",
      "Monitoring temps réel et traçabilité complète",
      "Conformité réglementaire et sécurité critique",
      "Expertise expertise pour projets exceptionnels"
    ],
    href: "/projets-speciaux",
    bgColor: "#000000",
    textColor: "#ffffff",
    accentColor: "#efd555"
  }
];

export default function DivisionProjetsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* ── HERO ── */}
      <section className="py-32 lg:py-48 bg-background" aria-labelledby="hero-heading">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-3 bg-[#efd555]" aria-hidden="true" />
            <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "14px", lineHeight: "20px", color: "#efd555", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Division Projets
            </p>
          </div>
          <h1
            id="hero-heading"
            className="font-black uppercase leading-none text-balance mb-8"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", letterSpacing: "-0.03em", color: "#ffffff" }}
          >
            Domotus,<br />
            <span className="italic" style={{ color: "#efd555" }}>partenaire de votre excellence.</span>
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mb-12" style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)" }}>
            150+ projets réalisés au Maroc. De la conception à la mise en service, nous accompagnons les maîtres d'ouvrage exigeants dans la création d'espaces intelligents, durables et performants. Solutions KNX certifiées, BMS avancé, efficience énergétique et conformité CCTP.
          </p>
        </div>
      </section>

      {/* ── INDUSTRIES SECTIONS ── */}
      {industries.map((industry, idx) => {
        const isEven = idx % 2 === 0;
        
        return (
          <section 
            key={industry.id}
            className="py-24 lg:py-32 transition-colors"
            style={{ backgroundColor: industry.bgColor }}
            aria-labelledby={`${industry.id}-heading`}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? "lg:grid-flow-dense" : ""}`}>
                {/* Content Section */}
                <div className={isEven ? "lg:col-span-1" : "lg:col-span-1 lg:order-last"}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-2" style={{ backgroundColor: industry.accentColor }} aria-hidden="true" />
                    <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "12px", lineHeight: "18px", color: industry.accentColor, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      {industry.id}
                    </p>
                  </div>
                  <h2
                    id={`${industry.id}-heading`}
                    className="font-black uppercase leading-tight text-balance mb-4"
                    style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em", color: industry.textColor }}
                  >
                    {industry.title}
                  </h2>
                  <p className="italic text-lg mb-8" style={{ color: industry.accentColor, fontSize: "clamp(1.1rem, 2vw, 1.375rem)" }}>
                    {industry.tagline}
                  </p>
                  <p className="text-base leading-relaxed mb-10" style={{ color: industry.textColor, opacity: 0.9 }}>
                    {industry.description}
                  </p>
                  
                  <div className="space-y-4 mb-12">
                    {industry.value.map((val) => (
                      <div key={val} className="flex gap-3 items-start">
                        <div className="w-2 h-2 rounded-sm mt-2 flex-shrink-0" style={{ backgroundColor: industry.accentColor }} aria-hidden="true" />
                        <p className="text-sm leading-relaxed" style={{ color: industry.textColor }}>
                          {val}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Link 
                    href={industry.href}
                    className="focus-ring inline-flex items-center justify-between px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg group"
                    style={{ backgroundColor: industry.accentColor, color: industry.bgColor === "#efd555" ? "#000000" : industry.textColor }}
                  >
                    Consulter nos solutions
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>

                {/* Visual Placeholder */}
                <div className={`hidden lg:flex h-96 rounded-2xl p-1 ${isEven ? "lg:col-span-1" : "lg:col-span-1 lg:order-first"}`} style={{ backgroundColor: industry.textColor === "#ffffff" ? "#1a1a1a" : "#f0f0f0" }}>
                  <div className="w-full rounded-xl flex items-center justify-center" style={{ backgroundColor: industry.textColor === "#ffffff" ? "#2a2a2a" : "#ffffff" }}>
                    <p className="text-center text-sm" style={{ color: industry.textColor === "#ffffff" ? "#666" : "#999" }}>
                      {industry.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── PROJETS SPÉCIAUX ── */}
      <section className="py-24 lg:py-32 bg-background" aria-labelledby="special-heading">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-3 h-3 bg-[#efd555]" aria-hidden="true" />
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "14px", lineHeight: "20px", color: "#efd555", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Excellence
              </p>
              <div className="w-3 h-3 bg-[#efd555]" aria-hidden="true" />
            </div>
            <h2
              id="special-heading"
              className="font-black uppercase leading-tight text-balance mb-6"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", letterSpacing: "-0.03em", color: "#ffffff" }}
            >
              Projets Spéciaux
            </h2>
            <p className="italic text-lg mb-8" style={{ color: "#efd555", fontSize: "clamp(1.1rem, 2vw, 1.375rem)" }}>
              Expertise pour l'exception
            </p>
            <p className="text-base leading-relaxed max-w-3xl mx-auto" style={{ color: "#ffffff", opacity: 0.85 }}>
              Solutions sur-mesure pour environnements complexes : musées, hôpitaux, laboratoires, centres de recherche, sites sensibles. Intégration multi-protocoles avancée, cybersécurité renforcée, supervision temps réel et documentation complète.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 lg:p-12 border border-foreground/10 mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Intégration multi-protocoles avancée (KNX, BACnet, Modbus)",
                "Cybersécurité renforcée et isolation réseau",
                "Supervision temps réel et alertes prédictives",
                "Documentation complète et formation opérateur"
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="w-2 h-2 rounded-sm mt-2 flex-shrink-0 bg-[#efd555]" aria-hidden="true" />
                  <p className="text-sm leading-relaxed" style={{ color: "#ffffff" }}>
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/projets-speciaux"
              className="focus-ring inline-flex items-center justify-between bg-[#efd555] hover:bg-[#e8d340] text-black px-10 py-4 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg group"
            >
              Découvrir nos projets spéciaux
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-20 lg:py-28 bg-white" aria-label="Appel à l'action final">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <h2
            className="font-black uppercase leading-tight text-balance mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", color: "#000000" }}
          >
            Donnons vie à votre<br />
            <span className="italic" style={{ color: "#999" }}>projet d'exception.</span>
          </h2>
          
          <p className="text-base lg:text-lg text-black/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Contactez notre équipe dédiée aux solutions professionnelles. Consultation gratuite pour étudier vos besoins spécifiques et proposer des solutions sur-mesure.
          </p>

          <Link 
            href="/contact"
            className="focus-ring inline-flex items-center justify-between bg-black hover:bg-gray-900 text-white px-10 py-4 rounded-full text-sm lg:text-base font-semibold transition-all duration-300 hover:shadow-2xl group"
          >
            Prendre rendez-vous
            <div className="ml-4 w-10 h-10 bg-[#efd555] rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
              <ArrowRight size={16} className="text-black" aria-hidden="true" />
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
