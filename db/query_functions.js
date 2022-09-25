const getUserLocation = (userId) => {
  return `
  SELECT location FROM users WHERE id = ${userId}
  `
}

module.exports = { getUserLocation }