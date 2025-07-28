import React, { useState, useEffect } from "react";
import saltRefineryImage from "../assets/images/saltRefineryImage.svg";
import ImageSlider from "../CommonComponent/ImageSlider";

import ProductSimplySlider from "../CommonComponent/ProductSimplySlider";
import ReadyToBuild from "../CommonComponent/ReadyToBuild";
import FrequentlyAsked from "../CommonComponent/FrequentlyAsked";
import StillHaveQuestion from "../CommonComponent/StillHaveQuestion";
import "../assets/css/purevaccumsalt.css";
import Footer from "../CommonComponent/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import WhiteNav from "../CommonComponent/WhiteNav.jsx";

export const ChloarAlkali = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const purvaccumSaltFAQs = [
    {
      question: "What is a Pure Vacuum Dried (PVD) Salt Plant?",
      answer:
        "A PVD Salt Plant is a highly advanced facility that uses vacuum evaporation and crystallization to produce ultra-pure, high-quality salt. This process ensures effective impurity removal, consistent moisture levels, and excellent quality for industrial and commercial use.",
    },
    {
      question: "What industries benefit from PVD salt?",
      answer:
        "PVD salt is widely used in industries such as textiles, food processing, pharmaceuticals, and chemical manufacturing due to its high purity and consistent quality.",
    },
    {
      question: "How does the PVD process work?",
      answer:
        "The PVD process begins by dissolving salt in water to form a brine solution. The brine is purified, concentrated, and then subjected to vacuum evaporation and crystallization. The resulting salt is centrifuged, dried, iodized, and packaged for use.",
    },
    {
      question: "What are the advantages of a PVD Salt Plant?",
      answer:
        "PVD plants offer superior impurity removal, precise moisture control, efficient energy use, and minimal waste production. These plants ensure high productivity while delivering salt that meets stringent industrial and nutritional standards.",
    },
    {
      question: "Can the plant be customized to specific production needs?",
      answer:
        "Yes, our PVD Salt Plants are fully customizable. We offer tailored solutions to meet specific capacity, space, and operational requirements, ensuring seamless integration with your production process.",
    },
    {
      question: "What is the typical moisture content of the salt produced?",
      answer:
        "The salt produced in a PVD plant typically has a moisture content of 4–5%, making it suitable for long-term storage and various industrial applications.",
    },
    {
      question: "Are the PVD plants energy-efficient?",
      answer:
        "Absolutely. Our PVD plants are designed with energy-efficient systems such as vacuum evaporators, heat exchangers, and recycling mechanisms to minimize power consumption and operational costs.",
    },
    {
      question: "How is iodization handled in the PVD process?",
      answer:
        "The salt is iodized during the drying phase using advanced systems to ensure uniform iodine distribution, meeting nutritional and regulatory standards.",
    },
    {
      question: "What packaging options are available?",
      answer:
        "Our PVD plants come with automated packaging systems that can handle a variety of packaging sizes, including 1 kg pouches and 50 kg bags, to cater to diverse market needs.",
    },
    {
      question: "Do you provide installation and maintenance services?",
      answer:
        "Yes, we offer comprehensive installation, training, and maintenance services to ensure your PVD Salt Plant operates efficiently and reliably.",
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
        <div className="row mt-5">
          <div
            className="col-lg-6 col-12 d-flex flex-column justify-content-center align-items-center"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="500"
          >
            <h2 className="vaccum-text-styles albert-sans text-uppercase pb-4 text-md-start text-center px-4 px-lg-0">
              Chlor Alkali
            </h2>
            <p className="vaccum-sub-text-style albert-sans-400 ps-4 text-md-start text-center justify-content-center ">
              Our Chlor-Alkali Salt Plants are engineered to produce high-purity
              salt ideal for membrane-grade electrochemical processes. These
              plants are designed with precision systems to minimize impurities
              such as calcium, magnesium, and sulfates—ensuring consistent
              performance and extended membrane life.
            </p>
          </div>
          <div
            className="col-lg-6 col-12"
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
            <ImageSlider />
          </div>
          <div
            className="col-lg-6 p-3 p-lg-4"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="500"
          >
            <h2 className="optimised-text-style fw-bold albert-sans pb-2">
              Shriram's Chlor Alkali Salt Plants
            </h2>
            <p className="optimised-sub-edge-style albert-sans-400 mb-lg-2 mb-4">
              Shriraam’s Chlor-Alkali salt plants enable chemical industries to
              achieve sustainable, uninterrupted production with superior
              process control.
            </p>
            <hr className="my-5 me-3" />

            {/* Raw Salt Processing */}
            <div
              className="col-12 d-flex justify-content-between align-items-center"
              onClick={() => toggleSection("rawProcessing")}
            >
              <h4 className="albert-sans pure-head-text-style my-4 my-lg-0">
                Highlights
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
                <p className="albert-sans-400 pure-head-sub-text-style">
                  Optimized for membrane cell technology
                </p>
                <p className="albert-sans-400 pure-head-sub-text-style">
                  Low impurity levels for high operational efficiency
                </p>
                <p className="albert-sans-400 pure-head-sub-text-style">
                  Energy-efficient refining processes
                </p>
                <p className="albert-sans-400 pure-head-sub-text-style">
                  Fully automated and customizable designs
                </p>
              </div>
            )}
            <hr className="my-4 me-3" />

            {/* Brine Recycling and Washing */}
            <div
              className="col-12 d-flex justify-content-between align-items-center mb-lg-0 mb-4"
              onClick={() => toggleSection("brineRecycling")}
            >
              <h4 className="albert-sans pure-head-text-style">Applications</h4>
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
                  Soda ash (sodium carbonate) production
                </p>
                <p className="albert-sans-400 raw-sub-text-style">
                  Caustic soda manufacturing
                </p>
                <p className="albert-sans-400 raw-sub-text-style">
                  Chlorine and hydrogen production
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
          <FrequentlyAsked faqs={purvaccumSaltFAQs} />
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
