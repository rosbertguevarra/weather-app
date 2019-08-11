import React from "react";
import "../style/home.css";

const Weather = props => {
  console.log(props);
  return (
    <div className="weather">
      <h1 className="degrees">{props.temp_c} &#8451;</h1>
      <h1 className="city">{props.name}</h1>
      <h3>
        {props.region}, {props.country}
      </h3>
      <h3>Last updated: {props.last_updated}</h3>
      <h3>Local Time: {props.localtime}</h3>
      <hr style={{ border: "2px solid #2ecc71" }} />
      <span className="weather-conditions">
        <i className="wi wi-cloudy-gusts"> Gust: {props.gust_mph} MPH </i>
        <i className="wi wi-humidity"> humidity: {props.humidity} </i>
        <i className="wi wi-windy"> Wind: {props.wind_mph} MPH </i>
      </span>
    </div>
  );
};

export default Weather;
