import React, { useState, useEffect } from 'react';

const ToyList = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/toys')
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  return (
    <section id="toys" className="my-4">
      <h2 className="text-2xl font-bold mb-4">Available Toys</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {toys.map((toy) => (
          <div key={toy.id} className="p-4 border rounded-lg shadow-lg">
            <h3 className="font-bold">{toy.name}</h3>
            <p>{toy.description}</p>
            <p className="text-green-600 font-semibold">${toy.price}</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToyList;
