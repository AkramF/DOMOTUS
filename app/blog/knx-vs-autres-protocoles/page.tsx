import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "KNX vs Autres Protocoles — Quel Standard Choisir ? | Domotus Blog",
  description:
    "Comparatif KNX, Zigbee, Matter, Crestron. Découvrez pourquoi KNX reste le standard domotique #1 pour 20+ ans de garantie.",
  alternates: { canonical: "https://www.domotus.ma/blog/knx-vs-autres-protocoles" },
  openGraph: {
    title: "KNX vs Autres Protocoles — Quel Standard Choisir ?",
    description: "Guide complet : KNX, Zigbee, Matter, Crestron. Investissement pérenne.",
    url: "https://www.domotus.ma/blog/knx-vs-autres-protocoles",
    images: [{ url: "https://www.domotus.ma/images/og-domotus.jpg", width: 1200, height: 630 }],
  },
};

const article = {
  title: "KNX vs Autres Protocoles Domotiques — Quel Standard Choisir ?",
  slug: "knx-vs-autres-protocoles",
  excerpt: "KNX vs Zigbee vs Matter vs Crestron. Comparatif détaillé pour villas de prestige et bâtiments tertiaires.",
  author: "Équipe Domotus",
  publishedAt: "15 Mars 2024",
  readTime: "8 min",
  image: "/images/hero-bg.jpg",
  category: "Protocoles",
  audience: ["B2C", "B2B2C"],
};

