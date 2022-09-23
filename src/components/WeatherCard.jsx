import { Alert, Container, Stack } from "react-bootstrap";
import "./WeatherCard.scss";

export default function WeatherCard(props) {
  const {
    currentLocation,
    localWarnings,
    localHigh,
    localLow,
    localPrecipitation,
  } = { ...props };
  return (
    <Container className="weather-container">
      <Alert variant="secondary">
        Today's Weather Information for{" "}
        <span style={{ fontWeight: "bold" }}>{currentLocation}</span>
      </Alert>
      <Stack gap={3} style={{ display: "flex", alignItems: "start" }}>
        <div className="weather-headings">
          <p>Local Warnings: </p>
          <p className="weather-values">{localWarnings || "none"}</p>
        </div>
        <div className="weather-headings">
          <p>Today's High: </p>
          <p className="weather-values">{localHigh}</p>
        </div>
        <div className="weather-headings">
          <p>Today's Low: </p>
          <p className="weather-values"> {localLow}</p>
        </div>
        <div className="weather-headings">
          <p>Expected Precipitation: </p>
          <p className="weather-values">{localPrecipitation || "none"}</p>
        </div>
      </Stack>
    </Container>
  );
}
