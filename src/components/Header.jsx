import React from "react";
import Navigation from "./Navigation";
import headerSM from "./images/gardnr-2500X600.png";
import headerLG from "./images/gardnr-2500X1000.png";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Header(props) {
  return (
    //remove padding
    <Container fluid className="p-0">
      <Image src={headerLG} alt="garden" fluid />
    </Container>
  );
}

//style={ { height: "100px" } }
