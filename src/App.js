import React, { useState } from 'react';
import './App.css'; // Import your CSS file
import Form from './components/Form';
import CityList from './components/CityList';

const App = () => {
  const [cities, setCities] = useState([]);

  // Function to handle city submission
  const handleCitySubmit = (city) => {
    setCities([...cities, city]); // Update cities state with new city name
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <Form onSubmit={handleCitySubmit} />
      <CityList cities={cities} />
    </div>
  );
};

export default App;
