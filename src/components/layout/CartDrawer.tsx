"use client";

import { X, Minus, Plus, Trash2, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQuantity, total } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />
      <aside
        className={`fixed top-0 right-0 w-full max-w-sm bg-white z-50 flex flex-col shadow-2xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        style={{ height: "100dvh" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E4DDD4]">
          <h2 className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#0d0d0d]">
            Mon panier{items.length > 0 && <span className="text-[#9A9591] font-normal ml-1">({items.length})</span>}
          </h2>
          <button onClick={onClose} className="text-[#9A9591] hover:text-[#0d0d0d] transition-colors">
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Articles */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <ShoppingCart size={36} strokeWidth={1} className="text-[#E4DDD4] mb-5" />
              <p className="text-[#9A9591] text-sm tracking-wide">Votre panier est vide</p>
              <button onClick={onClose} className="mt-5 text-[10px] font-semibold tracking-[0.15em] uppercase text-[#0d0d0d] underline underline-offset-4">
                Continuer mes achats
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.productSlug}-${item.size}`} className="flex gap-4 pb-5 border-b border-[#F0EBE4] last:border-0">
                <div className="relative w-16 h-16 bg-[#F8F5F0] flex-shrink-0">
                  <Image src={item.image} alt={item.name} fill className="object-contain p-1.5" unoptimized />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#0d0d0d] text-[12px] font-medium line-clamp-2 leading-snug">{item.name}</p>
                  <p className="text-[#9A9591] text-[10px] tracking-wide uppercase mt-0.5">Taille : {item.size}</p>
                  <p className="text-[#0d0d0d] font-bold text-sm mt-1">{item.price.toFixed(2)} €</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center border border-[#E4DDD4]">
                      <button onClick={() => updateQuantity(item.productSlug, item.size, item.quantity - 1)} className="w-7 h-7 flex items-center justify-center text-[#9A9591] hover:text-[#0d0d0d]">
                        <Minus size={10} />
                      </button>
                      <span className="w-6 text-center text-[12px] text-[#0d0d0d]">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.productSlug, item.size, item.quantity + 1)} className="w-7 h-7 flex items-center justify-center text-[#9A9591] hover:text-[#0d0d0d]">
                        <Plus size={10} />
                      </button>
                    </div>
                    <button onClick={() => removeItem(item.productSlug, item.size)} className="ml-auto text-[#E4DDD4] hover:text-red-400 transition-colors">
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-[#E4DDD4] space-y-3 bg-[#F8F5F0]">
            <div className="flex justify-between text-[11px] text-[#9A9591]">
              <span>Livraison</span>
              <span className="text-green-700 font-semibold">Gratuite</span>
            </div>
            <div className="flex justify-between font-black text-[#0d0d0d]">
              <span className="text-sm">Total</span>
              <span className="text-base">{total.toFixed(2)} €</span>
            </div>
            <Link
              href="/checkout"
              onClick={onClose}
              className="block w-full bg-[#0d0d0d] text-white text-center py-3.5 font-bold text-[10px] tracking-[0.2em] uppercase hover:opacity-75 transition-opacity"
            >
              Passer la commande
            </Link>
            <Link
              href="/panier"
              onClick={onClose}
              className="block w-full text-center text-[10px] tracking-[0.15em] uppercase text-[#9A9591] hover:text-[#0d0d0d] transition-colors py-1"
            >
              Voir le panier complet
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
