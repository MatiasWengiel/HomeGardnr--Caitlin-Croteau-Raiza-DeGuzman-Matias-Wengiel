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

  router.post("/:id/delete", (req, res) => {
    db.query(deleteUserPlant(req.params.id)).then(() => {
      res.send("Plant deleted from user's library!");
    })
    .catch((error) => {
      console.log(error);
    });
  });

  return router;
};
