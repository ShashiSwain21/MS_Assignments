// NumberState.js
import React, { useState } from 'react';

const NumberState = () => {
  // Initialize state variable 'number' with a starting value of 0
  const [number, setNumber] = useState(0);
  
  // Function to increment the number
  const handleIncrement = () => {
    setNumber(prevNumber => prevNumber + 1);
  };

  // Function to decrement the number
  const handleDecrement = () => {
    setNumber(prevNumber => prevNumber - 1);
  };

  // Function to reset the number to 0
  const handleReset = () => {
    setNumber(0);
  };

  //to display the current state
  return (
    <div>
      <h2>Number: {number}</h2>
 
      <button onClick={handleIncrement}>Increment</button>
     
      <button onClick={handleDecrement}>Decrement</button>
  
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default NumberState;
