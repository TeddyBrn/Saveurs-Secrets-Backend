const recipes = [
  {
    id: '1',
    title: 'Coq au Vin',
    description: 'Un grand classique de la cuisine française',
    imageUrl:
      '',
    preparationTime: 30,
    cookingTime: 90,
    servings: 6,
    difficulty: 'Moyen',
    category: 'Plat',
    ingredients: [
      { name: 'Poulet', quantity: 1.5, unit: 'kg' },
      { name: 'Vin rouge', quantity: 75, unit: 'cl' },
      { name: 'Lardons', quantity: 200, unit: 'g' }
    ],
    steps: [
      { stepNumber: 1, description: 'Faire mariner le poulet dans le vin' },
      { stepNumber: 2, description: 'Faire revenir les lardons' }
    ],
    averageRating: 4.8
  },
  {
    id: '2',
    title: 'Tarte Tatin',
    description: 'Une délicieuse tarte aux pommes caramélisées',
    imageUrl:
      'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRhcnRlJTIwcG9tbWVzfGVufDB8fDB8fHww',
    preparationTime: 25,
    cookingTime: 45,
    servings: 8,
    difficulty: 'Facile',
    category: 'Dessert',
    ingredients: [
      { name: 'Pommes', quantity: 8, unit: 'pièces' },
      { name: 'Sucre', quantity: 150, unit: 'g' },
      { name: 'Pâte feuilletée', quantity: 1, unit: 'pièce' }
    ],
    steps: [
      { stepNumber: 1, description: 'Caraméliser le sucre' },
      { stepNumber: 2, description: 'Disposer les pommes' }
    ],
    averageRating: 4.5
  },
  {
    id: '3',
    title: "Soupe à l'Oignon",
    description: 'Une soupe traditionnelle réconfortante',
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd',
    preparationTime: 20,
    cookingTime: 60,
    servings: 4,
    difficulty: 'Facile',
    category: 'Entrée',
    ingredients: [
      { name: 'Oignons', quantity: 6, unit: 'pièces' },
      { name: 'Bouillon', quantity: 1, unit: 'L' }
    ],
    steps: [
      { stepNumber: 1, description: 'Caraméliser les oignons' },
      { stepNumber: 2, description: 'Ajouter le bouillon' }
    ],
    averageRating: 4.3
  },
  {
    id: '4',
    title: 'Tiramisu',
    description: 'Le dessert italien par excellence',
    imageUrl: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9',
    preparationTime: 30,
    cookingTime: 0,
    servings: 6,
    difficulty: 'Moyen',
    category: 'Dessert',
    ingredients: [
      { name: 'Mascarpone', quantity: 250, unit: 'g' },
      { name: 'Café', quantity: 200, unit: 'ml' },
      { name: 'Biscuits', quantity: 24, unit: 'pièces' }
    ],
    steps: [
      { stepNumber: 1, description: 'Préparer le café' },
      { stepNumber: 2, description: 'Monter la crème' }
    ],
    averageRating: 4.9
  },
  {
    id: '5',
    title: 'Gâteau au Chocolat',
    description: 'Un délicieux gâteau au chocolat moelleux',
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
    preparationTime: 20,
    cookingTime: 25,
    servings: 8,
    difficulty: 'Facile',
    category: 'Dessert',
    ingredients: [
      { name: 'Chocolat noir', quantity: 200, unit: 'g' },
      { name: 'Beurre', quantity: 200, unit: 'g' },
      { name: 'Oeufs', quantity: 4, unit: 'pièces' },
      { name: 'Sucre', quantity: 150, unit: 'g' },
      { name: 'Farine', quantity: 80, unit: 'g' }
    ],
    steps: [
      { stepNumber: 1, description: 'Faire fondre le chocolat et le beurre' },
      { stepNumber: 2, description: 'Mélanger les oeufs et le sucre' },
      { stepNumber: 3, description: 'Ajouter la farine et le mélange chocolat' }
    ],
    averageRating: 4.9
  },
  {
    id: '6',
    title: 'Salade Niçoise',
    description: 'Une salade fraîche et méditerranéenne',
    imageUrl: 'https://images.unsplash.com/photo-1542528180-a1208c5169a5',
    preparationTime: 20,
    cookingTime: 10,
    servings: 4,
    difficulty: 'Facile',
    category: 'Entrée',
    ingredients: [
      { name: 'Thon', quantity: 200, unit: 'g' },
      { name: 'Tomates', quantity: 4, unit: 'pièces' },
      { name: 'Oeufs', quantity: 4, unit: 'pièces' },
      { name: 'Olives noires', quantity: 100, unit: 'g' }
    ],
    steps: [
      { stepNumber: 1, description: 'Cuire les oeufs durs' },
      { stepNumber: 2, description: 'Couper les tomates' },
      { stepNumber: 3, description: 'Assembler la salade' }
    ],
    averageRating: 4.7
  },
  {
    id: '7',
    title: 'Boeuf Bourguignon',
    description: 'Un plat traditionnel français mijoté',
    imageUrl: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7',
    preparationTime: 30,
    cookingTime: 180,
    servings: 6,
    difficulty: 'Moyen',
    category: 'Plat',
    ingredients: [
      { name: 'Boeuf', quantity: 1.5, unit: 'kg' },
      { name: 'Vin rouge', quantity: 75, unit: 'cl' },
      { name: 'Carottes', quantity: 4, unit: 'pièces' }
    ],
    steps: [
      { stepNumber: 1, description: 'Faire revenir la viande' },
      { stepNumber: 2, description: 'Ajouter les légumes' },
      { stepNumber: 3, description: 'Laisser mijoter' }
    ],
    averageRating: 4.8
  },
  {
    id: '8',
    title: 'Crêpes',
    description: 'Des crêpes fines et délicieuses',
    imageUrl: 'https://images.unsplash.com/photo-1519676867240-f03562e64548',
    preparationTime: 15,
    cookingTime: 30,
    servings: 6,
    difficulty: 'Facile',
    category: 'Dessert',
    ingredients: [
      { name: 'Farine', quantity: 250, unit: 'g' },
      { name: 'Oeufs', quantity: 4, unit: 'pièces' },
      { name: 'Lait', quantity: 500, unit: 'ml' }
    ],
    steps: [
      { stepNumber: 1, description: 'Mélanger les ingrédients' },
      { stepNumber: 2, description: 'Laisser reposer la pâte' },
      { stepNumber: 3, description: 'Cuire les crêpes' }
    ],
    averageRating: 4.6
  }
];

