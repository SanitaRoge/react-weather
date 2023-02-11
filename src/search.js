import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function returnResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      feelsLikeTemp: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      cityName: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
  }
  function searchCity() {
    const apiKey = "26548aa389ffd239b0f00ef27a26ebf5";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(returnResponse);
  }
  function submitSearch(event) {
    event.preventDefault();
    searchCity();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div>
        <h2>Weather search </h2>
        <form onSubmit={submitSearch}>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                className="form-control"
                placeholder="Enter city name"
                onChange={handleCityChange}
              />{" "}
            </div>
            <div className="col-4">
              <input type="submit" value="Search" className="btn btn-light" />
            </div>
          </div>
        </form>
        <Weather data={weatherData} />
      </div>
    );
  } else {
    searchCity();
    return "Loading...";
  }
}
