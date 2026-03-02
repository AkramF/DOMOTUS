"use client";

import { motion } from "framer-motion";

const PARTNERS_DATA = [
  ["UBIQUITI", "AQARA", "GOVEE", "LEGRAND", "SOMFY"],
  ["SCHNEIDER", "KNX", "CRESTRON", "LUTRON", "PHILIPS"],
  ["SHELLY", "EATON", "GLEDOPTO", "INNR", "LEEDARSON"],
];

export default function PartnersGrid() {
  return (
    <section className="py-16 lg:py-24 bg-background" aria-label="Marques partenaires certifiées">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* 3-row grid */}
        <div className="space-y-4 lg:space-y-6">
          {PARTNERS_DATA.map((row, rowIdx) => (
            <motion.div
              key={rowIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: rowIdx * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 ${
                rowIdx === 0 || rowIdx === 2 ? "opacity-60" : ""
              }`}
            >
              {row.map((partner) => (
                <motion.div
                  key={partner}
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="group flex items-center justify-center py-4 px-4 bg-transparent transition-all duration-300 cursor-default"
                >
                  <span className="text-[11px] lg:text-[12px] font-black uppercase tracking-[0.2em] text-foreground/50 group-hover:text-primary transition-colors duration-300 text-center">
                    {partner}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Bottom divider */}
        <div className="mt-12 lg:mt-16 h-px w-full bg-white/8" />
      </div>
    </section>
  );
}
