import React from "react";
import headerSM from "./images/gardnr-2500X600.png";
import headerLG from "./images/gardnr-2500X1000.png";
import headerMed from "./images/gardnr-2500X450.png";
import headerTiny from "./images/gardnr-2500X300.png";
import headerBest from "./images/gardnr-2500X350.png";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";


export default function Header(props) {
  return (
    //removes padding
    <Container fluid className="p-0">
      <Image src={headerMed} alt="garden" fluid />
    </Container>
  );
}

