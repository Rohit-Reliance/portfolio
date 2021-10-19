import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faFileCode, faDesktop } from "@fortawesome/free-solid-svg-icons";
const Services = () => {
  return (
    <div className="services">
      <h1 className="py-5">My Services</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon icon={faDesktop} size="2x" className="icon" />
              </div>
              <h3>Web Design</h3>
              <p>Design each project and focus on the expectation</p>
            </div>
          </div>
          {/* - */}

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon icon={faFileCode} size="2x" className="icon" />
              </div>
              <h3>Web Development</h3>
              <p>Your website will be build with new proven technologies</p>
            </div>
          </div>
          {/* - */}

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon icon={faGoogle} size="2x" className="icon" />
              </div>
              <h3>Google ads.</h3>
              <p>
                Your service or product will appear at the top of the Google
                Search
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
