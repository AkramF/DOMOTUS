import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Wifi, Lightbulb, Zap, Plug, RotateCcw } from "lucide-react";

export const metadata: Metadata = {
  title: "Écosystème Domotique Intégré — Un Seul Système | Domotus",
  description:
    "Un système unifié où sécurité, lumière, énergie et mobilité fonctionnent ensemble. Pas d'îlos technologiques. KNX, Crestron, Lutron certifiés.",
  keywords: "écosystème domotique, système intégré, interopérabilité, maison intelligente, Maroc",
  alternates: { canonical: "https://www.domotus.ma/ecosystemes" },
  openGraph: {
    title: "Écosystème Domotique Intégré",
    description: "Un seul système. Pas 6 îlos technologiques.",
    url: "https://www.domotus.ma/ecosystemes",
    type: "website",
    images: [
      {
        url: "https://www.domotus.ma/images/og-ecosystem.jpg",
        width: 1200,
        height: 630,
        alt: "Écosystème Domotus",
      },
    ],
  },
};

const domains = [
  { title: "Sécurité", subtitle: "Protection intégrée", icon: Shield },
  { title: "Connectivité", subtitle: "Backbone du système", icon: Wifi },
  { title: "Lumière", subtitle: "Ambiance intelligente", icon: Lightbulb },
  { title: "Énergie", subtitle: "Optimisation continue", icon: Zap },
  { title: "Mobilité", subtitle: "Recharge intégrée", icon: Plug },
  { title: "Expérience", subtitle: "Interface unifiée", icon: RotateCcw },
];

const scenarios = [
  {
    title: "Absence",
    points: [
      "Sécurité en mode monitoring",
      "Lumière simulée (simulation présence)",
      "Énergie en mode économique",
    ],
  },
  {
    title: "Arrivée",
    points: [
      "Déverrouillage automatique",
      "Lumière de bienvenue",
      "Climat ajusté",
    ],
  },
  {
    title: "Nuit",
    points: [
      "Sécurité renforcée",
      "Éclairage discret",
      "Énergie en veille",
    ],
  },
];

