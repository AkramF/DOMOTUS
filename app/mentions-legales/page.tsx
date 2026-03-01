import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales — Domotus Maroc",
  description: "Mentions légales et informations juridiques de Domotus, intégrateur domotique certifié au Maroc.",
  alternates: { canonical: "https://www.domotus.ma/mentions-legales" },
  robots: { index: true, follow: true },
};

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl lg:text-5xl font-black uppercase leading-tight mb-6">
            Mentions
            <br />
            <span className="text-foreground/50 italic">légales</span>
          </h1>
          <p className="text-foreground/60 text-lg leading-relaxed">
            Informations juridiques et responsabilités légales de Domotus.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12 text-foreground/80 leading-relaxed">
          {/* 1. Éditeur du site */}
          <section>
            <h2 className="text-2xl font-bold uppercase tracking-wide mb-4 text-foreground">
              1. Éditeur du site
            </h2>
            <p>
              Le site <strong>www.domotus.ma</strong> est édité par :
            </p>
            <div className="mt-4 p-6 bg-white/5 border border-white/10 space-y-2 text-sm">
              <p><strong>Nom :</strong> Domotus</p>
              <p><strong>Adresse :</strong> Casablanca, Maroc</p>
              <p><strong>Téléphone :</strong> +212 663 666 627</p>
              <p><strong>Email :</strong> contact@domotus.ma</p>
              <p><strong>Activité :</strong> Intégrateur domotique certifié multi-protocoles</p>
            </div>
          </section>

          {/* 2. Propriété intellectuelle */}
          <section>
            <h2 className="text-2xl font-bold uppercase tracking-wide mb-4 text-foreground">
              2. Propriété intellectuelle
            </h2>
            <p>
              Tous les contenus du site (textes, images, vidéos, logos, icônes, code source, etc.) sont la propriété exclusive de Domotus ou de ses partenaires et sont protégés par les lois relatives à la propriété intellectuelle.
            </p>
            <p className="mt-4">
              Toute reproduction, adaptation, modification ou utilisation sans autorisation préalable écrite est strictement interdite.
            </p>
          </section>

          {/* 3. Limitation de responsabilité */}
          <section>
            <h2 className="text-2xl font-bold uppercase tracking-wide mb-4 text-foreground">
              3. Limitation de responsabilité
            </h2>
            <p>
              Domotus s'efforce de fournir des informations précises et à jour sur son site. Cependant, Domotus ne peut garantir l'exactitude, l'exhaustivité ou l'absence d'erreurs.
            </p>
            <p className="mt-4">
              En aucun cas, Domotus ne sera responsable des dommages directs ou indirects résultant de l'accès ou de l'utilisation du site.
            </p>
          </section>

          {/* 4. Liens externes */}
          <section>
            <h2 className="text-2xl font-bold uppercase tracking-wide mb-4 text-foreground">
              4. Liens externes
            </h2>
            <p>
              Le site peut contenir des liens vers des sites tiers. Domotus ne peut être tenu responsable du contenu, de la disponibilité ou des pratiques de confidentialité de ces sites externes.
            </p>
          </section>

          {/* 5. Hébergement */}
          <section>
            <h2 className="text-2xl font-bold uppercase tracking-wide mb-4 text-foreground">
              5. Hébergement
            </h2>
            <div className="p-6 bg-white/5 border border-white/10 space-y-2 text-sm">
              <p><strong>Hébergeur :</strong> Vercel</p>
              <p><strong>Adresse :</strong> 340 S Lemon Ave, Walnut, CA 91789</p>
              <p><strong>Site :</strong> vercel.com</p>
            </div>
          </section>

          {/* 6. Cookies */}
          <section>
            <h2 className="text-2xl font-bold uppercase tracking-wide mb-4 text-foreground">
              6. Cookies et données de navigation
            </h2>
            <p>
              Le site utilise des cookies et outils d'analytics (Google Analytics) pour améliorer votre expérience. Vous pouvez contrôler les cookies via les paramètres de votre navigateur.
            </p>
          </section>

          {/* 7. Conformité légale */}
          <section>
            <h2 className="text-2xl font-bold uppercase tracking-wide mb-4 text-foreground">
              7. Conformité légale
            </h2>
            <p>
              Ce site est conforme à la législation marocaine en matière de droit de l'information et du commerce électronique.
            </p>
          </section>

          {/* 8. Contact */}
          <section>
            <h2 className="text-2xl font-bold uppercase tracking-wide mb-4 text-foreground">
              8. Contact
            </h2>
            <p>
              Pour toute question concernant ces mentions légales, veuillez nous contacter à : <strong>contact@domotus.ma</strong>
            </p>
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
