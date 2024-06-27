import images from "../constants/images"
import WeeklyItem from "./WeeklyItem"
const Weekly = () => {
  return (
    <div className="ml-32 mt-8">
      <h2 className="bg-gradient-to-r from-blue-400 via-blue-200 to-blue-100 bg-clip-text text-3xl font-semibold text-transparent w-2/12 mb-4">
        Weekly Forecast
      </h2>
      <div className="text-white flex gap-10">
        <WeeklyItem logo={images.weatherLogo1} />
        <WeeklyItem logo={images.weatherLogo1} />
        <WeeklyItem logo={images.weatherLogo1} />
        <WeeklyItem logo={images.weatherLogo1} />
        <WeeklyItem logo={images.weatherLogo1} />
        <WeeklyItem logo={images.weatherLogo1} />
        <WeeklyItem logo={images.weatherLogo1} />
      </div>
    </div>
  );
}

export default Weekly