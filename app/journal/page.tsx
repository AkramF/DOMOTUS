import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import NewsletterForm from "@/components/sections/NewsletterForm";

export const metadata: Metadata = {
  title: "Blog Domotique Maroc — Expertise KNX, Crestron, Lutron | Domotus",
  description:
    "Le blog Domotus : guides KNX, retours de projets, actualités domotique au Maroc (Casablanca, Marrakech, Rabat, Tanger). Protocoles, certifications, tendances smart home.",
  alternates: { canonical: "https://www.domotus.ma/blog" },
  openGraph: {
    title: "Blog Domotique Maroc — Expertise KNX, Crestron, Lutron | Domotus",
    description:
      "Guides, retours de projets et actualités domotique par l'intégrateur certifié KNX de référence au Maroc.",
    url: "https://www.domotus.ma/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Domotique Maroc | Domotus",
    description: "Guides KNX, retours projets et actualités domotique au Maroc.",
  },
};

// ── Schema.org BlogPosting list ──────────────────────────────────────────────
const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blog Domotus — Domotique premium au Maroc",
  description:
    "Guides, retours de projets et actualités domotique par Domotus, intégrateur certifié KNX au Maroc.",
  url: "https://www.domotus.ma/blog",
  publisher: {
    "@type": "Organization",
    name: "Domotus",
    url: "https://www.domotus.ma",
    logo: { "@type": "ImageObject", url: "https://www.domotus.ma/images/hero-bg.jpg" },
  },
};

const articles = [
  {
    slug: "knx-vs-matter-2026",
    tag: "Technologie",
    date: "Février 2026",
    title: "KNX vs Matter : quel protocole choisir en 2026 ?",
    excerpt: "Alors que Matter s'impose dans le grand public, KNX reste la référence absolue des installations professionnelles au Maroc. Analyse comparative.",
    image: "/images/hero-bg.jpg",
    featured: true,
  },
  {
    slug: "domotique-villa-casablanca",
    tag: "Réalisations",
    date: "Janvier 2026",
    title: "Villa Anfa, Casablanca : 1 100 m² pilotés en un geste",
    excerpt: "Retour sur l'intégration complète d'une villa d'exception — éclairage Lutron, sécurité Crestron, audio Sonos multi-zone à Casablanca.",
    image: "/images/villa-prestige.jpg",
    featured: false,
  },
  {
    slug: "r2s-certification-maroc",
    tag: "Label & Certification",
    date: "Décembre 2025",
    title: "Certification R2S : comment Domotus accompagne vos programmes au Maroc",
    excerpt: "Le label Ready to Services (R2S) devient un prérequis pour les investisseurs institutionnels. Notre méthode d'accompagnement au Maroc.",
    image: "/images/immeuble-tertiaire.jpg",
    featured: false,
  },
  {
    slug: "lutron-homeworks-qs",
    tag: "Technologie",
    date: "Novembre 2025",
    title: "Lutron Homeworks QSX : la gradation réinventée",
    excerpt: "Découverte des nouveautés de la plateforme Homeworks QSX et son intégration native avec Apple Home et Google Home.",
    image: "/images/showroom.jpg",
    featured: false,
  },
  {
    slug: "bms-tertiaire-efficacite-maroc",
    tag: "Tertiaire",
    date: "Octobre 2025",
    title: "BMS et efficacité énergétique : retour sur investissement au Maroc",
    excerpt: "Étude de cas sur trois immeubles tertiaires à Casablanca et Rabat — réduction des consommations de 22 % en 18 mois grâce à notre supervision BMS.",
    image: "/images/hero-tertiaire.jpg",
    featured: false,
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-5">
      <span className="block w-8 h-px bg-foreground/30" aria-hidden="true" />
      <p className="text-[11px] uppercase tracking-[0.3em] text-primary font-semibold">{children}</p>
    </div>
  );
}

