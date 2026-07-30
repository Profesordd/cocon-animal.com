import { Product } from "./types";

const P = (id: number, w = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

// Photos arbres à chat / chats sur perchoir
const CAT_TREE_1 = P(8619782);
const CAT_TREE_2 = P(14208035);
const CAT_TREE_3 = P(7330189);
const CAT_TREE_4 = P(14799731);
const CAT_TREE_5 = P(12314315);

// Photos paniers / lits chats
const CAT_BED_1 = P(866496);    // chat siamois douillet
const CAT_BED_2 = P(64284);     // chaton cozy
const CAT_BED_3 = P(5989336);   // chat dans panier
const CAT_BED_4 = P(19518843);  // chat lit
const CAT_BED_5 = P(17853112);  // chat repos
const CAT_BED_6 = P(5240579);   // chat endormi

// Photos jouets chats
const CAT_TOY_1 = P(1340376);   // chat jouant
const CAT_TOY_2 = P(6853522);   // chat avec jouet
const CAT_TOY_3 = P(271611);    // chat et jouet
const CAT_TOY_4 = P(19237486);  // chat actif
const CAT_TOY_5 = P(7725967);   // chat tunnel/jeu

// Photos gamelles / nourriture
const DOG_BOWL_1 = P(8434633);  // gamelle chien
const DOG_BOWL_2 = P(8473517);  // chien mange
const DOG_BOWL_3 = P(8434637);  // gamelle inox
const DOG_BOWL_4 = P(8473442);  // bol chien

// Photos harnais / chiens
const DOG_HARN_1 = P(15347392); // chien harnais
const DOG_HARN_2 = P(16168081); // chien promenade
const DOG_HARN_3 = P(6679995);  // chien harnais réglable
const DOG_HARN_4 = P(15347387); // chien extérieur

// Photos laisse / promenade
const DOG_LEASH_1 = P(10994369); // chien laisse
const DOG_LEASH_2 = P(7877091);  // chien promenade laisse
const DOG_LEASH_3 = P(4317149);  // chien laisse parc

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
    images: [CAT_TREE_1, CAT_TREE_2, CAT_TREE_3],
    description: "Arbre à chat robuste avec plateformes, griffoirs en sisal naturel et nichoir douillet. Structure en panneaux MDF haute densité, recouvert de peluche douce. Idéal pour les chats actifs qui adorent grimper, griffer et observer leur environnement.",
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
    images: [DOG_HARN_2, DOG_HARN_4, DOG_HARN_3],
    description: "Coussin orthopédique en mousse à mémoire de forme qui soulage les articulations et les muscles de votre chien. Housse en microfibre ultra-douce déhoussable et lavable en machine à 30°C. Base antidérapante pour éviter les glissades.",
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
    images: [CAT_BED_1, CAT_BED_2, CAT_BED_3],
    description: "Panier ultra-doux en peluche longue avec bords rembourrés surélevés. Votre chat peut s'y lover confortablement, la tête appuyée sur les rebords. Fond antidérapant en tissu Oxford pour une stabilité totale sur tout type de sol.",
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
    images: [CAT_BED_4, CAT_TREE_4, CAT_BED_5],
    description: "Hamac mural à fixer sur les radiateurs ou sous une fenêtre grâce à ses crochets universels. Structure en métal peint, tissu Oxford résistant et confortable. Idéal pour les chats qui aiment se percher en hauteur et observer.",
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
    images: [CAT_TOY_1, CAT_TOY_2, CAT_TOY_3],
    description: "Canne à pêche télescopique 60 cm en plastique ABS solide, avec plumes naturelles colorées et grelot intégré. Le mouvement imprévisible des plumes stimule l'instinct chasseur de votre chat pour des sessions de jeu intenses et enrichissantes.",
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
    images: [CAT_TOY_4, CAT_TOY_5, CAT_TREE_5],
    description: "Tunnel en S avec 3 entrées, revêtement froissant crinkle qui attise la curiosité de votre chat, et judas central. Se plie en un clin d'œil pour un rangement facile. Parfait pour les chats qui adorent se cacher, bondir et surveiller.",
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
    images: [DOG_HARN_1, DOG_HARN_3, DOG_LEASH_1],
    description: "Corde de jeu en coton naturel tressé avec gros nœuds aux extrémités. Résistante aux mordillements et aux jeux de traction les plus intenses. Idéale pour renforcer le lien maître-chien et occuper votre compagnon.",
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
    images: [DOG_LEASH_2, DOG_LEASH_3, DOG_HARN_2],
    description: "Balle en caoutchouc naturel non toxique avec ouverture réglable pour y glisser des friandises. Chaque roulement libère une récompense et stimule l'intelligence de votre chien. Idéale pour l'occuper seul ou en jeu de recherche.",
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
    images: [DOG_BOWL_1, DOG_BOWL_2, DOG_BOWL_3],
    description: "Set de 2 gamelles en inox 304 alimentaire certifié, montées sur un support surélevé en bois naturel avec semelles en silicone antidérapantes. Design épuré, résistant à la rouille et compatible lave-vaisselle. Pour chats et chiens.",
    details: {
      dimensions: "Support 30 × 15 × 10 cm (M)",
      matiere: "Inox 304 + bois naturel + silicone",
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
    images: [CAT_BED_6, DOG_BOWL_4, CAT_BED_3],
    description: "Fontaine à eau silencieuse 2,5L avec triple filtration au charbon actif, mousse et coton. Maintient une eau fraîche et oxygénée en permanence pour encourager votre animal à boire davantage. Pompe ultra-silencieuse <30dB. Compatible chats et chiens.",
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
    images: [DOG_HARN_1, DOG_HARN_2, DOG_HARN_4],
    description: "Harnais en nylon respirant avec boucles de sécurité renforcées, poignée dorsale et bandes réfléchissantes. Réglable sur 4 points pour un ajustement parfait. Anneau en inox pour attacher la laisse. Conçu pour les chiens de toutes races.",
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
    images: [DOG_LEASH_1, DOG_LEASH_2, DOG_LEASH_3],
    description: "Laisse rétractable 5m avec mécanisme frein-blocage instantané et poignée ergonomique antidérapante. Câble en nylon renforcé, crochet pivotant en inox. Bouton de blocage accessible au pouce. Idéale pour les promenades en liberté contrôlée.",
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
