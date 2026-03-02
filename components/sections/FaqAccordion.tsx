"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="border-t border-white/8">
      {items.map((item, i) => (
        <div key={i} className="border-b border-white/8">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="focus-ring w-full flex items-start justify-between gap-6 py-6 text-left group"
            aria-expanded={openIndex === i}
          >
            <span className="text-black group-hover:text-black/70 transition-colors duration-300" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "24px" }}>
              {item.q}
            </span>
            <span className="shrink-0 mt-0.5 text-primary transition-transform duration-300">
              {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
            </span>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                key="answer"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="pb-6 text-black" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "24px" }}>
                  {item.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
