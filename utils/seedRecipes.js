const mongoose = require('mongoose');
const Recipe = require('../models/Recipe');
const recipes = require('./recipeData');
require('dotenv').config();

async function seedRecipes() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Supprimer toutes les recettes existantes
    await Recipe.deleteMany({});
    console.log('Existing recipes deleted');

    // Insérer toutes les recettes
    const result = await Recipe.insertMany(recipes);
    console.log(`${result.length} recipes inserted successfully`);

    await mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding recipes:', error);
    process.exit(1);
  }
}

// Exécuter le seeding
seedRecipes();
