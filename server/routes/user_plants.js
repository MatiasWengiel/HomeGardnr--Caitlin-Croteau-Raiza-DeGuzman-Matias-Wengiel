const express = require("express");
const router = express.Router();
const { getUserPlantInfo, deleteUserPlant, addPlantToMyGarden } = require("../../db/query_functions.js");

module.exports = (db) => {
  router.get('/', (req, res) => {
    res.send("This would be the user_plants page");
  });

  // Add plant to user's garden (from plant library)

  // Data passed through payload will be in 'request' object. To access it, console log req.body.

  router.post("/submit", (req, res) => {
    let newPlantId = req.body.plantId;
    const userId = 1;
    
    const [queryString, values] = addPlantToMyGarden(newPlantId, userId);

    db.query(queryString, values).then((data) => {
      console.log(req.body);
      res.send();
    });
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
