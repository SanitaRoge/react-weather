import React from "react";

export default function Weather() {
  let weatherData = {
    temperature: "20",
    feelsLike: "24",
    description: "Sunny",
    wind: "2km/h",
    humidity: "50%",
    cityName: "Paris",
    date: "Monday 10:11",
  };
  return (
    <div className="row">
      <div className="today">
        <div className="col">
          <h2> {weatherData.cityName} </h2>
          <div className="date">Updated: {weatherData.date}</div>
        </div>
        <div className="col">
          <div className="weather-temperature">
            <span className="temperature"> {weatherData.temperature} °C</span>
            <br />
            <span className="feels-like">
              <small>Feels like </small>
              {weatherData.feelsLike} °
            </span>
          </div>
        </div>
        <div className="col">
          <ul>
            <li>CONDITION</li>
            <li>
              <span> {weatherData.description} </span>
            </li>
            <li>
              <i className="fa-solid fa-wind fa-lg"></i>{" "}
              <span> {weatherData.wind} </span>
            </li>
            <li>
              <i className="fa-solid fa-droplet fa-lg"></i>{" "}
              <span> {weatherData.humidity} </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
