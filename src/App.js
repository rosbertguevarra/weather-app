import React, { Component } from "react";
import Banner from "./component/Banner";
import axios from "axios";
import WeatherList from "./component/WeatherList";

export default class App extends Component {
  state = {
    term: "",
    data: []
  };
  initMap = () => {
    console.log("dasfsf");
  };

  onChange = e => {
    this.setState({
      term: e.target.value
    });
  };

  onSearchSubmit = async e => {
    e.preventDefault();
    const API_KEY = "f71a7c04711f43c9ba0122253190804";
    const response = await axios.get(
      `http://api.apixu.com/v1/current.json?key=${API_KEY}&q=${this.state.term}`
    );

    const { current, location } = response.data;
    this.setState({
      data: [{ ...current, ...location }]
    });
    this.setState({
      term: ""
    });
  };

  render() {
    return (
      <div className="container">
        <Banner />
        <form className="form-input" onSubmit={this.onSearchSubmit}>
          <input
            onChange={this.onChange}
            type="text"
            placeholder="Search for a City"
          />
          <button className="button is-primary">Search</button>
        </form>
        <WeatherList list={this.state.data} />
      </div>
    );
  }
}
