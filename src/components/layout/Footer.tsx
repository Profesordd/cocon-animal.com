import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <p className="text-[13px] font-black tracking-[0.25em] uppercase mb-4">Cocon Animal</p>
            <p className="text-[#9A9591] text-sm leading-relaxed max-w-xs mb-6">
              Accessoires haut de gamme pour chats et chiens, conçus pour le confort,
              l'éveil et le bien-être de votre animal au quotidien.
            </p>
            <div className="flex items-center gap-2 text-[#9A9591] text-sm mb-2">
              <Mail size={13} />
              <a href="mailto:contact@cocon-animal.com" className="hover:text-white transition-colors">
                contact@cocon-animal.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-[#9A9591] text-sm">
              <MapPin size={13} />
              <span>Service client 7j/7</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#5A5550] mb-5">Navigation</p>
            <ul className="space-y-3">
              {[
                { href: "/boutique", label: "Boutique" },
                { href: "/suivre-commande", label: "Suivre ma commande" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#9A9591] text-sm hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#5A5550] mb-5">Informations</p>
            <ul className="space-y-3">
              {[
                { href: "/cgv", label: "Conditions générales" },
                { href: "/mentions-legales", label: "Mentions légales" },
                { href: "/politique-de-confidentialite", label: "Confidentialité" },
                { href: "/politique-de-retour", label: "Politique de retour" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#9A9591] text-sm hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1E1E1E] py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#5A5550] text-xs tracking-wide">
            © 2025 Cocon Animal — Tous droits réservés
          </p>
          <div className="flex items-center gap-3">
            {["VISA", "MC", "CB", "AMEX"].map((c) => (
              <span key={c} className="border border-[#2A2A2A] text-[#5A5550] text-[9px] font-bold px-2 py-1 tracking-wide">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
