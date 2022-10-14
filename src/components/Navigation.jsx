import { useState, useEffect } from "react";
import "../styles/Navigation.scss";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import brand1 from "../icons/happy-plant.png";
import NavLink from "./NavLink";
import NavDropdown from "react-bootstrap/NavDropdown";
import brand2 from "./images/GardnrOnly3.png";

export default function Navigation(props) {
  const user = props.user;
  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 5) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  
  useEffect(() => {
    changeNavbar();
    window.addEventListener("scroll", changeNavbar);
  });

  const navbarBackground = navbar ? "navbar-scroll" : "custom-navbar";

  return (
    <Navbar className={navbarBackground} expand="lg" fixed="top">
      <Container>
        <Navbar.Brand className="nav-text" href="/my_garden">
          <Image src={brand2} alt="Gardnr" width="90px" />
          <Image src={brand1} alt="happy-plant" width="50px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav flex-grow-1 justify-content-evenly" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* adds padding of 0.5rem to right side of navbar.text */}
            <Navbar.Text className="nav-text pe-2">Hello, {user}!</Navbar.Text>
            <NavLink href={"/plants"} label={"Plant Library"} />
            <NavLink href={"/my_garden"} label={"My Garden"} />
            <NavLink href={"/weather"} label={"Logout"} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
