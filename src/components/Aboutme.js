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
            Rohit Darwade has been with Accenture SAP teams since October 2019.
            He has 5+ years of experience in SAP as SAP FIORI and UI5 Developer.
            He has been part of Implementation, Application Maintenance, Upgrade
            projects for clients across varied domains (Electronics, Oil-Gas,
            Automotive) His SAP skills include SAP UI5, FIORI, JavaScript,
            ODATA, CSS, HTML5, Angular 6, Worked with various applications SCM,
            CRM, HR, FI, PM, PP, PPM, EPPM, EWM, HVC modules of SAP Rohit
            Darwade holds a Bachelor’s degree in Computer Science
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
