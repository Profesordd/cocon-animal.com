import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Col 1 – Brand */}
          <div>
            <Link href="/" className="inline-block mb-3">
              <Image src="/logo.svg" alt="Cocon Animal" width={140} height={36} className="h-9 w-auto object-contain" />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Accessoires premium pour chats et chiens. Livraison gratuite en France.
            </p>
            <div className="flex items-center gap-2">
              {["VISA", "MC", "CB"].map((c) => (
                <span
                  key={c}
                  className="border border-gray-200 text-gray-500 text-[10px] font-bold px-2 py-1 rounded"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Col 2 – Liens légaux */}
          <div>
            <p className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4">
              Informations
            </p>
            <ul className="space-y-2">
              {[
                { href: "/cgv", label: "Conditions générales de vente" },
                { href: "/mentions-legales", label: "Mentions légales" },
                { href: "/politique-de-confidentialite", label: "Politique de confidentialité" },
                { href: "/politique-de-retour", label: "Politique de retour" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-gray-500 hover:text-gray-900 text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 – Contact */}
          <div>
            <p className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4">
              Contact & Aide
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
              <Mail size={14} />
              <a
                href="mailto:contact@cocon-animal.com"
                className="hover:text-gray-900 transition-colors"
              >
                contact@cocon-animal.com
              </a>
            </div>
            <p className="text-gray-400 text-sm mb-4">Service client 7j/7</p>
            <Link
              href="/contact"
              className="inline-block bg-gray-900 text-white text-xs font-semibold px-5 py-2.5 rounded hover:bg-gray-700 transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 py-4 px-4">
        <p className="text-center text-gray-400 text-xs">
          © 2025 Cocon Animal — Tous droits réservés
        </p>
      </div>
    </footer>
  );
}
