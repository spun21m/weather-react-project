import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
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
      iconUrl: "https://openweathermap.org/img/wn/10d@2x.png",
    });
  }

  function search() {
    const apiKey = "b0ab2a5a92585c3b0f486dbd9d819d01";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
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
    search();
    return "loading...";
  }
}
