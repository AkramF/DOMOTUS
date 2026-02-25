export const metadata = {
  title: "KNX Maroc — Standard International de Domotique | Domotus",
  description: "KNX est le standard ouvert mondial pour l'automatisation des bâtiments. Découvrez pourquoi KNX est le choix des intégrateurs certifiés au Maroc pour les installations résidentielles et commerciales haut de gamme.",
  alternates: { canonical: "https://www.domotus.ma/technologies/knx" },
  openGraph: {
    title: "KNX — Standard International de Domotique au Maroc",
    description: "KNX : interopérabilité 500+ marques, durée de vie 30+ ans, certification mondiale. Le standard de référence pour les maisons connectées au Maroc.",
    url: "https://www.domotus.ma/technologies/knx",
  },
};

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionLabel from "@/components/ui/section-label";

export default function KNXPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
        <Image src="/images/tech-knx-hero.jpg" alt="Infrastructure KNX professionnelle pour domotique au Maroc" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-background/65" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 40%, transparent 30%, oklch(0 0 0 / 0.45) 100%)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20 pb-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="block w-10 h-px bg-foreground/30" />
            <p className="text-[10px] uppercase tracking-[0.4em] text-foreground/50 font-medium">Standard Mondial de Domotique</p>
            <span className="block w-10 h-px bg-foreground/30" />
          </div>

          <h1 className="font-black uppercase leading-[0.88] text-foreground text-center max-w-3xl" style={{ fontSize: "clamp(2.4rem, 7vw, 6rem)", letterSpacing: "-0.02em" }}>
            KNX.<br /><span className="italic text-foreground/65">Interopérabilité certifiée.</span>
          </h1>

          <p className="mt-8 text-[15px] text-foreground/50 leading-relaxed max-w-2xl">
            Connectez 500+ marques certifiées sur une même infrastructure fiable, sécurisée et évolutive pendant 30+ ans. Le standard de référence des intégrateurs KNX au Maroc.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="focus-ring inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85" style={{ color: "#0a0a0a" }}>
              Audit KNX gratuit
              <ArrowRight size={13} />
            </Link>
            <Link href="/expertise/eclairage" className="focus-ring inline-flex items-center gap-3 border border-white/25 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-foreground/70 transition-all duration-300 hover:border-primary hover:text-primary">
              Voir les installations
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6 text-[11px] uppercase tracking-[0.2em] text-foreground/40">
            <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> 500+ marques certifiées</div>
            <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Standard ISO/IEC 14543-3</div>
            <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Garanti 30+ ans</div>
          </div>
        </div>
      </section>

      {/* ── POURQUOI KNX ── */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <SectionLabel>Avantages KNX</SectionLabel>
          <h2 className="font-black uppercase leading-tight text-foreground text-balance" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
            Pourquoi KNX domine le marché de la domotique premium
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {[
              { title: "Interopérabilité sans limite", desc: "500+ marques certifiées (Philips, Siemens, Legrand, Schneider, Konnekt...) sur une seule plateforme." },
              { title: "Standard ouvert & neutre", desc: "Aucun vendor lock-in. Vous restez propriétaire de votre installation, indépendant des fabricants." },
              { title: "Longévité garantie 30+ ans", desc: "Composants disponibles à la vente pendant 30 ans minimum. Vos murs resteront intelligents pendant décennies." },
              { title: "Sécurité industrielle certifiée", desc: "Chiffrement, authentification, audit trail — normes bancaires. Idéal pour les bâtiments sensibles au Maroc." },
              { title: "Efficacité énergétique prouvée", desc: "Économies de 30-40% sur l'énergie grâce aux scènes automatisées et à la gestion optimisée des équipements." },
              { title: "ROI en 3-5 ans", desc: "Durée de vie 30 ans + économies énergie = rentabilité immédiate et valeur immobilière +15-25%." },
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
            KNX au Maroc : applications résidentielles & tertiaires
          </h2>

          <div className="mt-12 space-y-8">
            {[
              { title: "Villas de luxe Casablanca & Marrakech", desc: "KNX + Lutron pour éclairage, climatisation, sécurité intégrée. Clients internationaux exigent le standard KNX pour la durée de vie de leurs investissements immobiliers." },
              { title: "Immeubles résidentiels haut de gamme", desc: "Domotique commune (ascenseurs, éclairage halls, sécurité) + systèmes privés par appartement. KNX RF (sans fil) réduit les travaux de rénovation." },
              { title: "Bureaux & centres d'affaires", desc: "Gestion énergie (économies 35-40%), accès biométrique, réservation salles intelligentes. Déductions fiscales domotique au Maroc (jusqu'à 15%)." },
              { title: "Hôtels & resorts de prestige", desc: "Gestion multi-sites, contrôle par chambre, économies énergie massives. KNX remboursable en 2 ans via réductions énergétiques." },
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
            Installer KNX dans votre projet au Maroc
          </h2>
          <p className="text-[15px] text-foreground/50 mb-8">Domotus est intégrateur certifié KNX depuis 2020. Audit gratuit, devis en 24h, installation garanti.</p>
          <Link href="/contact" className="focus-ring inline-flex items-center gap-3 bg-primary px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85" style={{ color: "#0a0a0a" }}>
            Demander un audit KNX
            <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </>
  );
}
