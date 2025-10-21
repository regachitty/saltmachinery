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
import saltpharma1 from "../assets/images/saltplantiproductimage.svg";
import saltpharma2 from "../assets/images/saltplantiproductimage.svg";
const pharmasaltimages = [saltpharma1, saltpharma2];
import AOS from "aos";
import "aos/dist/aos.css";
const PharmaSaltPlant = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const pharmaSaltPlantFAQs = [
    {
      question:
        "What is the Pharma Salt Plant offered by Shriraam Engineering?",
      answer:
        "Shriraam Engineering’s Pharma Salt Plant is a state-of-the-art facility designed to produce pharmaceutical-grade sodium chloride (NaCl) with a purity exceeding 99.99%. It utilizes advanced chemical dosing, multi-stage filtration, and evaporation technologies to ensure high-quality salt suitable for pharmaceutical and healthcare applications.",
    },
    {
      question: "What purity level does the Pharma Salt Plant achieve?",
      answer:
        "Our Pharma Salt Plant delivers sodium chloride with a purity level of over 99.99%, meeting stringent global standards like USP, BP, and GMP for pharmaceutical-grade salt production.",
    },
    {
      question: "What industries benefit from the salt produced by this plant?",
      answer:
        "The high-purity salt produced by our Pharma Salt Plant is widely used in the pharmaceutical and healthcare industries for applications such as IV fluids, dialysis solutions, oral rehydration salts (ORS), and medicinal formulations.",
    },
    {
      question:
        "What technologies are incorporated into the Pharma Salt Plant?",
      answer:
        "Shriraam Engineering’s Pharma Salt Plant incorporates advanced technologies, including chemical dosing systems for impurity removal, multi-stage filtration processes for enhanced clarity, and evaporation systems for precise crystallization. These ensure consistent and high-quality output while adhering to global pharmaceutical standards.",
    },
    {
      question:
        "Is the Pharma Salt Plant customizable to specific production needs?",
      answer:
        "Yes, Shriraam Engineering offers customizable solutions to meet specific production requirements. Whether you need scalability, automation, or integration with existing systems, our experts can tailor the plant to suit your operational goals.",
    },
    {
      question:
        "Does the Pharma Salt Plant comply with international standards?",
      answer:
        "Absolutely. Our Pharma Salt Plant is designed to comply with globally recognized standards, including USP (United States Pharmacopeia), BP (British Pharmacopoeia), and GMP (Good Manufacturing Practices), ensuring safety, reliability, and quality in pharmaceutical salt production.",
    },
    {
      question:
        "What are the environmental benefits of Shriraam's Pharma Salt Plant?",
      answer:
        "Our plant incorporates eco-friendly processes that minimize waste, optimize energy use, and reduce environmental impact. Advanced filtration and recycling techniques ensure sustainable operation.",
    },
    {
      question:
        "What sets Shriraam’s Pharma Salt Plant apart from competitors?",
      answer:
        "Shriraam’s Pharma Salt Plant stands out due to its superior purity levels exceeding 99.99%, advanced technology and engineering expertise, compliance with global standards, customizable design and scalability options, and proven track record of reliability and efficiency in pharmaceutical salt production.",
    },
    {
      question:
        "Can Shriraam Engineering assist with plant installation and after-sales service?",
      answer:
        "Yes, we provide comprehensive services, including design and installation support, operator training, regular maintenance and technical assistance, and spare parts supply and performance optimization.",
    },
    {
      question:
        "How can I get started with a Pharma Salt Plant for my business?",
      answer:
        "To get started, contact our expert team at Shriraam Engineering. We’ll guide you through the design, customization, and implementation process, ensuring your plant meets all your production and compliance requirements.",
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
              Pharma Salt Plant
            </h2>
            <p className="saltRefinery-style albert-sans-400 ps-2 text-md-start text-center justify-content-center">
              Our Pharma Salt Plant is designed to deliver high-purity
              pharmaceutical-grade sodium chloride (NaCl) with a purity level
              exceeding 99.99%. With advanced technology and precision
              engineering, this plant converts raw vacuum salt into pure, white
              crystalline salt suitable for critical applications in the
              healthcare and pharmaceutical industries. The process incorporates
              stringent quality controls, including chemical dosing, filtration,
              and evaporation, ensuring consistent and superior output.
              Shriraam’s Pharma Salt Plant stands as a benchmark in efficiency,
              reliability, and compliance with global standards. Choose our
              cutting-edge solutions for unmatched purity, scalability, and
              operational excellence.
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
            <ImageSlider images={pharmasaltimages} />
          </div>
          <div
            className="col-lg-6 p-3 p-lg-4"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="500"
          >
            <h2 className="plant-text-style fw-bold albert-sans pb-2">
              Overview of the Pharma Salt Plant
            </h2>
            <p className="cutting-edge-style  albert-sans-400 mb-lg-2 mb-4">
              The Pharma Salt Plant is a specialized facility that utilizes
              advanced chemical treatment, filtration, and evaporation processes
              to produce pharmaceutical-grade salt with a purity level of over
              99.99%. This ultra-pure sodium chloride is essential for
              applications in saline solutions, dialysis treatments, and
              infusion products.
            </p>
            <hr className="my-5 me-3" />

            {/* Raw Salt Processing */}
            <div
              className="col-12 d-flex justify-content-between align-items-center mb-lg-0 mb-4"
              onClick={() => toggleSection("rawProcessing")}
            >
              <h4 className="albert-sans raw-text-style">
                Advanced Manufacturing Process
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
                  The plant starts with dissolving vacuum refinery salt using
                  demineralized or condensate water. The raw saturated brine
                  undergoes multiple stages of chemical treatment and precision
                  filtration to eliminate impurities. The final evaporation step
                  ensures the production of high-purity pharma-grade salt that
                  meets global standards.
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
                Applications of Pharmaceutical Salt
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
                  Pharmaceutical-grade salt is widely used in the healthcare
                  sector. Its applications include saline and infusion
                  solutions, dialysis treatments, medications, dietary
                  supplements, and pharmaceutical formulations that demand
                  ultra-pure sodium chloride.
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
                Advantages of Shriraam’s Pharma Salt Plan
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
                  Shriraam Engineering ensures unmatched performance with a
                  Pharma Salt Plant designed for high efficiency and purity. The
                  plant delivers superior quality output, customizable solutions
                  for specific production needs, and energy-efficient systems
                  that minimize operational costs while maintaining compliance
                  with international standards.
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
                Comprehensive Support Services
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
                  Shriraam Engineering offers turnkey installation services,
                  operator training programs, long-term maintenance, and spare
                  parts support. Additionally, the process is optimised for
                  maximum efficiency, ensuring seamless operations and superior
                  output for clients.
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
          <FrequentlyAsked faqs={pharmaSaltPlantFAQs} />
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

export default PharmaSaltPlant;
