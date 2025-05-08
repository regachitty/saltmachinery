import React from "react";
import buildImg1 from "../assets/images/black-build-img1.svg";
const ReadyToBuild = () => {
  return (
    <>
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
    </>
  );
};

export default ReadyToBuild;
