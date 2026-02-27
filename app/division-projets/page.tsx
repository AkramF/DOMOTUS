import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/section-label";

export const metadata: Metadata = {
  title: "Division Projets — Solutions B2B Smart Building pour Professionnels | Domotus",
  description:
    "Domotus Division Projets : solutions domotiques certifiées B2B pour architectes, promoteurs, hôtellerie, bureaux. KNX, BMS, efficience énergétique, conformité CCTP. Smart Building au Maroc.",
  alternates: { canonical: "https://www.domotus.ma/division-projets" },
};

const metiers = [
  { title: "Architectes & Designers", desc: "Une intégration invisible pour une esthétique préservée.", href: "/architectes" },
  { title: "Promoteurs Immobiliers", desc: "Accélérez vos ventes grâce à la labellisation Smart Building.", href: "/promoteurs" },
  { title: "Hôtellerie & Hospitalité", desc: "Optimisez l'expérience client et réduisez les coûts d'exploitation.", href: "/contact" },
  { title: "Bureaux d'Études & Tertiaire", desc: "Une expertise technique pour des bâtiments connectés et conformes.", href: "/contact" },
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
          <p className="text-[12px] uppercase tracking-[0.3em] text-primary font-medium mb-8">
            Solutions domotiques certifiées pour professionnels
          </p>
          <h1
            id="hero-heading"
            className="font-black uppercase leading-none text-foreground text-balance mb-8"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", letterSpacing: "-0.03em" }}
          >
            L&apos;ingénierie domotique<br />
            <span className="italic text-foreground/50">au service de vos projets.</span>
          </h1>
          <p className="text-[16px] text-foreground/65 leading-relaxed max-w-2xl mb-12">
            Nous accompagnons architectes, promoteurs et maîtres d'ouvrage dans la création de bâtiments intelligents et durables. De la conception à la mise en service, solutions multi-protocoles certifiées.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-primary/85 transition-all duration-300" style={{ color: "#0a0a0a" }}>
              Consulter nos solutions <ArrowRight size={13} aria-hidden="true" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-3 border border-white/25 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-foreground/70 hover:border-primary hover:text-primary transition-all duration-300">
              Demander un cahier des charges <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── HUB MÉTIERS ── */}
      <section className="py-28 lg:py-36 bg-card" aria-labelledby="metiers-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <SectionLabel>Vos besoins spécifiques</SectionLabel>
            <h2
              id="metiers-heading"
              className="font-black uppercase leading-none text-foreground text-balance"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}
            >
              Quelle que soit votre industrie,<br />
              <span className="italic text-foreground/45">nous avons la solution.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {metiers.map((m) => (
              <Link key={m.title} href={m.href} className="group bg-background p-8 rounded hover:bg-foreground/5 transition-all duration-300">
                <h3 className="font-black uppercase text-foreground text-[13px] mb-3">{m.title}</h3>
                <p className="text-foreground/60 text-[14px] leading-relaxed mb-6">{m.desc}</p>
                <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-primary group-hover:gap-3 transition-all duration-300">
                  En savoir plus <ArrowRight size={12} aria-hidden="true" />
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
            <SectionLabel>Nos promesses</SectionLabel>
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

      {/* ── CTA FINAL ── */}
      <section className="py-28 bg-background text-center" aria-label="Appel à l'action final">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <h2
            className="font-black uppercase leading-none text-foreground text-balance mb-10"
            style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", letterSpacing: "-0.03em" }}
          >
            Collaborons<br />
            <span className="italic text-foreground/50">sur votre prochain projet.</span>
          </h2>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-primary px-10 py-5 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-primary/85 transition-all duration-300" style={{ color: "#0a0a0a" }}>
            Prendre rendez-vous <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
