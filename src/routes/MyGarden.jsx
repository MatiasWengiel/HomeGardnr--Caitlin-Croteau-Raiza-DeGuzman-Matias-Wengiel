import { useEffect, useContext, useState } from "react";
import { userContext } from "../providers/UserProvider";
import axios from "axios";
import { Button, Container, Row, Col } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import PlantCard from "../components/PlantCard";
import PlantModal from "../components/PlantModal";
import { Link } from "react-router-dom";
import { calculateNextWaterDate, dateFormatter } from "../helpers/dateHelpers";

import {
  performSearchPlant,
  sortPlants,
  waterSinglePlant,
  waterAllPlants,
} from "../helpers/myGardenHelpers";

export default function MyGarden() {
  const { userID } = useContext(userContext);
  const [gardenInfo, setGardenInfo] = useState([]);
  const [selectedPlants, setSelectedPlants] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [plantCardProps, setPlantCardProps] = useState();
  const [filterPlants, setFilterPlants] = useState("needs water");


  useEffect(() => {
    axios.get(`/api/my_garden/all/${userID}`).then((response) => {
      response.data.forEach((plant) => {
        //Add the calculated next water date to each plant in the response
        plant.nextWatering = calculateNextWaterDate(
          plant.last_watered_at,
          plant.water_needs
        );
        //Add a formatted version of last_watered_at to each plant for displaying
        plant.lastWateredFormatted = dateFormatter(
          new Date(plant.last_watered_at)
        );
        plant.nextWaterFormatted = dateFormatter(new Date(plant.nextWatering));

        plant.waterStatus =
          new Date(plant.nextWatering) <= new Date()
            ? "needs water"
            : "watered";
      });
      setGardenInfo(response.data);
      setSelectedPlants(response.data);
    });
  }, [userID]);

  //Generates an array of PlantCards based on the selectedPlants
  const generateCards = () => {
    //Ensures there is data in gardenInfo
    if (selectedPlants[0]) {
      //Sort plants alphabetically for display
      const sortedPlants = sortPlants(selectedPlants);
      //Creates an array of PlantCards with the corresponding information
      return sortedPlants.map((plant) => (
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
              updateMyGarden: () => waterSinglePlant(plant.key_id, gardenInfo),
            });
          }}
        />
      ));
    }
  };
  //Generates the cardsList for rendering on the page
  const cardsList = selectedPlants !== "" ? generateCards() : null;

  //Functions for page functionality below //
  const searchPlant = (event) => {
    event.preventDefault();
    const searchTerm = event.target.value.toLowerCase();
    setSelectedPlants(performSearchPlant(searchTerm, gardenInfo));
  };

  const filterPlantsThatNeedWater = () =>
    setSelectedPlants(
      gardenInfo.filter((plant) => plant.waterStatus === "needs water")
    );

  const handleWaterAllPlants = (plantsList) => {
    //Extract the plant_id of the plants that are visible at the time
    const idArray = selectedPlants.map((plant) => plant.key_id);
    //Update database, but only the plants that were visible at the time
    axios.put(`/api/my_garden/waterAll/${idArray}`);
    //Update state with the corresponding data
    setSelectedPlants(waterAllPlants(plantsList));
  };

  const handleFilterPlants = () => {
    if (filterPlants === "needs water") {
      filterPlantsThatNeedWater();
      setFilterPlants("all plants");
    } else {
      setSelectedPlants(gardenInfo);
      setFilterPlants("needs water");
    }
  };
  

  return (
    <>
      <Container className="w-90">
        <Row className="m-3 justify-content-center">
          <Col xs={8}>
            <SearchBar searchPlant={searchPlant} />
          </Col>
        </Row>
        <Row>
          <button className="col-3 btn-custom btn-add-plant">
            <Link
              to="/plants"
              style={{
                color: "inherit",
                backgroundColor: "inherit",
                textDecoration: "inherit",
              }}
            >
              Add New Plant To Your Garden
            </Link>
          </button>
          <button
            className="col-3 offset-1 btn-custom btn-water-plant"
            onClick={() => {
              handleWaterAllPlants(selectedPlants);
            }}
          >
            Water All Plants
          </button>
          <button
            className="col-3 offset-1 btn-custom btn-water-warning"
            // variant={filterPlants === "needs water" ? "warning" : "success"}
            onClick={() => {
              handleFilterPlants();
            }}
          >
            {filterPlants === "needs water" && "View Plants That Need Water"}
            {filterPlants === "all plants" && "View All Plants"}
          </button>
          <PlantModal
            show={showModal}
            onHide={() => setShowModal(false)}
            plantCardProps={plantCardProps}
            modalMode="user"
          />
        </Row>
        <Row>{cardsList}</Row>
      </Container>
    </>
  );
}
