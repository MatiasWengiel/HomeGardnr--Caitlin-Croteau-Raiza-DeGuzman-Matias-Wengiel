import { Image } from "react-bootstrap";

export default function WaterIcon(props) {
  const { src, borderColor, cardSize } = { ...props };

  const determineStyle = () => {
    if (cardSize === "small card") {
      return {
        width: "3rem",
        position: "absolute",
        marginTop: "2.5rem",
        marginLeft: "0.5rem",
        backgroundColor: "white",
        border: "2px solid",
        borderColor: borderColor,
      };
    } else if (cardSize === "large card") {
      return {
        width: "2rem",
        backgroundColor: "white",
        border: "2px solid",
        borderColor: borderColor,
      };
    }
  };

  return <Image src={src} roundedCircle={true} style={determineStyle()} />;
}
