import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const id = props.id;

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

  const calculateNextWaterDate = (lastWatered, waterNeeds) => {
    const lastWateredDate = new Date(lastWatered);
    //Calculates water interval by dividing 7 (days) over number of waterings needed per week (waterNeeds)
    const waterInterval = Math.floor(7 / waterNeeds);
    //Takes the last watered date and creates a new date that is the last watered plus the water interval
    const waterDate = new Date(
      lastWateredDate.setDate(lastWateredDate.getDate() + waterInterval)
    ).toDateString();
    return waterDate;
  };
  useEffect(() => {
    axios
      .get(`/api/my_garden/${id}`)
      .then((response) => {
        const responseObj = response.data[0];
        const nextWater = calculateNextWaterDate(
          responseObj.last_watered_at,
          responseObj.water_needs
        );

        const plantedDate = new Date(responseObj.planted_date);
        const lastWateredDate = new Date(responseObj.last_watered_at);

        setPlantData({
          plant_id: responseObj.plant_id,
          specific_name: responseObj.specific_name,
          large_plant_card_photo_url: responseObj.large_plant_card_photo_url,
          last_watered_at: lastWateredDate.toDateString(),
          water_needs: responseObj.water_needs,
          planted_date: plantedDate.toDateString(),
          lowest_temp_tolerance: responseObj.lowest_temp_tolerance,
          highest_temp_tolerance: responseObj.highest_temp_tolerance,
          how_deep_to_plant: responseObj.how_deep_to_plant,
          how_far_apart_to_plant: responseObj.how_far_apart_to_plant,
          how_long_until_mature: responseObj.how_long_until_mature,
          sunlight_needs: responseObj.sunlight_needs,
          when_to_plant: responseObj.when_to_plant,
          nextWater,
        });
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
    <Container>
      <Card>
        <Card.Body className="d-flex flex-row mb-3 justify-content-around">
          <div className="lcu-photo">
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

            <Row className="pb-3">
              <Col className="fw-bold">Planted Date: </Col>
              {/* <p>{new Date(plantData.planted_date).toDateString()}</p> */}
              <Col className="text-end">{plantData.planted_date}</Col>
            </Row>

            <Row className="pb-3">
              <Col className="fw-bold">Last Watered: </Col>
              <Col className="text-end">{plantData.last_watered_at}</Col>
            </Row>

            <Row className="pb-3">
              <Col className="fw-bold">When to Water Next: </Col>
              <Col className="text-end">{plantData.nextWater}</Col>
            </Row>

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
