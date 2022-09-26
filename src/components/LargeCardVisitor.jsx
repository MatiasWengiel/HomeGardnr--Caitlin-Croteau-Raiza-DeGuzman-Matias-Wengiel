import { React, useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
import "./LargeCardVisitor.scss";


export default function LargeCardVisitor(props) {

  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("/api/plants/1")
      .then((response) => {
        console.log(response.data[0])
        setData(response.data[0]);
        // return axios.get(`/api/plants`);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container className="lc-container">
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
          <div className="lc-info">
            <Card.Title>{data.specific_name}</Card.Title>
            <ListGroup variant="flush" className="text-start">
              <ListGroup.Item>
                When to Plant: {data.when_to_plant}
              </ListGroup.Item>
              <ListGroup.Item>Water Needs: {data.water_needs}</ListGroup.Item>
              <ListGroup.Item>
                Sunlight Needs: {data.sunlight_needs}
              </ListGroup.Item>
              <ListGroup.Item>
                High Temp Tolerance: {data.highest_temp_tolerance}
              </ListGroup.Item>
              <ListGroup.Item>
                Low Temp Tolerance: {data.lowest_temp_tolerance}
              </ListGroup.Item>
              <ListGroup.Item>
                Planting Distance: {data.how_far_apart_to_plant}
              </ListGroup.Item>
              <ListGroup.Item>
                Planting Depth: {data.how_deep_to_plant}
              </ListGroup.Item>
              <ListGroup.Item>
                Time to Maturity: {data.how_long_until_mature}
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}