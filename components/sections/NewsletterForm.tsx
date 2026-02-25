"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  }

  if (sent) {
    return (
      <p className="text-[14px] text-primary font-semibold tracking-wide">
        Merci — vous recevrez notre prochaine analyse.
      </p>
    );
  }

  return (
    <form
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      onSubmit={handleSubmit}
      aria-label="Inscription newsletter"
    >
      <label htmlFor="nl-email" className="sr-only">Adresse e-mail</label>
      <input
        id="nl-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="votre@email.com"
        className="flex-1 bg-card border border-white/12 px-4 py-3 text-[13px] text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors"
      />
      <button
        type="submit"
        className="focus-ring px-6 py-3 bg-primary text-[11px] font-black uppercase tracking-[0.18em] transition-all duration-300 hover:bg-primary/85 whitespace-nowrap"
        style={{ color: "#0a0a0a" }}
      >
        S&apos;abonner
      </button>
    </form>
  );
}
