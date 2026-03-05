import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import SectionLabel from "@/components/ui/section-label";
import MomentsInteractif from "@/components/MomentsInteractif";
import HeroMaisonConnectee from "@/components/HeroMaisonConnectee";
import Navbar from "@/components/sections/Navbar";
import SmartHomeSection from "@/components/SmartHomeSection";

export const metadata: Metadata = {
  title: "Maison Connectée — Domotique Multi-Protocoles | Domotus Maroc",
  description:
    "Maison connectée et intuitive. Domotique KNX, Crestron, Lutron pour villas et appartements de prestige au Maroc. Confort, sécurité, économies.",
  alternates: { canonical: "https://www.domotus.ma/maison-connectee" },
  openGraph: {
    title: "Maison Connectée — Domotique Multi-Protocoles | Domotus",
    description:
      "Villas connectées et intelligentes. KNX, Crestron, Lutron pour le confort et l'efficacité énergétique.",
    url: "https://www.domotus.ma/maison-connectee",
    images: [
      {
        url: "https://www.domotus.ma/images/villa-prestige.webp",
        width: 1200,
        height: 630,
        alt: "Villa connectée avec domotique KNX",
      },
    ],
  },
};

const realisations = [
  { title: "Villa Anfa, Casablanca", subtitle: "1 100 m² — KNX + Crestron", tag: "Résidentiel prestige", image: "/images/villa-prestige.jpg" },
  { title: "Penthouse Marrakech", subtitle: "680 m² — Lutron Homeworks", tag: "Appartement luxe", image: "/images/hero-bg.jpg" },
  { title: "Villa Tanger Golf", subtitle: "950 m² — KNX + Lutron", tag: "Villa haut de gamme", image: "/images/hero-residential.jpg" },
];

const benefices = [
  { num: "−22%", label: "sur la facture énergétique dès le 1er mois" },
  { num: "+18%", label: "de valeur immobilière après intégration" },
  { num: "100%", label: "contrôlable depuis votre smartphone" },
  { num: "15 ans", label: "de durabilité garantie sur les systèmes multi-protocoles" },
];

const modesVie = [
  {
    id: "reveil-serenite",
    num: "06:30",
    title: "Réveil Sérénité",
    description: "Une transition douce vers la lumière du jour pour un réveil naturel et apaisé.",
    action: "À l'heure programmée, les volets s'entrouvrent graduellement, le plancher chauffant de la salle de bain s'active doucement, et une playlist bienveillante accompagne votre premier moment de la journée.",
    image: "/images/mode-reveil.jpg",
    imageAlt: "Réveil Sérénité - Transition douce vers la lumière",
  },
  {
    id: "reception-royale",
    num: "19:00",
    title: "Réception Royale",
    description: "Transformez votre villa en mise en scène spectaculaire pour vos convives et événements.",
    action: "Un seul clic active l'éclairage architectural extérieur, l'illumination des cascades de la piscine, et crée une ambiance lumineuse intérieure 'Ambre chaud' qui met en valeur chaque détail de votre espace.",
    image: "/images/mode-reception.jpg",
    imageAlt: "Réception Royale - Mise en scène pour vos convives",
  },
  {
    id: "cinema-prive",
    num: "21:30",
    title: "Cinéma Privé",
    description: "L'immersion totale du septième art dans le confort absolu de votre salon.",
    action: "Les rideaux occultants se ferment avec élégance, les lumières s'éteignent en fondu progressif, et votre système audio haute-fidélité calibré prend le contrôle pour une expérience cinématographique incomparable.",
    image: "/images/mode-cinema.jpg",
    imageAlt: "Cinéma Privé - Immersion totale",
  },
  {
    id: "vigilance-totale",
    num: "23:00",
    title: "Vigilance Totale",
    description: "Le sentiment d'un cocon inviolable pour votre tranquillité d'esprit absolue.",
    action: "Fermeture centralisée de tous les accès, simulation de présence par l'éclairage intelligent et activation de la barrière périmétrique invisible pour une sécurité maximale et discrète.",
    image: "/images/mode-vigilance.jpg",
    imageAlt: "Vigilance Totale - Cocon inviolable",
  },
];

