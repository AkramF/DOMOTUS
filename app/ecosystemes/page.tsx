'use client';

import Link from "next/link";
import { ArrowRight, Zap, Lock, Volume2, Wifi, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function EcosystemesPage() {
  return (
    <>
      {/* ── STICKY NAVIGATION ── */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 h-12 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50"
      >
        <div className="mx-auto max-w-7xl px-6 h-full flex items-center justify-between">
          <div className="flex gap-8">
            {["Vision", "Solutions", "Interopérabilité", "Évolutivité"].map((item, idx) => (
              <button
                key={idx}
                className="text-sm font-medium text-black/70 hover:text-black transition-colors relative group"
              >
                {item}
                <motion.div
                  layoutId={`underline-${idx}`}
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            ))}
          </div>
          <Link
            href="/contact"
            className="px-4 py-2 bg-black text-white text-xs font-bold rounded-none hover:bg-black/85 transition-all"
          >
            Audit Gratuit
          </Link>
        </div>
      </motion.nav>

      {/* ── SECTION 1: DOMOTUS OS - LE CERVEAU ── */}
      <section id="vision" className="py-20 lg:py-32 bg-white pt-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-6xl font-black leading-tight text-black text-center text-balance mb-20"
            style={{ letterSpacing: "-0.02em" }}
          >
            L'intelligence n'est plus une option.<br />
            <span className="text-black/60">C'est votre socle.</span>
          </motion.h2>

          {/* iPhone Mockup with Radiating Lines */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Central iPhone */}
            <div className="relative w-64 h-96 bg-black rounded-[40px] border-8 border-black shadow-2xl p-3 flex items-center justify-center overflow-hidden">
              {/* iPhone Screen Content */}
              <div className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-[36px] flex flex-col items-center justify-center relative overflow-hidden">
                {/* Dashboard UI */}
                <div className="text-center z-10">
                  <div className="text-yellow-400 text-3xl font-black mb-2">DOMOTUS</div>
                  <div className="text-white/40 text-xs font-medium">SYSTÈME PRINCIPAL</div>
                  <div className="mt-8 space-y-2">
                    <div className="text-white/60 text-xs">Température: 22°C</div>
                    <div className="text-white/60 text-xs">Énergie: -18%</div>
                    <div className="text-white/60 text-xs">Sécurité: Actif</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Radiating Lines with Icons */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 400">
              {/* Line to Énergie (top-left) */}
              <motion.line
                x1="300"
                y1="200"
                x2="100"
                y2="80"
                stroke="#efd555"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1, delay: 0.2 }}
              />
              {/* Line to Sécurité (top-right) */}
              <motion.line
                x1="300"
                y1="200"
                x2="500"
                y2="80"
                stroke="#efd555"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1, delay: 0.3 }}
              />
              {/* Line to Confort (bottom-left) */}
              <motion.line
                x1="300"
                y1="200"
                x2="100"
                y2="320"
                stroke="#efd555"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1, delay: 0.4 }}
              />
              {/* Line to Réseau (bottom-right) */}
              <motion.line
                x1="300"
                y1="200"
                x2="500"
                y2="320"
                stroke="#efd555"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1, delay: 0.5 }}
              />

              {/* Pulsing Circles at Icons */}
              {[
                { x: 100, y: 80, label: "Énergie" },
                { x: 500, y: 80, label: "Sécurité" },
                { x: 100, y: 320, label: "Confort" },
                { x: 500, y: 320, label: "Réseau" },
              ].map((pos, idx) => (
                <motion.circle
                  key={idx}
                  cx={pos.x}
                  cy={pos.y}
                  r="6"
                  fill="#efd555"
                  animate={{ r: [6, 10, 6] }}
                  transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                />
              ))}
            </svg>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2: BENTO GRID - SOLUTIONS INTÉGRÉES ── */}
      <section id="solutions" className="py-20 lg:py-32 bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-5xl font-black mb-16 text-balance"
            style={{ letterSpacing: "-0.02em" }}
          >
            Nos solutions intégrées
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 1: Sérénité & Vigilance (2 cols) */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 bg-gradient-to-br from-black to-gray-900 border border-gray-800 rounded-xl p-8 relative overflow-hidden group"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-yellow-400 to-transparent transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-black mb-2">Sérénité & Vigilance</h3>
                    <p className="text-sm text-gray-400 mb-4">La sécurité qui anticipe.</p>
                  </div>
                  <span className="px-3 py-1 bg-yellow-400 text-black text-xs font-bold rounded-none">Statut: Actif</span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  Protection périmétrique avancée, accès biométrique, surveillance temps réel. Un système qui apprend vos habitudes et anticipe les menaces.
                </p>
                <div className="flex gap-2">
                  <Lock size={20} className="text-yellow-400" />
                  <AlertCircle size={20} className="text-yellow-400" />
                </div>
              </div>
            </motion.div>

            {/* Card 2: Efficacité Énergétique (1 col) */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8 flex flex-col justify-between"
            >
              <h3 className="text-xl font-black mb-6">Efficacité Énergétique</h3>
              <svg viewBox="0 0 200 100" className="mb-4 h-20 w-full">
                <motion.polyline
                  points="10,80 40,60 70,40 100,30 130,35 160,25 190,35"
                  fill="none"
                  stroke="#efd555"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1 }}
                />
              </svg>
              <p className="text-xs text-gray-400">Réduction de consommation: -18%</p>
            </motion.div>

            {/* Card 3: L'Art de l'Ambiance (1 col) */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8"
            >
              <h3 className="text-xl font-black mb-4">L'Art de l'Ambiance</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Zap size={16} className="text-yellow-400" />
                  <span className="text-sm">Éclairage biodynamique</span>
                </div>
                <div className="flex items-center gap-2">
                  <Volume2 size={16} className="text-yellow-400" />
                  <span className="text-sm">Audio multi-room</span>
                </div>
              </div>
            </motion.div>

            {/* Card 4: Infrastructure Invisible (2 cols) */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8"
            >
              <h3 className="text-2xl font-black mb-4">Infrastructure Invisible</h3>
              <p className="text-sm text-gray-300 mb-4">Le système nerveux qui ne flanche jamais.</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Wifi size={16} className="text-yellow-400" />
                  <span className="text-sm">Wi-Fi 7 haute performance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wifi size={16} className="text-yellow-400" />
                  <span className="text-sm">Câblage Grade 3 structuré</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: INTEROPÉRABILITÉ ── */}
      <section id="interoperabilite" className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-black text-black mb-6 text-balance" style={{ letterSpacing: "-0.02em" }}>
              Un langage universel
            </h2>
            <p className="text-lg text-black/70 max-w-2xl">
              Domotus unifie les standards ouverts : KNX, Matter, Control4 et Zigbee. Pas d'enfermement technologique. Votre système évolue avec la technologie.
            </p>
          </motion.div>

          {/* Marquee de Logos */}
          <div className="relative overflow-hidden py-12">
            <motion.div
              animate={{ x: ["0%", "-100%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex gap-16 whitespace-nowrap"
            >
              {["Daikin", "Sonos", "Somfy", "Philips Hue", "Lutron", "Daikin", "Sonos", "Somfy"].map((brand, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center px-6 py-4 text-black/40 font-bold hover:text-yellow-400 transition-colors cursor-pointer text-nowrap"
                >
                  {brand}
                </div>
              ))}
            </motion.div>
          </div>

          {/* SEO Hidden Text */}
          <div className="sr-only">
            Protocoles supportés: Matter, KNX, BacNet, Modbus, Zigbee, Z-Wave. Intégrations: Daikin, Sonos, Somfy, Philips Hue, Lutron, Control4.
          </div>
        </div>
      </section>

      {/* ── SECTION 4: ÉVOLUTIVITÉ ── */}
      <section id="evolutivite" className="py-20 lg:py-32 bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-5xl font-black mb-16 text-balance"
            style={{ letterSpacing: "-0.02em" }}
          >
            Évolutivité: construit pour durer
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { step: "01", title: "Fondation", desc: "L'infrastructure câblée robuste et extensible" },
              { step: "02", title: "Expansion", desc: "Ajout de modules sans travaux, intégration progressive" },
              { step: "03", title: "Futur", desc: "IA native et autoconsommation intégrée" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative"
              >
                <div className="text-6xl font-black text-white/5 mb-4">{item.step}</div>
                <h3 className="text-2xl font-black mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="bg-black text-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-black mb-8 text-balance"
            style={{ letterSpacing: "-0.02em" }}
          >
            Prêt pour la mutation ?
          </motion.h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Découvrez comment Domotus OS transforme votre résidence en un écosystème intelligent et unifié.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-yellow-400 text-black font-black uppercase rounded-none hover:bg-yellow-300 transition-all"
          >
            Consulter un expert <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
