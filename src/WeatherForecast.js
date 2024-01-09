import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "2718952144ed077c12e7c160fb6fc351";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

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
