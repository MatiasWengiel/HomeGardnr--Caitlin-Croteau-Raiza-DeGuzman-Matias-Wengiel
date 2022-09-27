const getUserLocation = (userId) => {
  return `
  SELECT location FROM users WHERE id = ${userId}
  `
}

// Retrieve all info about an individual plant
const getPlantInfo = (plantId) => {
  return `
    SELECT * FROM plants WHERE id = ${plantId}
  `;
};

const getUserPlantInfo = (plantId) => {
  return `
    SELECT * FROM user_plants
    JOIN plants ON plant_id = plants.id
    WHERE plant_id = ${plantId}
  `
}


module.exports = { getUserLocation, getPlantInfo, getUserPlantInfo }