import React from "react";
import "../assets/css/logoSlider.css";
// import clientLogo1 from "../assets/images/clientlogo1.svg";
// import clientLogo2 from "../assets/images/clientlogo2.svg";
// import clientLogo3 from "../assets/images/clientlogo3.svg";
// import clientLogo4 from "../assets/images/clientlogo4.svg";
// import clientLogo5 from "../assets/images/clientlogo5.svg";
// import clientLogo6 from "../assets/images/clientlogo6.svg";
// import clientLogo7 from "../assets/images/clientLogo7.svg";
import clientLogo1 from "../assets/images/southarabia.svg";
import clientLogo2 from "../assets/images/egypt (2).svg";
import clientLogo3 from "../assets/images/abudhabi.svg";
import clientLogo4 from "../assets/images/SaudiArabialogo.svg";
import clientLogo5 from "../assets/images/philippieslogos.svg";
import clientLogo6 from "../assets/images/nesrlogo.svg";
import clientLogo7 from "../assets/images/salmongrouplogo.svg";
import clientLogo8 from "../assets/images/namibia.svg";
import clientLogo9 from "../assets/images/salangola.svg";
import clientLogo10 from "../assets/images/angolalogo.svg";
import clientLogo11 from "../assets/images/cameroon.svg";
import clientLogo12 from "../assets/images/ethiopia.svg";

// Logos array with imports directly in it
const logos = [
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
  clientLogo11,
  clientLogo12,
];

const LogoSlider = () => {
  return (
    <div className="logos">
      <div className="logo-slider">
        {logos.concat(logos).map((logo, index) => (
          <div className="logo-with-lines" key={index}>
            <img src={logo} alt={`logoclient${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
