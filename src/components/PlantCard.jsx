import { Card, Button } from "react-bootstrap";

export default function PlantCard(props) {
  const { plant, picture, altText, waterStatus, lastWatered, nextWatering } = {
    ...props,
  };
  const borderType = (status) => {
    //Returns the color, or black if no waterStatus passed
    if (status === "watered") {
      return "#198754"; //The bootstrap green
    }
    if (status === "should water") {
      return "gold";
    }
    if (status === "urgent water") {
      return "red";
    }
    return "gray";
  };
  return (
    <Card
      style={{
        width: "15rem",
        borderColor: borderType(waterStatus),
      }}
      className="p-2 text-center"
    >
      <Card.Img variant="top" src={picture} alt={altText} />
      <Card.Body className="p-0">
        <Card.Title className="m-0 text-center">{plant}</Card.Title>
        <Card.Text className="m-0">
          {lastWatered && `last watered: ${lastWatered}`}
        </Card.Text>
        <Card.Text className="m-0">
          {nextWatering && `next watering: ${nextWatering}`}
        </Card.Text>
        <Button
          style={{ backgroundColor: borderType(waterStatus), border: "none" }}
        >
          View Plant
        </Button>
      </Card.Body>
    </Card>
  );
}
