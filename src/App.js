import React, { useState } from 'react';
import './App.css'; // Import your CSS file
import Form from './components/Form';
import CityList from './components/CityList';

const App = () => {
  const [cities, setCities] = useState([]);

  const handleCitySubmit = (city) => {
    setCities([...cities, city]); 
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
