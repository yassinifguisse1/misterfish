


export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: string;
  category: string;
  image?: string;
  isSpecial?: boolean;
  allergens?: string[];
}

export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  icon?: string;
}
export const menuCategories: MenuCategory[] = [
  { id: "entrees", name: "Les Entrées", description: "Salades et entrées froides/délicieuses" },
  { id: "soupes", name: "Soupes", description: "Soupes maison" },
  { id: "crustaces", name: "Les Crustacés", description: "Fruits de mer et crustacés" },
  { id: "fritures", name: "Les Fritures", description: "Frit ou grillé - servis avec légumes sautés ou riz" },
  { id: "brochettes", name: "Brochette Poisson", description: "Brochettes et filets" },
  { id: "specialite-chef", name: "Spécialité du Chef", description: "Les plats signatures du chef" },
  { id: "arrivage", name: "L'Arrivage du Jour", description: "Poissons et arrivages - prix/kg" },
  { id: "plats-familliaux", name: "Plats Familliaux", description: "Salades et plateaux pour groupes" },
  { id: "pizza-pasta", name: "Pizzas & Pasta", description: "Pizzas, pâtes et gratins" },
  { id: "plats", name: "Les Plats", description: "Plats chauds, paninis, burgers, tacos" },
  { id: "assiettes-fruits", name: "Les Assiettes de Fruits", description: "Assiettes de fruits fraîs" },
  { id: "desserts", name: "Desserts", description: "Douceurs et glaces" },
  { id: "jus", name: "Jus", description: "Jus frais" },
  { id: "boissons", name: "Boissons", description: "Boissons fraîches et chaudes" },
  { id: "supplements", name: "Les Suppléments", description: "Suppléments et accompagnements" },
];

