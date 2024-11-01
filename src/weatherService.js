const API_KEY = '8176cdd345a6be81bb9361a182580d03';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeather = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric&cnt=5`
    );
    if (!response.ok) throw new Error(`Ошибка получения данных: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Ошибка запроса:", error.message);
    return null;
  }
};
