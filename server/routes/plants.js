const express = require("express");
const router = express.Router();
const { getPlantInfo } = require('../../db/query_functions.js')

module.exports = (db) => {
  // router.get('/', (req, res) => {
  //   res.send("This would be the plants page");
  // });

  // GET request for an individual plant, selected by visitor
  router.get('/:id', (req, res) => {
    db.query(getPlantInfo(req.params.id)).then(data => {
      console.log(data);
      res.json(data.rows);
    })
  });

  return router;
};
