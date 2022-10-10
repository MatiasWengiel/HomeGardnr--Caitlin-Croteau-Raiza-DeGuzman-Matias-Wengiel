import { useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import PlantModal from "../components/PlantModal";
import { Link } from "react-router-dom";
import { waterAllPlants } from "../helpers/myGardenHelpers";
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
    if (idArray.length) {
      axios.put(`/api/my_garden/waterAll/${idArray}`);
      //Update state with the corresponding data
      setSelectedPlants(waterAllPlants(plantsList));
    }
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

  const filterButtonBaseStyle = "btn-custom btn-garden";
  const filterButtonStyle =
    filterPlants === "needs water"
      ? `${filterButtonBaseStyle} btn-water-warning`
      : `${filterButtonBaseStyle} btn-water-success`;

  return (
    <Container className="w-90">
      <Row className="mt-5 mb-4 pe-1 search-and-plant-buttons">
        <Col className="col-4 ms-4  p-0">
          <SearchBar
            searchPlant={handleSearchPlant}
            placeholder="Which plant are you looking for?"
          />
        </Col>
        <Col className="d-flex justify-content-end">
          <button className="btn-custom btn-garden btn-add-plant">
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
          </button>
          <button
            className={filterButtonStyle}
            onClick={() => {
              handleFilterPlants();
            }}
          >
            {filterPlants === "needs water" && "View Unwatered Plants"}
            {filterPlants === "all plants" && "View All Plants"}
          </button>
          <button
            className="btn-custom btn-garden btn-water-plant"
            onClick={() => {
              handleWaterAllPlants(selectedPlants);
            }}
          >
            Water All Plants
          </button>
        </Col>
        <PlantModal
          show={showModal}
          onHide={() => setShowModal(false)}
          plantCardProps={plantCardProps}
          modalMode="user"
        />
      </Row>
      <Row className="justify-content-between">{cardsList}</Row>
    </Container>
  );
}
