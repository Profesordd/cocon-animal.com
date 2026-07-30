"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { products, getProductsByCollection } from "@/lib/products";
import ProductCard from "@/components/ui/ProductCard";

type Filter = "tous" | "confort-repos" | "jeux-eveil" | "quotidien-soins";
type SortOption = "default" | "price-asc" | "price-desc";

const filters: { value: Filter; label: string }[] = [
  { value: "tous", label: "Tous les produits" },
  { value: "confort-repos", label: "Confort & Repos" },
  { value: "jeux-eveil", label: "Jeux & Éveil" },
  { value: "quotidien-soins", label: "Quotidien & Soins" },
];

export default function BoutiquePage() {
  const [filter, setFilter] = useState<Filter>("tous");
  const [sort, setSort] = useState<SortOption>("default");

  const filtered = filter === "tous" ? products : getProductsByCollection(filter);
  const sorted = [...filtered].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-[10px] tracking-wide text-[#9A9591] mb-10">
        <Link href="/" className="hover:text-[#0d0d0d] transition-colors">Accueil</Link>
        <ChevronRight size={10} />
        <span className="text-[#0d0d0d] font-medium">Boutique</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <p className="text-[9px] font-semibold tracking-[0.3em] uppercase text-[#B8933F] mb-3">Notre sélection</p>
        <h1 className="text-[clamp(1.8rem,4vw,2.8rem)] font-black text-[#0d0d0d] leading-tight">
          Tous nos accessoires
        </h1>
      </div>

      {/* Filtres + tri */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E4DDD4]">
        {/* Filtres collection */}
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`text-[10px] font-semibold tracking-[0.15em] uppercase px-4 py-2 transition-colors ${
                filter === f.value
                  ? "bg-[#0d0d0d] text-white"
                  : "border border-[#E4DDD4] text-[#7A746C] hover:border-[#0d0d0d] hover:text-[#0d0d0d]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        {/* Tri */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] tracking-[0.12em] uppercase text-[#9A9591]">Trier :</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="border border-[#E4DDD4] text-[#0d0d0d] text-[11px] px-3 py-2 focus:outline-none focus:border-[#0d0d0d] bg-white cursor-pointer"
          >
            <option value="default">Pertinence</option>
            <option value="price-asc">Prix croissant</option>
            <option value="price-desc">Prix décroissant</option>
          </select>
        </div>
      </div>

      {/* Nombre de résultats */}
      <p className="text-[10px] tracking-[0.12em] uppercase text-[#9A9591] mb-8">
        {sorted.length} produit{sorted.length > 1 ? "s" : ""}
      </p>

      {/* Grille */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
        {sorted.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
