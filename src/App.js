import React from "react";
import Weather from "./Weather";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="app-container-wrapper">
          <Weather defaultCity="New York" />
          <small className="github-link">
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
    </div>
  );
}

export default App;
