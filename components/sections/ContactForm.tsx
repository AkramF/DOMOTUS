"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const inputClass =
  "w-full bg-transparent border-b border-white/20 py-3 text-[14px] text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors duration-300";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    type: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-white/15 p-10 text-center">
        <p className="font-black uppercase text-foreground text-2xl tracking-tight mb-4">
          Message envoyé.
        </p>
        <p className="text-foreground/50 text-[14px]">
          Nous vous recontactons sous 24h ouvrées.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate>
      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="nom" className="sr-only">Nom complet</label>
          <input id="nom" name="nom" type="text" required placeholder="Nom complet"
            value={form.nom} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">Email</label>
          <input id="email" name="email" type="email" required placeholder="Email"
            value={form.email} onChange={handleChange} className={inputClass} />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="telephone" className="sr-only">Téléphone</label>
          <input id="telephone" name="telephone" type="tel" placeholder="Téléphone"
            value={form.telephone} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label htmlFor="type" className="sr-only">Type de projet</label>
          <select id="type" name="type" value={form.type} onChange={handleChange}
            className={`${inputClass} cursor-pointer`}>
            <option value="" disabled>Type de projet</option>
            <option value="residentiel">Villa / Appartement</option>
            <option value="promoteur">Programme promoteur</option>
            <option value="tertiaire">Bâtiment tertiaire</option>
            <option value="autre">Autre</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea id="message" name="message" rows={5} required
          placeholder="Décrivez votre projet..."
          value={form.message} onChange={handleChange}
          className={`${inputClass} resize-none`} />
      </div>
      <button type="submit"
        className="focus-ring self-start inline-flex items-center gap-3 bg-foreground px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-background hover:opacity-80 transition-opacity group">
        Envoyer le message
        <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  );
}
