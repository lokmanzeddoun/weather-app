import images from "../constants/images";

const Details = () => {
  return (
    <div className="ml-32 h-64 w-10/12 rounded-xl bg-sky-300 shadow-xl">
      <nav>
        <ul className="-mt-16 flex basis-1/5 list-none justify-start  pl-4 pt-1 text-xl text-white">
          <li className="side-nav__item relative before:absolute">
            <a href="#" className="flex">
              <img src={images.temperatureLogo} alt="" />
              <span>Temperature</span>
            </a>
          </li>
          <li className="side-nav__item">
            <a href="#" className="flex">
              <img src={images.windLogo} alt="" />
              <span>Wind</span>
            </a>
          </li>
          <li className="side-nav__item">
            <a href="#" className="flex">
              <img src={images.precipitationLogo} alt="" />
              <span>Precipitation</span>
            </a>
          </li>
          <li className="side-nav__item">
            <a href="#" className="flex">
              <img src={images.humidityLogo} alt="" />
              <span>Humidity</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Details;
