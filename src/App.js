import { useState } from "react";
import "./App.css";
import Celsius from "./components/Celsius";
import Farenheit from "./components/Farenheit";

function App() {
  const [units, setUnits] = useState(true);

  return (
    <div className="app">
      {units ? (
        <Celsius units={units} setUnits={setUnits} />
      ) : (
        <Farenheit units={units} setUnits={setUnits} />
      )}
    </div>
  );
}

export default App;
