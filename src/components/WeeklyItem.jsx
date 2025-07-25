import { getWeekDays, getDayMonthFromDate2 } from "../../utils/DatetimeUtils";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const WeeklyItem = ({ index, logo, wind, temp, time, hum, pre, feels, description }) => {
  return (
    <div className="gradient-border relative flex flex-col justify-center rounded-2xl bg-blue-800 p-2 shadow-xl w-2/12" aria-label={`Forecast for ${getWeekDays()[index]}`}>
      <div className="flex justify-between">
        <span>{getDayMonthFromDate2(time)}</span>
        <span>{getWeekDays()[index]}</span>
      </div>
      <img src={logo} alt={description || "weather icon"} width={"50%"} className="self-center" />
      <ul className="text-sm font-medium">
        <li className="flex justify-between gap-2" aria-label="Temperature">
          <span>{temp}&deg;</span>
          <span>{feels}&deg;</span>
        </li>
        {description && <li>{description}</li>}
        <li aria-label="Wind">Wind : {wind} km/h</li>
        <li aria-label="Precipitation">Precipitation : {pre * 100} &#37;</li>
        <li aria-label="Humidity">Humidity : {hum} &#37;</li>
      </ul>
    </div>
  );
};

WeeklyItem.propTypes = {
  index: PropTypes.number.isRequired,
  logo: PropTypes.string,
  wind: PropTypes.number,
  temp: PropTypes.number,
  time: PropTypes.instanceOf(Date),
  hum: PropTypes.number,
  pre: PropTypes.number,
  feels: PropTypes.number,
  description: PropTypes.string,
};

export default WeeklyItem;
