import { useEffect, useContext, useState } from "react";
import { userContext } from "../providers/UserProvider";
import axios from "axios";
import { Button, Container, Row, Col } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import PlantCard from "../components/PlantCard";
import PlantModal from "../components/PlantModal";
import { Link } from "react-router-dom";
import { calculateNextWaterDate, dateFormatter } from "../helpers/dateHelpers";

export default function MyGarden() {
  const { userID } = useContext(userContext);
  const [gardenInfo, setGardenInfo] = useState([]);
  const [selectedPlants, setSelectedPlants] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [plantCardProps, setPlantCardProps] = useState();
  const [filterPlants, setFilterPlants] = useState("needs water");

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

  const filterPlantsThatNeedWater = () =>
    setSelectedPlants(
      gardenInfo.filter((plant) => plant.waterStatus === "needs water")
    );

  const generateCards = () => {
    //Ensures there is data in gardenInfo
    if (gardenInfo[0]) {
      //Sorts the plants alphabetically for display
      selectedPlants.sort((a, b) => {
        let lowerCaseA = a.specific_name.toLowerCase();
        let lowerCaseB = b.specific_name.toLowerCase();

        if (lowerCaseA < lowerCaseB) return -1;
        if (lowerCaseA > lowerCaseB) return 1;
        return 0;
      });

      //Updates the STATE of a plant that was watered in the LargeCardUser (LargeCardUser handles updating the database)
      const waterSinglePlant = (id) => {
        const plantsArray = [...selectedPlants];
        plantsArray.forEach((plant) => {
          const nextWateringCalc = calculateNextWaterDate(
            new Date(),
            plant.water_needs
          );
          if (plant.key_id === id) {
            plant.lastWateredFormatted = dateFormatter(new Date());
            plant.waterStatus = "watered";
            plant.nextWaterFormatted = dateFormatter(nextWateringCalc);
            console.log(plant);
          }
        });
        setSelectedPlants(plantsArray);
      };
      //Creates an array of PlantCards with the corresponding information
      return selectedPlants.map((plant) => (
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
              nextWatering: plant.nextWatering,
              updateMyGarden: () => waterSinglePlant(plant.key_id),
            });
          }}
        />
      ));
    }
  };
  const cardsList = selectedPlants !== "" ? generateCards() : null;

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

  const handleWaterAllPlants = () => {
    //Extract the plant_id of the plants that are visible at the time
    const idArray = selectedPlants.map((plant) => plant.key_id);
    //Update database, but only the plants that were visible at the time
    axios.put(`/api/my_garden/waterAll/${idArray}`);
    //Update state with the corresponding data
    const today = new Date();
    const wateredPlants = [...selectedPlants];
    wateredPlants.forEach(
      (plant) => (
        (plant.lastWateredFormatted = dateFormatter(today)),
        (plant.last_watered_at = today),
        (plant.waterStatus = "watered"),
        (plant.nextWatering = calculateNextWaterDate(
          plant.last_watered_at,
          plant.water_needs
        )),
        (plant.nextWaterFormatted = dateFormatter(plant.nextWatering))
      )
    );
    setSelectedPlants(wateredPlants);
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
    <Container className="w-90">
      <Row className="m-3 justify-content-center">
        <Col xs={8}>
          <SearchBar searchPlant={searchPlant} />
        </Col>
      </Row>
      <Row>
        <Button className="col-3" variant="success">
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
        </Button>
        <Button
          className="col-3 offset-1"
          variant="primary"
          onClick={() => {
            handleWaterAllPlants();
          }}
        >
          Water All Plants
        </Button>
        <Button
          className="col-3 offset-1"
          variant={filterPlants === "needs water" ? "warning" : "success"}
          onClick={() => {
            handleFilterPlants();
          }}
        >
          {filterPlants === "needs water" && "View Plants That Need Water"}
          {filterPlants === "all plants" && "View All Plants"}
        </Button>
        <PlantModal
          show={showModal}
          onHide={() => setShowModal(false)}
          plantCardProps={plantCardProps}
          modalMode="user"
        />
      </Row>
      <Row>{cardsList}</Row>
    </Container>
  );
}
