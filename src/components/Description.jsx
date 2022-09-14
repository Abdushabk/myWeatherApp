import React from "react";
import { FaArrowDown, FaArrowUp, FaWind } from 'react-icons/fa'
import { BiHappy } from 'react-icons/bi'
import { MdCompress, MdOutlineWaterDrop } from 'react-icons/md'
import './Description.css'

const Description = ({weather, units}) => {

  const tempUnits = units === "metric" ? "°C" : "°F"
  const windUnits = units === "metric" ? "m/s" : "m/h"

  const cards = [
  {
    id: 1,
    icon: <FaArrowDown/>,
    title: "min",
    data: weather.temp_min.toFixed(),
    unit: tempUnits,
  },
  {
    id: 2,
    icon: <FaArrowUp/>,
    title: "max",
    data: weather.temp_max.toFixed(),
    unit: tempUnits,
  },
  {
    id: 3,
    icon: <BiHappy/>,
    title: "feels like",
    data: weather.feels_like.toFixed(),
    unit: tempUnits,
  },
  {
    id: 4,
    icon: <MdCompress/>,
    title: "pressure",
    data: weather.pressure.toFixed(),
    unit: "hPa",
  },
  {
    id: 5,
    icon: <MdOutlineWaterDrop/>,
    title: "humidity",
    data: weather.humidity.toFixed(),
    unit: "%",
  },
  {
    id: 6,
    icon: <FaWind/>,
    title: "wind speed",
    data: weather.speed.toFixed(),
    unit: windUnits,
  },
]
  return (
    <div className="section section__description">
    {cards.map(({id, icon, title, data, unit}) => (
      <div key={id} className="card">
        <div className="description__card-icon">
            {icon}
            <small>{title}</small>
        </div>
        <h2>{`${data} ${unit}`}</h2>
      </div>))}
      
    </div>
  );
};

export default Description;
