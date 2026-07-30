"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import CartDrawer from "./CartDrawer";

const navLeft = [
  { href: "/boutique", label: "Boutique" },
  { href: "/boutique", label: "Collections" },
];
const navRight = [
  { href: "/suivre-commande", label: "Suivi de commande" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const { count, total } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-9 z-30 bg-white border-b border-[#E4DDD4]">
        <div className="max-w-7xl mx-auto px-6 h-16 grid grid-cols-3 items-center">
          {/* Nav gauche — desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLeft.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#6B6560] hover:text-[#0d0d0d] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Logo — centré */}
          <div className="flex justify-center">
            <Link href="/" className="text-[14px] font-black tracking-[0.25em] uppercase text-[#0d0d0d] hover:opacity-70 transition-opacity">
              Cocon Animal
            </Link>
          </div>

          {/* Nav droite + panier */}
          <div className="flex items-center justify-end gap-6">
            <nav className="hidden lg:flex items-center gap-8">
              {navRight.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#6B6560] hover:text-[#0d0d0d] transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <button
              onClick={() => setCartOpen(true)}
              className="flex items-center gap-2 text-[#0d0d0d] hover:opacity-60 transition-opacity"
            >
              <div className="relative">
                <ShoppingCart size={18} strokeWidth={1.5} />
                {count > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#0d0d0d] text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {count}
                  </span>
                )}
              </div>
              {count > 0 && (
                <span className="text-[11px] font-medium hidden sm:block">{total.toFixed(2)} €</span>
              )}
            </button>

            {/* Burger mobile */}
            <button
              className="lg:hidden text-[#0d0d0d] hover:opacity-60"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile — plein écran, glisse depuis le haut */}
      <div
        style={{ transition: "transform 0.3s ease" }}
        className={`fixed inset-0 z-[60] bg-white flex flex-col lg:hidden ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-[#E4DDD4] mt-9">
          <Link
            href="/"
            className="text-[14px] font-black tracking-[0.25em] uppercase text-[#0d0d0d]"
            onClick={() => setMenuOpen(false)}
          >
            Cocon Animal
          </Link>
          <button onClick={() => setMenuOpen(false)} className="text-[#0d0d0d]">
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>
        <nav className="flex-1 px-6 py-4 overflow-y-auto">
          {[...navLeft, ...navRight].map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-5 text-[13px] font-semibold tracking-[0.2em] uppercase text-[#0d0d0d] border-b border-[#F0EBE4] last:border-0"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
