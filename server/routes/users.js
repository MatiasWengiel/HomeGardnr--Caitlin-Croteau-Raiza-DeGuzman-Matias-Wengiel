const express = require("express");
const router = express.Router();
const { getUserLocation, getUserName } = require('../../db/query_functions')

module.exports = (db) => {
  router.get('/login', (req, res) => {
    res.send("This would be the login page");
  });

  router.get('/location', (req, res) => {
    //Hardcoded for demo purposes, normally db would use req.params to determine userID and find the specific location
    db.query(getUserLocation(1)).then(data => {
      return res.json(data.rows[0].location)
    })
  })

  router.get('/:id', (req, res) => {
    const id = req.params.id
    db.query(getUserName(id)).then(data =>
      res.json(data.rows[0]))
  })

  return router;
};
