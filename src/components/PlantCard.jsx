import { Card } from "react-bootstrap";
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
        boxShadow: "0 0 10px rgb(0 0 0 / 40%)",
        border: "none",
      }}
      className="m-4 p-0 text-center"
    >
      {/* If there is a waterStatus, render the corresponding icon in the small card size */}
      {waterStatus && renderIcon(waterStatus, "small card")}
      <Card.Img
        className="mb-2"
        variant="top"
        src={picture}
        alt={altText}
        style={{
          height: "150px",
          border: "1px solid gray",
          boxShadow: "rgb(0 0 0 / 20%) 0px 10px 10px",
        }}
      />
      <Card.Title className="text-center">{plant}</Card.Title>
      <Card.Body className="p-1">
        <Card.Text className="mx-2 my-0 d-flex justify-content-between">
          {lastWatered && <span>Last watered: </span>}
          {lastWatered}
        </Card.Text>
        <Card.Text className="mx-2 my-0 mt-0 mb-0 d-flex justify-content-between">
          {nextWatering && <span>Next Watering: </span>}
          {nextWatering}
        </Card.Text>
        <button
          className="btn-custom btn-view-plant mt-3 mb-3"
          onClick={handleClick}
        >
          View Plant
        </button>
      </Card.Body>
    </Card>
  );
}
