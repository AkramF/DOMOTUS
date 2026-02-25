"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowRight, Lock, Mail, AlertCircle } from "lucide-react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    // Placeholder — integrate auth here
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setError("Identifiants incorrects. Vérifiez votre email ou contactez Domotus.");
  }

  const inputBase =
    "w-full bg-transparent border-b border-white/15 py-3.5 pr-10 text-[14px] text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors duration-300";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-7" noValidate>
      {/* Email */}
      <div className="relative">
        <label htmlFor="email" className="sr-only">Adresse e-mail</label>
        <Mail
          size={14}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-foreground/25"
          aria-hidden="true"
        />
        <input
          id="email"
          type="email"
          autoComplete="email"
          required
          placeholder="votre@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputBase}
        />
      </div>

      {/* Password */}
      <div className="relative">
        <label htmlFor="password" className="sr-only">Mot de passe</label>
        <button
          type="button"
          onClick={() => setShowPassword((v) => !v)}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-foreground/25 hover:text-foreground transition-colors"
          aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
        >
          {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
        </button>
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          autoComplete="current-password"
          required
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={inputBase}
        />
      </div>

      {/* Error */}
      {error && (
        <div className="flex items-start gap-3 border border-red-500/20 bg-red-500/5 px-4 py-3" role="alert">
          <AlertCircle size={14} className="text-red-400 mt-0.5 shrink-0" aria-hidden="true" />
          <p className="text-[12px] text-red-400 leading-relaxed">{error}</p>
        </div>
      )}

      {/* Forgot password */}
      <div className="flex justify-end -mt-3">
        <Link
          href="/contact"
          className="text-[11px] uppercase tracking-[0.15em] text-foreground/35 hover:text-primary transition-colors duration-300"
        >
          Mot de passe oublié ?
        </Link>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading || !email || !password}
        className="focus-ring inline-flex items-center justify-center gap-3 bg-primary py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85 disabled:opacity-40 disabled:cursor-not-allowed"
        style={{ color: "#0a0a0a" }}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 border border-current border-t-transparent rounded-full animate-spin" />
            Connexion…
          </span>
        ) : (
          <>
            Accéder à mon espace <ArrowRight size={13} aria-hidden="true" />
          </>
        )}
      </button>

      {/* No account */}
      <p className="text-center text-[12px] text-foreground/30">
        Pas encore client ?{" "}
        <Link href="/contact" className="text-primary hover:text-primary/75 transition-colors duration-300 font-semibold">
          Demander un devis
        </Link>
      </p>
    </form>
  );
}
