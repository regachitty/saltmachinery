import React, { useState, useRef } from "react";
import WhiteNav from "../CommonComponent/WhiteNav";
import "../assets/css/ourVideo.css";
import ProductSlider from "../Component/Carousel.jsx";
import buildImg1 from "../assets/images/black-build-img1.svg";
import OurViF from "../Component/VideoFile.jsx";
import video1 from "../videos/pondavideo.mp4";
import "react-html5video/dist/styles.css";
import { DefaultPlayer as Video } from "react-html5video";
import "../assets/css/singleVideoFile.css";
import Footer from "../CommonComponent/Footer.jsx";
const OurVideoPage = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRefs = useRef([]);
  const videosfile = [video1];
  const videofile2 = [video1];

  const handlePlays = (index) => {
    setCurrentVideoIndex(index);
  };
  return (
    <>
      <WhiteNav />
      <div className="row" id="our-video-page">
        <div className="col-lg-12 col-12 mt-lg-2 mt-2">
          <div className="runing-text">
            {Array(6)
              .fill("our videos.")
              .map((item, index) => (
                <h2
                  key={index}
                  className={`runing-text-style ${
                    index % 2 === 1 ? "transparent" : ""
                  } text-uppercase`}
                >
                  {item}
                </h2>
              ))}
          </div>
        </div>
        <div className="col-lg-12 col-12 mb-3">
          <hr className="hr-border-line-conatctUs" />
        </div>
        <div className="col-lg-12 col-12 mb-3 d-flex ps-5 ">
          <p className="contact-para-style  pt-lg-3 pt-3 pe-4">
            Discover the Ultimate Video Library for Salt Refinery Excellence!
          </p>
          <div className="col-lg-3 d-flex justify-content-evenly align-items-start mt-3">
            {" "}
            <div className="vl"></div>
          </div>
          <div className="col-lg-3 d-flex justify-content-evenly align-items-start mt-3">
            {" "}
            <div className="vl"></div>
          </div>
          <div className="col-lg-3 d-flex justify-content-evenly align-items-start mt-3">
            {" "}
            <div className="vl"></div>
          </div>
        </div>
        <div className="video-gallery px-5">
          {videosfile.map((video, index) => (
            <div className="video-item" key={index}>
              <div className="video-container">
                {/* Only show the currently selected video */}
                {currentVideoIndex === index && (
                  <Video
                    ref={(el) => (videoRefs.current[index] = el)} // Store each video in the refs array
                    style={{ width: "100%" }}
                    controls={[
                      "PlayPause",
                      "Seek",
                      "Time",
                      "Volume",
                      "Fullscreen",
                    ]}
                    onPlay={() => handlePlays(index)} // Ensure only one video plays at a time
                  >
                    <source src={video} type="video/mp4" />
                  </Video>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="col-12 col-md-9 col-lg-9 text-center d-flex justify-content-center mx-auto mt-5">
          <p className="ourvideo-para-text-style text-center mx-3">
            Welcome to our videos page, where innovation drives performance.
            Explore a curated selection of videos showcasing advanced salt
            processing machinery in action. From seamless installations and
            expert maintenance tips to cutting-edge solutions pushing efficiency
            boundaries, these videos reveal how Shriraam Engineering transforms
            the industry. Discover how our innovative technologies empower
            businesses worldwide to achieve unparalleled productivity,
            operational excellence, and a competitive edge in salt processing.
          </p>
        </div>

        <OurViF />
        <div className="video-gallery px-5">
          {videofile2.map((video, index) => (
            <div className="video-item" key={index}>
              <div className="video-container">
                {/* Only show the currently selected video */}
                {currentVideoIndex === index && (
                  <Video
                    ref={(el) => (videoRefs.current[index] = el)} // Store each video in the refs array
                    style={{ width: "100%" }}
                    controls={[
                      "PlayPause",
                      "Seek",
                      "Time",
                      "Volume",
                      "Fullscreen",
                    ]}
                    onPlay={() => handlePlays(index)} // Ensure only one video plays at a time
                  >
                    <source src={video} type="video/mp4" />
                  </Video>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="slider-styles mb-lg-5 mb-5 pb-lg-5 pb-5">
          <div className="text-section my-lg-5 my-5">
            <h6 className="text-uppercase title-of-about ps-lg-2 ps-2 text-lg-center text-center">
              <span className="product-heading-text-color"></span>Our other
              Products
            </h6>
            <h1 className="display-3 product-heading text-uppercase fw-semibold text-lg-center text-center">
              Simplyfying Salt <br /> production
            </h1>
          </div>
          <ProductSlider className="px-5" />
        </div>
        <div className="contactComponent px-3">
          <div className="contactcon-bg-cl pt-lg-5 pt-5  mt-lg-5 mt-5 mb-lg-3 mb-3">
            <div className="container">
              <div className="row ">
                <div className="col-md-6 col-sm-12 col-12 pt-lg-4 pt-4 position-relative float-start">
                  <img
                    src={buildImg1}
                    alt="build-img"
                    className="img-fluid black-half-build-img"
                  />
                </div>

                <div className=" col-md-6 col-12 pt-lg-4 pt-4">
                  <h6 className="text-uppercase title-of-contact  text-lg-start text-start albert-sans-400">
                    <span className="no1"> 00.</span> Contact Us
                  </h6>
                  <h4 className="sub-of-contact text-white text-uppercase fw-bolder text-md-start albert-sans-400 text-start video-contact-banner-style w-50 mt-3">
                    Ready to Build Your Dream Project?
                  </h4>
                  <button
                    type="submit"
                    className="getTouch-btn px-lg-5 px-5  py-lg-3 py-3 mb-lg-0 mb-4 lbert-sans-400 mt-2 "
                  >
                    Contact us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OurVideoPage;
