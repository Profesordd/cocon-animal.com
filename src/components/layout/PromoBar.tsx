"use client";

import { useState, useEffect } from "react";

const messages = [
  "Livraison offerte en France",
  "Retours gratuits — 30 jours",
  "Matériaux certifiés premium",
];

export default function PromoBar() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % messages.length);
        setFade(true);
      }, 300);
    }, 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="sticky top-0 z-40 bg-[#0d0d0d] text-white h-9 flex items-center justify-center overflow-hidden">
      <span
        className={`text-[10px] tracking-[0.22em] uppercase whitespace-nowrap transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}
      >
        {messages[index]}
      </span>
    </div>
  );
}
