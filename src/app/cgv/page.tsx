import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata = { title: "CGV — Monra France" };

export default function CGVPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-6">
        <Link href="/" className="hover:text-gray-700">Accueil</Link>
        <ChevronRight size={11} />
        <span className="text-gray-700 font-medium">CGV</span>
      </nav>
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Conditions Générales de Vente</h1>
      <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
        {[
          ["1. Prix", "Tous les prix sont en euros TTC. Monra France se réserve le droit de modifier ses prix à tout moment, mais les produits seront facturés au prix en vigueur lors de la validation de la commande."],
          ["2. Livraison", "La livraison est gratuite en France métropolitaine pour toute commande, sans minimum d'achat. Le délai est de 5 à 7 jours ouvrés via La Poste."],
          ["3. Paiement", "Le paiement s'effectue par carte bancaire (CB, Visa, Mastercard) via un système sécurisé SSL."],
          ["4. Droit de rétractation", "Vous disposez d'un délai de 14 jours à compter de la réception pour exercer votre droit de rétractation, sans justification."],
          ["5. Garantie satisfait", "Monra France offre une garantie satisfait ou remboursé de 30 jours. Contactez-nous à contact@monra-france.com."],
          ["6. Service client", "Notre service client est disponible 7j/7 à l'adresse contact@monra-france.com."],
        ].map(([title, text]) => (
          <section key={title}>
            <h2 className="text-sm font-bold text-gray-900 mb-1.5">{title}</h2>
            <p>{text}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
