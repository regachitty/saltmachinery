import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import contactusimg from "../assets/images/tradingimage2.svg";
// import "../assets/css/"

const LeftRightContainer = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const images = gsap.utils.toArray(".left-content img");
    const rightElements = gsap.utils.toArray(".right-content .right-element");

    if (images.length === 0 || rightElements.length === 0) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".left-right-container",
        start: "top top",
        end: "+=300%",
        pin: true,
        scrub: 1, // Slight delay for smooth transition
        markers: false, // Set to true for debugging
      },
    });

    images.forEach((img, i) => {
      if (images[i + 1]) {
        tl.to(img, { opacity: 0, duration: 1 })
          .to(images[i + 1], { opacity: 1, duration: 1 }, "<")
          .to(
            rightElements,
            { yPercent: -(100 * (i + 1)), ease: "none", duration: 1 },
            "<"
          );
      }
    });
  }, []);

  return (
    <div className="left-right-container">
      <div className="left-container">
        <div className="left-content">
          <img src={contactusimg} alt="contact" />
          <img src={contactusimg} alt="contact" />
          <img src={contactusimg} alt="contact" />
        </div>
      </div>
      <div className="right-container">
        <div className="right-content">
          <div className="right-element">1</div>
          <div className="right-element">2</div>
          <div className="right-element">3</div>
        </div>
      </div>
    </div>
  );
};

export default LeftRightContainer;
