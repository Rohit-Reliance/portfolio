import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import avatar1 from "../images/avatars/avatar-1.png";
import avatar2 from "../images/avatars/avatar-2.png";
import avatar3 from "../images/avatars/avatar-3.png";
import avatar4 from "../images/avatars/avatar-4.png";

const TestimonialsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <>
        <img src={avatar1} alt="avatar-1" />
        <div className="myCarousel">
          <h3>Rohit</h3>
        </div>
      </>
      <>
        <img src={avatar2} alt="avatar-2" />
        <div className="myCarousel">
          <h3>Rakesh</h3>
        </div>
      </>
      <>
        <img src={avatar3} alt="avatar-3" />
        <div className="myCarousel">
          <h3>Roman</h3>
        </div>
      </>
      <>
        <img src={avatar4} alt="avatar-4" />
        <div className="myCarousel">
          <h3>Ranjit</h3>
        </div>
      </>
    </Carousel>
  );
};

export default TestimonialsCarousel;
