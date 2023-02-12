import React from "react";
import WeatherTemp from "./WeatherTemp";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  return (
    <div className="today">
      <div className="row">
        <div className="col-5">
          <h2> {props.data.cityName} </h2>
          <div className="date">
            <FormattedDate date={props.data.date} />
          </div>
        </div>
        <div className="col-4">
          <WeatherTemp
            celsius={props.data.temperature}
            feelsLikeCelsius={props.data.feelsLikeTemp}
          />
        </div>
        <div className="col-3">
          {" "}
          <img
            src={props.data.iconURL}
            className="weatherIcon"
            alt={props.data.description}
          ></img>
        </div>
      </div>
      <div className="row">
        <span>CONDITION</span>
        <div className="col-5">
          <span className="text-capitalize"> {props.data.description} </span>
        </div>

        <div className="col-4">
          <i className="fa-solid fa-wind fa-lg"></i>{" "}
          <span> {Math.round(props.data.wind)} km/h </span>
        </div>
        <div className="col-3">
          <i className="fa-solid fa-droplet fa-lg"></i>{" "}
          <span> {props.data.humidity} % </span>
        </div>
      </div>
    </div>
  );
}
