import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/section-label";

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

const metiers = [
  { title: "Architectes & Designers", desc: "Une intégration invisible pour une esthétique préservée.", href: "/architectes" },
  { title: "Promoteurs Immobiliers", desc: "Accélérez vos ventes grâce à la labellisation Smart Building.", href: "/promoteurs" },
  { title: "Hôtellerie & Hospitalité", desc: "Optimisez l'expérience client et réduisez les coûts d'exploitation.", href: "/hospitalite" },
  { title: "Bureaux d'Études & Tertiaire", desc: "Une expertise technique pour des bâtiments connectés et conformes.", href: "/bureaux" },
];

const engagements = [
  { title: "Conformité & Protocoles", desc: "Standards ouverts (KNX, BACnet) garantissant l'interopérabilité." },
  { title: "Efficience Énergétique", desc: "Monitoring temps réel pour une réduction drastique des charges." },
  { title: "Accompagnement Complet", desc: "CCTP, carnets de câblage, suivi de chantier, coordination." },
  { title: "Garantie de Livraison", desc: "Respect des plannings et mise en service certifiée." },
];

export default function DivisionProjetsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* ── HERO ── */}
      <section className="py-32 lg:py-40" aria-labelledby="hero-heading">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-3 bg-[#efd555]" aria-hidden="true" />
            <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "14px", lineHeight: "20px", color: "#efd555" }}>
              Solutions domotiques Pro
            </p>
          </div>
          <h1
            id="hero-heading"
            className="font-black uppercase leading-none text-balance mb-8"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", letterSpacing: "-0.03em", color: "#000000" }}
          >
            L&apos;ingénierie domotique<br />
            <span className="italic text-black/50">au service de vos projets.</span>
          </h1>
          <p className="text-[16px] text-foreground/65 leading-relaxed max-w-2xl mb-12">
            Nous accompagnons architectes, promoteurs et maîtres d'ouvrage dans la création de bâtiments intelligents et durables. De la conception à la mise en service, solutions multi-protocoles certifiées (KNX, BACnet, Matter).
          </p>
          
          <p className="text-[14px] text-foreground/60 leading-relaxed max-w-2xl mb-12">
            Fort de 150+ projets réalisés au Maroc, notre Division Projets maîtrise chaque étape de l'intégration domotique : études de faisabilité, conceptions d'architecture, pose de câblage, intégration multi-protocoles, tests certifiés et mise en service garantie. Nos solutions offrent efficience énergétique (-22-35% consommation), supervision BMS avancée et conformité totale aux normes CCTP, HQE et LEED.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="focus-ring inline-flex items-center justify-between bg-white px-8 py-4 rounded-full text-[14px] font-semibold text-black transition-all duration-300 hover:shadow-lg will-change-colors group">
              Consulter nos solutions
              <div className="ml-4 w-10 h-10 bg-black rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                <ArrowRight size={16} className="text-[#efd555]" aria-hidden="true" />
              </div>
            </Link>
            <Link href="/contact" className="focus-ring inline-flex items-center justify-between px-8 py-4 rounded-full text-[14px] font-semibold text-white transition-all duration-300 hover:shadow-lg will-change-colors group" style={{ backgroundColor: "#000000", border: "2px solid #efd555" }}>
              Demander un cahier des charges
              <div className="ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110" style={{ backgroundColor: "#efd555" }}>
                <ArrowRight size={16} className="text-black" aria-hidden="true" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── HUB MÉTIERS — Yellow Background ── */}
      <section className="py-28 lg:py-40" style={{ backgroundColor: "#efd555" }} aria-labelledby="metiers-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-black" aria-hidden="true" />
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "14px", lineHeight: "20px", color: "#000000" }}>
                Vos besoins spécifiques
              </p>
            </div>
            <h2
              id="metiers-heading"
              className="font-black leading-tight text-balance"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", letterSpacing: "-0.03em", color: "#000000" }}
            >
              Quelle que soit votre<br />
              <span className="italic text-black/60">industrie, nous avons la solution.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {metiers.map((m) => (
              <Link 
                key={m.title} 
                href={m.href} 
                className="group bg-black text-white p-8 lg:p-10 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="font-black uppercase text-white text-sm lg:text-base mb-3 tracking-[0.05em]">{m.title}</h3>
                <p className="text-white/80 text-sm lg:text-base leading-relaxed mb-8">{m.desc}</p>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#efd555] group-hover:gap-3 transition-all duration-300">
                  En savoir plus <ArrowRight size={14} aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENTS ── */}
      <section className="py-28 lg:py-36 bg-background" aria-labelledby="engagements-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-foreground" aria-hidden="true" />
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "14px", lineHeight: "20px", color: "#ffffff" }}>
                Nos promesses
              </p>
            </div>
            <h2
              id="engagements-heading"
              className="font-black uppercase leading-none text-foreground text-balance"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}
            >
              Engagements<br />
              <span className="italic text-foreground/45">professionnels.</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {engagements.map((e) => (
              <div key={e.title} className="bg-card p-8 rounded">
                <h3 className="font-black uppercase text-foreground text-[13px] mb-3">{e.title}</h3>
                <p className="text-foreground/60 text-[14px] leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL — Pure White Background ── */}
      <section className="py-32 lg:py-40 bg-white text-center" aria-label="Appel à l'action final">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="mb-12">
            <h2
              className="font-black leading-tight text-balance text-black"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", letterSpacing: "-0.03em", color: "#000000" }}
            >
              Collaborons<br />
              <span className="italic text-black/50">sur votre prochain projet.</span>
            </h2>
          </div>
          
          <p className="text-base lg:text-lg text-black/70 leading-relaxed mb-12 max-w-2xl mx-auto">
            De la conception à la mise en service, notre Division Projets accompagne les leaders de la construction et de l'immobilier dans leurs ambitions domotiques.
          </p>

          <Link 
            href="/contact" 
            className="focus-ring inline-flex items-center justify-between bg-black hover:bg-gray-900 text-white px-10 py-5 rounded-full text-sm lg:text-base font-semibold transition-all duration-300 hover:shadow-2xl group"
          >
            Prendre rendez-vous
            <div className="ml-4 w-11 h-11 bg-[#efd555] rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
              <ArrowRight size={18} className="text-black" aria-hidden="true" />
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
