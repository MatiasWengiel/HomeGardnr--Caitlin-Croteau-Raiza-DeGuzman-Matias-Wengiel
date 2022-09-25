const express = require("express");
const router = express.Router();
const { getPlantInfo } = require('../../db/dbqueries.js')

module.exports = (db) => {
  router.get('/plants', (req, res) => {
    res.send("This would be the plants page");
  });

  router.get('/plants/:id', (req, res) => {
    db.query(getPlantInfo(1)).then(data => {
      console.log(data);
      res.render(data);
      // res.json(data.rows[0]);
    })
  });

  return router;
};
