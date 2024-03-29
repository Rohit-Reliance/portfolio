import React from "react";
import netflix from "../images/netflix.jpg";
import workinprogess from "../images/workinprogress.jpg";
// Font awsome

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

// Popupbox

import { PopupboxManager, PopupboxContainer } from "react-popupbox";

import "react-popupbox/dist/react-popupbox.css";

//Netflix-1
const Portfolio = () => {
  const popupfornetflix = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={workinprogess}
          alt="work in progess"
        />
        <p>First</p>
        <b>Github:</b>{" "}
        <a className="hyper-link" onClick={() => window.open("www.google.com")}>
          Google!
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfig = {
    titleBar: {
      enable: false,
      text: "Netflix Services 1",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Netflix-2
  const popupfornetflix2 = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={workinprogess}
          alt="work in progress"
        />
        <p>Second</p>
        <b>Github:</b>{" "}
        <a className="hyper-link" onClick={() => window.open("www.google.com")}>
          Google!
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };
  const popupboxConfig2 = {
    titleBar: {
      enable: false,
      text: "Raju",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  //Netflix - 3;
  const popupfornetflix3 = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={workinprogess}
          alt="work in progess"
        />
        <p>Third</p>
        <b>Github:</b>{" "}
        <a className="hyper-link" onClick={() => window.open("www.google.com")}>
          Google!
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfig3 = {
    titleBar: {
      enable: true,
      text: "Amazon",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  //Netflix - 4;
  const popupfornetflix4 = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={workinprogess}
          alt="work in progress"
        />
        <p>Netflix 4</p>
        <b>Github:</b>{" "}
        <a className="hyper-link" onClick={() => window.open("www.google.com")}>
          Google!
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfig4 = {
    titleBar: {
      enable: true,
      text: "Netflix Services",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Client</h1>
        <div className="image-box-wrapper justify-content-center">
          <div className="portfolio-image-box" onClick={popupfornetflix}>
            <img
              className="portfolio-image"
              src={workinprogess}
              alt="hotstar"
            />
            <div className="overflow" />
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={popupfornetflix2}>
            <img
              className="portfolio-image"
              src={workinprogess}
              alt="hotstar"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={popupfornetflix3}>
            <img
              className="portfolio-image"
              src={workinprogess}
              alt="netflix"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={popupfornetflix4}>
            <img
              className="portfolio-image"
              src={workinprogess}
              alt="netflix"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfig} />
      <PopupboxContainer {...popupboxConfig2} />
      <PopupboxContainer {...popupboxConfig3} />
      <PopupboxContainer {...popupboxConfig4} />
    </div>
  );
};

export default Portfolio;
