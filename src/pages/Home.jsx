import { lazy, Suspense } from "react";
import { useStateContext } from "../context/StateContext";
import useWeather from "../customHook/useWeather";
import images from "../constants/images";

const Today = lazy(() => import("../components/Today"));
const Weekly = lazy(() => import("../components/Weekly"));
const Details = lazy(() => import("../components/Details"));

const items = [
  {
    text: "Temperature",
    logo: images.temperatureLogo,
  },
  {
    text: "Wind",
    logo: images.windLogo,
  },
  {
    text: "Precipitation",
    logo: images.precipitationLogo,
  },
  {
    text: "Humidity",
    logo: images.humidityLogo,
  },
];

const Home = () => {
  const { result } = useStateContext();

  // Ensure result is not null or undefined before using its properties
  const latitude = result?.latitude;
  const longitude = result?.longitude;

  const [weather, weatherStatus] = useWeather(latitude, longitude);

  if (weatherStatus === "loading") {
    return <div>Loading...</div>;
  }

  if (weatherStatus === "error" || !weather) {
    return <div>Error loading weather data</div>;
  }

  return (
    <div className="border-box">
      {result ? (
        <div>
          <Suspense
            fallback={
              <div className="flex items-center justify-center p-4">
                <h2 className="animate-spin text-8xl">🌀</h2>
              </div>
            }
          >
            {weather[0] && <Today weather={weather[0]} />}
          </Suspense>
          <Suspense
            fallback={
              <div className="flex items-center justify-center p-4">
                <h2 className="animate-spin text-8xl">🌀</h2>
              </div>
            }
          >
            {weather[1] && <Details weather={weather[1]} items={items} />}
          </Suspense>
          <Suspense
            fallback={
              <div className="flex items-center justify-center p-4">
                <h2 className="animate-spin text-8xl">🌀</h2>
              </div>
            }
          >
            {weather[1] && <Weekly weather={weather[1]} />}
          </Suspense>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Home;
