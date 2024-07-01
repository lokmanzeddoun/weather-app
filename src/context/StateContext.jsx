/* eslint-disable */

import { createContext, useContext } from "react";
import { useState } from "react";
const WeatherContext = createContext();

export const StateContext = ({ children }) => {
  const [city, setCity] = useState(null);
  const [result, setResult] = useState(null);
  const [todayWeather, setTodayWeather] = useState(null);
  const [todayForecast, setTodayForecast] = useState([]);
  const [weekForecast, setWeekForecast] = useState(null);
  return (
    <WeatherContext.Provider
      value={{
        city,
        result,
        setResult,
        setCity,
        todayForecast,
        todayWeather,
        weekForecast,
        setTodayForecast,
        setTodayWeather,
        setWeekForecast,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useStateContext = () => useContext(WeatherContext);
