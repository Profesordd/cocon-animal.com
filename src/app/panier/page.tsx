"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingCart, ChevronRight, Truck } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function PanierPage() {
  const { items, removeItem, updateQuantity, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-28 text-center">
        <ShoppingCart size={48} strokeWidth={1} className="mx-auto text-[#E4DDD4] mb-6" />
        <h1 className="text-2xl font-black text-[#0d0d0d] mb-3">Votre panier est vide</h1>
        <p className="text-[#9A9591] text-sm mb-8 tracking-wide">Découvrez notre sélection d'accessoires premium pour animaux.</p>
        <Link href="/boutique" className="inline-block bg-[#0d0d0d] text-white px-10 py-3.5 font-bold text-[10px] tracking-[0.2em] uppercase hover:opacity-75 transition-opacity">
          Découvrir la boutique
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <nav className="flex items-center gap-1.5 text-[10px] tracking-wide text-[#9A9591] mb-10">
        <Link href="/" className="hover:text-[#0d0d0d] transition-colors">Accueil</Link>
        <ChevronRight size={10} />
        <span className="text-[#0d0d0d] font-medium">Panier</span>
      </nav>

      <h1 className="text-[clamp(1.6rem,3vw,2.2rem)] font-black text-[#0d0d0d] mb-10">Mon panier</h1>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Articles */}
        <div className="lg:col-span-2 space-y-3">
          {items.map((item) => (
            <div key={`${item.productSlug}-${item.size}`} className="flex gap-5 border border-[#E4DDD4] p-4">
              <div className="relative w-20 h-20 bg-[#F8F5F0] flex-shrink-0">
                <Image src={item.image} alt={item.name} fill className="object-contain p-2" unoptimized />
              </div>
              <div className="flex-1 min-w-0">
                <Link href={`/produit/${item.productSlug}`} className="text-[#0d0d0d] font-medium text-sm leading-snug hover:opacity-60 transition-opacity line-clamp-2">
                  {item.name}
                </Link>
                <p className="text-[#9A9591] text-[10px] tracking-wide mt-1 uppercase">Taille : {item.size}</p>
                <p className="text-[#0d0d0d] font-bold mt-1">{item.price.toFixed(2)} €</p>
                <div className="flex items-center gap-3 mt-3">
                  <div className="flex items-center border border-[#E4DDD4]">
                    <button onClick={() => updateQuantity(item.productSlug, item.size, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center text-[#9A9591] hover:text-[#0d0d0d] transition-colors">
                      <Minus size={10} />
                    </button>
                    <span className="w-8 text-center text-sm font-medium text-[#0d0d0d]">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.productSlug, item.size, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center text-[#9A9591] hover:text-[#0d0d0d] transition-colors">
                      <Plus size={10} />
                    </button>
                  </div>
                  <span className="text-[#0d0d0d] font-bold text-sm ml-1">
                    {(item.price * item.quantity).toFixed(2)} €
                  </span>
                  <button onClick={() => removeItem(item.productSlug, item.size)} className="ml-auto text-[#E4DDD4] hover:text-red-400 transition-colors">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <Link href="/boutique" className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase font-semibold text-[#7A746C] hover:text-[#0d0d0d] transition-colors mt-4">
            ← Continuer mes achats
          </Link>
        </div>

        {/* Récapitulatif */}
        <div>
          <div className="bg-[#F8F5F0] border border-[#E4DDD4] p-6 sticky top-28">
            <h2 className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#0d0d0d] mb-6">Récapitulatif</h2>
            <div className="space-y-3 mb-5 text-sm">
              <div className="flex justify-between text-[#7A746C]">
                <span>Sous-total</span>
                <span>{total.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between text-[#7A746C]">
                <span className="flex items-center gap-1.5"><Truck size={12} strokeWidth={1.5} /> Livraison</span>
                <span className="text-green-700 font-semibold">Gratuite</span>
              </div>
            </div>
            <div className="border-t border-[#E4DDD4] pt-4 mb-6">
              <div className="flex justify-between font-black text-[#0d0d0d]">
                <span>Total</span>
                <span className="text-xl">{total.toFixed(2)} €</span>
              </div>
            </div>
            <Link href="/checkout" className="block w-full bg-[#0d0d0d] text-white text-center py-4 font-bold text-[10px] tracking-[0.2em] uppercase hover:opacity-75 transition-opacity mb-3">
              Passer la commande
            </Link>
            <p className="text-center text-[9px] tracking-[0.15em] uppercase text-[#9A9591]">Paiement 100% sécurisé</p>
          </div>
        </div>
      </div>
    </div>
  );
}
