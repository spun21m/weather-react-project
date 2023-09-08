import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "Monday 07:00",
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      iconUrl: "https://openweathermap.org/img/wn/10d@2x.png",
    });
  }

  if (weatherData.ready) {
    return (
      // <div className="container">
      //   <div className="app-container-wrapper">
      <div className="Weather">
        <div className="header-cities">
          <ul>
            <li>Lisbon</li>
            <li>Sydney</li>
            <li>Tokyo</li>
            <li>Toronto</li>
          </ul>

          {/* <div className="col-2 ">Lisbon</div>
        <div className="col-2 ">Sydney</div>
        <div className="col-2 ">Tokyo</div>
        <div className="col-2 ">Toronto</div>
        <div className="col-2 current-location">Current</div> */}
        </div>

        <form id="search-form" className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="text"
                placeholder="Search a city"
                className="form-control search-box"
                autocomplete="off"
                id="search-city"
              />
            </div>
            <div className="col-3">
              <button className="btn btn-primary w-100">Search</button>
            </div>
          </div>
        </form>

        <div className="weather-overview">
          <h1 id="city">{weatherData.city}</h1>
          <ul>
            <li id="date">{weatherData.date}</li>
            <li className="text-capitalize" id="weather-description">
              {" "}
              {weatherData.description}
            </li>
          </ul>
        </div>

        <div className="row">
          <div className="col-6 weather-temperature">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              id="icon"
              className="float-left"
            />
            <span id="temperature"> {Math.round(weatherData.temperature)}</span>
            <span className="degree-in-fahrenheit dark"> °F </span>|
            <span className="degree-in-celcius">℃</span>
          </div>
          <div className="col-6 weather-detail">
            <ul>
              <li>Humidity: {Math.round(weatherData.humidity)}%</li>
              <li>Wind: {Math.round(weatherData.wind)} mph</li>
            </ul>
          </div>
        </div>
      </div>

      //     {/* <div className="row" id="future-weather-info">
      //         <div className="col" id="today">
      //           <span className="day">Mon</span>
      //           <br />
      //           <i className="fa-solid fa-cloud-sun"></i>
      //           <br />
      //           <strong>54 ℉</strong> 39 ℉
      //         </div>
      //         <div className="col">
      //           <span className="day">Tue</span>
      //           <br />
      //           <i className="fa-solid fa-cloud"></i>
      //           <br />
      //           <strong>42 ℉</strong> 28 ℉
      //         </div>
      //         <div className="col">
      //           <span className="day">Wed</span>
      //           <br />
      //           <i className="fa-solid fa-cloud-sun"></i>
      //           <br />
      //           <strong>40 ℉</strong> 28 ℉
      //         </div>
      //         <div className="col">
      //           <span className="day">Thu</span>
      //           <br />
      //           <i className="fa-solid fa-cloud-sun-rain"></i>
      //           <br />
      //           <strong>45 ℉</strong> 31 ℉
      //         </div>
      //         <div className="col">
      //           <span className="day">Fri</span>
      //           <br />
      //           <i className="fa-solid fa-cloud-sun"></i>
      //           <br />
      //           <strong>34 ℉</strong> 8 ℉
      //         </div>
      //         <div className="col">
      //           <span className="day">Sat</span>
      //           <br />
      //           <i className="fa-solid fa-cloud-rain"></i>
      //           <br />
      //           <strong>26 ℉</strong> 24 ℉
      //         </div>
      //       </div>
      //     </div>
      //     <br /> */}
      //     <small className="github-link">
      //       <a
      //         href="https://github.com/spun21m/weather-react-project"
      //         target="_blank"
      //         rel="noreferrer"
      //       >
      //         Open-source code
      //       </a>{" "}
      //       by Sital Pun
      //     </small>
      //   </div>
      // </div>
    );
  } else {
    const apiKey = "b0ab2a5a92585c3b0f486dbd9d819d01";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
    return "loading...";
  }
}
