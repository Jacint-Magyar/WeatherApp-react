import React from 'react';

const Hours = ({ hour, description, icon, temp }) => {
  return (
    <li className="unit">
      <div className="time">{hour}</div>
      <img className="icon" src={`http://openweathermap.org/img/w/${icon}.png`} alt=""/>
      <div className="temp">{temp}
        <span className="celsius"> &#176;</span>
      </div>
      <div className="description">{description}</div>
    </li>
  );
};

export default Hours;