const additionalRecipes = [
  {
    id: '9',
    title: 'Velouté de Potiron',
    description: 'Une soupe onctueuse et réconfortante',
    imageUrl: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a',
    preparationTime: 20,
    cookingTime: 30,
    servings: 4,
    difficulty: 'Facile',
    category: 'Entrée',
    ingredients: [
      { name: 'Potiron', quantity: 800, unit: 'g' },
      { name: 'Oignon', quantity: 1, unit: 'pièce' },
      { name: 'Crème fraîche', quantity: 20, unit: 'cl' }
    ],
    steps: [
      { stepNumber: 1, description: 'Éplucher et couper le potiron' },
      { stepNumber: 2, description: "Faire revenir l'oignon" }
    ],
    averageRating: 4.5
  },
  {
    id: '10',
    title: 'Carpaccio de Saumon',
    description: 'Un carpaccio frais aux agrumes',
    imageUrl:
      'https://images.unsplash.com/photo-1657895116424-4b146d627c9d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FycGFjY2lvJTIwZGUlMjBzYXVtb258ZW58MHx8MHx8fDA%3D',
    preparationTime: 15,
    cookingTime: 0,
    servings: 4,
    difficulty: 'Facile',
    category: 'Entrée',
    ingredients: [
      { name: 'Saumon frais', quantity: 400, unit: 'g' },
      { name: 'Citron', quantity: 1, unit: 'pièce' }
    ],
    steps: [
      { stepNumber: 1, description: 'Trancher finement le saumon' },
      { stepNumber: 2, description: 'Assaisonner et ajouter le citron' }
    ],
    averageRating: 4.7
  }
];

