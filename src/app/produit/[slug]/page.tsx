"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight, ShoppingCart, Check, Ruler,
  Truck, RotateCcw, Shield, ChevronDown,
} from "lucide-react";
import { getProductBySlug, getSimilarProducts } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import SizeSelector from "@/components/ui/SizeSelector";
import ProductCard from "@/components/ui/ProductCard";

const productFaq = [
  {
    q: "Quels sont les délais de livraison ?",
    a: "Votre commande est expédiée sous 24-48h. La livraison en France métropolitaine prend 5 à 7 jours ouvrés via La Poste.",
  },
  {
    q: "Comment choisir la bonne taille pour mon animal ?",
    a: "Référez-vous au guide des dimensions dans la fiche produit (poids et mensurations de votre animal). En cas de doute, choisissez la taille supérieure pour un confort optimal.",
  },
  {
    q: "Puis-je retourner l'article s'il ne convient pas ?",
    a: "Oui, vous disposez de 30 jours pour retourner votre article. Les frais de retour sont entièrement pris en charge par Cocon Animal.",
  },
  {
    q: "Les matériaux sont-ils sécurisés pour mon animal ?",
    a: "Tous nos produits sont testés et conformes aux normes de sécurité européennes. Les matériaux sont non toxiques et adaptés à un contact quotidien avec les animaux.",
  },
];

function FAQItem({ item }: { item: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-3.5 text-left hover:bg-gray-50 px-1 transition-colors"
      >
        <span className="text-gray-800 text-sm font-medium pr-4">{item.q}</span>
        <ChevronDown size={15} className={`text-gray-400 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <div
        ref={contentRef}
        style={{
          height: open ? (contentRef.current?.scrollHeight ?? "auto") : 0,
          overflow: "hidden",
          transition: "height 0.3s ease",
        }}
      >
        <p className="px-1 pb-3.5 text-gray-500 text-sm leading-relaxed">{item.a}</p>
      </div>
    </div>
  );
}

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
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-gray-500 mb-4">Produit introuvable.</p>
        <Link href="/boutique" className="text-gray-900 underline text-sm">← Retour boutique</Link>
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

  const badgeStyle: Record<string, string> = {
    BESTSELLER: "bg-orange-500 text-white",
    NOUVEAU:    "bg-blue-600 text-white",
    PREMIUM:    "bg-gray-900 text-white",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-6">
        <Link href="/" className="hover:text-gray-700">Accueil</Link>
        <ChevronRight size={11} />
        <Link href="/boutique" className="hover:text-gray-700">Boutique</Link>
        <ChevronRight size={11} />
        <span className="text-gray-700 font-medium line-clamp-1">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* ── Galerie ── */}
        <div className="space-y-2">
          <div className="relative bg-gray-50 rounded-lg overflow-hidden" style={{ aspectRatio: "3/4" }}>
            <Image
              src={product.images[activeImg]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            {product.badge && (
              <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded ${badgeStyle[product.badge] ?? "bg-gray-800 text-white"}`}>
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
                  className={`relative w-20 h-24 flex-shrink-0 rounded overflow-hidden border-2 transition-colors ${activeImg === i ? "border-gray-900" : "border-transparent hover:border-gray-300"}`}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── Infos ── */}
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{product.category}</p>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug mb-4">
            {product.name}
          </h1>

          <p className="text-3xl font-black text-gray-900 mb-6">{product.price.toFixed(2)} €</p>

          {/* Taille */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-semibold text-gray-900">
                Taille{selectedSize && <span className="text-blue-600 ml-1">: {selectedSize}</span>}
              </p>
              <button className="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-700">
                <Ruler size={12} /> Guide des tailles
              </button>
            </div>
            <SizeSelector sizes={product.sizes} selected={selectedSize} onSelect={setSelectedSize} />
            {sizeError && <p className="text-red-500 text-xs mt-2">Veuillez sélectionner une taille.</p>}
          </div>

          {/* Bouton panier */}
          <button
            onClick={handleAdd}
            className={`w-full py-4 flex items-center justify-center gap-2 font-bold text-sm rounded transition-colors duration-200 ${
              added ? "bg-green-600 text-white" : "bg-gray-900 text-white hover:bg-gray-700"
            }`}
          >
            {added ? <><Check size={16} /> Ajouté au panier</> : <><ShoppingCart size={16} /> Ajouter au panier</>}
          </button>

          {/* Réassurance */}
          <div className="grid grid-cols-3 gap-2 mt-4">
            {[
              { icon: <Truck size={14} />, label: "Livraison gratuite" },
              { icon: <RotateCcw size={14} />, label: "Retour 30j" },
              { icon: <Shield size={14} />, label: "Paiement sécurisé" },
            ].map((item) => (
              <div key={item.label} className="bg-gray-50 rounded p-2.5 border border-gray-100 text-center">
                <div className="flex justify-center text-gray-400 mb-1">{item.icon}</div>
                <p className="text-gray-500 text-[10px]">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Tabs description / caractéristiques */}
          <div className="mt-8">
            <div className="flex border-b border-gray-100 mb-4">
              {(["description", "caracteristiques"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2.5 text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? "text-gray-900 border-b-2 border-gray-900 -mb-px"
                      : "text-gray-400 hover:text-gray-700"
                  }`}
                >
                  {tab === "description" ? "Description" : "Caractéristiques"}
                </button>
              ))}
            </div>
            {activeTab === "description" ? (
              <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
            ) : (
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-50">
                  {Object.entries(product.details).map(([k, v]) => (
                    <tr key={k}>
                      <td className="py-2.5 text-gray-500 capitalize w-2/5">{k}</td>
                      <td className="py-2.5 text-gray-900 font-medium">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* À associer avec */}
          <div className="mt-6 bg-gray-50 rounded-lg p-4 border border-gray-100">
            <p className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-3">À associer avec</p>
            <div className="flex flex-wrap gap-2">
              {product.styleWith.map((item) => (
                <span key={item} className="bg-white border border-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* FAQ produit */}
          <div className="mt-8">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">Questions fréquentes</h3>
            <div className="border border-gray-100 rounded-lg overflow-hidden divide-y divide-gray-100">
              {productFaq.map((item, i) => (
                <FAQItem key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Produits similaires */}
      <div className="mt-16 pt-10 border-t border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Vous aimerez aussi</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {similar.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </div>
    </div>
  );
}
