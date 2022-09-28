import { Form } from "react-bootstrap";
import axios from "axios";
import PlantCard from "./PlantCard";
import { useState } from "react";
import { useEffect } from "react";

export default function SearchBar(props) {
  const [plantInfo, setPlantInfo] = useState([]);
  const searchDB = (event) => {
    axios.get(`/api/plants/search/${event.target.value}`).then((response) => {
      setPlantInfo(response.data);
    });
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="searchBar">
          <Form.Label>Find your plant here</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search for your next plant here!"
            onChange={searchDB}
          />
        </Form.Group>
      </Form>
      {/* {plantCards} */}
    </>
  );
}
