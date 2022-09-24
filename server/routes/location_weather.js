const express = require("express");
const router = express.Router();
const axios = require('axios')

module.exports = () => {
  router.get('/:location', (req, res) => {
    const location = req.params.location
    const apiKey = process.env.WEATHER_API_KEY
    const getWeather = async () => {
      try {
        const cityData = await axios.get(`http://dataservice.accuweather.com/locations/v1/search?q=${location}&apikey=${apiKey}`)
        const cityKey = cityData.data[0].Key

        const weatherResponse = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityKey}?apikey=${apiKey}&metric=true&details=true&details=true`)
        const cityWeather = weatherResponse.data
        const dailyForecast = cityWeather.DailyForecasts[0]
        //Get the daily minimum and maximum temp in Celsius
        const dailyMin = dailyForecast.Temperature.Minimum.Value
        const dailyMax = dailyForecast.Temperature.Maximum.Value
        //Get expected rain
        const rain = dailyForecast.Day.TotalLiquid.Value

        const weatherInfo = { location, dailyMin, dailyMax, rain }
        return res.json(weatherInfo)

      } catch (error) {
        console.log(error)
      }
    }

    getWeather()
  });
  return router;
};
