import "../assets/css/AboutUsPage.css";
import WhiteNav from "../CommonComponent/WhiteNav";
import aboutUsImg1 from "../assets/images/aboutimage1.svg";
import ScoreComponent from "../Component/ScoreComponent.jsx";
import BannerOfAboutUs from "../Component/BannerOfAbout.jsx";
import OurTeam from "../Component/OurTeam.jsx";
import "../assets/css/outTeam.css";
import member from "../assets/images/teamMemberPhoto.svg";
// import twittericongray from "../assets/images/twittericongray.svg";
// import browserIcongray from "../assets/images/browserIcongray.svg";
import linkedinIcongray from "../assets/images/likedinIcongray.svg";
import innovation from "../assets/images/innovation.svg";
import sustainability from "../assets/images/sustainability.svg";
import qualityIcon from "../assets/images/qualityIcon.svg";
import integrityIcon from "../assets/images/integrityIcon.svg";
import customerIcon from "../assets/images/customerIcon.svg";
import resultIcon from "../assets/images/resultIcon.svg";
import ContactCom from "../Component/ContactComponent.jsx";
import AboutUsSlider from "../CommonComponent/LogosSliders.jsx";
import twoMember from "../assets/images/abouttwoMemberImage.svg";
import sidearrow from "../assets/images/sidearrow.svg";
import strengthimg from "../assets/images/aboutimage4.svg";

import SaltImageinAbou from "../assets/images/aboutimage2.svg";
import WaterImageinAbou from "../assets/images/aboutimage3.svg";
import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../CommonComponent/Footer.jsx";
import Certifedpictures from "../Component/Certified.jsx";

