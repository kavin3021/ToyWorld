import React, { useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);

  const checkout = () => {
    alert('Checkout successful!');
    setCart([]);
  };

  return (
    <section id="cart" className="my-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <ul className="list-disc ml-8">
        {cart.length === 0 ? <p>Your cart is empty.</p> : cart.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      <button 
        onClick={checkout} 
        className="bg-green-500 text-white px-4 py-2 mt-2 rounded">
        Checkout
      </button>
    </section>
  );
};

export default Cart;
