import images from "../constants/images";
import { getWeekDays, getDayMonthFromDate } from "../../utils/DatetimeUtils";
import { useEffect, useState } from "react";
import { ALL_DESCRIPTIONS } from "../../utils/DateConstants";
import PropTypes from "prop-types";
const Today = ({ weather }) => {
  // const { todayWeather, setTodayWeather } = useStateContext();
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every second

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);
  if (!weather) {
    return <div>No weather data available.</div>;
  }
  const description = weather.weather[0]?.description || "Weather info";
  const tempUnit = "°C";
  const windUnit = "Km/h";
  return (
    <div className="flex justify-between px-10 text-xl text-white" aria-label="Today's weather overview">
      <div className="m-14 flex flex-col justify-between gap-4 p-8">
        <h3 className="bg-gradient-to-r from-blue-400 to-blue-100 bg-clip-text text-3xl font-semibold text-transparent">
          Today&apos;s Weather Forecast
        </h3>
        <p className="text-2xl font-semibold">
          {getWeekDays()[0]}, {getDayMonthFromDate()}.{" "}
          {time.toTimeString().split(" ")[0]}{" "}
        </p>
        <div className="flex" aria-label="Temperature">
          <span className="text-7xl font-semibold">{weather.main.temp}</span>
          <img
            src={images.celsiusLogo}
            alt="celsius-logo"
            width={20}
            className="self-start pt-2"
          />
          <span className="sr-only">{tempUnit}</span>
        </div>
        <div className="flex" aria-label="Feels like temperature">
          <p>Feels </p>
          <span className="pl-3 pr-1 text-xl font-semibold">
            {weather.main.feels_like}
          </span>
          <img
            src={images.celsiusLogo}
            alt="celsius-logo"
            width={13}
            className="pb-1"
          />
          <span className="sr-only">{tempUnit}</span>
        </div>
      </div>
      <div className="mr-36 flex w-3/12 items-center justify-center gap-3 p-8">
        <img
          src={
            ALL_DESCRIPTIONS.find(
              (item) => item.name === weather.weather[0].icon,
            )?.icon
          }
          alt={description}
          width={100}
          className="self-stretch"
        />
        <div className="flex h-full w-64 flex-col">
          <h4 className="pb-8 pt-14 text-3xl font-semibold">{description}</h4>
          <div className="flex gap-2" aria-label="Precipitation">
            <img
              src={images.precipitationLogo}
              alt="precipitation-logo"
              width={20}
            />
            <div className="flex gap-2">
              <p className="font-medium">Precipitation: </p>
              <span>
                {weather.perception || weather.rain ? weather.perception : "0%"}
              </span>
            </div>
          </div>
          <div className="flex gap-2" aria-label="Humidity">
            <img
              src={images.humidityLogo}
              alt="humidity-logo"
              width={20}
            />
            <div className="flex gap-2">
              <p className="font-medium">Humidity: </p>
              <span>{weather.main.humidity}%</span>
            </div>
          </div>
          <div className="flex gap-2" aria-label="Wind speed">
            <img
              src={images.windLogo}
              alt="wind-logo"
              width={20}
            />
            <div className="flex gap-2">
              <p className="font-medium">Wind: </p>
              <span>{weather.wind.speed}{windUnit}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Today.propTypes = {
  weather: PropTypes.object,
};

export default Today;
