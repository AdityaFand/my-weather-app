import React from 'react';
import WeatherCard from './WeatherCard.tsx';

interface CityListProps {
  cities: { name: string; temperature: number; weather: string }[];
}

const CityList: React.FC<CityListProps> = ({ cities }) => {
  return (
    <div className="city-list">
      {cities.map((cityData) => (
        <WeatherCard
          key={cityData.name}
          city={cityData.name}
          temperature={cityData.temperature}
          weather={cityData.weather}
        />
      ))}
    </div>
  );
};

export default CityList;