export default function BlogArticleKNX() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 lg:px-10 overflow-hidden">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <span className="inline-block px-3 py-1.5 bg-primary/10 text-primary text-xs uppercase tracking-wider font-semibold rounded-full mb-6">
              {article.category}
            </span>
            <h1 className="text-5xl lg:text-6xl font-black uppercase leading-tight text-balance mb-6">
              {article.title}
            </h1>
            <p className="text-xl text-foreground/60 leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          {/* Article meta */}
          <div className="flex flex-wrap gap-6 text-sm text-foreground/50 mb-8">
            <div className="flex items-center gap-2">
              <User size={14} />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={14} />
              <span>{article.publishedAt}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} />
              <span>{article.readTime} de lecture</span>
            </div>
          </div>

          {/* Audience badges */}
          <div className="flex gap-2 flex-wrap">
            {article.audience.map((aud) => (
              <span key={aud} className="px-2 py-1 bg-white/5 text-foreground/60 text-xs uppercase font-medium border border-white/10 rounded">
                {aud}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Article content */}
      <section className="px-6 lg:px-10 py-20">
        <article className="mx-auto max-w-3xl prose prose-invert space-y-8">
          <div className="space-y-8 text-foreground/80 leading-relaxed">
            {/* Section 1 */}
            <section>
              <h2 className="text-3xl font-bold uppercase tracking-wide mb-4 text-foreground">
                1. Introduction : L'importance du bon choix
              </h2>
              <p>
                Votre décision de protocole domotique aujourd'hui détermine votre liberté technologique pour les 15-20 prochaines années. 
                Choisir un standard fermé, c'est accepter une dépendance fournisseur. Choisir KNX, c'est investir dans l'indépendance.
              </p>
              <p>
                Chez Domotus, nous avons intégré 150+ projets avec 500+ marques différentes via KNX. 
                Voici pourquoi ce protocole reste incontournable.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-3xl font-bold uppercase tracking-wide mb-4 text-foreground">
                2. KNX : Le Standard Ouvert Indépendant
              </h2>
              <div className="bg-white/5 border border-primary/30 p-6 rounded-lg my-6">
                <h3 className="font-bold text-lg mb-3">✓ Avantages KNX</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>500+ fabricants certificatifs</strong> garantissent compatibilité totale</li>
                  <li>• <strong>Indépendance fournisseur</strong> sur 20-25 ans minimum</li>
                  <li>• <strong>Interopérabilité garantie</strong> entre tous les appareils KNX</li>
                  <li>• <strong>Standard ISO/IEC certifié</strong> reconnu mondialement</li>
                  <li>• <strong>Support SAV pérenne</strong> : même dans 15 ans, trouver du service</li>
                </ul>
              </div>
              <p>
                <strong>Cas d'usage :</strong> Villas prestige, immeubles résidentiels collectifs, bâtiments tertiaires stables.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-3xl font-bold uppercase tracking-wide mb-4 text-foreground">
                3. Matter : La Promesse IoT Grand Public
              </h2>
              <div className="bg-white/5 border border-blue-500/30 p-6 rounded-lg my-6">
                <h3 className="font-bold text-lg mb-3">⚡ Matter (2024+)</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Jeune :</strong> lancé en 2023, immaturité certifiée</li>
                  <li>• <strong>Consumer-focused :</strong> smartphones, enceintes, ampoules</li>
                  <li>• <strong>Pas de supervision 24/7</strong> intégrée</li>
                  <li>• <strong>Risque fournisseur :</strong> cloud-dépendant (Google, Apple)</li>
                  <li>• <strong>Bon pour :</strong> complément domotique légère</li>
                </ul>
              </div>
              <p>
                <strong>Verdict :</strong> Matter brille sur l'IoT grand public, mais reste fragile pour domotique professionnelle.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-3xl font-bold uppercase tracking-wide mb-4 text-foreground">
                4. Zigbee & Z-Wave : Les Wireless Limités
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
                  <h3 className="font-bold mb-3">Zigbee</h3>
                  <ul className="space-y-2 text-xs">
                    <li>✓ Économique</li>
                    <li>✓ Sans fil natif</li>
                    <li>✗ Limité à ~128 appareils</li>
                    <li>✗ Pas de fiabilité industrielle</li>
                  </ul>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
                  <h3 className="font-bold mb-3">Z-Wave</h3>
                  <ul className="space-y-2 text-xs">
                    <li>✓ Simpler pour petits projets</li>
                    <li>✓ Bon marché 2nd main</li>
                    <li>✗ Faible adoption (2% marché)</li>
                    <li>✗ Fabricant unique Silicon Labs</li>
                  </ul>
                </div>
              </div>
              <p>
                <strong>Cas d'usage :</strong> Petits appartements, retrofitting limité. Jamais pour bâtiment tertiaire.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-3xl font-bold uppercase tracking-wide mb-4 text-foreground">
                5. Crestron & Lutron : Les Écosystèmes Fermés Premium
              </h2>
              <div className="bg-white/5 border border-orange-500/30 p-6 rounded-lg my-6">
                <h3 className="font-bold text-lg mb-3">Crestron & Lutron</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Excellente qualité</strong> pour contrôle audio-vidéo et éclairage</li>
                  <li>• <strong>SAV premium</strong> garanti</li>
                  <li>• <strong>BUT : Écosystème fermé</strong> — dépendance fournisseur 100%</li>
                  <li>• <strong>Intégration multi-marques</strong> : très complexe et coûteuse</li>
                </ul>
              </div>
              <p>
                <strong>Verdict :</strong> Parfaits pour secteurs spécifiques (hôtellerie, home theater), mais limités vs KNX pour domotique globale.
              </p>
            </section>

            {/* Section 6 : Tableau comparatif */}
            <section>
              <h2 className="text-3xl font-bold uppercase tracking-wide mb-4 text-foreground">
                6. Tableau Comparatif Synthétique
              </h2>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-white/5 border-b border-white/10">
                      <th className="text-left p-3 font-bold">Critère</th>
                      <th className="text-center p-3 font-bold">KNX</th>
                      <th className="text-center p-3 font-bold">Matter</th>
                      <th className="text-center p-3 font-bold">Zigbee</th>
                      <th className="text-center p-3 font-bold">Crestron</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs">
                    <tr className="border-b border-white/10 hover:bg-white/5">
                      <td className="p-3 font-medium">Indépendance</td>
                      <td className="p-3 text-center text-primary">★★★★★</td>
                      <td className="p-3 text-center text-orange-400">★★☆☆☆</td>
                      <td className="p-3 text-center text-orange-400">★★☆☆☆</td>
                      <td className="p-3 text-center text-red-400">★☆☆☆☆</td>
                    </tr>
                    <tr className="border-b border-white/10 hover:bg-white/5">
                      <td className="p-3 font-medium">Scalabilité</td>
                      <td className="p-3 text-center text-primary">★★★★★</td>
                      <td className="p-3 text-center text-yellow-400">★★★☆☆</td>
                      <td className="p-3 text-center text-orange-400">★★☆☆☆</td>
                      <td className="p-3 text-center text-yellow-400">★★★☆☆</td>
                    </tr>
                    <tr className="border-b border-white/10 hover:bg-white/5">
                      <td className="p-3 font-medium">Fiabilité 24/7</td>
                      <td className="p-3 text-center text-primary">★★★★★</td>
                      <td className="p-3 text-center text-orange-400">★★☆☆☆</td>
                      <td className="p-3 text-center text-orange-400">★★☆☆☆</td>
                      <td className="p-3 text-center text-yellow-400">★★★★☆</td>
                    </tr>
                    <tr className="border-b border-white/10 hover:bg-white/5">
                      <td className="p-3 font-medium">Coût installation</td>
                      <td className="p-3 text-center">★★★☆☆</td>
                      <td className="p-3 text-center text-primary">★★★★★</td>
                      <td className="p-3 text-center text-primary">★★★★★</td>
                      <td className="p-3 text-center text-orange-400">★★☆☆☆</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 7 : Recommandations */}
            <section>
              <h2 className="text-3xl font-bold uppercase tracking-wide mb-4 text-foreground">
                7. Nos Recommandations Domotus
              </h2>
              <div className="space-y-4">
                <div className="bg-primary/10 border border-primary/30 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">🏠 Villa de prestige (B2C)</h3>
                  <p className="text-sm">
                    <strong>KNX certifié + Crestron/Lutron pour AV</strong>. 
                    Investissement: 40-80k€. Valeur patrimoniale +15-25% garantie.
                  </p>
                </div>
                <div className="bg-primary/10 border border-primary/30 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">🏢 Immeuble collectif (B2B2C)</h3>
                  <p className="text-sm">
                    <strong>KNX systématique + BMS centralisé</strong>. 
                    Valorisation programme +18%, taux vente +25%.
                  </p>
                </div>
                <div className="bg-primary/10 border border-primary/30 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">🏭 Bureau/Tertiaire (B2B)</h3>
                  <p className="text-sm">
                    <strong>KNX + Supervision 24/7 + Maintenance prédictive</strong>. 
                    Économies énergétiques +25%, ROI 2-3 ans.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="mt-16 pt-8 border-t border-white/10">
              <h2 className="text-3xl font-bold uppercase tracking-wide mb-6 text-foreground">
                Prêt à choisir ?
              </h2>
              <p className="mb-6">
                Chez Domotus, nous vous conseillons sur le protocole optimal pour votre projet, 
                indépendamment de nos préférences. Audit technique gratuit.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:bg-primary/85"
                style={{ color: "#0a0a0a" }}
              >
                Demander un audit gratuit
                <ArrowRight size={16} />
              </Link>
            </section>
          </div>
        </article>
      </section>

      {/* Related articles */}
      <section className="px-6 lg:px-10 py-20 bg-white/5 border-t border-white/10">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold uppercase tracking-wide mb-12">Articles similaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/blog" className="group focus-ring">
              <div className="bg-background border border-white/10 p-6 hover:border-primary transition-colors duration-300">
                <span className="text-xs uppercase tracking-wider font-semibold text-primary">Protocoles</span>
                <h3 className="text-lg font-bold mt-2 group-hover:text-primary transition-colors">
                  KNX Certification Maroc
                </h3>
                <p className="text-sm text-foreground/60 mt-2">Comment nous respectons les standards KNX.</p>
              </div>
            </Link>
            <Link href="/blog" className="group focus-ring">
              <div className="bg-background border border-white/10 p-6 hover:border-primary transition-colors duration-300">
                <span className="text-xs uppercase tracking-wider font-semibold text-primary">Bâtiment</span>
                <h3 className="text-lg font-bold mt-2 group-hover:text-primary transition-colors">
                  BMS Supervision 24/7
                </h3>
                <p className="text-sm text-foreground/60 mt-2">Maintenance prédictive et économies énergétiques.</p>
              </div>
            </Link>
            <Link href="/blog" className="group focus-ring">
              <div className="bg-background border border-white/10 p-6 hover:border-primary transition-colors duration-300">
                <span className="text-xs uppercase tracking-wider font-semibold text-primary">Rénovation</span>
                <h3 className="text-lg font-bold mt-2 group-hover:text-primary transition-colors">
                  Retrofit Wireless
                </h3>
                <p className="text-sm text-foreground/60 mt-2">Ajouter domotique sans passer les fils.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
