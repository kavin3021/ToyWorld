import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [toys, setToys] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/toys')
      .then((response) => response.json())
      .then((data) => setToys(data))
      .catch((error) => console.error('Error fetching toys:', error));
  }, []);

  const addToCart = (toy) => {
    setCart([...cart, toy]);
  };

  const checkout = () => {
    alert('Checkout successful!');
  };

  return (
    <div className="App">
      <h1>ToyWorld</h1>
      <div className="toys-list">
        {toys.map((toy) => (
          <div key={toy.id} className="toy">
            <h3>{toy.name}</h3>
            <p>{toy.description}</p>
            <p>Price: ${toy.price}</p>
            <button onClick={() => addToCart(toy)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((toy, index) => (
            <li key={index}>{toy.name}</li>
          ))}
        </ul>
        <button onClick={checkout}>Checkout</button>
      </div>
    </div>
  );
};

export default App;
