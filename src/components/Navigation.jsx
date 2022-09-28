import React from "react";
import "./Navigation.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Navigation(props) {
  const user = props.user;

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">Home Gardnr</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link href="/plants">Plant Library</Nav.Link>
            <Nav.Link href="/user_plants">My Garden +</Nav.Link>
            <Nav.Link href="/weather">Weather Info</Nav.Link>
            <Nav.Link href="#link" disabled>
              Hello, {user}!
            </Nav.Link>
            <Nav.Link href="/">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
//questions
//my plants button/add plants+ (how to do this?)
//navtext vs disabled - do we want the hello waldo to also be a link?
//do we want a plant search bar? - stretch?
//add brand image
//route names

//source code: https://www.codeply.com/p/zzFC5XoyUm
//https://getbootstrap.com/docs/5.0/utilities/flex/
//https://getbootstrap.com/docs/5.0/components/navbar/
//https://stackoverflow.com/questions/65253543/how-to-align-nav-items-to-the-right-in-bootstrap-5/65254055#65254055
