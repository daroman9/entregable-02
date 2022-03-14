import React from "react";
import useAxios from "../hooks/useAxios";
import cold from "../images/snowflake.png";
import hot from "../images/hot-deal.png";

const Farenheit = ({ units, setUnits }) => {
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

  return (
    <div className="card">
      <div className="location">
        <ul className="temp-range">
          <li className="icon">
            <img src={cold} alt="" />
          </li>
          <li className="min">
            {(tempMin * 1.8 + 32).toFixed(2)}°F <span>Temperatura minima</span>
          </li>
          <li className="max">
            {(tempMax * 1.8 + 32).toFixed(2)}°F <span>Temperatura maxima</span>
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
          <li className="temp">{(temp * 1.8 + 32).toFixed(2)}°F</li>
          <li>Sensación térmica {(feelsLike * 1.8 + 32).toFixed(2)}°F</li>
          <button onClick={() => setUnits(!units)}>Celsius</button>
        </ul>
        <ul>
          <li>Viento: {wind}km/h</li>
          <li>Humedad: {humidity}%</li>
        </ul>
      </main>
    </div>
  );
};

export default Farenheit;
