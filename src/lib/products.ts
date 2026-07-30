import { Product } from "./types";

// Tuft + Paw (luxury cat brand) — Shopify CDN public
const TP = (f: string) => `https://cdn.shopify.com/s/files/1/1511/7434/files/${f}`;
// Bowsers (luxury dog brand) — Shopify CDN public
const B = (f: string) => `https://cdn.shopify.com/s/files/1/0583/8395/8127/files/${f}`;
// Pexels lifestyle (pour les accessoires)
const PX = (id: number) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800`;

export const products: Product[] = [
  // ── Collection 1 : Confort & Repos ──────────────────────────────
  {
    slug: "arbre-a-chat-premium",
    name: "Tour à Chat Grove — Tuft + Paw",
    price: 369.90,
    category: "Confort & Repos",
    collection: "confort-repos",
    badge: "BESTSELLER",
    sizes: ["Ash", "Walnut"],
    images: [
      TP("GrovePDP-1-Small.png"),
      TP("2_Hover_Grove_Tall.jpg"),
      TP("GrovePDP-Lifestyle.jpg"),
    ],
    description: "La tour à chat Grove de Tuft + Paw conjugue design scandinave et robustesse à toute épreuve. Structure en hêtre massif et peluche haut de gamme, avec plusieurs plateformes et hamac intégré. Conçue pour les intérieurs soignés, elle est aussi résistante qu'élégante.",
    details: {
      dimensions: "50 × 50 × 135 cm",
      matiere: "Hêtre massif + peluche premium",
      poids: "9,5 kg",
      convient_pour: "Chats jusqu'à 10 kg",
      entretien: "Peluche amovible lavable à 30°C",
      garantie: "2 ans",
    },
    styleWith: ["Perchoir Cloud Nine", "Gamelle & Support Dock"],
  },
  {
    slug: "coussin-orthopedique-chien",
    name: "Lit Terrace Prestige — Bowsers",
    price: 249.90,
    category: "Confort & Repos",
    collection: "confort-repos",
    badge: "NOUVEAU",
    sizes: ["S", "M", "L", "XL"],
    images: [
      B("Terrace_Bed___Seagrass.jpg?v=1785244503"),
      B("Terrace_Bed_LSAI1.jpg?v=1785176430"),
      B("Terrace_Bed_LSAI3.jpg?v=1785177230"),
    ],
    description: "Le lit Terrace de Bowsers marie tissu de créateur et confort orthopédique. Rembourrage mémoire de forme qui soulage les articulations, housse en tissu Seagrass déhoussable et lavable. Un meuble pour votre chien qui s'intègre parfaitement dans votre décoration intérieure.",
    details: {
      dimensions: "70 × 55 cm (M)",
      matiere: "Tissu de créateur + mousse mémoire de forme",
      poids: "2,4 kg",
      convient_pour: "Chiens de 10 à 30 kg",
      entretien: "Housse lavable à 30°C",
      garantie: "1 an",
    },
    styleWith: ["Tapis Cabana", "Gamelle & Support Dock"],
  },
  {
    slug: "panier-douillet-chat",
    name: "Perchoir de Fenêtre Cloud Nine — Tuft + Paw",
    price: 119.00,
    category: "Confort & Repos",
    collection: "confort-repos",
    badge: "NOUVEAU",
    sizes: ["Unique"],
    images: [
      TP("CloudNinePDP-1.jpg"),
      TP("1-CloudNineFloof-PDP-Studio-Min-820238.jpg"),
      TP("CloudNine-LifestylePDP_af4991b6-1bc7-4927-ad61-a25ffd814d00.jpg"),
    ],
    description: "Le perchoir Cloud Nine s'installe sur n'importe quelle vitre en quelques secondes grâce à ses ventouses ultra-puissantes. Votre chat dispose d'un observatoire douillet et ensoleillé. La peluche floof ultra-douce et le coussin rembourré en font le perchoir de luxe par excellence.",
    details: {
      dimensions: "55 × 35 cm",
      matiere: "Acier + peluche floof + coussin memory foam",
      poids: "1,1 kg",
      convient_pour: "Chats jusqu'à 7 kg",
      entretien: "Coussin lavable en machine",
      garantie: "1 an",
    },
    styleWith: ["Tour à Chat Grove", "Gamelle & Support Dock"],
  },
  {
    slug: "hamac-mural-chat",
    name: "Sun Lounger Prestige — Bowsers",
    price: 189.90,
    category: "Confort & Repos",
    collection: "confort-repos",
    badge: null,
    sizes: ["S", "M", "L"],
    images: [
      B("LibertyStripeSunLounger.jpg?v=1785171708"),
      B("Sun_Lounger_LSAI_1.jpg?v=1785172001"),
      B("Sun_Lounger_LSAI_2.jpg?v=1785173470"),
    ],
    description: "Le Sun Lounger Bowsers est le canapé-nid pour les chiens qui méritent ce qu'il y a de mieux. Structure solide en bois laqué, tissu Liberty Stripe exclusif, coussin central moelleux et bolsters latéraux. Un véritable meuble de salon qui deviendra vite l'endroit favori de votre chien.",
    details: {
      dimensions: "90 × 65 cm (M)",
      matiere: "Bois laqué + tissu Liberty Stripe + mousse HR",
      poids: "4,2 kg",
      convient_pour: "Chiens de 5 à 25 kg",
      entretien: "Housse déhoussable lavable à 30°C",
      garantie: "1 an",
    },
    styleWith: ["Lit Terrace Prestige", "Tapis Cabana"],
  },

  // ── Collection 2 : Jeux & Éveil ──────────────────────────────────
  {
    slug: "jouet-plume-telescopique",
    name: "Canne à Pêche Plume Interactive Premium",
    price: 34.90,
    category: "Jeux & Éveil",
    collection: "jeux-eveil",
    badge: "BESTSELLER",
    sizes: ["Unique"],
    images: [
      PX(1340376),
      PX(6853522),
      PX(271611),
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
    styleWith: ["Tour à Chat Grove", "Perchoir Cloud Nine"],
  },
  {
    slug: "tunnel-eveil-chat",
    name: "Griffoir Tour Zip — Tuft + Paw",
    price: 189.90,
    category: "Jeux & Éveil",
    collection: "jeux-eveil",
    badge: null,
    sizes: ["Ash", "Walnut"],
    images: [
      TP("Zip-ScratchPost-Ash-14520-web-1x1-updated.jpg"),
      TP("2_Hover_Zip.jpg"),
      TP("Zip-ScratchPost-Lifestyle-PDP-1x1-updated.jpg"),
    ],
    description: "Le griffoir Zip de Tuft + Paw est un objet de design autant qu'un accessoire fonctionnel. Base en bois massif lestée pour une stabilité parfaite, colonne de sisal tressé à la main. Sa silhouette épurée s'intègre dans les intérieurs les plus soignés.",
    details: {
      dimensions: "Ø 30 × H 60 cm",
      matiere: "Hêtre massif + sisal tressé main",
      poids: "4,8 kg",
      convient_pour: "Chats de tous âges",
      entretien: "Brosse sisal douce",
      garantie: "1 an",
    },
    styleWith: ["Tour à Chat Grove", "Canne à Pêche Plume"],
  },
  {
    slug: "corde-noeuds-chien",
    name: "Corde à Nœuds Coton Naturel Premium",
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
    description: "Corde de jeu tressée en coton naturel certifié, avec gros nœuds aux extrémités. Le coton doux respecte les gencives de votre chien. Résistante aux sessions de traction et de mordillements les plus intenses. Renforce le lien maître-chien lors de chaque partie.",
    details: {
      dimensions: "42 cm (M)",
      matiere: "Coton naturel certifié 100%",
      poids: "200 g (M)",
      convient_pour: "Chiens de toutes tailles",
      entretien: "Lavable à 30°C",
      garantie: "3 mois",
    },
    styleWith: ["Balle Distributrice", "Sun Lounger"],
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
      PX(19237486),
      PX(6853522),
    ],
    description: "Distributeur de friandises en caoutchouc naturel non toxique avec ouverture ajustable. Chaque roulement libère une récompense et stimule les capacités cognitives de votre chien. Idéal pour les périodes seul à la maison. Facilement lavable.",
    details: {
      dimensions: "Ø 9 cm",
      matiere: "Caoutchouc naturel non toxique",
      poids: "160 g",
      convient_pour: "Chiens de toutes tailles",
      entretien: "Eau savonneuse",
      garantie: "3 mois",
    },
    styleWith: ["Corde à Nœuds", "Lit Terrace Prestige"],
  },

  // ── Collection 3 : Quotidien & Soins ─────────────────────────────
  {
    slug: "gamelle-inox-antiderapante",
    name: "Gamelle & Support Dock — Tuft + Paw",
    price: 59.00,
    category: "Quotidien & Soins",
    collection: "quotidien-soins",
    badge: "BESTSELLER",
    sizes: ["S", "M", "L"],
    images: [
      TP("DockStandV2-PDP-1c-min.jpg"),
      TP("DockStandV2-PDP-1b-min.jpg"),
      TP("DockStand-PDP-Lifestyle.jpg"),
    ],
    description: "La gamelle Dock de Tuft + Paw révolutionne l'heure du repas. Support en bois massif avec ventouses en silicone antidérapantes, gamelle en inox alimentaire qui s'emboîte et se retire d'un geste. Design épuré en 5 coloris pour s'intégrer dans votre intérieur.",
    details: {
      dimensions: "Ø 15 cm, H 8 cm (M)",
      matiere: "Hêtre massif + inox 304 + silicone",
      poids: "320 g",
      convient_pour: "Chats et chiens",
      entretien: "Gamelle compatible lave-vaisselle",
      garantie: "2 ans",
    },
    styleWith: ["Fontaine Filtrante", "Perchoir Cloud Nine"],
  },
  {
    slug: "fontaine-filtrante",
    name: "Fontaine Filtrante Silencieuse 2,5 L",
    price: 149.90,
    category: "Quotidien & Soins",
    collection: "quotidien-soins",
    badge: "EXCLUSIF",
    sizes: ["Unique"],
    images: [
      PX(5240579),
      PX(866496),
      PX(8434633),
    ],
    description: "Fontaine silencieuse 2,5 L avec triple filtration — charbon actif, mousse antibactérienne et coton filtrant. L'eau reste fraîche et oxygénée en permanence pour encourager votre animal à s'hydrater davantage. Pompe ultra-silencieuse < 30 dB. Compatible chats et chiens.",
    details: {
      dimensions: "22 × 18 × 20 cm",
      matiere: "ABS alimentaire + triple filtre",
      poids: "680 g (vide)",
      convient_pour: "Chats et chiens",
      entretien: "Nettoyage hebdo, filtre /mois",
      garantie: "2 ans",
    },
    styleWith: ["Gamelle & Support Dock", "Tour à Chat Grove"],
  },
  {
    slug: "harnais-promenade",
    name: "Harnais Mesh Réglable Anti-Fugue",
    price: 89.90,
    category: "Quotidien & Soins",
    collection: "quotidien-soins",
    badge: null,
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      PX(15347392),
      PX(16168081),
      PX(6679995),
    ],
    description: "Harnais en mesh respirant ultra-léger avec boucles de sécurité renforcées et bandes réfléchissantes pour les promenades nocturnes. Réglable sur 4 points, anneau en inox pour la laisse. Ergonomique, il épouse la morphologie de votre chien sans contraindre ses mouvements.",
    details: {
      dimensions: "Tour de poitrail 40–55 cm (M)",
      matiere: "Mesh polyester + boucles polypropylène",
      poids: "115 g (M)",
      convient_pour: "Chiens de toutes races",
      entretien: "Lavable en machine à 30°C",
      garantie: "1 an",
    },
    styleWith: ["Tapis Cabana", "Corde à Nœuds"],
  },
  {
    slug: "laisse-extensible",
    name: "Tapis Cabana Prestige — Bowsers",
    price: 99.00,
    category: "Quotidien & Soins",
    collection: "quotidien-soins",
    badge: null,
    sizes: ["S", "M", "L"],
    images: [
      B("Liberty_Stripe_Cabana_Mat.jpg?v=1785182763"),
      B("CabanaMatLSAI2.jpg?v=1785182714"),
      B("CabanaMatLSAI3.jpg?v=1785182951"),
    ],
    description: "Le tapis Cabana de Bowsers combine durabilité et esthétique haut de gamme. Tissu Liberty Stripe résistant à l'eau et aux griffures, rembourrage dense pour un confort optimal en déplacement. Idéal pour la voiture, le camping ou simplement en appoint à la maison.",
    details: {
      dimensions: "75 × 55 cm (M)",
      matiere: "Tissu Liberty Stripe + rembourrage HD",
      poids: "1,1 kg",
      convient_pour: "Chiens de toutes tailles",
      entretien: "Lavable en machine à 30°C",
      garantie: "1 an",
    },
    styleWith: ["Lit Terrace Prestige", "Harnais Mesh"],
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
