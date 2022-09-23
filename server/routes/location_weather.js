const express = require("express");
const router = express.Router();
const axios = require('axios')

module.exports = () => {
  router.get('/:location', (req, res) => {
    const location = req.params.location
    let cityKey = ""
    let response = ""
    axios.get(`http://dataservice.accuweather.com/locations/v1/search?q=winnipeg&apikey=jURdoMXOLNcy90VzcO0dYyankIoJURwM`)
      .then(reply => {
        cityKey = reply.data[0].Key
        console.log(cityKey)
      })
      .then(
        axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityKey}&apikey=jURdoMXOLNcy90VzcO0dYyankIoJURwM`)
      )
      .then(reply => console.log(reply.data))

  });
  return router;
};
