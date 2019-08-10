import React from "react";

const Weather = props => {
  console.log(props);
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
};

export default Weather;
