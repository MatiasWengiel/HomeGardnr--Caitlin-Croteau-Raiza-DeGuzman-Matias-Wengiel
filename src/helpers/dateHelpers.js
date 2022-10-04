//Formats output date and removes year
const dateFormatter = (date) => date.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" })

const calculateNextWaterDate = (lastWatered, waterNeeds) => {
  const lastWateredDate = new Date(lastWatered);
  //Calculates water interval by dividing 7 (days) over number of waterings needed per week (waterNeeds)
  const waterInterval = Math.floor(7 / waterNeeds);
  //Takes the last watered date and creates a new date that is the last watered plus the water interval
  const waterDate = new Date(
    lastWateredDate.setDate(lastWateredDate.getDate() + waterInterval)
  )
  return waterDate
};


module.exports = {
  dateFormatter,
  calculateNextWaterDate
}