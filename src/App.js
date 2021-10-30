import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";

import Navbar from "./components/Navbar";

import Header from "./components/Header";

import Aboutme from "./components/Aboutme";

import Services from "./components/Services";

import Experience from "./components/Experience";

import Portfolio from "./components/Portfolio";

import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Particles
        params={{
          className: "particles-canvas",
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00",
              },
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
      <Aboutme />
      <Services />
      <Experience />
      <Portfolio />
      <Testimonials />
    </>
  );
}

export default App;
