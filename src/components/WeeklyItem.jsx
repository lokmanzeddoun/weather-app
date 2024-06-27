
// eslint-disable-next-line react/prop-types
const WeeklyItem = ({logo}) => {
  return (
    <div className="bg-blue-800 xl:w-48 flex flex-col justify-center p-2 rounded-2xl relative gradient-border shadow-xl">
      <div className="flex justify-between ">
        <span>July 12</span>
        <span>Wed</span>
      </div>
      <img src={logo} alt="" width={'50%'} className="self-center" />
      <ul className="text-sm font-medium">
        <li className="flex justify-between gap-2">
          <span>32&deg;</span>
          <span>27&deg;</span>
        </li>
        <li>Thundershower</li>
        <li>Wind : 16km/h</li>
        <li>Precipitation : 70&#37;</li>
        <li>Humidity : 77&#37;</li>
      </ul>
    </div>
  );
}

export default WeeklyItem