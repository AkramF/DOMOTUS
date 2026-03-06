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
  if (!imageData?.url) {
    return '/placeholder.jpg';
  }

  const url = imageData.url;

  if (url.startsWith('http')) {
    return url;
  }

  return `${API_BASE_URL}${url}`;
}

function renderContent(blocks: ArticleBlock[] | undefined) {
  if (!blocks || !Array.isArray(blocks)) {
    return null;
  }

  return blocks.map((block, idx) => {
    const text = block.children?.[0]?.text || '';

    switch (block.type) {
      case 'heading':
        const level = (block.level as number) || 2;
        const HeadingTag = `h${Math.min(level + 1, 6)}` as keyof JSX.IntrinsicElements;
        return (
          <HeadingTag
            key={idx}
            className={`font-bold my-6 ${
              level === 1
                ? 'text-3xl'
                : level === 2
                  ? 'text-2xl'
                  : 'text-xl'
            } text-foreground`}
          >
            {text}
          </HeadingTag>
        );

      case 'paragraph':
        return (
          <p key={idx} className="text-[15px] text-foreground/70 leading-relaxed my-4">
            {text}
          </p>
        );

      case 'list':
        return (
          <ul key={idx} className="list-disc list-inside my-4 text-[15px] text-foreground/70 space-y-2">
            {Array.isArray(block.children) && block.children.map((item, i) => (
              <li key={i}>{item.text}</li>
            ))}
          </ul>
        );

      case 'quote':
        return (
          <blockquote
            key={idx}
            className="border-l-4 border-primary pl-6 my-6 italic text-foreground/60"
          >
            {text}
          </blockquote>
        );

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

        console.log('[v0] Fetching article from:', url);

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Erreur API: ${response.status}`);
        }

        const data: ApiResponse = await response.json();
        console.log('[v0] Article data:', data);

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

      <article className="min-h-screen bg-background">
        {/* ── HEADER WITH BACK BUTTON ── */}
        <div className="bg-background border-b border-white/8">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 py-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              Retour au blog
            </Link>

            {/* ── ARTICLE META ── */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              {article.Tag && (
                <span className="text-xs uppercase tracking-widest font-bold bg-primary/10 text-primary px-3 py-1 rounded">
                  {article.Tag}
                </span>
              )}
              <div className="flex items-center gap-2 text-sm text-foreground/60">
                <Calendar size={16} />
                <time dateTime={article.publishedAt}>
                  {formatDateFrench(article.publishedAt)}
                </time>
              </div>
            </div>

            {/* ── TITLE ── */}
            <h1 className="font-black text-4xl lg:text-5xl text-foreground text-balance leading-tight mb-6">
              {article.Titre}
            </h1>

            {/* ── DESCRIPTION ── */}
            <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl">
              {article.Description_SEO}
            </p>
          </div>
        </div>

        {/* ── HERO IMAGE ── */}
        {article.Image_Principale && (
          <div className="relative w-full h-96 lg:h-[500px] overflow-hidden">
            <Image
              src={getImageUrl(article.Image_Principale)}
              alt={article.Titre}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        )}

        {/* ── CONTENT ── */}
        <div className="mx-auto max-w-3xl px-6 lg:px-10 py-20">
          <div className="prose prose-invert max-w-none">
            {article.Contenu && article.Contenu.length > 0 ? (
              renderContent(article.Contenu)
            ) : (
              <p className="text-foreground/60 italic">Contenu indisponible pour cet article.</p>
            )}
          </div>
        </div>

        {/* ── CTA BACK TO BLOG ── */}
        <div className="border-t border-white/8 bg-background/50 backdrop-blur">
          <div className="mx-auto max-w-3xl px-6 lg:px-10 py-16 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-6">Découvrez nos autres articles</h2>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-background font-semibold rounded-full hover:shadow-lg transition-shadow"
            >
              Retour au blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
