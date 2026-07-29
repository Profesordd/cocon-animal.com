"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/lib/types";

const badgeStyle: Record<string, string> = {
  BESTSELLER: "bg-orange-500 text-white",
  NOUVEAU:    "bg-blue-600 text-white",
  PREMIUM:    "bg-gray-900 text-white",
};

export default function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);
  const img2 = product.images[1] ?? product.images[0];

  return (
    <div className="group bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-200">
      {/* Image */}
      <Link
        href={`/produit/${product.slug}`}
        className="block relative overflow-hidden bg-gray-50"
        style={{ aspectRatio: "3/4" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {product.badge && (
          <span
            className={`absolute top-2 left-2 z-10 text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded ${
              badgeStyle[product.badge] ?? "bg-gray-800 text-white"
            }`}
          >
            {product.badge}
          </span>
        )}

        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className={`object-cover transition-all duration-500 ${
            hovered ? "opacity-0 scale-105" : "opacity-100 scale-100"
          }`}
          unoptimized
        />
        <Image
          src={img2}
          alt={product.name}
          fill
          className={`object-cover absolute inset-0 transition-all duration-500 ${
            hovered ? "opacity-100 scale-105" : "opacity-0 scale-100"
          }`}
          unoptimized
        />

        {/* Quick add overlay */}
        <div
          className={`absolute inset-x-0 bottom-0 bg-gray-900/90 py-3 flex items-center justify-center gap-2 transition-all duration-200 ${
            hovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
        >
          <ShoppingCart size={14} className="text-white" />
          <span className="text-white text-xs font-semibold uppercase tracking-wide">
            Choisir la taille
          </span>
        </div>
      </Link>

      {/* Info */}
      <div className="p-3">
        <Link href={`/produit/${product.slug}`}>
          <p className="text-gray-800 text-sm font-medium leading-snug line-clamp-2 hover:text-gray-600 transition-colors">
            {product.name}
          </p>
        </Link>
        <div className="flex items-center justify-between mt-2">
          <p className="text-gray-900 font-bold">{product.price.toFixed(2)} €</p>
        </div>
      </div>
    </div>
  );
}
