import Link from "next/link";
import Image from "next/image";
import { products, getProductsByCollection } from "@/lib/products";
import ProductCard from "@/components/ui/ProductCard";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { ArrowRight, Truck, RotateCcw, Shield } from "lucide-react";

export default function HomePage() {
  const bestSellers = products.filter((p) => p.badge === "BESTSELLER");
  const confortProducts = getProductsByCollection("confort-repos");
  const jeuxProducts = getProductsByCollection("jeux-eveil");
  const quotidienProducts = getProductsByCollection("quotidien-soins");

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex flex-col justify-center items-center overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/8619782/pexels-photo-8619782.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Cocon Animal"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="fade-in-up d200 inline-block border border-white/40 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
            Nouveautés 2025
          </p>
          <h1 className="fade-in-up d400 text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight mb-6">
            LE BONHEUR<br />DE VOTRE ANIMAL.
          </h1>
          <p className="fade-in-up d600 text-white/80 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Accessoires de qualité, soigneusement sélectionnés<br />
            pour le confort et l'éveil de vos compagnons.
          </p>
          <div className="fade-in-up d800 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/boutique"
              className="bg-white text-gray-900 px-8 py-3.5 font-bold text-sm rounded hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Découvrir la boutique <ArrowRight size={15} />
            </Link>
            <Link
              href="/boutique"
              className="border border-white text-white px-8 py-3.5 font-semibold text-sm rounded hover:bg-white/10 transition-colors"
            >
              Voir le catalogue
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm py-3 ticker-wrap">
          <div className="ticker-content text-white/60 text-xs uppercase tracking-widest font-medium">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="mr-10">
                COCON ANIMAL &nbsp;•&nbsp; BIEN-ÊTRE ANIMAL &nbsp;•&nbsp; LIVRAISON GRATUITE &nbsp;•&nbsp; ACCESSOIRES &amp; JOUETS &nbsp;•&nbsp;
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

      {/* ── COUPS DE COEUR ───────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">Nos coups de cœur</h2>
            <p className="text-gray-400 text-sm mt-1">Les produits préférés de nos clients</p>
          </div>
          <Link
            href="/boutique"
            className="hidden md:flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            Tout voir <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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

      {/* ── COLLECTION 1 : Confort & Repos ───────────────────────── */}
      <section className="border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 min-h-[480px]">
            <div className="relative min-h-[320px] md:min-h-full overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/866496/pexels-photo-866496.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Confort & Repos"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-center px-8 md:px-14 lg:px-20 py-12 bg-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Collection</p>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight mb-5">
                Confort &amp; Repos
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-3">
                Parce que votre animal mérite les meilleures conditions de repos, notre collection arbres à chats, coussins et paniers est pensée pour le confort de chaque race et gabarit.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Des matières douces, des structures solides et des designs discrets qui s'intègrent dans votre intérieur.
              </p>
              <div className="grid grid-cols-2 gap-3 mt-6">
                {confortProducts.slice(0, 2).map((p) => (
                  <Link key={p.slug} href={`/produit/${p.slug}`} className="group">
                    <div className="relative aspect-square rounded overflow-hidden bg-gray-100 mb-2">
                      <Image src={p.images[0]} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <p className="text-xs font-semibold text-gray-800 truncate">{p.name}</p>
                    <p className="text-xs text-gray-400">{p.price.toFixed(2)} €</p>
                  </Link>
                ))}
              </div>
              <Link
                href="/boutique"
                className="mt-6 self-start inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-semibold px-6 py-3 rounded hover:bg-gray-700 transition-colors"
              >
                Voir la collection <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── COLLECTION 2 : Jeux & Éveil ──────────────────────────── */}
      <section className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 min-h-[480px]">
            <div className="flex flex-col justify-center px-8 md:px-14 lg:px-20 py-12 bg-gray-50 order-2 md:order-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Collection</p>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight mb-5">
                Jeux &amp; Éveil
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-3">
                Un animal épanoui est un animal qui joue. Nos jouets et accessoires d'éveil stimulent l'instinct naturel de votre compagnon tout en renforçant votre complicité.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Conçus pour résister aux sessions de jeu les plus intenses — chats chasseurs comme chiens mordeurs.
              </p>
              <div className="grid grid-cols-2 gap-3 mt-6">
                {jeuxProducts.slice(0, 2).map((p) => (
                  <Link key={p.slug} href={`/produit/${p.slug}`} className="group">
                    <div className="relative aspect-square rounded overflow-hidden bg-gray-100 mb-2">
                      <Image src={p.images[0]} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <p className="text-xs font-semibold text-gray-800 truncate">{p.name}</p>
                    <p className="text-xs text-gray-400">{p.price.toFixed(2)} €</p>
                  </Link>
                ))}
              </div>
              <Link
                href="/boutique"
                className="mt-6 self-start inline-flex items-center gap-2 border border-gray-300 text-gray-700 text-sm font-semibold px-6 py-3 rounded hover:border-gray-900 hover:text-gray-900 transition-colors"
              >
                Voir la collection <ArrowRight size={14} />
              </Link>
            </div>
            <div className="relative min-h-[320px] md:min-h-full overflow-hidden order-1 md:order-2">
              <Image
                src="https://images.pexels.com/photos/1340376/pexels-photo-1340376.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Jeux & Éveil"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── COLLECTION 3 : Quotidien & Soins ─────────────────────── */}
      <section className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 min-h-[480px]">
            <div className="relative min-h-[320px] md:min-h-full overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/8434633/pexels-photo-8434633.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Quotidien & Soins"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-center px-8 md:px-14 lg:px-20 py-12 bg-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Collection</p>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight mb-5">
                Quotidien &amp; Soins
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-3">
                Des essentiels pratiques et durables pour simplifier le quotidien avec votre animal : gamelles, fontaines filtrantes, harnais et laisses.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Chaque produit est sélectionné pour sa robustesse, son hygiène et sa facilité d'entretien — parce que le bien-être commence par les bons outils.
              </p>
              <div className="grid grid-cols-2 gap-3 mt-6">
                {quotidienProducts.slice(0, 2).map((p) => (
                  <Link key={p.slug} href={`/produit/${p.slug}`} className="group">
                    <div className="relative aspect-square rounded overflow-hidden bg-gray-100 mb-2">
                      <Image src={p.images[0]} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <p className="text-xs font-semibold text-gray-800 truncate">{p.name}</p>
                    <p className="text-xs text-gray-400">{p.price.toFixed(2)} €</p>
                  </Link>
                ))}
              </div>
              <Link
                href="/boutique"
                className="mt-6 self-start inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-semibold px-6 py-3 rounded hover:bg-gray-700 transition-colors"
              >
                Voir la collection <ArrowRight size={14} />
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
