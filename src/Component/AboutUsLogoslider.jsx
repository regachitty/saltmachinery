import React from "react";
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
// Logos array with imports directly in it
const logos = [clientLogo1, clientLogo2, clientLogo3, clientLogo4, clientLogo5];
const logos2 = [
  clientLogo6,
  clientLogo7,
  clientLogo8,
  clientLogo9,
  clientLogo10,
];
const AboutUsLogoSlider = () => {
  return (
    <div className="container">
      <div className="aboutlogos">
        {Array(2).fill(
          <div className="aboutlogo-slider">
            {logos.map((logo, index) => (
              <img key={index} src={logo} alt={`aboutlogoclient${index + 1}`} />
            ))}
          </div>
        )}
      </div>
      <div className="aboutlogos">
        {Array(2).fill(
          <div className="aboutlogo-slider">
            {logos2.map((logos2, index) => (
              <img
                key={index}
                src={logos2}
                alt={`aboutlogoclient${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutUsLogoSlider;
