import React from "react";

const Weather = props => (
  <div className="day">
    <div className="daygrouping">
      <h3>{props.weather.day}</h3>
      <img src={props.weather.imgURL} />
      <h3>{props.weather.highTemp}</h3>
      <h3>{props.weather.lowTemp}</h3>
    </div>
  </div>
);

export default Weather;
