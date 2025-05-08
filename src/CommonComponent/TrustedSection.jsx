import React, { useState, useEffect } from "react";
import "../assets/css/logossliders.css";
import "../assets/css/aboutlogoSlider.css";
import clientLogo1 from "../assets/images/foodprogram.svg";
import clientLogo2 from "../assets/images/micronutrient.svg";
import clientLogo3 from "../assets/images/gerrylogo.svg";
import clientLogo4 from "../assets/images/usaid.svg";
import clientLogo5 from "../assets/images/uniceflogo.svg";
import clientLogo6 from "../assets/images/jpaliconlogo.svg";
import clientLogo7 from "../assets/images/icicddlogo.svg";
import clientLogo8 from "../assets/images/gainlogo.svg";
import clientLogo9 from "../assets/images/planlogo.svg";
import clientLogo10 from "../assets/images/dai.svg";
import leftArrow from "../assets/images/leftArrow.svg";
import rightArrow from "../assets/images/rightArrow.svg";

const initialLogos = [
  clientLogo1,
  clientLogo2,
  clientLogo3,
  clientLogo4,
  clientLogo5,
  clientLogo6,
  clientLogo7,
  clientLogo8,
  clientLogo9,
  clientLogo10,
];
const TrustedSection = () => {
  const [logos, setLogos] = useState(initialLogos);
  const [visibleCount, setVisibleCount] = useState(4); // Default: Show 4 images

  // Dynamically adjust the number of visible images based on screen width
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 500) {
        setVisibleCount(1); // Show 1 image
      } else if (window.innerWidth >= 500 && window.innerWidth < 600) {
        setVisibleCount(2); // Show 2 images
      } else if (window.innerWidth >= 600 && window.innerWidth < 800) {
        setVisibleCount(3); // Show 3 images
      } else {
        setVisibleCount(4); // Show all images (4 by default)
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  // Move Right: Shift first logo to the last position
  const moveRight = () => {
    setLogos((prevLogos) => [...prevLogos.slice(1), prevLogos[0]]);
  };

  // Move Left: Shift last logo to the first position
  const moveLeft = () => {
    setLogos((prevLogos) => [
      prevLogos[prevLogos.length - 1],
      ...prevLogos.slice(0, prevLogos.length - 1),
    ]);
  };

  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-lg-12 col-12 mt-5 mb-5">
            <h2 className="text-center text-uppercase trust-text my-5 albert-sans">
              Trusted By World’s Best
            </h2>
            <p className="text-center trust-text-styles mx-auto">
              Shriraam Engineering has successfully rooted a strong presence in
              the global arena with decades of experience in designing and
              developing cutting edge salt refining solutions. We offer an
              extensive range of projects and innovative process solutions to
              refine salt under diverse geographical conditions. So far We have
              installed salt plants in more than 20 countries to refine the
              highest quality of salt.
            </p>
          </div>
        </div>
      </div>
      <div className="carousel-container mb-5">
        {/* Left Arrow */}
        <button className="arrow left-arrow" onClick={moveLeft}>
          <img src={rightArrow} alt="Left" />
        </button>

        {/* Logo Wrapper */}
        <div className="logo-wrapper">
          {logos.slice(0, visibleCount).map((logo, index) => (
            <div key={index} className="logo-container">
              <img className="logo-img" src={logo} alt={`Logo ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="arrow right-arrow" onClick={moveRight}>
          <img src={leftArrow} alt="Right" />
        </button>
      </div>
    </>
  );
};

export default TrustedSection;
