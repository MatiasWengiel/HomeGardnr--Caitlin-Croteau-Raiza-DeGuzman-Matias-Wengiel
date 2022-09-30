import SearchBar from "../components/SearchBar";
import { Button, Container, Row, Col, Modal } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import PlantCard from "../components/PlantCard";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const goToPlantCard = (id) => navigate(`/plants/${id}`);

  const generateCards = () => {
    if (selectedPlants[0]) {
      return selectedPlants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant.generic_name}
          picture={plant.large_plant_card_photo_url}
          handleClick={() => goToPlantCard(plant.id)}
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
        <Button className="col-2" variant="success">
          Add New Plant
        </Button>
      </Row>
      <Row></Row>
      <Row>{cardsList}</Row>
    </Container>
  );
}
