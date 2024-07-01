const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export async function fetchWeatherData({ queryKey }) {
  const lat = queryKey[0];
  const lon = queryKey[1];
  try {
    let [weatherPromise, forecastPromise] = await Promise.all([
      fetch(
        `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
      ),
      fetch(
        `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
      ),
    ]);

    const weatherResponse = await weatherPromise.json();
    const forecastResponse = await forecastPromise.json();
    return [weatherResponse, forecastResponse];
  } catch (error) {
    console.log(error);
  }
}
