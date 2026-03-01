export const metadata = {
  title: "Lutron Maroc — Gradation & Lumière Prestige | Domotus",
  description: "Lutron Homeworks QSX est le standard prestige pour la gradation de lumière et éclairage intelligent. Découvrez les solutions Lutron pour villas et bâtiments haut de gamme au Maroc.",
  alternates: { canonical: "https://www.domotus.ma/technologies/lutron" },
  openGraph: {
    title: "Lutron — Éclairage Prestige au Maroc",
    description: "Lutron : gradation fluide, scènes lumineuses, intégration Apple Home. Le standard prestige pour l'éclairage intelligent au Maroc.",
    url: "https://www.domotus.ma/technologies/lutron",
  },
};

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionLabel from "@/components/ui/section-label";

export default function LutronPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
        <Image src="/images/villa-prestige.jpg" alt="Système Lutron d'éclairage prestige pour domotique au Maroc" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-background/65" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 40%, transparent 30%, oklch(0 0 0 / 0.45) 100%)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20 pb-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="block w-10 h-px bg-foreground/30" />
            <p className="text-[10px] uppercase tracking-[0.4em] text-foreground/50 font-medium">Éclairage & Gradation Prestige</p>
            <span className="block w-10 h-px bg-foreground/30" />
          </div>

          <h1 className="font-black uppercase leading-[0.88] text-foreground text-center max-w-3xl" style={{ fontSize: "clamp(2.4rem, 7vw, 6rem)", letterSpacing: "-0.02em" }}>
            Lutron.<br /><span className="italic text-foreground/65">Lumière intelligente.</span>
          </h1>

          <p className="mt-8 text-[15px] text-foreground/50 leading-relaxed max-w-2xl">
            Gradation fluide sans clignotement, éclairage circadien adapté à votre rythme biologique, intégration native Apple Home & Google. Le standard de l'éclairage prestige au Maroc.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="focus-ring inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85" style={{ color: "#0a0a0a" }}>
              Audit Lutron gratuit
              <ArrowRight size={13} />
            </Link>
            <Link href="/expertise/eclairage" className="focus-ring inline-flex items-center gap-3 border border-white/25 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-foreground/70 transition-all duration-300 hover:border-primary hover:text-primary">
              Voir les installations
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6 text-[11px] uppercase tracking-[0.2em] text-foreground/40">
            <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Gradation 0-100% fluide</div>
            <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Éclairage circadien</div>
            <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Apple Home natif</div>
          </div>
        </div>
      </section>

      {/* ── AVANTAGES LUTRON ── */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <SectionLabel>Avantages Lutron</SectionLabel>
          <h2 className="font-black uppercase leading-tight text-foreground text-balance" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
            Pourquoi Lutron domine le marché premium de l'éclairage
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {[
              { title: "Gradation sans clignotement", desc: "Technologie propriétaire pour une courbe de gradation parfaitement linéaire. Aucune perturbation visuelle, confort maximal." },
              { title: "Éclairage circadien intégré", desc: "Ajuste automatiquement intensité et teinte lumineuse selon rythme naturel. Améliore sommeil, productivité et bien-être." },
              { title: "Apple Home & Google Nest natif", desc: "Compatible nativement sans hub supplémentaire. Contrôle par Siri, routines automatiques, intégration transparente." },
              { title: "Scènes d'ambiance précises", desc: "Définissez teinte (de 2700K blanc chaud à 6500K blanc froid) et intensité simultanément pour each scène." },
              { title: "Efficacité énergétique -20-30%", desc: "Gestion intelligente des luminaires. Économies immédiates sur facture électrique, amortissement rapide." },
              { title: "Design esthétique minimaliste", desc: "Interrupteurs et variateurs discrets. Lutron intègre les espaces, ne les encombre pas — design d'intérieur préservé." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle2 size={20} className="text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-[14px] text-foreground/50">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAS D'USAGE MAROC ── */}
      <section className="py-24 bg-card border-t border-white/8">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <SectionLabel>Maroc</SectionLabel>
          <h2 className="font-black uppercase text-foreground" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
            Lutron au Maroc : applications résidentielles & tertiaires
          </h2>

          <div className="mt-12 space-y-8">
            {[
              { title: "Villas de luxe avec luminaires importés", desc: "Lutron Homeworks QSX compatible tous luminaires haut de gamme. Gradation fluide même sur LED premium, halogène, ou filament." },
              { title: "Appartements de prestige Casablanca", desc: "Éclairage circadien chambre pour sommeil optimisé. Scènes préréglées (cinéma, dîner, travail) — confort maximisé au quotidien." },
              { title: "Bureaux & espaces professionnels", desc: "Éclairage adapté productivité (froid le jour, chaud le soir). Capteurs présence pour économies automatiques — déduction fiscale jusqu'à 15%." },
              { title: "Restaurants & espaces événementiels", desc: "Scènes d'ambiance (petit-déj, lunch, dîner, party). Teinte lumineuse variable pour chaque moment — expérience client premium." },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-primary pl-6">
                <h3 className="font-bold text-foreground text-lg mb-2">{item.title}</h3>
                <p className="text-foreground/50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-black uppercase text-foreground mb-4" style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", letterSpacing: "-0.02em" }}>
            Installer Lutron dans votre projet au Maroc
          </h2>
          <p className="text-[15px] text-foreground/50 mb-8">Domotus est partenaire Lutron certifié. Audit gratuit, devis 24h, installation et support garantis.</p>
          <Link href="/contact" className="focus-ring inline-flex items-center gap-3 bg-primary px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85" style={{ color: "#0a0a0a" }}>
            Demander un audit Lutron
            <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </>
  );
}
