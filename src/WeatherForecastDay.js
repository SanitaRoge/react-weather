import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function ForecastIcon() {
    let iconURL = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
    return iconURL;
  }

  return (
    <div>
      <div className="forecastDay">
        {" "}
        {day()}{" "}
        <div className="forecastIcon">
          {" "}
          <img src={ForecastIcon()} className="weatherIcon" alt="icon"></img>
        </div>{" "}
        <div>
          {" "}
          <span className="forecastMaxTemp"> {maxTemp()}</span>{" "}
          <span className="forecastMinTemp"> {minTemp()}</span>{" "}
        </div>
      </div>
    </div>
  );
}
