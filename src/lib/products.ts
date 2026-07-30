import { Product } from "./types";

const CDN = "https://www.animalis.com/dw/image/v2/BKDP_PRD/on/demandware.static/-/Sites-animalis-master-catalog/default";
const A = (hash: string, file: string) => `${CDN}/${hash}/media/mid/1/${file}`;

export const products: Product[] = [
  // ── Collection 1 : Confort & Repos ──────────────────────────────
  {
    slug: "arbre-a-chat-premium",
    name: "Arbre à Chat Moon 135 cm",
    price: 189.90,
    category: "Confort & Repos",
    collection: "confort-repos",
    badge: "BESTSELLER",
    sizes: ["M", "L", "XL"],
    images: [
      A("dwfff8c421", "3700602122564-1.jpg"),
      A("dw36401de9", "3700602122557-1.jpg"),
      A("dwcfcd04f5", "3541990351996-1.jpg"),
    ],
    description: "Arbre à chat multi-niveaux conçu pour les chats qui aiment grimper, observer et se reposer en hauteur. Structure en panneaux MDF haute densité, revêtement en peluche ultra-douce et griffoirs en sisal naturel tressé. Assemblage solide pensé pour les chats actifs.",
    details: {
      dimensions: "50 × 50 × 135 cm",
      matiere: "MDF + peluche + sisal naturel",
      poids: "7,2 kg",
      convient_pour: "Chats jusqu'à 8 kg",
      entretien: "Brosse douce",
      garantie: "1 an",
    },
    styleWith: ["Panier Donut Chat", "Jouet Canne à Pêche", "Tunnel d'Éveil"],
  },
  {
    slug: "coussin-orthopedique-chien",
    name: "Coussin Orthopédique Mémoire de Forme",
    price: 149.90,
    category: "Confort & Repos",
    collection: "confort-repos",
    badge: "NOUVEAU",
    sizes: ["S", "M", "L", "XL"],
    images: [
      A("dwabade560", "8435637415996-1.jpg"),
      A("dwd90e4aad", "8435637415972-1.jpg"),
      A("dw7f816b6b", "8435637440226-1.jpg"),
    ],
    description: "Coussin en mousse à mémoire de forme haute densité qui soulage les articulations et muscles de votre chien. Housse en microfibre ultra-douce déhoussable et lavable à 30°C. Base en silicone antidérapante. Idéal pour les chiens seniors ou à mobilité réduite.",
    details: {
      dimensions: "70 × 50 cm (L)",
      matiere: "Mousse mémoire de forme + microfibre",
      poids: "1,4 kg",
      convient_pour: "Chiens de 5 à 30 kg",
      entretien: "Housse lavable à 30°C",
      garantie: "1 an",
    },
    styleWith: ["Gamelle Inox", "Harnais de Promenade"],
  },
  {
    slug: "panier-douillet-chat",
    name: "Panier Donut Ultra-Doux pour Chat",
    price: 89.90,
    category: "Confort & Repos",
    collection: "confort-repos",
    badge: "NOUVEAU",
    sizes: ["S", "M", "L"],
    images: [
      A("dwb2fe7b3c", "8435637415286-1.jpg"),
      A("dw6c973f5d", "8435637415231-1.jpg"),
      A("dw068d0f65", "8435637415255-1.jpg"),
    ],
    description: "Panier rond en peluche longue extra-douce avec bords rembourrés surélevés. Votre chat s'y love naturellement, tête appuyée sur les rebords. Fond en tissu Oxford antidérapant pour une stabilité totale. Lavable en machine, maintient sa forme après lavage.",
    details: {
      dimensions: "50 × 50 × 18 cm (M)",
      matiere: "Peluche longue + Oxford antidérapant",
      poids: "0,7 kg",
      convient_pour: "Chats jusqu'à 6 kg",
      entretien: "Lavable en machine à 30°C",
      garantie: "6 mois",
    },
    styleWith: ["Arbre à Chat Moon", "Jouet Canne à Pêche"],
  },
  {
    slug: "hamac-mural-chat",
    name: "Nid Cocon Suspendu en Peluche",
    price: 64.90,
    category: "Confort & Repos",
    collection: "confort-repos",
    badge: null,
    sizes: ["Unique"],
    images: [
      A("dw90d4be44", "8435637440257-1.jpg"),
      A("dwb0ba1bad", "8435637440264-1.png"),
      A("dw59522851", "PM600859_M-1.jpg"),
    ],
    description: "Nid enveloppant en peluche ultra-douce avec rembourrage épais. Sa forme cocon procure un sentiment de sécurité et de chaleur à votre chat. Léger, facile à déplacer. Le refuge idéal pour les chats qui aiment les espaces intimes et discrets.",
    details: {
      dimensions: "42 × 36 cm",
      matiere: "Peluche ultra-douce + rembourrage polyester",
      poids: "0,45 kg",
      convient_pour: "Chats jusqu'à 5 kg",
      entretien: "Lavable en machine à 30°C",
      garantie: "6 mois",
    },
    styleWith: ["Panier Donut Chat", "Arbre à Chat Moon"],
  },

  // ── Collection 2 : Jeux & Éveil ──────────────────────────────────
  {
    slug: "jouet-plume-telescopique",
    name: "Canne à Pêche Flexible avec Plumes",
    price: 34.90,
    category: "Jeux & Éveil",
    collection: "jeux-eveil",
    badge: "BESTSELLER",
    sizes: ["Unique"],
    images: [
      A("dw5ad16a45", "3575070021639-1.jpg"),
      A("dw13ce694a", "8435637440714-1.jpg"),
      A("dwb20b9dd0", "3575070019513-1.jpg"),
    ],
    description: "Canne à pêche flexible 60 cm avec plumes naturelles colorées et grelot intégré. Le mouvement aléatoire et imprévisible des plumes déclenche l'instinct chasseur de votre chat. Tige en fibre flexible pour des trajectoires réalistes. Une séance de jeu intense à chaque utilisation.",
    details: {
      dimensions: "60 cm déployée",
      matiere: "Fibre + plumes naturelles + grelot",
      poids: "80 g",
      convient_pour: "Chats de tous âges",
      entretien: "Essuyage chiffon humide",
      garantie: "3 mois",
    },
    styleWith: ["Tunnel d'Éveil", "Panier Donut Chat"],
  },
  {
    slug: "tunnel-eveil-chat",
    name: "Tunnel d'Éveil 3 Sorties 80 cm",
    price: 59.90,
    category: "Jeux & Éveil",
    collection: "jeux-eveil",
    badge: null,
    sizes: ["Unique"],
    images: [
      A("dwf4a8c998", "8435637437837-1.JPG"),
      A("dw7a87e528", "4011905430447-1.jpg"),
      A("dwd424bf9b", "5400585002393-1.jpg"),
    ],
    description: "Tunnel pliable avec 3 entrées et revêtement froissant crinkle qui attise la curiosité. Judas central pour une surveillance ludique. Se plie en quelques secondes pour un rangement facile. Idéal pour les chats qui aiment se cacher, bondir et traquer.",
    details: {
      dimensions: "80 × 25 cm déployé",
      matiere: "Polyester renforcé + armature spiralée",
      poids: "220 g",
      convient_pour: "Chats de tous âges",
      entretien: "Brosse douce",
      garantie: "3 mois",
    },
    styleWith: ["Jouet Canne à Pêche", "Arbre à Chat Moon"],
  },
  {
    slug: "corde-noeuds-chien",
    name: "Corde à Nœuds Coton Naturel",
    price: 29.90,
    category: "Jeux & Éveil",
    collection: "jeux-eveil",
    badge: null,
    sizes: ["S", "M", "L"],
    images: [
      A("dwffb4ea4f", "8023222093010-1.jpg"),
      A("dw3deb6fa9", "8023222226920-1.jpg"),
      A("dw94b987a4", "3700602121826-1.jpg"),
    ],
    description: "Corde de jeu en coton naturel tressé 100%, avec gros nœuds aux extrémités. Résistante aux mordillements et aux jeux de traction. Le coton naturel respecte les gencives de votre chien. Idéale pour renforcer le lien maître-chien lors des sessions de jeu.",
    details: {
      dimensions: "40 cm (M)",
      matiere: "Coton naturel tressé 100%",
      poids: "190 g (M)",
      convient_pour: "Chiens de toutes tailles",
      entretien: "Lavable à 30°C",
      garantie: "3 mois",
    },
    styleWith: ["Harnais de Promenade", "Distributeur à Friandises"],
  },
  {
    slug: "balle-distributrice",
    name: "Distributeur à Friandises Interactif",
    price: 44.90,
    category: "Jeux & Éveil",
    collection: "jeux-eveil",
    badge: null,
    sizes: ["Unique"],
    images: [
      A("dwe1a79843", "8435637438117-1.jpg"),
      A("dw94b987a4", "3700602121826-1.jpg"),
      A("dwffb4ea4f", "8023222093010-1.jpg"),
    ],
    description: "Distributeur à friandises en caoutchouc naturel non toxique. Chaque roulement libère une récompense et stimule l'intelligence de votre chien. L'ouverture est réglable pour adapter la difficulté. Parfait pour occuper votre chien en votre absence.",
    details: {
      dimensions: "Ø 9 cm",
      matiere: "Caoutchouc naturel non toxique",
      poids: "160 g",
      convient_pour: "Chiens de toutes tailles",
      entretien: "Eau savonneuse",
      garantie: "3 mois",
    },
    styleWith: ["Corde à Nœuds", "Gamelle Inox"],
  },

  // ── Collection 3 : Quotidien & Soins ─────────────────────────────
  {
    slug: "gamelle-inox-antiderapante",
    name: "Gamelle Inox Anti-Moustaches pour Chat",
    price: 59.90,
    category: "Quotidien & Soins",
    collection: "quotidien-soins",
    badge: "BESTSELLER",
    sizes: ["S", "M", "L"],
    images: [
      A("dwb0b631b8", "3700602117799-1.jpg"),
      A("dw2ffde3fc", "PM600620_M-1.jpg"),
      A("dw0d3afe08", "PM603491_M-1.jpg"),
    ],
    description: "Gamelle en inox 304 alimentaire certifié avec bords évasés Vibrissa qui respectent les moustaches sensibles de votre chat. Socle en silicone antidérapant. Résistante à la rouille, compatible lave-vaisselle. Design épuré qui s'intègre dans n'importe quel intérieur.",
    details: {
      dimensions: "Ø 16 cm (M)",
      matiere: "Inox 304 + silicone alimentaire",
      poids: "200 g",
      convient_pour: "Chats et petits chiens",
      entretien: "Compatible lave-vaisselle",
      garantie: "2 ans",
    },
    styleWith: ["Fontaine Filtrante", "Coussin Orthopédique"],
  },
  {
    slug: "fontaine-filtrante",
    name: "Fontaine Filtrante Silencieuse 2,5 L",
    price: 159.90,
    category: "Quotidien & Soins",
    collection: "quotidien-soins",
    badge: "EXCLUSIF",
    sizes: ["Unique"],
    images: [
      A("dw0d3afe08", "PM603491_M-1.jpg"),
      A("dw54987fa6", "3700602109824-1.jpg"),
      A("dw9659e780", "8435637443845-1.JPG"),
    ],
    description: "Fontaine à eau silencieuse 2,5 L avec triple filtration — charbon actif, mousse et coton. L'eau reste fraîche et oxygénée en permanence, encourageant votre animal à boire davantage et réduisant les risques de problèmes rénaux. Pompe ultra-silencieuse < 30 dB.",
    details: {
      dimensions: "22 × 18 × 20 cm",
      matiere: "ABS alimentaire + filtre charbon actif",
      poids: "650 g (vide)",
      convient_pour: "Chats et chiens",
      entretien: "Nettoyage hebdo, filtre mensuel",
      garantie: "2 ans",
    },
    styleWith: ["Gamelle Inox", "Panier Donut Chat"],
  },
  {
    slug: "harnais-promenade",
    name: "Harnais Mesh Respirant pour Chien",
    price: 89.90,
    category: "Quotidien & Soins",
    collection: "quotidien-soins",
    badge: null,
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      A("dw129bc8c3", "PM8000183_M-1.jpg"),
      A("dwd85b00b2", "PM8000172_M-1.jpg"),
      A("dw9308543f", "PM586625_M-1.jpg"),
    ],
    description: "Harnais en mesh respirant ultra-léger avec boucles de sécurité renforcées et bandes réfléchissantes pour les promenades nocturnes. Réglable sur 4 points pour un ajustement parfait. Anneau en inox pour la laisse. Conçu pour des promenades longue durée en toute sécurité.",
    details: {
      dimensions: "Tour de poitrail 40–55 cm (M)",
      matiere: "Mesh polyester + boucles polypropylène",
      poids: "115 g (M)",
      convient_pour: "Chiens de toutes races",
      entretien: "Lavable en machine à 30°C",
      garantie: "1 an",
    },
    styleWith: ["Harnais Essentials", "Corde à Nœuds"],
  },
  {
    slug: "laisse-extensible",
    name: "Harnais Essentials Nylon Premium",
    price: 79.90,
    category: "Quotidien & Soins",
    collection: "quotidien-soins",
    badge: null,
    sizes: ["XS", "S", "M", "L"],
    images: [
      A("dwd85b00b2", "PM8000172_M-1.jpg"),
      A("dw129bc8c3", "PM8000183_M-1.jpg"),
      A("dw9308543f", "PM586625_M-1.jpg"),
    ],
    description: "Harnais en nylon haute résistance avec finitions premium, clips de sécurité double verrouillage et anneaux en métal renforcé. Design ergonomique qui épouse la morphologie de votre chien sans gêner ses mouvements. La référence pour les chiens actifs.",
    details: {
      dimensions: "Tour de poitrail 35–50 cm (M)",
      matiere: "Nylon renforcé + clips aluminium",
      poids: "135 g (M)",
      convient_pour: "Chiens de toutes races",
      entretien: "Lavable en machine à 30°C",
      garantie: "1 an",
    },
    styleWith: ["Harnais Mesh Respirant", "Corde à Nœuds"],
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
