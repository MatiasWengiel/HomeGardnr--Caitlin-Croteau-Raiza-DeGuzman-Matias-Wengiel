import SearchBar from "../components/SearchBar";
import { Button, Container, Row, Col, Modal } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import PlantCard from "../components/PlantCard";
import { useEffect } from "react";

export default function SearchView() {
  const [plantInfo, setPlantInfo] = useState([]);
  const [selectedPlants, setSelectedPlants] = useState([]);
  const [modalShow, setModalShow] = useState(true);

  useEffect(() => {
    axios.get(`/api/plants`).then((response) => {
      setPlantInfo(response.data);
      setSelectedPlants(response.data);
    });
  }, []);

  const searchDB = (event) => {
    event.preventDefault();
    //Case insensitive search for plants that have the typed letter(s) in their generic or specific name
    setSelectedPlants(
      plantInfo.filter(
        (plant) =>
          plant.generic_name
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
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
          plant={plant.generic_name}
          picture={plant.large_plant_card_photo_url}
          handleClick={() => setModalShow(true)}
        />
      ));
    }
  };

  const cardsList = plantInfo !== "" ? generateCards() : null;

  return (
    <Container className="w-90">
      <Row className="m-3">
        <Col />
        <Col xs={8}>
          <SearchBar searchDB={searchDB} />
        </Col>
        <Col />
      </Row>
      <Row>
        <Modal centered>
          <Modal.Header closeButton>
            <Modal.Title>This is the title</Modal.Title>
          </Modal.Header>
          <Modal.Body>This is the body</Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setModalShow(false)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Row>
      <Row>{cardsList}</Row>
    </Container>
  );
}
