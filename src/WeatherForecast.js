import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecasr-day">Tue</div>
          <WeatherIcon code="01d" size={32} />
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">53°</span>
            <span className="WeatherForecast-temp-min">46°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
