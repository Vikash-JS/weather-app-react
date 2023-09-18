import React from "react";
import { connect } from "react-redux";

const CurrentWeather = ({ weather, location, temperature }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2 className="location-name">{location.name}</h2>
      <h1 className="display-1 ml-3">{temperature(weather.main.temp)}</h1>
      <div className="d-flex">
        <p className="mx-1">H:{temperature(weather.main.temp_max)}</p>
        <p className="mx-1">L:{temperature(weather.main.temp_min)}</p>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { weather: state.weather, location: state.location };
};

export default connect(mapStateToProps)(CurrentWeather);
