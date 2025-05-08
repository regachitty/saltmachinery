import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
// import booth from "../assets/images/booth.svg";
import booth from "../assets/images/phone-booth-4398750-Photoroom 1.svg";
import "../assets/css/contactPop.css";
import arrowicon from "../assets/images/ArrowRight.svg";

const ContactPop = () => {
    const [phone, setPhone] = useState("");

    return (
        <>
            <div className="container my-5">
                <div className="row contact-pop-style px-4">
                    <div className="col-lg-5  col-12 mb-lg-0 mb-2">
                        <img src={booth} alt="booth" className="img-fluid booth-image" />
                    </div>
                    <div className="col-lg-6 col-12 d-flex flex-column justify-content-center form-background my-5 pt-5 pb-3 px-5 me-lg-5 me-0">
                        <h4 className="work-together-style text-uppercase text-md-start text-center">Let’s work together.</h4>
                        <p className="pop-para-style  text-md-start text-center pb-2">
                            Got a project? Drop us a line if you want to work together on something exciting.
                            Or do you need our help? Feel free to contact us.
                        </p>
                        <div className="row justify-content-center">
                            <div className="col-md-6 col-12 mb-3">
                                <label htmlFor="FirstName" className="form-label">First Name</label>
                                <input type="text" className="form-control contact-pop"  placeholder="First Name" />
                            </div>
                            <div className="col-md-6 col-12 mb-3">
                                <label htmlFor="LastName" className="form-label">Last Name</label>
                                <input type="text" className="form-control contact-pop"  placeholder="Last Name" />
                            </div>
                            {/* <div className="col-md-12 col-12 mb-3">
                                <label htmlFor="inputMobile" className="form-label">Mobile Number</label>
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
                                    className="conatct-pops"
                                />
                            </div> */}
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
        // className="contact-pops custom-phone-input" // Apply the custom class here
      />
    </div>
                            <div className="col-md-12 col-12 mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control contact-pop" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="col-md-12  col-12 mt-3 mb-4">
                                <button className="btn btn-primary w-100 text-center d-flex align-items-center justify-content-center">
                                    Request a quote
                                    <img src={arrowicon} alt="arrow" className="ml-2" style={{ width: "16px", marginLeft: "8px" }} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPop;