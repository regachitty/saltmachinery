import React, { useState, useEffect } from "react";
import saltRefineryImage from "../assets/images/saltRefineryImage.svg";
import WhiteNav from "../CommonComponent/WhiteNav";
import "../assets/css/machinerySaltRefinery.css";
import ImageSlider from "../CommonComponent/ImageSlider";
import ProductSpecific from "../CommonComponent/ProductSpecific";
import TrustedSection from "../CommonComponent/TrustedSection";
import ProductSimplySlider from "../CommonComponent/ProductSimplySlider";
import ReadyToBuild from "../CommonComponent/ReadyToBuild";
import FrequentlyAsked from "../CommonComponent/FrequentlyAsked";
import StillHaveQuestion from "../CommonComponent/StillHaveQuestion";
import Footer from "../CommonComponent/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import contactusimg from "../assets/images/conntactusimg.svg";

const RefineryPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const refineryPageFAQs = [
    {
      question: "What is a salt refinery plant?",
      answer:
        "A salt refinery plant is an industrial facility designed to process raw salt and remove impurities, ensuring it meets high-quality standards. It includes steps like washing, brine recycling, drying, iodization, and packaging to produce refined salt for commercial use.",
    },
    {
      question: "What types of salt can be processed in this plant?",
      answer:
        "Our salt refinery plants can process various types of salt, including sea salt, rock salt, and lake salt, to produce high-quality edible salt and industrial-grade salt.",
    },
    {
      question: "Can the plant be customized for specific requirements?",
      answer:
        "Yes, our salt refinery plants are fully customizable to meet specific capacity, space, and processing requirements. We can tailor the machinery and workflow to align with your operational needs.",
    },
    {
      question: "What are the key benefits of using your salt refinery plant?",
      answer:
        "Our plants ensure efficient impurity removal, precise brine recycling, and uniform iodization. They are designed to optimize productivity, reduce waste, and deliver high-quality refined salt while ensuring long-term operational reliability.",
    },
    {
      question: "How energy-efficient are these plants?",
      answer:
        "Our salt refinery plants are engineered with energy-efficient systems like fluidized bed dryers, optimized heating processes, and recycling mechanisms to minimize power consumption and operating costs.",
    },
    {
      question: "Is technical support and maintenance provided?",
      answer:
        "Yes, we offer comprehensive technical support and maintenance services to ensure your salt refinery plant operates smoothly. Our team is available for installation, troubleshooting, and regular servicing.",
    },
    {
      question: "What is the production capacity of the plant?",
      answer:
        "The production capacity can vary depending on the plant size and configuration. We offer plants suitable for small-scale operations as well as large-scale industrial production, with capacities ranging from a few tons to hundreds of tons per day.",
    },
    {
      question: "How does the packaging process work?",
      answer:
        "Our plants are equipped with automated packing machines that seal refined salt in pouches or bags of various sizes. This ensures the product stays fresh, uncontaminated, and ready for distribution.",
    },
    {
      question: "What safety measures are in place for plant operations?",
      answer:
        "Our salt refinery plants are built with safety mechanisms such as automatic shut-off features, dust control systems, and durable construction to ensure safe and reliable operations.",
    },
    {
      question: "How long does it take to set up a salt refinery plant?",
      answer:
        "The setup time depends on the size and complexity of the plant. On average, it takes a few weeks to a few months for installation, testing, and commissioning.",
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

  useEffect(() => {
    const scrollRevealElements = document.querySelectorAll(".scroll-reveal");

    const revealOnScroll = () => {
      scrollRevealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = elementTop < window.innerHeight && elementBottom >= 0;

        if (isVisible) {
          element.classList.add("active");
        } else {
          element.classList.remove("active"); // Optional: Remove class if not in view
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    window.addEventListener("resize", revealOnScroll);
    revealOnScroll(); // Initial check

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("scroll", revealOnScroll);
      window.removeEventListener("resize", revealOnScroll);
    };
  }, []);

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
              Mechanical Salt Refinery
            </h2>
            <p className="saltRefinery-style albert-sans-400 ps-2 text-md-start text-center justify-content-center">
              Efficient and Reliable Salt Refining Solutions Tailored to Your
              Needs. Discover state-of-the-art salt processing systems designed
              to deliver premium refined salt with unmatched efficiency.
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

        <div className="row mt-5 p-3">
          <div className="col-lg-6 col-12 p-3 p-lg-4 sticky-slider">
            <ImageSlider />
          </div>

          <div className="col-lg-6 p-3 p-lg-4">
            <h2 className="plant-text-style fw-bold albert-sans pb-2">
              Salt Refinery Plant: Efficient and High-Quality Salt Processing
              Solutions
            </h2>
            <p className="cutting-edge-style albert-sans-400 mb-lg-2 mb-4">
              Our cutting-edge salt refinery plants are designed to deliver
              premium quality refined salt through a streamlined, efficient
              process. Engineered for both small and large-scale operations, our
              systems ensure maximum impurity removal, precise brine recycling,
              and efficient drying, all while adhering to industry standards.
              From raw salt feeding to the final packaging, every stage is
              optimized for quality and productivity. With customizable options,
              these plants cater to diverse needs in salt refining, ensuring
              unparalleled performance and longevity. Experience seamless
              processing with our state-of-the-art solutions tailored to elevate
              your salt refining capabilities.
            </p>
            <hr className="my-5 me-3" />

            <div
              className="col-12 d-flex justify-content-between align-items-center mb-lg-0 mb-4"
              onClick={() => toggleSection("rawProcessing")}
            >
              <h4 className="albert-sans raw-text-style">
                Raw Salt Processing
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
                  The process begins with loading raw salt into a feed hopper,
                  where impurities are efficiently removed using a screw washer
                  and magnets. The washed salt is passed through a wet mill for
                  grinding, and brine is added to create a slurry. This slurry
                  undergoes further processing in tanks for thorough cleaning
                  and decanting.
                </p>
              </div>
            )}
            <hr className="my-4 me-3" />

            <div
              className="col-12 d-flex justify-content-between align-items-center mb-lg-0 mb-4"
              onClick={() => toggleSection("brineRecycling")}
            >
              <h4 className="albert-sans raw-text-style">
                Brine Recycling and Washing
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
                  Brine plays a crucial role in the salt refining process. After
                  decanting, brine is recycled and pumped back into the system.
                  Through specialized tanks and pumps, the slurry concentration
                  is increased to 50%, preparing it for further processing in
                  the thickener and centrifuge.
                </p>
              </div>
            )}
            <hr className="my-4 me-3" />

            <div
              className="col-12 d-flex justify-content-between align-items-center mb-lg-0 mb-4"
              onClick={() => toggleSection("dryingandIodization")}
            >
              <h4 className="albert-sans raw-text-style">
                Drying and Iodization
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
                  After centrifugation, the salt is conveyed to a fluidized bed
                  dryer where it is dried and iodized. This ensures the final
                  product meets nutritional standards. The salt is then cooled
                  and screened for uniformity, preparing it for final blending
                  and packaging.
                </p>
              </div>
            )}
            <hr className="my-4 me-3" />

            <div
              className="col-12 d-flex justify-content-between align-items-center mb-lg-0 mb-4"
              onClick={() => toggleSection("screeningBlending")}
            >
              <h4 className="albert-sans raw-text-style">
                Screening and Blending
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
                  The refined salt undergoes screening to separate undersized
                  particles before being mixed with free-flow agents in a screw
                  blender. This process ensures consistency and prevents
                  clumping, delivering a premium-quality product ready for
                  market distribution.
                </p>
              </div>
            )}
            <hr className="my-4 me-3" />

            <div
              className="col-12 d-flex justify-content-between align-items-center mb-lg-0 mb-4"
              onClick={() => toggleSection("packagingDistribution")}
            >
              <h4 className="albert-sans raw-text-style">
                Packaging and Distribution
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
                  The final product is conveyed to a packing machine, where it
                  is sealed in pouches or bags. Designed to accommodate various
                  packaging sizes, the system ensures the salt remains fresh and
                  uncontaminated during storage and transit.
                </p>
              </div>
            )}
            <hr className="my-4 me-3" />

            <ProductSpecific />
          </div>
        </div>
        <TrustedSection />
        <div className="pt-5 mb-lg-5 mb-3">
          <ProductSimplySlider />
        </div>
        <div className="my-lg-5 my-3">
          <FrequentlyAsked faqs={refineryPageFAQs} />
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

export default RefineryPage;
