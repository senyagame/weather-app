/*import { useState, useEffect } from 'react';
import { fetchWeather } from './weatherService.js';
import icon from './assets/Weather-icon.png';
import WeatherMateimg from './assets/WeatherMate-img.png';
import './styles/App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('Almaty');
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadWeather = async () => {
      setIsLoading(true);
      const data = await fetchWeather(city);
      if (data) {
        setWeatherData(data);
      } else {
        setError('Не удалось загрузить данные. Проверьте подключение или API-ключ.');
      }
      setIsLoading(false);
    };
    loadWeather();
  }, [city]);

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme);
    document.body.classList.toggle('light-theme', !isDarkTheme);
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
    setWeatherData(null);
    setError(null);
    setIsLoading(true);
  };

  return (
    <div className={`App ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <header className="header">
        <img src={icon} alt="WeatherMate" className="icon" />
        <h1>WeatherMate</h1>
        <button onClick={toggleTheme} className="theme-toggle">
          {isDarkTheme ? 'Светлая тема' : 'Тёмная тема'}
        </button>
      </header>

      <section className="welcome">
        <div className="welcome_text">
          <div className="welcome_img">
            <img src={WeatherMateimg} alt="WeatherMate" className="enlarged-image" />
          </div>
          <h1 className='welcome_h1'>Вас приветствует WeatherMate!</h1>
          <p>Это приложение позволяет узнать прогноз погоды в доступных для просмотра городах.</p>
        </div>
      </section>

      <div className="weather-page">
        <h2 className="page-title">Погода в {city}</h2>
        <select value={city} onChange={handleCityChange} className="city-select">
          <option value="Almaty">Алматы</option>
          <option value="Chicago">Чикаго</option>
          <option value="Astana">Астана</option>
          <option value="Karaganda">Караганда</option>
          <option value="Novosibirsk">Новосибирск</option>
        </select>

        {error ? (
          <p className="error">{error}</p>
        ) : isLoading ? (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        ) : weatherData ? (
          <div>
            <div className="current-weather">
              <h3>Текущая погода</h3>
              <p className="temperature">
                Температура: {weatherData.list[0].main.temp}°C
              </p>
              <p className="description">
                {weatherData.list[0].weather[0].description}
              </p>
            </div>

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
        ) : null}
      </div>
    </div>
  );
}

export default App;
*/

import { useState, useEffect } from 'react';
import { fetchWeather } from './weatherService.js';
import icon from './assets/Weather-icon.png';
import WeatherMateimg from './assets/WeatherMate-img.png';
import './styles/App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('Almaty');
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadWeather = async () => {
      setIsLoading(true);
      const data = await fetchWeather(city);

      // Задержка перед завершением загрузки (2 секунды)
      setTimeout(() => {
        if (data) {
          setWeatherData(data);
        } else {
          setError('Не удалось загрузить данные. Проверьте подключение или API-ключ.');
        }
        setIsLoading(false);
      }, 2000); // 2000 мс = 2 секунды
    };

    loadWeather();
  }, [city]);

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme);
    document.body.classList.toggle('light-theme', !isDarkTheme);
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
    setWeatherData(null);
    setError(null);
    setIsLoading(true);
  };

  return (
    <div className={`App ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <header className="header">
        <img src={icon} alt="WeatherMate" className="icon" />
        <h1>WeatherMate</h1>
        <button onClick={toggleTheme} className="theme-toggle">
          {isDarkTheme ? 'Светлая тема' : 'Тёмная тема'}
        </button>
      </header>

      <section className="welcome">
        <div className="welcome_text">
          <div className="welcome_img">
            <img src={WeatherMateimg} alt="WeatherMate" className="enlarged-image" />
          </div>
          <h1 className='welcome_h1'>Вас приветствует WeatherMate!</h1>
          <p>Это приложение позволяет узнать прогноз погоды в доступных для просмотра городах.</p>
        </div>
      </section>

      <div className="weather-page">
        <h2 className="page-title">Погода в {city}</h2>
        <select value={city} onChange={handleCityChange} className="city-select">
          <option value="Almaty">Алматы</option>
          <option value="Chicago">Чикаго</option>
          <option value="Astana">Астана</option>
          <option value="Karaganda">Караганда</option>
          <option value="Novosibirsk">Новосибирск</option>
        </select>

        {error ? (
          <p className="error">{error}</p>
        ) : isLoading ? (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        ) : weatherData ? (
          <div>
            <div className="current-weather">
              <h3>Текущая погода</h3>
              <p className="temperature">
                Температура: {weatherData.list[0].main.temp}°C
              </p>
              <p className="description">
                {weatherData.list[0].weather[0].description}
              </p>
            </div>

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
        ) : null}
      </div>
    </div>
  );
}

export default App;
