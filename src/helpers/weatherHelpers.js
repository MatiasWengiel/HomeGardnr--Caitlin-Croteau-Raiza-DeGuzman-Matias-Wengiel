export const checkForWeatherWarnings = (localHigh, localLow, localPrecipitation) => {

  // Thresholds for temperature (highest, lowest) and rain level
  const highTempThreshold = 30;
  const lowTempThreshold = -1;
  const rainLevelThreshold = 13;

  const weatherMsgs = [];

  const highHeat = `TAKE ACTION -- 🥵🥵 Extreme heat expected for the day. Temperatures as high as ${localHigh} C expected.`;

  const extremeCold = `TAKE ACTION -- 🥶🥶 Freezing temperatures expected for the day. Temperatures could drop as low as ${localLow} C.`;

  const heavyRain = `HEAVY RAIN -- 🌧🌧 Heavy rainfall expected today, as much as ${localPrecipitation} mm.`;

  if (localHigh >= highTempThreshold) {
    weatherMsgs.push(highHeat);
  }

  if (localLow <= lowTempThreshold) {
    weatherMsgs.push(extremeCold);
  }

  if (localPrecipitation >= rainLevelThreshold) {
    weatherMsgs.push(heavyRain);
  }

  // Returns an empty array if none of conditions above are met.
  return weatherMsgs;
};