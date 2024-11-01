import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Regions from './Regions';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import './App.css';
import WeatherMateimg from './Assets/WeatherMate-img.png';
import icon from './Assets/Weather-icon.png';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme);
    document.body.classList.toggle('light-theme', !isDarkTheme);
  }, [isDarkTheme]);

  return (
    <Router>
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
            <button onClick={toggleModal} className="open-modal-button">
              Выберите регион
            </button>
          </div>
        </section>

        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <h2>Выберите регион</h2>
              <button onClick={toggleModal} className="close-modal">Закрыть</button>
              <Link to="/page1" className="modal-button" onClick={toggleModal}>Алматы</Link>
              <Link to="/page2" className="modal-button" onClick={toggleModal}>Чикаго</Link>
              <Link to="/page3" className="modal-button" onClick={toggleModal}>Астана</Link>
              <Link to="/page4" className="modal-button" onClick={toggleModal}>Караганде</Link>
            </div>
          </div>
        )}

        <Routes>
          <Route path="/regions" element={<Regions />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;