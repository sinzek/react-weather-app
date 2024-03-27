import "./current-weather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
        <div className="items">
            
        </div>
      <div className="city-name">
        <p className="city-text">Belgrade</p>
      </div>
      <div className="info">
        <p className="temperature">18°</p>
        <p className="weather-description">Sunny</p>
      </div>
      <img
        alt="weather"
        className="weather-icon"
        src="icons/sunny-cloudy-rainy.png"
      />
    </div>
  );
};

export default CurrentWeather;
