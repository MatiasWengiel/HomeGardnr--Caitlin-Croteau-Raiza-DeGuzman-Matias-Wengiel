import { React, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "./LargeCardUser.scss";
import Accordion from "react-bootstrap/Accordion";
import { useParams, useNavigate } from "react-router-dom";

export default function LargeCardUser(props) {
  const [data, setPlantData] = useState({});
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
    // Wed, May 11, 2022

    let formattedDate = ""
    formattedDate += days[dateObj.getDay()] + ", ";
    formattedDate += months[dateObj.getMonth()] + " ";
    formattedDate += dateObj.getDate() + ", ";
    formattedDate += dateObj.getFullYear();
    return formattedDate;
    // return new Date(inputDate).toDateString().split(" ").join(", ");
  }

  useEffect(() => {
    axios
      .get(`/api/user_plants/${id}`)
      // How to set the id so it's dynamic?
      .then((response) => {
        console.log(response.data[0]);
        setPlantData(response.data[0]);
        // return axios.get(`/api/plants`);
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteUserPlant = (id) => {
    axios.delete(`/api/user_plants/${id}`).then(() => {
      navigate("/user_plants");
    })
    .catch((error) => {
      console.log(error.message);
    });
  }

  return (
    <Container className="lcu-container">
      <p>This is the User Card</p>
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
          <div className="lcu-info">
            <Card.Title>{data.specific_name}</Card.Title>

            <div className="lcu-data">
              <h6>Planted Date:</h6>
              {/* <p>{new Date(data.planted_date).toDateString()}</p> */}
              <p>{formatDate(data.planted_date)}</p>
            </div>

            <div className="lcu-data">
              <h6>Last Watered:</h6>
              <p>{formatDate(data.last_watered_at)}</p>
            </div>

            <div className="lcu-data">
              <h6>When to Water Next:</h6>
              <p>{formatDate(data.when_to_water_next)}</p>
            </div>

            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>More Plant Details</Accordion.Header>
                <Accordion.Body>
                  <div className="lcu-data">
                    <h6>When To Plant:</h6>
                    <p>{data.when_to_plant}</p>
                  </div>

                  <div className="lcu-data">
                    <h6>Water Needs:</h6>
                    <p>{data.water_needs}</p>
                  </div>

                  <div className="lcu-data">
                    <h6>Sunlight Needs:</h6>
                    <p>{data.sunlight_needs}</p>
                  </div>

                  <div className="lcu-data">
                    <h6>Highest Temp Tolerance:</h6>
                    <p>{data.highest_temp_tolerance}</p>
                  </div>

                  <div className="lcu-data">
                    <h6>Lowest Temp Tolerance:</h6>
                    <p>{data.lowest_temp_tolerance}</p>
                  </div>

                  <div className="lcu-data">
                    <h6>Planting Distance:</h6>
                    <p>{data.how_far_apart_to_plant}</p>
                  </div>

                  <div className="lcu-data">
                    <h6>Time to Maturity:</h6>
                    <p>{data.how_long_until_mature}</p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <div className="lcu-buttons">
              <Button variant="primary">Water Plant</Button>
              <Button variant="danger" onClick={() => deleteUserPlant(id)}>Delete</Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
