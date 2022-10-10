const { response } = require("express");
const express = require("express");
const router = express.Router();
const { searchPlant } = require("../../db/query_functions");
const {
  getPlantInfo,
  addPlantToLibrary,
  addPlantToMyGarden,
} = require("../../db/query_functions.js");

module.exports = (db) => {
  //CREATE - Add new plant form.
  router.post("/", (req, res) => {
    const plant = req.body;

    const [queryString, values] = addPlantToLibrary(plant);
    let newPlantId = "";
    //add plant to plants table
    db.query(queryString, values)
      .then((data) => {
        newPlantId = data.rows[0].id;
        res.json(newPlantId);
      })
      .then(() => {
        //add plant to user_plants
        const userId = 1;
        const [queryString, values] = addPlantToMyGarden(newPlantId, userId);
        return db.query(queryString, values);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send();
      });
  });

  //GET request to return the full plant table info
  router.get("/", (req, res) => {
    db.query(searchPlant())
      .then((data) => res.json(data.rows))
      .catch((error) => {
        console.log(error);
        res.status(500).send();
      });
  });

  // GET request for an individual plant, selected by visitor
  router.get("/:id", (req, res) => {
    db.query(getPlantInfo(req.params.id))
      .then((data) => {
        res.json(data.rows);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send();
      });
  });

  return router;
};