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
import useGardenData from "../helpers/useGardenData";
export default function MyGarden() {
  const [filterPlants, setFilterPlants] = useState("needs water");
  const {
    cardsList,
    selectedPlants,
    setSelectedPlants,
    gardenPlants,
    searchPlant,
    generateCards,
    filterPlantsThatNeedWater,
    showModal,
    setShowModal,
    plantCardProps,
  } = useGardenData();

  //Functions for page functionality below //
  const handleSearchPlant = (event) => {
    event.preventDefault();
    const searchTerm = event.target.value.toLowerCase();
    searchPlant(searchTerm);
  };

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
      filterPlantsThatNeedWater(gardenPlants);
      setFilterPlants("all plants");
    } else {
      setSelectedPlants(gardenPlants);
      setFilterPlants("needs water");
    }
  };

  return (
    <Container className="mw-90">
      <Row className="mt-4 ms-3">
        <Col xs={{ span: 4 }}>
          <SearchBar searchPlant={handleSearchPlant} />
        </Col>
        <Col xs={{ offset: 3 }}>
          <Button className="ms-2 me-2" variant="success">
            <Link
              to="/plants"
              style={{
                color: "inherit",
                backgroundColor: "inherit",
                textDecoration: "inherit",
              }}
            >
              Add New Plant
            </Link>
          </Button>
          <Button
            className="ms-2 me-2"
            variant="primary"
            onClick={() => {
              handleWaterAllPlants(selectedPlants);
            }}
          >
            Water All Plants
          </Button>
          <Button
            className="ms-2 me-2"
            variant={filterPlants === "needs water" ? "warning" : "success"}
            onClick={() => {
              handleFilterPlants();
            }}
          >
            {filterPlants === "needs water" && "View Unwatered Plants"}
            {filterPlants === "all plants" && "View All Plants"}
          </Button>
        </Col>
        <PlantModal
          show={showModal}
          onHide={() => setShowModal(false)}
          plantCardProps={plantCardProps}
          modalMode="user"
        />
      </Row>
      <Row className="justify-content-center">
        <Container className="row justify-content-between">
          {cardsList}
        </Container>
      </Row>
    </Container>
  );
}
