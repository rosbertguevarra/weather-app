import React, { Component } from "react";
import weather from "./api/apixu";
import Banner from "./component/Banner";

export default class App extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <Banner />
        <form className="form-input">
          <input type="text" placeholder="Search for a City" />
          <a class="button is-primary">Search</a>
        </form>
      </div>
    );
  }
}
