import { React, useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";


export default function LargeCardVisitor(props) {

  const [genericName, setGenericName] = useState("");

  useEffect(() => {
    axios
      .get("/api/plants")
      .then((response) => {
        setGenericName(response.data[0].generic_name);
        return axios.get(`/api/plants`);
      })
      .then((response) => {
        setGenericName(response.data[0].generic_name);
        console.log(genericName);
      })
      .catch((error) => console.log(error));
  }, [genericName]);

  return (
    <Container>
      <Card>
        <Card.Body className="d-flex flex-row mb-3 justify-content-around">
          <div>
            <Card.Title>{genericName}</Card.Title>
            <Card.Img
              width={400}
              height={400}
              alt={"cucumber"}
              src="https://images.pexels.com/photos/128420/pexels-photo-128420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
          <div style={{ width: "40%" }}>
            <Card.Title>Cucumis sativus</Card.Title>
            <ListGroup className="text-start">
              <ListGroup.Item>When to Plant: </ListGroup.Item>
              <ListGroup.Item>Water Needs: </ListGroup.Item>
              <ListGroup.Item>Sunlight Needs: </ListGroup.Item>
              <ListGroup.Item>High Temp Tolerance: </ListGroup.Item>
              <ListGroup.Item>Low Temp Tolerance: </ListGroup.Item>
              <ListGroup.Item>Planting Distance: </ListGroup.Item>
              <ListGroup.Item>Planting Depth: </ListGroup.Item>
              <ListGroup.Item>Time to Maturity: </ListGroup.Item>
            </ListGroup>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}