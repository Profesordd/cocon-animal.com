import { Product } from "./types";

const DC = (p: string) => `https://dog-and-cat-design.com/wp-content/uploads/${p}`;
const PX = (id: number) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800`;

export const products: Product[] = [
  // ── Collection 1 : Confort & Repos ──────────────────────────────
  {
    slug: "panier-classic-chien",
    name: "Panier Classic Graphite — Bowl & Bone",
    price: 139.90,
    category: "Confort & Repos",
    collection: "confort-repos",
    badge: "BESTSELLER",
    sizes: ["S", "M", "L", "XL"],
    images: [
      DC("2019/04/dog-bed-classic-graphite-bowlandbonerepublic-l1-600x534.webp"),
      DC("2019/04/dog-bed-classic-graphite-bowlandbonerepublic-l1-600x534.webp"),
      PX(866496),
    ],
    description: "Le panier Classic de Bowl & Bone Republic est un incontournable du design pour chien. Fabriqué à la main en Pologne, son tissu graphite ultra-résistant et sa doublure polaire moelleuse offrent un confort haut de gamme. Un objet de décoration autant qu'un nid douillet.",
    details: {
      dimensions: "65 × 50 cm (M)",
      matiere: "Tissu graphite + doublure polaire",
      poids: "1,2 kg",
      convient_pour: "Chiens de 5 à 20 kg",
      entretien: "Lavable en machine à 30°C",
      garantie: "1 an",
    },
    styleWith: ["Canapé-Lit COVO", "Coussin CORDO"],
  },
  {
    slug: "canape-covo-chien",
    name: "Canapé-Lit COVO — Miacara",
    price: 279.90,
    category: "Confort & Repos",
    collection: "confort-repos",
    badge: "EXCLUSIF",
    sizes: ["S", "M", "L"],
    images: [
      DC("2015/02/Covooooo-600x600.webp"),
      DC("2015/02/Covooooo-600x600.webp"),
      PX(7725967),
    ],
    description: "Le COVO de Miacara est un canapé-lit pour chien qui redéfinit le luxe. Structure en bois laqué blanc, coussin central en polyester recyclé ultra-doux, bolsters latéraux. Ce meuble design s'intègre dans les intérieurs les plus exigeants et devient le lieu de vie préféré de votre chien.",
    details: {
      dimensions: "80 × 60 cm (M)",
      matiere: "Bois laqué + polyester recyclé + mousse HR",
      poids: "5,5 kg",
      convient_pour: "Chiens de 5 à 30 kg",
      entretien: "Housse déhoussable lavable à 30°C",
      garantie: "2 ans",
    },
    styleWith: ["Panier Classic", "Tapis FOSSER"],
  },
  {
    slug: "panier-simone-feutre",
    name: "Panier SIMONE Laine Naturelle — Mishum",
    price: 89.90,
    category: "Confort & Repos",
    collection: "confort-repos",
    badge: "NOUVEAU",
    sizes: ["S", "M", "L"],
    images: [
      DC("2022/06/lit-design-chat-chien-feutre-laine-naturelle-3.jpg"),
      DC("2022/06/lit-design-chat-chien-feutre-laine-naturelle-3.jpg"),
      PX(866496),
    ],
    description: "Le panier SIMONE de Mishum est façonné en feutre de laine naturelle, 100% biodégradable. Sa forme arrondie et ses parois épaisses créent un cocon chaud et sécurisant pour chats et petits chiens. Chaque pièce est unique, fabriquée à la main par des artisans.",
    details: {
      dimensions: "Ø 50 cm (M)",
      matiere: "Feutre de laine naturelle 100%",
      poids: "0,8 kg",
      convient_pour: "Chats et chiens jusqu'à 8 kg",
      entretien: "Brossage doux, pas de machine",
      garantie: "1 an",
    },
    styleWith: ["Couverture TÖSSE", "Canapé COVO"],
  },
  {
    slug: "couverture-tosse-fourrure",
    name: "Couverture Imitation Fourrure TÖSSE — Labbvenn",
    price: 79.90,
    category: "Confort & Repos",
    collection: "confort-repos",
    badge: null,
    sizes: ["S", "M", "L"],
    images: [
      DC("2021/12/LABBVENN-TOSSE2.jpg"),
      DC("2021/12/LABBVENN-TOSSE2.jpg"),
      PX(866496),
    ],
    description: "La couverture TÖSSE de Labbvenn est une pièce de confort ultime, en imitation fourrure d'une douceur incomparable. Réversible, ultra-moelleuse, elle s'installe sur un canapé, un panier ou directement au sol. Votre animal ne voudra plus la quitter.",
    details: {
      dimensions: "90 × 70 cm (M)",
      matiere: "Imitation fourrure + doublure microfibre",
      poids: "0,6 kg",
      convient_pour: "Chats et chiens",
      entretien: "Lavable en machine à 40°C",
      garantie: "1 an",
    },
    styleWith: ["Panier Classic", "Canapé COVO"],
  },

  // ── Collection 2 : Jeux & Éveil ──────────────────────────────────
  {
    slug: "jouet-plume-telescopique",
    name: "Canne à Pêche Plume Interactive",
    price: 34.90,
    category: "Jeux & Éveil",
    collection: "jeux-eveil",
    badge: "BESTSELLER",
    sizes: ["Unique"],
    images: [
      PX(1340376),
      PX(271611),
      PX(6853522),
    ],
    description: "Canne à pêche en fibre de carbone avec plumes naturelles, grelot argenté et queue en soie. Le mouvement aléatoire déclenche l'instinct chasseur de votre chat pour des sessions de jeu intenses. Tige souple de 65 cm pour des trajectoires imprévisibles.",
    details: {
      dimensions: "65 cm déployée",
      matiere: "Fibre de carbone + plumes naturelles + soie",
      poids: "95 g",
      convient_pour: "Chats de tous âges",
      entretien: "Essuyage chiffon sec",
      garantie: "3 mois",
    },
    styleWith: ["Panier SIMONE", "Nid Panier COCO"],
  },
  {
    slug: "balle-distributrice",
    name: "Balle Distributrice Interactive",
    price: 44.90,
    category: "Jeux & Éveil",
    collection: "jeux-eveil",
    badge: null,
    sizes: ["Unique"],
    images: [
      PX(7725967),
      PX(6853522),
      PX(271611),
    ],
    description: "Distributeur de friandises en caoutchouc naturel non toxique avec ouverture ajustable. Chaque roulement libère une récompense et stimule les capacités cognitives de votre chien. Idéal pour les périodes seul à la maison.",
    details: {
      dimensions: "Ø 9 cm",
      matiere: "Caoutchouc naturel non toxique",
      poids: "160 g",
      convient_pour: "Chiens de toutes tailles",
      entretien: "Eau savonneuse",
      garantie: "3 mois",
    },
    styleWith: ["Corde à Nœuds", "Panier Classic"],
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
      PX(10994369),
      PX(16168081),
      PX(15347392),
    ],
    description: "Corde de jeu tressée en coton naturel certifié, avec gros nœuds aux extrémités. Le coton doux respecte les gencives de votre chien. Résistante aux sessions de traction les plus intenses. Renforce le lien maître-chien lors de chaque partie.",
    details: {
      dimensions: "42 cm (M)",
      matiere: "Coton naturel certifié 100%",
      poids: "200 g (M)",
      convient_pour: "Chiens de toutes tailles",
      entretien: "Lavable à 30°C",
      garantie: "3 mois",
    },
    styleWith: ["Balle Distributrice", "Tapis FOSSER"],
  },
  {
    slug: "panier-coco-labbvenn",
    name: "Nid Panier COCO — Labbvenn",
    price: 119.90,
    category: "Jeux & Éveil",
    collection: "jeux-eveil",
    badge: "NOUVEAU",
    sizes: ["S", "M"],
    images: [
      DC("2021/08/coco-chien-labbvenn-1.jpg"),
      DC("2021/08/coco-chien-labbvenn-1.jpg"),
      PX(1340376),
    ],
    description: "Le panier COCO de Labbvenn est un nid cocon à la fois espace de jeu et refuge sécurisant pour votre petit chien. Fabriqué à la main en tissu premium résistant, ses parois hautes et sa base souple procurent un environnement stimulant et rassurant.",
    details: {
      dimensions: "Ø 45 cm (S)",
      matiere: "Tissu premium + base mousse",
      poids: "0,7 kg",
      convient_pour: "Chiens jusqu'à 6 kg",
      entretien: "Lavable en machine à 30°C",
      garantie: "1 an",
    },
    styleWith: ["Couverture TÖSSE", "Corde à Nœuds"],
  },

  // ── Collection 3 : Quotidien & Soins ─────────────────────────────
  {
    slug: "coussin-cordo-velours",
    name: "Coussin CORDO Velours Côtelé",
    price: 74.90,
    category: "Quotidien & Soins",
    collection: "quotidien-soins",
    badge: "BESTSELLER",
    sizes: ["S", "M", "L", "XL"],
    images: [
      DC("2023/10/cordo-coussin-velours-pour-chien-min.jpg"),
      DC("2025/01/MC_2307_cord_01_low-res_36bf735b-68f6-41ae-9049-0aab4580cb34-600x600.webp"),
      PX(8434633),
    ],
    description: "Le coussin CORDO en velours côtelé est l'accessoire quotidien par excellence. Sa structure ergonomique et son rembourrage en fibres recyclées offrent un soutien orthopédique optimal. Le velours côtelé, doux et résistant, est décliné en 8 coloris intemporels.",
    details: {
      dimensions: "70 × 50 cm (M)",
      matiere: "Velours côtelé + fibres recyclées",
      poids: "1,0 kg",
      convient_pour: "Chiens de toutes tailles",
      entretien: "Housse déhoussable lavable à 30°C",
      garantie: "1 an",
    },
    styleWith: ["Panier Classic", "Tapis FOSSER"],
  },
  {
    slug: "tapis-fosser-voyage",
    name: "Tapis de Voyage FOSSER — Labbvenn",
    price: 119.90,
    category: "Quotidien & Soins",
    collection: "quotidien-soins",
    badge: null,
    sizes: ["S", "M", "L"],
    images: [
      DC("2021/08/LABBVENN-FOSSER-2.jpg"),
      DC("2021/08/LABBVENN-FOSSER-2.jpg"),
      PX(15347392),
    ],
    description: "Le tapis FOSSER de Labbvenn est le compagnon de voyage idéal. Imperméable, anti-dérapant, ultra-léger et pliable en quelques secondes. Il se glisse dans n'importe quel sac et offre à votre chien une surface confortable partout : voiture, hôtel, chez des amis.",
    details: {
      dimensions: "80 × 55 cm (M)",
      matiere: "Microfibre imperméable + antidérapant",
      poids: "0,4 kg",
      convient_pour: "Chiens de toutes tailles",
      entretien: "Lavable en machine à 40°C",
      garantie: "1 an",
    },
    styleWith: ["Coussin CORDO", "Canapé COVO"],
  },
  {
    slug: "rampe-dogbeam",
    name: "Rampe Design DOGBEAM",
    price: 149.90,
    category: "Quotidien & Soins",
    collection: "quotidien-soins",
    badge: "EXCLUSIF",
    sizes: ["Unique"],
    images: [
      DC("2024/04/RAMPE-DESIGN-POUR-CHIEN-ET-CHAT-DOGBEAM.jpg"),
      DC("2024/04/RAMPE-DESIGN-POUR-CHIEN-ET-CHAT-DOGBEAM.jpg"),
      PX(16168081),
    ],
    description: "La rampe DOGBEAM est pensée pour les chiens et chats qui ont du mal à monter sur le canapé ou le lit. Structure en bois massif laqué, surface antidérapante en textile, inclinaison optimale. Un accessoire quotidien indispensable habillé en meuble design.",
    details: {
      dimensions: "90 × 30 cm × H 40 cm",
      matiere: "Bois massif laqué + textile antidérapant",
      poids: "3,2 kg",
      convient_pour: "Chiens et chats jusqu'à 25 kg",
      entretien: "Essuyage chiffon humide",
      garantie: "2 ans",
    },
    styleWith: ["Canapé COVO", "Coussin CORDO"],
  },
  {
    slug: "panier-senso-box",
    name: "Panier Box SENSO — Miacara",
    price: 99.90,
    category: "Quotidien & Soins",
    collection: "quotidien-soins",
    badge: "NOUVEAU",
    sizes: ["S", "M", "L"],
    images: [
      DC("2025/01/MC_C02-020-02_Sleep_Senso_BoxBed_Pebble-Merle1-600x600.webp"),
      DC("2025/01/MC_C02-020-02_Sleep_Senso_BoxBed_Pebble-Merle1-600x600.webp"),
      PX(866496),
    ],
    description: "Le panier Box SENSO de Miacara allie praticité et élégance pour le quotidien. Ses parois rigides et son fond moelleux créent un espace définissable que votre animal peut s'approprier facilement. Idéal pour structurer l'espace de vie de votre compagnon tout au long de la journée.",
    details: {
      dimensions: "60 × 45 cm (M)",
      matiere: "Tissu Pebble-Merle + mousse haute densité",
      poids: "1,5 kg",
      convient_pour: "Chats et chiens jusqu'à 12 kg",
      entretien: "Housse lavable à 30°C",
      garantie: "1 an",
    },
    styleWith: ["Coussin CORDO", "Panier Classic"],
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
