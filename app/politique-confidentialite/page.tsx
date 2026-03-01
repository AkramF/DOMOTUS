import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité — Domotus Maroc",
  description: "Politique de confidentialité et protection des données personnelles de Domotus.",
  alternates: { canonical: "https://www.domotus.ma/politique-confidentialite" },
  robots: { index: true, follow: true },
};

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl lg:text-5xl font-black uppercase leading-tight mb-6">
            Politique de
            <br />
            <span className="text-foreground/50 italic">confidentialité</span>
          </h1>
          <p className="text-foreground/60 text-lg leading-relaxed">
            Nous protégeons vos données personnelles. Consultez notre politique complète.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12 text-foreground/80 leading-relaxed">
          {/* 1. Introduction */}
          <section>
            <h2 className="text-2xl font-bold uppercase tracking-wide mb-4 text-foreground">
              1. Introduction
            </h2>
            <p>
              Domotus est attentif à la protection de vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations.
            </p>
          </section>

          {/* 2. Données collectées */}
          <section>
            <h2 className="text-2xl font-bold uppercase tracking-wide mb-4 text-foreground">
              2. Données collectées
            </h2>
            <p className="mb-4">Nous collectons les données suivantes :</p>
            <ul className="space-y-2 ml-6">
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span><strong>Identité :</strong> nom, prénom, email, téléphone</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span><strong>Professionnelles :</strong> entreprise, poste, secteur d'activité</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span><strong>Navigation :</strong> adresse IP, type de navigateur, pages visitées</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span><strong>Demandes :</strong> devis, contact, demandes d'information</span>
              </li>
            </ul>
          </section>

          {/* 3. Utilisation des données */}
          <section>
            <h2 className="text-2xl font-bold uppercase tracking-wide mb-4 text-foreground">
              3. Utilisation des données
            </h2>
            <p className="mb-4">Vos données sont utilisées pour :</p>
            <ul className="space-y-2 ml-6">
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Répondre à vos demandes de contact et devis</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Améliorer nos services et votre expérience utilisateur</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Envoyer des communications (newsletters, mises à jour) avec votre consentement</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Analyser et optimiser nos services</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Respecter nos obligations légales</span>
              </li>
            </ul>
          </section>

          {/* 4. Partage des données */}
          <section>
            <h2 className="text-2xl font-bold uppercase tracking-wide mb-4 text-foreground">
              4. Partage des données
            </h2>
            <p>
              Nous ne partageons pas vos données personnelles avec des tiers sans votre consentement, sauf :
            </p>
            <ul className="space-y-2 ml-6 mt-4">
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Avec nos partenaires techniques (hébergeur, prestataires essentiels)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Lorsque la loi l'exige</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Pour protéger nos droits ou votre sécurité</span>
              </li>
            </ul>
          </section>

          {/* 5. Durée de conservation */}
          <section>
            <h2 className="text-2xl font-bold uppercase tracking-wide mb-4 text-foreground">
              5. Durée de conservation
            </h2>
            <p>
              Vos données personnelles sont conservées aussi longtemps que nécessaire pour répondre à vos demandes et respecter nos obligations légales (généralement 3 à 7 ans).
            </p>
          </section>

          {/* 6. Sécurité */}
          <section>
            <h2 className="text-2xl font-bold uppercase tracking-wide mb-4 text-foreground">
              6. Sécurité
            </h2>
            <p>
              Nous mettons en place des mesures de sécurité techniques et organisationnelles pour protéger vos données contre l'accès non autorisé, la modification ou la suppression. Cependant, aucun système n'est 100% sécurisé.
            </p>
          </section>

          {/* 7. Droits RGPD */}
          <section>
            <h2 className="text-2xl font-bold uppercase tracking-wide mb-4 text-foreground">
              7. Vos droits
            </h2>
            <p className="mb-4">Vous avez le droit de :</p>
            <ul className="space-y-2 ml-6">
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span><strong>Accès :</strong> demander une copie de vos données</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span><strong>Rectification :</strong> corriger vos données inexactes</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span><strong>Suppression :</strong> demander la suppression de vos données</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span><strong>Portabilité :</strong> recevoir vos données dans un format structuré</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span><strong>Opposition :</strong> refuser le traitement à des fins marketing</span>
              </li>
            </ul>
            <p className="mt-6">
              Pour exercer ces droits, contactez-nous à : <strong>contact@domotus.ma</strong>
            </p>
          </section>

          {/* 8. Cookies */}
          <section>
            <h2 className="text-2xl font-bold uppercase tracking-wide mb-4 text-foreground">
              8. Cookies
            </h2>
            <p>
              Notre site utilise des cookies pour améliorer votre expérience. Vous pouvez désactiver les cookies dans vos paramètres de navigateur, mais cela peut affecter la fonctionnalité du site.
            </p>
          </section>

          {/* 9. Analytics */}
          <section>
            <h2 className="text-2xl font-bold uppercase tracking-wide mb-4 text-foreground">
              9. Google Analytics
            </h2>
            <p>
              Nous utilisons Google Analytics pour analyser l'utilisation du site. Google Analytics collecte des données anonymes sur votre navigation. Consultez la politique de confidentialité de Google pour plus d'informations.
            </p>
          </section>

          {/* 10. Modifications */}
          <section>
            <h2 className="text-2xl font-bold uppercase tracking-wide mb-4 text-foreground">
              10. Modifications de cette politique
            </h2>
            <p>
              Nous pouvons modifier cette politique de confidentialité à tout moment. Les modifications seront affichées sur cette page avec la date de dernière mise à jour.
            </p>
          </section>

          {/* 11. Contact */}
          <section>
            <h2 className="text-2xl font-bold uppercase tracking-wide mb-4 text-foreground">
              11. Contact
            </h2>
            <p>
              Pour toute question concernant cette politique de confidentialité ou la protection de vos données :
            </p>
            <div className="mt-4 p-6 bg-white/5 border border-white/10 space-y-2 text-sm">
              <p><strong>Email :</strong> contact@domotus.ma</p>
              <p><strong>Téléphone :</strong> +212 663 666 627</p>
              <p><strong>Adresse :</strong> Casablanca, Maroc</p>
            </div>
          </section>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-sm text-foreground/50">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
