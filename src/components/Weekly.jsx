import images from "../constants/images";
import WeeklyItem from "./WeeklyItem";
const Weekly = ({ weather }) => {
  const items = Array.from(
    { length: Math.ceil(weather.list.length / 8) },
    (_, i) => {
      const j = i * 8; // Ensure j increments by 8
      if (j < weather.list.length) {
        const date = new Date(weather.list[j].dt * 1000);
        console.log(date);
        return date;
      }
      return null; // Handle case where index exceeds weather.list length
    },
  ).filter((item) => item !== null); // Remove any null values
  return (
    <div className="ml-32 mt-8">
      <h2 className="mb-4 w-2/12 bg-gradient-to-r from-blue-400 via-blue-200 to-blue-100 bg-clip-text text-3xl font-semibold text-transparent">
        Weekly Forecast
      </h2>
      <div className="flex gap-14 text-white w-11/12">
        {items.map((value, i) => {
          return (
            <WeeklyItem
              key={i}
              logo={images.weatherLogo1}
              time={value}
              wind={weather.list[i + 8].wind.speed}
              temp={weather.list[i + 8].main.temp}
              feels={weather.list[i + 8].main.feels_like}
              hum={weather.list[i + 8].main.humidity}
              pre={weather.list[i + 8].pop}
              index={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Weekly;
