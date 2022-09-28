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
