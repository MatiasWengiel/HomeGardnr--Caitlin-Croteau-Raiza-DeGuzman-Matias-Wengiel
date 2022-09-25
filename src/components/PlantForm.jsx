import { React, useState } from "react";
import "./PlantForm.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function PlantForm(props) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container
      className="p-3 ms-auto square border border-2 rounded text-start"
      style={{ width: "1000px" }}
    >
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-4 mt- ">
          <Form.Group as={Col} controlId="formGenericName">
            <Form.Label>Generic Name</Form.Label>
            <Form.Control required type="text" placeholder="Generic Name" />
            <Form.Control.Feedback type="invalid">
              Please enter a name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formSpecificName">
            <Form.Label>Specific Name</Form.Label>
            <Form.Control required type="text" placeholder="Specific Name" />
          </Form.Group>
          <Form.Control.Feedback type="invalid">
            Please enter a name.
          </Form.Control.Feedback>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formPlantingSeason">
            <Form.Label>Planting Season</Form.Label>
            <Form.Control required type="text" placeholder="Ex: Spring" />
            <Form.Control.Feedback type="invalid">
              Please enter the planting season(s).
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formMaturity">
            <Form.Label>Time to Maturity</Form.Label>
            <Form.Control required type="text" placeholder="Ex: 2 years" />
            <Form.Control.Feedback type="invalid">
              Please enter time until the plant is ready to produce fruit or
              flower.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formSeedSpacing">
            <Form.Label>Seed Spacing</Form.Label>
            <Form.Control required type="text" placeholder="Ex: 10cm apart" />
            <Form.Control.Feedback type="invalid">
              Please enter spacing requirements for planting seeds.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formPlantDepth">
            <Form.Label>Seed Planting Depth</Form.Label>
            <Form.Control required type="text" placeholder="Ex: 10cm deep" />
            <Form.Control.Feedback type="invalid">
              Please enter depth requirements for planting seeds.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formHighTemp">
            <Form.Label>Max High Temperature</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Please enter a number"
            />
            <Form.Control.Feedback type="invalid">
              Please enter a number.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formLowTemp">
            <Form.Label>Max Low Temperature</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Please enter a number"
            />
            <Form.Control.Feedback type="invalid">
              Please enter a number.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formSunlightNeeds">
            <Form.Label>Sunlight Needs</Form.Label>
            <Form.Control required as="select" custom>
              <option value="">Select your plant's light requirments</option>
              <option value="Direct Sun">Direct Sun</option>
              <option value="Indirect Sun">Indirect Sun</option>
              <option value="Shade">Shade</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Please select a light requirement.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formWaterNeeds">
            <Form.Label>Water needs</Form.Label>
            <Form.Control required as="select" custom>
              <option value="">
                Select how many days per week you want to water:
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="3">4</option>
              <option value="3">5</option>
              <option value="3">6</option>
              <option value="3">Every day</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Please select a number.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formPlantDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={3}
            placeholder="Tell us about your plant!"
          />
          <Form.Control.Feedback type="invalid">
            Please provide a brief description.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

/*
  const [values, setValues] = useState({
    genericName: "",
    specificName: "",
    season: "",
    maturity: "",
    spacing: "",
    depth: "",
    maxTemp: 0,
    minTemp: 0,
    sunlight: "",
    water: 0,
    description: ""

  });

  const [errors, setErrors] = useState({});
  */