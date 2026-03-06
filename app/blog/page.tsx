'use client';

import { useState, useEffect } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import NewsletterForm from "@/components/sections/NewsletterForm";

// Note: Metadata export must be in a separate file for client components
// See metadata export below in the non-client part

// Strapi 5 - Structure aplatie (flattened)
interface Article {
  documentId: string;
  Titre: string;
  Description_SEO: string;
  Slug: string;
  Image_Principale: {
    url: string;
    formats?: {
      small?: { url: string };
      medium?: { url: string };
    };
  };
  publishedAt: string;
  Tag?: string;
  Featured?: boolean;
}

interface ApiResponse {
  data: Article[];
}

const API_BASE_URL = "https://thoughtful-amusement-037aae48eb.strapiapp.com";
const API_ENDPOINT = `${API_BASE_URL}/api/articles?populate=*`;

function formatDateFrench(dateString: string): string {
  const date = new Date(dateString);
  const formatter = new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return formatter.format(date);
}

function getImageUrl(imageData: { url?: string } | undefined): string {
  // Strapi 5 retourne déjà des URLs absolues (https://...)
  return imageData?.url || "/placeholder.jpg";
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-5">
      <span className="block w-8 h-px bg-foreground/30" aria-hidden="true" />
      <p className="text-[11px] uppercase tracking-[0.3em] text-primary font-semibold">{children}</p>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="h-96 bg-card rounded-lg" />
      <div className="h-8 bg-card rounded w-3/4" />
      <div className="h-4 bg-card rounded w-full" />
      <div className="h-4 bg-card rounded w-1/2" />
    </div>
  );
}

export default function BlogPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_ENDPOINT);
        if (!response.ok) {
          throw new Error(`Erreur API: ${response.status}`);
        }
        const data: ApiResponse = await response.json();
        console.log("[v0] Articles data:", data);
        setArticles(data.data || []);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Erreur inconnue";
        setError(errorMessage);
        console.error("[v0] Erreur fetch articles:", errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Safely get featured article (Strapi 5 structure)
  const featured = articles.length > 0 
    ? (articles.find((a) => a.Featured) || articles[0])
    : null;
  const rest = articles.filter((a) => a !== featured);

  return (
    <>
      {/* ── HEADER ── */}
      <header className="pt-40 pb-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel>Blog Domotus Maroc</SectionLabel>
          <h1
            className="font-black uppercase leading-none text-foreground text-balance max-w-2xl"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", letterSpacing: "-0.03em" }}
          >
            Guides &amp;<br />
            <span className="italic text-foreground/50">Actualités.</span>
          </h1>
          <p className="mt-6 text-[15px] text-foreground/50 leading-relaxed max-w-xl">
            Guides techniques, retours de projets et tendances domotique par l&apos;intégrateur certifié multi-protocoles de référence au Maroc.
          </p>

          {/* ── BLOG DESCRIPTION ── */}
          <div className="mt-16 max-w-2xl">
            <p className="text-[14px] text-foreground/60 leading-relaxed mb-6">
              Explorez les dernières tendances en domotique et bâtiments intelligents. Nos articles couvrent KNX, Matter, Zigbee, Crestron et Lutron — les protocoles qui transforment maisons et bâtiments modernes.
            </p>
            <p className="text-[14px] text-foreground/60 leading-relaxed">
              Que vous soyez propriétaire de villa, architecte ou promoteur immobilier, découvrez comment optimiser confort, efficacité énergétique et valorisation immobilière au Maroc.
            </p>
          </div>
        </div>
      </header>

      {/* ── LOADING / ERROR STATE ── */}
      {loading && (
        <section className="pb-4 bg-background" aria-label="Chargement">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <LoadingSkeleton />
          </div>
        </section>
      )}

      {error && (
        <section className="py-16 bg-background" aria-label="Erreur">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
            <p className="text-foreground/60 mb-4">Erreur de chargement des articles</p>
            <p className="text-foreground/40 text-sm">{error}</p>
          </div>
        </section>
      )}

      {/* ── NO ARTICLES ── */}
      {!loading && !error && articles.length === 0 && (
        <section className="py-24 bg-background" aria-label="Bientôt">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="font-black uppercase text-foreground mb-3" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>
              Bientôt disponible
            </h2>
            <p className="text-[14px] text-foreground/50 leading-relaxed">
              Nos articles arrivent très bientôt. Inscrivez-vous à la newsletter pour ne rien manquer.
            </p>
          </div>
        </section>
      )}

      {/* ── FEATURED ── */}
      {!loading && !error && featured && (
        <section className="pb-4 bg-background" aria-label="Article à la une">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Link
              href={`/blog/${featured.Slug}`}
              className="focus-ring group relative flex flex-col lg:flex-row overflow-hidden bg-card border border-white/8 hover:border-primary/30 transition-colors duration-500"
            >
              <div className="relative lg:w-1/2 aspect-video lg:aspect-auto overflow-hidden">
                <Image
                  src={getImageUrl(featured.Image_Principale)}
                  alt={`Article à la une : ${featured.Titre}`}
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
                  <span className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold">
                    {featured.Tag || "Article"}
                  </span>
                  <time className="text-[11px] text-foreground/40" dateTime={featured.publishedAt}>
                    {formatDateFrench(featured.publishedAt)}
                  </time>
                </div>
                <h2
                  className="font-black uppercase leading-tight text-foreground text-balance mb-6"
                  style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", letterSpacing: "-0.02em" }}
                >
                  {featured.Titre}
                </h2>
                <p className="text-[14px] text-foreground/55 leading-relaxed mb-8">{featured.Description_SEO}</p>
                <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-primary/70 group-hover:text-primary transition-colors duration-300 font-semibold">
                  Lire l&apos;article <ArrowRight size={12} aria-hidden="true" />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ── GRID ── */}
      {!loading && !error && rest.length > 0 && (
        <section className="py-16 bg-background" aria-label="Tous les articles">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/8">
              {rest.map((article, i) => (
                <article key={article.documentId}>
                  <Link
                    href={`/blog/${article.Slug}`}
                    className="focus-ring group flex flex-col h-full bg-background hover:bg-card transition-colors duration-300"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={getImageUrl(article.Image_Principale)}
                        alt={article.Titre}
                        fill
                        loading={i < 2 ? "eager" : "lazy"}
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-background/50" />
                    </div>
                    <div className="p-6 flex flex-col gap-3 flex-1">
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] uppercase tracking-[0.15em] text-primary font-semibold">
                          {article.Tag || "Article"}
                        </span>
                        <time className="text-[11px] text-foreground/35" dateTime={article.publishedAt}>
                          {formatDateFrench(article.publishedAt)}
                        </time>
                      </div>
                      <h2 className="font-bold uppercase tracking-tight text-foreground text-sm leading-snug text-balance">
                        {article.Titre}
                      </h2>
                      <p className="text-[13px] text-foreground/50 leading-relaxed line-clamp-2 mt-auto">
                        {article.Description_SEO}
                      </p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

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
