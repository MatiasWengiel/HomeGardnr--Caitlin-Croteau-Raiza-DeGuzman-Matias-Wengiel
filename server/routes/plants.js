const express = require("express");
const router = express.Router();
const { getPlantInfo } = require('../../db/query_functions.js')

module.exports = (db) => {
  // router.get('/', (req, res) => {
  //   res.send("This would be the plants page");
  // });

  router.get('/', (req, res) => {
    db.query(getPlantInfo(1)).then(data => {
      console.log(data);
      res.json(data.rows);
    })
  });

  return router;
};
