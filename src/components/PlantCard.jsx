import { Card, Button, Image } from "react-bootstrap";
import { renderIcon } from "../helpers/cardHelpers";
import "../styles/Buttons.scss";

export default function PlantCard(props) {
  const {
    plant,
    picture,
    altText,
    waterStatus,
    lastWatered,
    nextWatering,
    handleClick,
  } = {
    ...props,
  };

  return (
    <Card
      style={{
        width: "15rem",
        // backgroundColor: "#D3D3D3",
        boxShadow: "0 0 10px rgb(0 0 0 / 40%)",
        border: "none",
      }}
      className="m-4 p-2 text-center"
    >
      <Card.Title className="text-center">{plant}</Card.Title>
      {/* If there is a waterStatus, render the corresponding icon in the small card size */}
      {waterStatus && renderIcon(waterStatus, "small card")}
      <Card.Img
        className="mb-2"
        variant="top"
        src={picture}
        alt={altText}
        style={{ height: "150px" }}
      />
      <Card.Body className="p-0">
        <Card.Text className="m-0">
          {lastWatered && `last watered: ${lastWatered}`}
        </Card.Text>
        <Card.Text className="m-0">
          {nextWatering && `next watering: ${nextWatering}`}
        </Card.Text>
        <button className="btn-custom btn-view-plant" onClick={handleClick}>
          View Plant
        </button>
      </Card.Body>
    </Card>
  );
}
