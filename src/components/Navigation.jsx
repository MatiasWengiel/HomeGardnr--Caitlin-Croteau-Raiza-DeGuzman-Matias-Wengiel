import { useState, useEffect } from "react";
import "../styles/Navigation.scss";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import brand1 from "../icons/happy-plant.png";
import brand2 from "../icons/dry-soil.png";
import NavLink from "./NavLink";

// Add imports
import NavDropdown from 'react-bootstrap/NavDropdown';
import Banner from "./Banner";


export default function Navigation(props) {
  const user = props.user;
  const [navbar, setNavbar] = useState(false);
  const [navText, setNavText] = useState(false);
  const [navBrand, setNavBrand] = useState(false);

  // Capture event selected in Weather Events dropdown menu. Default false.
  // State changes on click when user selects a weather event

  const { bannerMessage, setBannerMessage } = props;

  
  const changeNavbar = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 5) {
      setNavbar(true);
      setNavText(true);
      setNavBrand(true);
    } else {
      setNavbar(false);
      setNavText(false);
      //update this to false if we want 2 brand images
      setNavBrand(true);
    }
  };

  // Function to manage what happens on click selecting a weather event
  // Display Banner comp with corresponding event message
  const handleSelect = (eventKey) => {

    const highHeat = `TAKE ACTION -- 🥵🥵 Extreme heat expected for the day. Temperatures as high as 35 C expected.`;

    const extremeCold = `TAKE ACTION -- 🥶🥶 Freezing temperatures expected for the day. Temperatures could drop as low as -20 C.`;

    const heavyRain = `HEAVY RAIN -- 🌧🌧 Heavy rainfall expected today, as much as 30 mm.`;

    const sharkNado = `SHARKS -- 🦈🦈 Do not swim in the flooded, shark-infested streets`

    if (eventKey == "heat") {
      setBannerMessage((prev) => [...prev, highHeat])
    }

    if (eventKey == "polar") {
      setBannerMessage((prev) => [...prev, extremeCold]);
    }

    if (eventKey == "rain") {
      setBannerMessage((prev) => [...prev, heavyRain]);
    }

    if (eventKey == "shark-nado") {
      setBannerMessage((prev) => [...prev, sharkNado]);
    }
  };

  useEffect(() => {
    changeNavbar();
    window.addEventListener("scroll", changeNavbar);
  });

  const navbarBackground = navbar ? "navbar-scroll" : "custom-navbar";

  //update this if we want two logos
  const navbarBrand = navBrand ? brand1 : brand2;

  //do we want the text color to change?
  //have left waldo as a link as we may want it to eventually lead to user settings?

  return (
    <Navbar className={navbarBackground} expand="lg" fixed="top">
      <Container>
        <Navbar.Brand className="nav-text" href="/">
          GARDNR
          <Image src={navbarBrand} alt="Gardnr" width="50px" />
          {/* <img
              src={brand}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav flex-grow-1 justify-content-evenly" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* adds padding of 0.5rem to right side of navbar.text */}
            <Navbar.Text className="nav-text pe-2">Hello, {user}!</Navbar.Text>
            <NavLink href={"/plants"} label={"Plant Library"} />
            <NavLink href={"/my_garden"} label={"My Garden"} />
            <NavLink href={"/weather"} label={"Weather Info"} />

            {/*  */}
            <NavDropdown title="Weather Events" id="nav-dropdown" className="nav-text" onSelect={handleSelect}>
              <NavDropdown.Item eventKey="heat">Heat</NavDropdown.Item>
              <NavDropdown.Item eventKey="polar">Polar</NavDropdown.Item>
              <NavDropdown.Item eventKey="rain">Rain</NavDropdown.Item>
              <NavDropdown.Item eventKey="shark-nado">
                Shark-nado 🦈
              </NavDropdown.Item>
            </NavDropdown>
            {/*  */}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
