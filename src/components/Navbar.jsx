import React from "react";
import "./Navbar.scss";

export default function Navbar(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <a class="navbar-brand" href="/">
        Home Gardnr Brand Image
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse flex-grow-1 text-right"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav ms-auto flex-nowrap">
          <div class="nav-item navbar-text m-2 menu-item nav-active">
            Hello, User!
          </div>
          <a class="nav-item nav-link m-2 menu-item nav-active" href="/">
            My Plants
          </a>
          <a class="nav-item nav-link m-2 menu-item nav-active" href="/">
            Add Plants
          </a>
          <a class="nav-item nav-link m-2 menu-item nav-active" href="/">
            Weather
          </a>
          <a class="nav-item nav-link m-2 menu-item nav-active" href="/">
            Logout
          </a>
        </div>
      </div>
    </nav>
  );
}

//source code: https://www.codeply.com/p/zzFC5XoyUm
//https://getbootstrap.com/docs/5.0/utilities/flex/
//https://getbootstrap.com/docs/5.0/components/navbar/
//https://stackoverflow.com/questions/65253543/how-to-align-nav-items-to-the-right-in-bootstrap-5/65254055#65254055

//fix side margins
//fix colour
//connect user
//add brand image
//add background image - to header? Where do we add header in html?
