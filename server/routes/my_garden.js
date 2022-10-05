const express = require("express");
const router = express.Router();
const { getUserPlantInfo, deleteUserPlant, addPlantToMyGarden, getMyGardenPlants, waterSinglePlant, waterAllPlants } = require("../../db/query_functions.js");


module.exports = (db) => {
  router.get('/all/:userID', (req, res) => {
    const userID = req.params.userID
    db.query(getMyGardenPlants(userID)).then(data => res.json(data.rows))
  });

  // Add plant to user's garden (from plant library)
  router.post("/", (req, res) => {
    let newPlantId = req.body.plantId;
    const userId = 1;

    const [queryString, values] = addPlantToMyGarden(newPlantId, userId);

    db.query(queryString, values).then((data) => {
      res.status(201);
    });
  });

  router.get("/:id", (req, res) => {
    db.query(getUserPlantInfo(req.params.id)).then((data) => {
      res.json(data.rows);
    });
  });

  router.delete("/:id", (req, res) => {
    db.query(deleteUserPlant(req.params.id)).then(() => {
      res.status(201);
    })
      .catch((error) => {
        console.log(error);
      });
  });
  router.put("/waterAll/:id", (req, res) => {
    const id = req.params.id
    db.query(waterAllPlants(id)).then(res.status(201)).catch(error => console.log(error.message))
  })
  router.put("/:id", (req, res) => {
    db.query(waterSinglePlant(req.params.id)).then(res.status(201)).catch(error => console.log(error.message))
  })

  return router;
};
