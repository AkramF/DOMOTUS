import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import SectionLabel from "@/components/ui/section-label";

export const metadata: Metadata = {
  title: "Hôtellerie & Hospitalité — Domotique KNX | Domotus",
  description:
    "Hôtellerie intelligente : gestion chambres, confort client, efficience énergétique. GRMS, KNX certifié au Maroc.",
  alternates: { canonical: "https://www.domotus.ma/hospitalite" },
  openGraph: {
    title: "Hôtellerie — Domotique Intelligente | Domotus",
    description: "Satisfaction client. Efficience opérationnelle. Gestion GRMS.",
    url: "https://www.domotus.ma/hospitalite",
    images: [
      {
        url: "https://www.domotus.ma/images/og-domotus.jpg",
        width: 1200,
        height: 630,
        alt: "Hôtellerie domotique",
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
            Hôtellerie, spas & établissements de santé
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
            Domotus transforme les établissements hôteliers, spas et centres de soins en écosystèmes intelligents. Gestion centralisée des chambres, optimisation énergétique, confort premium pour vos clients.
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
              { title: "Confort Client Premium", desc: "Chambre intelligente : éclairage, température, rideaux pilotés depuis l'appli mobile ou la télécommande. Les clients découvrent ce qu'ils attendent." },
              { title: "Réduction Énergétique", desc: "Gestion centralisée du chauffage, ventilation, éclairage. Jusqu'à 25% de réduction sur les factures énergétiques. ROI en 3-4 ans." },
              { title: "Opérations Simplifiées", desc: "Gestion chambres (check-in/out automatisé), alertes maintenance, monitoring consommation temps réel. Votre équipe se concentre sur le service client." },
              { title: "Fidélisation Client", desc: "L'expérience smart distinguish votre établissement. Les clients reconnaissent et apprécient. Satisfaction & NPS en hausse." },
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
              { title: "GRMS Intégrée", desc: "Gestion complète des chambres : check-in/out auto, préférence client sauvegardée, maintenance programmée, nettoyage coordonné." },
              { title: "Support 24/7", desc: "Équipe technique dédiée. Intervention rapide sur site si besoin. Votre établissement ne s'arrête jamais." },
              { title: "Multi-établissements", desc: "Une seule plateforme pour piloter plusieurs hôtels ou spas. Benchmark énergétique, management centralisé." },
              { title: "Intégration Fluide", desc: "Compatible avec vos systèmes existants (PMS, gestion énergétique). Installation sans interruption de service." },
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
