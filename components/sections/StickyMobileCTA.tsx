"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  // Don't show on contact or simulateur pages
  const hidden = pathname === "/contact" || pathname === "/simulateur";

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`lg:hidden fixed bottom-0 left-0 right-0 z-50 transition-transform duration-500 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-label="Appel à l'action — Contact rapide"
    >
      <div className="flex items-stretch border-t border-white/10">
        {/* Phone tap — secondary */}
        <a
          href="tel:+212663666627"
          className="flex-none flex items-center justify-center w-16 bg-card hover:bg-card/80 transition-colors duration-200 border-r border-white/10"
          aria-label="Appeler Domotus"
        >
          <Phone size={18} className="text-primary" />
        </a>

        {/* Primary CTA — fills remaining space */}
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-3 bg-primary py-5 text-[11px] font-black uppercase tracking-[0.2em]"
          style={{ color: "#0a0a0a" }}
        >
          Etude personnalisée
          <ArrowRight size={13} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
