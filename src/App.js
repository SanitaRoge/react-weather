import "./App.css";
import Search from "./search";

export default function App() {
  return (
    <div>
      <h1>Current weather</h1>
      <Search defaultCity="Paris" />

      <footer>
        {" "}
        <a href="https://github.com/SanitaRoge/react-weather">
          {" "}
          Open-source coded{" "}
        </a>{" "}
        by Sanita Roge
      </footer>
    </div>
  );
}
