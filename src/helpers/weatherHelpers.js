
export const checkWeatherWarnings = (localHigh, localLow, localPrecipitation) => {

    // For when Weather API values are null, reached max API calls.
    const dailyHighTemp = 20;
    const dailyLowTemp = 5;
    const dailyRain = 5;
    // Check conditional if localhigh met or exceeded, then display msg
    // Check conditional if locallow met or exceeded, then display msg
    // Check conditional if precipitation level met or exceed, then display msg

    // Will only check on condition at a time. If one is met, the others don't run. Do we want to set it up this way?
    // if (50 >= 25) {
    //   return "High temperatures for today.";
    // }
    // if (0 <= 5) {
    //   return "Cold temperatures for today.";
    // }
    // if (10 >= 0) {
    //   return "It's raining cats and dogs today.";
    // }

    // This checks all three conditions. Broad message to display? Not specific on which weather condition met.
    if (dailyHighTemp >= 25 || dailyLowTemp <= 7 || dailyRain <= 7) {
      return "Weather condition thresholds exceeded. "
    }
    
    return null;
  };