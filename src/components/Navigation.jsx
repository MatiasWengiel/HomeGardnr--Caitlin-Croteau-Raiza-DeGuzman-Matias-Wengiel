import { useState, useEffect } from "react";
import "../styles/Navigation.scss";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import brand1 from "../icons/happy-plant.png";
import brand2 from "../icons/dry-soil.png";

export default function Navigation(props) {
  const user = props.user;
  const [navbar, setNavbar] = useState(false);
  const [navText, setNavText] = useState(false);
  const [navBrand, setNavBrand] = useState(false);

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
  //will need to do for logo too
  useEffect(() => {
    changeNavbar();
    window.addEventListener("scroll", changeNavbar);
  });

  const navTextStyle = (navText) => {
    return navText ? { color: "black" } : { color: "white" };
  };

  // const navBarColor = () => {
  //   if (navbar) {
  //     return { "color: success" };
  //   } else {
  //     return { color: white };
  //   }
  // };

  return (
    <Navbar
      className="custom-navbar"
      expand="lg"
      fixed="top"
      bg={navbar ? "success" : ""}
      // style={navBarColor}
    >
      <Container>
        <Navbar.Brand className="nav-text" href="/">
          GARDNR
          <Image src={navBrand ? brand1 : brand2} alt="Gardnr" width="50px" />
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
            <Nav.Link className="nav-text" href="/plants">
              Plant Library
            </Nav.Link>
            <Nav.Link className="nav-text" href="/my_garden">
              My Garden
            </Nav.Link>
            <Nav.Link className="nav-text" href="/weather">
              Weather Info
            </Nav.Link>
            <Nav.Link className="nav-text" href="/">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

//https://dev.to/cesareuseche/react-navbar-change-background-color-on-scroll-react-js-gatsby-2a39#:~:text=To%20create%20the%20rendering%20of,the%20changeBackground%20function%2C%20like%20so.

///  bg="light"
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
