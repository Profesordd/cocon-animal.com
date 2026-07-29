import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import PromoBar from "@/components/layout/PromoBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MONRA FRANCE — Jeans Homme Street Luxury",
  description:
    "Jeans homme tendance. Livraison gratuite en France. L'uniforme de ceux qui ne s'arrêtent jamais.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} bg-white text-gray-900`}>
        <CartProvider>
          <PromoBar />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
