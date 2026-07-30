import { Product } from "./types";

const CDN = "https://www.animalis.com/dw/image/v2/BKDP_PRD/on/demandware.static/-/Sites-animalis-master-catalog/default";
const A = (hash: string, file: string) => `${CDN}/${hash}/media/mid/1/${file}`;

export const products: Product[] = [
  // ── Collection 1 : Confort & Repos ──────────────────────────────
  {
    slug: "arbre-a-chat-premium",
    name: "Arbre à Chat Moon 135 cm",
    price: 79.90,
    category: "Confort & Repos",
    collection: "confort-repos",
    badge: "BESTSELLER",
    sizes: ["S", "M", "L"],
    images: [
      A("dwfff8c421", "3700602122564-1.jpg"),
      A("dw36401de9", "3700602122557-1.jpg"),
      A("dwcfcd04f5", "3541990351996-1.jpg"),
    ],
    description: "Arbre à chat robuste multi-niveaux avec plateformes tapissées, griffoirs en sisal naturel et nichoir douillet. Structure en panneaux MDF haute densité, recouvert de peluche douce. Idéal pour les chats qui adorent grimper, griffer et observer leur territoire en hauteur.",
    details: {
      dimensions: "50 × 50 × 135 cm",
      matiere: "Bois MDF + peluche + sisal naturel",
      poids: "7,2 kg",
      convient_pour: "Chats jusqu'à 8 kg",
      entretien: "Nettoyage à la brosse douce",
      garantie: "1 an pièces et main-d'œuvre",
    },
    styleWith: ["Jouet plume télescopique", "Tunnel d'éveil"],
  },
  {
    slug: "coussin-orthopedique-chien",
    name: "Coussin Orthopédique Mémoire de Forme Chien",
    price: 49.90,
    category: "Confort & Repos",
    collection: "confort-repos",
    badge: "NOUVEAU",
    sizes: ["S", "M", "L"],
    images: [
      A("dwabade560", "8435637415996-1.jpg"),
      A("dwd90e4aad", "8435637415972-1.jpg"),
      A("dw7f816b6b", "8435637440226-1.jpg"),
    ],
    description: "Coussin orthopédique en mousse à mémoire de forme qui soulage les articulations de votre chien. Housse en microfibre ultra-douce déhoussable et lavable en machine à 30°C. Base antidérapante pour tout type de sol.",
    details: {
      dimensions: "60 × 45 cm (M)",
      matiere: "Mousse à mémoire de forme + microfibre",
      poids: "1,2 kg",
      convient_pour: "Chiens de 5 à 30 kg",
      entretien: "Housse lavable à 30°C",
      garantie: "6 mois",
    },
    styleWith: ["Gamelle inox antidérapante", "Harnais de promenade"],
  },
  {
    slug: "panier-douillet-chat",
    name: "Panier Donut Ultra Doux pour Chat",
    price: 39.90,
    category: "Confort & Repos",
    collection: "confort-repos",
    badge: "NOUVEAU",
    sizes: ["S", "M"],
    images: [
      A("dwb2fe7b3c", "8435637415286-1.jpg"),
      A("dw6c973f5d", "8435637415231-1.jpg"),
      A("dw068d0f65", "8435637415255-1.jpg"),
    ],
    description: "Panier rond en peluche longue extra-douce avec bords rembourrés surélevés. Votre chat peut s'y lover confortablement, la tête appuyée sur les rebords. Fond antidérapant pour une stabilité totale sur tout type de sol.",
    details: {
      dimensions: "45 × 45 × 18 cm (M)",
      matiere: "Peluche longue + fond antidérapant",
      poids: "0,65 kg",
      convient_pour: "Chats jusqu'à 6 kg",
      entretien: "Lavable en machine à 30°C",
      garantie: "6 mois",
    },
    styleWith: ["Arbre à chat premium", "Jouet plume télescopique"],
  },
  {
    slug: "hamac-mural-chat",
    name: "Nid Suspendu Douillet pour Chat",
    price: 34.90,
    category: "Confort & Repos",
    collection: "confort-repos",
    badge: null,
    sizes: ["Unique"],
    images: [
      A("dw90d4be44", "8435637440257-1.jpg"),
      A("dwb0ba1bad", "8435637440264-1.png"),
      A("dw59522851", "PM600859_M-1.jpg"),
    ],
    description: "Nid suspendu en peluche ultra-douce avec rembourrage épais. Design cocon enveloppant qui procure un sentiment de sécurité à votre chat. Léger, facile à déplacer. Idéal pour les chats qui cherchent un refuge chaud et discret.",
    details: {
      dimensions: "40 × 35 cm",
      matiere: "Peluche ultra-douce + rembourrage polyester",
      poids: "0,4 kg",
      convient_pour: "Chats jusqu'à 5 kg",
      entretien: "Lavable en machine à 30°C",
      garantie: "6 mois",
    },
    styleWith: ["Panier douillet", "Arbre à chat premium"],
  },

  // ── Collection 2 : Jeux & Éveil ──────────────────────────────────
  {
    slug: "jouet-plume-telescopique",
    name: "Canne à Pêche Flexible avec Plumes 60 cm",
    price: 14.90,
    category: "Jeux & Éveil",
    collection: "jeux-eveil",
    badge: "BESTSELLER",
    sizes: ["Unique"],
    images: [
      A("dw5ad16a45", "3575070021639-1.jpg"),
      A("dw13ce694a", "8435637440714-1.jpg"),
      A("dwb20b9dd0", "3575070019513-1.jpg"),
    ],
    description: "Canne à pêche flexible 60 cm avec plumes naturelles colorées et grelot intégré. Le mouvement imprévisible stimule l'instinct chasseur de votre chat pour des sessions de jeu intenses. Tige flexible en fibre pour des mouvements naturels.",
    details: {
      dimensions: "60 cm déployée",
      matiere: "Plastique ABS + plumes naturelles",
      poids: "75 g",
      convient_pour: "Chats de tous âges",
      entretien: "Essuyage avec chiffon humide",
      garantie: "3 mois",
    },
    styleWith: ["Tunnel d'éveil", "Panier douillet"],
  },
  {
    slug: "tunnel-eveil-chat",
    name: "Tunnel d'Éveil 3 Sorties 80 cm pour Chat",
    price: 22.90,
    category: "Jeux & Éveil",
    collection: "jeux-eveil",
    badge: "NOUVEAU",
    sizes: ["Unique"],
    images: [
      A("dwf4a8c998", "8435637437837-1.JPG"),
      A("dw7a87e528", "4011905430447-1.jpg"),
      A("dwd424bf9b", "5400585002393-1.jpg"),
    ],
    description: "Tunnel pliable avec 3 entrées, revêtement froissant crinkle qui éveille la curiosité et judas central. Se plie en un clin d'œil pour un rangement facile. Parfait pour les chats qui adorent se cacher, bondir et surveiller.",
    details: {
      dimensions: "80 × 25 cm déployé",
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
    name: "Corde à Nœuds en Coton Naturel pour Chien",
    price: 12.90,
    category: "Jeux & Éveil",
    collection: "jeux-eveil",
    badge: null,
    sizes: ["S", "M", "L"],
    images: [
      A("dwffb4ea4f", "8023222093010-1.jpg"),
      A("dw3deb6fa9", "8023222226920-1.jpg"),
      A("dw94b987a4", "3700602121826-1.jpg"),
    ],
    description: "Corde de jeu en coton naturel tressé avec gros nœuds aux extrémités. Résistante aux mordillements et aux jeux de traction les plus intenses. Idéale pour renforcer le lien maître-chien et occuper votre compagnon pendant des heures.",
    details: {
      dimensions: "40 cm (M)",
      matiere: "Coton naturel tressé 100%",
      poids: "180 g (M)",
      convient_pour: "Chiens de toutes tailles",
      entretien: "Lavable en machine à 30°C",
      garantie: "3 mois",
    },
    styleWith: ["Harnais de promenade", "Laisse extensible"],
  },
  {
    slug: "balle-distributrice",
    name: "Distributeur à Friandises Interactif pour Chien",
    price: 19.90,
    category: "Jeux & Éveil",
    collection: "jeux-eveil",
    badge: null,
    sizes: ["Unique"],
    images: [
      A("dwe1a79843", "8435637438117-1.jpg"),
      A("dw94b987a4", "3700602121826-1.jpg"),
      A("dwffb4ea4f", "8023222093010-1.jpg"),
    ],
    description: "Distributeur de friandises en caoutchouc naturel non toxique. Chaque roulement libère une récompense et stimule l'intelligence de votre chien. Idéal pour l'occuper seul ou en jeu de recherche. Facilement lavable.",
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
    name: "Gamelle en Inox Antidérapante pour Chat",
    price: 14.90,
    category: "Quotidien & Soins",
    collection: "quotidien-soins",
    badge: "BESTSELLER",
    sizes: ["S", "M", "L"],
    images: [
      A("dwb0b631b8", "3700602117799-1.jpg"),
      A("dw2ffde3fc", "PM600620_M-1.jpg"),
      A("dw0d3afe08", "PM603491_M-1.jpg"),
    ],
    description: "Gamelle en inox 304 alimentaire certifié avec socle en silicone antidérapant et bords inclinés. Design Vibrissa spécialement conçu pour respecter les moustaches du chat. Résistante à la rouille, compatible lave-vaisselle.",
    details: {
      dimensions: "Ø 15 cm (M)",
      matiere: "Inox 304 + silicone alimentaire",
      poids: "180 g",
      convient_pour: "Chats et petits chiens",
      entretien: "Compatible lave-vaisselle",
      garantie: "2 ans",
    },
    styleWith: ["Fontaine filtrante", "Panier douillet"],
  },
  {
    slug: "fontaine-filtrante",
    name: "Fontaine Filtrante Silencieuse 2,5 L",
    price: 44.90,
    category: "Quotidien & Soins",
    collection: "quotidien-soins",
    badge: "PREMIUM",
    sizes: ["Unique"],
    images: [
      A("dw0d3afe08", "PM603491_M-1.jpg"),
      A("dw54987fa6", "3700602109824-1.jpg"),
      A("dw9659e780", "8435637443845-1.JPG"),
    ],
    description: "Fontaine à eau silencieuse 2,5 L avec triple filtration au charbon actif, mousse et coton. Maintient une eau fraîche et oxygénée en permanence pour encourager votre animal à boire davantage. Pompe ultra-silencieuse <30 dB. Compatible chats et chiens.",
    details: {
      dimensions: "22 × 18 × 20 cm",
      matiere: "ABS alimentaire + filtre charbon actif",
      poids: "620 g (vide)",
      convient_pour: "Chats et chiens",
      entretien: "Nettoyage hebdomadaire, filtre mensuel",
      garantie: "1 an",
    },
    styleWith: ["Gamelle inox", "Coussin orthopédique"],
  },
  {
    slug: "harnais-promenade",
    name: "Harnais de Promenade Réglable en Mesh pour Chien",
    price: 27.90,
    category: "Quotidien & Soins",
    collection: "quotidien-soins",
    badge: null,
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      A("dw129bc8c3", "PM8000183_M-1.jpg"),
      A("dwd85b00b2", "PM8000172_M-1.jpg"),
      A("dw9308543f", "PM586625_M-1.jpg"),
    ],
    description: "Harnais en mesh respirant ultra-léger avec boucles de sécurité renforcées et bandes réfléchissantes. Réglable sur 4 points pour un ajustement parfait. Anneau en inox pour la laisse. Conçu pour les promenades longue durée.",
    details: {
      dimensions: "Tour de poitrail 40–55 cm (M)",
      matiere: "Mesh polyester + boucles polypropylène",
      poids: "110 g (M)",
      convient_pour: "Chiens de toutes races",
      entretien: "Lavable en machine à 30°C",
      garantie: "1 an",
    },
    styleWith: ["Laisse extensible", "Corde à nœuds"],
  },
  {
    slug: "laisse-extensible",
    name: "Harnais Essentials Nylon Premium pour Chien",
    price: 22.90,
    category: "Quotidien & Soins",
    collection: "quotidien-soins",
    badge: null,
    sizes: ["XS", "S", "M", "L"],
    images: [
      A("dwd85b00b2", "PM8000172_M-1.jpg"),
      A("dw129bc8c3", "PM8000183_M-1.jpg"),
      A("dw9308543f", "PM586625_M-1.jpg"),
    ],
    description: "Harnais en nylon résistant avec finitions premium, clips de sécurité renforcés et anneaux de fixation en métal. Design ergonomique qui épouse la morphologie de votre chien sans gêner ses mouvements. Idéal pour les chiens actifs.",
    details: {
      dimensions: "Tour de poitrail 35–50 cm (M)",
      matiere: "Nylon renforcé + clips aluminium",
      poids: "130 g (M)",
      convient_pour: "Chiens de toutes races",
      entretien: "Lavable en machine à 30°C",
      garantie: "1 an",
    },
    styleWith: ["Harnais de promenade", "Corde à nœuds"],
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
