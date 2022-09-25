import React from "react";
import "./PlantForm.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function PlantForm(props) {
  return (
    <Container className="ms-auto square border border-2 rounded text-start">
      <Form>
        <Row className="mb-4 mt-3 ">
          <Form.Group as={Col} controlId="formGenericName">
            <Form.Label>Generic Name</Form.Label>
            <Form.Control type="text" placeholder="Generic Name" />
            {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
          </Form.Group>

          <Form.Group as={Col} controlId="formSpecificName">
            <Form.Label>Specific Name</Form.Label>
            <Form.Control type="text" placeholder="Specific Name" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formPlantingSeason">
            <Form.Label>Planting Season</Form.Label>
            <Form.Control type="text" placeholder="Planting Season" />
          </Form.Group>

          <Form.Group as={Col} controlId="formMaturity">
            <Form.Label>Time to Maturity</Form.Label>
            <Form.Control type="text" placeholder="Time to Maturity" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formSeedSpacing">
            <Form.Label>Seed Spacing</Form.Label>
            <Form.Control type="text" placeholder="Seed Spacing" />
          </Form.Group>

          <Form.Group as={Col} controlId="formPlantDepth">
            <Form.Label>Seed Planting Depth</Form.Label>
            <Form.Control type="text" placeholder="Planting Depth" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formHighTemp">
            <Form.Label>Max High Temperature</Form.Label>
            <Form.Control type="text" placeholder="Please enter a number" />
          </Form.Group>

          <Form.Group as={Col} controlId="formLowTemp">
            <Form.Label>Max Low Temperature</Form.Label>
            <Form.Control type="text" placeholder="Please enter a number" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formSunlightNeeds">
            <Form.Label>Sunlight Needs</Form.Label>
            <Form.Control type="text" placeholder="Sunlight Needs" />
          </Form.Group>

          <Form.Group as={Col} controlId="formWaterNeeds">
            <Form.Label>Water needs</Form.Label>
            <Form.Select aria-label="WaterNeeds">
              <option>Select how many days per week you want to water.</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="3">4</option>
              <option value="3">5</option>
              <option value="3">6</option>
              <option value="3">Every day</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formPlantDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Tell us about your plant!"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
