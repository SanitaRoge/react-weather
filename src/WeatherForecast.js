import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, getForecastData] = useState(null);
  function getForecastResponse(response) {
    console.log(response);
    getForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="weatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay forecast={forecastData[0]} />
          </div>{" "}
        </div>
      </div>
    );
  } else {
    const apiKey = "26548aa389ffd239b0f00ef27a26ebf5";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(getForecastResponse);
    return null;
  }
}
