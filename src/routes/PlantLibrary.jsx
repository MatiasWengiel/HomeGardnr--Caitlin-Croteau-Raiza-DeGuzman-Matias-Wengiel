import SearchBar from "../components/SearchBar";
import { Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import PlantCard from "../components/PlantCard";
import { useEffect } from "react";
import PlantModal from "../components/PlantModal";
import FormModal from "../components/FormModal";

export default function PlantLibrary() {
  const [plantInfo, setPlantInfo] = useState([]);
  const [selectedPlants, setSelectedPlants] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [plantId, setPlantId] = useState();

  useEffect(() => {
    axios.get(`/api/plants`).then((response) => {
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
    console.log("newPlant in update library", newPlant);
    setPlantInfo({ ...plantInfo, newPlant });
    console.log("plant info in library after update)", plantInfo);
    setSelectedPlants({ ...selectedPlants, newPlant });
    // console.log("selected plants in library after update)", selectedPlants);
  }

  return (
    <Container className="w-90">
      <Row className="m-3 justify-content-center">
        <Col xs={8}>
          <SearchBar searchPlant={searchPlant} />
        </Col>
      </Row>
      <Row>
        <Button
          className="col-2"
          variant="success"
          type="submit"
          onClick={handleClick}
        >
          Add New Plant
        </Button>
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
      <Row>{cardsList}</Row>
    </Container>
  );
}
