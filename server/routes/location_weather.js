const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    res.send("This would be the location_weather page");
  });
  return router;
};
