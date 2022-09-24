import { useEffect, useState } from "react";
import { Alert, Container, Stack } from "react-bootstrap";
import "./WeatherCard.scss";
import axios from "axios";

export default function WeatherCard(props) {
  const { currentCity, currentProvince } = { ...props };
  let localWarnings = "";

  const [localHigh, setLocalHigh] = useState("");
  const [localLow, setLocalLow] = useState("");
  const [localPrecipitation, setLocalPrecipitation] = useState("");

  useEffect(() => {
    axios
      //Will need to modify the
      .get(`/api/location/${currentCity}`)
      .then((response) => {
        console.log("API CALL");
        setLocalHigh(response.data.dailyMax);
        setLocalLow(response.data.dailyMin);
        setLocalPrecipitation(response.data.rain);
      })
      .catch((error) => console.log(error));
  }, [currentCity]);

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
      </Stack>
    </Container>
  );
}