const etapes = [
  { num: "01", title: "Audit & Immersion", desc: "Nous analysons vos plans et vos habitudes pour une conception sur-mesure. Une visite dédiée en 48h pour comprendre votre vision." },
  { num: "02", title: "Architecture Invisible", desc: "Nos ingénieurs co-conçoivent avec votre architecte pour intégrer la technologie dans le bâti, sans jamais la montrer." },
  { num: "03", title: "Installation Signature", desc: "Un déploiement rigoureux sur les standards mondiaux (KNX, Crestron, Lutron). Précision d'orfèvre, respect des délais." },
  { num: "04", title: "Accompagnement Privilège", desc: "Formation personnalisée, documentation complète et SAV sous 4h. Votre système évolue avec vous, à jamais." },
];

const espaces = [
  {
    title: "Salon",
    manifeste: "L'espace de vie principal, confortable et modulable, connecté à tous vos services.",
    angle: "Un salon qui s'adapte à votre rythme de vie, pour recevoir ou vous détendre, sans effort.",
    features: [
      "Éclairage scénarisé selon activité et ambiance",
      "Contrôle audio/vidéo centralisé",
      "Stores et volets automatisés",
    ],
    image: "/images/espace-salon.jpg",
  },
  {
    title: "Cuisine",
    manifeste: "Le cœur fonctionnel de la maison, optimisé pour confort et sécurité.",
    angle: "Une cuisine qui anticipe vos besoins et assure sécurité et efficacité.",
    features: [
      "Pilotage des appareils électroménagers",
      "Éclairage adapté aux zones de préparation",
      "Détection fuite d'eau ou gaz",
    ],
    image: "/images/espace-cuisine.jpg",
  },
  {
    title: "Chambre",
    manifeste: "Des espaces de repos personnalisés, connectés à votre rythme.",
    angle: "Chaque chambre devient un cocon sur-mesure.",
    features: [
      "Éclairage doux pour réveil et sommeil",
      "Contrôle température et ventilation",
      "Volets automatisés",
    ],
    image: "/images/espace-chambre.jpg",
  },
  {
    title: "Salle de Bain",
    manifeste: "Bien-être et confort, connectés à votre mode de vie.",
    angle: "Transformez votre salle de bain en expérience spa haut de gamme.",
    features: [
      "Contrôle de l'éclairage et température de l'eau",
      "Gestion humidité et ventilation",
      "Diffusion sonore ambiante",
    ],
    image: "/images/espace-salle-bain.jpg",
  },
  {
    title: "Bureau",
    manifeste: "Un espace professionnel, intégré à votre maison, sans compromis sur le confort.",
    angle: "Productivité et sérénité dans un environnement parfaitement contrôlé.",
    features: [
      "Gestion lumière adaptée au travail",
      "Pilotage appareils et écran centralisé",
      "Contrôle de la confidentialité",
    ],
    image: "/images/espace-bureau.jpg",
  },
  {
    title: "Jardin & Terrasse",
    manifeste: "L'extérieur, aussi connecté que l'intérieur.",
    angle: "Profitez d'un extérieur toujours prêt, sécurisé et esthétiquement mis en valeur.",
    features: [
      "Arrosage automatique piloté selon météo",
      "Éclairage extérieur scénarisé",
      "Détection intrusion et surveillance",
    ],
    image: "/images/espace-jardin.jpg",
  },
  {
    title: "Piscine",
    manifeste: "L'eau devient un espace vivant et maîtrisé.",
    angle: "Une piscine connectée pour un confort maximal et une sécurité totale.",
    features: [
      "Contrôle température et filtration",
      "Éclairage LED programmable",
      "Couverture automatique",
    ],
    image: "/images/espace-piscine.jpg",
  },
];

const temoignages = [
  {
    id: "client-1",
    nom: "Mohamed Al-Mansouri",
    titre: "Entrepreneur, Casablanca",
    texte: "C'est l'investissement le plus intelligent que j'ai fait dans ma villa. Plus que le confort, c'est la tranquillité d'esprit. Tout fonctionne sans effort.",
    rating: 5,
  },
  {
    id: "client-2",
    nom: "Fatima Bennani",
    titre: "Médecin, Marrakech",
    texte: "L'équipe Domotus a compris exactement ce que je voulais. L'installation était invisible, l'interface intuitive. Un vrai savoir-faire.",
    rating: 5,
  },
  {
    id: "client-3",
    nom: "Hassan Qoraichi",
    titre: "Homme d'affaires, Tanger",
    texte: "Les économies énergétiques sont réelles et immédiates. Mais surtout, ma famille adore le confort. On ne pourrait plus s'en passer.",
    rating: 5,
  },
];

