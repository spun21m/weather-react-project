import React from "react";
import "./Weather.css";

export default function Weather() {
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
        <h1 id="city">New York</h1>
        <p>
          <span id="date">Monday 20:52,</span>
          <span id="weather-description"> Clear sky</span>
        </p>
      </div>

      <div className="row">
        <div className="col-6 weather-temperature">
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            id="icon"
            className="float-left"
          />
          <span id="temperature"> 66</span>
          <span className="degree-in-fahrenheit dark"> °F </span>|
          <span className="degree-in-celcius">℃</span>
        </div>
        <div className="col-6 weather-detail">
          <ul>
            <li>Humidity: 66%</li>
            <li>Wind: 6 mph</li>
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
}
