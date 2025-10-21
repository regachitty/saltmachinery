import React, { useState, useRef } from "react";
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
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_1q48n1b", // ✅ your EmailJS service ID
        "template_gspznua", // ✅ your EmailJS template ID
        form.current,
        "Bp4KK-eBqRaxmXStb" // ✅ your EmailJS public key
      )
      .then(
        (result) => {
          alert("✅ Your message has been sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
          setErrors({});
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          alert("❌ Failed to send message. Please try again later.");
        }
      )
      .finally(() => setLoading(false));
  };

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
              <div className="col-lg-12 col-md-6 col-12 mb-lg-0 mb-3 d-flex justify-content-start hide-on-mobile">
                <img
                  src={ContactUsImage}
                  alt="contactImage"
                  className="img-fluid p-3  w-100"
                  style={{ height: "auto", objectFit: "cover" }}
                />
              </div>

              {/* Form Section */}
              <div className="col-lg-5 col-md-5 col-12 d-flex flex-column justify-content-center form-background my-lg-0 my-3 pt-lg-1 pt-3 pb-3 px-lg-5 px-3 ms-lg-5 ms-0  formoverlaydisplay">
                <h4 className="work-together-style text-uppercase text-md-start text-center pt-5">
                  Let’s work together.
                </h4>
                <p className="pop-para-style text-md-start text-center pb-2">
                  Got a project? Drop us a line if you want to work together on
                  something exciting. Or do you need our help? Feel free to
                  contact us.
                </p>
                <div className="row justify-content-center">
                  <form ref={form} onSubmit={sendEmail}>
                    {/* First Name Input */}
                    <div className="col-md-6 col-12 mb-3">
                      <label htmlFor="FirstName" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control contact-pop"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                      {errors.firstname && (
                        <div className="invalid-feedback">
                          {errors.firstname}
                        </div>
                      )}
                    </div>
                    <div className="col-md-6 col-12 mb-3">
                      <label htmlFor="FirstName" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control contact-pop"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                      {errors.lastname && (
                        <div className="invalid-feedback">
                          {errors.lastname}
                        </div>
                      )}
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
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>
                    {/* Mobile Number Input */}
                    <div className="col-md-12 col-12 mb-3">
                      <label htmlFor="inputMobile" className="form-label">
                        Mobile Number
                      </label>
                      <PhoneInput
                        country={"in"} // Default country is India
                        value={formData.phone}
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
                        onChange={handleChange}
                        value={formData.message}
                        className="form-control contact-pop"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                      {errors.message && (
                        <div className="invalid-feedback">{errors.message}</div>
                      )}
                    </div>
                    {/* Submit Button */}
                    <div className="col-md-12 col-12 mt-3 mb-4">
                      <button className="btn btn-primary w-100 text-center d-flex align-items-center justify-content-center">
                        <img
                          src={arrowicon}
                          alt="arrow"
                          className="ml-2"
                          style={{ width: "16px", marginLeft: "8px" }}
                          disabled={loading}
                        />
                        {loading ? "Sending..." : " Request a quote"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
