import React from "react";
import logo from "../logo/myphoto-copy-3.jpg";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="logo-navbar" src={logo} alt="logo"></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link smooth={true} to="home" className="nav-link" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="about"
                offset={-110}
                duration={500}
                className="nav-link"
                href="#"
              >
                About me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="services"
                offset={-110}
                duration={500}
                className="nav-link"
                href="#"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="experience"
                offset={-70}
                duration={500}
                className="nav-link"
                href="#"
              >
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="portfolio"
                offset={-50}
                duration={500}
                className="nav-link"
                href="#"
              >
                Client
              </Link>
            </li>
            <li className="nav-item">
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
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
