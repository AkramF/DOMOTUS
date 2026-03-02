"use client";

import { motion } from "framer-motion";

const PARTNERS_DATA = [
  ["UBIQUITI", "AQARA", "GOVEE", "LEGRAND", "SOMFY"],
  ["SCHNEIDER", "KNX", "CRESTRON", "LUTRON", "PHILIPS"],
  ["SHELLY", "EATON", "GLEDOPTO", "INNR", "LEEDARSON"],
];

export default function PartnersGrid() {
  return (
    <section className="py-20 lg:py-28 bg-background" aria-label="Marques partenaires certifiées">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-foreground/40 font-semibold mb-2">
            Nos partenaires
          </p>
          <h2 className="text-[22px] lg:text-[28px] font-black leading-tight text-foreground">
            Les meilleures marques mondiales
          </h2>
        </div>

        {/* 3-row grid */}
        <div className="space-y-8 lg:space-y-12">
          {PARTNERS_DATA.map((row, rowIdx) => (
            <motion.div
              key={rowIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: rowIdx * 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6"
            >
              {row.map((partner) => (
                <motion.div
                  key={partner}
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="group flex items-center justify-center py-6 px-4 border border-white/8 rounded-lg bg-background/40 transition-all duration-300 hover:border-primary/40 hover:bg-background/60 cursor-default"
                >
                  <span className="text-[11px] lg:text-[12px] font-black uppercase tracking-[0.2em] text-foreground/60 group-hover:text-primary transition-colors duration-300 text-center">
                    {partner}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Bottom divider */}
        <div className="mt-16 lg:mt-20 h-px w-full bg-white/8" />
      </div>
    </section>
  );
}
