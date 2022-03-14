import axios from "axios";
import { useState, useEffect } from "react";

const useAxios = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const handleError = () => {
      console.log("No se pudo acceder a la ubicación");
    };

    const success = (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=49c8630d0be66d6cb07739ad16a1ea1d`
        )
        .then((res) => setData(res.data));
    };

    navigator.geolocation.getCurrentPosition(success, handleError);
  }, []);

  const wind = data?.wind.speed;
  const humidity = data?.main.humidity;
  const temp = data?.main.temp - 273.15;
  const tempMin = data?.main.temp_min - 273.15;
  const tempMax = data?.main.temp_max - 273.15;
  const feelsLike = data?.main.feels_like - 273.15;

  return {
    wind,
    humidity,
    data,
    temp,
    tempMin,
    tempMax,
    feelsLike,
  };
};

export default useAxios;
