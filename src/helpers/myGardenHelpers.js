import { dateFormatter, calculateNextWaterDate } from "./dateHelpers"
//Case insensitive search for plants that have the typed letter(s) in their name
// export const performSearchPlant = (searchTerm, gardenInfo) => {
//   const filtered = gardenInfo.filter((plant) =>
//     plant.specific_name
//       .toLowerCase()
//       .includes(searchTerm)
//   )
//   return filtered
// }


export const sortPlants = (plantArray) => {
  plantArray.sort((a, b) => {
    let lowerCaseA = a.specific_name.toLowerCase();
    let lowerCaseB = b.specific_name.toLowerCase();

    if (lowerCaseA < lowerCaseB) return -1;
    if (lowerCaseA > lowerCaseB) return 1;
    return 0;
  });

  return plantArray
}

//Updates the STATE of a plant that was watered in the LargeCardUser (LargeCardUser handles updating the database)
export const waterSinglePlant = (id, array) => {
  const plantsArray = [...array]
  plantsArray.forEach((plant) => {
    const nextWateringCalc = calculateNextWaterDate(
      new Date(),
      plant.water_needs
    );
    if (plant.key_id === id) {
      plant.lastWateredFormatted = dateFormatter(new Date());
      plant.waterStatus = "watered";
      plant.nextWaterFormatted = dateFormatter(nextWateringCalc);
      plant.last_watered_at = new Date();
      // plant.nextWatering = nextWateringCalc;
      console.log(plant);
    }
  });
  return plantsArray
}

export const waterAllPlants = (plantsList) => {
  const today = new Date();
  const wateredPlants = [...plantsList];
  wateredPlants.forEach(
    (plant) => (
      (plant.lastWateredFormatted = dateFormatter(today)),
      (plant.last_watered_at = today),
      (plant.waterStatus = "watered"),
      (plant.nextWatering = calculateNextWaterDate(
        plant.last_watered_at,
        plant.water_needs
      )),
      (plant.nextWaterFormatted = dateFormatter(plant.nextWatering))
    )
  );

  return wateredPlants
}
// module.exports = {
//   performSearchPlant,
//   sortPlants,
//   waterSinglePlant
// }