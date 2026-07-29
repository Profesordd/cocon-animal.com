export interface ProductDetails {
  coupe: string;
  matiere: string;
  elasticite: string;
  fermeture: string;
  longueur: string;
  epaisseur: string;
}

export interface Product {
  slug: string;
  name: string;
  price: number;
  category: string;
  badge: string | null;
  sizes: string[];
  images: string[];
  description: string;
  details: ProductDetails;
  styleWith: string[];
}

export interface CartItem {
  productSlug: string;
  name: string;
  price: number;
  size: string;
  quantity: number;
  image: string;
}
