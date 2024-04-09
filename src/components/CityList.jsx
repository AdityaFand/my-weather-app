import WeatherCard from './WeatherCard';

const CityList = ({ cities }) => {
    console.log(cities);
  return (
    <div className="city-list">
      {cities.map((cityData) => (
        <WeatherCard
          city={cityData}
        />
      ))}
    </div>
  );
};

export default CityList;