export default function VillasPage() {
  return (
    <>
      {/* Main Navbar */}
      <Navbar />
      
      {/* ── HERO with Scroll Animation ── */}
      <HeroMaisonConnectee />

      {/* ── SMART HOME SECTION (Refactored) ── */}
      <SmartHomeSection />

      {/* ── L'IMMERSION: VOS MOMENTS DE VIE (Refonte Interactive) ── */}
      <MomentsInteractif moments={modesVie} />

      {/* ── NOS ESPACES CONNECTÉS ── */}
      <section className="py-28" style={{ backgroundColor: "#f0efed" }} aria-labelledby="espaces-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <div style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "14px", lineHeight: "20px", color: "#efd555" }}>
              Architecture
            </div>
            <h2
              id="espaces-heading"
              className="font-black uppercase leading-none text-balance max-w-2xl"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.02em", color: "#000000" }}
            >
              Chaque espace de votre<br />
              <span className="italic" style={{ color: "rgba(0, 0, 0, 0.45)" }}>maison devient vivant.</span>
            </h2>
          </div>

          {/* Espaces Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" style={{ backgroundColor: "transparent" }}>
            {espaces.map((e) => (
              <div key={e.title} className="p-8 lg:p-10 flex flex-col h-full rounded-2xl" style={{ backgroundColor: "#ffffff", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)" }}>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-4" style={{ color: "#efd555" }}>{e.title}</p>
                <p className="font-bold uppercase tracking-[0.05em] text-[13px] mb-2" style={{ color: "#000000" }}>{e.manifeste}</p>
                <p className="text-[12px] leading-relaxed mb-8" style={{ color: "rgba(0, 0, 0, 0.60)" }}>{e.angle}</p>
                
                {/* Features */}
                <ul className="space-y-3 flex-grow">
                  {e.features.map((f, i) => (
                    <li key={i} className="flex gap-3 items-start text-[12px]" style={{ color: "rgba(0, 0, 0, 0.70)" }}>
                      <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: "rgba(239, 213, 85, 0.50)" }} aria-hidden="true" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LA MÉTHODE DOMOTUS (Le Parcours sans friction) ── */}
      <section className="py-28 bg-card" aria-labelledby="process-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <SectionLabel>Du rêve à la réalité</SectionLabel>
            <h2
              id="process-heading"
              className="font-black uppercase leading-none text-foreground text-balance max-w-xl"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
            >
              La méthode<br />
              <span className="italic text-foreground/45">Domotus.</span>
            </h2>
          </div>
          <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/6">
            {etapes.map((e) => (
              <li key={e.num} className="bg-background p-8 flex flex-col gap-4">
                <span className="text-[10px] font-bold text-primary/60 uppercase tracking-widest">{e.num}</span>
                <h3 className="font-bold uppercase tracking-[0.08em] text-foreground text-[13px]">{e.title}</h3>
                <p className="text-[13px] text-foreground/50 leading-relaxed">{e.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── REALISATIONS ── */}
      <section id="realisations" className="py-28 bg-background" aria-labelledby="real-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <SectionLabel>Portfolio</SectionLabel>
              <h2
                id="real-heading"
                className="font-black uppercase leading-none text-foreground"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
              >
                Réalisations au Maroc.
              </h2>
            </div>
            <Link href="/contact" className="focus-ring shrink-0 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-foreground/40 hover:text-primary transition-colors duration-300">
              Votre projet <ArrowRight size={12} aria-hidden="true" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-white/6">
            {realisations.map((r) => (
              <div key={r.title} className="relative overflow-hidden group aspect-[4/5]">
                <Image src={r.image} alt={`${r.title} — ${r.subtitle}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-primary mb-2 font-semibold">{r.tag}</p>
                  <p className="font-bold uppercase tracking-[0.05em] text-foreground text-[13px]">{r.title}</p>
                  <p className="text-[12px] text-foreground/55 mt-1">{r.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 bg-card" aria-label="Demande de devis domotique Maroc">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2
            className="font-black uppercase leading-none text-foreground text-balance mb-10"
            style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", letterSpacing: "-0.03em" }}
          >
            Votre villa mérite mieux<br />
            <span className="italic text-foreground/50">qu'un interrupteur.</span>
          </h2>
          <Link href="/contact" className="focus-ring inline-flex items-center gap-3 bg-primary px-10 py-5 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-primary/85 transition-all duration-300" style={{ color: "#0a0a0a" }}>
            Demander mon audit technique gratuit <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
