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

  return (
    <Container className="w-90">
      <Row className="m-3 justify-content-center">
        <Col xs={8}>
          <SearchBar searchPlant={searchPlant} />
        </Col>
      </Row>
      <Row>
        {/* Button currently does nothing */}
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
        />
        <FormModal
          show={showFormModal}
          onHide={() => setShowFormModal(false)}
        />
      </Row>
      <Row></Row>
      <Row>{cardsList}</Row>
    </Container>
  );
}
