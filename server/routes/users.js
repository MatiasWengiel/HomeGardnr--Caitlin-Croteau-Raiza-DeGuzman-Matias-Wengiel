const express = require("express");
const router = express.Router();
const { getUserLocation } = require('../../db/query_functions')

module.exports = (db) => {
  router.get('/login', (req, res) => {
    res.send("This would be the login page");
  });

  router.get('/location', (req, res) => {
    db.query(getUserLocation(1)).then(data => {
      console.log(data.rows[0].location)
      res.json(data.rows[0].location)
    })
  })
  return router;
};
