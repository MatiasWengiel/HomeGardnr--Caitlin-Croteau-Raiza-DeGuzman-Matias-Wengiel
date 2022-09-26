const express = require("express");
const router = express.Router();
const { searchPlant } = require('../../db/query_functions')

module.exports = (db) => {
  router.get('/', (req, res) => {
    res.send("This would be the plants page");
  });

  router.get('/:query', (req, res) => {
    const query = req.params.query;
    db.query(searchPlant(), [query]).then(data => res.json(data.rows))
  })
  return router;
};
