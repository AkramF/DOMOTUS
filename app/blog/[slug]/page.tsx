'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar } from 'lucide-react';

const API_BASE_URL = 'https://thoughtful-amusement-037aae48eb.strapiapp.com';

interface ArticleBlock {
  type: string;
  children?: { text: string }[];
  level?: number;
  [key: string]: unknown;
}

interface Article {
  documentId: string;
  Titre: string;
  Description_SEO: string;
  Slug: string;
  Image_Principale: {
    url: string;
  };
  Contenu?: ArticleBlock[];
  publishedAt: string;
  Tag?: string;
}

interface ApiResponse {
  data: Article[];
}

function formatDateFrench(dateString: string): string {
  const date = new Date(dateString);
  const formatter = new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return formatter.format(date);
}

function getImageUrl(imageData: { url?: string } | undefined): string {
  // Strapi 5 retourne déjà des URLs absolues (https://...)
  return imageData?.url || "/placeholder.jpg";
}

function renderContent(blocks: ArticleBlock[] | undefined) {
  if (!blocks || !Array.isArray(blocks)) {
    return null;
  }

  return blocks.map((block, idx) => {
    switch (block.type) {
      case 'heading': {
        const text = block.children?.[0]?.text || '';
        const level = (block.level as number) || 2;
        const HeadingTag = `h${Math.min(level + 1, 6)}` as keyof JSX.IntrinsicElements;
        return (
          <HeadingTag
            key={idx}
            className={`font-sans font-black mt-12 mb-6 text-foreground text-balance ${
              level === 1
                ? 'text-4xl'
                : level === 2
                  ? 'text-3xl'
                  : level === 3
                    ? 'text-2xl'
                    : 'text-xl'
            }`}
            style={{ letterSpacing: '-0.01em' }}
          >
            {text}
          </HeadingTag>
        );
      }

      case 'paragraph': {
        const text = block.children?.[0]?.text || '';
        if (!text.trim()) return null;
        return (
          <p key={idx} className="font-sans text-[16px] text-foreground/75 leading-relaxed my-6 font-normal">
            {text}
          </p>
        );
      }

      case 'list': {
        return (
          <ul key={idx} className="font-sans my-8 space-y-3 text-[16px] text-foreground/70">
            {Array.isArray(block.children) &&
              block.children.map((item, i) => (
                <li key={i} className="flex gap-4 leading-relaxed">
                  <span className="text-primary font-bold flex-shrink-0 pt-1">•</span>
                  <span className="font-normal">{item.text}</span>
                </li>
              ))}
          </ul>
        );
      }

      case 'quote': {
        const text = block.children?.[0]?.text || '';
        return (
          <blockquote
            key={idx}
            className="font-sans my-8 px-8 py-6 bg-primary/5 border-l-4 border-primary italic text-foreground/70 rounded-r-lg font-normal"
          >
            {text}
          </blockquote>
        );
      }

      default:
        return null;
    }
  });
}

export default function ArticlePage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const encodedSlug = encodeURIComponent(slug);
        const url = `${API_BASE_URL}/api/articles?filters[Slug][$eq]=${encodedSlug}&populate=*`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Erreur API: ${response.status}`);
        }

        const data: ApiResponse = await response.json();

        if (!data.data || data.data.length === 0) {
          setNotFound(true);
          return;
        }

        setArticle(data.data[0]);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
        console.error('[v0] Erreur fetch article:', errorMessage);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchArticle();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4" />
          <p className="text-foreground/60">Chargement de l&apos;article...</p>
        </div>
      </div>
    );
  }

  if (notFound || !article) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold text-foreground mb-4">404</h1>
          <p className="text-foreground/60 mb-8">Article non trouvé. Le slug "{slug}" ne correspond à aucun article dans notre base de données.</p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background font-semibold rounded-full hover:shadow-lg transition-shadow"
          >
            <ArrowLeft size={18} />
            Retour au blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* ── META DYNAMIQUE ── */}
      <head>
        <title>{article.Titre} | Domotus Blog</title>
        <meta name="description" content={article.Description_SEO} />
        <meta property="og:title" content={article.Titre} />
        <meta property="og:description" content={article.Description_SEO} />
        <meta property="og:image" content={getImageUrl(article.Image_Principale)} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={article.publishedAt} />
      </head>

      <article className="relative min-h-screen bg-background">
        {/* ── BACK BUTTON FIXED ── */}
        <Link
          href="/blog"
          className="fixed top-6 left-6 z-40 inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors group"
        >
          <div className="w-10 h-10 rounded-full border border-foreground/10 group-hover:border-primary/50 flex items-center justify-center transition-all">
            <ArrowLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
          </div>
        </Link>

        {/* ── HERO IMAGE ── */}
        {article.Image_Principale?.url && (
          <div className="relative w-full h-[400px] lg:h-[600px] overflow-hidden group">
            <Image
              src={getImageUrl(article.Image_Principale)}
              alt={article.Titre}
              fill
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="100vw"
            />
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
          </div>
        )}

        {/* ── ARTICLE HEADER ── */}
        <div className="relative -mt-20 lg:-mt-32 mx-auto max-w-4xl px-6 lg:px-10 pb-16">
          <div className="bg-background/95 backdrop-blur-md border border-white/10 rounded-2xl p-8 lg:p-12">
            {/* ── META ── */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              {article.Tag && (
                <span className="text-xs uppercase tracking-[0.2em] font-bold bg-primary text-background px-4 py-2 rounded-full">
                  {article.Tag}
                </span>
              )}
              <div className="flex items-center gap-2 text-sm text-foreground/50">
                <Calendar size={16} className="text-primary" />
                <time dateTime={article.publishedAt} className="font-medium">
                  {formatDateFrench(article.publishedAt)}
                </time>
              </div>
            </div>

            {/* ── TITLE ── */}
            <h1 className="font-black text-4xl lg:text-5xl text-foreground text-balance leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
              {article.Titre}
            </h1>

            {/* ── DESCRIPTION ── */}
            <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl font-medium">
              {article.Description_SEO}
            </p>
          </div>
        </div>

        {/* ── CONTENT ── */}
        <div className="mx-auto max-w-3xl px-6 lg:px-10 py-20 lg:py-32">
          <div className="space-y-8">
            {article.Contenu && article.Contenu.length > 0 ? (
              renderContent(article.Contenu)
            ) : (
              <p className="text-foreground/60 italic text-center py-16">Contenu indisponible pour cet article.</p>
            )}
          </div>
        </div>

        {/* ── CTA BACK TO BLOG ── */}
        <div className="border-t border-white/8 bg-background/50 backdrop-blur-sm">
          <div className="mx-auto max-w-3xl px-6 lg:px-10 py-20 text-center">
            <div className="mb-8">
              <p className="text-foreground/60 text-sm uppercase tracking-[0.1em] font-semibold mb-4">Continuer la lecture</p>
              <h2 className="text-3xl font-bold text-foreground mb-2">Explorez d&apos;autres articles</h2>
              <p className="text-foreground/50">Découvrez nos guides et actualités domotique</p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-background font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Retour au blog
              <ArrowLeft size={18} className="rotate-180" />
            </Link>
          </div>
        </div>
      </article>
    </>
  );
