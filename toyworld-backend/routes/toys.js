const express = require('express');
const Toy = require('../models/Toy');
const router = express.Router();

// Get all toys
router.get('/', async (req, res) => {
  try {
    const toys = await Toy.find();
    res.json(toys);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Add a new toy
router.post('/', async (req, res) => {
  try {
    const newToy = new Toy(req.body);
    const savedToy = await newToy.save();
    res.json(savedToy);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
