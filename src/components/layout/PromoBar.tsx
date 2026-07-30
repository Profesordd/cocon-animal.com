"use client";

import { useState, useEffect } from "react";

const messages = [
  "Livraison offerte en France — sans minimum d'achat",
  "Retours gratuits sous 30 jours — satisfait ou remboursé",
  "Matériaux sélectionnés pour la sécurité de votre animal",
];

export default function PromoBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % messages.length), 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="sticky top-0 z-40 bg-[#0d0d0d] text-white h-9 flex items-center justify-center">
      <span className="text-[10px] tracking-[0.22em] uppercase">{messages[index]}</span>
    </div>
  );
}
