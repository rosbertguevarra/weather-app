import React, { Component } from "react";
import Banner from "./component/Banner";
import axios from "axios";
import WeatherList from "./component/WeatherList";

export default class App extends Component {
  state = {
    term: "",
    data: [],
    loading: false
  };
  initMap = () => {
    console.log("dasfsf");
  };

  onChange = e => {
    this.setState({
      term: e.target.value
    });
  };

  renderList = () => {
    if (this.state.loading) {
      return <div className="lds-hourglass" />;
    } else {
      return <WeatherList list={this.state.data} />;
    }
  };

  onSearchSubmit = async e => {
    this.setState({ loading: true });
    e.preventDefault();
    const API_KEY = "f71a7c04711f43c9ba0122253190804";
    const response = await axios.get(
      `http://api.apixu.com/v1/current.json?key=${API_KEY}&q=${this.state.term}`
    );

    const { current, location } = response.data;
    this.setState({
      data: [{ ...current, ...location }],
      loading: false
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
        {this.renderList()}
      </div>
    );
  }
}
