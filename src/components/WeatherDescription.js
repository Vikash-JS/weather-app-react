import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import { windDegreeToText } from "../helpers";

import WeatherDescriptionItem from "./WeatherDescriptionItem";

const WeatherDescription = ({ weather, temperature }) => {
  return (
    <div className="container">
      <div className="row list-group-flush flex-column flex-md-row justify-content-center align-items-center border-bottom  border-dark">
        <WeatherDescriptionItem
          description={"SUNRISE"}
          value={moment.unix(weather.sys.sunrise).format("HH:MM")}
        />
        <WeatherDescriptionItem
          description={"SUNSET"}
          value={moment.unix(weather.sys.sunset).format("HH:MM")}
        />
        <WeatherDescriptionItem
          description={"HUMIDITY"}
          value={`${weather.main.humidity}%`}
        />
      </div>
      <div className="row mt-3 list-group-flush flex-column flex-md-row justify-content-center  border-bottom border-dark ">
        <WeatherDescriptionItem
          description={"FEELS LIKE"}
          value={temperature(weather.main.feels_like)}
        />
        <WeatherDescriptionItem
          description={"PRESSURE"}
          value={`${weather.main.pressure} hPa`}
        />
        <WeatherDescriptionItem
          description={"WIND"}
          value={`${windDegreeToText(weather.wind.deg)} ${Math.round(
            weather.wind.speed
          )} km/hr`}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { weather: state.weather };
};

export default connect(mapStateToProps)(WeatherDescription);