export default function EcosystemesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        <Image 
          src="/images/architects-hero.jpg" 
          alt="Écosystème domotique intelligent" 
          fill 
          priority 
          sizes="100vw" 
          className="object-cover object-center" 
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-6">Architecture Interconnectée</p>
          <h1 
            className="font-black uppercase leading-tight text-foreground text-balance mb-6"
            style={{ fontSize: "clamp(2.5rem, 8vw, 5.5rem)", letterSpacing: "-0.03em" }}
          >
            Un écosystème.<br />
            <span className="italic text-foreground/60 font-light">Un seul système.</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            Pas 6 technologies isolées. Un organisme où chaque domaine dialogue avec les autres.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-3 bg-primary px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] hover:bg-primary/85 transition-all duration-300" 
            style={{ color: "#0a0a0a" }}
          >
            Consulter un expert <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ── PHILOSOPHIE ── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <p className="text-primary text-sm font-bold uppercase tracking-[0.1em] mb-6">Approche</p>
          
          <h2 
            className="font-black uppercase leading-tight text-black text-balance mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", letterSpacing: "-0.02em" }}
          >
            Pas une somme d'équipements.<br />
            <span className="italic font-light">Un système vivant.</span>
          </h2>

          <p className="text-base text-black/70 leading-relaxed">
            Chaque domaine communique avec les autres. Les décisions sont systémiques, pas isolées. Votre maison n'est pas un portefeuille de technologies en silos — c'est un organisme intelligent où chaque composant renforce les autres.
          </p>
        </div>
      </section>

      {/* ── LES 6 DOMAINES ── */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <p className="text-primary text-sm font-bold uppercase tracking-[0.1em] mb-6">Architecture</p>
          <h2 
            className="font-black uppercase leading-tight text-foreground text-balance mb-16"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", letterSpacing: "-0.02em" }}
          >
            Six Domaines Interconnectés
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((domain) => {
              const Icon = domain.icon;
              return (
                <div 
                  key={domain.title}
                  className="bg-card border border-white/8 rounded-lg p-8 hover:border-white/20 transition-all duration-300"
                >
                  <div className="mb-5 p-3 w-fit rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                    <Icon size={28} className="text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground tracking-wide uppercase mb-2">
                    {domain.title}
                  </h3>
                  <p className="text-sm text-foreground/60">
                    {domain.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ORCHESTRATION ── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <p className="text-primary text-sm font-bold uppercase tracking-[0.1em] mb-6">Orchestration</p>
          <h2 
            className="font-black uppercase leading-tight text-black text-balance mb-16"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", letterSpacing: "-0.02em" }}
          >
            L'Écosystème en Action
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {scenarios.map((scenario, idx) => (
              <div key={idx} className="bg-black/2 border border-black/8 rounded-lg p-8">
                <h3 className="font-bold uppercase text-black text-lg tracking-wide mb-6">
                  {scenario.title}
                </h3>
                <ul className="space-y-3">
                  {scenario.points.map((point, pidx) => (
                    <li key={pidx} className="text-sm text-black/70 flex items-start gap-3">
                      <span className="text-primary font-bold mt-0.5 flex-shrink-0">+</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AVANTAGES ── */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <p className="text-primary text-sm font-bold uppercase tracking-[0.1em] mb-6">Avantages</p>
          <h2 
            className="font-black uppercase leading-tight text-foreground text-balance mb-16"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", letterSpacing: "-0.02em" }}
          >
            Pourquoi Domotus
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Pas d'îlos technologiques", desc: "Un seul système unifié." },
              { title: "Interopérabilité native", desc: "KNX, Crestron, Lutron, Matter intégrés." },
              { title: "Modularité évolutive", desc: "Grandissez sans refondre." },
              { title: "Expertise certifiée", desc: "Support 24/7 garanti." },
            ].map((adv, idx) => (
              <div key={idx} className="bg-card border border-white/8 rounded-lg p-8">
                <h3 className="font-bold uppercase text-foreground text-sm tracking-wide mb-2">
                  {adv.title}
                </h3>
                <p className="text-sm text-foreground/60">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FONDATIONS ── */}
      <section className="py-24 lg:py-32 bg-white border-t border-black/5">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <p className="text-primary text-sm font-bold uppercase tracking-[0.1em] mb-6">Fondations</p>
          <h2 
            className="font-black uppercase leading-tight text-black text-balance mb-8"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "-0.02em" }}
          >
            Multi-Protocoles Certifiés
          </h2>
          <p className="text-base text-black/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Pas d'enfermement technologique. L'écosystème repose sur les standards ouverts : KNX, Crestron, Lutron, Matter, Zigbee.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {["KNX", "Crestron", "Lutron", "Matter", "Zigbee"].map((proto) => (
              <span 
                key={proto}
                className="px-4 py-2 bg-black/5 border border-black/10 rounded-full text-sm font-semibold text-black"
              >
                {proto}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-32 lg:py-40 bg-background text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 
            className="font-black uppercase leading-tight text-foreground text-balance mb-8"
            style={{ fontSize: "clamp(2rem, 6vw, 3.8rem)", letterSpacing: "-0.03em" }}
          >
            Concevons ensemble<br />
            <span className="italic text-foreground/50 font-light">votre écosystème.</span>
          </h2>
          <p className="text-base text-foreground/70 leading-relaxed mb-12 max-w-lg mx-auto">
            Découvrez comment les 6 domaines peuvent fonctionner comme un système unifié.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-3 bg-primary px-10 py-4 text-sm font-bold uppercase tracking-[0.15em] hover:bg-primary/85 transition-all duration-300"
            style={{ color: "#0a0a0a" }}
          >
            Démarrer une consultation <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
