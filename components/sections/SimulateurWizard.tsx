"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

type Step = {
  id: string;
  question: string;
  options: { label: string; value: string; desc?: string }[];
};

const steps: Step[] = [
  {
    id: "type",
    question: "Quel est votre type de projet ?",
    options: [
      { label: "Villa / Maison", value: "villa", desc: "Résidence principale ou secondaire" },
      { label: "Appartement", value: "appart", desc: "Appartement neuf ou rénovation" },
      { label: "Programme promoteur", value: "promoteur", desc: "Lotissement ou immeuble résidentiel" },
      { label: "Bâtiment tertiaire", value: "tertiaire", desc: "Bureaux, commerce, hôtellerie" },
    ],
  },
  {
    id: "surface",
    question: "Quelle est la surface approximative ?",
    options: [
      { label: "Moins de 150 m²", value: "s" },
      { label: "150 à 400 m²", value: "m" },
      { label: "400 à 1 000 m²", value: "l" },
      { label: "Plus de 1 000 m²", value: "xl" },
    ],
  },
  {
    id: "systemes",
    question: "Quels systèmes souhaitez-vous intégrer ?",
    options: [
      { label: "Éclairage & Ambiances", value: "light" },
      { label: "Sécurité & Accès", value: "security" },
      { label: "Audio / Vidéo", value: "av" },
      { label: "Énergie & Volets", value: "energy" },
    ],
  },
  {
    id: "budget",
    question: "Quel est votre budget indicatif ?",
    options: [
      { label: "Moins de 300 000 MAD", value: "b1" },
      { label: "300 000 – 800 000 MAD", value: "b2" },
      { label: "800 000 – 2 000 000 MAD", value: "b3" },
      { label: "Sur devis (> 2 000 000 MAD)", value: "b4" },
    ],
  },
];

export default function SimulateurWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const step = steps[currentStep];
  const progress = ((currentStep) / steps.length) * 100;

  function selectOption(value: string) {
    setAnswers((prev) => ({ ...prev, [step.id]: value }));
  }

  function next() {
    if (currentStep < steps.length - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      setDone(true);
    }
  }

  function prev() {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  }

  return (
    <div className="mx-auto max-w-2xl px-6">
      {!done && (
        <div className="mb-12">
          <div className="flex justify-between mb-2">
            <span className="text-[11px] uppercase tracking-[0.2em] text-foreground/40">
              Étape {currentStep + 1} / {steps.length}
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-primary">
              {Math.round(progress + 25)}%
            </span>
          </div>
          <div className="h-px bg-white/10">
            <motion.div
              className="h-px bg-primary"
              animate={{ width: `${progress + 25}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {done ? (
          <motion.div key="done"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}
            className="text-center border border-white/10 p-12">
            <div className="w-14 h-14 border border-primary flex items-center justify-center text-primary mx-auto mb-8">
              <Check size={22} />
            </div>
            <div className="flex items-center gap-4 justify-center mb-5">
              <span className="block w-8 h-px bg-foreground/30" />
              <p className="text-[11px] uppercase tracking-[0.3em] text-primary font-semibold">Simulation complète</p>
            </div>
            <h2 className="font-black uppercase text-foreground leading-none mb-6"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "-0.02em" }}>
              Votre profil est prêt.
            </h2>
            <p className="text-foreground/55 text-[14px] leading-relaxed mb-10 max-w-sm mx-auto">
              Un expert Domotus analysera votre simulation et vous contactera sous 24h avec une estimation détaillée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact"
                className="focus-ring inline-flex items-center gap-3 bg-foreground px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-background hover:opacity-80 transition-opacity group">
                Confirmer ma demande
                <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <button
                onClick={() => { setCurrentStep(0); setAnswers({}); setDone(false); }}
                className="focus-ring inline-flex items-center gap-3 border border-white/20 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-foreground/60 hover:border-primary hover:text-primary transition-all duration-300">
                Recommencer
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div key={step.id}
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex items-center gap-4 mb-5">
              <span className="block w-8 h-px bg-foreground/30" />
              <p className="text-[11px] uppercase tracking-[0.3em] text-primary font-semibold">
                Question {currentStep + 1}
              </p>
            </div>
            <h2 className="font-black uppercase leading-tight text-foreground mb-10"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", letterSpacing: "-0.02em" }}>
              {step.question}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/8 mb-10">
              {step.options.map((opt) => {
                const selected = answers[step.id] === opt.value;
                return (
                  <button key={opt.value} onClick={() => selectOption(opt.value)}
                    className={`focus-ring p-6 text-left flex flex-col gap-2 transition-colors duration-200 ${
                      selected ? "bg-card border border-primary" : "bg-background hover:bg-card"
                    }`}>
                    <div className="flex items-center justify-between">
                      <span className="font-bold uppercase tracking-[0.08em] text-foreground text-sm">
                        {opt.label}
                      </span>
                      {selected && (
                        <div className="w-4 h-4 border border-primary flex items-center justify-center">
                          <Check size={10} className="text-primary" />
                        </div>
                      )}
                    </div>
                    {opt.desc && <span className="text-[12px] text-foreground/45">{opt.desc}</span>}
                  </button>
                );
              })}
            </div>
            <div className="flex items-center justify-between">
              <button onClick={prev} disabled={currentStep === 0}
                className="focus-ring text-[11px] uppercase tracking-[0.2em] text-foreground/40 hover:text-foreground disabled:opacity-20 transition-colors duration-200">
                Retour
              </button>
              <button onClick={next} disabled={!answers[step.id]}
                className="focus-ring inline-flex items-center gap-3 bg-foreground px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-background hover:opacity-80 disabled:opacity-30 transition-opacity group">
                {currentStep < steps.length - 1 ? "Suivant" : "Terminer"}
                <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
