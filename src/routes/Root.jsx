import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { weatherContext } from "../providers/WeatherProvider";
import { checkForWeatherWarnings } from "../helpers/weatherHelpers.js";


export default function Root() {

  const { localHigh, localLow, localPrecipitation } =
    useContext(weatherContext);

  const weatherWarningMsgs = checkForWeatherWarnings(
    localHigh,
    localLow,
    localPrecipitation
  );

  return (
    <>
      <Navigation user="Waldo" />
      <Header />
      {weatherWarningMsgs.length > 0 && (
        <Banner weatherWarning={weatherWarningMsgs} />
      )}
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
