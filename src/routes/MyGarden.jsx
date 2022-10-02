import { useEffect, useContext, useState } from "react";
import { userContext } from "../providers/UserProvider";
import axios from "axios";
import { Button, Container, Row, Col } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import PlantCard from "../components/PlantCard";
import PlantModal from "../components/PlantModal";

export default function MyGarden() {
  const { userID } = useContext(userContext);
  const [gardenInfo, setGardenInfo] = useState([]);
  const [selectedPlants, setSelectedPlants] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [plantId, setPlantId] = useState();

  useEffect(() => {
    axios.get(`/api/my_garden/all/${userID}`).then((response) => {
      setGardenInfo(response.data);
      setSelectedPlants(response.data);
    });
  }, []);

  const searchPlant = (event) => {
    event.preventDefault();
    //Case insensitive search for plants that have the typed letter(s) in their generic or specific name
    setSelectedPlants(
      gardenInfo.filter((plant) =>
        plant.specific_name
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      )
    );
  };

  const generateCards = () => {
    if (gardenInfo[0]) {
      return selectedPlants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant.specific_name}
          picture={plant.large_plant_card_photo_url}
          lastWatered={plant.last_watered_at}
          nextWatering={plant.water_needs}
          handleClick={() => {
            setShowModal(true);
            setPlantId(plant.id);
          }}
        />
      ));
    }
    console.log(plantId);
  };
  const cardsList = selectedPlants !== "" ? generateCards() : null;

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
          // onClick={handleClick}
        >
          Add New Plant
        </Button>
        <PlantModal
          show={showModal}
          onHide={() => setShowModal(false)}
          id={plantId}
          modalMode="user"
        />
      </Row>
      <Row></Row>
      <Row>{cardsList}</Row>
    </Container>
  );
}
