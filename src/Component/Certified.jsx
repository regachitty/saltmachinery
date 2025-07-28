import React from "react";
import certifedPictue1 from "../assets/images/certifedpicture1.png";
import certifedPictue2 from "../assets/images/certifedpicture2.png";
import certifedPictue3 from "../assets/images/certifedpicture3.png";
import "../assets/css/Certified.css"; // Import the CSS file for styling
import imgcertifedImg1 from "../assets/images/imgcertifedImg1.png";
import imgcertifedImg2 from "../assets/images/imgcertifedImg2.jpeg";
import imgcertifedImg3 from "../assets/images/imgcertifedImg3.jpeg";
import imgcertifedImg4 from "../assets/images/imgcertifedImg4.png";
import imgcertifedImg5 from "../assets/images/imgcertifedImg5.png";
import imgcertifedImg6 from "../assets/images/imgcertifedImg6.jpeg";
import imgcertifedImg7 from "../assets/images/imgcertifedImg7.png";
import imgcertifedImg8 from "../assets/images/imgcertifedImg8.webp";
import imgcertifedImg9 from "../assets/images/imgcertifedImg9.webp";

function Certified() {
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-lg-12 col-12 mt-5 mb-5">
            <h2 className="text-center text-uppercase trust-text my-5 albert-sans">
              Certified to Fit your Global Need
            </h2>
            <p className="text-center trust-text-styles mx-auto">
              All our machineries and equipments are certified by leading
              authorities to ensure only the best leaves our shop floor/ product
              line. Routine Inspections, quality checks, and global certificate
              programs at Shriraam Enginnering guarantees you to get the best.
              We work with the best to improve our standards. Few certifying
              agencies we work with are the following
            </p>
          </div>
          <div className="col-lg-12 col-md-12 col-12 d-flex justify-content-center align-items-center flex-wrap">
            <img
              src={certifedPictue1}
              alt=""
              srcset=""
              className="img-fluid certified-image"
            />
            <img
              src={certifedPictue2}
              alt=""
              srcset=""
              className="img-fluid certified-image"
            />
            <img
              src={certifedPictue3}
              alt=""
              srcset=""
              className="img-fluid certified-image"
            />
          </div>
          <div className="col-lg-12 col-md-12 col-12 mt-5 mb-5">
            <h6 className="text-center text-uppercase trust-text my-2 albert-sans small-heading">
              Standards and Certifications
            </h6>
          </div>
          <div className="col-lg-12 col-md-12 col-12 d-flex justify-content-center align-items-center flex-wrap">
            <img
              loading="lazy"
              src={imgcertifedImg1}
              alt=""
              srcset=""
              className="img-fluid certified-small-img"
            />
            <img
              loading="lazy"
              src={imgcertifedImg2}
              alt=""
              srcset=""
              className="img-fluid certified-small-img"
            />
            <img
              loading="lazy"
              src={imgcertifedImg3}
              alt=""
              srcset=""
              className="img-fluid certified-small-img"
            />
            <img
              loading="lazy"
              src={imgcertifedImg4}
              alt=""
              srcset=""
              className="img-fluid certified-small-img"
            />
            <img
              loading="lazy"
              src={imgcertifedImg5}
              alt=""
              srcset=""
              className="img-fluid certified-small-img"
            />
          </div>
          <div className="col-lg-12 col-md-12 col-12 d-flex justify-content-center align-items-center flex-wrap">
            <img
              loading="lazy"
              src={imgcertifedImg6}
              alt=""
              srcset=""
              className="img-fluid certified-small-img"
            />
            <img
              loading="lazy"
              src={imgcertifedImg7}
              alt=""
              srcset=""
              className="img-fluid certified-small-img"
            />
            <img
              loading="lazy"
              src={imgcertifedImg8}
              alt=""
              srcset=""
              className="img-fluid certified-small-img"
            />
            <img
              loading="lazy"
              src={imgcertifedImg9}
              alt=""
              srcset=""
              className="img-fluid certified-small-imgs"
            />
          </div> 
        </div>
      </div>
    </>
  );
}

export default Certified;
