"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, MapPin, Phone, Mail, Instagram, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_COLS = [
  {
    title: "Maison Connectée",
    links: [
      { href: "/maison-connectee#modes-de-vie", label: "Nos Modes de Vie" },
      { href: "/maison-connectee#salon", label: "Le Salon Intelligent" },
      { href: "/maison-connectee#securite", label: "Sécurité & Vigilance" },
      { href: "/maison-connectee#audiovisuel", label: "Audio-Vidéo & Cinéma" },
      { href: "/maison-connectee#portfolio", label: "Portfolio Résidentiel" },
    ],
  },
  {
    title: "Division Projets",
    links: [
      { href: "/architectes", label: "Architectes & Designers" },
      { href: "/promoteurs", label: "Promoteurs Immobiliers" },
      { href: "/hospitalite", label: "Hôtellerie & Hospitalité" },
      { href: "/bureaux", label: "Bureaux & Tertiaire" },
      { href: "/contact?type=cctp", label: "Demander un CCTP / Audit" },
    ],
  },
  {
    title: "Protocoles & Standards",
    links: [
      { href: "/technologies", label: "Tous les Protocoles" },
      { href: "/technologies/knx", label: "KNX — Standard international" },
      { href: "/technologies/crestron", label: "Crestron — Prestige" },
      { href: "/technologies/lutron", label: "Lutron — Prestige" },
      { href: "/technologies/matter", label: "Matter — Interopérabilité" },
      { href: "/technologies/zigbee", label: "Zigbee — Mesh" },
      { href: "/technologies/zwave", label: "Z-Wave — Mesh" },
      { href: "/technologies/wifi7", label: "Wi-Fi 7 — Haute performance" },
    ],
  },
  {
    title: "Domotus",
    links: [
      { href: "/expertises#vision", label: "Notre Vision (10 ans)" },
      { href: "/blog", label: "Blog Domotique" },
      { href: "/mentions-legales", label: "Mentions légales" },
      { href: "/politique-confidentialite", label: "Politique de confidentialité" },
      { href: "/contact?type=devis", label: "Demander Devis/Audit", highlight: true },
    ],
  },
];

const CITIES = ["Casablanca", "Marrakech", "Rabat", "Tanger"];

