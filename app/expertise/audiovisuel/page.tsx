import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import SectionLabel from "@/components/ui/section-label";

export const metadata: Metadata = {
  title: "Audio Vidéo Home Cinéma — Dolby Atmos | Domotus",
  description:
    "Home cinéma privé : Dolby Atmos, 4K laser, distribution Sonos multi-zone. Villa prestige au Maroc.",
  alternates: { canonical: "https://www.domotus.ma/expertise/audiovisuel" },
  openGraph: {
    title: "Audio Vidéo Home Cinéma — Domotus Maroc",
    description: "Dolby Atmos. 4K laser. Distribution multi-zone Sonos.",
    url: "https://www.domotus.ma/expertise/audiovisuel",
  },
};

export default function AudiovisuelPage() {
  return (
    <>
      <section className="relative h-screen min-h-[700px] overflow-hidden flex items-center justify-center">
        <Image
          src="/images/expertise-av-hero.jpg"
          alt="Home cinema privé Dolby Atmos installé par Domotus au Maroc"
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
            Audio<br />
            <span className="italic text-foreground/60">&amp; Vidéo.</span>
          </h1>
          <p className="mt-8 text-[15px] text-foreground/60 leading-relaxed max-w-xl mx-auto">
            Home cinema privé Dolby Atmos 4K, distribution audio multi-zone Sonos, expérience cinéma chez vous. Contrôle unifié, qualité studio.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-black uppercase text-foreground text-balance mb-6" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", letterSpacing: "-0.02em" }}>
                L'expérience cinéma<br />chez vous
              </h2>
              <p className="text-[14px] text-foreground/60 leading-relaxed mb-6">
                Home cinema Dolby Atmos n'est pas un luxe, c'est une expérience. Ecran laser 4K, surround Dolby Atmos 7.1 ou plus, canapé chauffant, automatisation complète des lumières et rideaux. Votre maison devient un studio privé.
              </p>
              <p className="text-[14px] text-foreground/60 leading-relaxed">
                Distribution audio Sonos dans chaque pièce. Contrôle unifié depuis une télécommande ou smartphone. Synchronisation parfaite entre affichage vidéo et sonorisation, calibrage acoustique professionnel.
              </p>
            </div>
            <div className="aspect-video relative overflow-hidden border border-white/8">
              <Image
                src="/images/expertise-av.jpg"
                alt="Installation home cinema"
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
            Composants d'une salle AV premium
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Projecteur laser 4K", desc: "Luminosité extrême, contraste infini, rendu couleur spectaculaire, 30,000 heures sans maintenance." },
              { title: "Surround Dolby Atmos", desc: "Haut-parleurs plafond, 7.1 ou 9.1 canaux, objets audio en 3D, immersion totale cinéma." },
              { title: "Subwoofer haute-fidélité", desc: "Fréquences ultra-basses contrôlées, intégration seamless, sensation tactile des explosions et musique." },
              { title: "Distribution Sonos", desc: "Musique depuis chaque pièce, synchronisée ou indépendante, contrôle group par zone." },
              { title: "Automatisation complète", desc: "Rideau motorisé, lumières réglables, température, écran cinématique descend du plafond automatiquement." },
              { title: "Calibrage acoustique", desc: "Mesure des fréquences par notre équipe, ajustement temps réel, certification Dolby." },
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
            Vivez vos films comme jamais
          </h2>
          <p className="text-[14px] text-foreground/60 mb-8">
            Consultation technique. Nos experts audio/vidéo visitent votre espace et proposent une configuration optimisée pour vos usages. Rapport en 48h.
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
