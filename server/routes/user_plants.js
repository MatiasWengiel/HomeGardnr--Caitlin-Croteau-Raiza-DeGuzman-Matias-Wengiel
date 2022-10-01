const express = require("express");
const router = express.Router();
const { getUserPlantInfo, deleteUserPlant, addPlantToMyGarden } = require("../../db/query_functions.js");

module.exports = (db) => {
  router.get('/', (req, res) => {
    res.send("This would be the user_plants page");
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
      res.send();
    })
    .catch((error) => {
      console.log(error);
    });
  });

  return router;
};
