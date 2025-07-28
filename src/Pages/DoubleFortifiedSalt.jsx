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
const DoubleFortifiedSalt = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const doubleFortifiedSaltFAQs = [
    {
      question: "What is Double Fortified Salt (DFS)?",
      answer:
        "Double Fortified Salt is salt enriched with both iodine and iron to address deficiencies in these crucial nutrients, improving overall public health.",
    },
    {
      question: "What makes Shriraam’s DFS Plant unique?",
      answer:
        "Shriraam’s DFS Plant features advanced encapsulation technology, ensuring even distribution of iron and iodine while preserving the salt’s taste and appearance.",
    },
    {
      question: "How does the fortification process work?",
      answer:
        "The process involves blending encapsulated ferrous compounds with iodized salt using precision equipment, ensuring a consistent and high-quality product.",
    },
    {
      question: "What are the key applications of DFS?",
      answer:
        "DFS is widely used in public health programs, food industries, and commercial salt distribution, combating anemia and iodine deficiencies globally.",
    },
    {
      question: "Does DFS alter the taste or texture of salt?",
      answer:
        "No, the encapsulation process ensures that DFS is organoleptically identical to regular iodized salt.",
    },
    {
      question: "What are the production capacity options for the DFS Plant?",
      answer:
        "Shriraam offers scalable solutions that can be tailored to meet small-scale or large-scale production requirements.",
    },
    {
      question: "What standards does the DFS Plant comply with?",
      answer:
        "Shriraam’s DFS Plant adheres to WHO and other global food fortification standards, ensuring safe and effective products.",
    },
    {
      question: "Is the DFS Plant suitable for existing salt refineries?",
      answer:
        "Yes, the plant requires minimal adjustments and can be seamlessly integrated into current salt refinery setups.",
    },
    {
      question: "What are the operational costs of the DFS Plant?",
      answer:
        "The DFS Plant is designed for cost efficiency, reducing energy consumption and operational costs while maximizing output.",
    },
    {
      question: "How can I get a custom DFS Plant for my business?",
      answer:
        "Contact Shriraam Engineering today to discuss your specific requirements and receive a tailored solution for your fortification needs.",
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
                Double Fortified Salt
              </h2>
              <p className="saltRefinery-style albert-sans-400 ps-2 text-md-start text-center justify-content-center">
                The Double Fortified Salt (DFS) Plant by Shriraam Engineering
                offers a groundbreaking solution to global micronutrient
                deficiencies. Combining iodine and iron fortification, this
                advanced facility ensures the production of high-quality,
                double-fortified salt that meets international nutritional
                standards. With innovative encapsulation technology and
                precision blending, the plant delivers cost-effective solutions
                tailored for public health programs and commercial distribution.
                Its streamlined process adheres to stringent quality controls,
                ensuring consistent output without compromising on taste or
                appearance. Designed for efficiency, scalability, and compliance
                with global fortification standards, the DFS Plant supports the
                fight against anemia and iodine deficiency disorders. Choose
                Shriraam Engineering for reliable and sustainable solutions to
                enhance global nutrition.
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
                What is Double Fortified salt?
              </h2>
              <p className="cutting-edge-style  albert-sans-400 mb-lg-2 mb-4">
                Double Fortified Salt (DFS) is an innovative blend of iodine and
                iron that addresses widespread micronutrient deficiencies. It
                provides essential nutrients without altering the salt's taste,
                smell, or texture, making it an effective and cost-efficient
                solution for public health challenges.
              </p>
              <hr className="my-5 me-3" />

              {/* Raw Salt Processing */}
              <div
                className="col-12 d-flex justify-content-between align-items-center mb-lg-0 mb-4"
                onClick={() => toggleSection("rawProcessing")}
              >
                <h4 className="albert-sans raw-text-style">
                  Vacuum Evaporation Process
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
                    The PVD process starts by dissolving raw salt in water to
                    create a brine solution. This brine undergoes clarification,
                    where impurities settle, and the clear brine is chemically
                    treated to precipitate magnesium and calcium salts. The
                    purified brine is then concentrated using advanced vacuum
                    evaporation technology.
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
                  Crystallization and Brine Recycling
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
                    Saturated brine is sent to the evaporation system, where
                    crystallization occurs. The resulting salt slurry is
                    recycled through a hydro-cyclone, achieving a 50–60%
                    concentration. Excess brine is recycled for efficiency,
                    minimizing waste and ensuring continuous operation.
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
                  Centrifugation and Drying
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
                    The concentrated slurry is centrifuged to separate moisture
                    and create salt cakes with 4–5% residual moisture. These are
                    conveyed to a fluidized bed dryer, where hot air ensures the
                    salt achieves the perfect dryness for iodization and further
                    processing.
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
                  Packaging and Storage
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
                    The refined salt is mixed with free-flowing agents for
                    enhanced storage stability. It is then conveyed to automated
                    packaging systems, offering flexibility in pack sizes,
                    including 1 kg pouches or 50 kg industrial bags, ensuring
                    ready-to-market quality.
                  </p>
                </div>
              )}
              <hr className="my-4 me-3" />
            </div>
          </div>

          <TrustedSection />
          <div className="pt-5 mb-lg-5 mb-3">
            <ProductSimplySlider />
          </div>
          <div className="my-lg-5 my-3">
            <FrequentlyAsked faqs={doubleFortifiedSaltFAQs} />
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
    </>
  );
};

export default DoubleFortifiedSalt;
