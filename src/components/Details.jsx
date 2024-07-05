/* eslint-disable react/prop-types */
import Item from "./Item";
import { ALL_DESCRIPTIONS } from "../../utils/DateConstants";
import Card from "./Card";
import { useState } from "react";
const Details = ({ items, weather }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const times = Array.from({ length: 8 }, (_, j) => {
    const date = new Date(weather.list[j].dt * 1000);
    let hours = date.getHours();
    const amPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${hours}${amPm}`;
  });
  const handleClick = (index) => {
    setActiveIndex(index);
    // Make your request here, for example, using fetch or axios
    // fetch('/your-endpoint').then(response => response.json()).then(data => console.log(data));
  };
  const getAction = (i, j) => {
    switch (i) {
      case 0:
        return [weather.list[j].main.temp, "temp"];
      case 1:
        return [weather.list[j].wind.speed, "wind"];
      case 2:
        return [weather.list[j].pop, "pre"];
      case 3:
        return [weather.list[j].main.humidity, "hum"];
      default:
        return [null, null]; // Handle default case if needed
    }
  };
  return (
    <nav className="ml-32 h-64 w-10/12 rounded-xl bg-sky-300 shadow-xl">
      <ul className="-mt-16 flex basis-1/5 list-none justify-start pl-4 pt-1 text-xl text-white">
        {items.map((value, index) => (
          <Item
            key={index}
            text={value.text}
            logo={value.logo}
            isActive={activeIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </ul>
      <div className="mt-6 flex items-center justify-between">
        {times.map((time, index) => {
          const [degree, type] = getAction(activeIndex, index);

          return (
            <Card
              key={index}
              logo={
                ALL_DESCRIPTIONS.find(
                  (item) => item.name === weather.list[index].weather[0].icon,
                )?.icon
              }
              degree={degree}
              time={time}
              type={type}
            />
          );
        })}
      </div>
    </nav>
  );
};

export default Details;
