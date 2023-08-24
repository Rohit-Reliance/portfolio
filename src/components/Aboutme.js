import React from "react";
import author from "../logo/myphoto-copy.jpg";

function Aboutme() {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="Author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About Me</h1>
          <p>
            Rohit has 8+ years of experience in Various technologies. He has
            been part of Implementation, Application Maintenance, Upgrade
            projects for clients across varied domains. His skills include
            Angular, ReactJS, SAP UI5, FIORI, JavaScript, ODATA, CSS, HTML5.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