const AboutUsPage = () => {
  const location = useLocation();

  const aboutUsScores = [
    { target: 30, duration: 1600, text: "No. of countries" },
    { target: 1100, duration: 1500, text: "No. of plants delivered" },
    { target: 6, duration: 2000, text: "Worldwide offices" },
  ];

  useEffect(() => {
    if (location.hash === "#our-value") {
      document
        .getElementById("our-value")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const teamdetail = [
    {
      title: "R. Balasubramanian",
      subTitle: "CEO",
      description:
        "Leading innovation, excellence, and sustainable growth in salt processing.",
      href: "https://www.linkedin.com/in/balasubramanian-shriram-62011929",
    },
    {
      title: "B. Sorna Devi",
      subTitle: "Chief Finance Officer",
      description:
        "Optimizing financial strategy, growth, and efficiency at Shriraam Engineering.",
      href: "https://www.linkedin.com/in/sorna-devi-balasubramanian",
    },
    {
      title: "Ganesh Iyer",
      subTitle: "Director (PVD Turnkey Projects), Director Technical",
      description:
        "Driving innovation and technical excellence in salt processing.",
      href: "https://www.linkedin.com/in/ganesh-iyer-a099746",
    },
    {
      title: "Lorenzo Locatelli-Rossi",
      subTitle: "Innovation and Marketing",
      description:
        "Fostering creativity and leading strategic marketing initiatives.",
      href: "https://www.linkedin.com/in/lorenzo-locatelli-rossi-0aa422221",
    },
    {
      title: "Francois Rossier",
      subTitle: "Business Model and Finance",
      description:
        "Strategizing business models and optimizing financial growth.",
      href: "https://www.linkedin.com/in/francois-rossier-senbumo",
    },
    {
      title: "Caetano Capitao",
      subTitle: "Director Business Development",
      description:
        "Steering business growth and strategic development initiatives.",
      href: "https://www.linkedin.com/in/caetano-capitao-81044557",
    },
    {
      title: "Ragulan Sappanipillai",
      subTitle: "Director Business Development - Africa",
      description:
        "Leading business development and strategic growth across Africa.",
      href: "https://www.linkedin.com/in/sragulan",
    },
    {
      title: "Vijay Tilden",
      subTitle: "General Manager",
      description: "Leading operations with excellence and strategic vision.",
      href: "https://www.linkedin.com/in/vijay-tilden-wilson-19a01523",
    },
  ];

  const valueDetails = [
    {
      valueImg: innovation,
      valuetitle: "Innovation",
      valueDescription:
        "We continuously innovate to provide state-of-the-art salt machinery solutions that enhance efficiency and meet evolving industry demands.",
    },
    {
      valueImg: sustainability,
      valuetitle: "Care",
      valueDescription:
        "We embrace sustainable practices in both design and manufacturing to reduce environmental impact and promote energy efficiency.",
    },
    {
      valueImg: qualityIcon,
      valuetitle: "Business Excellence",
      valueDescription:
        "We are committed to manufacturing durable, reliable, and high-performance machinery, backed by rigorous testing and quality control.",
    },
    {
      valueImg: integrityIcon,
      valuetitle: "Integrity",
      valueDescription:
        "We uphold the highest ethical standards in all our business dealings, ensuring transparency, trust, and responsibility in every action.",
    },
    {
      valueImg: customerIcon,
      valuetitle: "Customer Commitment",
      valueDescription:
        "We prioritize customer satisfaction by delivering tailored solutions and exceptional service that help clients succeed and grow.",
    },
    {
      valueImg: resultIcon,
      valuetitle: "Trust",
      valueDescription:
        "We consistently deliver measurable results by driving innovation, efficiency, and strategic solutions for business success.",
    },
  ];
  return (
    <>
      <WhiteNav />
      <div className="about-us-container">
        <div className="conatctUs-section overflow-hidden">
          <div className="row">
            {/* Running Text Section */}
            <div className="col-lg-12 col-12 mt-lg-2 mt-2">
              <div className="runing-text">
                {Array(6)
                  .fill("about us.")
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
              <p className="aboutus-para-style ps-lg-3 pt-lg-3 pt-3">
                "At Shriraam Engineering,we don’t just refine salt we redefine
                possibilities."
              </p>
            </div>
            {/* <div className="col-lg-6 col-12 d-flex justify-content-evenly align-items-center">
              <div className="vl"></div>
              <div className="vl"></div>
              <div className="vl"></div>
            </div> */}
            <div className="col-lg-3 vl"></div>
            <div className="col-lg-3 vl border-right"></div>
            <div className="col-lg-12  col-12 mt-5">
              <img src={aboutUsImg1} alt="aboutUsImg1" className="img-fluid" />
            </div>
            <div className="col-lg-12 col-12">
              <p className=" text-center m-auto pb-4 aboutUs-paragraph-style">
                Our journey started in the year 2000 with a desire to craft
                modern solutions to produce and turnkey install salt production
                plants, processing/ washing units, and salt refining machines
                around the globe. Iodine deficiency is still a global health
                problem, approximately 2 billion people around the world suffer
                from iodine deficiency. The initiative for universal salt
                iodization has dramatically reduced health problems related to
                iodine deficiency.
              </p>
              <p className=" text-center  m-auto aboutUs-paragraph-style">
                Our journey is designed to influence the lives of millions
                around the world, to partner with esteemed brands and
                institutions that are helping the world fight health conditions
                with a pinch of salt. Over the course of time, we have worked
                with esteemed brands and international organizations, helping
                them install state of the art salt refining plants and
                machinery.
              </p>
            </div>
            <ScoreComponent scores={aboutUsScores} />
            <BannerOfAboutUs />
            <div className="col-lg-12  col-12 mb-3">
              <h2 className="text-uppercase text-center darkgreen-color ourteam-style">
                Our team
              </h2>
            </div>
            <div className="col-lg-12 col-12 mb-3">
              <p className="text-center teamparastyles  mx-auto px-2">
                At Shriraam Engineering, our team upholds innovation,
                excellence, and operational integrity.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="row mt-5 px-lg-0 px-3">
              {teamdetail.map((teamMemberDetail, index) => (
                <div className="col-lg-4 col-md-6 col-12 " key={index}>
                  <div className="team card  me-lg-3 me-0 ">
                    {/* <img
                    src={teamMemberDetail.image}
                    alt="teamMemberImage"
                    className="image-fluid"
                  /> */}
                    <div className="card-body mt-3">
                      <h6 className="ourteam-title card-title">
                        {teamMemberDetail.title}
                      </h6>
                      <p className="ourteam-info card-info">
                        {teamMemberDetail.subTitle}
                      </p>
                      <p className="ourteam-description card-description">
                        {teamMemberDetail.description}
                      </p>
                      <div className="social-icons mt-3 mb-5">
                        {/* <a href="#" className="me-3">
                          <img src={twittericongray} alt="Twitter Icon" />
                        </a> */}
                        <a
                          href={teamMemberDetail.href}
                          className="me-3"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={linkedinIcongray} alt="LinkedIn Icon" />
                        </a>
                        {/* <a href="#">
                          <img src={browserIcongray} alt="Browser Icon" />
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <section id="our-value">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12 mt-5 mb-3">
                <h2 className="text-uppercase text-center ourValue-styles mb-4">
                  Our Value
                </h2>
                <p className="text-center teamparastyles mx-auto px-2 mb-5">
                  At Shriraam Engineering, we are committed to delivering the
                  highest standards in salt machinery. Our core values reflect
                  our dedication to quality, innovation, and long-term success
                  for our customers and and for sustainable environment.
                </p>
              </div>

              {valueDetails.map((ourValue, index) => (
                <React.Fragment key={index}>
                  <div
                    className={`col-lg-4 col-md-6 col-12 mb-2 value-card  ${
                      index % 3 === 2 ? "no-border " : ""
                    }`}
                  >
                    <div className="value-section-container">
                      <div className="value-image-container d-flex justify-content-center">
                        <img
                          src={ourValue.valueImg}
                          alt="innovation"
                          className="image-fluid mb-3 value-image"
                        />
                      </div>
                      <p className="text-center text-black fw-bold value-title albert-sans">
                        {ourValue.valuetitle}
                      </p>
                      <p className="text-center value-description albert-sans-400">
                        {ourValue.valueDescription}
                      </p>
                    </div>
                  </div>
                  {/* Add horizontal line after each row of 3 cards except the last row */}
                  {index % 3 === 2 && index !== valueDetails.length - 1 && (
                    <hr className="my-4 d-none  d-md-none d-lg-block" />
                  )}
                </React.Fragment>
              ))}

              <div className="col-lg-12 col-12 mt-5 mb-5">
                <h2 className="text-center text-uppercase trust-text my-5 albert-sans">
                  Trusted By World’s Best
                </h2>
                <p className="text-center trust-text-styles">
                  Shriraam Engineering has successfully rooted a strong presence
                  in the global arena with decades of experience in designing
                  and developing cutting edge salt refining solutions. We offer
                  an extensive range of projects and innovative process
                  solutions to refine salt under diverse geographical
                  conditions. So far We have installed salt plants in more than
                  20 countries to refine the highest quality of salt.
                </p>
              </div>
            </div>
          </div>
        </section>
        <AboutUsSlider />
        <div className="row p-lg-5 align-items-end mt-5 p-3">
          <div className="col-lg-6 col-12 mt-md-5">
            <p className="saltour-vision-style text-uppercase albert-sans  text-lg-start text-center ">
              Transforming the Future of Salt Processing: Our Vision
            </p>
          </div>
          <div className="col-lg-6 col-12  d-flex flex-column justify-content-center mb-3 text-lg-start text-center">
            <p className="albert-sans-400 salt-process-para-text">
              To be the industry leader in salt processing technology, setting
              global standards through innovation, sustainability, and
              operational excellence, delivering efficient, reliable solutions
              that empower businesses worldwide.
            </p>
          </div>
        </div>

        <div className="row  p-5">
          <div className="col-lg-6 col-12 mb-3">
            <img
              src={SaltImageinAbou}
              alt="SaltImageinAbou"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-6 col-12 mb-3">
            <img
              src={WaterImageinAbou}
              alt="WaterImageinAbou"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="row align-items-center p-lg-5 ">
          <div className="col-lg-6 col-12 d-flex flex-column justify-content-center px-4 py-3">
            <p className="emp-text-style text-uppercase   text-lg-start text-center p-2 p-lg-0 albert-sans">
              02. Empowering Excellence: The Strengths Behind Our Success
            </p>
            <h2 className="text-uppercase ourstreng-style  text-lg-start text-center albert-sans">
              Our Strength
            </h2>
            <p className="strength-para-style   text-lg-start text-center  text-start p-3 p-lg-0 albert-sans-400  ">
              At Shriraam Engineering, excellence drives our success. Combining
              cutting-edge technology with indigenous innovation, we lead the
              salt processing industry. As an ISO-certified company, we maintain
              the highest quality standards through robust QA systems. With a
              global presence in over 30 countries, supported by an extensive
              export network and international dealers, we deliver superior
              solutions worldwide. Our dedicated team ensures seamless
              execution, while our exceptional after-sales service guarantees
              long-term satisfaction and success.
            </p>
          </div>
          <div className="col-lg-6 col-12 d-flex justify-content-center px-5 p-lg-0">
            <img src={strengthimg} alt="strengthimg" className="img-fluid" />
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center mt-lg-5 mt-4 ">
            {/* Left Column - Image */}
            <div className="col-lg-6 col-md-12 col-12 mb-lg-4 text-center  p-lg-0 px-5 mt-lg-5">
              <img
                src={twoMember}
                alt="twoMember"
                className="img-fluid w-100"
                style={{ maxHeight: "700px", objectFit: "cover" }}
              />
            </div>
            <div className="col-lg-1"></div>
            {/* Right Column - Content */}
            <div className="col-lg-5 col-md-12 col-12 gap-4 mt-lg-5">
              <p className="abt-explore mt-lg-3 mt-1 text-center text-lg-start albert-sans">
                03.Explore Opportunities
              </p>
              <h2 className="pageTextcolor abt-joinstyle text-uppercase my-3 text-center text-lg-start albert-sans pb-lg-3">
                Join Our Team
              </h2>
              <p className="abt-para-styles my-3 text-center text-lg-start albert-sans-400 pb-lg-3">
                At SaltMachinery, we’re not just building machines—we’re shaping
                the future of the industry. If you’re passionate about
                innovation, driven by excellence, and ready to make an impact,
                we’d love to have you on board.
              </p>
              <hr className="hr-border-line-contactUs text-start mb-4" />
              <a
                href="#"
                className="d-flex gap-2 text-decoration-none justify-content-center justify-content-lg-start align-items-center pt-lg-3"
              >
                View Open Positions
                <img
                  src={sidearrow}
                  alt="arrow"
                  className="mt-1 img-fluid"
                  style={{ width: "15px", height: "auto" }}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="container mt-5 pt-5">
          <Certifedpictures />
        </div>

        <div className="mt-5 pt-5">
          <ContactCom />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default AboutUsPage;
