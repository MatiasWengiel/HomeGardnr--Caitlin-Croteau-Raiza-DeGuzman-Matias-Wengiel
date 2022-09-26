const getUserLocation = (userId) => {
  return `
  SELECT location FROM users WHERE id = ${userId}
  `
}

const searchPlant = () => {
  return (`
  SELECT * FROM plants WHERE
    generic_name LIKE '%'||$1||'%' 
    OR specific_name LIKE '%'||$1||'%'
    OR description LIKE '%'||$1||'%' 
    `)
}

module.exports = { getUserLocation, searchPlant }