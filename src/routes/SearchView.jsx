import SearchBar from "../components/SearchBar";
import { Button, Container } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import PlantCard from "../components/PlantCard";
import { useEffect } from "react";

export default function SearchView() {
  const [plantInfo, setPlantInfo] = useState([]);
  const [selectedPlants, setSelectedPlants] = useState([]);

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
        />
      ));
    }
  };

  const cardsList = plantInfo !== "" ? generateCards() : null;
  return (
    <>
      <SearchBar searchDB={searchDB} />
      <Container className="text-center">{plantInfo[0] && cardsList}</Container>
    </>
  );
}
