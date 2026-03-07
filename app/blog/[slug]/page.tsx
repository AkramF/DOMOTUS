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
  OG_Image?: {
    url: string;
  };
  OG_Description?: string;
  Meta_Title?: string;
  RS_Copywriting?: string;
  Contenu?: ArticleBlock[];
  publishedAt: string;
  Tag?: string;
  Auteur_Nom?: string;
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
        
        const headingStyles = {
          1: 'text-4xl lg:text-5xl',
          2: 'text-3xl lg:text-4xl',
          3: 'text-2xl lg:text-3xl',
          4: 'text-xl lg:text-2xl',
          5: 'text-lg lg:text-xl',
          6: 'text-base lg:text-lg',
        };

        return (
          <HeadingTag
            key={idx}
            className={`font-sans font-black mt-10 mb-5 text-foreground text-balance leading-tight ${
              headingStyles[Math.min(level, 6) as keyof typeof headingStyles]
            }`}
            style={{ letterSpacing: '-0.02em' }}
          >
            {text}
          </HeadingTag>
        );
      }

      case 'paragraph': {
        const text = block.children?.[0]?.text || '';
        if (!text.trim()) return null;
        
        const isExpertBox = text.includes("L'avis de l'expert") || text.includes('avis expert');
        const isVerdict = text.includes('Verdict Domotus');

        if (isExpertBox) {
          return (
            <div
              key={idx}
              className="my-8 p-6 lg:p-8 bg-primary/5 border border-primary/30 rounded-2xl"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary text-background font-bold text-sm">
                    💡
                  </span>
                </div>
                <div>
                  <p className="font-sans text-[15px] text-foreground/75 leading-relaxed font-normal">
                    {text}
                  </p>
                </div>
              </div>
            </div>
          );
        }

        if (isVerdict) {
          return (
            <div
              key={idx}
              className="my-8 p-6 lg:p-8 bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-primary rounded-xl"
            >
              <h3 className="font-sans font-bold text-primary mb-3 text-lg">📋 Le Verdict Domotus</h3>
              <p className="font-sans text-[15px] text-foreground/70 leading-relaxed font-normal">
                {text.replace('Le Verdict Domotus', '').replace('Verdict Domotus', '').trim()}
              </p>
            </div>
          );
        }

        return (
          <p key={idx} className="font-sans text-[15px] text-foreground/65 leading-[1.75] my-4 font-normal">
            {text}
          </p>
        );
      }

      case 'list': {
        return (
          <ul key={idx} className="font-sans my-6 space-y-2.5 text-[15px] text-foreground/65">
            {Array.isArray(block.children) &&
              block.children.map((item, i) => (
                <li key={i} className="flex gap-3.5 leading-[1.75] pl-1">
                  <span className="text-primary font-bold flex-shrink-0 pt-0.5">•</span>
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
            className="font-sans my-8 px-6 py-5 bg-white/5 border-l-4 border-primary italic text-foreground/55 rounded-r-lg font-light text-[15px] leading-[1.75]"
          >
            &ldquo;{text}&rdquo;
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
        <div className="mx-auto max-w-3xl px-6 lg:px-10 pt-12 lg:pt-16 pb-16 lg:pb-20">
          <div className="space-y-0">
            {article.Contenu && article.Contenu.length > 0 ? (
              renderContent(article.Contenu)
            ) : (
              <p className="text-foreground/60 italic text-center py-16">Contenu indisponible pour cet article.</p>
            )}
          </div>
        </div>

        {/* ── SOCIAL SHARING ── */}
        <div className="border-t border-white/8 bg-background/50 backdrop-blur-sm">
          <div className="mx-auto max-w-3xl px-6 lg:px-10 py-12 lg:py-14">
            <div className="flex flex-col items-center gap-6">
              <div className="text-center">
                <p className="text-foreground/60 text-sm uppercase tracking-[0.1em] font-semibold mb-2">Partager cet article</p>
              </div>
              <div className="flex items-center gap-4 justify-center flex-wrap">
                {/* LinkedIn */}
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=https://www.domotus.ma/blog/${article.Slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-foreground/70 hover:text-primary transition-all rounded-full font-semibold text-sm"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  LinkedIn
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(article.RS_Copywriting || article.Titre + ' https://www.domotus.ma/blog/' + article.Slug)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-foreground/70 hover:text-primary transition-all rounded-full font-semibold text-sm"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.947 1.227l-.356.214-.369-.057-1.51-.239 1.578 1.514.261.26-.038.361a9.832 9.832 0 001.496 4.038l.19.297-.091.371-1.578 1.516 1.631-.264.406-.065.362.191a9.847 9.847 0 004.564 1.312h.004c5.428 0 9.865-4.437 9.865-9.865 0-2.632-1.023-5.1-2.88-6.957-1.857-1.857-4.325-2.88-6.985-2.88z" />
                  </svg>
                  WhatsApp
                </a>

                {/* Facebook */}
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://www.domotus.ma/blog/${article.Slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-foreground/70 hover:text-primary transition-all rounded-full font-semibold text-sm"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </a>
              </div>
              {article.RS_Copywriting && (
                <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg max-w-2xl">
                  <p className="text-sm text-foreground/70 italic">{article.RS_Copywriting}</p>
                </div>
              )}
            </div>
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
}
