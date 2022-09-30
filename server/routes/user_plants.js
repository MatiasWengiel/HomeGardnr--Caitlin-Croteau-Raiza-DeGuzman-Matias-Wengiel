const express = require("express");
const router = express.Router();
const { getUserPlantInfo, deleteUserPlant } = require("../../db/query_functions.js");

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

  router.delete("/:id", (req, res) => {
    db.query(deleteUserPlant(req.params.id)).then(() => {
      res.send();
      // Do I need to send anything here?
    })
    .catch((error) => {
      console.log(error);
    });
  });

  return router;
};
