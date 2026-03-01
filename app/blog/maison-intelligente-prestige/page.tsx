import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Zap, Leaf, Lock, Music, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Maison Intelligente Prestige — Confort & Efficacité | Domotus",
  description:
    "Villa intelligente KNX : éclairage adaptatif, efficacité énergétique -22%, sécurité 24/7. Domotus intégrateur certifié Maroc.",
  alternates: { canonical: "https://www.domotus.ma/blog/maison-intelligente-prestige" },
  openGraph: {
    title: "Maison Intelligente — Confort, Efficacité, Sécurité | Domotus",
    description: "Villas prestige équipées KNX certifié : domotique invisible, économies énergétiques, contrôle total.",
    url: "https://www.domotus.ma/blog/maison-intelligente-prestige",
    images: [{ url: "https://www.domotus.ma/images/villa-prestige.webp", width: 1200, height: 630 }],
  },
};

export default function BlogArticleMaisonPrestige() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 lg:px-10 overflow-hidden">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <span className="inline-block px-3 py-1.5 bg-primary/10 text-primary text-xs uppercase tracking-wider font-semibold rounded-full mb-6">
              B2C | Maison Prestige
            </span>
            <h1 className="text-5xl lg:text-6xl font-black uppercase leading-tight text-balance mb-6">
              La Maison Intelligente
              <br />
              <span className="text-primary">qui s'efface</span>
            </h1>
            <p className="text-xl text-foreground/60 leading-relaxed">
              Domotique KNX certifiée : confort invisible, efficacité énergétique réelle, sécurité 24/7 et liberté technologique garantie.
            </p>
          </div>

          {/* Visual features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg border border-white/10">
              <Zap className="text-primary shrink-0" size={20} />
              <span className="text-sm font-semibold">-22% consommation</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg border border-white/10">
              <Leaf className="text-primary shrink-0" size={20} />
              <span className="text-sm font-semibold">Éco-responsable</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg border border-white/10">
              <Lock className="text-primary shrink-0" size={20} />
              <span className="text-sm font-semibold">Sécurité 24/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article content */}
      <section className="px-6 lg:px-10 py-20">
        <article className="mx-auto max-w-3xl space-y-8 text-foreground/80 leading-relaxed">
          
          <section>
            <h2 className="text-3xl font-bold uppercase tracking-wide mb-4 text-foreground">
              Imaginez : Vous Rentrez Chez Vous
            </h2>
            <p>
              Il est 18h. Vous arrivez à votre villa de Marrakech. Avant même de franchir la porte :
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="text-primary">→</span>
                <span>L'éclairage de l'entrée s'allume progressivement, adaptant sa température de couleur à l'heure du jour</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">→</span>
                <span>La climatisation a activé une température de 21°C 15 minutes plus tôt (prédiction de votre trajet)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">→</span>
                <span>La musique ambient de votre playlist jazz préférée résonne discrètement aux niveaux appropriés</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">→</span>
                <span>L'alarme se désactive automatiquement en reconnaissant votre présence</span>
              </li>
            </ul>
            <p className="mt-6">
              <strong>Tout cela sans rien faire. Zéro appui sur bouton, zéro app à ouvrir.</strong>
            </p>
            <p className="mt-4 text-foreground/60 italic">
              Bienvenue dans le confort invisible : la vraie domotique KNX.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold uppercase tracking-wide mb-4 text-foreground">
              1. L'Éclairage Adaptatif : Votre Rythme Circadien
            </h2>
            
            <p>
              L'éclairage traditionnel fatigue vos yeux et dérègle votre sommeil. KNX intègre des capteurs de lumière naturelle 
              et d'occupation pour adapter l'éclairage en temps réel.
            </p>

            <div className="bg-white/5 border border-primary/30 p-6 rounded-lg my-6 space-y-4">
              <h3 className="font-bold text-foreground">🌅 Matin (6h-9h)</h3>
              <p className="text-sm">
                Lumière progressivement plus chaude et intense. Température couleur: 3000K → 2700K.
                <br/>
                Effets : réveil naturel, vigilance optimale, cortisol naturellement élevé.
              </p>

              <h3 className="font-bold text-foreground mt-4">☀️ Jour (9h-18h)</h3>
              <p className="text-sm">
                Compensation de la lumière naturelle extérieure. Maintien 4500K-5000K.
                <br/>
                Effets : productivité maximale, économies énergétiques (capteurs de présence).
              </p>

              <h3 className="font-bold text-foreground mt-4">🌆 Soir (18h-22h)</h3>
              <p className="text-sm">
                Transition progressive vers lumière chaude (2200K-2700K). Intensité réduite 40-60%.
                <br/>
                Effets : mélatonine naturellement sécrétée, sommeil de qualité dès 23h.
              </p>

              <h3 className="font-bold text-foreground mt-4">🌙 Nuit (22h-6h)</h3>
              <p className="text-sm">
                Minimal : 5-10% intensité maximum si besoin. Lumière rougeâtre (1800K) pour préserver sommeil.
                <br/>
                Effets : sommeil profond non-perturbé.
              </p>
            </div>

            <p className="text-sm text-foreground/60 italic">
              Résultat : meilleur sommeil, vigilance accrue, économies d'électricité 30-40%.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold uppercase tracking-wide mb-4 text-foreground">
              2. Efficacité Énergétique : -22% Dès Mois 1
            </h2>
            
            <div className="space-y-4">
              <div className="bg-white/5 p-6 border-l-4 border-primary rounded">
                <h3 className="font-bold mb-2">🌡️ Gestion Thermique Intelligente</h3>
                <p className="text-sm">
                  Zones différenciées par pièce. Température adaptée au taux d'occupation et météo en temps réel.
                  <br/>
                  <strong>Économies : +15-20% facture chauffage</strong>
                </p>
              </div>

              <div className="bg-white/5 p-6 border-l-4 border-primary rounded">
                <h3 className="font-bold mb-2">💡 Gestion Éclairage Automatisée</h3>
                <p className="text-sm">
                  Capteurs de présence et luminosité. Allumage pièce par pièce, extinction automatic après 20 min inactivité.
                  <br/>
                  <strong>Économies : +30-40% facture lumière</strong>
                </p>
              </div>

              <div className="bg-white/5 p-6 border-l-4 border-primary rounded">
                <h3 className="font-bold mb-2">⚙️ Optimisation Électroménager</h3>
                <p className="text-sm">
                  Programmation lave-vaisselle/machine à laver hors-pointe (tarif réduit 2h-6h).
                  <br/>
                  <strong>Économies : +5-8% facture globale</strong>
                </p>
              </div>

              <div className="bg-primary/20 border border-primary/50 p-6 rounded-lg mt-6">
                <p className="font-bold text-lg">
                  🎯 Total : -22% facture électrique mensuelle
                </p>
                <p className="text-sm mt-2">
                  Pour villa prestige (6000 kWh/an typique) : <strong>économies 1,650 MAD/mois = 19,800 MAD/an</strong>
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold uppercase tracking-wide mb-4 text-foreground">
              3. Sécurité Intégrée : Vigilance 24/7
            </h2>
            
            <p>
              Domotique KNX = sécurité invisible. Pas de caméra intrusive, pas d'alarme criarde, mais vigilance maximale.
            </p>

            <div className="space-y-3 mt-6">
              <p><strong>Accès biométrique</strong> - Entrées déverrouillées par empreinte, reconnaissance faciale, digicode. Logs horodatés.</p>
              <p><strong>Vidéosurveillance 4K IA</strong> - Détection anomalies (intrusion, présence non-attendue). Alertes instantanées téléphone.</p>
              <p><strong>Détecteurs mouvement + capteurs infrarouge</strong> - Couverture périmétrique extérieur 24/7.</p>
              <p><strong>Alarme silencieuse</strong> - Alertes discrètes propriétaire + centre de supervision. Pas de siren bruyante attirant cambrioleurs.</p>
              <p><strong>Verrouillage d'urgence</strong> - Fermeture instantanée de tous les accès en cas détection intrusion.</p>
            </div>

            <p className="text-sm text-foreground/60 italic mt-6">
              Les assurances valorisent cette approche : primes réduites -15-25% sur contrats multirisques.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold uppercase tracking-wide mb-4 text-foreground">
              4. Confort Audio-Vidéo Invisible
            </h2>
            
            <div className="bg-white/5 border border-white/10 p-6 rounded-lg space-y-4">
              <h3 className="font-bold flex items-center gap-2">
                <Music size={20} className="text-primary" />
                Musique Multi-Zone
              </h3>
              <p className="text-sm">
                Distribution Sonos synchronisée : musique différente par pièce, ou symphonie cohésive dans toute la villa.
                <br/>
                <strong>Détail :</strong> volume adapte automatiquement si vous vous déplacez d'une zone à l'autre.
              </p>

              <h3 className="font-bold flex items-center gap-2 mt-6">
                🎬 Cinéma Privé
              </h3>
              <p className="text-sm">
                Home cinéma Dolby Atmos 7.1.4 : immersion totale. Intégration 4K laser auto-shutter.
                <br/>
                Éclairage assombri automatiquement. Volets fermés sans bruit. Téléphone muet pendant film.
              </p>

              <h3 className="font-bold flex items-center gap-2 mt-6">
                📱 Contrôle Centralisé
              </h3>
              <p className="text-sm">
                Une app sur téléphone : tous les éclairages, volumes, température, volets, caméras en une interface intuitive.
                <br/>
                Scènes prédéfinies : "Soirée cinéma", "Mode travail", "Sommeil", "Vacances".
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold uppercase tracking-wide mb-4 text-foreground">
              5. L'Avantage KNX vs Écosystèmes Fermés
            </h2>
            
            <div className="space-y-3 text-sm">
              <p>
                <strong>Crestron / Lutron / Matter</strong> : excellents, mais vous enferme chez un seul fabricant.
                <br/>
                Remplacer un capteur? Oblig d'acheter du même fabricant (30-50% plus cher). Après 10 ans = pièces rares = SAV impossible.
              </p>
              
              <p>
                <strong>KNX certifié</strong> : liberté totale. Remplacer un module? Choix entre 500+ fabricants certifiés à prix concurrentiel.
                <br/>
                Même dans 20 ans, pièces disponibles. SAV garanti car standard ISO/IEC mondialement reconnu.
              </p>

              <p>
                <strong>Votre villa = investissement patrimonial</strong>. KNX = garantie que votre domotique vieillit gracieusement, 
                pas qu'elle devient obsolète et coûteuse.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold uppercase tracking-wide mb-4 text-foreground">
              6. Valorisation Patrimoniale Immédiate
            </h2>
            
            <p>
              Étude prix-m² : villas prestige avec domotique KNX certifiée se vendent <strong>15-25% plus cher</strong>.
            </p>
            
            <div className="bg-primary/20 border border-primary/50 p-6 rounded-lg mt-6 space-y-4">
              <p>
                <strong>Villa prestige Marrakech (500m², 4 chambres)</strong>
              </p>
              <p>
                Valeur marché SANS domotique: 50M MAD
              </p>
              <p>
                Avec domotique KNX standard: 55M MAD (+10%)
              </p>
              <p className="text-primary font-bold text-lg">
                Avec domotique KNX premium (Crestron AV + Lutron lumière): 60M MAD (+20%)
              </p>
              <p className="text-sm text-foreground/60">
                = +10M MAD valorisation pour 1.5-2M MAD investi
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 pt-8 border-t border-white/10">
            <h2 className="text-3xl font-bold uppercase tracking-wide mb-6 text-foreground">
              Transformer Votre Villa en Maison Intelligente
            </h2>
            <p className="mb-8">
              Audit gratuit : analyser votre villa, proposer scénarios domotique, chiffrer économies énergétiques et valorisation patrimoniale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact?type=maison"
                className="inline-flex items-center gap-3 bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:bg-primary/85"
                style={{ color: "#0a0a0a" }}
              >
                Demander audit gratuit
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/expertises"
                className="inline-flex items-center gap-3 border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-wider text-foreground/60 hover:border-primary hover:text-primary transition-all duration-300"
              >
                Explorer nos expertises
              </Link>
            </div>
          </section>
        </article>
      </section>
    </main>
  );
}
