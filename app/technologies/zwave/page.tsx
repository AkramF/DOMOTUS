export const metadata = {
  title: "Z-Wave Maroc — Protocole Mesh Longue Portée pour Domotique | Domotus",
  description: "Z-Wave est un protocole mesh sans fil 868/908 MHz avec portée 100+ m. Découvrez Z-Wave pour vos installations domotiques au Maroc, alternative robuste à Zigbee et Wi-Fi.",
  alternates: { canonical: "https://www.domotus.ma/technologies/zwave" },
};

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionLabel from "@/components/ui/section-label";

export default function ZWavePage() {
  return (
    <>
      <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
        <Image src="/images/tech-zwave-hero.jpg" alt="Z-Wave — protocole mesh sans fil pour maison connectée" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-background/65" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 40%, transparent 30%, oklch(0 0 0 / 0.45) 100%)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20 pb-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="block w-10 h-px bg-foreground/30" />
            <p className="text-[10px] uppercase tracking-[0.4em] text-foreground/50 font-medium">Protocole 868/908 MHz Mesh</p>
            <span className="block w-10 h-px bg-foreground/30" />
          </div>

          <h1 className="font-black uppercase leading-[0.88] text-foreground text-center max-w-3xl" style={{ fontSize: "clamp(2.4rem, 7vw, 6rem)", letterSpacing: "-0.02em" }}>
            Z-Wave.<br /><span className="italic text-foreground/65">Robustesse & portée.</span>
          </h1>

          <p className="mt-8 text-[15px] text-foreground/50 leading-relaxed max-w-2xl">
            Z-Wave utilise la bande 868 MHz (Europe/Maroc) pour dépasser Zigbee en portée (150+ m) et fiabilité. 200+ marques certifiées. Plus ancien que Zigbee, Z-Wave est le protocole de choix pour les maisons grandes et les zones difficiles.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="focus-ring inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85" style={{ color: "#0a0a0a" }}>
              Installation Z-Wave
              <ArrowRight size={13} />
            </Link>
            <Link href="/expertise/securite" className="focus-ring inline-flex items-center gap-3 border border-white/25 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-foreground/70 transition-all duration-300 hover:border-primary hover:text-primary">
              Voir les projets
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6 text-[11px] uppercase tracking-[0.2em] text-foreground/40">
            <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Portée 150+ m</div>
            <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> 200+ fabricants</div>
            <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> S2 security</div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <SectionLabel>Avantages</SectionLabel>
          <h2 className="font-black uppercase leading-tight text-foreground text-balance" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
            Z-Wave : la robustesse mesh sans fils
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {[
              { title: "Portée ultramaximale 150+ m", desc: "Dépassez les murs épais des medinas et riads Marrakech. Z-Wave traverse 4 murs béton sans perte. Zigbee : 30 m dans les mêmes conditions." },
              { title: "Fréquence 868 MHz (Maroc)", desc: "Z-Wave Européen = 868 MHz, régulée au Maroc. Zéro interférence avec Wi-Fi 2.4 GHz ou Zigbee. Coexistente paisible des protocoles." },
              { title: "Sécurité S2 militaire", desc: "Chiffrement AES-128 + authentification PKI. Plus robuste contre les attaques MITM que Zigbee." },
              { title: "Plus économe qu'avant", desc: "Z-Wave Gen 7 (2022+) réduit la consommation de 30%. Batterie 7-10 ans sur capteurs." },
              { title: "Fiabilité testée depuis 2008", desc: "Z-Wave existe depuis 14 ans. Millions de déploiements mondiaux. Zéro bugs cachés. Plus vieux = plus stable." },
              { title: "Rétrocompatibilité 100%", desc: "Tous les produits Z-Wave depuis 2008 fonctionnent ensemble. Gardez vos appareils pour 15+ ans." },
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
            Z-Wave pour les grandes villas et riads
          </h2>

          <div className="mt-12 space-y-8">
            {[
              { title: "Villas + terrains 5000+ m²", desc: "Portée Z-Wave 150 m absorbe facilement villa + jardin + garage séparé. Zigbee nécessiterait des repeaters. Z-Wave : zéro repeater, déploiement simple." },
              { title: "Riads Marrakech, murs épais", desc: "Murs pierre 50 cm + toits terrasse = cauchemar Wi-Fi/Zigbee. Z-Wave 868 MHz travaille. Murs historiques doivent rester invisibles." },
              { title: "Sécurité riad + gardien séparé", desc: "Serrures Z-Wave biométriques sur portail + capteurs occupancy dans maison = une chaîne unique. Alarme instantanée intrusion." },
              { title: "Chauffage zone multi-pièce", desc: "Thermostats Z-Wave (Danfoss, Philio, Enbez) pour chaque zone. Maillage mesh = chaque zone pilote les autres sans hub central." },
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
            Installer Z-Wave dans votre riad ou villa
          </h2>
          <p className="text-[15px] text-foreground/50 mb-8">Domotus propose l'installation Z-Wave complète pour propriétés {'>'}2000 m². Audit gratuit, conception réseau mesh, installation garantie.</p>
          <Link href="/contact" className="focus-ring inline-flex items-center gap-3 bg-primary px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85" style={{ color: "#0a0a0a" }}>
            Audit Z-Wave gratuit
            <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </>
  );
}
