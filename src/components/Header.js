import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

function Header() {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <canvas></canvas>
        <h1>Web Developer</h1>
        <Typed
          className="typed-text"
          strings={["Web design", "Web development", "SAP Fiori", "SAP UI5"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">
          <Link
            smooth={true}
            to="contacts"
            offset={-40}
            duration={500}
            className="nav-link"
            href="#"
          >
            Contact
          </Link>
        </a>
      </div>
    </div>
  );
}

export default Header;
