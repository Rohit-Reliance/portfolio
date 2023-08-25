import React from "react";
import { Link } from "react-scroll";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4 col-sm-6">
            <div className="d-flex">
              <p>Office: Uruli-Kanchan, Pune</p>
            </div>
            <div className="d-flex">
              <a href="tel:8928231321">+91 8928231321</a>
            </div>
            <div className="d-flex">
              <p>darwaderohit@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link smooth={true} to="home" className="footer-nav" href="#">
                  Home
                </Link>
                <br />
                <Link
                  smooth={true}
                  to="about"
                  offset={-110}
                  duration={500}
                  className="footer-nav"
                  href="#"
                >
                  About me
                </Link>
                <br />
                <Link
                  smooth={true}
                  to="services"
                  offset={-110}
                  duration={500}
                  className="footer-nav"
                  href="#"
                >
                  Services
                </Link>
              </div>
              <div className="col">
                <Link
                  smooth={true}
                  to="experience"
                  offset={-70}
                  duration={500}
                  className="footer-nav"
                  href="#"
                >
                  Experience
                </Link>
                <br />
                <Link
                  smooth={true}
                  to="portfolio"
                  offset={-50}
                  duration={500}
                  className="footer-nav"
                  href="#"
                >
                  Client
                </Link>
                <br />
                <Link
                  smooth={true}
                  to="contacts"
                  offset={-40}
                  duration={500}
                  className="footer-nav"
                  href="#"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://www.facebook.com/"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://www.twitter.com/"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <LinkedinShareButton
                url={"https://www.linkedin.com/"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp; Rohit Arun Darwade | All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
