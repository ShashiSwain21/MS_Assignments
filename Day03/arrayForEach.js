// Dataset of Oscar-winning movies
const oscarMovies = [
    { title: "Parasite", year: 2020, genre: "Thriller", director: "Bong Joon Ho" },
    { title: "Green Book", year: 2019, genre: "Drama", director: "Peter Farrelly" },
    { title: "The Shape of Water", year: 2018, genre: "Fantasy", director: "Guillermo del Toro" },
    // Add more movies as needed
  ];
  
  // Task 1: Iterate with forEach
  console.log("Task 1: Iterate with forEach");
  oscarMovies.forEach((movie, index) => {
    console.log(`Index: ${index}, Title: ${movie.title}, Movie:`, movie);
  });
  
  // Task 2: Iterate with a for loop
  console.log("\nTask 2: Iterate with a for loop");
  for (let i = 0; i < oscarMovies.length; i++) {
    console.log(`Index: ${i}, Title: ${oscarMovies[i].title}, Movie:`, oscarMovies[i]);
  }
  
