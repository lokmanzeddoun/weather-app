import { getWeekDays, getDayMonthFromDate2 } from "../../utils/DatetimeUtils";

// eslint-disable-next-line react/prop-types
const WeeklyItem = ({ index, logo, wind, temp, time, hum, pre, feels }) => {
  return (
    <div className="gradient-border relative flex flex-col justify-center rounded-2xl bg-blue-800 p-2 shadow-xl w-2/12">
      <div className="flex justify-between">
        <span>{getDayMonthFromDate2(time)}</span>
        <span>{getWeekDays()[index]}</span>
      </div>
      <img src={logo} alt="" width={"50%"} className="self-center" />
      <ul className="text-sm font-medium">
        <li className="flex justify-between gap-2">
          <span>{temp}&deg;</span>
          <span>{feels}&deg;</span>
        </li>
        <li>Thundershower</li>
        <li>Wind : {wind} km/h</li>
        <li>Precipitation : {pre * 100} &#37;</li>
        <li>Humidity : {hum} &#37;</li>
      </ul>
    </div>
  );
};

export default WeeklyItem;
