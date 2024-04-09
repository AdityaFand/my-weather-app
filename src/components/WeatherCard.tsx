import React from 'react';

interface WeatherCardProps {
  city: string;
  temperature: number;
  weather: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ city, temperature, weather }) => {
  return (
    <div className="weather-card">
      <h2>{city}</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Weather: {weather}</p>
    </div>
  );
};

export default WeatherCard;
