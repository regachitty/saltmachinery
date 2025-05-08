import React from "react";
import WhiteNav from "../CommonComponent/WhiteNav.jsx";
import member from "../assets/images/saltWorkDesignImg1.svg";
import saltdesign2 from "../assets/images/saltWorkDesignimg2.svg";
import "../assets/css/saltworkDesign.css";
import buildImg1 from "../assets/images/black-build-img1.svg";
import Footer from "../CommonComponent/Footer.jsx";
const SaltDesign = () => {
  return (
    <>
      <WhiteNav />
      <div className="saltdesign-container">
        <div className="row">
          <div className="col-lg-12 col-12 mt-lg-2 mt-2">
            <div className="runing-text">
              {Array(6)
                .fill("Salt Works Design.")

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

          {/* Divider Line */}

          <div className="col-lg-12 col-12 mb-3">
            <hr className="hr-border-line-conatctUs" />
          </div>

          {/* Paragraph and Vertical Lines */}

          <div className="col-lg-6 col-12 mb-3">
            <p className="contact-para-style ps-lg-3 pt-lg-3 pt-3">
              Innovative Salt Works Design Solutions
            </p>
          </div>

          <div className="col-lg-6 col-12 d-flex justify-content-evenly align-items-center">
            <div className="vl"></div>

            <div className="vl"></div>

            <div className="vl"></div>
          </div>

          <div className="col-lg-12  col-12 mt-5">
            <img src={member} alt="aboutUsImg1" className="img-fluid" />
          </div>
          <div className="col-12 col-md-9 col-lg-9 text-center d-flex justify-content-center mx-auto mt-5">
            <p className="saltworkdesign-para-text-style text-center mx-3">
              Welcome to our videos page, where innovation drives performance.
              Explore a curated selection of videos showcasing advanced salt
              processing machinery in action. From seamless installations and
              expert maintenance tips to cutting-edge solutions pushing
              efficiency boundaries, these videos reveal how Shriraam
              Engineering transforms the industry. Discover how our innovative
              technologies empower businesses worldwide to achieve unparalleled
              productivity, operational excellence, and a competitive edge in
              salt processing.
            </p>
          </div>
          <div className="col-12 col-md-9 col-lg-9 text-center d-flex justify-content-center mx-auto mt-5">
            <p className="saltworkdesign-para-text-style text-center mx-3">
              Our commitment to excellence is evident in every project we
              undertake. By considering key aspects like soil quality,
              climatology, and biological factors, we deliver solutions tailored
              to meet the unique needs of each client. From small-scale projects
              to large-scale operations, we ensure that our designs align
              perfectly with your goals.
            </p>
          </div>

          <div className="col-lg-12  col-12 mt-5">
            <img src={saltdesign2} alt="aboutUsImg1" className="img-fluid" />
          </div>
          <div className="col-12 col-md-9 col-lg-9 text-center d-flex justify-content-center mx-auto mt-5 mb-5">
            <p className="saltworkdesign-para-text-style text-center mx-3">
              With a portfolio spanning projects from 30 Hectares to 7,000
              Hectares, and production capacities ranging from 5,000 Tons per
              year to 2 million Tons per year, Shriraam Engineering is your
              trusted partner for building world-class Salt Works.
            </p>
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
                    <h4 className="sub-of-contact text-white text-uppercase fw-bolder text-md-start albert-sans-400 text-start video-contact-banner-style w-75 mt-3">
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
      </div>
    </>
  );
};

export default SaltDesign;
