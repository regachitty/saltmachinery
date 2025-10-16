import React from "react";
import WhiteNav from "../CommonComponent/WhiteNav";
import member from "../assets/images/tradingimage1.svg";
import smallimgtrading1 from "../assets/images/tradingimage2.svg";
import tradingimage2 from "../assets/images/tradingimage3.svg";
import tradingimage3 from "../assets/images/tradingimage4.svg";
import buildImg1 from "../assets/images/black-build-img1.svg";
import Footer from "../CommonComponent/Footer.jsx";
const Trading = () => {
  return (
    <>
      <WhiteNav />
      <div className="trading-style-container" style={{ overflowX: "hidden" }}>
        <div className="row">
          <div className="col-lg-12 col-12 mt-lg-2 mt-2">
            <div className="runing-text">
              {Array(6)
                .fill("Trading.")

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
            <p className="contact-para-style ps-lg-3 pt-lg-3 pt-3 albert-sans ">
              Expanding Horizons with Shriraam Trading Solutions
            </p>
          </div>
          <div className="col-lg-2 col-12 d-flex justify-content-evenly align-items-center">
            <div className="vl"></div>
          </div>
          <div className="col-lg-2 col-12 d-flex justify-content-evenly align-items-center">
            <div className="vl"></div>
          </div>
          <div className="col-lg-2 col-12 d-flex justify-content-evenly align-items-center">
            <div className="vl"></div>
          </div>
          <div className="col-lg-12  col-12 mt-5">
            <img src={member} alt="tradingUsImg1" className="img-fluid" />
          </div>
          <div className="col-12 col-md-9 col-lg-9 text-center d-flex justify-content-center mx-auto mt-5 ">
            <p className="saltworkdesign-para-text-style text-center mx-5 albert-sans-400">
              At Shriraam, we continuously strive to diversify our operations to
              meet the growing demands of our customers. With our expertise in
              material characterization, equipment manufacturing, and global
              trade, we ensure raw materials are directed to the right channels
              based on your specific needs.
            </p>
          </div>
          <div className="col-12 col-md-9 col-lg-9 text-center d-flex justify-content-center mx-auto">
            <p className="saltworkdesign-para-text-style text-center mx-5 albert-sans-400">
              Our international logistics capabilities allow us to efficiently
              sell and transport materials worldwide. From sourcing raw
              materials to finding certified professionals and setting up a lean
              factory, we’re committed to turning your vision into reality with
              a self-sustaining salt refining turnkey project.
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
                Raw Material Salt Trading
              </p>
              <p className="w-100 w-md-50 w-lg-50 mx-auto d-flex justify-content-center text-center text-lg-start albert-sans-400">
                Streamline your salt production with high-quality raw materials
                delivered in bulk. At Shriraam, we ship raw materials directly
                to your factory based on your specific requirements. To ensure
                faster delivery, we source semi-finished goods from the nearest
                locations and deliver them straight to your warehouse. Trust us
                to supply only the finest raw materials for your operations.
              </p>
            </div>
            {/* Text Section */}
            <div className="col-lg-6 col-12 d-flex flex-column justify-content-center px-4 py-3">
              <p className="h2 mb-3 font-weight-bold text-center text-lg-start albert-sans ">
                Packing Materials
              </p>
              <p className="w-100 w-md-50 w-lg-50 mx-auto d-flex justify-content-center text-center text-lg-start albert-sans-400">
                Ensure durability and quality with our custom-made salt
                packaging solutions. Utilizing the latest technology and premium
                materials, our salt bags are designed to meet international
                standards. Tailor your packaging requirements with Shriraam’s
                high-quality solutions.
              </p>
            </div>
            <div className="col-lg-6 col-12 d-flex justify-content-center  mt-lg-5 mb-5">
              <img
                src={tradingimage2}
                alt="tradingimage2"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6 col-12 d-flex justify-content-center mt-lg-5 mb-5">
              <img
                src={tradingimage3}
                alt="tradingimage3"
                className="img-fluid "
              />
            </div>
            {/* Text Section */}
            <div className="col-lg-6 col-12 d-flex flex-column justify-content-center px-4 py-3 ">
              <p className="h2 mb-3 font-weight-bold text-center text-lg-start albert-sans">
                Potassium Iodate
              </p>
              <p className="w-100 w-md-50 w-lg-50 mx-auto d-flex justify-content-center text-center text-lg-start albert-sans-400">
                Enhance your salt production with premium-quality potassium
                iodate. Perfect for fortifying salt with iodine, our bulk
                supplies meet the highest standards to support your
                manufacturing needs.
              </p>
            </div>
            {/* <div className="col-lg-6 col-12 d-flex flex-column justify-content-center px-4 py-3">
              <p className="h2 mb-3 font-weight-bold text-center text-lg-start albert-sans ">
                PFs Premix
              </p>
              <p className="w-100 w-md-50 w-lg-50 mx-auto d-flex justify-content-center text-center text-lg-start albert-sans-400">
                Deliver health benefits with Double Fortified Salt (DFS). Our
                innovative DFS premix provides essential iodine and iron to
                improve nutrition. Order premium-quality DFS premix from
                Shriraam Engineering for your salt refining process.
              </p>
            </div>
            <div className="col-lg-6 col-12 d-flex justify-content-center  mt-lg-5 mb-5">
              <img
                src={tradingimage2}
                alt="smallimgtrading1"
                className="img-fluid"
              />
            </div> */}
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
        <Footer />
      </div>
    </>
  );
};

export default Trading;
