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
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 flex flex-col shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-900 text-base">
            Mon panier{" "}
            {items.length > 0 && (
              <span className="text-gray-500 font-normal">({items.length})</span>
            )}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <ShoppingCart size={40} className="text-gray-200 mb-4" />
              <p className="text-gray-400 text-sm">Votre panier est vide</p>
              <button
                onClick={onClose}
                className="mt-5 text-xs font-semibold text-gray-900 underline underline-offset-4"
              >
                Continuer mes achats
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={`${item.productSlug}-${item.size}`}
                className="flex gap-3 pb-4 border-b border-gray-100 last:border-0"
              >
                <div className="relative w-16 h-20 bg-gray-50 flex-shrink-0 rounded overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-800 text-sm font-medium line-clamp-2 leading-tight">
                    {item.name}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">Taille : {item.size}</p>
                  <p className="text-gray-900 font-bold text-sm mt-1">
                    {item.price.toFixed(2)} €
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center border border-gray-200 rounded">
                      <button
                        onClick={() =>
                          updateQuantity(item.productSlug, item.size, item.quantity - 1)
                        }
                        className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-gray-900"
                      >
                        <Minus size={11} />
                      </button>
                      <span className="w-6 text-center text-sm text-gray-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.productSlug, item.size, item.quantity + 1)
                        }
                        className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-gray-900"
                      >
                        <Plus size={11} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.productSlug, item.size)}
                      className="ml-auto text-gray-300 hover:text-red-400 transition-colors"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-5 py-4 border-t border-gray-100 space-y-3 bg-gray-50">
            <div className="flex justify-between text-sm text-gray-500">
              <span>Livraison</span>
              <span className="text-green-600 font-semibold">Gratuite</span>
            </div>
            <div className="flex justify-between font-bold text-gray-900 text-base">
              <span>Total</span>
              <span>{total.toFixed(2)} €</span>
            </div>
            <Link
              href="/checkout"
              onClick={onClose}
              className="block w-full bg-gray-900 text-white text-center py-3 font-semibold text-sm rounded hover:bg-gray-800 transition-colors"
            >
              Passer la commande
            </Link>
            <Link
              href="/panier"
              onClick={onClose}
              className="block w-full text-center text-sm text-gray-500 hover:text-gray-900 transition-colors py-1"
            >
              Voir le panier complet →
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
