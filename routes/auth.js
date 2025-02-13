const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register route
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    console.log('Données reçues:', { username, email, password: '***' }); // Debug log

    // Validation des champs requis
    if (!username || !email || !password) {
      return res.status(400).json({
        message: 'Tous les champs sont requis',
        details: {
          username: !username ? 'Username requis' : undefined,
          email: !email ? 'Email requis' : undefined,
          password: !password ? 'Mot de passe requis' : undefined
        }
      });
    }

    // Check if user already exists
    const userExists = await User.findOne({ $or: [{ email }, { username }] });
    if (userExists) {
      return res.status(400).json({
        message: 'Utilisateur déjà existant',
        field: userExists.email === email ? 'email' : 'username'
      });
    }

    // Create new user
    const user = new User({ username, email, password });
    await user.save();

    // Generate token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '24h'
    });

    res.status(201).json({
      message: 'Utilisateur créé avec succès',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });
  } catch (error) {
    console.error('Erreur serveur:', error); // Debug log
    res.status(500).json({
      message: "Erreur lors de l'inscription",
      error: error.message,
      details: error.errors
    });
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ message: 'Email ou mot de passe incorrect' });
    }

    // Check password
    const isValidPassword = await user.comparePassword(password);
    if (!isValidPassword) {
      return res
        .status(401)
        .json({ message: 'Email ou mot de passe incorrect' });
    }

    // Generate token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '24h'
    });

    res.json({
      message: 'Connexion réussie',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Erreur lors de la connexion', error: error.message });
  }
});

module.exports = router;
