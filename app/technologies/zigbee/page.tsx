export const metadata = {
  title: "Zigbee au Maroc — Protocole Sans Fil pour Maison Connectée | Domotus",
  description: "Zigbee est un protocole mesh sans fil efficace énergiquement pour connecter capteurs et actionneurs. Découvrez Zigbee et Zigbee Alliance 3.0 pour vos installations domotiques au Maroc.",
  alternates: { canonical: "https://www.domotus.ma/technologies/zigbee" },
};

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionLabel from "@/components/ui/section-label";

export default function ZigbeePage() {
  return (
    <>
      <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
        <Image src="/images/tech-zigbee-hero.jpg" alt="Réseau mesh Zigbee sans fil pour domotique" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-background/65" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 40%, transparent 30%, oklch(0 0 0 / 0.45) 100%)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20 pb-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="block w-10 h-px bg-foreground/30" />
            <p className="text-[10px] uppercase tracking-[0.4em] text-foreground/50 font-medium">Protocole Mesh Sans Fil</p>
            <span className="block w-10 h-px bg-foreground/30" />
          </div>

          <h1 className="font-black uppercase leading-[0.88] text-foreground text-center max-w-3xl" style={{ fontSize: "clamp(2.4rem, 7vw, 6rem)", letterSpacing: "-0.02em" }}>
            Zigbee.<br /><span className="italic text-foreground/65">Efficace énergétiquement.</span>
          </h1>

          <p className="mt-8 text-[15px] text-foreground/50 leading-relaxed max-w-2xl">
            Protocole mesh ultra-efficace énergétiquement pour capteurs, lumières intelligentes et équipements sans fil. Portée 100+ m, durée de vie batterie 5-10 ans. Zigbee est le protocole de choix pour la maison connectée légère au Maroc.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="focus-ring inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85" style={{ color: "#0a0a0a" }}>
              Installation Zigbee
              <ArrowRight size={13} />
            </Link>
            <Link href="/expertise/reseaux" className="focus-ring inline-flex items-center gap-3 border border-white/25 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-foreground/70 transition-all duration-300 hover:border-primary hover:text-primary">
              Voir nos projets
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6 text-[11px] uppercase tracking-[0.2em] text-foreground/40">
            <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Batterie 5-10 ans</div>
            <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Portée 100+ m</div>
            <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> 1000+ capteurs</div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <SectionLabel>Caractéristiques</SectionLabel>
          <h2 className="font-black uppercase leading-tight text-foreground text-balance" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
            Pourquoi Zigbee pour la domotique sans fil
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {[
              { title: "Efficacité énergétique extrême", desc: "Capteurs fonctionnent 5-10 ans sur batterie. Idéal pour capteurs de température, portes/fenêtres, occupancy au Maroc où les murs existants limitent le câblage." },
              { title: "Maillage automatique (mesh)", desc: "Chaque nœud Zigbee étend la portée. Bâtis automatiquement des réseaux de 100+ appareils sans router externe." },
              { title: "Standard ouvert & abordable", desc: "Modules Zigbee coûtent 80% moins cher que KNX cablé. Compatible 500+ marques (Aqara, Ubiquiti, Philips, Sonos)." },
              { title: "Sécurité AES-128 intégrée", desc: "Chiffrement industriel, pas d'eavesdropping possible même si les données passent par le Wi-Fi." },
              { title: "Pas d'Hub cloud obligatoire", desc: "Fonctionne 100% local sur réseau privé. Aucun abonnement, aucune dépendance à Internet." },
              { title: "Coexistence Wi-Fi 2.4 GHz", desc: "Zigbee et Wi-Fi partagent la même bande 2.4 GHz sans interférence grâce au CSMA/CA intelligent." },
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

      <section className="py-24 bg-card border-t border-white/8">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <SectionLabel>Applications</SectionLabel>
          <h2 className="font-black uppercase text-foreground" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
            Cas d'usage Zigbee au Maroc
          </h2>

          <div className="mt-12 space-y-8">
            {[
              { title: "Retrofit appartements existants", desc: "Aucun travaux, aucun câblage. Collez capteurs Zigbee Aqara sur murs, contrôlez depuis smartphone. Révolution pour les locataires & anciens immeubles Casablanca." },
              { title: "Éclairage ambiant multi-pièces", desc: "Ampoules Zigbee Philips Hue + commandes murales — chaîne 50+ luminaires, scènes groupées, contrôle par voix en français." },
              { title: "Système d'accès sans cablage", desc: "Serrures Zigbee biométriques + capteurs occupancy. Parfait pour villas avec accès maison de gardien séparé." },
              { title: "Chauffage & climatisation intelligente", desc: "Thermostat Zigbee (Aqara, Sonoff) + vvanne pneumatique. Économies 20% énergie, confort +30%, coût 5x moins qu'une installation KNX." },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-primary pl-6">
                <h3 className="font-bold text-foreground text-lg mb-2">{item.title}</h3>
                <p className="text-foreground/50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-black uppercase text-foreground mb-4" style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", letterSpacing: "-0.02em" }}>
            Déployer Zigbee dans votre maison
          </h2>
          <p className="text-[15px] text-foreground/50 mb-8">Domotus conçoit et installe des réseaux Zigbee hybrides KNX + Zigbee. Retrofit zéro intrusion, coût modéré, ROI rapide.</p>
          <Link href="/contact" className="focus-ring inline-flex items-center gap-3 bg-primary px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85" style={{ color: "#0a0a0a" }}>
            Devis installation Zigbee
            <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </>
  );
}
