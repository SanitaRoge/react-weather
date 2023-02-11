import React from "react";

import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  return (
    <div className="today">
      <div className="row">
        <div className="col-4">
          <h2> {props.data.cityName} </h2>
          <div className="date">
            <FormattedDate date={props.data.date} />
          </div>
        </div>
        <div className="col-4">
          <div className="weather-temperature">
            <span className="temperature">
              {" "}
              {Math.round(props.data.temperature)} °C
            </span>
            <br />
            <span className="feels-like">
              <small>Feels like </small>
              {Math.round(props.data.feelsLikeTemp)}°
            </span>
          </div>
        </div>
        <div className="col-4">Weather icon</div>
      </div>
      <div className="row">
        <span>CONDITION</span>
        <div className="col-4">
          <span className="text-capitalize"> {props.data.description} </span>
        </div>

        <div className="col-4">
          <i className="fa-solid fa-wind fa-lg"></i>{" "}
          <span> {Math.round(props.data.wind)} km/h </span>
        </div>
        <div className="col-4">
          <i className="fa-solid fa-droplet fa-lg"></i>{" "}
          <span> {props.data.humidity} % </span>
        </div>
      </div>
    </div>
  );
}
