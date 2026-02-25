import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Activity } from "lucide-react";
import SectionLabel from "@/components/ui/section-label";

export const metadata: Metadata = {
  title: "Gestion Énergie Intelligente Multi-Protocoles Maroc | Domotus",
  description:
    "Gestion intelligente de l'énergie multi-protocoles pour bâtiments au Maroc. Optimisation automatique, suivi temps réel, conformité LEED/HQE. Économies dès le 1er mois.",
  alternates: { canonical: "https://www.domotus.ma/expertise/energie" },
};

export default function EnergiePage() {
  return (
    <>
      <section className="relative h-screen min-h-[700px] overflow-hidden flex items-center justify-center">
        <Image
          src="/images/expertise-energie-hero.jpg"
          alt="Gestion intelligente de l'énergie dans un bâtiment connecté au Maroc"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/65" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 40%, transparent 30%, oklch(0 0 0 / 0.45) 100%)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <SectionLabel>Expertise Domotus</SectionLabel>
          <h1 className="font-black uppercase leading-tight text-foreground text-balance mt-6" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", letterSpacing: "-0.03em" }}>
            Gestion<br />
            <span className="italic text-foreground/60">Énergie.</span>
          </h1>
          <p className="mt-8 text-[15px] text-foreground/60 leading-relaxed max-w-xl mx-auto">
            Suivi temps réel, optimisation automatique, conformité LEED/HQE. Économies dès le 1er mois, impact environnemental immédiat.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-black uppercase text-foreground text-balance mb-6" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", letterSpacing: "-0.02em" }}>
                Maîtriser votre<br />consommation énergétique
              </h2>
              <p className="text-[14px] text-foreground/60 leading-relaxed mb-6">
                Les bâtiments consomment 30% de l'énergie mondiale et représentent 25% des émissions CO2. La domotique intelligente change cette équation en optimisant chaque kilowatt — chauffage, climatisation, éclairage, appareils intelligents.
              </p>
              <p className="text-[14px] text-foreground/60 leading-relaxed">
                Système BMS (Building Management System) qui apprend vos usages, anticipe les besoins, réduit le gaspillage. Labels HQE, LEED, conformité maroc  assurée. ROI garantis.
              </p>
            </div>
            <div className="aspect-video relative overflow-hidden border border-white/8">
              <Image
                src="/images/expertise-energie.jpg"
                alt="Gestion énergétique domotique"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/40">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <h2 className="font-black uppercase text-foreground text-balance mb-12" style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", letterSpacing: "-0.02em" }}>
            Technologies de gestion énergie
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Compteurs intelligents", desc: "Suivi temps réel de chaque circuit électrique, détection des fuites et anomalies immédiate." },
              { title: "Chauffage / Climatisation automatique", desc: "Thermostat adaptatif, température par zone, scheduling intelligent basé sur occupation." },
              { title: "Solaire + Stockage batterie", desc: "Intégration panneaux solaires, gestion intelligente batterie de stockage, autoconsommation optimale." },
              { title: "Contrôle charge appareils", desc: "Recharge EV, lave-linge, lave-vaisselle décalée aux heures creuses automatiquement." },
              { title: "Alertes & rapports", desc: "Anomalies détectées en temps réel, rapports mensuels, comparaison vs année précédente." },
              { title: "Certification LEED/HQE", desc: "Documentation complète pour certifications durabilité, labels de prestige immobilier augmentant valeur." },
            ].map((item, i) => (
              <div key={i} className="border border-white/8 p-6 flex gap-4">
                <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="font-bold uppercase text-foreground text-sm mb-2">{item.title}</h3>
                  <p className="text-[13px] text-foreground/50">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background border-t border-white/8">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-black uppercase text-foreground mb-6" style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", letterSpacing: "-0.02em" }}>
            Réduisez votre facture électrique
          </h2>
          <p className="text-[14px] text-foreground/60 mb-8">
            Audit énergétique et sans engagement. Nous mesurons votre consommation actuelle et modélisons les économies possibles. Rapport en 48h.
          </p>
          <Link
            href="/contact"
            className="focus-ring inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85"
            style={{ color: "#0a0a0a" }}
          >
            Etude personnalisée
            <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
