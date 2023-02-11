import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function returnResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      feelsLikeTemp: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      cityName: response.data.name,
      description: response.data.weather[0].description,
      date: "Monday 11:11",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="today">
        <div className="row">
          <div className="col-4">
            <h2> {weatherData.cityName} </h2>
            <div className="date"> {weatherData.date}</div>
          </div>
          <div className="col-4">
            <div className="weather-temperature">
              <span className="temperature">
                {" "}
                {Math.round(weatherData.temperature)} °C
              </span>
              <br />
              <span className="feels-like">
                <small>Feels like </small>
                {Math.round(weatherData.feelsLikeTemp)}°
              </span>
            </div>
          </div>
          <div className="col-4">Weather icon</div>
        </div>
        <div className="row">
          <span>CONDITION</span>
          <div className="col-4">
            <span className="text-capitalize"> {weatherData.description} </span>
          </div>

          <div className="col-4">
            <i className="fa-solid fa-wind fa-lg"></i>{" "}
            <span> {Math.round(weatherData.wind)} km/h </span>
          </div>
          <div className="col-4">
            <i className="fa-solid fa-droplet fa-lg"></i>{" "}
            <span> {weatherData.humidity} % </span>
          </div>
        </div>
      </div>
    );
  } else {
    let cityName = "Paris";
    const apiKey = "26548aa389ffd239b0f00ef27a26ebf5";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(returnResponse);
    return "Loading...";
  }
}
