"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight, ShoppingCart, Check, Ruler,
  Truck, RotateCcw, Shield, ChevronDown, ArrowRight,
} from "lucide-react";
import { getProductBySlug, getSimilarProducts } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import SizeSelector from "@/components/ui/SizeSelector";
import ProductCard from "@/components/ui/ProductCard";

const productFaq = [
  {
    q: "Quels sont les délais de livraison ?",
    a: "Votre commande est expédiée sous 24–48h. La livraison en France métropolitaine prend 5 à 7 jours ouvrés.",
  },
  {
    q: "Comment choisir la bonne taille pour mon animal ?",
    a: "Référez-vous aux dimensions dans la fiche produit. En cas de doute, choisissez la taille supérieure pour un confort optimal.",
  },
  {
    q: "Puis-je retourner l'article s'il ne convient pas ?",
    a: "Oui, vous disposez de 30 jours pour retourner votre article. Les frais de retour sont intégralement pris en charge par Cocon Animal.",
  },
  {
    q: "Les matériaux sont-ils sécurisés pour mon animal ?",
    a: "Tous nos produits sont conformes aux normes de sécurité européennes. Les matériaux sont non toxiques et adaptés à un contact quotidien.",
  },
];

function FAQItem({ item }: { item: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className="border-b border-[#E4DDD4] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left px-0 transition-colors group"
      >
        <span className="text-[#0d0d0d] text-sm font-medium pr-4 group-hover:opacity-60 transition-opacity">{item.q}</span>
        <ChevronDown size={14} strokeWidth={1.5} className={`text-[#9A9591] flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <div
        ref={ref}
        style={{ height: open ? (ref.current?.scrollHeight ?? "auto") : 0, overflow: "hidden", transition: "height 0.3s ease" }}
      >
        <p className="pb-4 text-[#7A746C] text-sm leading-relaxed">{item.a}</p>
      </div>
    </div>
  );
}

const badgeStyle: Record<string, string> = {
  BESTSELLER: "bg-[#B8933F] text-white",
  NOUVEAU:    "bg-white text-[#0d0d0d] border border-[#0d0d0d]",
  EXCLUSIF:   "bg-[#0d0d0d] text-white",
};

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  const similar = getSimilarProducts(params.slug, 4);
  const { addItem } = useCart();

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [activeImg, setActiveImg] = useState(0);
  const [activeTab, setActiveTab] = useState<"description" | "caracteristiques">("description");
  const [added, setAdded] = useState(false);
  const [sizeError, setSizeError] = useState(false);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <p className="text-[#9A9591] mb-4 text-sm">Produit introuvable.</p>
        <Link href="/boutique" className="text-[#0d0d0d] text-sm font-medium underline underline-offset-4">← Retour boutique</Link>
      </div>
    );
  }

  const handleAdd = () => {
    if (!selectedSize) {
      setSizeError(true);
      setTimeout(() => setSizeError(false), 2500);
      return;
    }
    addItem({
      productSlug: product.slug,
      name: product.name,
      price: product.price,
      size: selectedSize,
      image: product.images[0],
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-[10px] tracking-wide text-[#9A9591] mb-10">
        <Link href="/" className="hover:text-[#0d0d0d] transition-colors">Accueil</Link>
        <ChevronRight size={10} />
        <Link href="/boutique" className="hover:text-[#0d0d0d] transition-colors">Boutique</Link>
        <ChevronRight size={10} />
        <span className="text-[#0d0d0d] font-medium line-clamp-1">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        {/* ── Galerie ── */}
        <div className="space-y-3">
          <div className="relative bg-white overflow-hidden" style={{ aspectRatio: "1/1" }}>
            <Image
              src={product.images[activeImg]}
              alt={product.name}
              fill
              className="object-cover"
              priority
              unoptimized
            />
            {product.badge && (
              <span className={`absolute top-4 left-4 text-[9px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 ${badgeStyle[product.badge] ?? "bg-[#0d0d0d] text-white"}`}>
                {product.badge}
              </span>
            )}
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`relative w-20 h-20 flex-shrink-0 bg-white border-2 overflow-hidden transition-colors ${activeImg === i ? "border-[#0d0d0d]" : "border-transparent hover:border-[#E4DDD4]"}`}
                >
                  <Image src={img} alt="" fill className="object-cover" unoptimized />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── Infos ── */}
        <div>
          <p className="text-[9px] font-semibold tracking-[0.25em] uppercase text-[#B8933F] mb-3">
            {product.category}
          </p>
          <h1 className="text-[clamp(1.3rem,3vw,1.9rem)] font-black text-[#0d0d0d] leading-snug mb-4">
            {product.name}
          </h1>

          <p className="text-[2rem] font-black text-[#0d0d0d] mb-7">{product.price.toFixed(2)} €</p>

          {/* Taille */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2.5">
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0d0d0d]">
                Taille{selectedSize && <span className="text-[#B8933F] ml-1">— {selectedSize}</span>}
              </p>
              <button className="flex items-center gap-1 text-[10px] text-[#9A9591] hover:text-[#0d0d0d] transition-colors tracking-wide">
                <Ruler size={11} strokeWidth={1.5} /> Guide des tailles
              </button>
            </div>
            <SizeSelector sizes={product.sizes} selected={selectedSize} onSelect={setSelectedSize} />
            {sizeError && <p className="text-red-500 text-[11px] mt-2 tracking-wide">Veuillez sélectionner une taille.</p>}
          </div>

          {/* Bouton panier */}
          <button
            onClick={handleAdd}
            className={`w-full py-4 flex items-center justify-center gap-2.5 font-bold text-[11px] tracking-[0.2em] uppercase transition-colors duration-200 ${
              added
                ? "bg-[#2D6A3F] text-white"
                : "bg-[#0d0d0d] text-white hover:opacity-75"
            }`}
          >
            {added
              ? <><Check size={15} /> Ajouté au panier</>
              : <><ShoppingCart size={15} strokeWidth={1.5} /> Ajouter au panier</>
            }
          </button>

          {/* Réassurance */}
          <div className="grid grid-cols-3 gap-2 mt-4">
            {[
              { icon: <Truck size={13} strokeWidth={1.5} />, label: "Livraison gratuite" },
              { icon: <RotateCcw size={13} strokeWidth={1.5} />, label: "Retour 30j" },
              { icon: <Shield size={13} strokeWidth={1.5} />, label: "Paiement sécurisé" },
            ].map((item) => (
              <div key={item.label} className="bg-[#F8F5F0] border border-[#E4DDD4] p-3 text-center">
                <div className="flex justify-center text-[#B8933F] mb-1">{item.icon}</div>
                <p className="text-[#7A746C] text-[9px] tracking-[0.1em] uppercase font-medium">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="mt-9">
            <div className="flex border-b border-[#E4DDD4] mb-5">
              {(["description", "caracteristiques"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-3 text-[10px] font-semibold tracking-[0.15em] uppercase transition-colors ${
                    activeTab === tab
                      ? "text-[#0d0d0d] border-b-2 border-[#0d0d0d] -mb-px"
                      : "text-[#9A9591] hover:text-[#0d0d0d]"
                  }`}
                >
                  {tab === "description" ? "Description" : "Caractéristiques"}
                </button>
              ))}
            </div>
            {activeTab === "description" ? (
              <p className="text-[#7A746C] text-sm leading-relaxed">{product.description}</p>
            ) : (
              <table className="w-full text-sm">
                <tbody className="divide-y divide-[#F0EBE4]">
                  {Object.entries(product.details).map(([k, v]) => (
                    <tr key={k}>
                      <td className="py-3 text-[#9A9591] capitalize w-2/5 text-[11px] tracking-wide">{k.replace(/_/g, " ")}</td>
                      <td className="py-3 text-[#0d0d0d] font-medium text-[12px]">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* À associer avec */}
          <div className="mt-7 bg-[#F8F5F0] border border-[#E4DDD4] p-5">
            <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#0d0d0d] mb-3">À associer avec</p>
            <div className="flex flex-wrap gap-2">
              {product.styleWith.map((item) => (
                <span key={item} className="border border-[#E4DDD4] bg-white text-[#7A746C] text-[10px] px-3 py-1.5 tracking-wide">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-8 border-t border-[#E4DDD4] pt-6">
            <h3 className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#0d0d0d] mb-4">Questions fréquentes</h3>
            {productFaq.map((item, i) => (
              <FAQItem key={i} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Produits similaires */}
      <div className="mt-20 pt-12 border-t border-[#E4DDD4]">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-[9px] font-semibold tracking-[0.3em] uppercase text-[#B8933F] mb-2">Vous aimerez aussi</p>
            <h2 className="text-xl font-black text-[#0d0d0d]">Produits similaires</h2>
          </div>
          <Link href="/boutique" className="hidden md:flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase font-semibold text-[#7A746C] hover:text-[#0d0d0d] transition-colors">
            Tout voir <ArrowRight size={12} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-8">
          {similar.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </div>
    </div>
  );
}
