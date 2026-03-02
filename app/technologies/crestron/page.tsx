export const metadata = {
  title: "Crestron Maroc — Automatisation Prestige | Domotus",
  description: "Crestron est la plateforme d'automatisation prestige pour villas de luxe et bâtiments tertiaires haut de gamme. Découvrez la solution Crestron DM, Homeworks QSX et contrôle tactile avancé au Maroc.",
  alternates: { canonical: "https://www.domotus.ma/technologies/crestron" },
  openGraph: {
    title: "Crestron — Automatisation Prestige au Maroc",
    description: "Crestron : contrôle AV intégré, écrans tactiles, gestion énergétique. Le standard prestige pour immeubles haut de gamme au Maroc.",
    url: "https://www.domotus.ma/technologies/crestron",
  },
};

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionLabel from "@/components/ui/section-label";

export default function CrestronPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
        <Image src="/images/hero-bg.jpg" alt="Système Crestron de contrôle prestige pour domotique au Maroc" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-background/65" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 40%, transparent 30%, oklch(0 0 0 / 0.45) 100%)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20 pb-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="block w-10 h-px bg-foreground/30" />
            <p className="text-[10px] uppercase tracking-[0.4em] text-foreground/50 font-medium">Automatisation Prestige</p>
            <span className="block w-10 h-px bg-foreground/30" />
          </div>

          <h1 className="font-black uppercase leading-[0.88] text-foreground text-center max-w-3xl" style={{ fontSize: "clamp(2.4rem, 7vw, 6rem)", letterSpacing: "-0.02em" }}>
            Crestron.<br /><span className="italic text-foreground/65">Contrôle intégré.</span>
          </h1>

          <p className="mt-8 text-[15px] text-foreground/50 leading-relaxed max-w-2xl">
            Intégration complète audio-vidéo, lumière et climatisation. Contrôle tactile fluide et interface utilisateur intuitive pour les villas et immeubles prestige au Maroc.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="focus-ring inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85" style={{ color: "#0a0a0a" }}>
              Audit Crestron gratuit
              <ArrowRight size={13} />
            </Link>
            <Link href="/expertise/audiovisuel" className="focus-ring inline-flex items-center gap-3 border border-white/25 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-foreground/70 transition-all duration-300 hover:border-primary hover:text-primary">
              Voir les installations
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6 text-[11px] uppercase tracking-[0.2em] text-foreground/40">
            <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Écrans tactiles premium</div>
            <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> AV + Domotique intégrés</div>
            <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Interface fluide & intuitive</div>
          </div>
        </div>
      </section>

      {/* ── AVANTAGES CRESTRON ── */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <SectionLabel>Avantages Crestron</SectionLabel>
          <h2 className="font-black uppercase leading-tight text-foreground text-balance" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
            Pourquoi Crestron pour les bâtiments prestige
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {[
              { title: "Intégration AV complète", desc: "Audio multi-zone Sonos, vidéo 4K, écrans tactiles — tout piloté depuis une seule interface Crestron Home." },
              { title: "Interface utilisateur intuitive", desc: "Écrans tactiles haut de gamme avec design premium. Contrôle simple même pour utilisateurs non-techniques." },
              { title: "Scalabilité sans limite", desc: "Du contrôle simple d'une chambre à la gestion de complexes multi-sites. Architecture évolutive et modulaire." },
              { title: "Support prestige & SAV réactif", desc: "Assistance 24/7, techniciens certifiés, support vidéo en direct pour les installations critiques." },
              { title: "Compatibilité multi-protocoles", desc: "Fonctionne avec KNX, Z-Wave, Zigbee, Matter pour une intégration flexible du reste de l'écosystème." },
              { title: "ROI immédiat sur confort", desc: "Satisfaction client maximale. Augmente la valorisation immobilière de 10-20% grâce à l'expérience utilisateur premium." },
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
            Crestron au Maroc : applications résidentielles & tertiaires
          </h2>

          <div className="mt-12 space-y-8">
            {[
              { title: "Villas de luxe Anfa & Palmiers", desc: "Crestron Home pour pilotage intégré : lumière Lutron, AV 4K, climatisation. Interface tactile murale pour tous les résidents." },
              { title: "Penthouse résidentiels haut de gamme", desc: "Système prédéfini avec scènes (movie, dîner, repos). Contrôle par téléphone depuis anywhere au Maroc." },
              { title: "Hôtels & resorts de luxe", desc: "Gestion par chambre (température, lumière, AV). Dashboard backend pour manager les coûts énergétiques et confort client." },
              { title: "Espaces de réception prestige", desc: "Crestron pour scènes d'ambiance (réunion, présentation, networking). AV intégré pour événements corporatifs haut de gamme." },
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
            Installer Crestron dans votre projet au Maroc
          </h2>
          <p className="text-[15px] text-foreground/50 mb-8">Domotus est partenaire certifié Crestron. Audit gratuit, devis 24h, installation et support garantis.</p>
          <Link href="/contact" className="focus-ring inline-flex items-center gap-3 bg-primary px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85" style={{ color: "#0a0a0a" }}>
            Demander un audit Crestron
            <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </>
  );
}
