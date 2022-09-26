import { React, useState } from "react";
import "./PlantForm.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

export default function PlantForm(props) {
  const [validated, setValidated] = useState(false);
  const [plantInfo, setPlantInfo] = useState({
    genericName: "",
    specificName: "",
    season: "",
    maturity: "",
    spacing: "",
    depth: "",
    maxTemp: "",
    minTemp: "",
    sunlight: "",
    water: "",
    description: "",
  });

  const handleChange = (event) => {
    // console.log("in handleChange");
    // console.log({ ...plantInfo, [event.target.name]: event.target.value });
    // console.log(event);
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
    // console.log(plantInfo);

    //rediret or...?
    return axios
      .post("/api/plants", plantInfo)
      .then((response) => {
        console.log(response);
        console.log(response.data);
      })
      .then(
        //resets form
        setPlantInfo({
          genericName: "",
          specificName: "",
          season: "",
          maturity: "",
          spacing: "",
          depth: "",
          maxTemp: "",
          minTemp: "",
          sunlight: "",
          water: "",
          description: "",
        })
      )
      .catch((error) => {
        console.log(error);
      });
  };

  //noValidate cancels browser's default validation
  //preventDefault prevents the submit button from refreshing the page

  return (
    <Container
      className="p-3 ms-auto square border border-2 rounded text-start"
      style={{ width: "1000px" }}
    >
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-4 mt- ">
          <Form.Group as={Col} controlId="formGenericName">
            <Form.Label>Generic Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Generic Name"
              name="genericName"
              defaultValue={plantInfo.genericName}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formSpecificName">
            <Form.Label>Specific Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Specific Name"
              name="specificName"
              defaultValue={plantInfo.specificName}
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
            <Form.Control
              required
              as="select"
              name="water"
              defaultValue={plantInfo.water}
              onChange={handleChange}
            >
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
            name="description"
            defaultValue={plantInfo.description}
            onChange={handleChange}
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

//onchange info:
//best guide:
//https://www.agirl.codes/complete-guide-build-react-forms-with-usestate-hook
//https://stackoverflow.com/questions/34006333/cant-type-in-react-input-text-field
//^using defaultValue vs Value
//https://www.brainstormcreative.co.uk/react-js/react-bootstrap-form-part-2-validation-and-errors/
//more info on validations if we want it:
//https://dev.to/alecgrey/controlled-forms-with-front-and-backend-validations-using-react-bootstrap-5a2
//https://dev.to/heyjoshlee/using-the-usestate-hook-and-working-with-forms-in-react-js-m6b

//as="select"
//https://www.pluralsight.com/guides/how-to-get-select-element's-value-in-react-bootstrap
//https://stackoverflow.com/questions/54831454/validation-for-select-elements-of-react-bootstrap-are-mis-aligned

//questions:
//it's not grabbing the values despite using state spread??
//defaultValue vs Value
//this - uncontrolled components?
//why does the console log disappear even why the reset is gone?
