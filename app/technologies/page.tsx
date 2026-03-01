export const metadata = {
  title: "Technologies Domotiques — KNX, Crestron, Matter, Lutron | Domotus",
  description: "Comparatif complet des protocoles domotiques : KNX, Crestron, Lutron, Matter, Zigbee, Z-Wave, Wi-Fi 7. Découvrez quel standard choisir pour votre installation au Maroc.",
  alternates: { canonical: "https://www.domotus.ma/technologies" },
  openGraph: {
    title: "Technologies Domotiques — Comparatif Protocoles | Domotus",
    description: "KNX, Crestron, Lutron, Matter — Guide complet des standards domotiques au Maroc.",
    url: "https://www.domotus.ma/technologies",
  },
};

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/section-label";

export default function TechnologiesPage() {
  const technologies = [
    {
      name: "KNX",
      tagline: "Standard International",
      description: "Le protocole ouvert de référence mondiale pour bâtiments durables. 500+ marques, 30+ ans de durée de vie, neutre et sans vendor lock-in.",
      href: "/technologies/knx",
      features: ["500+ marques compatibles", "30+ ans de garantie", "Standard ISO/IEC 14543-3"],
      use_case: "Installations professionnelles haut de gamme",
    },
    {
      name: "Crestron",
      tagline: "Automatisation Prestige",
      description: "Plateforme intégrée pour contrôle AV, lumière et climatisation. Interface tactile fluide, écosystème propriétaire premium pour villas de luxe.",
      href: "/technologies/crestron",
      features: ["AV + Domotique intégrés", "Interface prestige", "Écrans tactiles premium"],
      use_case: "Résidences prestige et immeubles haut de gamme",
    },
    {
      name: "Lutron",
      tagline: "Éclairage Prestige",
      description: "Leader mondial de la gradation et éclairage intelligent. Gradation fluide sans clignotement, éclairage circadien, Apple Home natif.",
      href: "/technologies/lutron",
      features: ["Gradation 0-100% fluide", "Éclairage circadien", "Apple Home natif"],
      use_case: "Éclairage et ambiance pour espaces prestige",
    },
    {
      name: "Matter",
      tagline: "Interopérabilité Universelle",
      description: "Le protocole 2024+ qui unifie HomeKit, Google Home, Alexa et SmartThings. Achetez n'importe quel appareil certifié : il marche partout.",
      href: "/technologies/matter",
      features: ["Apple + Google + Amazon", "500+ appareils certifiés", "Protocole futur-proof"],
      use_case: "Maisons connectées grand public et modernes",
    },
    {
      name: "Zigbee & Z-Wave",
      tagline: "Réseau Mesh Robuste",
      description: "Protocoles mesh sans fil robustes pour appareils intelligents. Batterie longue durée, auto-guérison réseau, déploiement rapide.",
      href: "/technologies/zigbee",
      features: ["Réseau maillé auto-réparateur", "Batterie 2-5 ans", "Déploiement rapide"],
      use_case: "Capteurs et appareils portables répartis",
    },
    {
      name: "Wi-Fi 7",
      tagline: "Haute Performance",
      description: "Dernière génération Wi-Fi 6E pour streaming 4K sans latence, conférence vidéo fluide, IoT ultra-réactif. Bande passante 120 Mbps+ par canal.",
      href: "/technologies/wifi7",
      features: ["120 Mbps+ par canal", "Latence ultra-faible", "6 GHz disponible"],
      use_case: "Infrastructure réseau pour smart buildings",
    },
  ];

  return (
    <>
      {/* ── HEADER ── */}
      <header className="pt-40 pb-20 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <SectionLabel>Écosystèmes Domotiques</SectionLabel>
          <h1
            className="font-black uppercase leading-none text-foreground text-balance"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", letterSpacing: "-0.03em" }}
          >
            Technologies &amp;<br />
            <span className="italic text-foreground/50">Protocoles.</span>
          </h1>
          <p className="mt-6 text-[15px] text-foreground/50 leading-relaxed max-w-2xl">
            Découvrez les standards domotiques modernes : KNX, Crestron, Lutron, Matter, Zigbee, Z-Wave, Wi-Fi 7. Chaque protocole a ses forces — trouvez celui adapté à votre projet au Maroc.
          </p>
        </div>
      </header>

      {/* ── TECHNOLOGIES GRID ── */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech) => (
              <Link
                key={tech.name}
                href={tech.href}
                className="group focus-ring flex flex-col bg-card hover:bg-card/80 border border-white/8 hover:border-primary/30 p-8 transition-all duration-300"
              >
                {/* Tagline */}
                <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold mb-4">
                  {tech.tagline}
                </p>

                {/* Name */}
                <h3 className="font-black text-foreground text-2xl mb-3 group-hover:text-primary transition-colors">
                  {tech.name}
                </h3>

                {/* Description */}
                <p className="text-[13px] text-foreground/60 leading-relaxed mb-6 flex-grow">
                  {tech.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {tech.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-[12px] text-foreground/50">
                      <span className="text-primary mt-1">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Use Case */}
                <p className="text-[12px] text-foreground/40 italic border-t border-white/5 pt-4">
                  Idéal pour : {tech.use_case}
                </p>

                {/* CTA */}
                <div className="mt-6 flex items-center gap-2 text-primary text-[12px] font-bold uppercase tracking-widest group-hover:gap-3 transition-all">
                  En savoir plus
                  <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARATIF TABLE ── */}
      <section className="py-24 bg-card border-t border-white/8">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-black uppercase text-foreground mb-12" style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", letterSpacing: "-0.02em" }}>
            Comparatif par Critères
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-[12px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 font-bold text-foreground">Critère</th>
                  <th className="text-left py-3 px-4 font-bold text-foreground">KNX</th>
                  <th className="text-left py-3 px-4 font-bold text-foreground">Crestron</th>
                  <th className="text-left py-3 px-4 font-bold text-foreground">Lutron</th>
                  <th className="text-left py-3 px-4 font-bold text-foreground">Matter</th>
                  <th className="text-left py-3 px-4 font-bold text-foreground">Zigbee</th>
                  <th className="text-left py-3 px-4 font-bold text-foreground">Wi-Fi 7</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-foreground/70">Interopérabilité</td>
                  <td className="py-3 px-4 text-primary">★★★★★</td>
                  <td className="py-3 px-4 text-foreground/50">Limited</td>
                  <td className="py-3 px-4 text-foreground/50">Limited</td>
                  <td className="py-3 px-4 text-primary">★★★★★</td>
                  <td className="py-3 px-4 text-primary">★★★★</td>
                  <td className="py-3 px-4 text-primary">★★★</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-foreground/70">Durée de Vie</td>
                  <td className="py-3 px-4 text-primary">30+ ans</td>
                  <td className="py-3 px-4 text-foreground/50">10-15 ans</td>
                  <td className="py-3 px-4 text-foreground/50">10-15 ans</td>
                  <td className="py-3 px-4 text-primary">20+ ans</td>
                  <td className="py-3 px-4 text-foreground/50">5-10 ans</td>
                  <td className="py-3 px-4 text-foreground/50">5-8 ans</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-foreground/70">Déploiement</td>
                  <td className="py-3 px-4 text-foreground/50">Filaire</td>
                  <td className="py-3 px-4 text-foreground/50">Filaire/IP</td>
                  <td className="py-3 px-4 text-foreground/50">Filaire</td>
                  <td className="py-3 px-4 text-primary">Sans fil</td>
                  <td className="py-3 px-4 text-primary">Sans fil</td>
                  <td className="py-3 px-4 text-primary">Sans fil</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-foreground/70">Coût Installation</td>
                  <td className="py-3 px-4 text-foreground/50">Moyen-Élevé</td>
                  <td className="py-3 px-4 text-foreground/50">Élevé</td>
                  <td className="py-3 px-4 text-foreground/50">Élevé</td>
                  <td className="py-3 px-4 text-primary">Bas</td>
                  <td className="py-3 px-4 text-primary">Bas</td>
                  <td className="py-3 px-4 text-primary">Moyen</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-foreground/70">Apple Home</td>
                  <td className="py-3 px-4 text-foreground/50">Bridge</td>
                  <td className="py-3 px-4 text-foreground/50">Bridge</td>
                  <td className="py-3 px-4 text-primary">Natif ✓</td>
                  <td className="py-3 px-4 text-primary">Natif ✓</td>
                  <td className="py-3 px-4 text-foreground/50">Via bridge</td>
                  <td className="py-3 px-4 text-foreground/50">Via IP</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-black uppercase text-foreground mb-4" style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", letterSpacing: "-0.02em" }}>
            Besoin d'Aide pour Choisir ?
          </h2>
          <p className="text-[15px] text-foreground/50 mb-8">
            Nos experts analysent votre projet et recommandent le protocole optimal. Audit gratuit, étude comparative, devis 24h.
          </p>
          <Link href="/contact" className="focus-ring inline-flex items-center gap-3 bg-primary px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85" style={{ color: "#0a0a0a" }}>
            Demander un Audit Technologique
            <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </>
  );
}
