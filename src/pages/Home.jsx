import { lazy, Suspense } from "react";
import { useStateContext } from "../context/StateContext";
import useWeather from "../customHook/useWeather";
import images from "../constants/images";
import LoadingFallback from "../components/LoadingFallback";

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
    return <LoadingFallback message="Fetching weather data..." />;
  }

  if (weatherStatus === "error" || !weather) {
    return <div role="alert" className="text-red-600 text-center p-8">Error loading weather data</div>;
  }

  return (
    <div className="border-box">
      {result ? (
        <div>
          <Suspense fallback={<LoadingFallback message="Loading today's weather..." />}>
            {weather[0] && <Today weather={weather[0]} />}
          </Suspense>
          <Suspense fallback={<LoadingFallback message="Loading details..." />}>
            {weather[1] && <Details weather={weather[1]} items={items} />}
          </Suspense>
          <Suspense fallback={<LoadingFallback message="Loading weekly forecast..." />}>
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
