import { React, useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
import "./LargeCardVisitor.scss";


export default function LargeCardVisitor(props) {

  const [data, setPlantData] = useState({});

  useEffect(() => {
    axios
      .get("/api/plants/2")
      // How to set the id so it's dynamic?
      .then((response) => {
        console.log(response.data[0])
        setPlantData(response.data[0]);
        // return axios.get(`/api/plants`);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container className="lcv-container">
      <p>This is the VISITOR Card</p>
      <Card>
        <Card.Body className="d-flex flex-row mb-3 justify-content-around">
          <div>
            <Card.Title>{data.generic_name}</Card.Title>
            <Card.Img
              width={400}
              height={400}
              alt={"cucumber"}
              src={data.large_plant_card_photo_url}
            />
          </div>
          <div className="lcv-info">
            <Card.Title>{data.specific_name}</Card.Title>
            <div className="lcv-data">
              <h6>When To Plant:</h6>
              <p>{data.when_to_plant}</p>
            </div>

            <div className="lcv-data">
              <h6>Water Needs:</h6>
              <p>{data.water_needs}</p>
            </div>

            <div className="lcv-data">
              <h6>Sunlight Needs:</h6>
              <p>{data.sunlight_needs}</p>
            </div>

            <div className="lcv-data">
              <h6>Highest Temp Tolerance:</h6>
              <p>{data.highest_temp_tolerance}</p>
            </div>

            <div className="lcv-data">
              <h6>Lowest Temp Tolerance:</h6>
              <p>{data.lowest_temp_tolerance}</p>
            </div>

            <div className="lcv-data">
              <h6>Planting Distance:</h6>
              <p>{data.how_far_apart_to_plant}</p>
            </div>

            <div className="lcv-data">
              <h6>Time to Maturity:</h6>
              <p>{data.how_long_until_mature}</p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}