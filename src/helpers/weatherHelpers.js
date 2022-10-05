
export const checkWeatherWarnings = (localHigh, localLow, localPrecipitation) => {
  
  // Use variables when API calls exceeded for the day:
  const dailyHighTemp = 35;
  const dailyLowTemp = 5;
  const dailyRain = 5;

  // Thresholds for temperature (highest, lowest) and rain level
  const highTempThreshold = 30;
  const lowTempThreshold = 0;
  const rainLevelThreshold = 13;

  /* Approach #1: Will only check one condition at a time. If first or second met, the other conditions don't run. Conditions mutually exclusive. Do we want to set it up this way? */

  /*
  if (dailyHighTemp >= highTempThreshold) {
    return "Take action. Extreme heat expected for the day.";
  }
  if (dailyLowTemp <= lowTempThreshold) {
    return "Take action. Extremely cold, plant-killing temperatures expected for the day.";
  }
  if (dailyRain >= rainLevelThreshold) {
    return "Heavy rain expected for today.";
  }

  return null;
  
  */
// ========================================================================

  /* Approach #2: This checks all three conditions. Broad message to display? Not specific on which weather condition met. */

  /* 
  if (dailyHighTemp >= highTempThreshold || dailyLowTemp <= lowTempThreshold || dailyRain <= rainLevelThreshold) {
    return "Take action. Weather condition thresholds exceeded. Check weather forecast for more details."
  }
  return null;
  */
// ===================================================
  /* Approach #3: Possibly one of temperature conditions AND rain are met. So, display more than one warning message corresponding to weather condition that was met. */

  const weatherMsgs = [];

  const highHeat = `TAKE ACTION -- Extreme heat expected for the day. Temperatures as high as ${dailyHighTemp} C is expected.`;
  const extremeCold = `TAKE ACTION -- Freezing temperatures expected for the day.Temperatures could drop as low as ${dailyLowTemp} C.`;
  const pouringRain = `HEAVY RAIN -- Heavy rainfall expected today, as much as ${dailyRain} mm`;

  if (dailyHighTemp >= highTempThreshold) {
    weatherMsgs.push(highHeat);
  }

  if (dailyLowTemp <= lowTempThreshold) {
    weatherMsgs.push(extremeCold);
  }

  if (dailyRain >= rainLevelThreshold) {
    weatherMsgs.push(pouringRain);
  }

  // Returns an empty array if none of conditions above met.
  return weatherMsgs;
};