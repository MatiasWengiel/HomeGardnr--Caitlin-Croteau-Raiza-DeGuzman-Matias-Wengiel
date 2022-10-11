import React from "react";
import headerMed from "./images/gardnr-2500X450.png";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

export default function Header() {
  return (
    //removes padding
    <Container fluid className="p-0">
      <Image src={headerMed} alt="garden" fluid />
    </Container>
  );
}
