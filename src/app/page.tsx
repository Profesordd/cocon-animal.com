import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";
import ProductCard from "@/components/ui/ProductCard";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { ArrowRight, Truck, RotateCcw, Shield, Star } from "lucide-react";

export default function HomePage() {
  const bestSellers = products.filter((p) => p.badge === "BESTSELLER");

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative h-screen flex items-center md:items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1920&q=85"
          alt="Cocon Animal"
          fill
          className="object-cover object-top md:object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />

        <div className="relative z-10 px-8 md:px-16 lg:px-24 pb-0 md:pb-28 w-full max-w-4xl">
          <p className="fade-in-up d200 text-[9px] font-semibold tracking-[0.35em] uppercase text-white/50 mb-7">
            Cocon Animal — Collection 2025
          </p>
          <h1 className="fade-in-up d400 text-[clamp(3rem,8vw,7rem)] font-black text-white leading-[0.88] tracking-tight mb-8">
            L'EXCELLENCE<br />POUR<br />LES VÔTRES.
          </h1>
          <p className="fade-in-up d600 text-white/65 text-sm md:text-base max-w-sm mb-10 leading-relaxed">
            Accessoires haut de gamme pour chats et chiens,<br />
            conçus pour le confort, l'éveil et la longévité.
          </p>
          <div className="fade-in-up d800 flex flex-wrap gap-4">
            <Link
              href="/boutique"
              className="bg-white text-[#0d0d0d] px-8 py-3.5 font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-[#F0EBE4] transition-colors inline-flex items-center gap-2"
            >
              Découvrir la sélection <ArrowRight size={12} />
            </Link>
            <Link
              href="/boutique"
              className="border border-white/40 text-white px-8 py-3.5 font-medium text-[10px] tracking-[0.2em] uppercase hover:border-white transition-colors"
            >
              Voir le catalogue
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm py-2.5 ticker-wrap">
          <div className="ticker-content text-white/40 text-[9px] uppercase tracking-[0.3em] font-medium">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="mr-16">
                Cocon Animal &nbsp;·&nbsp; Livraison offerte &nbsp;·&nbsp; Retours 30 jours &nbsp;·&nbsp; Matériaux certifiés &nbsp;·&nbsp; Satisfaction garantie
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── RÉASSURANCE ──────────────────────────────────────────── */}
      <section className="border-b border-[#E4DDD4] bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E4DDD4]">
            {[
              { icon: <Truck size={14} strokeWidth={1.5} />, label: "Livraison gratuite en France" },
              { icon: <RotateCcw size={14} strokeWidth={1.5} />, label: "Retours gratuits sous 30 jours" },
              { icon: <Shield size={14} strokeWidth={1.5} />, label: "Paiement 100 % sécurisé" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-center gap-2.5 py-3 sm:py-2 text-[10px] tracking-[0.12em] uppercase font-medium text-[#7A746C]">
                <span className="text-[#B8933F]">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SÉLECTION DU MOMENT ──────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[9px] font-semibold tracking-[0.3em] uppercase text-[#B8933F] mb-3">
              Sélection du moment
            </p>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-black text-[#0d0d0d] leading-tight">
              Les Incontournables
            </h2>
          </div>
          <Link
            href="/boutique"
            className="hidden md:flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase font-semibold text-[#7A746C] hover:text-[#0d0d0d] transition-colors"
          >
            Tout voir <ArrowRight size={12} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-8">
          {bestSellers.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/boutique"
            className="inline-flex items-center gap-2 border border-[#0d0d0d] text-[#0d0d0d] px-10 py-3.5 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#0d0d0d] hover:text-white transition-colors"
          >
            Voir toute la boutique <ArrowRight size={12} />
          </Link>
        </div>
      </section>

      {/* ── ÉDITO 1 : Confort & Repos ─────────────────────────────── */}
      <section className="bg-[#F8F5F0] border-y border-[#E4DDD4]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 min-h-[560px]">
            <div className="relative min-h-[400px] md:min-h-full overflow-hidden">
              <Image
                src="https://dog-and-cat-design.com/wp-content/uploads/2015/02/Covooooo-600x600.webp"
                alt="Confort & Repos"
                fill
                className="object-cover object-center"
                unoptimized
              />
            </div>
            <div className="flex flex-col justify-center px-10 md:px-16 lg:px-24 py-16 bg-[#F8F5F0]">
              <p className="text-[9px] font-semibold tracking-[0.3em] uppercase text-[#B8933F] mb-5">Confort & Repos</p>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-[#0d0d0d] leading-tight mb-6">
                Le repos<br />qu'ils méritent.
              </h2>
              <p className="text-[#7A746C] text-sm leading-relaxed mb-8 max-w-sm">
                Paniers artisanaux, canapés-lits design, couvertures en imitation fourrure —
                chaque pièce est sélectionnée pour offrir à votre animal un espace de repos
                aussi beau que confortable.
              </p>
              <Link
                href="/boutique?collection=confort-repos"
                className="self-start inline-flex items-center gap-2 bg-[#0d0d0d] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-8 py-3.5 hover:opacity-75 transition-opacity"
              >
                Voir la collection <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ÉDITO 2 : Jeux & Éveil ───────────────────────────────── */}
      <section className="border-b border-[#E4DDD4]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 min-h-[560px]">
            <div className="flex flex-col justify-center px-10 md:px-16 lg:px-24 py-16 bg-white order-2 md:order-1">
              <p className="text-[9px] font-semibold tracking-[0.3em] uppercase text-[#B8933F] mb-5">Jeux & Éveil</p>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-[#0d0d0d] leading-tight mb-6">
                Un espace<br />pour s'épanouir.
              </h2>
              <p className="text-[#7A746C] text-sm leading-relaxed mb-8 max-w-sm">
                Arbres à chats design, griffoirs sculptés, tunnels faits main — nos accessoires
                d'éveil sont conçus pour stimuler l'instinct naturel de votre félin tout en
                s'intégrant parfaitement dans votre intérieur.
              </p>
              <Link
                href="/boutique?collection=jeux-eveil"
                className="self-start inline-flex items-center gap-2 border border-[#0d0d0d] text-[#0d0d0d] text-[10px] font-bold tracking-[0.2em] uppercase px-8 py-3.5 hover:bg-[#0d0d0d] hover:text-white transition-colors"
              >
                Voir la collection <ArrowRight size={12} />
              </Link>
            </div>
            <div className="relative min-h-[400px] md:min-h-full overflow-hidden order-1 md:order-2">
              <Image
                src="https://dog-and-cat-design.com/wp-content/uploads/2023/09/THE-ONE--600x600.jpg"
                alt="Jeux & Éveil"
                fill
                className="object-cover object-center"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── ÉDITO 3 : Quotidien & Soins ──────────────────────────── */}
      <section className="bg-[#F8F5F0] border-b border-[#E4DDD4]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 min-h-[560px]">
            <div className="relative min-h-[400px] md:min-h-full overflow-hidden">
              <Image
                src="https://dog-and-cat-design.com/wp-content/uploads/2019/04/dog-bed-classic-graphite-bowlandbonerepublic-l1-600x534.webp"
                alt="Quotidien & Soins"
                fill
                className="object-cover object-center"
                unoptimized
              />
            </div>
            <div className="flex flex-col justify-center px-10 md:px-16 lg:px-24 py-16 bg-[#F8F5F0]">
              <p className="text-[9px] font-semibold tracking-[0.3em] uppercase text-[#B8933F] mb-5">Quotidien & Soins</p>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-[#0d0d0d] leading-tight mb-6">
                L'essentiel,<br />sans compromis.
              </h2>
              <p className="text-[#7A746C] text-sm leading-relaxed mb-8 max-w-sm">
                Coussins en velours, tapis de voyage, rampes design — les accessoires du
                quotidien pensés pour le bien-être de votre animal et la cohérence
                de votre décoration.
              </p>
              <Link
                href="/boutique?collection=quotidien-soins"
                className="self-start inline-flex items-center gap-2 bg-[#0d0d0d] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-8 py-3.5 hover:opacity-75 transition-opacity"
              >
                Voir la collection <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── NOS VALEURS ──────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-[9px] font-semibold tracking-[0.3em] uppercase text-[#B8933F] mb-3">Notre engagement</p>
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-black text-[#0d0d0d]">Pourquoi choisir Cocon Animal</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Marques Sélectionnées", desc: "Bowl & Bone, Miacara, Labbvenn, Mishum — uniquement des marques qui partagent notre exigence." },
            { label: "Fait Main", desc: "La majorité de nos produits sont fabriqués à la main par des artisans européens." },
            { label: "Design Durable", desc: "Des matériaux nobles choisis pour leur durabilité et leur intégration naturelle dans votre intérieur." },
            { label: "Service 7j/7", desc: "Notre équipe est disponible tous les jours pour vous conseiller et vous accompagner." },
          ].map((v) => (
            <div key={v.label} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-10 h-10 border border-[#E4DDD4] flex items-center justify-center">
                  <Star size={16} strokeWidth={1.5} className="text-[#B8933F]" />
                </div>
              </div>
              <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#0d0d0d] mb-2">{v.label}</p>
              <p className="text-[#7A746C] text-xs leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="max-w-2xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <p className="text-[9px] font-semibold tracking-[0.3em] uppercase text-[#B8933F] mb-3">Support</p>
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-black text-[#0d0d0d]">Questions fréquentes</h2>
        </div>
        <FAQAccordion />
        <div className="text-center mt-10">
          <p className="text-[#7A746C] text-sm">
            Vous n'avez pas trouvé votre réponse ?{" "}
            <Link href="/contact" className="text-[#0d0d0d] font-semibold underline underline-offset-4 hover:opacity-60">
              Contactez-nous
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
