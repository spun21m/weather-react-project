import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="weather-overview">
        <h1>{props.weatherData.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.weatherData.date} />
          </li>
          <li className="text-capitalize" id="weather-description">
            {" "}
            {props.weatherData.description}
          </li>
        </ul>
      </div>

      <div className="row">
        <div className="col-6 weather-temperature">
          <img
            src={props.weatherData.iconUrl}
            alt={props.weatherData.description}
            className="float-left"
          />
          <span> {Math.round(props.weatherData.temperature)}</span>
          <span className="degree-in-fahrenheit dark"> °F </span>|
          <span className="degree-in-celcius">℃</span>
        </div>
        <div className="col-6 weather-detail">
          <ul>
            <li>Humidity: {Math.round(props.weatherData.humidity)}%</li>
            <li>Wind: {Math.round(props.weatherData.wind)} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
