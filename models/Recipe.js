const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  unit: { type: String, required: true }
});

const stepSchema = new mongoose.Schema({
  stepNumber: { type: Number, required: true },
  description: { type: String, required: true }
});

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true
    },
    description: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    preparationTime: {
      type: Number, // en minutes
      required: true
    },
    cookingTime: {
      type: Number, // en minutes
      required: true
    },
    servings: {
      type: Number,
      required: true
    },
    difficulty: {
      type: String,
      enum: ['Facile', 'Moyen', 'Difficile'],
      required: true
    },
    ingredients: [ingredientSchema],
    steps: [stepSchema],
    category: {
      type: String,
      enum: ['Entrée', 'Plat', 'Dessert', 'Boisson'],
      required: true
    },
    ratings: [
      {
        score: {
          type: Number,
          min: 1,
          max: 5
        },
        comment: String
      }
    ],
    averageRating: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Recipe', recipeSchema);
