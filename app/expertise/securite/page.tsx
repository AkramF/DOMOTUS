import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Shield } from "lucide-react";
import SectionLabel from "@/components/ui/section-label";

export const metadata: Metadata = {
  title: "Sécurité Domotique Multi-Protocoles Maroc | Systèmes Accès & Surveillance | Domotus",
  description:
    "Systèmes de sécurité domotique multi-protocoles (KNX, Crestron) au Maroc. Accès biométrique, vidéosurveillance 4K IA, alarme centralisée. Casablanca, Marrakech.",
  alternates: { canonical: "https://www.domotus.ma/expertise/securite" },
};

export default function SecuritePage() {
  return (
    <>
      <section className="relative h-screen min-h-[700px] overflow-hidden flex items-center justify-center">
        <Image
          src="/images/expertise-securite-hero.jpg"
          alt="Système de sécurité domotique premium pour villa Maroc"
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
            Sécurité<br />
            <span className="italic text-foreground/60">&amp; Accès.</span>
          </h1>
          <p className="mt-8 text-[15px] text-foreground/60 leading-relaxed max-w-xl mx-auto">
            Accès biométrique, vidéosurveillance 4K IA, alarme multi-protocoles centralisée. Protection 24/7, alertes instantanées, intégration totale.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-black uppercase text-foreground text-balance mb-6" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", letterSpacing: "-0.02em" }}>
                Sécurité intelligente<br />intégrée au cœur
              </h2>
              <p className="text-[14px] text-foreground/60 leading-relaxed mb-6">
                Un système de sécurité domotique multi-protocoles est plus qu'une alarme : c'est un gardien invisible qui connaît votre maison mieux que vous. Biométrie, vidéosurveillance 4K avec IA, capteurs environnementaux — tous connectés en temps réel à votre smartphone.
              </p>
              <p className="text-[14px] text-foreground/60 leading-relaxed">
                Alertes instantanées, historique complet des accès, géolocalisation, automation des lumières et portes lors d'une intrusion présumée. Conformité normes marocaines et internationales.
              </p>
            </div>
            <div className="aspect-video relative overflow-hidden border border-white/8">
              <Image
                src="/images/expertise-securite.jpg"
                alt="Installation système de sécurité"
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
            Composants d'un système sécurité domotique
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Accès biométrique", desc: "Empreinte digitale, reconnaissance faciale, badge RFID. Aucune clé, historique complet." },
              { title: "Vidéosurveillance 4K IA", desc: "Caméras intelligentes avec détection intrusion, reconnaissance visage, enregistrement continu ou sur événement." },
              { title: "Alarme KNX centralisée", desc: "Détecteurs de mouvement, capteurs de porte/fenêtre, sirène intérieure/extérieure pilotée automatiquement." },
              { title: "Géofencing intelligent", desc: "Système armé/désarmé automatiquement selon votre présence. Notifications zone de danger." },
              { title: "Intégration éclairage", desc: "Allumage automatique en cas d'intrusion détectée, dissuasion visuelle immédiate." },
              { title: "Rapports & analytics", desc: "Dashboard temps réel, statistiques d'accès, alertes IA sur comportements anormaux." },
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
            Protégez ce qui vous est cher
          </h2>
          <p className="text-[14px] text-foreground/60 mb-8">
            Audit technique. Nos experts évaluent les vulnérabilités et proposent une stratégie défensive adaptée à votre villa ou programme immobilier. Rapport en 48h.
          </p>
          <Link
            href="/contact"
            className="focus-ring inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85"
            style={{ color: "#0a0a0a" }}
          >
            Audit technique
            <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