export const menuItems: MenuItem[] = [
  // LES ENTRÉES
  { id: "ent-01", name: "Salade Composée", description: "Salade Verte, Concombre, Riz, Thon, Maïs, Fromage, Fruit De Mer, œuf, Betterave, Carotte, Ananas, Mangue, Escalope, Fruits Secs, Ebly, Pâtes, Gambas, Avocat, Tomate Cerise", price: "90 DH", category: "entrees" },
  { id: "ent-02", name: "Salade Du Chef", description: "Salade Verte, Fruits De Mer, Betterave, Thon, Maïs, Fromage, œuf, Tomate Cerise, Ebly, Escalope, Avocat, Ananas", price: "80 DH", category: "entrees" },
  { id: "ent-03", name: "Salade Mister Fish", description: "Salade Verte, Riz, Thon, Maïs, Fromage, Russe, Ananas, Fruits De Mer, œuf, Escalope, Tomate Cerise", price: "70 DH", category: "entrees" },
  { id: "ent-04", name: "Salade Pêcheur", description: "Fruits De Mer, Salade Verte, Tomate Cerise, Crevette", price: "80 DH", category: "entrees" },
  { id: "ent-05", name: "Salade Cocktail Aux Crevettes", description: "Ananas Frais, Mangue, Crevettes", price: "90 DH", category: "entrees" },
  { id: "ent-06", name: "Salade Avocat Aux Crevettes", description: "Salade Verte, Carotte Râpée, Crevette, Avocat", price: "70 DH", category: "entrees" },
  { id: "ent-07", name: "Salade Tomate Mozzarella", description: "Tomates Cerises, Mozzarella, Basilic", price: "60 DH", category: "entrees" },
  { id: "ent-08", name: "Salade Saumon Fumée", description: "Saumon fumé, salade verte", price: "95 DH", category: "entrees" },
  { id: "ent-09", name: "Salade De Poulpe", description: "Purée, Poulpe, Salade Verte", price: "80 DH", category: "entrees" },
  { id: "ent-10", name: "Salade Du Thon", description: "Salade Verte, Oignon, Tomate, Thon", price: "50 DH", category: "entrees" },
  { id: "ent-11", name: "Salade Niçoise", description: "Salade Verte, Pâtes, Betterave, Concombre, Carotte, Thon, Maïs, Œuf", price: "40 DH", category: "entrees" },
  { id: "ent-12", name: "Salade Marocaine", description: "Salade Verte, Tomates, Oignon, Œuf, Concombre, Thon", price: "40", category: "entrees" },
  { id: "ent-13", name: "Salade César", description: "Salade Verte, Poulet, Tranches De Pain, Œuf, Fromage, Tomates Cerises, Anchois Marinés", price: "50 DH", category: "entrees" },
  { id: "ent-14", name: "Salade Russe", description: "Salade Verte, Carotte, Pomme De Terre, Œuf, Oignon, Thon, Maïs", price: "40 DH", category: "entrees" },
  { id: "ent-15", name: "Salade Asiatique", description: "Salade Verte, Carotte, Pomme De Terre, œuf, Oignon, Thon, Maïs, Sauce Mayonnaise", price: "85 DH", category: "entrees" },
  { id: "ent-16", name: "Salade De Choux Aux Fruits", description: "Salade Verte, Choux Rouge, Pomme, Ananas, Fruits Sec, Miel, Crevette, Yaourt, Jus D’orange/Citron", price: "70 DH", category: "entrees" },

  // LES SUPPLÉMENTS (entrée/footer)
  // { id: "sup-01", name: "Thon (Supplément)", description: "Supplément thon", price: "20 DH", category: "supplements" },
  // { id: "sup-02", name: "Fruits de mer (Supplément)", description: "Supplément fruits de mer", price: "50 DH", category: "supplements" },
  // { id: "sup-03", name: "Avocat (Supplément)", description: "Supplément avocat", price: "20 DH", category: "supplements" },
  // { id: "sup-04", name: "Escalope (Supplément)", description: "Supplément escalope", price: "30 DH", category: "supplements" },
  // { id: "sup-05", name: "Riz (Supplément)", description: "Riz", price: "30 DH", category: "supplements" },
  // { id: "sup-06", name: "Frites", description: "Frites", price: "15 DH", category: "supplements" },
  // { id: "sup-07", name: "Fruits secs", description: "Fruits secs", price: "20 DH", category: "supplements" },
  // { id: "sup-08", name: "Ananas (Supplément)", description: "Ananas", price: "15 DH", category: "supplements" },
  // { id: "sup-09", name: "Amuse Bouche", description: "Amuse bouche", price: "20 DH", category: "supplements" },

  // SOUPES
  { id: "soup-01", name: "Soupe De Poisson", price: "40 DH", category: "soupes" },
  { id: "soup-02", name: "Soupe Almejas",  price: "55 DH", category: "soupes" },
  { id: "soup-03", name: "Soupe Royale Mister Fish",  price: "70 DH", category: "soupes" },
  // LES CRUSTACÉS

  { id: "cru-01", name: "Les Huîtres (6 Pièces)",  price: "90 DH", category: "crustaces" },
  { id: "cru-02", name: "Les Huîtres Gratinées (6 Pièces)",  price: "120 DH", category: "crustaces" },
  { id: "cru-03", name: "Les Huîtres Saumon Crevette (6 Pièces)", price: "180 DH", category: "crustaces" },
  { id: "cru-04", name: "Les Palourdes Almejas",  price: "100 DH", category: "crustaces" },
  { id: "cru-05", name: "Les Couteaux De Mer",  price: "80 DH", category: "crustaces" },
  { id: "cru-06", name: "Les Moules Marinées",  price: "90 DH", category: "crustaces" },
  { id: "cru-07", name: "Langouste Grillée 500g",  price: "350 DH", category: "crustaces" },
  { id: "cru-08", name: "Langouste Gratinée 500g", price: "400 DH", category: "crustaces" },
  { id: "cru-09", name: "Homard Grillé 1kg",  price: "700 DH", category: "crustaces" },
  { id: "cru-10", name: "Homard Gratiné 1kg",  price: "800 DH", category: "crustaces" },
  { id: "cru-11", name: "Plats Crustacés",  price: "400 DH", category: "crustaces" },

  // LES FRITURES
  { id: "fri-01", name: "Friture Spécial", description: "Crevettes, sole, sepie, merlan, brioua, croquette", price: "120 DH", category: "fritures" },
  { id: "fri-02", name: "Friture Royale", description: "Crevettes, sole, sepie, calamars, merlan, brioua", price: "150 DH", category: "fritures" },
  { id: "fri-03", name: "Croquette De Crabe (6 Pièces)", description: "Croquette de crabe", price: "70 DH", category: "fritures" },
  { id: "fri-04", name: "Pastilla Fruits De Mer (1 Personne)", description: "Pastilla fruits de mer - 25min", price: "80 DH", category: "fritures" },
  { id: "fri-05", name: "Briouat De Poisson (1 Pièce)", description: "Briouat de poisson", price: "20 DH", category: "fritures" },

  // BROCHETTE POISSON
  { id: "bro-01", name: "Brochette De Poisson", description: "Servis avec légumes sautés, riz ou pommes de terre", price: "120 DH", category: "brochettes" },
  { id: "bro-02", name: "Brochette De Lotte", description: "Brochette de lotte", price: "150 DH", category: "brochettes" },
  { id: "bro-03", name: "Brochette D'Espadon", description: "Brochette d'espadon", price: "130 DH", category: "brochettes" },
  { id: "bro-04", name: "Filet De Merlan", description: "Filet de merlan", price: "120 DH", category: "brochettes" },
  { id: "bro-05", name: "Filet D'Espadon", description: "Filet d'espadon", price: "130 DH", category: "brochettes" },
  { id: "bro-06", name: "Filet De Saint Pierre Grillé", description: "Filet de Saint Pierre grillé", price: "120 DH", category: "brochettes" },

  // SPÉCIALITÉ DU CHEF
  { id: "chef-01", name: "Rigamanté Royale (Sauce à l'Ail ou Sauce Tomate)", description: "Spécialité royale", price: "120 DH", category: "specialite-chef" },
  { id: "chef-02", name: "Plat Du Chef (Choix Du Chef)", description: "Plat du chef selon arrivage", price: "200 DH", category: "specialite-chef" },
  { id: "chef-03", name: "Calamar Farci", description: "Calamar farci, sauce blanche ou sauce tomate", price: "150 DH", category: "specialite-chef" },
  { id: "chef-04", name: "Poulpe À La Galetta", description: "Poulpe grillé", price: "100 DH", category: "specialite-chef" },
  { id: "chef-05", name: "Moule Sauce A L'ail Ou Sauce Tomate", description: "Moules", price: "80 DH", category: "specialite-chef" },
  { id: "chef-06", name: "Pil Pil (Sauce à l'Ail ou Sauce Tomate)", description: "Pil pil", price: "90 DH", category: "specialite-chef" },
  { id: "chef-07", name: "Pil Pil Royale", description: "Pil pil royale", price: "130 DH", category: "specialite-chef" },
  { id: "chef-08", name: "La Lotte À La Basqua (Sauce Blanche)", description: "Lotte à la basqua", price: "180 DH", category: "specialite-chef" },
  { id: "chef-09", name: "Sole À La Meunière", description: "Sole à la meunière", price: "250 DH", category: "specialite-chef" },
  { id: "chef-10", name: "Paella Valenciana", description: "Paella Valenciana", price: "90 DH", category: "specialite-chef" },
  { id: "chef-11", name: "Paella Royale", description: "Paella royale", price: "140 DH", category: "specialite-chef" },
  { id: "chef-12", name: "Dorade Aux Herbes Au Four (45min)", description: "Dorade aux herbes au four - 45min", price: "300 DH", category: "specialite-chef" },
  { id: "chef-13", name: "Saumon Grillé", description: "Saumon grillé", price: "140 DH", category: "specialite-chef" },
  { id: "chef-14", name: "Saumon Au Four (30min)", description: "Saumon au four - 30min", price: "150", category: "specialite-chef" },
  { id: "chef-15", name: "Mérou Sauté 500g", description: "Mérou sauté 500g", price: "200 DH", category: "specialite-chef" },
  { id: "chef-16", name: "Gambas Royale 300g", description: "Gambas royale 300g", price: "200 DH", category: "specialite-chef" },
  { id: "chef-17", name: "Mekila Royale (1 Personne)", description: "Mekila royale 1 personne", price: "150 DH", category: "specialite-chef" },
  { id: "chef-18", name: "Papillat De Médaillon De Lotte Et Gambas", description: "Papillat de médaillon de lotte et gambas", price: "200 DH", category: "specialite-chef" },
  { id: "chef-19", name: "Filet De Saint Pierre Aux Amandes", description: "Filet de Saint Pierre aux amandes", price: "130 DH", category: "specialite-chef" },
  { id: "chef-20", name: "Filet De Saint Pierre Aux Fruits De Mer", description: "Filet de Saint Pierre aux fruits de mer", price: "140 DH", category: "specialite-chef" },
  { id: "chef-21", name: "Filet De Saint Pierre Aux Champignons", description: "Filet de Saint Pierre aux champignons", price: "120 DH", category: "specialite-chef" },

  // L'ARRIVAGE DU JOUR (prix/kg)
  { id: "arr-01", name: "Dorade (prix/kg)", description: "Dorade - prix/kg", price: "320 DH", category: "arrivage" },
  { id: "arr-02", name: "Pageot Royale (prix/kg)", description: "Pageot royale - prix/kg", price: "350 DH", category: "arrivage" },
  { id: "arr-03", name: "Pageot Brika (prix/kg)", description: "Pageot brika - prix/kg", price: "280 DH", category: "arrivage" },
  { id: "arr-04", name: "Sole Mer (prix/kg)", description: "Sole mer - prix/kg", price: "200 DH", category: "arrivage" },
  { id: "arr-05", name: "Sole Robio (prix/kg)", description: "Sole robio - prix/kg", price: "350 DH", category: "arrivage" },
  { id: "arr-06", name: "Rascasse (prix/kg)", description: "Rascasse - prix/kg", price: "300 DH", category: "arrivage" },
  { id: "arr-07", name: "Turbo (prix/kg)", description: "Turbo - prix/kg", price: "400 DH", category: "arrivage" },
  { id: "arr-08", name: "Langoustine (prix/kg)", description: "Langoustine - prix/kg", price: "700 DH", category: "arrivage" },
  { id: "arr-09", name: "Homard (prix/kg)", description: "Homard - prix/kg", price: "700 DH", category: "arrivage" },
  { id: "arr-10", name: "Gambas (prix/kg)", description: "Gambas - prix/kg", price: "600 DH", category: "arrivage" },

  // PLATS FAMILIAUX / SALADES & PLATEAUX
  { id: "fam-01", name: "Salade Royale (4 Personnes)", description: "Salade royale 4 personnes", price: "350 DH", category: "plats-familliaux" },
  { id: "fam-02", name: "Salade Royale (6 Personnes)", description: "Salade royale 6 personnes", price: "550 DH", category: "plats-familliaux" },
  { id: "fam-03", name: "Salade Royale (8 Personnes)", description: "Salade royale 8 personnes", price: "750 DH", category: "plats-familliaux" },
  { id: "fam-04", name: "Salade Royale (10 Personnes)", description: "Salade royale 10 personnes", price: "950 DH", category: "plats-familliaux" },
  { id: "fam-05", name: "Salade Royale Mister Fish (12 Personnes)", description: "Salade royale mister fish 12 personnes", price: "1200 DH", category: "plats-familliaux" },
  { id: "fam-06", name: "Plateaux Royale (4 Personnes)", description: "Plateaux royales pour 4 personnes", price: "500 DH", category: "plats-familliaux" },
  { id: "fam-07", name: "Plateaux Royale (6 Personnes)", description: "Plateaux royales pour 6 personnes", price: "700 DH", category: "plats-familliaux" },
  { id: "fam-08", name: "Plateaux Royale (8 Personnes)", description: "Plateaux royales pour 8 personnes", price: "900 DH", category: "plats-familliaux" },
  { id: "fam-09", name: "Plateaux Royale (10 Personnes)", description: "Plateaux royales pour 10 personnes", price: "1100 DH", category: "plats-familliaux" },
  { id: "fam-10", name: "Plateaux Royale Mister Fish", description: "Plateaux royal mister fish", price: "1400 DH", category: "plats-familliaux" },
  { id: "fam-11", name: "Pastilla (8 Personnes)", description: "Pastilla 8 personnes", price: "800 DH", category: "plats-familliaux" },
  { id: "fam-12", name: "Pastilla (10 Personnes)", description: "Pastilla 10 personnes", price: "1000 DH", category: "plats-familliaux" },
  { id: "fam-13", name: "Pastilla Mister Fish", description: "Pastilla mister fish", price: "1300 DH", category: "plats-familliaux" },
  { id: "fam-14", name: "Mekila (4 Personnes)", description: "Mekila 4 personnes", price: "550 DH", category: "plats-familliaux" },
  { id: "fam-15", name: "Mekila (6 Personnes)", description: "Mekila 6 personnes", price: "850 DH", category: "plats-familliaux" },
  { id: "fam-16", name: "Dorade Farcie 1kg (sur commande)", description: "Dorade farcie 1kg - sur commande", price: "450 DH", category: "plats-familliaux" },
  { id: "fam-17", name: "Pageot Royale Farci 1kg (sur commande)", description: "Pageot royale farci 1kg", price: "400 DH", category: "plats-familliaux" },
  { id: "fam-18", name: "Tawa (2 Personnes)", description: "Tawa 2 personnes - sur commande", price: "250 DH", category: "plats-familliaux" },
  { id: "fam-19", name: "Tawa (4 Personnes)", description: "Tawa 4 personnes - sur commande", price: "600 DH", category: "plats-familliaux" },
  { id: "fam-20", name: "Tagra Tanjaoui (2 Personnes)", description: "Tagra tanjaoui 2 personnes", price: "300 DH", category: "plats-familliaux" },

  // PIZZA & PASTA
  { id: "pz-01", name: "Pizza Margarita", description: "Pizza Margarita", price: "55 DH", category: "pizza-pasta" },
  { id: "pz-02", name: "Pizza Végétarienne", description: "Pizza végétarienne", price: "55 DH", category: "pizza-pasta" },
  { id: "pz-03", name: "Pizza Au Poulet", description: "Pizza au poulet", price: "60 DH", category: "pizza-pasta" },
  { id: "pz-04", name: "Pizza Portofino", description: "Pizza Portofino", price: "70 DH", category: "pizza-pasta" },
  { id: "pz-05", name: "Pizza Au Thon", description: "Pizza au thon", price: "60 DH", category: "pizza-pasta" },
  { id: "pz-06", name: "Pizza 4 Saisons", description: "Pizza 4 saisons", price: "90 DH", category: "pizza-pasta" },
  { id: "pz-07", name: "Pizza Fruits De Mer", description: "Pizza fruits de mer", price: "90 DH", category: "pizza-pasta" },
  { id: "pz-08", name: "Pizza Royale", description: "Pizza royale", price: "120", category: "pizza-pasta" },
  { id: "pz-09", name: "Pizza Mister Fish", description: "Pizza mister fish", price: "140 DH", category: "pizza-pasta" },

  // PÂTES (Spaghetti, Penne, Tagliatelle, Pasticcio, Gratin)
  { id: "ps-01", name: "Spaghetti Poulpe", description: "Spaghetti poulpe", price: "80 DH", category: "pizza-pasta" },
  { id: "ps-02", name: "Spaghetti Mister Fish", description: "Spaghetti mister fish", price: "80 DH", category: "pizza-pasta" },
  { id: "ps-03", name: "Spaghetti Almejas (Palourdes)", description: "Spaghetti palourdes", price: "70 DH", category: "pizza-pasta" },
  { id: "ps-04", name: "Spaghetti Poulet", description: "Spaghetti poulet", price: "60 DH", category: "pizza-pasta" },
  { id: "ps-05", name: "Spaghetti Viande Hachée", description: "Spaghetti viande hachée", price: "60 DH", category: "pizza-pasta" },
  { id: "ps-06", name: "Penne Mister Fish", description: "Penne mister fish", price: "80 DH", category: "pizza-pasta" },
  { id: "ps-07", name: "Tagliatelle Mister Fish", description: "Tagliatelle mister fish", price: "80 DH", category: "pizza-pasta" },
  { id: "ps-08", name: "Pasticcio Fruits De Mer", description: "Pasticcio fruits de mer", price: "80 DH", category: "pizza-pasta" },
  { id: "ps-09", name: "Gratin Fruits De Mer", description: "Gratin fruits de mer", price: "80 DH", category: "pizza-pasta" },

  // LES PLATS (paninis, sandwichs, burgers, tacos)
  { id: "pl-01", name: "Émincé De Poulet Crème Champignons", description: "Servis avec légumes sautés, ou frites ou salade verte", price: "80 DH", category: "plats" },
  { id: "pl-02", name: "Escalope De Poulet", description: "Escalope de poulet", price: "70 DH", category: "plats" },
  { id: "pl-03", name: "Panini Thon", description: "Panini thon", price: "40 DH", category: "plats" },
  { id: "pl-04", name: "Panini Poulet", description: "Panini poulet", price: "40 DH", category: "plats" },
  { id: "pl-05", name: "Panini Viande Hachée", description: "Panini viande hachée", price: "40 DH", category: "plats" },
  { id: "pl-06", name: "Sandwich Tanjawi", description: "Sandwich tanjawi", price: "25 DH", category: "plats" },
  { id: "pl-07", name: "San-Dwich Royale", description: "Sandwich royale", price: "60 DH", category: "plats" },
  { id: "pl-08", name: "Sandwich Mister Fish", description: "Sandwich mister fish", price: "80 DH", category: "plats" },
  { id: "pl-09", name: "Cheese Burger", description: "Cheese burger", price: "40 DH", category: "plats" },
  { id: "pl-10", name: "Double Cheese Burger", description: "Double cheese burger", price: "50 DH", category: "plats" },
  { id: "pl-11", name: "Triple Cheese Burger", description: "Triple cheese burger", price: "60 DH", category: "plats" },
  { id: "pl-12", name: "Chicken Cheese Burger", description: "Chicken cheese burger", price: "40 DH", category: "plats" },
  { id: "pl-13", name: "Tacos Viande Hachée", description: "Tacos viande hachée", price: "45 DH", category: "plats" },
  { id: "pl-14", name: "Tacos Escalope", description: "Tacos escalope", price: "50 DH", category: "plats" },
  { id: "pl-15", name: "Tacos Poulet", description: "Tacos poulet", price: "45 DH", category: "plats" },
  { id: "pl-16", name: "Tacos Cordon Bleu", description: "Tacos cordon bleu", price: "55 DH", category: "plats" },
  { id: "pl-17", name: "Tacos Mixte 2 Viandes", description: "Tacos mixte 2 viandes", price: "50 DH", category: "plats" },
  { id: "pl-18", name: "Tacos Fruits De Mer", description: "Tacos fruits de mer", price: "65 DH", category: "plats" },

  // ASSIETTES DE FRUITS & DESSERTS
  { id: "af-01", name: "Assiette De Fruits (1 Personne)", description: "Assiette de fruits 1 personne", price: "70 DH", category: "assiettes-fruits" },
  { id: "af-02", name: "Assiette De Fruits (2 Personnes)", description: "Assiette de fruits 2 personnes", price: "100 DH", category: "assiettes-fruits" },
  { id: "af-03", name: "Assiette De Fruits (4 Personnes)", description: "Assiette de fruits 4 personnes", price: "200 DH", category: "assiettes-fruits" },
  { id: "af-04", name: "Assiette De Fruits (6 Personnes)", description: "Assiette de fruits 6 personnes", price: "300 DH", category: "assiettes-fruits" },

  { id: "des-01", name: "Cheese Cake", description: "Cheesecake (Lotus, Oreo, Framboise, Chocolat ou Amande)", price: "30 DH", category: "desserts" },
  { id: "des-02", name: "Salade Fruits", description: "Salade de fruits", price: "30 DH", category: "desserts" },
  { id: "des-03", name: "Crème Mister Fish", description: "Crème signature mister fish", price: "30 DH", category: "desserts" },
  { id: "des-04", name: "Tiramisu", description: "Tiramisu maison", price: "30 DH", category: "desserts" },
  { id: "des-05", name: "Crème Brûlée", description: "Crème brûlée", price: "30 DH", category: "desserts" },
  { id: "des-06", name: "Crème Caramel", description: "Crème caramel", price: "25 DH", category: "desserts" },
  { id: "des-07", name: "Nougat Glacé", description: "Nougat glacé", price: "30 DH", category: "desserts" },
  { id: "des-08", name: "Boule De Glace", description: "Boule de glace", price: "45 DH", category: "desserts" },

  // JUS
  { id: "jus-01", name: "Jus De Concombre", description: "Jus de concombre", price: "15 DH", category: "jus" },
  { id: "jus-02", name: "Jus De Fraise", description: "Jus de fraise", price: "25 DH", category: "jus" },
  { id: "jus-03", name: "Jus De Carotte", description: "Jus de carotte", price: "15 DH", category: "jus" },
  { id: "jus-04", name: "Jus De Citron", description: "Jus de citron", price: "15 DH", category: "jus" },
  { id: "jus-05", name: "Jus D'Orange", description: "Jus d'orange", price: "25 DH", category: "jus" },
  { id: "jus-06", name: "Jus De Betterave", description: "Jus de betterave", price: "15 DH", category: "jus" },
  { id: "jus-07", name: "Jus De Mangue", description: "Jus de mangue", price: "30 DH", category: "jus" },
  { id: "jus-08", name: "Jus D'Ananas", description: "Jus d'ananas", price: "30 DH", category: "jus" },
  { id: "jus-09", name: "Jus D'Avocat", description: "Jus d'avocat", price: "30 DH", category: "jus" },
  { id: "jus-10", name: "Jus De Banane", description: "Jus de banane", price: "20 DH", category: "jus" },
  { id: "jus-11", name: "Mojito (Sans Alcool)", description: "Mocktail mojito", price: "35 DH", category: "jus" },

  // BOISSONS
  { id: "boi-01", name: "Sidi Ali 50cl", description: "Eau minérale Sidi Ali 50cl", price: "10", category: "boissons" },
  { id: "boi-02", name: "Sidi Ali 1,5l", description: "Eau minérale Sidi Ali 1.5l", price: "15", category: "boissons" },
  { id: "boi-03", name: "Oulmes 50cl", description: "Eau minérale Oulmes 50cl", price: "10", category: "boissons" },
  { id: "boi-04", name: "Oulmes 1l", description: "Eau minérale Oulmes 1l", price: "15", category: "boissons" },
  { id: "boi-05", name: "Soda 33cl", description: "Soda 33cl (Coca, Sprite)", price: "15", category: "boissons" },
  { id: "boi-06", name: "Café Nespresso", description: "Café Nespresso", price: "20", category: "boissons" },
  { id: "boi-07", name: "Thé Tanjawi", description: "Thé Tanjawi", price: "20", category: "boissons" },
];

// default image used when an item doesn't have a specific image
const DEFAULT_DISH_IMAGE =
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain";

// Ensure every menu item has an image so the client can show how the dish looks
menuItems.forEach((item) => {
  if (!item.image) item.image = DEFAULT_DISH_IMAGE;
});