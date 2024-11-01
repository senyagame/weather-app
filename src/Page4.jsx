import { useState, useEffect } from 'react';
import { fetchWeather } from './weatherService';
import './App.css';

function Page1() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadWeather = async () => {
      const data = await fetchWeather('Karaganda');
      if (data) {
        setWeatherData(data);
      } else {
        setError("Не удалось загрузить данные. Проверьте подключение или API-ключ.");
      }
    };
    loadWeather();
  }, []);

  return (
    <div className="weather-page">
      <h2 className="page-title">Погода в Караганде</h2>
      {error ? (
        <p className="error">{error}</p>
      ) : weatherData ? (
        <div>
          {/* Секция текущей погоды */}
          <div className="current-weather">
            <h3>Текущая погода</h3>
            <p className="temperature">Температура: {weatherData.list[0].main.temp}°C</p>
            <p className="description">{weatherData.list[0].weather[0].description}</p>
          </div>

          {/* Секция прогноза */}
          <div className="forecast">
            <h3>Прогноз на следующие 4 дня</h3>
            <ul className="forecast-list">
              {weatherData.list.slice(1, 5).map((forecast, index) => (
                <li key={index} className="forecast-item">
                  <span className="forecast-date">{forecast.dt_txt}</span>
                  <span className="forecast-temp">{forecast.main.temp}°C</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>Загрузка данных...</p>
      )}
    </div>
  );
}

export default Page1;