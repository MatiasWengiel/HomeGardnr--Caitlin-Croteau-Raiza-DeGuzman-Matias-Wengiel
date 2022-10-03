import { React, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../styles/LargeCardUser.scss";


export default function LargeCardUser(props) {
  const [plantData, setPlantData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  // Place this function in separate file to keep code here minimal
  const formatDate = (inputDate) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const dateObj = new Date(inputDate);

    let formattedDate = "";
    formattedDate += days[dateObj.getDay()] + ", ";
    formattedDate += months[dateObj.getMonth()] + " ";
    formattedDate += dateObj.getDate() + ", ";
    formattedDate += dateObj.getFullYear();
    return formattedDate;
  };

  useEffect(() => {
    axios
      .get(`/api/my_garden/${id}`)
      .then((response) => {
        setPlantData(response.data[0]);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const deleteUserPlant = (id) => {
    axios
      .delete(`/api/my_garden/${id}`)
      .then(() => {
        navigate("/my_garden");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Container className="lcu-container">
      <p>This is the User Card</p>
      <Card>
        <Card.Body className="d-flex flex-row mb-3 justify-content-around">
          <div>
            <Card.Img
              width={400}
              height={400}
              src={plantData.large_plant_card_photo_url}
            />
          </div>
          <div className="lcu-info">
            <Card.Title className="text-center">
              {plantData.specific_name}
            </Card.Title>

            <div className="lcu-data">
              <h6>Planted Date:</h6>
              {/* <p>{new Date(data.planted_date).toDateString()}</p> */}
              <p>{formatDate(plantData.planted_date)}</p>
            </div>

            <div className="lcu-data">
              <h6>Last Watered:</h6>
              <p>{formatDate(plantData.last_watered_at)}</p>
            </div>

            <div className="lcu-data">
              <h6>When to Water Next:</h6>
              <p>{}</p>
            </div>

            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Plant Details</Accordion.Header>
                <Accordion.Body>
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
                    <Col className="fw-bold">
                      Highest Temp Tolerance (Celsius):{" "}
                    </Col>
                    <Col className="text-end">
                      {plantData.highest_temp_tolerance}
                    </Col>
                  </Row>

                  <Row className="pb-2">
                    <Col className="fw-bold">
                      Lowest Temp Tolerance (Celsius):{" "}
                    </Col>
                    <Col className="text-end">
                      {plantData.lowest_temp_tolerance}
                    </Col>
                  </Row>

                  <Row className="pb-3">
                    <Col className="fw-bold">Planting Distance: </Col>
                    <Col className="text-end">
                      {plantData.how_far_apart_to_plant}
                    </Col>
                  </Row>

                  <Row className="pb-3">
                    <Col className="fw-bold">Planting Depth: </Col>
                    <Col className="text-end">
                      {plantData.how_deep_to_plant}
                    </Col>
                  </Row>

                  <Row className="pb-3">
                    <Col className="fw-bold">Time to Maturity: </Col>
                    <Col className="text-end">
                      {plantData.how_long_until_mature}
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <div className="lcu-buttons">
              <Button variant="primary">Water Plant</Button>
              <Button variant="danger" onClick={() => deleteUserPlant(id)}>
                Delete
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
