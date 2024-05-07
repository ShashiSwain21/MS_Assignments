// Initial array of products
const products = [
    { name: "Laptop", category: "Electronics", price: 1000, stock: 4 },
    { name: "Shirt", category: "Apparel", price: 20, stock: 10 },
    { name: "Coffee Maker", category: "Appliances", price: 100, stock: 3 },
    { name: "Book1", category: "Stationery", price: 15, stock: 10 },
    { name: "Book2", category: "Stationery", price: 20, stock: 20 },
    { name: "Book3", category: "Stationery", price: 30, stock: 30 },
    { name: "Book4", category: "Stationery", price: 30, stock: 0 },
    // Add more products as necessary
  ];
  
  // Task 1: Filter by Category
  const filterByCategory = (category) => {
    console.log(`Products in the ${category} category:`);
    const filteredProducts = products.filter(product => product.category === category);
    console.log(filteredProducts);
  };
  
  // Task 2: Filter by Price Range
  const filterByPriceRange = (minPrice, maxPrice) => {
    console.log(`Products between $${minPrice} and $${maxPrice}:`);
    const filteredProducts = products.filter(product => product.price >= minPrice && product.price <= maxPrice);
    console.log(filteredProducts);
  };
  
  // Task 3: Filter Out of Stock Products
  const filterOutOfStock = () => {
    console.log("Available products:");
    const filteredProducts = products.filter(product => product.stock > 0);
    console.log(filteredProducts);
  };
  
  // Test the functions
  filterByCategory("Stationery");
  filterByPriceRange(50, 150);
  filterOutOfStock();
