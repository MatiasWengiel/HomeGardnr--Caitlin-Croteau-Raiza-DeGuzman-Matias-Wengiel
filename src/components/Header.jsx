import React from "react";
import Navigation from "./Navigation";
import header from "./images/Gardnr-header-1.png";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Header(props) {
  return (
    //remove padding
    <Container fluid className="p-0">
      <Row>
        <Navigation user="Waldo" />
      </Row>
      <Row>
        <Image src={header} alt="garden" fluid />
      </Row>
    </Container>
  );
}
