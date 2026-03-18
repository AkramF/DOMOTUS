import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Wifi, Lightbulb, Zap, Plug, RotateCcw } from "lucide-react";

export const metadata: Metadata = {
  title: "Écosystème Domotique Intégré — 6 Domaines Interconnectés | Domotus",
  description:
    "Découvrez l'écosystème Domotus : 6 domaines interconnectés (Sécurité, Connectivité, Lumière, Énergie, Mobilité, Expérience) fonctionnant comme un seul système. Pas d'îlos technologiques.",
  keywords: "écosystème domotique, système intégré, interopérabilité, KNX, Crestron, Lutron, maison intelligente Maroc",
  alternates: { canonical: "https://www.domotus.ma/ecosystemes" },
  openGraph: {
    title: "Écosystème Domotique Intégré — 6 Domaines Interconnectés",
    description: "Un seul système. 6 domaines. Zéro fragmentation technologique.",
    url: "https://www.domotus.ma/ecosystemes",
    type: "website",
  },
};

export default function EcosystemesPage() {
  return (
    <>
      {/* SECTION 1: HERO */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/architects-hero.jpg" 
          alt="Écosystème domotique intelligent Domotus" 
          fill 
          priority 
          sizes="100vw" 
          className="object-cover object-center" 
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/60" />
        
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.2em] mb-8">Architecture Interconnectée</span>
          <h1 
            className="font-black uppercase leading-tight text-foreground text-balance mb-8"
            style={{ fontSize: "clamp(2.8rem, 8vw, 5.5rem)", letterSpacing: "-0.03em" }}
          >
            Un écosystème<br />
            <span className="italic text-foreground/60 font-light">véritablement intégré</span>
          </h1>
          <p className="text-lg text-foreground/75 max-w-2xl mx-auto mb-12 leading-relaxed">
            Sécurité, lumière, énergie, mobilité — six domaines qui fonctionnent comme un seul organisme vivant.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/85 transition-all duration-300 px-8 py-4 text-xs font-bold uppercase tracking-[0.15em]" 
            style={{ color: "#0a0a0a" }}
          >
            Découvrir l'écosystème <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* SECTION 2: VISION */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="mb-12">
            <span className="text-primary text-xs font-bold uppercase tracking-[0.15em]">Vision</span>
            <h2 
              className="font-black uppercase leading-tight text-black text-balance mt-4 mb-6"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3.2rem)", letterSpacing: "-0.02em" }}
            >
              Pas une addition d'équipements.<br />
              <span className="italic font-light text-black/80">Un système unifié.</span>
            </h2>
          </div>

          <div className="space-y-6 text-black/70 leading-relaxed">
            <p className="text-base">
              La domotique ne doit pas être une mécanique complexe de technologies isolées. Chez Domotus, nous concevons des écosystèmes où chaque domaine communique, apprend et s'optimise en fonction du contexte global.
            </p>
            <p className="text-base">
              Votre maison n'est pas une somme d'équipements. C'est un organisme vivant.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: LES 6 DOMAINES */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="mb-16">
            <span className="text-primary text-xs font-bold uppercase tracking-[0.15em]">Architecture</span>
            <h2 
              className="font-black uppercase leading-tight text-foreground text-balance mt-4"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Six domaines interconnectés
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Sécurité",
                icon: Shield,
                description: "Protection intégrée. Surveillance, contrôle d'accès, interphonie — un système unifié qui dialogue avec tous les domaines.",
              },
              {
                title: "Connectivité",
                icon: Wifi,
                description: "Backbone infrastructure. Un réseau robuste qui relie et soutient chaque système — sans fragmentation.",
              },
              {
                title: "Lumière",
                icon: Lightbulb,
                description: "Ambiance architectorale. Éclairage scénarisé qui s'adapte au contexte global — bien-être et efficacité.",
              },
              {
                title: "Énergie",
                icon: Zap,
                description: "Performance intelligente. Optimisation temps réel qui dialogue avec climat, mobilité et charges.",
              },
              {
                title: "Mobilité",
                icon: Plug,
                description: "Recharge intégrée. Bornes intelligentes orchestrées avec l'énergie disponible et les besoins du bâtiment.",
              },
              {
                title: "Expérience",
                icon: RotateCcw,
                description: "Interface centralisée. Tableau de bord où l'utilisateur maîtrise l'ensemble — simple, intuitif, puissant.",
              },
            ].map((domain, idx) => {
              const Icon = domain.icon;
              return (
                <div 
                  key={idx}
                  className="bg-card border border-white/6 rounded-lg p-8 hover:border-white/20 transition-all duration-300 flex flex-col gap-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-bold uppercase text-foreground text-sm tracking-wider">
                      {domain.title}
                    </h3>
                    <Icon size={24} className="text-primary flex-shrink-0" aria-hidden="true" />
                  </div>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {domain.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: ORCHESTRATION */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="mb-16">
            <span className="text-primary text-xs font-bold uppercase tracking-[0.15em]">Orchestration</span>
            <h2 
              className="font-black uppercase leading-tight text-black text-balance mt-4"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Trois moments clés
            </h2>
            <p className="text-base text-black/70 mt-6 leading-relaxed">
              L'écosystème s'orchestre automatiquement selon le contexte. Voici trois moments clés du quotidien.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Mode Absence",
                points: [
                  "Sécurité : surveillance active + alertes temps réel",
                  "Lumière : simulation de présence (aléatoire)",
                  "Énergie : mode économique, charges optimisées",
                ],
              },
              {
                title: "Arrivée à Domicile",
                points: [
                  "Sécurité : déverrouillage intelligent + bienvenue",
                  "Lumière : illumination progressive des espaces",
                  "Climat : ajustement automatique de température",
                ],
              },
              {
                title: "Mode Nuit",
                points: [
                  "Sécurité : monitoring renforcé + silence sonore",
                  "Lumière : éclairage minimal guidé (sécurité)",
                  "Énergie : veille optimale, charges reportées",
                ],
              },
            ].map((scenario, idx) => (
              <div key={idx} className="bg-background border border-white/6 rounded-lg p-8">
                <h3 className="font-bold uppercase text-foreground text-sm tracking-wider mb-6">
                  {scenario.title}
                </h3>
                <ul className="space-y-4">
                  {scenario.points.map((point, i) => (
                    <li key={i} className="text-xs text-foreground/60 leading-relaxed flex gap-3">
                      <span className="text-primary font-bold flex-shrink-0">→</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: AVANTAGES */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="mb-16">
            <span className="text-primary text-xs font-bold uppercase tracking-[0.15em]">Avantages</span>
            <h2 
              className="font-black uppercase leading-tight text-foreground text-balance mt-4"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Pourquoi l'écosystème Domotus ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Complétude sans fragmentation",
                description: "Six domaines intégrés en un seul système. Plus besoin de 10 prestataires isolés et incompatibles.",
              },
              {
                title: "Interopérabilité garantie",
                description: "KNX, Crestron, Lutron, Matter, Zigbee — tous les standards ouverts intégrés nativement.",
              },
              {
                title: "Évolution transparente",
                description: "Modularité totale. Grandissez progressivement sans refonte. Vos besoins changent, le système s'adapte.",
              },
              {
                title: "Expertise certifiée référente",
                description: "Équipe formée aux standards multi-protocoles. Support 24/7 et maintenance garantie.",
              },
            ].map((adv, idx) => (
              <div key={idx} className="bg-card border border-white/6 rounded-lg p-8 hover:border-white/20 transition-all duration-300">
                <h3 className="font-bold uppercase text-foreground text-sm tracking-wider mb-3">
                  {adv.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: FONDATIONS TECHNOLOGIQUES */}
      <section className="py-24 lg:py-32 bg-white border-t border-black/5">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <span className="text-primary text-xs font-bold uppercase tracking-[0.15em]">Fondations</span>
          <h2 
            className="font-black uppercase leading-tight text-black text-balance mt-4 mb-6"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", letterSpacing: "-0.02em" }}
          >
            Multi-protocoles certifiés
          </h2>
          <p className="text-base text-black/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Pas d'enfermement technologique. L'écosystème repose sur les standards ouverts qui comptent. Votre système grandit avec la technologie.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {["KNX", "Crestron", "Lutron", "Matter", "Zigbee"].map((proto) => (
              <span 
                key={proto}
                className="px-5 py-2 bg-black/3 border border-black/8 rounded-full text-xs font-semibold text-black uppercase tracking-[0.1em] hover:border-black/20 transition-all"
              >
                {proto}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA FINAL */}
      <section className="py-32 lg:py-40 bg-background text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 
            className="font-black uppercase leading-tight text-foreground text-balance mb-8"
            style={{ fontSize: "clamp(1.8rem, 6vw, 3.8rem)", letterSpacing: "-0.03em" }}
          >
            Construisons<br />
            <span className="italic text-foreground/50 font-light">votre écosystème</span>
          </h2>
          <p className="text-base text-foreground/70 leading-relaxed mb-12 max-w-lg mx-auto">
            Chaque résidence est unique. Découvrez comment les 6 domaines peuvent s'orchestrer pour transformer votre habitat en un système vivant.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/85 transition-all duration-300 px-10 py-4 text-xs font-bold uppercase tracking-[0.15em]"
            style={{ color: "#0a0a0a" }}
          >
            Démarrer une consultation <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
