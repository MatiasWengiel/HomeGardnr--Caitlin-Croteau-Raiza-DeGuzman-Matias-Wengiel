const getUserLocation = (userId) => {
  return `
  SELECT location FROM users WHERE id = ${userId}
  `;
};

const addPlant = function(plant) {

  const values =[
    plant.generic_name,
    plant.specifc_name,
    plant.description,
    plant.thumbnail_photo_url,
    plant.large_plant_card_photo_url,
    plant.when_to_plant,
    plant.water_needs,
    plant.sunlight_needs,
    plant.lowest_temp_tolerance,
    plant.highest_temp_tolerance,
    plant.how_far_apart_to_plant,
    plant.how_deep_to_plant,
    plant.how_long_until_mature
  ]
  
  const queryString = `
  INSERT INTO plants (generic_name,
    specific_name,
    description,
    thumbnail_photo_url,
    large_plant_card_photo_url,
    when_to_plant,
    water_needs,
    sunlight_needs,
    lowest_temp_tolerance,
    highest_temp_tolerance,
    how_far_apart_to_plant,
    how_deep_to_plant,
    how_long_until_mature)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13);`

    return [queryString, values];
}

module.exports = { getUserLocation };
