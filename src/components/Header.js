import React from "react";
import Typed from "react-typed";
function Header() {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <canvas></canvas>
        <h1>web development</h1>
        <Typed
          className="typed-text"
          strings={["web design", "web development"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">
          Contact me
        </a>
      </div>
    </div>
  );
}

export default Header;
