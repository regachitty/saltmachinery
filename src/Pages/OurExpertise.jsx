import React from "react";
import WhiteNav from "../CommonComponent/WhiteNav";
import member from "../assets/images/saltWorkDesignImg1.svg";
import "../assets/css/saltworkDesign.css";
import Footer from "../CommonComponent/Footer";
import smallimgtrading1 from "../assets/images/smallimgtrading1.svg";
import tradingimage2 from "../assets/images/tradingimage2.svg";

import buildImg1 from "../assets/images/black-build-img1.svg";
export const OurExpertise = () => {
  return (
    <>
      <WhiteNav />
      <div className="saltdesign-container">
        <div className="row">
          <div className="col-lg-12 col-12 mt-lg-2 mt-2">
            <div className="runing-text">
              {Array(6)
                .fill(" Our Expertise Trading .")

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
              Plug-and-Go" Systems for Salt Refining & PVD Plants At ShriRaam
              Salt Engineering, we specialize in delivering innovative,
              end-to-end salt processing solutions tailored to meet the dynamic
              needs of global clients. With over three decades of engineering
              excellence, we continue to redefine efficiency and modularity in
              salt manufacturing through our proprietary Plug-and-Go (PnG)
              systems. Our expertise includes the successful deployment of
              skid-mounted Pure Vacuum Dried (PVD) Salt Plants and Mechanical
              Salt Refineries, designed to accelerate setup timelines, reduce
              civil construction costs, and deliver operational readiness with
              unmatched convenience.
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
                What is Plug-and-Go (PnG)?
              </p>
              <p className="w-100 w-md-50 w-lg-50 mx-auto d-flex justify-content-center text-center text-lg-start albert-sans-400">
                Our Plug-and-Go (PnG) solution is a modular, pre-engineered salt
                processing system built on a skid-mounted platform. Developed
                for rapid deployment, it eliminates the need for on-site
                construction or complex foundation work.
              </p>
            </div>
            {/* Text Section */}
            <div className="col-lg-6 col-12 d-flex flex-column justify-content-center px-4 py-3">
              <p className="h2 mb-3 font-weight-bold text-center text-lg-start albert-sans ">
                Why Choose Shriraam's PnG Technology?
              </p>
              <p className="w-100 w-md-50 w-lg-50 mx-auto d-flex justify-content-center text-center text-lg-start albert-sans-400">
                By integrating engineering innovation with operational
                simplicity, our Plug-and-Go concept helps businesses maximize
                uptime, reduce project lead times, and lower capital
                investment—while ensuring premium salt quality output. Whether
                you're setting up a new plant or expanding an existing one,
                Shriraam's PnG systems offer a reliable, scalable, and smart
                solution for modern salt production.
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
