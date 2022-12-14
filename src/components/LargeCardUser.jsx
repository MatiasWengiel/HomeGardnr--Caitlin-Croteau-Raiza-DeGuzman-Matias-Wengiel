import { React, useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/LargeCard.scss";
import { calculateNextWaterDate, dateFormatter } from "../helpers/dateHelpers";
import { renderIcon } from "../helpers/cardHelpers";
import DeleteConfirmation from "./DeleteConfirmation";

export default function LargeCardUser(props) {
  const [plantData, setPlantData] = useState({});
  const [viewDeleteConfirmation, setViewDeleteConfirmation] = useState(false);
  const { id, nextWatering, waterStatus, updateMyGarden, deleteUserPlant } = {
    ...props.plantCardProps,
  };

  useEffect(() => {
    axios
      .get(`/api/my_garden/${id}`)
      .then((response) => {
        const responseObj = response.data[0];
        //Using the full date, since having the year available is relevant for perennials
        const plantedDate = new Date(responseObj.planted_date).toDateString();
        const lastWateredDate = dateFormatter(
          new Date(responseObj.last_watered_at)
        );

        setPlantData({
          plant_id: responseObj.plant_id,
          specific_name: responseObj.specific_name,
          large_plant_card_photo_url: responseObj.large_plant_card_photo_url,
          last_watered_at: lastWateredDate,
          water_needs: responseObj.water_needs,
          planted_date: plantedDate,
          lowest_temp_tolerance: responseObj.lowest_temp_tolerance,
          highest_temp_tolerance: responseObj.highest_temp_tolerance,
          how_deep_to_plant: responseObj.how_deep_to_plant,
          how_far_apart_to_plant: responseObj.how_far_apart_to_plant,
          how_long_until_mature: responseObj.how_long_until_mature,
          sunlight_needs: responseObj.sunlight_needs,
          when_to_plant: responseObj.when_to_plant,
          nextWatering,
          waterStatus: waterStatus,
        });
      })
      .catch((error) => console.log(error));
  }, [id, nextWatering, waterStatus]);

  const handleDelete = (id) => {
    deleteUserPlant(id);
    props.onHide();
    setViewDeleteConfirmation(false);
  };

  const handleWaterPlant = (id) => {
    axios.put(`/api/my_garden/${id}`);
    const today = new Date();
    const calculateNextWater = calculateNextWaterDate(
      today,
      plantData.water_needs
    );

    const waterStatus = "watered";
    setPlantData((prev) => ({
      ...prev,
      last_watered_at: dateFormatter(today),
      lastWaterFormatted: dateFormatter(today),
      nextWatering: dateFormatter(calculateNextWater),
      waterStatus,
    }));
    updateMyGarden();
  };
  return (
    <Container>
      <Card>
        <Card.Body className="d-flex flex-row justify-content-around card-lrg">
          <div className="card-lrg photo">
            <Card.Img
              height={400}
              src={plantData.large_plant_card_photo_url}
            />
          </div>
          <div className="card-lrg info">
            <Card.Title className="text-center">
              {plantData.specific_name}
            </Card.Title>

            <Row className="pb-3">
              <Col className="fw-bold">Planted Date: </Col>
              <Col className="text-end">{plantData.planted_date}</Col>
            </Row>

            <Row className="pb-3">
              <Col className="fw-bold">Last Watered: </Col>
              <Col className="text-end">{plantData.last_watered_at}</Col>
            </Row>

            <Row className="pb-3">
              <Col className="fw-bold">When to Water Next: </Col>
              <Col className="text-end">
                {renderIcon(plantData.waterStatus, "large card")}
                {plantData.nextWatering}
              </Col>
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

            <div className="card-lrg buttons">
              <button
                className="btn-custom btn-water-plant"
                onClick={() => handleWaterPlant(id)}
              >
                Water Plant
              </button>
              <DeleteConfirmation
                handleDelete={handleDelete}
                viewDeleteConfirmation={viewDeleteConfirmation}
                closeWarningModal={() => setViewDeleteConfirmation(false)}
              />
              <button
                className="btn-custom btn-delete"
                onClick={() => setViewDeleteConfirmation(true)}
              >
                Delete
              </button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
