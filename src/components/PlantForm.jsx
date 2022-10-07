import { React, useState } from "react";
import "../styles/LargeCard.scss";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

export default function PlantForm(props) {
  const { onHide } = props;
  const [validated, setValidated] = useState(false);
  const [plantInfo, setPlantInfo] = useState({
    specific_name: "",
    season: "",
    maturity: "",
    spacing: "",
    depth: "",
    maxTemp: "",
    minTemp: "",
    sunlight: "",
    water: "",
    description: "",
    imageURL: "",
  });

  const handleChange = (event) => {
    setPlantInfo({ ...plantInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    event.preventDefault();

    return axios
      .post("/api/plants", plantInfo)
      .then((response) => {})
      .then(() => {
        props.updateLibrary(plantInfo);

        //hides modal
        onHide();

        //resets form
        setPlantInfo({
          specific_name: "",
          season: "",
          maturity: "",
          spacing: "",
          depth: "",
          maxTemp: "",
          minTemp: "",
          sunlight: "",
          water: "",
          description: "",
          imageURL: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //noValidate cancels browser's default validation
  //preventDefault prevents the submit button from refreshing the page

  return (
    <Container
      className="p-3 ms-auto square border border-2 rounded text-start card-lrg-bkgrnd"
      sm={12}
    >
      <h1>Add a new plant!</h1>
      Fill out this form to add a plant to the main plant library as well as to
      your own personal garden.
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-4 mt-4">
          <Form.Group as={Col} controlId="formSpecificName">
            <Form.Label>Plant Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Plant Name"
              name="specific_name"
              defaultValue={plantInfo.specific_name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Control.Feedback type="invalid">
            Please enter a name.
          </Form.Control.Feedback>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formPlantingSeason">
            <Form.Label>Planting Season</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Ex: Spring"
              name="season"
              defaultValue={plantInfo.season}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please enter the planting season(s).
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formMaturity">
            <Form.Label>Time to Maturity</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Ex: 2 years"
              name="maturity"
              defaultValue={plantInfo.maturity}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please enter time until the plant is ready to produce fruit or
              flower.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formSeedSpacing">
            <Form.Label>Seed Spacing</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Ex: 10cm apart"
              name="spacing"
              defaultValue={plantInfo.spacing}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please enter spacing requirements for planting seeds.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formPlantDepth">
            <Form.Label>Seed Planting Depth</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Ex: 10cm deep"
              name="depth"
              defaultValue={plantInfo.depth}
              onChange={handleChange}
            />
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
              name="maxTemp"
              defaultValue={plantInfo.maxTemp}
              onChange={handleChange}
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
              name="minTemp"
              defaultValue={plantInfo.minTemp}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a number.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formSunlightNeeds">
            <Form.Label>Sunlight Needs</Form.Label>
            <Form.Control
              required
              as="select"
              name="sunlight"
              defaultValue={plantInfo.sunlight}
              onChange={handleChange}
            >
              <option value="">Plant's light requirements</option>
              <option value="Direct Sun">Direct Sun</option>
              <option value="Indirect Sun">Indirect Sun</option>
              <option value="Shade">Shade</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Please select a light requirement.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formWaterNeeds">
            <Form.Label>Water Needs</Form.Label>
            <Form.Control
              required
              as="select"
              name="water"
              defaultValue={plantInfo.water}
              onChange={handleChange}
            >
              <option value="">Days per week:</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="3">4</option>
              <option value="3">5</option>
              <option value="3">6</option>
              <option value="3">Every Day</option>
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
            name="description"
            defaultValue={plantInfo.description}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a brief description.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Plant Image</Form.Label>
          {/* update type="file" for proper file upload */}
          <Form.Control
            required
            placeholder="Please submit a valid url."
            type="text"
            name="imageURL"
            defaultValue={plantInfo.imageURL}
            onChange={handleChange}
          />
        </Form.Group>
        <Container className="d-flex justify-content-between">
          <button className="btn-custom btn-water-plant" type="submit">
            Submit
          </button>
          <button className="btn-custom btn-delete" onClick={onHide}>
            Cancel
          </button>
        </Container>
      </Form>
    </Container>
  );
}
