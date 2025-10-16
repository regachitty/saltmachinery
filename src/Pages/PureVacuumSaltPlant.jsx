import WhiteNav from "../CommonComponent/WhiteNav";
import React, { useState, useEffect } from "react";
import saltRefineryImage from "../assets/images/purevacumproduct1.svg";
import ImageSlider from "../CommonComponent/ImageSlider";

import ProductSimplySlider from "../CommonComponent/ProductSimplySlider";
import ReadyToBuild from "../CommonComponent/ReadyToBuild";
import FrequentlyAsked from "../CommonComponent/FrequentlyAsked";
import StillHaveQuestion from "../CommonComponent/StillHaveQuestion";
import "../assets/css/purevaccumsalt.css";
import Footer from "../CommonComponent/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const PureVacuumSaltPlant = () => {
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
              Pure Vacuum Salt Plant (PVD)
            </h2>
            <p className="vaccum-sub-text-style albert-sans-400 ps-2 text-md-start text-center justify-content-center ">
              Experience cutting-edge salt refining technology with our Pure
              Vacuum Dried (PVD) Salt Plant, designed for industries requiring
              ultra-pure, high-quality salt. This state-of-the-art system
              employs advanced vacuum evaporation and crystallization techniques
              to ensure optimal impurity removal and uniform quality. From brine
              preparation to iodization and packaging, the PVD process
              guarantees consistent results, making it ideal for applications in
              textiles, food processing, and other demanding industries.
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
            >
              <h4 className="albert-sans pure-head-text-style my-4 my-lg-0">
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
                <p className="albert-sans-400 pure-head-sub-text-style">
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
              <h4 className="albert-sans pure-head-text-style">
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
                  crystallization occurs. The resulting salt slurry is recycled
                  through a hydro-cyclone, achieving a 50–60% concentration.
                  Excess brine is recycled for efficiency, minimizing waste and
                  ensuring continuous operation.
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
                Iodization and Sieving
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
                  In the dryer, the salt is iodized to meet nutritional
                  standards, then cooled and passed through sieving systems to
                  remove oversized particles. Undersized salt is processed back
                  into the system, ensuring no material is wasted.
                </p>
              </div>
            )}
            <hr className="my-4 me-3" />

            {/* Packaging and Distribution */}
            <div
              className="col-12 d-flex justify-content-between align-items-center mb-lg-0 mb-4"
              onClick={() => toggleSection("packagingDistribution")}
            >
              <h4 className="albert-sans raw-text-style">
                Packaging and Storage
              </h4>
              <i
                className={`bi ${
                  openSections.packagingDistribution
                    ? "bi-dash-circle"
                    : "bi-plus-circle"
                } pe-3`}
                style={{ color: "#7F56D9", cursor: "pointer" }}
              ></i>
            </div>
            {openSections.packagingDistribution && (
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

export default PureVacuumSaltPlant;