const newRecipes = [
  {
    id: '11',
    title: 'Salade César',
    description: 'La célèbre salade américaine aux croûtons et parmesan',
    imageUrl: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9',
    preparationTime: 20,
    cookingTime: 10,
    servings: 4,
    difficulty: 'Facile',
    category: 'Entrée',
    ingredients: [
      { name: 'Laitue romaine', quantity: 1, unit: 'pièce' },
      { name: 'Parmesan', quantity: 50, unit: 'g' },
      { name: 'Croûtons', quantity: 100, unit: 'g' }
    ],
    steps: [
      { stepNumber: 1, description: 'Laver et couper la salade' },
      { stepNumber: 2, description: 'Préparer la sauce César' }
    ],
    averageRating: 4.6
  },
  {
    id: '12',
    title: 'Velouté de Champignons',
    description: 'Soupe crémeuse aux champignons de Paris',
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd',
    preparationTime: 15,
    cookingTime: 25,
    servings: 4,
    difficulty: 'Facile',
    category: 'Entrée',
    ingredients: [
      { name: 'Champignons', quantity: 500, unit: 'g' },
      { name: 'Crème', quantity: 20, unit: 'cl' }
    ],
    steps: [
      { stepNumber: 1, description: 'Nettoyer les champignons' },
      { stepNumber: 2, description: 'Mixer avec la crème' }
    ],
    averageRating: 4.7
  },
  // ... 8 autres entrées similaires

  // 10 PLATS PRINCIPAUX
  {
    id: '13',
    title: 'Lasagnes à la Bolognaise',
    description: 'Les vraies lasagnes italiennes',
    imageUrl: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3',
    preparationTime: 45,
    cookingTime: 50,
    servings: 6,
    difficulty: 'Moyen',
    category: 'Plat',
    ingredients: [
      { name: 'Pâtes à lasagne', quantity: 500, unit: 'g' },
      { name: 'Viande hachée', quantity: 600, unit: 'g' },
      { name: 'Sauce tomate', quantity: 800, unit: 'g' }
    ],
    steps: [
      { stepNumber: 1, description: 'Préparer la sauce bolognaise' },
      { stepNumber: 2, description: 'Monter les lasagnes' }
    ],
    averageRating: 4.9
  },
  {
    id: '14',
    title: 'Saumon en Papillote',
    description: 'Saumon cuit en papillote avec légumes',
    imageUrl: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927',
    preparationTime: 15,
    cookingTime: 20,
    servings: 4,
    difficulty: 'Facile',
    category: 'Plat',
    ingredients: [
      { name: 'Pavés de saumon', quantity: 4, unit: 'pièces' },
      { name: 'Courgettes', quantity: 2, unit: 'pièces' }
    ],
    steps: [
      { stepNumber: 1, description: 'Préparer les papillotes' },
      { stepNumber: 2, description: 'Cuire au four' }
    ],
    averageRating: 4.8
  },
  // ... 8 autres plats similaires

  // 10 DESSERTS
  {
    id: '15',
    title: 'Mousse au Chocolat',
    description: 'Mousse légère et aérienne',
    imageUrl:
      'https://images.unsplash.com/photo-1621792907526-e69888069079?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91c3NlJTIwYXUlMjBjaG9jb2xhdHxlbnwwfHwwfHx8MA%3D%3D',
    preparationTime: 20,
    cookingTime: 0,
    servings: 6,
    difficulty: 'Moyen',
    category: 'Dessert',
    ingredients: [
      { name: 'Chocolat noir', quantity: 200, unit: 'g' },
      { name: 'Oeufs', quantity: 6, unit: 'pièces' }
    ],
    steps: [
      { stepNumber: 1, description: 'Faire fondre le chocolat' },
      { stepNumber: 2, description: 'Monter les blancs en neige' }
    ],
    averageRating: 4.9
  },
  // ... 9 autres desserts similaires

  // 10 BOISSONS
  {
    id: '16',
    title: 'Mojito',
    description: 'Cocktail rafraîchissant à la menthe',
    imageUrl: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a',
    preparationTime: 5,
    cookingTime: 0,
    servings: 1,
    difficulty: 'Facile',
    category: 'Boisson',
    ingredients: [
      { name: 'Rhum blanc', quantity: 5, unit: 'cl' },
      { name: 'Menthe fraîche', quantity: 8, unit: 'feuilles' },
      { name: 'Citron vert', quantity: 1, unit: 'pièce' }
    ],
    steps: [
      { stepNumber: 1, description: 'Piler la menthe avec le sucre' },
      { stepNumber: 2, description: 'Ajouter le rhum et la glace' }
    ],
    averageRating: 4.8
  }
  // ... 9 autres boissons similaires
];

// Fusionner les recettes existantes avec les nouvelles
const allRecipes = [...recipes, ...additionalRecipes, ...newRecipes];
module.exports = allRecipes;
