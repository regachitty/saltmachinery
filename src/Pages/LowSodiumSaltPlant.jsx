import React, { useState, useEffect } from "react";
import saltRefineryImage from "../assets/images/saltRefineryImage.svg";
import WhiteNav from "../CommonComponent/WhiteNav";
import "../assets/css/machinerySaltRefinery.css";
import ImageSlider from "../CommonComponent/ImageSlider";

import TrustedSection from "../CommonComponent/TrustedSection";
import ProductSimplySlider from "../CommonComponent/ProductSimplySlider";
import ReadyToBuild from "../CommonComponent/ReadyToBuild";
import FrequentlyAsked from "../CommonComponent/FrequentlyAsked";
import StillHaveQuestion from "../CommonComponent/StillHaveQuestion";
import Footer from "../CommonComponent/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
const LowSodiumSaltPlant = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const lowSodiumSaltPlantFAQs = [
    {
      question:
        "What is low sodium salt, and how is it different from regular salt?",
      answer:
        "Low sodium salt is a healthier alternative to regular table salt, where a portion of sodium chloride is replaced with potassium chloride. This reduces the sodium content while maintaining a similar taste and texture.",
    },
    {
      question: "What are the benefits of using low sodium salt?",
      answer:
        "Low sodium salt helps reduce sodium intake, which can lower the risk of high blood pressure, heart disease, and stroke. It provides the same flavor as regular salt, making it an excellent choice for health-conscious consumers.",
    },
    {
      question: "How is low sodium salt produced?",
      answer:
        "The production process involves blending refined salt with potassium chloride in a batch blender. The mixture is then transferred using screw conveyors and packed using advanced packing machines to ensure quality and consistency.",
    },
    {
      question: "Can low sodium salt be used in cooking and baking?",
      answer:
        "Yes, low sodium salt can be used in cooking, baking, and seasoning, just like regular table salt. It offers the same taste and functionality, making it a versatile choice for everyday use.",
    },
    {
      question: "Is low sodium salt safe for everyone?",
      answer:
        "While low sodium salt is generally safe for most people, individuals with specific medical conditions, such as kidney problems or those on potassium-restricted diets, should consult a healthcare professional before using it.",
    },
    {
      question: "What packaging options are available for low sodium salt?",
      answer:
        "Low sodium salt is available in various packaging sizes, including 1 kg pouches and bulk packs for industrial use, catering to both consumer and commercial needs.",
    },
    {
      question: "How does low sodium salt contribute to a healthier lifestyle?",
      answer:
        "By reducing sodium intake, low sodium salt promotes better heart health, aids in managing blood pressure, and supports overall well-being without sacrificing flavor in meals.",
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
            <h2 className="mechanical-text-styles albert-sans text-uppercase pb-4 text-md-start text-center">
              Low Sodium Salt Plant
            </h2>
            <p className="saltRefinery-style albert-sans-400 ps-2 text-md-start text-center justify-content-center">
              In today's health-conscious era, the demand for innovative salt
              solutions has paved the way for low sodium salt. This
              revolutionary product blends refined table salt with potassium
              chloride to reduce sodium intake without compromising on taste or
              texture.
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
            <h2 className="plant-text-style fw-bold albert-sans pb-2">
              A Healthier Alternative: Low Sodium Salt Production
            </h2>
            <p className="cutting-edge-style  albert-sans-400 mb-lg-2 mb-4">
              The process integrates seamlessly into existing salt refining
              systems, utilizing cutting-edge equipment and advanced dry-mixing
              technology. By maintaining a uniform blend of potassium chloride
              and salt, manufacturers ensure a product that meets both dietary
              preferences and global health standards.
            </p>
            <p className="cutting-edge-style  albert-sans-400 mb-lg-2 mb-4">
              The production of low sodium salt is designed to be highly
              efficient and scalable, with streamlined processes that reduce
              production time and maximize output. From hoppers with screw
              conveyors to batch blenders and high-speed packing machines, every
              stage is optimized for precision and productivity. With its health
              benefits and consistent quality, low sodium salt is a perfect
              solution for consumers seeking a healthier lifestyle without
              giving up the essential flavors of their meals.
              <br />
            </p>

            <hr className="my-5 me-3" />

            {/* Raw Salt Processing */}
            <div
              className="col-12 d-flex justify-content-between align-items-center mb-lg-2 mb-2 mb-lg-0 mb-4"
              onClick={() => toggleSection("rawProcessing")}
            >
              <h4 className="albert-sans raw-text-style">Production Process</h4>
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
                <ul
                  className="albert-sans-400 raw-sub-text-style"
                  style={{ listStyleType: "none", paddingLeft: 0 }}
                >
                  <li>
                    <strong style={{ color: "#667085" }}>
                      1. Hopper with Screw Conveyor:
                    </strong>
                    Refined salt is carefully loaded into the hopper, which
                    transfers it to the batch blending unit. This ensures a
                    smooth and continuous flow for the production process.
                  </li>
                  <br />
                  <li>
                    <strong style={{ color: "#667085" }}>
                      2. Batch Blender:
                    </strong>
                    The heart of the process lies in the batch blender, where
                    refined salt and potassium chloride are mixed to perfection,
                    achieving a consistent low-sodium product.
                  </li>
                  <br />
                  <li>
                    <strong style={{ color: "#667085" }}>
                      3. Pipe Screw Conveyor:
                    </strong>
                    After blending, the product is transferred through a pipe
                    screw conveyor, ensuring no segregation or loss during
                    transit to the packaging unit.
                  </li>
                  <br />
                  <li>
                    <strong style={{ color: "#667085" }}>
                      4. Packing Machine:
                    </strong>
                    The final low-sodium salt is packed into consumer-friendly
                    sizes, ranging from 1 kg pouches to bulk packaging, ready
                    for shipping and distribution.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <TrustedSection />
        <div className="pt-5 mb-lg-5 mb-3">
          <ProductSimplySlider />
        </div>
        <div className="my-lg-5 my-3">
          <FrequentlyAsked faqs={lowSodiumSaltPlantFAQs} />
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

export default LowSodiumSaltPlant;
