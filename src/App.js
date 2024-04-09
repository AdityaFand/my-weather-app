import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import './App.css'; // Assuming you have a separate CSS file for styling
import Form from './components/Form.tsx';
import CityList from './components/CityList.tsx';
import WeatherCard from './components/WeatherCard.tsx';

function App() {
  const [cities, setCities] = useState([]);

  // Function to handle form submission and add city to the list
  const handleFormSubmit = (city) => {
    setCities([...cities, city]);
  };
  return (
    <div className="App">
      <h1>Weather App</h1>
      {/* Render Form component and pass handleFormSubmit function as prop */}
      <Form onSubmit={handleFormSubmit} />
      {/* Render CityList component and pass list of cities as prop */}
      <CityList cities={cities} />
    </div>
  );
}

export default App;
