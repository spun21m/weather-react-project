import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "b0ab2a5a92585c3b0f486dbd9d819d01";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function searchTopDisplayCities(topCity) {
    const apiKey = "b0ab2a5a92585c3b0f486dbd9d819d01";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${topCity}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function displayWeather(event) {
    event.preventDefault();

    const topDisplayCity = event.target.innerHTML;
    searchTopDisplayCities(topDisplayCity);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="header-cities">
          <ul>
            <li onClick={displayWeather}>Lisbon</li>
            <li onClick={displayWeather}>Sydney</li>
            <li onClick={displayWeather}>Tokyo</li>
            <li onClick={displayWeather}>Toronto</li>
          </ul>
        </div>

        <form className="mb-3" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control search-input p-3"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100 p-3"
              />
            </div>
          </div>
        </form>
        <WeatherInfo weatherData={weatherData} />
        <WeatherForecast />
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
