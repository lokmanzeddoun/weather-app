/* eslint-disable react/prop-types */
const Card = ({ logo, time, degree, type }) => {
  const writeUnit = (type) => {
    switch (type) {
      case "temp":
        return "°";
      case "hum":
        return "%";
      case "pre":
        return "%";
      case "wind":
        return "Km/h";
    }
  };
  return (
    <div className="ml-4 flex w-1/12 flex-col items-center justify-center text-xl font-medium text-white">
      <span className="">{time}</span>
      <img src={logo} alt="logo" width={"80%"} />
      <h2 className="">
        {degree} {writeUnit(type)}
      </h2>
    </div>
  );
};

export default Card;
