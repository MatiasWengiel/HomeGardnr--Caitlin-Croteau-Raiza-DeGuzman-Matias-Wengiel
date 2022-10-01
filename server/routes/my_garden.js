const express = require("express");
const { useContext } = require("react");
const router = express.Router();
const { getUserPlantInfo, deleteUserPlant, addPlantToMyGarden, getMyGardenPlants } = require("../../db/query_functions.js");


module.exports = (db) => {
  router.get('/all/:userID', (req, res) => {
    const userID = req.params.userID
    db.query(getMyGardenPlants(userID)).then(data => res.json(data.rows))
  });

  // Add plant to user's garden (from plant library)
  router.post("/submit", (req, res) => {
    let newPlantId = req.body.plantId;
    const userId = 1;

    const [queryString, values] = addPlantToMyGarden(newPlantId, userId);

    db.query(queryString, values).then((data) => {
      res.send();
    });
  });

  router.get("/:id", (req, res) => {
    db.query(getUserPlantInfo(req.params.id)).then((data) => {
      res.json(data.rows);
    });
  });

  router.delete("/:id", (req, res) => {
    db.query(deleteUserPlant(req.params.id)).then(() => {
      res.send(200);
    })
      .catch((error) => {
        console.log(error);
      });
  });

  return router;
};
