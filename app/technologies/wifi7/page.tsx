export const metadata = {
  title: "Wi-Fi 7 Maroc — Réseau Ultra-Haute Performance pour Domotique | Domotus",
  description: "Wi-Fi 7 (802.11be) : 320 Gbps, multi-lien simultané, latence <1ms, 6 GHz + 5 GHz + 2.4 GHz. Infrastructure réseau domotique nouvelle génération au Maroc.",
  alternates: { canonical: "https://www.domotus.ma/technologies/wifi7" },
};

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionLabel from "@/components/ui/section-label";

export default function WiFi7Page() {
  return (
    <>
      <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
        <Image src="/images/tech-wifi7-hero.jpg" alt="Wi-Fi 7 — réseau ultra-haute performance pour domotique" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-background/65" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 40%, transparent 30%, oklch(0 0 0 / 0.45) 100%)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20 pb-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="block w-10 h-px bg-foreground/30" />
            <p className="text-[10px] uppercase tracking-[0.4em] text-foreground/50 font-medium">802.11be — Prochaine génération</p>
            <span className="block w-10 h-px bg-foreground/30" />
          </div>

          <h1 className="font-black uppercase leading-[0.88] text-foreground text-center max-w-3xl" style={{ fontSize: "clamp(2.4rem, 7vw, 6rem)", letterSpacing: "-0.02em" }}>
            Wi-Fi 7.<br /><span className="italic text-foreground/65">Ultra-haute performance.</span>
          </h1>

          <p className="mt-8 text-[15px] text-foreground/50 leading-relaxed max-w-2xl">
            Wi-Fi 7 offre 320 Gbps de débit théorique, multi-lien simultané, et latence {'<'}1ms. La révolution des réseaux domotiques professionnels avec agrégation 6 GHz + 5 GHz + 2.4 GHz.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="focus-ring inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85" style={{ color: "#0a0a0a" }}>
              Installation Wi-Fi 7
              <ArrowRight size={13} />
            </Link>
            <Link href="/expertise/reseaux" className="focus-ring inline-flex items-center gap-3 border border-white/25 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-foreground/70 transition-all duration-300 hover:border-primary hover:text-primary">
              Nos projets réseau
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6 text-[11px] uppercase tracking-[0.2em] text-foreground/40">
            <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> 320 Gbps</div>
            <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Multi-lien</div>
            <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Latence {'<'}1ms</div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <SectionLabel>Caractéristiques</SectionLabel>
          <h2 className="font-black uppercase leading-tight text-foreground text-balance" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
            Wi-Fi 7 : révolution réseau domotique
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {[
              { title: "320 Gbps débit théorique", desc: "33× plus rapide que Wi-Fi 5. Multi-lien agrège 6 GHz + 5 GHz + 2.4 GHz simultanément. Streaming 8K+ sans compression." },
              { title: "Multi-lien simultané (MLO)", desc: "Un appareil peut envoyer et recevoir sur 3 bandes en même temps. Les appareils domotiques critiques ont latence {'<'}1ms garantie." },
              { title: "Latence ultrabassse {'<'}1ms", desc: "Pilotage en temps réel : serrures intelligentes, alarmes critiques, commandes de moteurs. Zéro délai perceptible." },
              { title: "4K QAM + 320 MHz de bande", desc: "Modulation plus efficace + canaux plus larges. Débit garanti même en environnement RF dégradé (immeuble béton Maroc)." },
              { title: "Tri-bande simultanée (6+5+2.4 GHz)", desc: "Appareils legacy 2.4 GHz + Wi-Fi 5 + Wi-Fi 7 coexistent sans interférence. Transition graduelle sans remplacement matériel." },
              { title: "WPA3 renforcé + Sécurité passive", desc: "Chiffrement post-quantique prêt. Protection contre les écoutes futures même avec calcul quantique." },
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
            Wi-Fi 7 pour immeubles & complexes premium au Maroc
          </h2>

          <div className="mt-12 space-y-8">
            {[
              { title: "Vidéosurveillance 8K en temps réel", desc: "8-16 caméras 4K + 4K ultra-haute définition simultanées. Wi-Fi 7 multi-lien agrège bande passante sans perte. NVR sur-the-cloud possible." },
              { title: "Distribution audio multiroom audiophile", desc: "50+ enceintes Sonos/Devialet sans latence. Wi-Fi 7 = synchronisation audio {'<'}1ms entre zones. Fonction cinéma distribué." },
              { title: "VR/AR immersive domotique", desc: "Casques VR wireless (Meta 4 Pro) pour contrôle maison immersif. Latence {'<'}1ms requise. Wi-Fi 7 = technologie possible." },
              { title: "Smart buildings IoT 1000+ capteurs", desc: "Milliers de capteurs domotique : température, humidité, occupancy, CO2. Wi-Fi 7 MLO = tous communiquent sans congestion." },
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
            Déployer Wi-Fi 7 dans votre bâtiment
          </h2>
          <p className="text-[15px] text-foreground/50 mb-8">Domotus conçoit l'infrastructure Wi-Fi 7 complète : AP Ubiquiti U6+ en maillage MLO, chiffrement WPA3+, supervision 24/7. Intégration transparente avec votre domotique KNX/Zigbee existante.</p>
          <Link href="/contact" className="focus-ring inline-flex items-center gap-3 bg-primary px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85" style={{ color: "#0a0a0a" }}>
            Audit Wi-Fi 7 gratuit
            <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </>
  );
}
