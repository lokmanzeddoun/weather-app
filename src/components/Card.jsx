/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
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
      default:
        return "";
    }
  };
  return (
    <div className="ml-4 flex w-1/12 flex-col items-center justify-center text-xl font-medium text-white" aria-label={`Weather card for ${time}`}>
      <span>{time}</span>
      <img src={logo} alt={`${type} icon`} width={"80%"} />
      <h2>
        {degree} {writeUnit(type)}
      </h2>
    </div>
  );
};

Card.propTypes = {
  logo: PropTypes.string,
  time: PropTypes.string,
  degree: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
};

export default Card;
