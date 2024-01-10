import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 mt-2>{props.weatherData.city}</h1>
      <ul className="fst-italic">
        <li>
          <FormattedDate date={props.weatherData.date} />
        </li>
        <li className="text-capitalize" id="weather-description">
          {" "}
          {props.weatherData.description}
        </li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <div className="weather-temperature-container d-flex justify-content-start">
            <WeatherIcon code={props.weatherData.icon} size={52} />
            <WeatherTemperature
              fahrenheit={Math.round(props.weatherData.temperature)}
            />
          </div>
        </div>
        <div className="weather-temperature-container d-flex justify-content-center col-6 weather-detail">
          <ul>
            <li>Humidity: {Math.round(props.weatherData.humidity)}%</li>
            <li>Wind: {Math.round(props.weatherData.wind)} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
