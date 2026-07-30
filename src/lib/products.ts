import { Product } from "./types";

const U = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?w=${w}&auto=format&fit=crop&q=80`;

// Photos chats
const CAT_ORANGE   = U("photo-1543466835-00a7907e9de1");
const CAT_GINGER   = U("photo-1514888286974-6c03e2ca1dba");
const CAT_BASKET   = U("photo-1494256997604-768d1f608cac");
const CAT_SLEEP    = U("photo-1548802673-380ab8ebc7b7");
const CAT_LIE      = U("photo-1478098711619-5ab0b478d6e6");
const CAT_FACE     = U("photo-1574158622682-e40e69881006");
const CAT_PLAY     = U("photo-1518791841217-8f162f1912da");
const CAT_CURIOUS  = U("photo-1596854407944-bf87f6fdd49e");

// Photos chiens
const DOG_GOLDEN   = U("photo-1587300003388-59208cc962cb");
const DOG_WALK     = U("photo-1548199973-03cce0bbc87b");
const DOG_FIELD    = U("photo-1534361960057-19f073fcc599");
const DOG_PORTRAIT = U("photo-1558788353-f76d92427f16");

export const products: Product[] = [
  // ── Collection 1 : Confort & Repos ──────────────────────────────
  {
    slug: "arbre-a-chat-premium",
    name: "Arbre à Chat Premium Multi-Niveaux",
    price: 79.90,
    category: "Confort & Repos",
    collection: "confort-repos",
    badge: "BESTSELLER",
    sizes: ["S", "M", "L"],
    images: [CAT_ORANGE, CAT_GINGER, CAT_FACE],
    description: "Arbre à chat robuste avec plateformes, griffoirs en sisal naturel et nichoir douillet. Idéal pour les chats actifs qui aiment grimper, griffer et observer.",
    details: {
      dimensions: "50 × 50 × 120 cm (L)",
      matiere: "Bois MDF + peluche + sisal naturel",
      poids: "6,5 kg",
      convient_pour: "Chats jusqu'à 8 kg",
      entretien: "Nettoyage à la brosse douce",
      garantie: "1 an pièces et main-d'œuvre",
    },
    styleWith: ["Jouet plume télescopique", "Balle distributrice", "Tunnel d'éveil"],
  },
  {
    slug: "coussin-orthopedique-chien",
    name: "Coussin Orthopédique Mémoire de Forme pour Chien",
    price: 49.90,
    category: "Confort & Repos",
    collection: "confort-repos",
    badge: "NOUVEAU",
    sizes: ["S", "M", "L"],
    images: [DOG_GOLDEN, DOG_FIELD, DOG_PORTRAIT],
    description: "Coussin orthopédique en mousse à mémoire de forme pour soulager les articulations de votre chien. Housse déhoussable et lavable en machine.",
    details: {
      dimensions: "60 × 45 cm (M)",
      matiere: "Mousse à mémoire de forme + microfibre",
      poids: "1,2 kg",
      convient_pour: "Chiens de 5 à 25 kg",
      entretien: "Housse lavable à 30°C",
      garantie: "6 mois",
    },
    styleWith: ["Gamelle inox", "Harnais de promenade"],
  },
  {
    slug: "panier-douillet-chat",
    name: "Panier Douillet Moelleux pour Chat",
    price: 39.90,
    category: "Confort & Repos",
    collection: "confort-repos",
    badge: "NOUVEAU",
    sizes: ["S", "M"],
    images: [CAT_BASKET, CAT_SLEEP, CAT_LIE],
    description: "Panier ultra-doux en peluche longue avec bords rembourrés. Votre chat peut s'y lover confortablement. Fond antidérapant pour une stabilité totale.",
    details: {
      dimensions: "45 × 45 × 20 cm (M)",
      matiere: "Peluche longue + fond antidérapant",
      poids: "0,7 kg",
      convient_pour: "Chats jusqu'à 6 kg",
      entretien: "Lavable en machine à 30°C",
      garantie: "6 mois",
    },
    styleWith: ["Arbre à chat premium", "Jouet plume télescopique"],
  },
  {
    slug: "hamac-mural-chat",
    name: "Hamac Mural Suspendu pour Chat",
    price: 34.90,
    category: "Confort & Repos",
    collection: "confort-repos",
    badge: null,
    sizes: ["Unique"],
    images: [CAT_LIE, CAT_CURIOUS, CAT_FACE],
    description: "Hamac mural à fixer sur les radiateurs ou sous une fenêtre. Structure solide en métal, tissu résistant et confortable. Idéal pour les chats qui aiment observer.",
    details: {
      dimensions: "55 × 38 cm",
      matiere: "Métal + tissu Oxford renforcé",
      poids: "0,5 kg",
      convient_pour: "Chats jusqu'à 8 kg",
      entretien: "Tissu amovible lavable à 30°C",
      garantie: "1 an",
    },
    styleWith: ["Panier douillet", "Arbre à chat premium"],
  },

  // ── Collection 2 : Jeux & Éveil ──────────────────────────────────
  {
    slug: "jouet-plume-telescopique",
    name: "Canne à Pêche Plume Télescopique Interactive",
    price: 14.90,
    category: "Jeux & Éveil",
    collection: "jeux-eveil",
    badge: "BESTSELLER",
    sizes: ["Unique"],
    images: [CAT_PLAY, CAT_ORANGE, CAT_GINGER],
    description: "Canne à pêche télescopique 60 cm avec plumes colorées et grelot. Stimule l'instinct chasseur de votre chat pour des sessions de jeu intenses et enrichissantes.",
    details: {
      dimensions: "60 cm déployée",
      matiere: "Plastique ABS + plumes naturelles",
      poids: "80 g",
      convient_pour: "Chats de tous âges",
      entretien: "Essuyage avec chiffon humide",
      garantie: "3 mois",
    },
    styleWith: ["Tunnel d'éveil", "Balle distributrice"],
  },
  {
    slug: "tunnel-eveil-chat",
    name: "Tunnel d'Éveil Pliable 3 Entrées pour Chat",
    price: 22.90,
    category: "Jeux & Éveil",
    collection: "jeux-eveil",
    badge: "NOUVEAU",
    sizes: ["Unique"],
    images: [CAT_CURIOUS, CAT_PLAY, CAT_FACE],
    description: "Tunnel en S avec 3 entrées, feuilles froissantes et fenêtre centrale. Se plie en un instant pour ranger. Parfait pour les chats qui adorent se cacher et bondir.",
    details: {
      dimensions: "90 × 25 cm déployé",
      matiere: "Polyester renforcé + armature spiralée",
      poids: "200 g",
      convient_pour: "Chats de tous âges",
      entretien: "Nettoyage brosse douce",
      garantie: "3 mois",
    },
    styleWith: ["Jouet plume télescopique", "Balle distributrice"],
  },
  {
    slug: "corde-noeuds-chien",
    name: "Corde à Nœuds Résistante pour Chien",
    price: 12.90,
    category: "Jeux & Éveil",
    collection: "jeux-eveil",
    badge: null,
    sizes: ["S", "M", "L"],
    images: [DOG_FIELD, DOG_GOLDEN, DOG_PORTRAIT],
    description: "Corde de jeu en coton naturel tressé avec gros nœuds. Idéale pour les jeux de traction, les mordillements et le renforcement de la relation maître-chien.",
    details: {
      dimensions: "40 cm (M)",
      matiere: "Coton naturel tressé",
      poids: "180 g (M)",
      convient_pour: "Chiens de toutes tailles",
      entretien: "Lavable en machine à 30°C",
      garantie: "3 mois",
    },
    styleWith: ["Harnais de promenade", "Laisse extensible"],
  },
  {
    slug: "balle-distributrice",
    name: "Balle Distributrice de Friandises Interactive",
    price: 19.90,
    category: "Jeux & Éveil",
    collection: "jeux-eveil",
    badge: null,
    sizes: ["Unique"],
    images: [DOG_PORTRAIT, DOG_FIELD, DOG_GOLDEN],
    description: "Balle en caoutchouc naturel avec ouverture réglable pour y glisser des friandises. Stimule l'intelligence de votre chien et l'occupe pendant de longues heures.",
    details: {
      dimensions: "Ø 8 cm",
      matiere: "Caoutchouc naturel non toxique",
      poids: "150 g",
      convient_pour: "Chiens de toutes tailles",
      entretien: "Lavage à l'eau savonneuse",
      garantie: "3 mois",
    },
    styleWith: ["Corde à nœuds", "Gamelle inox"],
  },

  // ── Collection 3 : Quotidien & Soins ─────────────────────────────
  {
    slug: "gamelle-inox-antiderapante",
    name: "Gamelle Double Inox Antidérapante",
    price: 24.90,
    category: "Quotidien & Soins",
    collection: "quotidien-soins",
    badge: "BESTSELLER",
    sizes: ["S", "M", "L"],
    images: [CAT_GINGER, CAT_BASKET, CAT_ORANGE],
    description: "Set de 2 gamelles en inox 304 alimentaire avec support surélevé en bois et semelles antidérapantes. Design épuré, facile à nettoyer, résistant à la rouille.",
    details: {
      dimensions: "Support 30 × 15 × 10 cm (M)",
      matiere: "Inox 304 + bois naturel",
      poids: "400 g",
      convient_pour: "Chats et chiens",
      entretien: "Compatible lave-vaisselle",
      garantie: "2 ans",
    },
    styleWith: ["Fontaine filtrante", "Coussin orthopédique"],
  },
  {
    slug: "fontaine-filtrante",
    name: "Fontaine Filtrante Silencieuse 2,5L",
    price: 44.90,
    category: "Quotidien & Soins",
    collection: "quotidien-soins",
    badge: "PREMIUM",
    sizes: ["Unique"],
    images: [CAT_SLEEP, CAT_FACE, CAT_LIE],
    description: "Fontaine filtrante 2,5L ultra-silencieuse avec triple filtration au charbon actif. Incite votre animal à boire plus et prévient les problèmes rénaux.",
    details: {
      dimensions: "22 × 18 × 20 cm",
      matiere: "ABS alimentaire + filtre charbon actif",
      poids: "620 g (vide)",
      convient_pour: "Chats et chiens",
      entretien: "Nettoyage hebdomadaire, filtre /mois",
      garantie: "1 an",
    },
    styleWith: ["Gamelle inox", "Panier douillet"],
  },
  {
    slug: "harnais-promenade",
    name: "Harnais de Promenade Réglable Anti-Fugue",
    price: 27.90,
    category: "Quotidien & Soins",
    collection: "quotidien-soins",
    badge: null,
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [DOG_WALK, DOG_GOLDEN, DOG_FIELD],
    description: "Harnais en nylon respirant avec boucles de sécurité renforcées et poignée dorsale. Réglable sur 5 points pour un confort optimal. Anneau de laisse inox.",
    details: {
      dimensions: "Tour de poitrail 40–55 cm (M)",
      matiere: "Nylon respirant + boucles polypropylène",
      poids: "120 g (M)",
      convient_pour: "Chiens de toutes races",
      entretien: "Lavable en machine à 30°C",
      garantie: "1 an",
    },
    styleWith: ["Laisse extensible", "Corde à nœuds"],
  },
  {
    slug: "laisse-extensible",
    name: "Laisse Extensible 5m Grip Confort",
    price: 17.90,
    category: "Quotidien & Soins",
    collection: "quotidien-soins",
    badge: null,
    sizes: ["S", "M", "L"],
    images: [DOG_WALK, DOG_PORTRAIT, DOG_FIELD],
    description: "Laisse rétractable 5m avec mécanisme frein-blocage et poignée ergonomique antidérapante. Câble résistant. Idéale pour les promenades en liberté contrôlée.",
    details: {
      dimensions: "5 m de longueur",
      matiere: "ABS + câble nylon renforcé",
      poids: "220 g",
      convient_pour: "Chiens jusqu'à 50 kg (L)",
      entretien: "Essuyage avec chiffon humide",
      garantie: "1 an",
    },
    styleWith: ["Harnais de promenade", "Balle distributrice"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getSimilarProducts(slug: string, count = 4): Product[] {
  return products.filter((p) => p.slug !== slug).slice(0, count);
}

export function getProductsByCollection(collection: string): Product[] {
  return products.filter((p) => p.collection === collection);
}

export const collections = ["confort-repos", "jeux-eveil", "quotidien-soins"];
