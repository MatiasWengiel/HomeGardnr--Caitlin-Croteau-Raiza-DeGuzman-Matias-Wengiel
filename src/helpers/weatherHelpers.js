
export const checkForWeatherWarnings = (localHigh, localLow, localPrecipitation) => {
  // Thresholds for temperature (highest, lowest) and rain level
  const highTempThreshold = 30;
  const lowTempThreshold = 0;
  const rainLevelThreshold = 13;

  /* 
  Use function's arguments localHigh, localLow, localPrecipitation to compare against thresholds.
  Otherwise, Use these variables when API calls exceeded for the day:
  */
  const dailyHighTemp = 15;
  const dailyLowTemp = 5;
  const dailyRain = 20;

  
  /* Approach #3: Possibly one of temperature conditions AND rain are met. So, display more than one warning message corresponding to weather conditions that were met. */

  // Push warning msgs into array if any of three conditions met.
  const weatherMsgs = [];

  const highHeat = `TAKE ACTION -- 🥵🥵 Extreme heat expected for the day. Temperatures as high as ${dailyHighTemp} C expected.`;

  const extremeCold = `TAKE ACTION -- 🥶🥶 Freezing temperatures expected for the day. Temperatures could drop as low as ${dailyLowTemp} C.`;

  const heavyRain = `HEAVY RAIN -- 🌧🌧 Heavy rainfall expected today, as much as ${dailyRain} mm.`;

  if (dailyHighTemp >= highTempThreshold) {
    weatherMsgs.push(highHeat);
  }

  if (dailyLowTemp <= lowTempThreshold) {
    weatherMsgs.push(extremeCold);
  }

  if (dailyRain >= rainLevelThreshold) {
    weatherMsgs.push(heavyRain);
  }

  // Returns an empty array if none of conditions above met.
  return weatherMsgs;
};