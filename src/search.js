import React from "react";

export default function Search() {
  return (
    <div>
      <h2>Weather search </h2>
      <form>
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              className="form-control"
              placeholder="Enter city name"
            />{" "}
          </div>
          <div className="col-4">
            <input type="submit" value="Search" className="btn btn-light" />
          </div>
        </div>
      </form>
    </div>
  );
}
