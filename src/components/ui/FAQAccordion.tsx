"use client";

import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Quels sont vos délais de livraison ?",
    answer: "Nous livrons en 5 à 7 jours ouvrés en France métropolitaine via La Poste. Vous recevrez votre numéro de suivi par email le jour de l'expédition.",
  },
  {
    question: "La livraison est-elle gratuite ?",
    answer: "Oui, la livraison est entièrement gratuite en France pour toutes les commandes, sans minimum d'achat.",
  },
  {
    question: "Comment choisir la bonne taille pour mon animal ?",
    answer: "Chaque fiche produit indique les dimensions et le poids recommandé. En cas de doute entre deux tailles, privilégiez toujours la taille supérieure pour le confort de votre compagnon.",
  },
  {
    question: "Puis-je retourner un article ?",
    answer: "Oui, vous disposez de 30 jours pour nous retourner un article. Les frais de retour sont entièrement pris en charge par Cocon Animal. Contactez-nous à contact@cocon-animal.com pour initier un retour.",
  },
  {
    question: "Les produits sont-ils sécurisés pour les animaux ?",
    answer: "Tous nos produits sont conformes aux normes européennes et fabriqués avec des matériaux non toxiques, testés pour un usage en contact direct avec les animaux.",
  },
  {
    question: "Les paiements sont-ils sécurisés ?",
    answer: "Oui, tous les paiements sont sécurisés par cryptage SSL 256 bits. Nous acceptons Visa, Mastercard et CB. Vos données bancaires ne sont jamais stockées sur nos serveurs.",
  },
];

function FAQItem({ faq, isOpen, onToggle }: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <div className="bg-white border-b border-gray-100 last:border-0">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors cursor-pointer"
      >
        <span className="text-gray-800 text-sm font-semibold pr-4">{faq.question}</span>
        <ChevronDown
          size={16}
          className="text-gray-400 flex-shrink-0 transition-transform duration-200"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      <div
        ref={contentRef}
        style={{
          height: isOpen ? contentRef.current?.scrollHeight ?? "auto" : 0,
          overflow: "hidden",
          transition: "height 0.3s ease",
        }}
      >
        <p className="px-5 pb-5 text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);
  return (
    <div className="border border-gray-100 rounded-lg overflow-hidden">
      {faqs.map((faq, i) => (
        <FAQItem key={i} faq={faq} isOpen={openIndex === i} onToggle={() => toggle(i)} />
      ))}
    </div>
  );
}
