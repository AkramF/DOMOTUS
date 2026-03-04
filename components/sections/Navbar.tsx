"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, UserCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/maison-connectee", label: "Maison connectée" },
  { href: "/division-projets", label: "Division Projets" },
  { href: "/ecosystemes", label: "Écosystèmes" },
  { href: "/vision", label: "Vision" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-background/85 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        )}
      >
        <nav
          className="mx-auto max-w-screen-xl px-4 py-5 lg:px-6 flex items-center justify-between"
          aria-label="Navigation principale"
        >
          {/* Logo — left */}
          <Link
            href="/"
            className="focus-ring flex items-center gap-3 shrink-0"
            aria-label="Domotus – Accueil"
          >
            <div className="w-9 h-9 border border-foreground flex items-center justify-center">
              <span className="text-sm font-bold text-foreground">D</span>
            </div>
            <span className="hidden sm:block text-sm font-bold tracking-[0.25em] uppercase text-foreground">
              DOMOTUS
            </span>
          </Link>

          {/* Desktop nav links — centered with flex-grow */}
          <ul
            className="hidden lg:flex items-center gap-8 flex-1 justify-center"
            role="list"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "focus-ring font-medium transition-colors duration-300 whitespace-nowrap pb-0.5 text-black",
                    pathname === link.href
                      ? "text-black border-b border-black"
                      : "text-black/50 hover:text-black"
                  )}
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "16px", lineHeight: "24px" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTAs — far right */}
          <div className="hidden lg:flex items-center gap-2 ml-auto shrink-0">
            {/* CONTACT */}
            <Link
              href="/contact"
              className="focus-ring inline-flex items-center px-6 py-2.5 rounded-full bg-black text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "24px" }}
            >
              Contact
            </Link>

            {/* CLIENT — icon only pill, yellow fill, rounded */}
            <Link
              href="/espace-client"
              className="focus-ring inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#efd555] text-black transition-all duration-300 hover:bg-[#efd555]/80"
              aria-label="Espace client"
            >
              <UserCircle2 size={16} aria-hidden="true" />
            </Link>
          </div>

          {/* Burger mobile */}
          <button
            className="focus-ring lg:hidden text-foreground p-1 ml-auto"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 flex flex-col bg-background pt-24 px-8"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navigation"
          >
            <ul className="flex flex-col gap-6" role="list">
              {[...navLinks, { href: "/contact", label: "Contact" }].map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "focus-ring block text-2xl font-bold uppercase tracking-widest transition-colors duration-300",
                      pathname === link.href
                        ? "text-primary"
                        : "text-foreground/60 hover:text-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="my-8 h-px bg-white/10" />
            <Link
              href="/espace-client"
              className="focus-ring inline-flex w-max items-center gap-2 bg-primary px-6 py-3 text-sm uppercase tracking-widest font-bold transition-all duration-300 hover:bg-primary/80"
              style={{ color: "#0a0a0a" }}
            >
              <UserCircle2 size={16} aria-hidden="true" />
              Espace Client
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
