import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="container">
      <div className="app-container-wrapper">
        <div className="app-container">
          <div class="row" id="top-row">
            <div class="col-2 cities">Lisbon</div>
            <div class="col-2 cities">Sydney</div>
            <div class="col-2 cities">Tokyo</div>
            <div class="col-2 cities">Toronto</div>
            <div class="col-2 current-location">Current</div>
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

          <div class="row" id="current-weather-info">
            <div class="col">
              <ul>
                <li>New York</li>
                <li>
                  <i class="fa-solid fa-cloud-sun"></i>
                </li>
              </ul>
              {/* <h1 id="input-city">New York</h1>
              <i class="fa-solid fa-cloud-sun"></i> */}
              <p>
                <span id="degreeTemperature"> 66</span>
                <span class="degree-in-fahrenheit dark"> °F </span>|
                <span class="degree-in-celcius">℃</span>
              </p>
            </div>
            <div class="col" id="current-day-precipitation">
              <h1 class="day" id="current-day">
                Monday 20:52
              </h1>
              <p>
                {/* <span> Precipitation: 9% </span><br /> */}
                <span id="humidity-percentage">Humidity: 66% </span>
                <br />
                <span id="wind-speed">Wind: 6 mph </span>
              </p>
            </div>
          </div>
          <div class="row" id="future-weather-info">
            <div class="col" id="today">
              <span class="day">Mon</span>
              <br />
              <i class="fa-solid fa-cloud-sun"></i>
              <br />
              <strong>54 ℉</strong> 39 ℉
            </div>
            <div class="col">
              <span class="day">Tue</span>
              <br />
              <i class="fa-solid fa-cloud"></i>
              <br />
              <strong>42 ℉</strong> 28 ℉
            </div>
            <div class="col">
              <span class="day">Wed</span>
              <br />
              <i class="fa-solid fa-cloud-sun"></i>
              <br />
              <strong>40 ℉</strong> 28 ℉
            </div>
            <div class="col">
              <span class="day">Thu</span>
              <br />
              <i class="fa-solid fa-cloud-sun-rain"></i>
              <br />
              <strong>45 ℉</strong> 31 ℉
            </div>
            <div class="col">
              <span class="day">Fri</span>
              <br />
              <i class="fa-solid fa-cloud-sun"></i>
              <br />
              <strong>34 ℉</strong> 8 ℉
            </div>
            <div class="col">
              <span class="day">Sat</span>
              <br />
              <i class="fa-solid fa-cloud-rain"></i>
              <br />
              <strong>26 ℉</strong> 24 ℉
            </div>
          </div>
        </div>
        <br />
        <small class="github-link">
          <a
            href="https://github.com/spun21m/weather-react-project"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Sital Pun
        </small>
      </div>
    </div>
  );
}
