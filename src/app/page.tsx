import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";
import ProductCard from "@/components/ui/ProductCard";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { ArrowRight, Truck, RotateCcw, Shield } from "lucide-react";

export default function HomePage() {
  const bestSellers = products.slice(0, 4);

  return (
    <>
      {/* ── HERO avec photo de fond ───────────────────────────────── */}
      <section className="relative min-h-[85vh] flex flex-col justify-center items-center overflow-hidden">
        {/* Image de fond */}
        <Image
          src="/img-brand-2.webp"
          alt="Monra France Hero"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay sombre pour lisibilité */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Contenu */}
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="fade-in-up d200 inline-block border border-white/40 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
            Nouvelle collection 2026
          </p>
          <h1 className="fade-in-up d400 text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight mb-6">
            DOMINE<br />LA VILLE.
          </h1>
          <p className="fade-in-up d600 text-white/80 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            L'uniforme de ceux qui ne s'arrêtent jamais.<br />
            Conçu pour redéfinir les codes de la rue.
          </p>
          <div className="fade-in-up d800 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/boutique"
              className="bg-white text-gray-900 px-8 py-3.5 font-bold text-sm rounded hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Découvrir la collection <ArrowRight size={15} />
            </Link>
            <Link
              href="/boutique"
              className="border border-white text-white px-8 py-3.5 font-semibold text-sm rounded hover:bg-white/10 transition-colors"
            >
              Voir le catalogue
            </Link>
          </div>
        </div>

        {/* Ticker en bas du hero */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm py-3 ticker-wrap">
          <div className="ticker-content text-white/60 text-xs uppercase tracking-widest font-medium">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="mr-10">
                MONRA FRANCE &nbsp;•&nbsp; DROP 2026 &nbsp;•&nbsp; LIVRAISON GRATUITE &nbsp;•&nbsp; STREET LUXURY &nbsp;•&nbsp;
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── REASSURANCE ──────────────────────────────────────────── */}
      <section className="border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {[
              { icon: <Truck size={16} />, label: "Livraison gratuite en France" },
              { icon: <RotateCcw size={16} />, label: "Retours gratuits sous 30 jours" },
              { icon: <Shield size={16} />, label: "Paiement 100% sécurisé" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-center gap-2.5 py-3 sm:py-2 text-sm text-gray-600">
                <span className="text-gray-400">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEILLEURES VENTES ────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">Meilleures ventes</h2>
            <p className="text-gray-400 text-sm mt-1">Nos jeans les plus populaires</p>
          </div>
          <Link
            href="/boutique"
            className="hidden md:flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            Tout voir <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {bestSellers.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/boutique"
            className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-8 py-3 text-sm font-semibold rounded hover:border-gray-900 hover:text-gray-900 transition-colors"
          >
            Voir tout le catalogue <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── SECTION 1 : image gauche + texte droite ──────────────── */}
      <section className="border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 min-h-[480px]">
            {/* Image */}
            <div className="relative min-h-[320px] md:min-h-full overflow-hidden">
              <Image
                src="/img-brand-1-cleanup.webp"
                alt="Une mode qui nous rassemble"
                fill
                className="object-cover object-center"
              />
            </div>
            {/* Texte */}
            <div className="flex flex-col justify-center px-8 md:px-14 lg:px-20 py-12 bg-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Notre histoire</p>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight mb-5">
                Une mode qui nous rassemble
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-3">
                Inspirée par les tendances urbaines mondiales, Monra France sélectionne des vêtements pensés pour lui et pour elle.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Des coupes modernes, des matières confortables et une touche de caractère : tout ce qu'il faut pour affirmer son style au quotidien.
              </p>
              <Link
                href="/boutique"
                className="mt-8 self-start inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-semibold px-6 py-3 rounded hover:bg-gray-700 transition-colors"
              >
                Découvrir <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 : texte gauche + image droite ──────────────── */}
      <section className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 min-h-[480px]">
            {/* Texte */}
            <div className="flex flex-col justify-center px-8 md:px-14 lg:px-20 py-12 bg-gray-50 order-2 md:order-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Notre vision</p>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight mb-5">
                Votre style,<br />notre signature
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-3">
                Chez Monra France, chaque vêtement est sélectionné pour révéler votre personnalité.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-3">
                Des essentiels modernes et des pièces fortes, pour elle comme pour lui, inspirés par les meilleurs créateurs internationaux.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Une vision du style où confort et allure se rencontrent naturellement.
              </p>
              <Link
                href="/boutique"
                className="mt-8 self-start inline-flex items-center gap-2 border border-gray-300 text-gray-700 text-sm font-semibold px-6 py-3 rounded hover:border-gray-900 hover:text-gray-900 transition-colors"
              >
                Voir la collection <ArrowRight size={14} />
              </Link>
            </div>
            {/* Image */}
            <div className="relative min-h-[320px] md:min-h-full overflow-hidden order-1 md:order-2">
              <Image
                src="/img-brand-3.webp"
                alt="Votre style, notre signature"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 : image gauche + texte droite ──────────────── */}
      <section className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 min-h-[480px]">
            {/* Image */}
            <div className="relative min-h-[320px] md:min-h-full overflow-hidden">
              <Image
                src="/img-brand-2.webp"
                alt="Une marque française"
                fill
                className="object-cover object-center"
              />
            </div>
            {/* Texte */}
            <div className="flex flex-col justify-center px-8 md:px-14 lg:px-20 py-12 bg-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Notre sélection</p>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight mb-5">
                Le meilleur du streetwear mondial.
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-3">
                Monra France collabore avec des fournisseurs soigneusement sélectionnés à l'international pour vous proposer des pièces à la hauteur des tendances mondiales.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-3">
                Chaque article est choisi pour sa qualité, ses finitions et son style — avant de vous être livré directement depuis notre dépôt.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Une sélection exigeante, des prix justes, et un service pensé pour vous.
              </p>
              <Link
                href="/contact"
                className="mt-8 self-start inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-semibold px-6 py-3 rounded hover:bg-gray-700 transition-colors"
              >
                Notre histoire <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="max-w-2xl mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Support</p>
          <h2 className="text-2xl font-black text-gray-900">Questions fréquentes</h2>
        </div>
        <FAQAccordion />
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            Vous n'avez pas trouvé votre réponse ?{" "}
            <Link href="/contact" className="text-gray-900 font-semibold underline underline-offset-2 hover:text-gray-600">
              Contactez-nous
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
