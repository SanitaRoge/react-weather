import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="weatherTemperature">
        <span className="temperature">
          {Math.round(props.celsius)}{" "}
          <span className="units">
            °C |
            <a href="/" onClick={convertFahrenheit}>
              {" "}
              °F
            </a>{" "}
          </span>{" "}
        </span>
        <br />
        <span className="feelsLike">
          <small>Feels like </small>
          {Math.round(props.feelsLikeCelsius)}°
        </span>
      </div>
    );
  } else {
    let fahrenheit = props.celsius * 1.8 + 32;
    let feelsLikeFahrenheit = props.feelsLikeCelsius * 1.8 + 32;
    return (
      <div className="weatherTemperature">
        <span className="temperature">
          {Math.round(fahrenheit)}{" "}
          <span className="units">
            <a href="/" onClick={convertCelsius}>
              {" "}
              °C{" "}
            </a>{" "}
            | °F
          </span>{" "}
        </span>
        <br />
        <span className="feelsLike">
          <small>Feels like </small>
          {Math.round(feelsLikeFahrenheit)}°
        </span>
      </div>
    );
  }
}
