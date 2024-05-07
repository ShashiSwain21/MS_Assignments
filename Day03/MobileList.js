// MobileList.js
import React, { useState } from 'react';

const MobileList = () => {
  // Define mobile product data using useState hook
  const [mobiles] = useState([
    { name: "iPhone 13", description: "Latest iPhone model", price: 999, rating: 4.5, inStock: true },
    { name: "Samsung Galaxy S21", description: "Flagship Android phone", price: 799, rating: 4.3, inStock: true },
    { name: "Google Pixel 6", description: "Google's latest Pixel phone", price: 699, rating: 4.2, inStock: false },
    // Add more mobile products as needed
  ]);

  return (
    <div>
      <h2>Mobile Products</h2>
      <table className="mobile-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Stock Status</th>
          </tr>
        </thead>
        <tbody>
          {mobiles.map((mobile, index) => (
            <tr key={index}>
              <td>{mobile.name}</td>
              <td>{mobile.description}</td>
              <td>${mobile.price}</td>
              <td>{mobile.rating}/5</td>
              <td>{mobile.inStock ? 'In Stock' : 'Out of Stock'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MobileList;
