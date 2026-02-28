import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Home, Phone, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Page introuvable — Domotus",
  description: "Cette page n'existe pas. Retournez à l'accueil ou contactez Domotus, intégrateur domotique certifié multi-protocoles au Maroc.",
  robots: { index: false, follow: false },
};

const suggestions = [
  { href: "/maison-connectee", label: "Maison Connectée", desc: "Domotique résidentielle de prestige" },
  { href: "/promoteurs", label: "Promoteurs", desc: "Solutions pour programmes immobiliers" },
  { href: "/expertises", label: "Nos expertises", desc: "Multi-protocoles : KNX, Zigbee, Matter, Crestron, Lutron" },
  { href: "/contact", label: "Contact", desc: "Etude personnalisée" },
];

export default function NotFound() {
  // Track 404 errors for analytics
  if (typeof window !== "undefined") {
    if (window.gtag) {
      window.gtag("event", "page_not_found", {
        page_path: typeof window !== "undefined" ? window.location.pathname : "",
        referrer: typeof document !== "undefined" ? document.referrer : "",
      });
    }
  }

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-32 relative overflow-hidden">

      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 60%, oklch(0.91 0.12 188 / 0.04), transparent)",
        }}
      />

      {/* 404 large background number */}
      <span
        className="absolute select-none font-black text-foreground/[0.03] pointer-events-none"
        style={{ fontSize: "clamp(12rem, 35vw, 28rem)", letterSpacing: "-0.05em", lineHeight: 1 }}
        aria-hidden="true"
      >
        404
      </span>

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl">

        {/* Overline */}
        <div className="flex items-center gap-3 mb-8">
          <span className="block w-8 h-px bg-foreground/25" aria-hidden="true" />
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-orange-500 font-semibold">
            <AlertCircle size={12} aria-hidden="true" />
            Erreur 404
          </div>
          <span className="block w-8 h-px bg-foreground/25" aria-hidden="true" />
        </div>

        {/* Heading */}
        <h1
          className="font-black uppercase leading-none text-foreground text-balance"
          style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)", letterSpacing: "-0.02em" }}
        >
          Page
          <br />
          <span className="italic text-foreground/50">introuvable.</span>
        </h1>

        <p className="mt-6 text-[14px] text-foreground/50 leading-relaxed max-w-md text-balance">
          La page que vous cherchez n&apos;existe pas ou a été déplacée. Voici quelques pistes pour continuer votre navigation.
        </p>

        {/* Suggestions grid */}
        <div className="mt-12 grid grid-cols-2 gap-px bg-white/8 w-full max-w-lg">
          {suggestions.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group bg-background hover:bg-card transition-colors duration-300 p-6 flex flex-col gap-1 text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-foreground group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                {s.label}
                <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
              </span>
              <span className="text-[12px] text-foreground/40">{s.desc}</span>
            </Link>
          ))}
        </div>

        {/* Primary CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/"
            className="focus-ring inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85"
            style={{ color: "#0a0a0a" }}
          >
            <Home size={13} aria-hidden="true" />
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/contact"
            className="focus-ring inline-flex items-center gap-3 border border-white/20 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-foreground/60 transition-all duration-300 hover:border-primary hover:text-primary"
          >
            <Phone size={13} aria-hidden="true" />
            Nous contacter
          </Link>
        </div>

        {/* Brand signature */}
        <div className="mt-16 flex items-center gap-3">
          <div className="w-8 h-8 border border-white/20 flex items-center justify-center">
            <span className="text-[11px] font-black text-foreground">D</span>
          </div>
          <span className="text-[11px] uppercase tracking-[0.3em] text-foreground/30 font-semibold">
            Domotus
          </span>
        </div>
      </div>
    </main>
  );
}
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-32 relative overflow-hidden">

      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 60%, oklch(0.91 0.12 188 / 0.04), transparent)",
        }}
      />

      {/* 404 large background number */}
      <span
        className="absolute select-none font-black text-foreground/[0.03] pointer-events-none"
        style={{ fontSize: "clamp(12rem, 35vw, 28rem)", letterSpacing: "-0.05em", lineHeight: 1 }}
        aria-hidden="true"
      >
        404
      </span>

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl">

        {/* Overline */}
        <div className="flex items-center gap-3 mb-8">
          <span className="block w-8 h-px bg-foreground/25" aria-hidden="true" />
          <p className="text-[10px] uppercase tracking-[0.4em] text-primary font-semibold">
            Erreur 404
          </p>
          <span className="block w-8 h-px bg-foreground/25" aria-hidden="true" />
        </div>

        {/* Heading */}
        <h1
          className="font-black uppercase leading-none text-foreground text-balance"
          style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)", letterSpacing: "-0.02em" }}
        >
          Page
          <br />
          <span className="italic text-foreground/50">introuvable.</span>
        </h1>

        <p className="mt-6 text-[14px] text-foreground/50 leading-relaxed max-w-md text-balance">
          La page que vous cherchez n&apos;existe pas ou a été déplacée. Voici quelques pistes pour continuer votre navigation.
        </p>

        {/* Suggestions grid */}
        <div className="mt-12 grid grid-cols-2 gap-px bg-white/8 w-full max-w-lg">
          {suggestions.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group bg-background hover:bg-card transition-colors duration-300 p-6 flex flex-col gap-1 text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-foreground group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                {s.label}
                <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
              </span>
              <span className="text-[12px] text-foreground/40">{s.desc}</span>
            </Link>
          ))}
        </div>

        {/* Primary CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/"
            className="focus-ring inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85"
            style={{ color: "#0a0a0a" }}
          >
            <Home size={13} aria-hidden="true" />
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/contact"
            className="focus-ring inline-flex items-center gap-3 border border-white/20 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-foreground/60 transition-all duration-300 hover:border-primary hover:text-primary"
          >
            <Phone size={13} aria-hidden="true" />
            Nous contacter
          </Link>
        </div>

        {/* Brand signature */}
        <div className="mt-16 flex items-center gap-3">
          <div className="w-8 h-8 border border-white/20 flex items-center justify-center">
            <span className="text-[11px] font-black text-foreground">D</span>
          </div>
          <span className="text-[11px] uppercase tracking-[0.3em] text-foreground/30 font-semibold">
            Domotus
          </span>
        </div>
      </div>
    </main>
  );
}
