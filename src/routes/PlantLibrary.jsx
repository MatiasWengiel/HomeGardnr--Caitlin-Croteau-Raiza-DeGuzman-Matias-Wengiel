import SearchBar from "../components/SearchBar";
import { Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import PlantCard from "../components/PlantCard";
import { useEffect } from "react";
import PlantModal from "../components/PlantModal";
import FormModal from "../components/FormModal";
import "../styles/Buttons.scss";

export default function PlantLibrary() {
  const [plantInfo, setPlantInfo] = useState([]);
  const [selectedPlants, setSelectedPlants] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [plantId, setPlantId] = useState();

  useEffect(() => {
    axios.get(`/api/plants`).then((response) => {
      console.log("data", response.data);
      setPlantInfo(response.data);
      setSelectedPlants(response.data);
    });
  }, []);

  const searchPlant = (event) => {
    event.preventDefault();
    //Case insensitive search for plants that have the typed letter(s) in their generic or specific name
    setSelectedPlants(
      plantInfo.filter((plant) =>
        plant.specific_name
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      )
    );
  };

  const generateCards = () => {
    if (selectedPlants[0]) {
      //Sorts the plants alphabetically for display
      selectedPlants.sort((a, b) => {
        let lowerCaseA = a.specific_name.toLowerCase();
        let lowerCaseB = b.specific_name.toLowerCase();

        if (lowerCaseA < lowerCaseB) return -1;
        if (lowerCaseA > lowerCaseB) return 1;
        return 0;
      });

      //Creates an array of PlantCards with the corresponding information
      return selectedPlants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant.specific_name}
          picture={plant.large_plant_card_photo_url}
          handleClick={() => {
            setShowModal(true);
            setPlantId(plant.id);
          }}
        />
      ));
    }
  };
  const cardsList = plantInfo !== "" ? generateCards() : null;

  const handleClick = () => {
    setShowFormModal(true);
  };

  function updateLibrary(newPlant) {
    setPlantInfo([...plantInfo, newPlant]);
    setSelectedPlants([...selectedPlants, newPlant]);
  }

  return (
    <Container className="w-90">
      <Row className="mt-5 mb-4 pe-1 search-and-add-button">
        <Col className="col-4 ms-4 p-0">
          <SearchBar
            searchPlant={searchPlant}
            placeholder="Search for your next plant here!"
          />
        </Col>
        <Col className="d-flex justify-content-end">
          <button
            className="btn-custom btn-garden btn-add-plant"
            type="submit"
            onClick={handleClick}
          >
            Add New Plant
          </button>
        </Col>
        <PlantModal
          show={showModal}
          onHide={() => setShowModal(false)}
          id={plantId}
          modalMode="main"
        />
        <FormModal
          show={showFormModal}
          onHide={() => setShowFormModal(false)}
          updateLibrary={updateLibrary}
        />
      </Row>
      <Row className="justify-content-between">{cardsList}</Row>
    </Container>
  );
}
