const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware to allow requests from the frontend
app.use(cors());

// Toy data (mock data for now)
const toys = [
  { id: 1, name: 'Toy Car', description: 'A red toy car', price: 10 },
  { id: 2, name: 'Toy Doll', description: 'A beautiful doll', price: 15 },
  { id: 3, name: 'Toy Train', description: 'A wooden toy train', price: 20 },
];

// Endpoint to fetch toys
app.get('/api/toys', (req, res) => {
  res.json(toys);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
