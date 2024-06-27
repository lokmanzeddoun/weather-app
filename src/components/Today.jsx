import images from "../constants/images";
const Today = () => {
  return (
    <div className="flex justify-between px-10 text-xl text-white">
      <div className="m-14 flex flex-col justify-between gap-4 p-8">
        <h3 className="bg-gradient-to-r from-blue-400 to-blue-100 bg-clip-text text-3xl font-semibold text-transparent">
          Today&apos;s Weather Forecast
        </h3>
        <p className="text-2xl font-semibold">Wednesday, July 12. 10:03 AM </p>
        <div className="flex">
          <span className="text-7xl font-semibold">30</span>
          <img
            src={images.celsiusLogo}
            alt="celsius-logo"
            width={"20px"}
            className="self-start pt-2"
          />
        </div>
        <div className="flex">
          <p>Feels </p>
          <span className="pl-3 pr-1 text-xl font-semibold">32</span>
          <img
            src={images.celsiusLogo}
            alt="celsius-logo"
            width={"13px"}
            className="pb-1"
          />
        </div>
      </div>
      <div className="mr-36 flex w-3/12 items-center justify-center gap-3 p-8">
        <img
          src={images.rainyLogo}
          alt="cloud-rain-logo"
          width={`220px`}
          className="self-stretch"
        />
        <div className="flex h-full w-64 flex-col">
          <h4 className="pb-8 pt-14 text-3xl font-semibold">Thundershower</h4>
          <div className="flex gap-2">
            <img src={images.precipitationLogo} alt="precipitation-logo" width={`20px`} />
            <div className="flex gap-2">
              <p className="font-medium ">Precipitation: </p>
              <span>80%</span>
            </div>
          </div>
          <div className="flex gap-2">
            <img src={images.humidityLogo} alt="precipitation-logo" width={`20px`} />
            <div className="flex gap-2">
              <p className="font-medium ">Humidity: </p>
              <span>74%</span>
            </div>
          </div>
          <div className="flex gap-2">
            <img src={images.windLogo} alt="precipitation-logo" width={`20px`} />
            <div className="flex gap-2">
              <p className="font-medium ">Wind: </p>
              <span>18Km/h</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Today;
