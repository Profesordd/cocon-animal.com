"use client";

import { useState, useEffect } from "react";

const messages = [
  "🚚 Livraison gratuite en France — sans minimum d'achat",
  "🔄 Retours gratuits sous 30 jours",
  "🐾 Produits sélectionnés pour le bien-être de votre animal",
];

export default function PromoBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % messages.length), 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="sticky top-0 z-40 bg-gray-900 text-white h-9 flex items-center justify-center text-xs tracking-wide">
      <span>{messages[index]}</span>
    </div>
  );
}
