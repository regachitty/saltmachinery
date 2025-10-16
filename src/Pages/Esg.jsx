import React from "react";
import WhiteNav from "../CommonComponent/WhiteNav";
import member from "../assets/images/saltworkdesignimage1.svg";
import "../assets/css/saltworkDesign.css";
import Footer from "../CommonComponent/Footer";
import smallimgtrading1 from "../assets/images/smallimgtrading1.svg";
import tradingimage2 from "../assets/images/tradingimage2.svg";
import buildImg1 from "../assets/images/black-build-img1.svg";
import "../assets/css/esg.css";
export const Esg = () => {
  return (
    <>
      <WhiteNav />
      <div className="saltdesign-container" style={{ overflowX: "hidden" }}>
        <div className="row">
          <div className="col-lg-12 col-12 mt-lg-2 mt-2">
            <div className="runing-text">
              {Array(6)
                .fill(" Environmental social Governance Trading .")
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
          <div className="col-lg-6 col-12 mb-3">
            <p className="contact-para-style ps-lg-3 pt-lg-3 pt-3">
              Our Expertise in Salt Processing Solutions
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
          <div className="col-12 col-md-9 col-lg-9 text-center d-flex justify-content-center mx-auto mt-5 ">
            <p className="saltworkdesign-para-text-style text-center mx-5 albert-sans-400">
              At Shriraam Salt Engineering, sustainability is not just an
              add-on—it’s integral to our engineering philosophy. We are proud
              to offer salt processing solutions powered by clean, renewable
              solar energy and supported by Zero Liquid Discharge (ZLD) systems,
              ensuring our operations align with global environmental standards
              and responsible industrial practices.
            </p>
          </div>
          <div className="col-12 col-md-9 col-lg-9 text-center d-flex justify-content-center mx-auto">
            <p className="saltworkdesign-para-text-style text-center mx-5 albert-sans-400">
              Powered by Solar. Driven by Sustainability. Our salt plants are
              designed to seamlessly integrate solar power systems that supply
              clean energy to run core machinery. This shift to renewable energy
              significantly reduces dependence on conventional power sources,
              minimizing carbon emissions and contributing to a greener future.
            </p>
          </div>

          <div className="row align-items-center  p-lg-5 ps-5">
            {/* Image Section */}
            <div className="col-lg-6 col-12 d-flex justify-content-center">
              <img
                src={smallimgtrading1}
                alt="smallimgtrading1"
                className="img-fluid"
              />
            </div>
            {/* Text Section */}
            <div className="col-lg-6 col-12 d-flex flex-column justify-content-center px-4 py-3">
              <p className="h3 mb-3 font-weight-bold text-center text-lg-start albert-sans ">
                Environmental, Social and Governance: (ESG)
              </p>
              <p className="w-100 w-md-50 w-lg-50 mx-auto d-flex justify-content-center text-center text-lg-start albert-sans-400">
                At Shriraam Salt Engineering, sustainability is not just an
                add-on—it’s integral to our engineering philosophy. We are proud
                to offer salt processing solutions powered by clean, renewable
                solar energy and supported by Zero Liquid Discharge (ZLD)
                systems, ensuring our operations align with global environmental
                standards and responsible industrial practices.
              </p>
              <p className="w-100 w-md-50 w-lg-50 mx-auto d-flex justify-content-center text-center text-lg-start albert-sans-400">
                Powered by Solar. Driven by Sustainability. Our salt plants are
                designed to seamlessly integrate solar power systems that supply
                clean energy to run core machinery. This shift to renewable
                energy significantly reduces dependence on conventional power
                sources, minimizing carbon emissions and contributing to a
                greener future.
              </p>
            </div>
            {/* Text Section */}
            <div className="col-lg-6 col-12 d-flex flex-column justify-content-center px-4 py-3">
              <p className="h2 mb-3 font-weight-bold text-center text-lg-start albert-sans ">
                Zero Liquid Discharge (ZLD) Wastewater Management
              </p>
              <p className="w-100 w-md-50 w-lg-50 mx-auto d-flex justify-content-center text-center text-lg-start albert-sans-400">
                Our commitment to environmental responsibility extends beyond
                energy. We employ Zero Liquid Discharge (ZLD) systems to treat
                and recycle wastewater generated from salt processing. This
                ensures no water pollution, zero environmental discharge, and
                maximum water recovery, aligning with stringent environmental
                norms.
              </p>
            </div>
            <div className="col-lg-6 col-12 d-flex justify-content-center  mt-lg-5 mb-5">
              <img
                src={tradingimage2}
                alt="tradingimage2"
                className="img-fluid"
              />
            </div>
          </div>
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
                    Building a Future-Ready, Eco-Friendly Salt Industry
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
        <Footer />
      </div>
    </>
  );
};
