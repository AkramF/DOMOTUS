import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Wifi } from "lucide-react";
import SectionLabel from "@/components/ui/section-label";

export const metadata: Metadata = {
  title: "Infrastructure Réseaux — Wi-Fi 6E, Fibre | Domotus Maroc",
  description:
    "Réseaux domotique multi-protocoles. Wi-Fi 6E, fibre optique, redondance 99.8%. Supervision 24/7 au Maroc.",
  alternates: { canonical: "https://www.domotus.ma/expertise/reseaux" },
  openGraph: {
    title: "Infrastructure Réseaux — Ubiquiti | Domotus",
    description: "Wi-Fi 6E. Fibre optique. Redondance 99.8%.",
    url: "https://www.domotus.ma/expertise/reseaux",
  },
};

export default function ReseauxPage() {
  return (
    <>
      <section className="relative h-screen min-h-[700px] overflow-hidden flex items-center justify-center">
        <Image
          src="/images/expertise-reseaux-hero.jpg"
          alt="Infrastructure réseau Ubiquiti premium installée par Domotus Maroc"
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
            Réseaux<br />
            <span className="italic text-foreground/60">&amp; Infrastructure.</span>
          </h1>
          <p className="mt-8 text-[15px] text-foreground/60 leading-relaxed max-w-xl mx-auto">
            Infrastructure Ubiquiti élite, Wi-Fi 6E mesh, redondance fibre, zéro coupure. La colonne vertébrale invisible de votre maison connectée.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-black uppercase text-foreground text-balance mb-6" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", letterSpacing: "-0.02em" }}>
                Le fondement de votre<br />maison intelligente
              </h2>
              <p className="text-[14px] text-foreground/60 leading-relaxed mb-6">
                Toute la domotique dépend d'une infrastructure réseau robuste et invisible. Nous installons des réseaux Ubiquiti grade professionnel, conçus pour la redondance absolue et la supervision 24/7.
              </p>
              <p className="text-[14px] text-foreground/60 leading-relaxed">
                Fibre optique décentralisée, points d'accès Wi-Fi 6E mesh, gestion centralisée via UniFi Dream Machine. Zéro interruption de service, migrations transparentes, évolutif illimité.
              </p>
            </div>
            <div className="aspect-video relative overflow-hidden border border-white/8">
              <Image
                src="/images/expertise-reseau.jpg"
                alt="Installation infrastructure réseau"
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
            Composants d'une infrastructure résiliente
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Fibre optique décentralisée", desc: "Backbone en fibre (multi-mode ou monomode), non sujet aux interférences EM, bande passante illimitée." },
              { title: "Wi-Fi 6E mesh", desc: "Couverture 100% sans zones mortes, saut automatique entre points d'accès, latence <5ms." },
              { title: "Accès redondants", desc: "Connexions Internet multiples (ADSL, 4G/5G, fibre), basculement automatique en cas de panne." },
              { title: "Gestion centralisée UniFi", desc: "Tableau de bord unique, configuration une seule fois, mises à jour sans intervention manuelle." },
              { title: "Supervision 24/7", desc: "Alertes instantanées en cas de dégradation réseau, rapports de performances, analytics trafic." },
              { title: "Sécurité réseauavancée", desc: "Firewall Ubiquiti, isolation VLAN multi-protocoles, contrôle accès granulaire, IDS/IPS intégré." },
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
            Une infrastructure indestructible
          </h2>
          <p className="text-[14px] text-foreground/60 mb-8">
            Audit réseau et sans engagement. Nous évaluons votre infrastructure actuelle et proposons une solution Ubiquiti adaptée à votre bâtiment. Rapport en 48h.
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
