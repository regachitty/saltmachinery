import React, { useState } from "react";
import "../assets/css/contactUs.css";
import saltImg from "../assets/images/saltMachinesImg.svg";
import emailicon from "../assets/images/email-img.svg";
// import clientLogo1 from "../assets/images/clientlogo1.svg";
// import clientLogo2 from "../assets/images/clientlogo2.svg";
// import clientLogo3 from "../assets/images/clientlogo3.svg";
// import clientLogo4 from "../assets/images/clientlogo4.svg";
// import clientLogo5 from "../assets/images/clientlogo5.svg";
// import clientLogo6 from "../assets/images/clientlogo6.svg";
// import clientLogo7 from "../assets/images/clientLogo7.svg";

import contactImage2 from "../assets/images/contactimage1.svg";
import contactimage1 from "../assets/images/contactSecImg2.svg";
import contacticonimg1 from "../assets/images/contactIconImg1.svg";
import contacticonimg2 from "../assets/images/conatctIconImg2.svg";
import conatctImg3 from "../assets/images/conntactusimg.svg";
import WhiteNav from "../CommonComponent/WhiteNav";
import PhoneInput from "react-phone-input-2";
import arrowicon from "../assets/images/ArrowRight.svg";
import booth from "../assets/images/phone-booth-4398750-Photoroom 1.svg";
import LogosSliders from "../CommonComponent/LogosSliders";
import Footer from "../CommonComponent/Footer.jsx";
import ContactUsImage from "../assets/images/contactUsImage.svg";
const ContactUs = () => {
  const [phone, setPhone] = useState("");
  // const logos = [
  //     clientLogo1,
  //     clientLogo2,
  //     clientLogo3,
  //     clientLogo4,
  //     clientLogo5,
  //     clientLogo6,
  //     clientLogo7,
  // ];
  return (
    <>
      <WhiteNav />
      <div className="conatctUs-section overflow-hidden">
        <div className="row">
          {/* Running Text Section */}
          <div className="col-lg-12 col-12 mt-lg-2 mt-2">
            <div className="runing-text">
              {Array(6)
                .fill("contact us.")
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
            <p className="contact-para-style ps-lg-3 pt-lg-3 pt-3">
              Let’s Start Shaping the Future of Salt Refining Together at
              Shriraam Engineering.
            </p>
          </div>
          <div className="col-lg-6 col-12 d-flex justify-content-evenly align-items-center">
            <div className="vl"></div>
            <div className="vl"></div>
            <div className="vl"></div>
          </div>

          {/* Divider Line */}
          <div className="col-lg-12 col-12 mb-3">
            <hr className="hr-border-line-conatctUs" />
          </div>

          <div className="container">
            <div className="row contact-pop-style px-4 py-5">
              {/* Image Section */}
              <div className="col-lg-6 col-md-6 col-12 mb-lg-0 mb-3 d-flex justify-content-start hide-on-mobile">
                <img
                  src={ContactUsImage}
                  alt="contactImage"
                  className="img-fluid p-3"
                />
              </div>

              {/* Form Section */}
              <div className="col-lg-5 col-md-5 col-12 d-flex flex-column justify-content-center form-background my-lg-0 my-3 pt-lg-1 pt-3 pb-3 px-lg-5 px-3 ms-lg-5 ms-0">
                <h4 className="work-together-style text-uppercase text-md-start text-center pt-5">
                  Let’s work together.
                </h4>
                <p className="pop-para-style text-md-start text-center pb-2">
                  Got a project? Drop us a line if you want to work together on
                  something exciting. Or do you need our help? Feel free to
                  contact us.
                </p>
                <div className="row justify-content-center">
                  {/* First Name Input */}
                  <div className="col-md-6 col-12 mb-3">
                    <label htmlFor="FirstName" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control contact-pop"
                      placeholder="First Name"
                    />
                  </div>
                  {/* Last Name Input */}
                  <div className="col-md-6 col-12 mb-3">
                    <label htmlFor="Email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="text"
                      className="form-control contact-pop"
                      placeholder="Email Address"
                    />
                  </div>
                  {/* Mobile Number Input */}
                  <div className="col-md-12 col-12 mb-3">
                    <label htmlFor="inputMobile" className="form-label">
                      Mobile Number
                    </label>
                    <PhoneInput
                      country={"in"} // Default country is India
                      value={phone}
                      onChange={(phone) => setPhone(phone)}
                      inputProps={{
                        name: "phone",
                        required: true,
                        autoFocus: true,
                      }}
                      containerStyle={{ width: "100%" }}
                      inputStyle={{ width: "100%" }}
                    />
                  </div>
                  {/* Message Textarea */}
                  <div className="col-md-12 col-12 mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Message
                    </label>
                    <textarea
                      className="form-control contact-pop"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                  {/* Submit Button */}
                  <div className="col-md-12 col-12 mt-3 mb-4">
                    <button className="btn btn-primary w-100 text-center d-flex align-items-center justify-content-center">
                      Request a quote
                      <img
                        src={arrowicon}
                        alt="arrow"
                        className="ml-2"
                        style={{ width: "16px", marginLeft: "8px" }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12 my-2 d-flex justify-content-center">
            <div className="contactImgcontain2 p-3">
              <img
                src={contactImage2}
                alt="contactImg1"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="col-lg-6 col-12 my-2 d-flex justify-content-center">
            <div className="contactImgcontain2 p-3">
              <img
                src={contactimage1}
                alt="contactImg2"
                className="img-fluid"
              />
            </div>
          </div>

          <hr className="hr-line-contactUs" />
          {/* <div className="logos">
                        <div className="logo-slider">
                            {logos.concat(logos).map((logo, index) => (
                                <div className="logo-with-lines1" key={index}>
                                    <img src={logo} alt={`logoclient${index + 1}`} />
                                    <div className="vertical-lines"></div>
                                </div>
                            ))}
                        </div>
                    </div> */}
          <LogosSliders />
          <hr className="hr-line-contactUs" />
        </div>
      </div>
      <div className="mt-3">
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
