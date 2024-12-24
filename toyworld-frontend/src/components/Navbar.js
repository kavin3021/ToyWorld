import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">ToyWorld</h1>
        <ul className="flex space-x-4">
          <li><a href="#toys">Toys</a></li>
          <li><a href="#cart">Cart</a></li>
          <li><a href="#about">About Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
