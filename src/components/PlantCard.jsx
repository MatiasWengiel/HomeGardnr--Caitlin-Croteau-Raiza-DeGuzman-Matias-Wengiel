import { Card, Button } from "react-bootstrap";

export default function PlantCard(props) {
  const { plant, picture, altText, waterStatus, lastWatered, nextWatering } = {
    ...props,
  };
  const borderType = (status) => {
    if (status === "watered") {
      return "#198754"; //Matches the green from the Bootstrap button. Should we make the button change color too?
    }
    if (status === "should water") {
      return "gold";
    }
    if (status === "urgent water") {
      return "red";
    }
  };
  return (
    <Card
      style={{
        width: "15rem",
        height: "17rem",
        padding: "0.5rem",
        borderColor: borderType(waterStatus),
      }}
    >
      <Card.Img variant="top" src={picture} alt={altText} />
      <Card.Body className="p-0">
        <Card.Title className="m-0">{plant}</Card.Title>
        <Card.Text className="m-0">last watered: {lastWatered}</Card.Text>
        <Card.Text className="m-0">next watering: {nextWatering}</Card.Text>
        <Button
          style={{ backgroundColor: borderType(waterStatus), border: "none" }}
        >
          View Plant
        </Button>
      </Card.Body>
    </Card>
  );
}
