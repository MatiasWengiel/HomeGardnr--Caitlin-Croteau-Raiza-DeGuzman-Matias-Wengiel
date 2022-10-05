
export const checkWeatherWarnings = (localHigh, localLow, localPrecipitation) => {
  // Thresholds for temperature (highest, lowest) and rain level
  const highTempThreshold = 30;
  const lowTempThreshold = 0;
  const rainLevelThreshold = 13;

  /* 
  Use function's arguments localHigh, localLow, localPrecipitation to compare against thresholds.
  Otherwise, Use these variables when API calls exceeded for the day:
  */
  const dailyHighTemp = 35;
  const dailyLowTemp = -1;
  const dailyRain = 20;

  
  /* Approach #1: Will only check one condition at a time. If first or second met, the other conditions don't run. Conditions mutually exclusive. Do we want to set it up this way? */

  /*
  if (dailyHighTemp >= highTempThreshold) {
    return `TAKE ACTION -- 🥵🥵 Extreme heat expected for the day. Temperatures as high as ${dailyHighTemp} C expected.`;;
  }
  if (dailyLowTemp <= lowTempThreshold) {
    return `TAKE ACTION -- 🥶🥶 Freezing temperatures expected for the day. Temperatures could drop as low as ${dailyLowTemp} C.`;
  }
  if (dailyRain >= rainLevelThreshold) {
    return `HEAVY RAIN -- 🌧🌧 Heavy rainfall expected today, as much as ${dailyRain} mm.`;
  }

  return null;
  */

  // ========================================================================

  /* Approach #2: This checks all three conditions. Broad message to display? Not specific on which weather condition met. */

  /* 
  if (dailyHighTemp >= highTempThreshold || dailyLowTemp <= lowTempThreshold || dailyRain <= rainLevelThreshold) {
    return "TAKE ACTION. Weather condition thresholds exceeded. Check weather forecast for more details."
  }
  return null;
  */

  // ===================================================

  /* Approach #3: Possibly one of temperature conditions AND rain are met. So, display more than one warning message corresponding to weather condition that was met. */

  const weatherMsgs = [];

  const highHeat = `TAKE ACTION -- 🥵🥵 Extreme heat expected for the day. Temperatures as high as ${dailyHighTemp} C expected.`;
  const extremeCold = `TAKE ACTION -- 🥶🥶 Freezing temperatures expected for the day. Temperatures could drop as low as ${dailyLowTemp} C.`;
  const pouringRain = `HEAVY RAIN -- 🌧🌧 Heavy rainfall expected today, as much as ${dailyRain} mm.`;

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