import React from 'react';
import './WeatherPage.css';

function WeatherPage({ currentWeather, forecast }) {
  return (
    <div className="weather-page">
      /* Секция текущей погоды */
      <div className="current-weather">
        <h2>Сейчас в {currentWeather.city}</h2>
        <div className="temperature">{currentWeather.temp}°C</div>
        <div className="description">{currentWeather.description}</div>
      </div>

      /* Секция прогноза на будущее */
      <div className="forecast-container">
        {forecast.map((day, index) => (
          <div className="forecast-item" key={index}>
            <h3>{day.date}</h3>
            <div className="forecast-temp">{day.temp}°C</div>
            <div className="forecast-description">{day.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherPage;