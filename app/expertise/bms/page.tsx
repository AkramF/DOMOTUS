import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Lock } from "lucide-react";
import SectionLabel from "@/components/ui/section-label";

export const metadata: Metadata = {
  title: "Supervision BMS Bâtiment Domotique Maroc | Domotus",
  description:
    "Système BMS supervision bâtiment intelligent au Maroc. Tableau de bord unifié, maintenance prédictive IA, +25% valeur immobilière. Promoteurs Maroc.",
  alternates: { canonical: "https://www.domotus.ma/expertise/bms" },
};

export default function BMSPage() {
  return (
    <>
      <section className="relative h-screen min-h-[700px] overflow-hidden flex items-center justify-center">
        <Image
          src="/images/expertise-bms-hero.jpg"
          alt="Système BMS de supervision de bâtiment intelligent au Maroc"
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
            Supervision<br />
            <span className="italic text-foreground/60">BMS.</span>
          </h1>
          <p className="mt-8 text-[15px] text-foreground/60 leading-relaxed max-w-xl mx-auto">
            Tableau de bord unifié, alertes temps réel, maintenance prédictive IA. Gestion multi-bâtiment, +25% valeur marché, conformité certifiée.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-black uppercase text-foreground text-balance mb-6" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", letterSpacing: "-0.02em" }}>
                Pilotez vos bâtiments<br />de manière intelligente
              </h2>
              <p className="text-[14px] text-foreground/60 leading-relaxed mb-6">
                BMS (Building Management System) est la cervelle de votre programme immobilier. Vision unifiée de tous les systèmes (chauffage, éclairage, sécurité, énergie), alertes intelligentes, maintenance prédictive basée IA, conformité normative automatisée.
              </p>
              <p className="text-[14px] text-foreground/60 leading-relaxed">
                Augmente la valeur de votre immobilier de +15-25%, améliore la satisfaction des locataires, réduit les coûts d'exploitation. Labels de prestige (HQE, LEED, BREEAM) attribués automatiquement.
              </p>
            </div>
            <div className="aspect-video relative overflow-hidden border border-white/8">
              <Image
                src="/images/expertise-bms.jpg"
                alt="Système BMS de supervision"
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
            Fonctionnalités BMS professionnel
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Dashboard temps réel", desc: "Vision complète de tous les bâtiments. Alertes en priorité, anomalies détectées instantanément." },
              { title: "Multi-bâtiment / multi-site", desc: "Gestion centralisée pour programmes entiers, comparaison performance par bâtiment/étage/zone." },
              { title: "Maintenance prédictive IA", desc: "Algorithmes qui prédisent pannes avant occurrence, programmation maintenance justifiée, zéro downtime." },
              { title: "Conformité certifications", desc: "HQE, LEED, BREEAM, réglementations marocaines intégrées, rapports automatisés pour audit." },
              { title: "Reporting & analytics", desc: "Tableaux de bord personnalisés, export données, analyses tendances consommation/disponibilité." },
              { title: "Intégration totale", desc: "Tous systèmes domotiques (chauffage, lumière, sécurité, énergie) pilotés depuis un seul dashboard." },
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
            Augmentez la valeur de vos bâtiments
          </h2>
          <p className="text-[14px] text-foreground/60 mb-8">
            Étude BMS et sans engagement. Nous évaluons le potentiel de supervision de votre programme, ROI, timeline d'implémentation. Rapport en 48h.
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
