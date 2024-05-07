// Create arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Merge arrays using spread operator
const combinedArray = [...array1, ...array2];

// Add elements using spread operator
const modifiedArray = [
  'start',
  ...combinedArray,
  'middle',
  ...combinedArray,
  'end'
];

console.log(modifiedArray);

// Create objects
const object1 = { a: 1, b: 2, c: 3 };
const object2 = { b: 4, d: 5, e: 6 };

// Merge objects using spread operator
const combinedObject = { ...object1, ...object2, f: 7 };

console.log(combinedObject);

// Function to sum three numbers
function sum(a, b, c) {
  return a + b + c;
}

// Array of numbers
const numbers = [1, 2, 3];

// Call sum function using spread operator
const result = sum(...numbers);

console.log(result);
