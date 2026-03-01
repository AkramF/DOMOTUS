import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Devis — Domotique Maroc | Domotus",
  description:
    "Contactez Domotus pour audit technique gratuit. Devis personnalisé en 48h. Casablanca, Marrakech, Rabat, Tanger.",
  alternates: { canonical: "https://www.domotus.ma/contact" },
  openGraph: {
    title: "Contact & Devis — Domotique | Domotus Maroc",
    description: "Audit gratuit. Devis en 48h. 7j/7 disponible.",
    url: "https://www.domotus.ma/contact",
    images: [
      {
        url: "https://www.domotus.ma/images/og-domotus.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Domotus - Intégrateur domotique",
      },
    ],
  },
};

const guarantees = [
  "Etude personnalisée",
  "Audit technique et sans engagement",
  "Devis détaillé remis en 48h",
  "Interlocuteur unique de la conception à la livraison",
];

const directContacts = [
  {
    icon: Phone,
    label: "Appel direct",
    value: "+212 663 66 66 27",
    href: "tel:+212663666627",
    note: "Lun–Ven 9h–18h",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@domotus.ma",
    href: "mailto:contact@domotus.ma",
    note: "Etude personnalisée",
  },
  {
    icon: MapPin,
    label: "Casablanca",
    value: "Bd Abdelmoumen, Racine",
    href: "https://maps.google.com",
    note: "Sur rendez-vous",
  },
  {
    icon: Clock,
    label: "Marrakech",
    value: "Route de l'Ourika, Km 5",
    href: "https://maps.google.com",
    note: "Sur rendez-vous",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-36 pb-16 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-8 h-px bg-foreground/30" aria-hidden="true" />
            <p className="text-[11px] uppercase tracking-[0.35em] text-primary font-semibold">Contactez-nous</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
          <h1
            className="font-black uppercase leading-none text-foreground text-balance"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.03em" }}
          >
            Parlons de<br />
            <span className="italic text-foreground/50">votre projet.</span>
          </h1>
          <p className="mt-6 text-[15px] text-foreground/55 leading-relaxed max-w-md">
            Remplissez le formulaire ou contactez-nous directement. Un expert Domotus revient vers vous
            sous 24h pour un audit gratuit et sans engagement.
          </p>
          
          {/* ── SEO CONTENT ── */}
          <div className="mt-10 pt-10 border-t border-white/10 max-w-md">
            <h2 className="font-bold text-[13px] uppercase tracking-widest text-primary mb-4">Pourquoi nous contacter ?</h2>
            <p className="text-[13px] text-foreground/55 leading-relaxed mb-4">
              Domotus est l'intégrateur domotique certifié multi-protocoles de référence au Maroc. Depuis plus de 18 ans, nous accompagnons propriétaires, architectes, promoteurs et gestionnaires de bâtiments dans leur transformation digitale.
            </p>
            <p className="text-[13px] text-foreground/55 leading-relaxed mb-4">
              Notre expertise couvre KNX, Crestron, Lutron, Matter, Zigbee et Ubiquiti. Nous conçois des solutions sur-mesure qui maximisent le confort, l'efficacité énergétique (-22% facture) et la valorisation immobilière (+15% valeur).
            </p>
            <p className="text-[13px] text-foreground/55 leading-relaxed">
              Contactez-nous pour une étude gratuite, un audit technique personnalisé ou une consultation en domotique pour votre projet au Maroc.
            </p>
          </div>
        </div>
            {/* Guarantees — trust signals above the form */}
            <ul className="flex flex-col gap-3">
              {guarantees.map((g) => (
                <li key={g} className="flex items-center gap-3 text-[13px] text-foreground/60">
                  <CheckCircle2 size={14} className="text-primary shrink-0" aria-hidden="true" />
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="h-px bg-white/8" />

      {/* ── FORM + CONTACTS ── */}
      <section className="py-20 bg-background" aria-label="Formulaire de contact et coordonnées">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[1fr_400px] gap-16 items-start">

          {/* Form — main conversion island */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-foreground/40 mb-8">
              01 — Votre demande
            </p>
            <ContactForm />
          </div>

          {/* Direct contacts — sidebar */}
          <aside aria-label="Contacts directs et adresses">
            <p className="text-[11px] uppercase tracking-[0.25em] text-foreground/40 mb-8">
              02 — Nous joindre directement
            </p>
            <div className="flex flex-col gap-px bg-white/8">
              {directContacts.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group bg-background hover:bg-card transition-colors duration-300 p-6 flex items-start gap-4"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <div className="w-9 h-9 border border-white/15 group-hover:border-primary/40 flex items-center justify-center text-primary shrink-0 transition-colors duration-300">
                      <Icon size={15} aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 mb-0.5">{item.label}</p>
                      <p className="text-[14px] font-semibold text-foreground group-hover:text-primary transition-colors duration-300 truncate">
                        {item.value}
                      </p>
                      <p className="text-[11px] text-foreground/35 mt-0.5">{item.note}</p>
                    </div>
                    <ArrowRight size={13} className="text-foreground/20 group-hover:text-primary transition-colors duration-300 shrink-0 mt-1" aria-hidden="true" />
                  </a>
                );
              })}
            </div>

            {/* Certifications */}
            <div className="mt-8 p-6 border border-white/8">
              <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/35 mb-4">Certifications partenaires</p>
              <div className="flex flex-wrap gap-2">
                {["KNX Certified", "Ubiquiti Elite", "Lutron Auth.", "Aqara Partner", "Somfy Pro"].map((c) => (
                  <span key={c} className="text-[10px] uppercase tracking-[0.12em] text-primary/70 border border-primary/20 px-2.5 py-1">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
