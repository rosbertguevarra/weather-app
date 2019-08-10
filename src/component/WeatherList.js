import React, { Component } from "react";
import Weather from "./Weather";

export default class WeatherList extends Component {
  MapWeather = () => {
    return this.props.list.map((weather, index) => {
      return <Weather key={index} id={weather.lat} {...weather} />;
    });
  };
  render() {
    return <div>{this.MapWeather()}</div>;
  }
}
