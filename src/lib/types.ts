export interface ProductDetails {
  dimensions: string;
  matiere: string;
  poids: string;
  convient_pour: string;
  entretien: string;
  garantie: string;
}

export interface Product {
  slug: string;
  name: string;
  price: number;
  category: string;
  collection: string;
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
