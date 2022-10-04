import WaterIcon from "../components/WaterIcon";
//Icons created by Freepik - Flaticon
const dryIcon = require("../icons/dry-soil.png");
const wateredIcon = require("../icons/happy-plant.png");

//Renders the correct icon for water status
export const renderIcon = (status, cardSize) => {
  if (status === "watered") {
    return <WaterIcon src={wateredIcon} borderColor="green" cardSize={cardSize} />;
  }
  if (status === "needs water") {
    return <WaterIcon src={dryIcon} borderColor="red" cardSize={cardSize} />;
  }
};
