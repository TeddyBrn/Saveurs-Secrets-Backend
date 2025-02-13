const express = require('express');
const router = express.Router();
const recipes = require('../utils/recipeData');
const Recipe = require('../models/Recipe');

// Get all recipes
router.get('/', (req, res) => {
  res.json(recipes);
});

// Get recipe by ID
router.get('/:id', (req, res) => {
  const recipe =
    recipes.find((r) => r.id === req.params.id) ||
    additionalRecipes.find((r) => r.id === req.params.id) ||
    newRecipes.find((r) => r.id === req.params.id);

  if (!recipe) {
    return res.status(404).json({ message: 'Recette non trouvée' });
  }
  res.json(recipe);
});

// Create new recipe
router.post('/', async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    await recipe.save();
    res.status(201).json(recipe);
  } catch (error) {
    res.status(400).json({
      message: 'Erreur lors de la création de la recette',
      error: error.message
    });
  }
});

// Update recipe
router.put('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recette non trouvée' });
    }
    if (recipe.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Non autorisé' });
    }
    Object.assign(recipe, req.body);
    await recipe.save();
    res.json(recipe);
  } catch (error) {
    res.status(400).json({
      message: 'Erreur lors de la mise à jour de la recette',
      error: error.message
    });
  }
});

// Delete recipe
router.delete('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recette non trouvée' });
    }
    if (recipe.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Non autorisé' });
    }
    await recipe.deleteOne();
    res.json({ message: 'Recette supprimée avec succès' });
  } catch (error) {
    res.status(500).json({
      message: 'Erreur lors de la suppression de la recette',
      error: error.message
    });
  }
});

// Add rating to recipe
router.post('/:id/ratings', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recette non trouvée' });
    }

    const { score, comment } = req.body;
    recipe.ratings.push({
      user: req.user._id,
      score,
      comment
    });

    // Update average rating
    const totalScore = recipe.ratings.reduce(
      (sum, rating) => sum + rating.score,
      0
    );
    recipe.averageRating = totalScore / recipe.ratings.length;

    await recipe.save();
    res.json(recipe);
  } catch (error) {
    res.status(400).json({
      message: "Erreur lors de l'ajout de la note",
      error: error.message
    });
  }
});

module.exports = router;
