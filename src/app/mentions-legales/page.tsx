import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata = { title: "Mentions Légales — Monra France" };

export default function MentionsLegalesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-6">
        <Link href="/" className="hover:text-gray-700">Accueil</Link>
        <ChevronRight size={11} />
        <span className="text-gray-700 font-medium">Mentions légales</span>
      </nav>

      <h1 className="text-2xl font-bold text-gray-900 mb-8">Mentions Légales</h1>

      <div className="space-y-8 text-sm text-gray-600 leading-relaxed">

<section>
          <h2 className="text-base font-bold text-gray-900 mb-3">Hébergement</h2>
          <p>
            Ce site est hébergé par <strong className="text-gray-900">Hostinger International Ltd.</strong><br />
            61 Lordou Vironos Street, 6023 Larnaca, Chypre.<br />
            <a href="https://www.hostinger.fr" className="text-blue-600 hover:underline">www.hostinger.fr</a>
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-900 mb-3">Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus présents sur ce site (textes, images, logos) sont la propriété exclusive de Monra France
            et sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle.
            Toute reproduction, même partielle, est interdite sans autorisation préalable.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-900 mb-3">Responsabilité</h2>
          <p>
            Monra France s'efforce d'assurer l'exactitude des informations diffusées sur le site mais ne peut garantir
            leur exhaustivité ni leur exactitude à tout moment. Monra France se réserve le droit de modifier les contenus
            à tout moment sans préavis.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-900 mb-3">Données personnelles</h2>
          <p>
            Pour toute question relative à vos données personnelles, consultez notre{" "}
            <Link href="/politique-de-confidentialite" className="text-blue-600 hover:underline">
              politique de confidentialité
            </Link>.
          </p>
        </section>

      </div>
    </div>
  );
}
