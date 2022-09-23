import React from "react";
import "./PlantForm.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function PlantForm(props) {
  return (
    <Form className="ms-auto">
      <Form.Group className="mb-3" controlId="formGenericName">
        <Form.Label>Generic Name</Form.Label>
        <Form.Control type="text" placeholder="Generic Name" />
        {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formSpecificName">
        <Form.Label>Specific Name</Form.Label>
        <Form.Control type="text" placeholder="Specific Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPlantingSeason">
        <Form.Label>Planting Season</Form.Label>
        <Form.Control type="text" placeholder="Planting Season" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formSeedSpacing">
        <Form.Label>Seed Spacing</Form.Label>
        <Form.Control type="text" placeholder="Seed Spacing" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPlantDepth">
        <Form.Label>Seed Planting Depth</Form.Label>
        <Form.Control type="text" placeholder="Planting Depth" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMaturity">
        <Form.Label>Time to Maturity</Form.Label>
        <Form.Control type="text" placeholder="Time to Maturity" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formSunlightNeeds">
        <Form.Label>Sunlight Needs</Form.Label>
        <Form.Control type="text" placeholder="Sunlight Needs" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formHighTemp">
        <Form.Label>Max High Temperature</Form.Label>
        <Form.Control type="text" placeholder="Please enter a number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLowTemp">
        <Form.Label>Max Low Temperature</Form.Label>
        <Form.Control type="text" placeholder="Please enter a number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formWaterNeeds">
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

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
