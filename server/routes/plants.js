const { response } = require("express");
const express = require("express");
const router = express.Router();
const { addPlantToLibrary } = require("../../db/query_functions");

const mockPlant = {
  generic_name: "Strawberry",
  specific_name: "Pink",
  description: "Cutest starwberry ever.",
  thumbnail_photo_url:
    "https://images.pexels.com/photos/134877/pexels-photo-134877.jpeg?auto=compress&cs=tinysrgb&w=1600",
  large_plant_card_photo_url:
    "https://images.pexels.com/photos/134877/pexels-photo-134877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  when_to_plant: "May to early July",
  water_needs: 1,
  sunlight_needs: "Daily at least 6 hours",
  lowest_temp_tolerance: 10,
  highest_temp_tolerance: 25,
  how_far_apart_to_plant: "1 to 2 feet apart",
  how_deep_to_plant: "At least 1/2 inch deep",
  how_long_until_mature: "3 months",
};

module.exports = (db) => {
  //create - how to access db query object
  router.post("/", (req, res) => {
    const plant = req.body;
    console.log(plant);
    const [queryString, values] = addPlantToLibrary(plant);
    let newPlantId = "";

    db.query(queryString, values)
      .then((result) => {
        //results of the query
        console.log(result.id);
        //***new to console log the result so I can
        //acess the id correctly***

        //let newplnat update with resutl id
        //response from server
        res.send();
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send();
      });
    //put new query to add plant to user_plants here
    //use the newplantID variable
    // db.query(queryString, values)
    // .then((result) => {
    //   //results of the query
    //   console.log(result);
    //   //response from server
    //   res.send();
    // })
    // .catch((error) => {
    //   console.log(error);
    //   res.status(500).send();
    // });
  });

  //read
  router.get("/", (req, res) => {
    res.send("This would be the plants page");
  });
  return router;
};
