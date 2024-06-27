import images from "../constants/images";
import Item from "./Item";
import Card from "./Card";
const Details = () => {
  return (
    <nav className="ml-32 h-64 w-10/12 rounded-xl bg-sky-300 shadow-xl">
      <ul className="-mt-16 flex basis-1/5 list-none justify-start pl-4 pt-1 text-xl text-white">
        <Item text={"Temperature"} logo={images.temperatureLogo} />
        <Item text={"Wind"} logo={images.windLogo} />
        <Item text={"Precipitation"} logo={images.precipitationLogo} />
        <Item text={"Humidity"} logo={images.humidityLogo} />
      </ul>
      <div className="flex justify-between items-center mt-6">
        <Card logo={images.weatherLogo1} degree={28} time={`1 AM`}/>
        <Card logo={images.weatherLogo1} degree={28} time={`1 AM`}/>
        <Card logo={images.weatherLogo1} degree={28} time={`1 AM`}/>
        <Card logo={images.weatherLogo1} degree={28} time={`1 AM`}/>
        <Card logo={images.weatherLogo1} degree={28} time={`1 AM`}/>
        <Card logo={images.weatherLogo1} degree={28} time={`1 AM`}/>
        <Card logo={images.weatherLogo1} degree={28} time={`1 AM`}/>
        <Card logo={images.weatherLogo1} degree={28} time={`1 AM`}/>
        <Card logo={images.weatherLogo1} degree={28} time={`1 AM`}/>
        <Card logo={images.weatherLogo1} degree={28} time={`1 AM`}/>
        <Card logo={images.weatherLogo1} degree={28} time={`1 AM`}/>
        <Card logo={images.weatherLogo1} degree={28} time={`1 AM`}/>      
      </div>
    </nav>
  );
};

export default Details;
