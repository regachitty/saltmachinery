import React, { useState } from "react";
import saltRefineryImage1 from "../assets/images/66ef500eaa6a1f66f39cc582_img_7.avif.svg";
import saltRefineryImage2 from "../assets/images/abouttwoMemberImage.svg";
import WhiteNav from "../CommonComponent/WhiteNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/imageSlider.css";

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [saltRefineryImage1, saltRefineryImage2];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          {images.map((img, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === activeIndex ? "active" : ""
              }`}
            >
              <img
                src={img}
                className="d-block img-fluid mx-auto sticky-img"
                alt="Salt Refinery"
              />
            </div>
          ))}
        </div>

        {/* Left Arrow - Responsive */}
        <button
          className="carousel-control-prev custom-arrow"
          type="button"
          onClick={handlePrev}
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        {/* Right Arrow - Responsive */}
        <button
          className="carousel-control-next custom-arrow"
          type="button"
          onClick={handleNext}
        >
          <span className="carousel-control-next-icon"></span>
        </button>

        {/* Indicators */}
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={activeIndex === index ? "active" : ""}
            ></button>
          ))}
        </div>
      </div>
      {/* <div className="refinery-container px-3 px-md-5">
        <div className="row mt-5">
          <div className="col-lg-6 col-12">
           
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ImageSlider;
