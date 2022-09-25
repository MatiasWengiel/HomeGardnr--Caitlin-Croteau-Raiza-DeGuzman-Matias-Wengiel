const getPlantInfo = (plantId) => {
  return `
    SELECT * FROM plants WHERE id = ${plantId}
  `
}

console.log(getPlantInfo(1));

module.exports = { getPlantInfo }