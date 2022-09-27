const getUserLocation = (userId) => {
  return `
  SELECT location FROM users WHERE id = ${userId}
  `;
};

const addPlantToLibrary = function (plant) {
  const values = [
    plant.genericName,
    plant.specificName,
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
  INSERT INTO plants (generic_name,
    specific_name,
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
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *;`;

  return [queryString, values];
};

//add new query for update my garden.
const addPlantToMyGarden = function (plantId, userId) {
  const today = "2022-09-27";
  const tomorrow = "2022-09-28";
  const values = [today, today, tomorrow, plantId, userId];

  const queryString = `
  INSERT INTO user_plants (planted_date, last_watered_at, when_to_water_next, plant_id, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *;`;

  return [queryString, values];
};

module.exports = { getUserLocation, addPlantToLibrary, addPlantToMyGarden };
