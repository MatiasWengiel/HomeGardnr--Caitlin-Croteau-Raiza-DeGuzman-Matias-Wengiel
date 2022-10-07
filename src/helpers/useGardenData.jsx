import { useEffect, useContext, useState } from "react";
import { userContext } from "../providers/UserProvider";
import axios from "axios";
import { calculateNextWaterDate, dateFormatter } from "./dateHelpers";
import { sortPlants, waterSinglePlant } from "./myGardenHelpers";
import PlantCard from "../components/PlantCard";

export default function useGardenData() {
  const { userID } = useContext(userContext);
  const [gardenPlants, setGardenPlants] = useState([]);
  const [selectedPlants, setSelectedPlants] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [plantCardProps, setPlantCardProps] = useState();

  useEffect(() => {
    axios.get(`/api/my_garden/all/${userID}`).then((response) => {
      let plantsFromDB = response.data;
      const plantState = plantsFromDB.map((plant) => {
        //Add the calculated next water date to each plant in the list
        plant.nextWatering = calculateNextWaterDate(
          plant.last_watered_at,
          plant.water_needs
        );
        //Add a formatted versio nof last_watered_at to each plant for displaying
        plant.lastWateredFormatted = dateFormatter(
          new Date(plant.last_watered_at)
        );
        plant.nextWaterFormatted = dateFormatter(new Date(plant.nextWatering));

        plant.waterStatus =
          new Date(plant.nextWatering) <= new Date()
            ? "needs water"
            : "watered";
        console.log("THIS IS A PLNT", plant);
        return plant;
      });
      setGardenPlants(plantState);
      setSelectedPlants(plantState);
    });
  }, []);

  //Generates an array of PlantCards based on the selected plants
  const generateCards = () => {
    //Ensure there is data to generate plants from
    if (!selectedPlants[0]) return;

    //Sort plants alphabetically for display
    const sortedPlants = sortPlants(selectedPlants);
    //Creates an array of PlantCards with the corresponding information

    return sortedPlants.map((plant) => {
      return (
        <PlantCard
          key={plant.key_id}
          plant={plant.specific_name}
          picture={plant.large_plant_card_photo_url}
          lastWatered={plant.lastWateredFormatted}
          nextWatering={plant.nextWaterFormatted}
          waterStatus={plant.waterStatus}
          handleClick={() => {
            setShowModal(true);
            setPlantCardProps({
              id: plant.key_id,
              waterStatus: plant.waterStatus,
              nextWatering: plant.nextWaterFormatted,
              updateMyGarden: () =>
                waterSinglePlant(plant.key_id, gardenPlants),
            });
          }}
        />
      );
    });
  };
  //Generates the cardsList for rendering on the page
  const cardsList = generateCards();

  const searchPlant = (searchTerm) => {
    const searchResult = gardenPlants.filter((plant) =>
      plant.specific_name.toLowerCase().includes(searchTerm)
    );

    setSelectedPlants(searchResult);
  };

  const filterPlantsThatNeedWater = (plantsToFilter) => {
    const filteredPlants = plantsToFilter.filter(
      (plant) => plant.waterStatus === "needs water"
    );
    setSelectedPlants(filteredPlants);
  };

  return {
    cardsList,
    selectedPlants,
    setSelectedPlants,
    gardenPlants,
    searchPlant,
    filterPlantsThatNeedWater,
    showModal,
    setShowModal,
    plantCardProps,
  };
}
