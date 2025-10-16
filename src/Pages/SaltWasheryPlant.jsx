import React, { useState, useEffect } from "react";
import saltRefineryImage from "../assets/images/saltwashnaryproduct1.svg";
import ImageSlider from "../CommonComponent/ImageSlider";

import ProductSimplySlider from "../CommonComponent/ProductSimplySlider";
import ReadyToBuild from "../CommonComponent/ReadyToBuild";
import FrequentlyAsked from "../CommonComponent/FrequentlyAsked";
import StillHaveQuestion from "../CommonComponent/StillHaveQuestion";
import "../assets/css/saltWashery.css";
import WhiteNav from "../CommonComponent/WhiteNav";
import Footer from "../CommonComponent/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
const SaltWasheryPlant = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const saltWasheryPlantFAQs = [
    {
      question: "What is a Salt Washery Plant?",
      answer:
        "A Salt Washery Plant is a specialized system designed to remove impurities like mud, clay, and insoluble particles from raw salt. It ensures that the final product meets quality standards suitable for industrial or edible use.",
    },
    {
      question: "How does a Salt Washery Plant work?",
      answer:
        "The plant uses a multi-stage washing process. Raw salt is fed into the plant via a conveyor system, where magnetic separators remove ferrous particles. It then undergoes primary and secondary washing to eliminate soluble and insoluble impurities. Finally, the washed salt is dewatered and stacked for drying.",
    },
    {
      question: "What types of impurities can the plant remove?",
      answer:
        "The Salt Washery Plant effectively removes insoluble impurities like mud, stones, and clay; soluble impurities such as calcium and magnesium; and ferrous particles trapped using magnetic separators.",
    },
    {
      question: "Can the Salt Washery Plant be customized?",
      answer:
        "Yes, the plant can be customized based on production capacity, the quality of raw salt, and specific requirements. Additional features like roller crushers for sizing salt crystals can also be integrated.",
    },
    {
      question: "What industries benefit from a Salt Washery Plant?",
      answer:
        "The Salt Washery Plant is essential for industries such as edible salt production, industrial salt manufacturing, and chemical and pharmaceutical industries requiring pure salt.",
    },
    {
      question: "How energy-efficient is the Salt Washery Plant?",
      answer:
        "Modern Salt Washery Plants are equipped with energy-efficient components like spray washers and optimized conveyors, ensuring reduced water and power consumption while maintaining high throughput.",
    },
    {
      question: "What is the capacity range of a Salt Washery Plant?",
      answer:
        "The capacity can vary depending on the plant's design, typically ranging from 5 tons/hour to over 50 tons/hour for large-scale operations.",
    },
    {
      question: "How is water used and managed in the plant?",
      answer:
        "The plant uses water for primary and secondary washing of salt. Used water is typically recycled in brine tanks to minimize wastage and optimize resource usage.",
    },
    {
      question: "Is the Salt Washery Plant environmentally friendly?",
      answer:
        "Yes, advanced plants are designed with eco-friendly features, including water recycling systems, low-energy components, and reduced emissions.",
    },
    {
      question:
        "What are the maintenance requirements for the Salt Washery Plant?",
      answer:
        "The plant requires routine maintenance of components such as conveyors, separators, and washers to ensure optimal performance and longevity. Regular cleaning and inspections are recommended to prevent wear and tear.",
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
            <h2 className="saltwashery-text-styles albert-sans text-uppercase pb-4 text-md-start text-center px-4">
              Salt Washery Plant
            </h2>
            <p className="saltwashery-sub-text-style albert-sans-400 ps-2 text-md-start text-center justify-content-center ">
              Experience precision and efficiency with our advanced Salt Washery
              Plants, meticulously engineered to deliver high-purity salt for
              diverse industrial applications. Designed with cutting-edge
              technology, these plants streamline the removal of impurities,
              optimize washing and drying processes, and enhance overall
              productivity. Trusted by industries worldwide, our Salt Washery
              Plants combine reliability, innovation, and sustainability to help
              your business achieve unparalleled excellence in salt processing.
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
              Optimised Raw Salt Feeding System
            </h2>
            <p className="optimised-sub-edge-style albert-sans-400 mb-lg-2 mb-4">
              Equipped with feed hoppers and raw salt conveyors, our system
              ensures effective removal of debris such as stones, clay, and
              ferrous particles through magnetic separators and manual picking
              platforms.
            </p>
            <hr className="my-5 me-3" />

            {/* Raw Salt Processing */}
            <div
              className="col-12 d-flex justify-content-between align-items-center"
              onClick={() => toggleSection("rawProcessing")}
              data-aos="fade-up"
            >
              <h4 className="albert-sans saltwash-head-text-style my-4 my-lg-0">
                Dual-Stage Washing Excellence
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
              <div className="col-12 pt-3" data-aos="fade-up">
                <p className="albert-sans-400 satwash-head-sub-text-style">
                  The two-stage washing process uses high-density brine and
                  precision spray water systems to eliminate impurities,
                  ensuring superior salt crystal clarity and purity.
                </p>
              </div>
            )}
            <hr className="my-4 me-3" />

            {/* Brine Recycling and Washing */}
            <div
              className="col-12 d-flex justify-content-between align-items-center mb-lg-0 mb-4"
              onClick={() => toggleSection("brineRecycling")}
              data-aos="fade-up"
            >
              <h4 className="albert-sans saltwash-head-text-style">
                Seamless Dewatering and Drying
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
                <p className="albert-sans-400 satwash-head-sub-text-style">
                  Advanced chain belt conveyors with integrated spray systems
                  effectively wash, dewater, and prepare salt for sun-drying and
                  stacking, ensuring optimal efficiency.
                </p>
              </div>
            )}
            <hr className="my-4 me-3" />
            {/* Drying and Iodization */}
            <div
              className="col-12 d-flex justify-content-between align-items-center mb-lg-0 mb-4"
              onClick={() => toggleSection("dryingandIodization")}
            >
              <h4 className="albert-sans saltwash-head-text-style">
                Customizable Add-Ons for Flexibility
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
                <p className="albert-sans-400 satwash-head-sub-text-style">
                  Roller crushers can be incorporated into the system to
                  customize salt crystal sizing, catering to specific production
                  needs and enhancing versatility.
                </p>
              </div>
            )}
            <hr className="my-4 me-3" />
            {/* Screening and Blending */}
            <div
              className="col-12 d-flex justify-content-between align-items-center mb-lg-0 mb-4"
              onClick={() => toggleSection("screeningBlending")}
            >
              <h4 className="albert-sans saltwash-head-text-style">
                Sustainable Brine Recycling Solutions
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
                <p className="albert-sans-400 satwash-head-sub-text-style">
                  Our plants utilize recycled brine water to reduce waste and
                  promote eco-friendly operations, aligning with modern
                  sustainability goals.
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
          <FrequentlyAsked faqs={saltWasheryPlantFAQs} />
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

export default SaltWasheryPlant;
