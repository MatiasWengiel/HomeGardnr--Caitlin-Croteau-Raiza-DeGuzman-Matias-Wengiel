const express = require("express");
const router = express.Router();
const { getUserPlantInfo } = require("../../db/query_functions.js");

module.exports = (db) => {
  router.get('/', (req, res) => {
    res.send("This would be the user_plants page");
  });

  router.get("/:id", (req, res) => {
    db.query(getUserPlantInfo(req.params.id)).then((data) => {
      console.log(data);
      res.json(data.rows);
    });
  });

  return router;
};
