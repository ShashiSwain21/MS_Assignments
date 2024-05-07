import React, { useState, useEffect } from 'react';

const MyComUseEffect = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    // This code will run after every render
    document.title = `You clicked ${counter} times`;

    // Cleanup function
    return () => {
      document.title = 'React App'; // Reset the title when component unmounts
    };
  });

  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    setName(name + 'a');
    setCounter(counter + 1);
  };

  return (
    <div>
      <label htmlFor="name">Name  </label>
      <input
        type="text"
        id="Name"
        name="Name"
        value={name}
        onChange={handleInputChange}
        
      /> 
      <p>You clicked {counter} times</p>
      <button onClick={handleClick}>Increment
        Click me
      </button>
    </div>
  );
};

export default MyComUseEffect;