export default function BlogPage() {
  const featured = articles.find((a) => a.featured)!;
  const rest = articles.filter((a) => !a.featured);

  return (
    <>
      {/* ── Schema.org ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* ── HEADER ── */}
      <header className="pt-40 pb-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel>Blog Domotus Maroc</SectionLabel>
          <h1
            className="font-black uppercase leading-none text-foreground text-balance max-w-2xl"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", letterSpacing: "-0.03em" }}
          >
            Expertise &amp;<br />
            <span className="italic text-foreground/50">Actualités.</span>
          </h1>
          <p className="mt-6 text-[15px] text-foreground/50 leading-relaxed max-w-xl">
            Guides techniques, retours de projets et tendances domotique par l&apos;intégrateur certifié KNX de référence au Maroc.
          </p>
        </div>
      </header>

      {/* ── FEATURED ── */}
      <section className="pb-4 bg-background" aria-label="Article à la une">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Link
            href={`/journal/${featured.slug}`}
            className="focus-ring group relative flex flex-col lg:flex-row overflow-hidden bg-card border border-white/8 hover:border-primary/30 transition-colors duration-500"
          >
            <div className="relative lg:w-1/2 aspect-video lg:aspect-auto overflow-hidden">
              <Image
                src={featured.image}
                alt={`Article à la une : ${featured.title}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/40" />
              <span className="absolute top-5 left-5 text-[10px] uppercase tracking-[0.25em] font-bold bg-primary px-3 py-1.5" style={{ color: "#0a0a0a" }}>
                A la une
              </span>
            </div>
            <div className="p-10 lg:p-14 lg:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold">{featured.tag}</span>
                <time className="text-[11px] text-foreground/40" dateTime="2026-02">{featured.date}</time>
              </div>
              <h2
                className="font-black uppercase leading-tight text-foreground text-balance mb-6"
                style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", letterSpacing: "-0.02em" }}
              >
                {featured.title}
              </h2>
              <p className="text-[14px] text-foreground/55 leading-relaxed mb-8">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-primary/70 group-hover:text-primary transition-colors duration-300 font-semibold">
                Lire l&apos;article <ArrowRight size={12} aria-hidden="true" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="py-16 bg-background" aria-label="Tous les articles">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/8">
            {rest.map((a, i) => (
              <article key={a.slug}>
                <Link
                  href={`/journal/${a.slug}`}
                  className="focus-ring group flex flex-col h-full bg-background hover:bg-card transition-colors duration-300"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={a.image}
                      alt={a.title}
                      fill
                      loading={i < 2 ? "eager" : "lazy"}
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-background/50" />
                  </div>
                  <div className="p-6 flex flex-col gap-3 flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] uppercase tracking-[0.15em] text-primary font-semibold">{a.tag}</span>
                      <time className="text-[11px] text-foreground/35">{a.date}</time>
                    </div>
                    <h2 className="font-bold uppercase tracking-tight text-foreground text-sm leading-snug text-balance">
                      {a.title}
                    </h2>
                    <p className="text-[13px] text-foreground/50 leading-relaxed line-clamp-2 mt-auto">
                      {a.excerpt}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER CTA ── */}
      <section className="py-24 bg-background border-t border-white/8" aria-label="Newsletter Domotus">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 border border-primary/30 mb-6">
            <Mail size={18} className="text-primary" aria-hidden="true" />
          </div>
          <h2 className="font-black uppercase text-foreground mb-3" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em" }}>
            Recevez nos analyses chaque mois
          </h2>
          <p className="text-[14px] text-foreground/50 leading-relaxed mb-8">
            Protocoles, certifications, retours de projets — l&apos;essentiel de la domotique professionnelle au Maroc directement dans votre boîte mail.
          </p>
          <NewsletterForm />
          <p className="mt-4 text-[11px] text-foreground/25">Aucun spam. Désabonnement en un clic.</p>
        </div>
      </section>
    </>
  );
}
