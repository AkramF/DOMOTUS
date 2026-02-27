import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/section-label";

export const metadata: Metadata = {
  title: "Notre Vision — L'Intelligence au Service de la Vie | Domotus",
  description: "La vision de Domotus: transformer les espaces de vie en écosystèmes intelligents, accessibles et durables. 10 ans d'expertise au Maroc pour créer l'habitat de demain.",
  alternates: { canonical: "https://www.domotus.ma/vision" },
  openGraph: {
    title: "Notre Vision — L'Intelligence au Service de la Vie | Domotus",
    description: "Découvrez comment Domotus réinvente l'habitat intelligent au Maroc, en mettant la technologie au service du confort et de la durabilité.",
    url: "https://www.domotus.ma/vision",
  },
};

export default function VisionPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* ── HERO ── */}
      <section className="py-28 lg:py-36" aria-labelledby="hero-heading">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div>
            <p className="text-[12px] uppercase tracking-[0.3em] text-primary font-medium mb-8">
              Notre philosophie
            </p>
            <h1
              id="hero-heading"
              className="font-black uppercase leading-none text-foreground text-balance mb-8"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", letterSpacing: "-0.03em" }}
            >
              L'habitat intelligent<br />
              <span className="italic text-foreground/50">c'est vivre intensément.</span>
            </h1>
            <p className="text-[16px] text-foreground/65 leading-relaxed max-w-2xl mb-10">
              Domotus croit que la technologie doit s'effacer pour laisser place à la vie. Depuis 10 ans, nous transformons les maisons et immeubles au Maroc en écosystèmes intelligents où le confort, la sécurité et la durabilité s'éveillent naturellement.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85" style={{ color: "#0a0a0a" }}>
              Discutons de votre projet <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="py-24 lg:py-36 bg-card" aria-labelledby="mission-heading">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="mb-16">
            <SectionLabel>Notre mission</SectionLabel>
            <h2
              id="mission-heading"
              className="font-black uppercase leading-none text-foreground text-balance mb-6"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
            >
              Créer l'invisible<br />
              <span className="italic text-foreground/45">qui change tout.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Anticipation",
                description: "Nos systèmes apprennent vos habitudes et s'adaptent sans que vous ayez à intervenir. La technologie vous comprend.",
              },
              {
                title: "Durabilité",
                description: "Réduire de 22% la consommation énergétique tout en augmentant le confort. L'intelligence au service de la planète.",
              },
              {
                title: "Accessibilité",
                description: "La domotique ne doit pas être compliquée. Chez Domotus, c'est simple, élégant et accessible à tous.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-background p-10 rounded">
                <h3 className="font-black uppercase text-foreground text-[13px] mb-4">{item.title}</h3>
                <p className="text-foreground/60 text-[14px] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALEURS ── */}
      <section className="py-24 lg:py-36 bg-background" aria-labelledby="values-heading">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="mb-16 text-center">
            <SectionLabel>Nos valeurs</SectionLabel>
            <h2
              id="values-heading"
              className="font-black uppercase leading-none text-foreground text-balance"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
            >
              Expertise, Intégrité,<br />
              <span className="italic text-foreground/45">Innovation.</span>
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Expertise Multi-Protocoles",
                description: "Certifiés KNX, Crestron et Lutron, nous intégrons les standards mondiaux pour garantir une infrastructure pérenne et interopérable.",
              },
              {
                title: "Intégrité Technologique",
                description: "Pas de solutions fermées ou gadgets obsolètes. Chez Domotus, chaque installation reste évolutive, maintenable et pertinente dans 20 ans.",
              },
              {
                title: "Innovation Responsable",
                description: "L'innovation n'est pas une fin en soi. Elle doit servir le confort, la sécurité et la durabilité. C'est notre engagement.",
              },
            ].map((value) => (
              <div key={value.title} className="border-l-4 border-primary pl-8 py-4">
                <h3 className="font-black uppercase text-foreground text-[14px] mb-3">{value.title}</h3>
                <p className="text-foreground/60 text-[15px] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACT ── */}
      <section className="py-24 lg:py-36 bg-card" aria-labelledby="impact-heading">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <SectionLabel>Notre impact</SectionLabel>
          <h2
            id="impact-heading"
            className="font-black uppercase leading-none text-foreground text-balance mb-12"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
          >
            10 années de transformation<br />
            <span className="italic text-foreground/45">au Maroc.</span>
          </h2>

          <dl className="grid sm:grid-cols-3 gap-8">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.2em] text-foreground/40 mb-2">Projets Livrés</dt>
              <dd className="font-black text-foreground" style={{ fontSize: "2.8rem" }}>200+</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.2em] text-foreground/40 mb-2">Habitants Satisfaits</dt>
              <dd className="font-black text-foreground" style={{ fontSize: "2.8rem" }}>15K+</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.2em] text-foreground/40 mb-2">Énergie Économisée</dt>
              <dd className="font-black text-foreground" style={{ fontSize: "2.8rem" }}>−22%</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 bg-background text-center">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <h2
            className="font-black uppercase leading-none text-foreground text-balance mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", letterSpacing: "-0.03em" }}
          >
            Faites partie<br />
            <span className="italic text-foreground/50">de cette transformation.</span>
          </h2>
          <p className="text-foreground/60 text-[15px] leading-relaxed mb-10 max-w-xl mx-auto">
            Que ce soit pour votre résidence, votre programme immobilier ou vos espaces professionnels, Domotus est prêt à concrétiser votre vision.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-primary px-10 py-5 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-primary/85 transition-all duration-300" style={{ color: "#0a0a0a" }}>
            Commencer votre projet <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
