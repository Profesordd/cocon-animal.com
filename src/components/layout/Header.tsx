"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import CartDrawer from "./CartDrawer";

const navLinks = [
  { href: "/", label: "ACCUEIL" },
  { href: "/boutique", label: "BOUTIQUE" },
  { href: "/suivre-commande", label: "SUIVRE VOTRE COMMANDE" },
  { href: "/contact", label: "CONTACT" },
];

export default function Header() {
  const { count, total } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky z-30 bg-white border-b border-gray-200 shadow-sm" style={{ top: "36px" }}>
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          {/* Logo image */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.svg"
              alt="Cocon Animal"
              width={130}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Nav desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-gray-600 hover:text-gray-900 text-xs font-medium tracking-wide transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-3">
            <button className="hidden md:flex text-gray-500 hover:text-gray-900 transition-colors p-1">
              <User size={19} />
            </button>
            <button
              onClick={() => setCartOpen(true)}
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <div className="relative">
                <ShoppingCart size={19} />
                {count > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {count}
                  </span>
                )}
              </div>
              <span className="text-sm font-medium hidden sm:block">{total.toFixed(2)}€</span>
            </button>
            <button
              className="lg:hidden text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-3">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-sm text-gray-700 hover:text-gray-900 border-b border-gray-50 last:border-0 font-medium"
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
