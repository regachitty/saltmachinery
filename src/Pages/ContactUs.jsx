import React, { useState, useRef } from "react";
import "../assets/css/contactUs.css";
import WhiteNav from "../CommonComponent/WhiteNav";
import PhoneInput from "react-phone-input-2";
import Footer from "../CommonComponent/Footer.jsx";
import ContactUsImage from "../assets/images/contactUsImage.svg";
import arrowicon from "../assets/images/ArrowRight.svg";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\-\s()]{5,30}$/.test(formData.phone)) {
      newErrors.phone =
        "Enter a valid phone number (5-30 characters, digits, +, -, (), spaces allowed)";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_bui6cxf",
        "template_3nkdeqr",
        form.current,
        "j0ZYBw2nraPLfCMAv"
      )
      .then(
        (result) => {
          alert("✅ Your message has been sent successfully!");
          setFormData({
            fullName: "",
            email: "",
            phone: "",
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
                  className="img-fluid p-3 w-100"
                  style={{ height: "auto", objectFit: "cover" }}
                />
              </div>

              {/* Form Section */}
              <div className="col-lg-5 col-md-5 col-12 d-flex flex-column justify-content-center form-background my-lg-0 my-3 pt-lg-1 pt-3 pb-3 px-lg-5 px-3 ms-lg-5 ms-0 formoverlaydisplay">
                <h4 className="work-together-style text-uppercase text-md-start text-center pt-5">
                  Let’s work together.
                </h4>
                <p className="pop-para-style text-md-start text-center pb-2">
                  Got a project? Drop us a line if you want to work together on
                  something exciting. Or do you need our help? Feel free to
                  contact us.
                </p>
                <form ref={form} onSubmit={sendEmail}>
                  {/* Full Name */}
                  <div className="mb-3">
                    <label htmlFor="FullName" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control contact-pop"
                      placeholder="Full Name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                    {errors.fullName && (
                      <div className="invalid-feedback d-block">
                        {errors.fullName}
                      </div>
                    )}
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label htmlFor="Email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="text"
                      name="email"
                      className="form-control contact-pop"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <div className="invalid-feedback d-block">
                        {errors.email}
                      </div>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="mb-3">
                    <label htmlFor="inputMobile" className="form-label">
                      Mobile Number
                    </label>
                    <PhoneInput
                      country="in"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      inputProps={{
                        name: "phone",
                        required: true,
                        autoFocus: true,
                      }}
                      containerStyle={{ width: "100%" }}
                      inputStyle={{ width: "100%" }}
                    />
                    {errors.phone && (
                      <div className="invalid-feedback d-block">
                        {errors.phone}
                      </div>
                    )}
                  </div>

                  {/* Message */}
                  <div className="mb-3">
                    <label htmlFor="Message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control contact-pop"
                      placeholder="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="3"
                    />
                    {errors.message && (
                      <div className="invalid-feedback d-block">
                        {errors.message}
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="mb-4">
                    <button
                      type="submit"
                      className="btn btn-primary w-100 d-flex align-items-center justify-content-center"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Request a quote"}
                      <img
                        src={arrowicon}
                        alt="arrow"
                        style={{ width: "16px", marginLeft: "8px" }}
                      />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
