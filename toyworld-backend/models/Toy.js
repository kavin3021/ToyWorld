const mongoose = require('mongoose');

const toySchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});

module.exports = mongoose.model('Toy', toySchema);