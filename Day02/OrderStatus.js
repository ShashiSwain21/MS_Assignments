// OrderStatus.js
import React, { useState } from 'react';

const OrderStatus = () => {
  // Define initial order state
  const [order, setOrder] = useState({
    id: 'ORD123',
    status: 'Processing',
    customer: 'John Doe',
    items: 3
  });

  // Function to handle status change
  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    // Update only the status property of the order object
    setOrder({ ...order, status: newStatus });
  };

  return (
    <div>
      <h2>Order Details</h2>
      <p><strong>Order ID:</strong> {order.id}</p>
      <p><strong>Status:</strong> {order.status}</p>
      <p><strong>Customer:</strong> {order.customer}</p>
      <p><strong>Items:</strong> {order.items}</p>

      {/* Dropdown for updating order status */}
      <label htmlFor="status">Update Status:</label>
      <select id="status" onChange={handleStatusChange}>
        <option value="Processing">Processing</option>
        <option value="Shipped">Shipped</option>
        <option value="Delivered">Delivered</option>
      </select>

      {/* Button to update status */}
      <button onClick={handleStatusChange}>Update Status</button>
    </div>
  );
};

export default OrderStatus;
