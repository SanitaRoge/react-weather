import React from "react";
import axios from "axios";

export default function WeatherForecast(props) {
  function getForecastResponse(response) {
    console.log(response);
  }

  const apiKey = "26548aa389ffd239b0f00ef27a26ebf5";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(getForecastResponse);

  return (
    <div className="weatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecastDay"> Thu </div>{" "}
          <div className="forecastIcon">icon</div>{" "}
          <div>
            {" "}
            <span className="forecastMaxTemp"> 19 °</span>{" "}
            <span className="forecastMinTemp"> 10 °</span>{" "}
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
