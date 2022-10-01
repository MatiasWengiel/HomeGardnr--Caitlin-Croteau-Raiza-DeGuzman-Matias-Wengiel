import { Card, Button, Image } from "react-bootstrap";
import WaterIcon from "./WaterIcon";

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

  //Icons created by Freepik - Flaticon
  const dryIcon = require("../icons/dry-soil.png");
  const wateredIcon = require("../icons/happy-plant.png");

  //Renders the correct icon for water status
  const renderIcon = (status) => {
    if (status === "watered") {
      return <WaterIcon src={wateredIcon} borderColor="green" />;
    }
    if (status === "needs water") {
      return <WaterIcon src={dryIcon} borderColor="red" />;
    }
  };

  return (
    <Card
      style={{
        width: "15rem",
      }}
      className="m-2 p-2 text-center"
    >
      {/* If there is a waterStatus, render the corresponding icon */}
      {waterStatus && renderIcon(waterStatus)}
      <Card.Img variant="top" src={picture} alt={altText} />
      <Card.Body className="p-0">
        <Card.Title className="text-center">{plant}</Card.Title>
        <Card.Text className="m-0">
          {lastWatered && `last watered: ${lastWatered}`}
        </Card.Text>
        <Card.Text className="m-0">
          {nextWatering && `next watering: ${nextWatering}`}
        </Card.Text>
        <Button style={{ border: "none" }} onClick={handleClick}>
          View Plant
        </Button>
      </Card.Body>
    </Card>
  );
}
