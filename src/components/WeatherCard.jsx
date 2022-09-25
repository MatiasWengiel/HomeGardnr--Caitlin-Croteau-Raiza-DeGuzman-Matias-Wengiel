import { useEffect, useState, useContext } from "react";
import { Alert, Container, Stack } from "react-bootstrap";
import "./WeatherCard.scss";
import axios from "axios";
import { weatherContext } from "../providers/WeatherProvider";

export default function WeatherCard(props) {
  const { currentProvince } = { ...props };
  let localWarnings = "";

  const { currentCity, localHigh, localLow, localPrecipitation, forecastLink } =
    useContext(weatherContext);
  // const [currentCity, setCurrentCity] = useState("");
  // const [localHigh, setLocalHigh] = useState("");
  // const [localLow, setLocalLow] = useState("");
  // const [localPrecipitation, setLocalPrecipitation] = useState("");
  // const [forecastLink, setForecastLink] = useState("");

  // useEffect(() => {
  //   //Get user location from DB
  //   axios
  //     .get("/api/users/location")
  //     .then((response) => {
  //       setCurrentCity(response.data);
  //       //Get the weather for the currentCity
  //       return axios.get(`/api/location/${response.data}`);
  //     })
  //     .then((response) => {
  //       //Update weather state
  //       setLocalHigh(response.data.dailyMax);
  //       setLocalLow(response.data.dailyMin);
  //       setLocalPrecipitation(response.data.rain);
  //       setForecastLink(response.data.forecastLink);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);
  return (
    <Container className="weather-container">
      <Alert variant="secondary">
        Today's Weather Information for{" "}
        <span style={{ fontWeight: "bold" }}>
          {currentCity}, {currentProvince}
        </span>
      </Alert>
      <Stack gap={3} style={{ display: "flex", alignItems: "start" }}>
        <div className="weather-headings">
          <p>Local Warnings: </p>
          <p className="weather-values">{localWarnings || "none"}</p>
        </div>
        <div className="weather-headings">
          <p>Today's High: </p>
          <p className="weather-values">{localHigh}ºC</p>
        </div>
        <div className="weather-headings">
          <p>Today's Low: </p>
          <p className="weather-values"> {localLow}ºC</p>
        </div>
        <div className="weather-headings">
          <p>Expected Precipitation: </p>
          <p className="weather-values">{localPrecipitation || "0"} mm</p>
        </div>
        <div className="weather-headings">
          <a href={forecastLink}>See full weather report at AccuWeather</a>
        </div>
      </Stack>
    </Container>
  );
}
