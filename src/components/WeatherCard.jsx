import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WeatherCard.css'; 

const WeatherCard = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = 'efbc65be92543668170167a4afe39870'; 
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [city]);

  if (!weatherData) {
    return <div className="weather-card loading">Loading...</div>; 
  }

  const temperature = weatherData.main.temp;
  const weatherDescription = weatherData.weather[0].description;

  return (
    <div className="weather-card">
      <h2 className="city-name">{city}</h2> 
      <p className="temperature">Temperature: {temperature}°C</p> 
      <p className="weather-description">Weather: {weatherDescription}</p>
    </div>
  );
};

export default WeatherCard;
