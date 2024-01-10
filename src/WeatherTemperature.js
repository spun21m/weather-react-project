import React, { useState } from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <span className="temperature ms-3"> {Math.round(props.fahrenheit)}</span>
      <span className="unit">°F</span>
    </div>
  );
}
