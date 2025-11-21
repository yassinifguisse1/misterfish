export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image?: string;
  isSpecial?: boolean;
  allergens?: string[];
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

export const menuCategories: MenuCategory[] = [
  {
    id: "entrees",
    name: "Les Entrées",
    description: "Commencez votre repas avec nos délicieuses entrées fraîches",
  },
  {
    id: "poissons",
    name: "Poissons Frais",
    description: "Poissons frais pêchés quotidiennement, grillés à la perfection",
  },
  {
    id: "fritures",
    name: "Fritures",
    description: "Fritures croustillantes de la mer Méditerranée",
  },
  {
    id: "tajines",
    name: "Tajines Marocains",
    description: "Tajines traditionnels aux saveurs authentiques du Maroc",
  },
  {
    id: "plats-combines",
    name: "Plats Combinés",
    description: "Assortiments généreux pour une expérience complète",
  },
  {
    id: "desserts",
    name: "Desserts",
    description: "Douceurs pour terminer votre repas en beauté",
  },
  {
    id: "boissons",
    name: "Boissons",
    description: "Rafraîchissements et boissons chaudes",
  },
];

export const menuItems: MenuItem[] = [
  // Entrées
  {
    id: "ent-1",
    name: "Soupe du Jour",
    description: "Chef's daily soup with fresh herbs and warm bread",
    price: "65 MAD",
    category: "entrees",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },
  {
    id: "ent-2",
    name: "Salade Niçoise",
    description: "Fresh tuna, green beans, olives, tomatoes, and anchovies",
    price: "85 MAD",
    category: "entrees",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },
  {
    id: "ent-3",
    name: "Bruschetta Trio",
    description: "Tomato basil, mushroom truffle, and goat cheese",
    price: "75 MAD",
    category: "entrees",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },
  {
    id: "ent-4",
    name: "Crevettes à l'Ail",
    description: "Garlic prawns sautéed in white wine and butter",
    price: "95 MAD",
    category: "entrees",
    isSpecial: true,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },
  {
    id: "ent-5",
    name: "Carpaccio de Bœuf",
    description: "Thinly sliced beef with arugula, parmesan and truffle oil",
    price: "110 MAD",
    category: "entrees",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },
  {
    id: "ent-6",
    name: "Salade de Calmars",
    description: "Grilled squid salad with lemon and fresh herbs",
    price: "90 MAD",
    category: "entrees",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },

  // Poissons Frais
  {
    id: "poi-1",
    name: "Grilled Sea Bass",
    description: "Fresh Mediterranean sea bass with lemon butter sauce",
    price: "185 MAD",
    category: "poissons",
    isSpecial: true,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },
  {
    id: "poi-2",
    name: "Dorade Royale Grillée",
    description: "Whole grilled sea bream with herbs and olive oil",
    price: "195 MAD",
    category: "poissons",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },
  {
    id: "poi-3",
    name: "Saumon Atlantique",
    description: "Fresh Atlantic salmon with dill cream sauce",
    price: "175 MAD",
    category: "poissons",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },
  {
    id: "poi-4",
    name: "Loup de Mer",
    description: "Grilled sea wolf with Mediterranean vegetables",
    price: "205 MAD",
    category: "poissons",
    isSpecial: true,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },
  {
    id: "poi-5",
    name: "Thon Rouge",
    description: "Seared tuna steak with sesame crust",
    price: "220 MAD",
    category: "poissons",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },
  {
    id: "poi-6",
    name: "Rouget Grillé",
    description: "Grilled red mullet with garlic and parsley",
    price: "165 MAD",
    category: "poissons",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },

  // Fritures
  {
    id: "fri-1",
    name: "Friture de Calmars",
    description: "Crispy fried calamari rings with aioli",
    price: "120 MAD",
    category: "fritures",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },
  {
    id: "fri-2",
    name: "Gambas Fritas",
    description: "Golden fried prawns with tartare sauce",
    price: "145 MAD",
    category: "fritures",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },
  {
    id: "fri-3",
    name: "Petite Friture",
    description: "Mixed small fried fish, Mediterranean style",
    price: "110 MAD",
    category: "fritures",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },
  {
    id: "fri-4",
    name: "Beignets de Poisson",
    description: "Fish fritters with spicy sauce",
    price: "95 MAD",
    category: "fritures",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },
  {
    id: "fri-5",
    name: "Friture Mixte",
    description: "Mixed seafood platter with calamari, prawns, and fish",
    price: "155 MAD",
    category: "fritures",
    isSpecial: true,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },

  // Tajines Marocains
  {
    id: "taj-1",
    name: "Tagine Royal",
    description: "Traditional Moroccan lamb tagine with apricots and almonds",
    price: "165 MAD",
    category: "tajines",
    isSpecial: true,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },
  {
    id: "taj-2",
    name: "Tajine de Poulet aux Olives",
    description: "Chicken tagine with green olives and preserved lemon",
    price: "135 MAD",
    category: "tajines",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },
  {
    id: "taj-3",
    name: "Tajine de Poisson",
    description: "Fish tagine with vegetables and Moroccan spices",
    price: "155 MAD",
    category: "tajines",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },
  {
    id: "taj-4",
    name: "Tajine de Kefta",
    description: "Meatball tagine with tomato sauce and eggs",
    price: "145 MAD",
    category: "tajines",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },
  {
    id: "taj-5",
    name: "Tajine Végétarien",
    description: "Vegetable tagine with seasonal vegetables and spices",
    price: "115 MAD",
    category: "tajines",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },
  {
    id: "taj-6",
    name: "Tajine d'Agneau aux Pruneaux",
    description: "Lamb tagine with prunes and honey",
    price: "175 MAD",
    category: "tajines",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },

  // Plats Combinés
  {
    id: "com-1",
    name: "Paella Marinara",
    description: "Seafood paella with mussels, prawns, and calamari",
    price: "195 MAD",
    category: "plats-combines",
    isSpecial: true,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },
  {
    id: "com-2",
    name: "Plateau de Fruits de Mer",
    description: "Seafood platter for two with oysters, prawns, and mussels",
    price: "450 MAD",
    category: "plats-combines",
    isSpecial: true,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },
  {
    id: "com-3",
    name: "Risotto aux Champignons",
    description: "Creamy mushroom risotto with truffle and parmesan",
    price: "145 MAD",
    category: "plats-combines",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },
  {
    id: "com-4",
    name: "Steak Frites",
    description: "Prime beef tenderloin with peppercorn sauce and fries",
    price: "220 MAD",
    category: "plats-combines",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },
  {
    id: "com-5",
    name: "Couscous Royal",
    description: "Traditional couscous with lamb, chicken, and merguez",
    price: "185 MAD",
    category: "plats-combines",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },
  {
    id: "com-6",
    name: "Assiette Mixte Grill",
    description: "Mixed grill with fish, prawns, and calamari",
    price: "210 MAD",
    category: "plats-combines",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },

  // Desserts
  {
    id: "des-1",
    name: "Crème Brûlée",
    description: "Classic vanilla custard with caramelized sugar",
    price: "55 MAD",
    category: "desserts",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },
  {
    id: "des-2",
    name: "Tiramisu Maison",
    description: "Homemade Italian tiramisu with espresso",
    price: "60 MAD",
    category: "desserts",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },
  {
    id: "des-3",
    name: "Tarte aux Pommes",
    description: "Apple tart with vanilla ice cream",
    price: "50 MAD",
    category: "desserts",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },
  {
    id: "des-4",
    name: "Panna Cotta",
    description: "Italian panna cotta with berry coulis",
    price: "55 MAD",
    category: "desserts",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },
  {
    id: "des-5",
    name: "Baklava Marocain",
    description: "Traditional Moroccan baklava with honey and nuts",
    price: "45 MAD",
    category: "desserts",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },
  {
    id: "des-6",
    name: "Coupe de Glace",
    description: "Ice cream sundae with seasonal fruits",
    price: "65 MAD",
    category: "desserts",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },

  // Boissons
  {
    id: "boi-1",
    name: "Thé à la Menthe",
    description: "Traditional Moroccan mint tea",
    price: "25 MAD",
    category: "boissons",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },
  {
    id: "boi-2",
    name: "Café Espresso",
    description: "Italian espresso",
    price: "20 MAD",
    category: "boissons",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },
  {
    id: "boi-3",
    name: "Jus d'Orange Frais",
    description: "Freshly squeezed orange juice",
    price: "35 MAD",
    category: "boissons",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },
  {
    id: "boi-4",
    name: "Eau Minérale",
    description: "Still or sparkling mineral water",
    price: "15 MAD",
    category: "boissons",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },
  {
    id: "boi-5",
    name: "Coca-Cola / Sprite",
    description: "Soft drinks",
    price: "20 MAD",
    category: "boissons",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },
  {
    id: "boi-6",
    name: "Vin de la Maison",
    description: "House wine - red, white, or rosé",
    price: "150 MAD",
    category: "boissons",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain",
  },
];