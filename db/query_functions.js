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


module.exports = { getUserLocation, getPlantInfo }