function AccordionCol({ title, links }: { title: string; links: { href: string; label: string; highlight?: boolean }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/8">
      <button
        className="flex w-full items-center justify-between py-4 text-left focus:outline-none"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">{title}</span>
        <ChevronDown size={14} className={cn("text-white/40 transition-transform duration-300", open && "rotate-180")} />
      </button>
      <div className={cn("overflow-hidden transition-all duration-300", open ? "max-h-80 pb-4" : "max-h-0")}>
        <ul className="flex flex-col gap-3">
          {links.map((l, i) => (
            <li key={`${l.label}-${i}`}>
              <Link href={l.href} className={cn("text-sm transition-colors duration-200", l.highlight ? "text-[#66FCF1] hover:text-[#66FCF1]/80 font-semibold" : "text-white/50 hover:text-[#66FCF1]")}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/8" role="contentinfo" aria-label="Pied de page Domotus">

      {/* ── DESKTOP ── */}
      <div className="hidden lg:block mx-auto max-w-screen-xl px-10 pt-20 pb-10">

        {/* Top row — 5 columns */}
        <div className="grid grid-cols-5 gap-12 pb-16 border-b border-white/8">

          {/* Column 1: Brand & Identity */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 group focus:outline-none" aria-label="Domotus — Accueil">
              <div className="w-9 h-9 border border-white flex items-center justify-center">
                <span className="text-sm font-bold text-white">D</span>
              </div>
              <span className="text-sm font-bold tracking-[0.25em] uppercase text-white">DOMOTUS</span>
            </Link>

            <p className="text-[13px] text-white/60 leading-relaxed">
              L&apos;expérience de vos espaces, réinventée. L&apos;intégrateur domotique de référence au Maroc depuis 10 ans.
            </p>

            <address className="not-italic flex flex-col gap-3 text-[12px] text-white/50">
              <span className="font-semibold text-white/70">Zones d&apos;intervention</span>
              <span>{CITIES.join(" · ")}</span>
              <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
                <a href="tel:+212663666627" className="flex items-center gap-2 hover:text-[#66FCF1] transition-colors">
                  <Phone size={12} className="shrink-0 text-[#66FCF1]" aria-hidden="true" />
                  +212 663 66 66 27
                </a>
                <a href="mailto:contact@domotus.ma" className="flex items-center gap-2 hover:text-[#66FCF1] transition-colors">
                  <Mail size={12} className="shrink-0 text-[#66FCF1]" aria-hidden="true" />
                  contact@domotus.ma
                </a>
              </div>
            </address>

            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/company/domotusmaroc/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-[#66FCF1] transition-colors" aria-label="LinkedIn Domotus">
                <Linkedin size={16} />
              </a>
              <a href="https://www.instagram.com/domotus.ma/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-[#66FCF1] transition-colors" aria-label="Instagram Domotus Maroc">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Columns 2-5: Navigation */}
          {NAV_COLS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/60 font-semibold mb-5">{col.title}</p>
              <ul className="flex flex-col gap-3">
                {col.links.map((l, i) => (
                  <li key={`${l.label}-${i}`}>
                    <Link href={l.href} className={cn("text-[13px] transition-colors duration-200", l.highlight ? "text-[#66FCF1] hover:text-[#66FCF1]/80 font-semibold" : "text-white/50 hover:text-[#66FCF1]")}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between pt-8">
          <p className="text-xs text-white/25">
            &copy; {year} Domotus — Intégration Domotique Multi-Protocoles au Maroc. Tous droits réservés.
          </p>
          <p className="text-xs text-white/25">
            Conception &amp; développement —{" "}
            <span className="text-white/40">Domotus Digital</span>
          </p>
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="lg:hidden px-6 pt-12 pb-8">
        <Link href="/" className="flex items-center gap-3 mb-6 focus:outline-none" aria-label="Domotus">
          <div className="w-8 h-8 border border-white flex items-center justify-center">
            <span className="text-xs font-bold text-white">D</span>
          </div>
          <span className="text-sm font-bold tracking-[0.25em] uppercase text-white">DOMOTUS</span>
        </Link>

        <p className="text-xs text-white/60 leading-relaxed mb-2">
          L&apos;expérience de vos espaces, réinventée.
        </p>
        <p className="text-xs text-white/50 leading-relaxed mb-6">
          L&apos;intégrateur domotique de référence au Maroc depuis 10 ans.
        </p>

        <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-semibold mb-2">Zones d&apos;intervention</p>
        <p className="text-xs text-white/50 mb-6">{CITIES.join(" · ")}</p>

        {NAV_COLS.map((col) => (
          <AccordionCol key={col.title} title={col.title} links={col.links} />
        ))}

        <address className="not-italic flex flex-col gap-3 mt-8 text-sm text-white/50">
          <a href="tel:+212663666627" className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone size={13} className="text-[#66FCF1]" />
            +212 663 66 66 27
          </a>
          <a href="mailto:contact@domotus.ma" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={13} className="text-[#66FCF1]" />
            contact@domotus.ma
          </a>
        </address>

        <div className="flex items-center gap-4 mt-6">
          <a href="https://www.linkedin.com/company/domotusmaroc/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-[#66FCF1] transition-colors" aria-label="LinkedIn">
            <Linkedin size={16} />
          </a>
          <a href="https://www.instagram.com/domotus.ma/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-[#66FCF1] transition-colors" aria-label="Instagram">
            <Instagram size={16} />
          </a>
        </div>

        <div className="border-t border-white/8 mt-8 pt-6">
          <p className="text-xs text-white/25">&copy; {year} Domotus — Intégration Domotique Multi-Protocoles au Maroc.</p>
        </div>
      </div>

    </footer>
  );
}
