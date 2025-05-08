import React, { useEffect } from "react";
import "../assets/css/home.css";
import serviceImg from "../assets/images/serviceimg.svg";
import servicecrticon from "../assets/images/serviceCrtIcon.svg";
import Navbar from "../CommonComponent/Navbar.jsx";
import Footer from "../CommonComponent/Footer.jsx";
import Testimonal from "../Component/Testimonials.jsx";
import Logoslider from "../CommonComponent/LogoSlider.jsx";
import buildImg from "../assets/images/building-img2.svg";
import ScoreNUmber from "../Component/ScoreComponent.jsx";
import ProductSlider from "../Component/Carousel.jsx";
import ContactCom from "../Component/ContactComponent.jsx";
import Map from "../Component/Map.jsx";
import manimachineContainer from "../assets/images/bannerMachine-crop2.svg";
import Gallery from "../Component/Gallery.jsx";
import { Link } from "react-router-dom";
import ContactPop from "../CommonComponent/ContactPop.jsx";
import { Modal } from "antd";
import Globe from "../CommonComponent/GlobeComponent.jsx";
const Home = () => {
  const homeScores = [
    { target: 50, duration: 1600, text: "Years of experience" },
    { target: 400, duration: 1500, text: "Satisfied clients" },
    { target: 500, duration: 2000, text: "Projects delivered" },
  ];

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="position-relative page-container">
        <div className="overflow-hidden">
          <div className="bg-cl-banner over-flow-hidden-style banner">
            <div className="row ">
              <div className="col-lg-8 col-md-6 col-12 ps-md-5 mt-5 mt-lg-0 sub-banner-content d-flex align-items-md-start align-items-center ">
                <h2 className="albert-sans banner-head-style text-white banner_title text-md-start text-center mb-md-3 mb-3">
                  Engineering the Future of Salt Refining
                </h2>
                <Link
                  className="quote-btn fs-15 d-flex justify-content-md-start justify-content-center px-md-4 px-3 py-md-2 py-2 mb-md-3 mb-3 albert-sans"
                  onClick={showModal}
                >
                  Get Quote
                </Link>

                {/* <div className="vertical-lines"></div>
               <div className="vertical-lines"></div> */}
              </div>

              <div className="col-lg-4 col-md-4 col-12 d-flex align-items-lg-start align-items-center mt-md-5 mb-lg-0 pt-4">
                {/* <hr className="hr-behind-image" /> */}
                <img
                  src={
                    manimachineContainer
                      ? manimachineContainer
                      : manimachineContainer
                  }
                  alt="manimachineConatainer"
                  className="banner-img banner-img d-flex justify-content-lg-start justify-content-center"
                />
              </div>
              {/* <div className="col-lg-2 col-md-2"></div> */}
            </div>
            <div className="text-marquee">
              {Array(3)
                .fill(".shriraam.engineering")
                .map((item, index) => (
                  <h2
                    key={index}
                    className="org-name-style text-white text-uppercase"
                  >
                    {item}
                  </h2>
                ))}
            </div>
            <div className="text-marquee">
              {Array(3)
                .fill(".shriraam.engineering")
                .map((item, index) => (
                  <h2
                    key={index}
                    className="org-name-style stroke text-uppercase"
                  >
                    {item}
                  </h2>
                ))}
            </div>
          </div>

          {/* <section className="outline_sec">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-3">
                  <div className="out_line"></div>
                </div>
                <div className="col-md-3">
                  <div className="out_line"></div>
                </div>
                <div className="col-md-3">
                  <div className="out_line"></div>
                </div>
              </div>
            </div>
          </section> */}

          <div className="content position-relative">
            <div className="container-fluid">
              <div className="row mt-lg-5 mt-5 mb-lg-5 mb-5 ps-lg-5 pe-lg-5">
                <div className="col-lg-5 col-12 pt-lg-3 pt-3  ">
                  <h6 className="text-uppercase title-of-about text-lg-start text-start">
                    <span className="about-heading-text-color albert-sans">
                      01.
                    </span>{" "}
                    About Us
                  </h6>
                  <h3 className=" about-heading text-uppercase fw-semibold text-lg-start text-start albert-sans">
                    Innovative Salt Refining Solutions for a Sustainable Future
                  </h3>
                </div>
                <div className="col-lg-1 d-none d-lg-block"></div>
                <div className="col-lg-6  col-12 mt-lg-4 mt-0 pt-lg-5 pt-0 ">
                  <p className="AboutUs albert-sans-400  py-lg-4 py-4 px-lg-0 px-2 d-flex justify-content-center">
                    At Shriraam Engineering, we lead the industry with advanced,
                    eco-friendly salt refining solutions tailored to meet the
                    unique demands of our global clients. From sea salt to rock
                    salt and pure vacuum-dried salt, our turnkey systems are
                    designed for precision, efficiency, and sustainability. With
                    over 40 years of expertise and a presence in 20+ countries,
                    we deliver custom-engineered machinery that ensures superior
                    quality at every stage of the salt production process.
                    Choose Shriraam for innovative, reliable, and cost-effective
                    salt processing solutions that set new standards in the
                    industry.
                  </p>
                  <Link
                    to="/aboutus"
                    type="submit"
                    className="about-btn px-lg-5 px-5 py-lg-3 py-3"
                  >
                    More About Us
                  </Link>
                </div>
              </div>
            </div>
            <ScoreNUmber scores={homeScores} />

            <div className="mb-lg-5 mb-5 pb-lg-5 pb-5">
              <div className="text-section my-lg-5 my-2">
                <h6 className="text-uppercase title-of-about ps-lg-5 ps-2 text-lg-start text-start">
                  <span className="product-heading-text-color">02.</span>Our
                  Products
                </h6>
                <h1 className="display-3 product-heading text-uppercase fw-semibold text-lg-start text-start ps-lg-5 ps-2">
                  Simplyfying Salt <br /> production
                </h1>
              </div>
              <ProductSlider />
            </div>
            <div className="component-bg-img pt-lg-5 pt-5  mt-lg-5 mt-5 mb-lg-5 mb-5">
              <div className="container">
                <div className="row">
                  <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 pt-lg-4 pt-4 position-relative fload-start">
                    <img
                      src={buildImg}
                      alt="build-img"
                      className="img-fluid half-build-img"
                    />
                  </div>
                  <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 pt-lg-4 pt-4">
                    <h6 className="text-uppercase title-of-mission text-lg-start text-start albert-sans">
                      <span className="no"> 03.</span> Our Mission
                    </h6>
                    <h1 className="fs-50 mission-style text-uppercase text-white   text-lg-start text-start albert-sans">
                      revolutionizing salt machinery for a sustainable future
                    </h1>
                    <p className="mission-parag  text-white text-start albert-sans-400">
                      At Shriraam Engineering, we redefine salt processing with
                      state-of-the-art machinery designed for precision and
                      efficiency. Our solutions cater to diverse needs—be it sea
                      salt, lake salt, or rock salt—delivering unparalleled
                      quality while optimizing production processes. With a
                      focus on innovation and sustainability, we empower
                      industries to achieve more with less, transforming the way
                      salt is refined globally.
                    </p>
                    <Link
                      to={"/about#our-value"}
                      type="submit"
                      className="readmore-btn px-lg-5 px-5 py-lg-3 py-3 mb-3 albert-sans"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid ">
              <div className="row  ps-lg-5">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 pt-lg-5 pt-0">
                  <h6 className="text-uppercase title-of-service ps-lg-2 ps-2 text-lg-start text-start pt-lg-5 mt-lg-5 mt-0 albert-sans">
                    04. Services
                  </h6>
                  <h1 className="display-4 service-heading fw-bolder text-lg-start text-start albert-sans">
                    TAILORED SALT MACHINERY SOLUTIONS FOR EVERY INDUSTRY
                  </h1>
                  <p className="service-parag text-start albert-sans-400">
                    We specialize in delivering cutting-edge salt processing
                    machinery customized to meet the unique demands of your
                    business. From mechanical salt refining and vacuum drying
                    plants to advanced iodization and low-sodium salt solutions,
                    our comprehensive services ensure superior performance and
                    efficiency. Whether you're scaling up production or refining
                    processes, Shriraam Engineering combines innovation,
                    expertise, and global standards to provide tailored
                    solutions that exceed expectations.
                  </p>
                  <div
                    style={{ display: "flex", alignItems: "center" }}
                    className="pb-lg-1 pb-1"
                  >
                    <i>
                      <img src={servicecrticon} alt="servicecrticon" />
                    </i>
                    <p
                      className="crt-content fw-semibold "
                      style={{ margin: "0 0 0 10px" }}
                    >
                      High-Performance Equipment: Engineered for optimal results
                      and durability
                    </p>
                  </div>
                  <div
                    style={{ display: "flex", alignItems: "center" }}
                    className="pb-lg-1 pb-1"
                  >
                    <i>
                      <img src={servicecrticon} alt="servicecrticon" />
                    </i>
                    <p
                      className="crt-content fw-semibold "
                      style={{ margin: "0 0 0 10px" }}
                    >
                      Custom Solutions: Designed to fit your specific industrial
                      needs.
                    </p>
                  </div>
                  <div
                    style={{ display: "flex", alignItems: "center" }}
                    className="pb-lg-1 pb-1"
                  >
                    <i>
                      <img src={servicecrticon} alt="servicecrticon" />
                    </i>
                    <p
                      className="crt-content fw-semibold "
                      style={{ margin: "0 0 0 10px" }}
                    >
                      Global Expertise: Proven installations across diverse
                      geographies.
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 pt-lg-5 pt-5">
                  <img
                    src={serviceImg}
                    alt="serviceImg"
                    className="serviceimg img-fluid float-end"
                  />
                </div>
              </div>
            </div>
            <div className="gallery mt-5">
              <Gallery />
            </div>
            <Testimonal />
            <div className="py-lg-5">
              <Logoslider />
            </div>
            {/* <Map /> */}
            <div className="background-color-globe mb-0">
              <Globe />
            </div>
            <div className="background-color-contact">
              <ContactCom />
            </div>

            <Footer />
          </div>
        </div>
      </div>
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={1000}
        centered
      >
        <ContactPop />
      </Modal>
    </>
  );
};

export default Home;
