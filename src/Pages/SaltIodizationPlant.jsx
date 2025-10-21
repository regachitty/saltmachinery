import React, { useState, useEffect } from "react";
import saltRefineryImage from "../assets/images/saltRefineryImage.svg";
import WhiteNav from "../CommonComponent/WhiteNav";
import "../assets/css/machinerySaltRefinery.css";
import ImageSlider from "../CommonComponent/ImageSlider";

import ProductSimplySlider from "../CommonComponent/ProductSimplySlider";
import ReadyToBuild from "../CommonComponent/ReadyToBuild";
import FrequentlyAsked from "../CommonComponent/FrequentlyAsked";
import StillHaveQuestion from "../CommonComponent/StillHaveQuestion";
import Footer from "../CommonComponent/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import saltIodizatioimage1 from "../assets/images/saltizodationproductimage1.svg";
import saltIodizatioimage2 from "../assets/images/saltizodationproductimage1.svg";
const saltIodizationImages = [saltIodizatioimage1, saltIodizatioimage2];
const SaltIodizationPlant = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const saltIodizationFAQs = [
    {
      question: "What is the purpose of a salt iodisation plant?",
      answer:
        "A salt iodisation plant integrates iodine into salt to combat iodine deficiency disorders and enhance public health.",
    },
    {
      question: "How does a salt iodisation plant work?",
      answer:
        "The process involves salt crushing, precise iodine dosing, uniform mixing, and efficient packaging to produce high-quality iodised salt.",
    },
    {
      question: "What types of salt can be processed?",
      answer:
        "Our plants are designed to handle various salt types, including sea salt, rock salt, and vacuum salt, ensuring versatile applications.",
    },
    {
      question: "Can Shriraam Engineering customize the plant design?",
      answer:
        "Yes, we specialize in tailored solutions to meet specific production capacities, regulatory standards, and unique customer requirements.",
    },
    {
      question: "Are your plants compliant with global quality standards?",
      answer:
        "Our salt iodisation plants are engineered to meet international quality, safety, and environmental standards, ensuring reliable and efficient performance.",
    },
    {
      question: "What capacity options do you offer?",
      answer:
        "We provide scalable solutions, from small-scale operations to large industrial plants, catering to diverse production needs.",
    },
    {
      question: "Do you provide installation and after-sales support?",
      answer:
        "Yes, our services include plant installation, operational training, and comprehensive after-sales support to ensure seamless operations.",
    },
    {
      question: "How energy-efficient are your salt iodisation plants?",
      answer:
        "Our plants incorporate advanced, energy-efficient technologies to reduce operational costs while maintaining productivity and quality.",
    },
    {
      question: "Do you export your salt iodisation plants?",
      answer:
        "Yes, Shriraam Engineering has a strong global presence, exporting salt iodisation plants to over 20 countries worldwide.",
    },
    {
      question: "How can I request a quote or consultation?",
      answer:
        "You can contact us via our website or email, and our team will provide a detailed proposal based on your specific needs.",
    },
  ];
  const [openSections, setOpenSections] = useState({
    rawProcessing: true,
    brineRecycling: false,
    screeningBlending: false,
    packagingDistribution: false,
  });

  // Function to toggle section visibility
  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  return (
    <>
      <WhiteNav />
      <div className="refinery-container">
        <div className="row">
          <div
            className="col-lg-6 col-12 d-flex flex-column justify-content-center align-items-center"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="500"
          >
            <h2 className="mechanical-text-styles albert-sans text-uppercase pb-4 text-md-start text-center mt-3">
              Salt Iodization Plant
            </h2>
            <p className="saltRefinery-style albert-sans-400 ps-2 text-md-start text-center justify-content-center">
              Our Salt Iodisation Plant is engineered to deliver unparalleled
              efficiency and precision, meeting global standards for
              iodine-enriched salt production. Designed for both fixed and
              mobile applications, these plants ensure consistent iodine dosing,
              addressing iodine deficiency disorders worldwide. With advanced
              technology, energy-efficient operations, and a robust build, our
              plants optimize salt iodisation for industries and communities.
              Trusted by leading organizations globally, our solutions empower
              businesses to produce high-quality iodized salt while adhering to
              international compliance standards. Experience reliability,
              flexibility, and excellence with our state-of-the-art iodisation
              systems.
            </p>
          </div>
          <div
            className="col-lg-6 col-12 mt-5"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="500"
          >
            <img
              src={saltRefineryImage}
              alt="Salt Refinery"
              className="img-fluid"
            />
          </div>
        </div>

        {/* Salt Refinery Process Sections */}
        <div className="row mt-5 p-3">
          <div
            className="col-lg-6 col-12 p-3 p-lg-4"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="500"
          >
            <ImageSlider images={saltIodizationImages} />
          </div>
          <div
            className="col-lg-6 p-3 p-lg-4"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="500"
          >
            <h2 className="plant-text-style fw-bold albert-sans pb-2">
              Fixed Iodisation Plant
            </h2>
            <p className="cutting-edge-style  albert-sans-400 mb-lg-2 mb-4">
              The fixed iodisation plant is designed for large-scale operations,
              ensuring precise iodine integration and uniform salt processing.
              From automated salt feeding to meticulous iodine dosing, the
              system guarantees high output and compliance with global quality
              standards.
            </p>
            <hr className="my-5 me-3" />

            {/* Raw Salt Processing */}
            <div
              className="col-12 d-flex justify-content-between align-items-center mb-lg-0 mb-4"
              onClick={() => toggleSection("rawProcessing")}
            >
              <h4 className="albert-sans raw-text-style">
                Mobile Iodisation Plant
              </h4>
              <i
                className={`bi ${
                  openSections.rawProcessing
                    ? "bi-dash-circle"
                    : "bi-plus-circle"
                } pe-3`}
                style={{ color: "#7F56D9", cursor: "pointer" }}
              ></i>
            </div>
            {openSections.rawProcessing && (
              <div className="col-12 pt-3">
                <p className="albert-sans-400 raw-sub-text-style">
                  Our mobile iodisation plants combine flexibility with advanced
                  functionality, making them ideal for remote locations or
                  on-site iodisation needs. Easily transportable and highly
                  efficient, these plants ensure quality salt iodisation even in
                  the most challenging environments.
                </p>
              </div>
            )}
            <hr className="my-4 me-3" />

            {/* Brine Recycling and Washing */}
            <div
              className="col-12 d-flex justify-content-between align-items-center mb-lg-0 mb-4"
              onClick={() => toggleSection("brineRecycling")}
            >
              <h4 className="albert-sans raw-text-style">
                Advanced Iodine Dosing Technology
              </h4>
              <i
                className={`bi ${
                  openSections.brineRecycling
                    ? "bi-dash-circle"
                    : "bi-plus-circle"
                } pe-3`}
                style={{ color: "#7F56D9", cursor: "pointer" }}
              ></i>
            </div>
            {openSections.brineRecycling && (
              <div className="col-12 pt-3">
                <p className="albert-sans-400 raw-sub-text-style">
                  Equipped with precision iodine dosing pumps, our plants
                  achieve consistent and accurate iodine distribution, ensuring
                  compliance with parts-per-million (PPM) requirements while
                  minimizing wastage.
                </p>
              </div>
            )}
            <hr className="my-4 me-3" />
            {/* Drying and Iodization */}
            <div
              className="col-12 d-flex justify-content-between align-items-center mb-lg-0 mb-4"
              onClick={() => toggleSection("dryingandIodization")}
            >
              <h4 className="albert-sans raw-text-style">
                Energy-Efficient and Reliable Operations
              </h4>
              <i
                className={`bi ${
                  openSections.dryingandIodization
                    ? "bi-dash-circle"
                    : "bi-plus-circle"
                } pe-3`}
                style={{ color: "#7F56D9", cursor: "pointer" }}
              ></i>
            </div>
            {openSections.dryingandIodization && (
              <div className="col-12 pt-3">
                <p className="albert-sans-400 raw-sub-text-style">
                  Our plants are built with energy-efficient components to
                  reduce operational costs while maintaining exceptional
                  productivity. Their durable design ensures reliable
                  performance even in high-demand settings.
                </p>
              </div>
            )}
            <hr className="my-4 me-3" />
            {/* Screening and Blending */}
            <div
              className="col-12 d-flex justify-content-between align-items-center mb-lg-0 mb-4"
              onClick={() => toggleSection("screeningBlending")}
            >
              <h4 className="albert-sans raw-text-style">
                Global Recognition and Impact
              </h4>
              <i
                className={`bi ${
                  openSections.screeningBlending
                    ? "bi-dash-circle"
                    : "bi-plus-circle"
                } pe-3`}
                style={{ color: "#7F56D9", cursor: "pointer" }}
              ></i>
            </div>
            {openSections.screeningBlending && (
              <div className="col-12 pt-3">
                <p className="albert-sans-400 raw-sub-text-style">
                  Trusted by NGOs like UNICEF, ICCIDD, and Nutrition
                  International, our iodisation plants have played a vital role
                  in combating iodine deficiency across continents, including
                  Africa, Southeast Asia, and the Americas.
                </p>
              </div>
            )}
            <hr className="my-4 me-3" />
          </div>
        </div>

        <div className="pt-5 mb-lg-5 mb-3">
          <ProductSimplySlider />
        </div>
        <div className="my-lg-5 my-3">
          <FrequentlyAsked faqs={saltIodizationFAQs} />
        </div>
        <div className="my-lg-5 my-3">
          <StillHaveQuestion />
        </div>
        <div className="pt-5">
          <ReadyToBuild />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SaltIodizationPlant;
