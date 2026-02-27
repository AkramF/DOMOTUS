import type { Metadata } from "next";
import Link from "next/link";
import { Lock, FileText, Eye, Clock } from "lucide-react";
import LoginForm from "@/components/sections/LoginForm";

export const metadata: Metadata = {
  title: "Espace Client — Accès Devis & Projets | Domotus Maroc",
  description:
    "Connectez-vous à votre espace client Domotus pour consulter vos devis, suivre l'avancement de votre projet domotique et accéder à vos documents.",
  alternates: { canonical: "https://www.domotus.ma/client" },
  robots: { index: false, follow: false },
};

const perks = [
  {
    icon: FileText,
    title: "Vos devis en ligne",
    desc: "Consultez, acceptez et signez vos devis domotique directement depuis votre espace.",
  },
  {
    icon: Eye,
    title: "Suivi de projet",
    desc: "Accédez aux étapes d'avancement, aux plans d'installation et aux comptes-rendus de chantier.",
  },
  {
    icon: Clock,
    title: "Historique complet",
    desc: "Retrouvez l'ensemble de vos documents, garanties et notices techniques à tout moment.",
  },
];

export default function ClientLoginPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col lg:flex-row">

      {/* ── Left panel — brand / perks ── */}
      <div className="relative hidden lg:flex flex-col justify-between w-[46%] shrink-0 bg-card border-r border-white/8 px-16 py-24">

        {/* Logo */}
        <Link href="/" className="inline-flex items-center gap-3 group" aria-label="Domotus — accueil">
          <span className="flex items-center justify-center w-9 h-9 border border-foreground/40 group-hover:border-primary transition-colors duration-300">
            <span className="font-black text-[13px] tracking-tight text-foreground">D</span>
          </span>
          <span
            className="font-black uppercase text-foreground tracking-[0.25em] text-[15px]"
            style={{ letterSpacing: "0.25em" }}
          >
            DOMOTUS
          </span>
        </Link>

        {/* Headline */}
        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-primary/70 mb-5">Espace client</p>
          <h1
            className="font-black uppercase leading-none text-foreground mb-8"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)", letterSpacing: "-0.03em" }}
          >
            Votre projet.<br />
            <span className="italic text-foreground/45">À portée de main.</span>
          </h1>
          <p className="text-[14px] text-foreground/45 leading-relaxed max-w-xs">
            Devis, suivi de chantier, documents techniques — tout votre dossier Domotus en un seul endroit sécurisé.
          </p>
        </div>

        {/* Perks */}
        <ul className="flex flex-col gap-8">
          {perks.map((p) => {
            const Icon = p.icon;
            return (
              <li key={p.title} className="flex items-start gap-5">
                <div className="w-9 h-9 shrink-0 border border-white/12 flex items-center justify-center text-primary mt-0.5">
                  <Icon size={15} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-foreground mb-1">{p.title}</p>
                  <p className="text-[12px] text-foreground/40 leading-relaxed">{p.desc}</p>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Bottom note */}
        <p className="text-[11px] text-foreground/20">
          Pas encore client ?{" "}
          <Link href="/contact" className="text-primary/60 hover:text-primary transition-colors duration-300">
            Commencer une étude
          </Link>
        </p>
      </div>

      {/* ── Right panel — login form ── */}
      <div className="flex flex-col justify-center flex-1 px-6 py-24 lg:px-20 xl:px-32">

        {/* Mobile logo */}
        <Link href="/" className="inline-flex items-center gap-3 mb-16 lg:hidden">
          <span className="flex items-center justify-center w-8 h-8 border border-foreground/40">
            <span className="font-black text-[12px]">D</span>
          </span>
          <span className="font-black uppercase tracking-[0.25em] text-[14px]">DOMOTUS</span>
        </Link>

        <div className="w-full max-w-sm">
          {/* Lock badge */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-8 border border-white/12 flex items-center justify-center text-primary">
              <Lock size={13} aria-hidden="true" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.35em] text-foreground/40 font-medium">
              Connexion sécurisée
            </span>
          </div>

          <h2
            className="font-black uppercase leading-none text-foreground mb-2"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", letterSpacing: "-0.03em" }}
          >
            Connexion
          </h2>
          <p className="text-[13px] text-foreground/40 leading-relaxed mb-10">
            Accédez à vos devis et au suivi de votre projet domotique.
          </p>

          {/* Form island */}
          <LoginForm />
        </div>

        {/* Footer links */}
        <div className="mt-16 flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/contact" className="text-[11px] text-foreground/25 hover:text-foreground/50 transition-colors uppercase tracking-[0.12em]">
            Contactez-nous
          </Link>
          <Link href="/" className="text-[11px] text-foreground/25 hover:text-foreground/50 transition-colors uppercase tracking-[0.12em]">
            Retour au site
          </Link>
          <span className="text-[11px] text-foreground/15 uppercase tracking-[0.12em]">
            © {new Date().getFullYear()} Domotus Maroc
          </span>
        </div>
      </div>
    </main>
  );
}
