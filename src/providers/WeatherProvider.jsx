import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const weatherContext = createContext();

export default function WeatherProvider(props) {
  const [currentCity, setCurrentCity] = useState(null);
  const [localHigh, setLocalHigh] = useState(null);
  const [localLow, setLocalLow] = useState(null);
  const [localPrecipitation, setLocalPrecipitation] = useState(null);
  const [forecastLink, setForecastLink] = useState(null);

  useEffect(() => {
    //Get user location from DB
    axios
      .get("/api/users/location")
      .then((response) => {
        setCurrentCity(response.data);
        //Get the weather for the currentCity
        return axios.get(`/api/location/${response.data}`);
      })
      .then((response) => {
        //Update weather state
        setLocalHigh(response.data.dailyMax);
        setLocalLow(response.data.dailyMin);
        setLocalPrecipitation(response.data.rain);
        setForecastLink(response.data.forecastLink);
      })
      .catch((error) => console.log(error));
  }, []);

  const weatherData = {
    currentCity,
    localHigh,
    localLow,
    localPrecipitation,
    forecastLink,
  };

  return (
    <weatherContext.Provider value={weatherData}>
      {props.children}
    </weatherContext.Provider>
  );
}
