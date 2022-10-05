import { useEffect, useContext, useState } from "react";
import { userContext } from "../providers/UserProvider";
import axios from "axios";
import { Button, Container, Row, Col } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import PlantCard from "../components/PlantCard";
import PlantModal from "../components/PlantModal";
import { Link } from "react-router-dom";
import { calculateNextWaterDate, dateFormatter } from "../helpers/dateHelpers";

import Banner from "../components/Banner";
import { weatherContext } from "../providers/WeatherProvider";
import { checkWeatherWarnings } from "../helpers/weatherHelpers.js";

export default function MyGarden() {
  const { userID } = useContext(userContext);
  const [gardenInfo, setGardenInfo] = useState([]);
  const [selectedPlants, setSelectedPlants] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [plantCardProps, setPlantCardProps] = useState();
  const [filterPlants, setFilterPlants] = useState("needs water");

  const {
    localHigh,
    localLow,
    localPrecipitation,
  } = useContext(weatherContext);
  
  // If NOT using array (approach #3 in weatherHelpers), variable name should be singular.
  // const weatherWarningMsg = checkWeatherWarnings();

  // If using array to display weather warning msgs:
    const weatherWarningMsgs = checkWeatherWarnings();


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
            });
          }}
        />
      ));
    }
  };
  const cardsList = selectedPlants !== "" ? generateCards() : null;

  useEffect(() => {
    axios.get(`/api/my_garden/all/${userID}`).then((response) => {
      response.data.map((plant) => {
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
  }, []);

  const handleWaterAllPlants = () => {
    axios.put("/api/my_garden/waterAll");
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
      {weatherWarningMsgs.length > 0 && <Banner weatherWarning={weatherWarningMsgs}/>}
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
