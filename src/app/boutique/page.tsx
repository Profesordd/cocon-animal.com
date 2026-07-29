"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { products } from "@/lib/products";
import ProductCard from "@/components/ui/ProductCard";

type SortOption = "default" | "price-asc" | "price-desc";

export default function BoutiquePage() {
  const [sort, setSort] = useState<SortOption>("default");

  const sorted = [...products].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-6">
        <Link href="/" className="hover:text-gray-700 transition-colors">Accueil</Link>
        <ChevronRight size={11} />
        <span className="text-gray-700 font-medium">Boutique</span>
      </nav>

      {/* Header */}
      <div className="flex items-end justify-between mb-8 pb-4 border-b border-gray-100">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-gray-900">Jeans Homme</h1>
          <p className="text-gray-400 text-sm mt-1">{products.length} produits</p>
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortOption)}
          className="border border-gray-200 text-gray-700 text-sm px-3 py-2 rounded focus:outline-none focus:border-gray-400 bg-white cursor-pointer"
        >
          <option value="default">Pertinence</option>
          <option value="price-asc">Prix croissant</option>
          <option value="price-desc">Prix décroissant</option>
        </select>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sorted.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
