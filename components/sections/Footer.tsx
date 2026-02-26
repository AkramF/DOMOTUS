"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, MapPin, Phone, Mail, Instagram, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_COLS = [
  {
    title: "Solutions",
    links: [
      { href: "/villas-apparts", label: "Smart Living" },
      { href: "/promoteurs", label: "Promoteurs Immobiliers" },
      { href: "/architectes", label: "Architectes & Design" },
      { href: "/expertises", label: "Nos expertises" },
      { href: "/simulateur", label: "Espace client" },
    ],
  },
  {
    title: "Technologies",
    links: [
      { href: "/technologies/knx", label: "KNX — Standard international" },
      { href: "/technologies/zigbee", label: "Zigbee — Protocole mesh sans fil" },
      { href: "/technologies/matter", label: "Matter — Interopérabilité universelle" },
      { href: "/technologies/zwave", label: "Z-Wave — Portée maximale" },
      { href: "/technologies/wifi7", label: "Wi-Fi 7 — Ultra-haute performance" },
    ],
  },
  {
    title: "Société",
    links: [
      { href: "/journal", label: "Blog domotique" },
      { href: "/contact", label: "Demander un devis" },
      { href: "/mentions-legales", label: "Mentions légales" },
    ],
  },
];

const CERTIFICATIONS = ["KNX Certified", "Crestron Dealer", "Lutron Partner", "Ubiquiti Elite", "Aqara Partner"];

const CITIES = [
  "Casablanca", "Marrakech", "Rabat", "Tanger", "Agadir", "Fès",
];

function AccordionCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
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
      <div className={cn("overflow-hidden transition-all duration-300", open ? "max-h-64 pb-4" : "max-h-0")}>
        <ul className="flex flex-col gap-3">
          {links.map((l, i) => (
            <li key={`${l.label}-${i}`}>
              <Link href={l.href} className="text-sm text-white/50 hover:text-[#66FCF1] transition-colors duration-200">
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

        {/* Top row */}
        <div className="grid grid-cols-4 gap-16 pb-16 border-b border-white/8">

          {/* Brand column */}
          <div className="flex flex-col gap-7">
            <Link href="/" className="flex items-center gap-3 group focus:outline-none" aria-label="Domotus — Accueil">
              <div className="w-9 h-9 border border-white flex items-center justify-center">
                <span className="text-sm font-bold text-white">D</span>
              </div>
              <span className="text-sm font-bold tracking-[0.25em] uppercase text-white">DOMOTUS</span>
            </Link>

            <p className="text-sm text-white/50 leading-relaxed">
              Expérience de vie réinventée. Espaces où la technologie crée du confort, de la sécurité et de la sérénité. Domotus transforme maisons et immeubles en écosystèmes intelligents au Maroc.
            </p>

            <div className="w-8 h-px bg-[#66FCF1]" aria-hidden="true" />

            <address className="not-italic flex flex-col gap-3 text-sm text-white/45">
              <span className="flex items-start gap-2">
                <MapPin size={13} className="mt-0.5 shrink-0 text-[#66FCF1]" aria-hidden="true" />
                <span>Casablanca · Marrakech · Rabat · Tanger</span>
              </span>
              <a href="tel:+212663666627" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={13} className="shrink-0 text-[#66FCF1]" aria-hidden="true" />
                +212 663 66 66 27
              </a>
              <a href="mailto:contact@domotus.ma" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={13} className="shrink-0 text-[#66FCF1]" aria-hidden="true" />
                contact@domotus.ma
              </a>
            </address>

            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/domotus.ma/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-[#66FCF1] transition-colors" aria-label="Instagram Domotus Maroc">
                <Instagram size={16} />
              </a>
              <a href="https://www.linkedin.com/company/domotusmaroc/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-[#66FCF1] transition-colors" aria-label="LinkedIn Domotus">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Nav cols */}
          {NAV_COLS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-6">{col.title}</p>
              <ul className="flex flex-col gap-3">
                {col.links.map((l, i) => (
                  <li key={`${l.label}-${i}`}>
                    <Link href={l.href} className="text-sm text-white/50 hover:text-[#66FCF1] transition-colors duration-200">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* SEO cities row */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 py-8 border-b border-white/8">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/25 shrink-0">Zones d&apos;intervention :</span>
          {CITIES.map((city) => (
            <span key={city} className="text-xs text-white/30">
              Domotique {city}
            </span>
          ))}
        </div>

        {/* Certifications row */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 py-6 border-b border-white/8">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/25 shrink-0">Certifications :</span>
          {CERTIFICATIONS.map((c) => (
            <span key={c} className="text-[11px] text-[#66FCF1]/60 font-medium">{c}</span>
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
        <Link href="/" className="flex items-center gap-3 mb-3 focus:outline-none" aria-label="Domotus">
          <div className="w-8 h-8 border border-white flex items-center justify-center">
            <span className="text-xs font-bold text-white">D</span>
          </div>
          <span className="text-sm font-bold tracking-[0.25em] uppercase text-white">DOMOTUS</span>
        </Link>

        <p className="text-xs text-white/45 leading-relaxed mb-8">
          Expérience de vie réinventée — Casablanca · Marrakech · Rabat · Tanger
        </p>

        {NAV_COLS.map((col) => (
          <AccordionCol key={col.title} title={col.title} links={col.links} />
        ))}

        <address className="not-italic flex flex-col gap-3 mt-8 text-sm text-white/45">
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
          <a href="https://www.instagram.com/domotus.ma/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-[#66FCF1] transition-colors" aria-label="Instagram">
            <Instagram size={16} />
          </a>
          <a href="https://www.linkedin.com/company/domotusmaroc/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-[#66FCF1] transition-colors" aria-label="LinkedIn">
            <Linkedin size={16} />
          </a>
        </div>

        <div className="border-t border-white/8 mt-8 pt-6 flex flex-col gap-2">
          <p className="text-xs text-white/25">&copy; {year} Domotus — Intégration Domotique Multi-Protocoles au Maroc.</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {CERTIFICATIONS.map((c) => (
              <span key={c} className="text-[10px] text-[#66FCF1]/50">{c}</span>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
