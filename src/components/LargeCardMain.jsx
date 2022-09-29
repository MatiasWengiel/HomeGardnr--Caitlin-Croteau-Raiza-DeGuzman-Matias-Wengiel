import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./LargeCardMain.scss";


export default function LargeCardMain(props) {
  const [plantData, setPlantData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/plants/${id}`)
      .then((response) => {
        console.log(response.data[0])
        setPlantData(response.data[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container className="lcv-container">
      <p>This is the MAIN LIBRARY Plant Card</p>
      <Card>
        <Card.Body className="d-flex flex-row mb-3 justify-content-around">
          <div>
            <Card.Title className="text-center">
              {plantData.generic_name}
            </Card.Title>
            <Card.Img
              width={400}
              height={400}
              alt={"cucumber"}
              src={plantData.large_plant_card_photo_url}
            />
          </div>
          <div className="lcv-info">
            <Card.Title className="text-center">
              {plantData.specific_name}
            </Card.Title>
            <div className="lcv-data">
              <h6>When To Plant:</h6>
              <p>{plantData.when_to_plant}</p>
            </div>

            <div className="lcv-data">
              <h6>Water Needs (per week):</h6>
              <p>{plantData.water_needs}</p>
            </div>

            <div className="lcv-data">
              <h6>Sunlight Needs:</h6>
              <p>{plantData.sunlight_needs}</p>
            </div>

            <div className="lcv-data">
              <h6>Highest Temp Tolerance (Celsius):</h6>
              <p>{plantData.highest_temp_tolerance}</p>
            </div>

            <div className="lcv-data">
              <h6>Lowest Temp Tolerance (Celsius):</h6>
              <p>{plantData.lowest_temp_tolerance}</p>
            </div>

            <div className="lcv-data">
              <h6>Planting Distance:</h6>
              <p>{plantData.how_far_apart_to_plant}</p>
            </div>

            <div className="lcv-data">
              <h6>Planting Depth:</h6>
              <p>{plantData.how_deep_to_plant}</p>
            </div>

            <div className="lcv-data">
              <h6>Time to Maturity:</h6>
              <p>{plantData.how_long_until_mature}</p>
            </div>

            <div className="lcu-buttons">
              <Button variant="primary">Add to My Garden</Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}