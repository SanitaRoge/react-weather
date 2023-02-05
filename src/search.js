import React from "react";

export default function Search() {
  return (
    <div>
      <h2>Weather search </h2>
      <form>
        <div>
          <input
            type="search"
            className="form-control"
            placeholder="Enter city name"
          />
          <input type="submit" value="Search" />
        </div>
      </form>
    </div>
  );
}
