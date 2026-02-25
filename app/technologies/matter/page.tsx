export const metadata = {
  title: "Matter Protocol — Standard Universel de Maison Connectée | Domotus",
  description: "Matter est le standard ouvert 2024 pour la maison connectée universel. Interopérabilité Apple HomeKit, Google Home, Amazon Alexa, Samsung SmartThings au Maroc. Découvrez Matter pour votre installation domotique.",
  alternates: { canonical: "https://www.domotus.ma/technologies/matter" },
};

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionLabel from "@/components/ui/section-label";

export default function MatterPage() {
  return (
    <>
      <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
        <Image src="/images/tech-matter-hero.jpg" alt="Matter — protocole universel domotique" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-background/65" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 40%, transparent 30%, oklch(0 0 0 / 0.45) 100%)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20 pb-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="block w-10 h-px bg-foreground/30" />
            <p className="text-[10px] uppercase tracking-[0.4em] text-foreground/50 font-medium">Standard Universel 2024+</p>
            <span className="block w-10 h-px bg-foreground/30" />
          </div>

          <h1 className="font-black uppercase leading-[0.88] text-foreground text-center max-w-3xl" style={{ fontSize: "clamp(2.4rem, 7vw, 6rem)", letterSpacing: "-0.02em" }}>
            Matter.<br /><span className="italic text-foreground/65">Interopérabilité universelle.</span>
          </h1>

          <p className="mt-8 text-[15px] text-foreground/50 leading-relaxed max-w-2xl">
            Matter unifie HomeKit, Google Home, Alexa et SmartThings sur un même protocole. Achetez n'importe quel appareil certifié Matter : il marche avec tous vos écosystèmes. La révolution 2024 de la maison connectée au Maroc.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="focus-ring inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85" style={{ color: "#0a0a0a" }}>
              Installation Matter
              <ArrowRight size={13} />
            </Link>
            <Link href="/expertise/audiovisuel" className="focus-ring inline-flex items-center gap-3 border border-white/25 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-foreground/70 transition-all duration-300 hover:border-primary hover:text-primary">
              Voir les cas d'usage
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6 text-[11px] uppercase tracking-[0.2em] text-foreground/40">
            <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Apple + Google + Amazon</div>
            <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> 500+ appareils certifiés</div>
            <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Thread + Wi-Fi + Ethernet</div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <SectionLabel>Matter 2024</SectionLabel>
          <h2 className="font-black uppercase leading-tight text-foreground text-balance" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
            Pourquoi Matter change la domotique
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {[
              { title: "Pas de silos propriétaires", desc: "Fini les écosystèmes fermés. Un appareil Matter marche avec HomeKit, Alexa ET Google Home simultanément." },
              { title: "Interopérabilité garantie", desc: "Tous les appareils Matter sont testés entre eux. Zéro incompatibilité, zéro mauvaises surprises." },
              { title: "Sécurité cryptographique IEC 62368-1", desc: "Certificats X.509, chiffrement end-to-end. Au-delà de Zigbee et Wi-Fi standards." },
              { title: "Thread — réseau mesh ultrafiable", desc: "Réseau auto-cicatrisant, 100+ nœuds, latence <100ms. Meilleur que Zigbee pour les critères industriels." },
              { title: "Compatible avec tous les hubs", desc: "HomePod Mini, Google Nest Hub Max, Amazon Echo Hub, Samsung SmartThings Hub — tous supportent Matter." },
              { title: "Avenir-proof pour 2026+", desc: "Matter devient le standard obligatoire. Les fabriquants abandonnent Zigbee/Z-Wave propriétaires." },
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
          <SectionLabel>Maroc</SectionLabel>
          <h2 className="font-black uppercase text-foreground" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
            Matter pour les expatriés & clients internationaux
          </h2>

          <div className="mt-12 space-y-8">
            {[
              { title: "Maisons pour expatriés basés Casablanca", desc: "Clients qui vivent USA/UK/France puis reviennent au Maroc : Matter est la même plateforme partout. Contrôlez votre villa Marrakech depuis iPhone USA natif." },
              { title: "Intégration multi-résidence facile", desc: "Possédez villa Marrakech + apartement Casablanca + propriété USA ? Matter fonctionne dans tous sur la même app Apple Home, Google Home." },
              { title: "Futur-proof pour immobilier haut de gamme", desc: "Vendre une villa avec Matter = +10% valeur revente vs Zigbee. Trend des investisseurs étrangers 2024+." },
              { title: "Sans fournisseur cloud local", desc: "Matter fonctionne 100% local. Jamais de données envoyées à des serveurs au Maroc. Parfait pour clients sensibles à la confidentialité." },
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
            Passer à Matter dès maintenant
          </h2>
          <p className="text-[15px] text-foreground/50 mb-8">Domotus propose la migration Matter pour les clients Zigbee/Z-Wave. Appareil Matter coûte moins cher : 0 frais supplémentaires, plus de flexibilité, durée de vie 2x plus longue.</p>
          <Link href="/contact" className="focus-ring inline-flex items-center gap-3 bg-primary px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85" style={{ color: "#0a0a0a" }}>
            Audit Matter gratuit
            <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </>
  );
}
