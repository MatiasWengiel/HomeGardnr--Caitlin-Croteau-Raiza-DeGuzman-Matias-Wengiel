const getUserLocation = (userId) => {
  return `
  SELECT location FROM users WHERE id = ${userId}
  `;
};

const getUserName = (userID) => {
  return `
  SELECT first_name, last_name FROM users WHERE id = ${userID}
  `;
}

// Get all info about a plant from the main library (plants)
const getPlantInfo = (plantId) => {
  return `
    SELECT * FROM plants WHERE id = ${plantId}
  `;
};

// Get info about a plant in a user's garden (user_plants)
const getUserPlantInfo = (plantId) => {
  return `
    SELECT * FROM user_plants
    JOIN plants ON plant_id = plants.id
    WHERE user_plants.id = ${plantId}
  `;
};

// Delete a plant from user's garden (user_plants)
const deleteUserPlant = (plantId) => {
  return `
    DELETE FROM user_plants WHERE id = ${plantId}
  `;
};

const searchPlant = () => {
  return `
  SELECT * FROM plants 
    `;
};

const addPlantToLibrary = function (plant) {
  const values = [
    plant.specific_name,
    plant.description,
    plant.imageURL,
    plant.season,
    plant.water,
    plant.sunlight,
    plant.minTemp,
    plant.maxTemp,
    plant.spacing,
    plant.depth,
    plant.maturity,
  ];

  const queryString = `
  INSERT INTO plants (specific_name,
    description,
    large_plant_card_photo_url,
    when_to_plant,
    water_needs,
    sunlight_needs,
    lowest_temp_tolerance,
    highest_temp_tolerance,
    how_far_apart_to_plant,
    how_deep_to_plant,
    how_long_until_mature)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *;`;

  return [queryString, values];
};

//add new query for update my garden.
//need to update hardcoded values
const addPlantToMyGarden = function (plantId, userId) {
  const today = "2022-09-27";
  const values = [today, today, plantId, userId];

  const queryString = `
  INSERT INTO user_plants (planted_date, last_watered_at, plant_id, user_id) VALUES ($1, $2, $3, $4) RETURNING *;`;

  return [queryString, values];
};

const getMyGardenPlants = (userID) => {
  return `SELECT user_plants.id AS key_id, large_plant_card_photo_url, specific_name, planted_date, last_watered_at, water_needs, when_to_plant, sunlight_needs, highest_temp_tolerance, lowest_temp_tolerance, how_deep_to_plant, how_far_apart_to_plant, how_long_until_mature FROM user_plants
    JOIN plants ON plant_id = plants.id
    WHERE user_id = ${userID}`
}
module.exports = {
  getUserLocation,
  getUserName,
  getPlantInfo,
  getUserPlantInfo,
  deleteUserPlant,
  addPlantToLibrary,
  addPlantToMyGarden,
  getUserLocation,
  searchPlant,
  getMyGardenPlants,
};
