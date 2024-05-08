import React from 'react';
const WeatherCard = ({ day, condition, temperature }) => {
  return (
    <div className="weather-card">
      <h3>{day}</h3>
      <p>Condition: {condition}</p>
      <p>Temperature: {temperature}</p>
    </div>
  );
};
// Define sample weather data
const WeatherData = [
  { day: "Monday", condition: "Sunny", temperature: "22°C" },
  { day: "Tuesday", condition: "Rainy", temperature: "20°C" },
  { day: "Wednesday", condition: "Sunny", temperature: "22°C" },
  // Add more days as needed
];

const WeatherComponent = () => {
  return (
    <div>
      {WeatherData.map((weather, index) => (
        <WeatherCard
          key={index}
          day={weather.day}
          condition={weather.condition}
          temperature={weather.temperature}
        />
      ))}
    </div>
  );
};

export default WeatherComponent;
