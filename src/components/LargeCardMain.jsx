import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../styles/LargeCardMain.scss";

export default function LargeCardMain(props) {
  const [plantData, setPlantData] = useState({});
  const id = props.id;

  useEffect(() => {
    axios
      .get(`/api/plants/${id}`)
      .then((response) => {
        setPlantData(response.data[0]);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const addPlantToGarden = () => {
    const info = {
      userId: 1,
      plantId: id,
    };

    axios.post("/api/my_garden", info).catch((error) => {
      console.log(error.message);
    });

    props.onHide();
  };

  return (
    <Container>
      <Card>
        <Card.Body className="d-flex flex-row mb-3 justify-content-around">
          <div className="lcm-photo">
            <Card.Img
              width={400}
              height={400}
              src={plantData.large_plant_card_photo_url}
            />
          </div>
          <div className="lcm-info">
            <Card.Title className="text-center">
              {plantData.specific_name}
            </Card.Title>

            <Row className="pb-3">
              <Col className="fw-bold">When To Plant: </Col>
              <Col className="text-end">{plantData.when_to_plant}</Col>
            </Row>

            <Row className="pb-3">
              <Col className="fw-bold">Water Needs (per week): </Col>
              <Col className="text-end">{plantData.water_needs}</Col>
            </Row>

            <Row className="pb-3">
              <Col className="fw-bold">Sunlight Needs: </Col>
              <Col className="text-end">{plantData.sunlight_needs}</Col>
            </Row>

            <Row className="pb-3">
              <Col className="fw-bold">Highest Temp Tolerance (Celsius): </Col>
              <Col className="text-end">{plantData.highest_temp_tolerance}</Col>
            </Row>

            <Row className="pb-2">
              <Col className="fw-bold">Lowest Temp Tolerance (Celsius): </Col>
              <Col className="text-end">{plantData.lowest_temp_tolerance}</Col>
            </Row>

            <Row className="pb-3">
              <Col className="fw-bold">Planting Distance: </Col>
              <Col className="text-end">{plantData.how_far_apart_to_plant}</Col>
            </Row>

            <Row className="pb-3">
              <Col className="fw-bold">Planting Depth: </Col>
              <Col className="text-end">{plantData.how_deep_to_plant}</Col>
            </Row>

            <Row className="pb-3">
              <Col className="fw-bold">Time to Maturity: </Col>
              <Col className="text-end">{plantData.how_long_until_mature}</Col>
            </Row>

            <Button variant="primary" onClick={() => addPlantToGarden()}>
              Add to My Garden
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
