import React from "react";
import useAxios from "../hooks/useAxios";
import cold from "../images/snowflake.png";
import hot from "../images/hot-deal.png";

const Celsius = ({ units, setUnits }) => {
  const {
    data,
    temp,
    tempMin,
    tempMax,
    actualDate = new Date(),
    feelsLike,
    wind,
    humidity,
  } = useAxios();

  const changeUnits = () => {
    setUnits(!units);
  };

  return (
    <div className="card">
      <div className="location">
        <ul className="temp-range">
          <li className="icon">
            <img src={cold} alt="" />
          </li>
          <li className="min">
            {tempMin.toFixed(2)}°C <span>Temperatura minima</span>
          </li>
          <li className="max">
            {tempMax.toFixed(2)}°C <span>Temperatura maxima</span>
          </li>
          <li className="icon">
            <img src={hot} alt="" />
          </li>
        </ul>
        <ul className="location-info">
          <li className="date">{actualDate.toDateString()}</li>
          <li className="city">
            {data?.name}, {data?.sys.country}
          </li>
        </ul>
      </div>
      <main className="description">
        <ul>
          <li>
            <img
              src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
              alt=""
            />
          </li>
        </ul>
        <ul>
          <li className="temp">{temp.toFixed(2)}°C</li>
          <li>Sensación térmica {feelsLike.toFixed(2)}°C</li>
          <button onClick={changeUnits}>Farenheit</button>
        </ul>
        <ul>
          <li>Viento: {wind}km/h</li>
          <li>Humedad: {humidity}%</li>
        </ul>
      </main>
    </div>
  );
};
export default Celsius;
