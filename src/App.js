import "./App.css";
import Weather from "./Weather";
import Search from "./search";

export default function App() {
  return (
    <div>
      <h1>Current weather</h1>
      <Search />

      <Weather />
      <div>
        {" "}
        <a href="https://github.com/SanitaRoge/react-weather">
          {" "}
          Open-source coded{" "}
        </a>{" "}
        by Sanita Roge
      </div>
    </div>
  );
}
