import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2, Globe } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Devis — Domotique Maroc | Domotus",
  description:
    "Contactez Domotus pour audit technique gratuit. Devis personnalisé en 48h. Rabat, couverture nationale du Maroc.",
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
    label: "Rabat",
    value: "2 place Aboubaker Essadiq - Agdal",
    href: "https://maps.google.com",
    note: "Sur rendez-vous",
  },
  {
    icon: Globe,
    label: "Zone intervention",
    value: "Ensemble territoire Marocain",
    href: "https://maps.google.com",
    note: "Couverture nationale",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── CONTACT SECTION ── */}
      <section className="min-h-screen pt-32 pb-20 bg-white" aria-labelledby="contact-heading">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
            
            {/* LEFT: Info + CTA */}
            <div className="flex flex-col justify-start lg:col-span-1">
              {/* Label */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 bg-black" aria-hidden="true" />
                <p className="text-xs uppercase tracking-[0.3em] font-bold text-black">Contact</p>
              </div>

              {/* Title */}
              <h1
                id="contact-heading"
                className="font-black text-black text-balance"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
              >
                Parlons de votre projet
              </h1>

              {/* Subtitle */}
              <p className="mt-4 text-base text-gray-600">Partagez votre vision avec nous.</p>

              {/* Contact Cards */}
              <div className="mt-16 space-y-8">
                {directContacts.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="group flex items-start gap-4"
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {/* Icon Circle */}
                      <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon size={20} className="text-white" aria-hidden="true" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <p className="font-bold text-black text-lg group-hover:text-gray-700 transition-colors">{item.label}</p>
                        <p className="text-sm text-gray-600 mt-1">{item.value}</p>
                        {item.note && <p className="text-xs text-gray-500 mt-1">{item.note}</p>}
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* RIGHT: Form — Wider */}
            <div className="rounded-3xl bg-gray-50 p-10 lg:p-12 lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
