import "../assets/css/conatctComponent.css";
import buildImg1 from "../assets/images/black-build-img1.svg";
import { Link } from "react-router-dom";
const ContactComponent = () => {
  return (
    <>
      <div className="contactComponent px-3 pt-5">
        {" "}
        <div className="contactcon-bg-cl pt-lg-5 pt-5  mt-lg-5 mt-5 mb-lg-3 mb-3">
          <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-md-6 col-sm-12 col-12 pt-lg-4 pt-4 position-relative float-start">
                <img
                  src={buildImg1}
                  alt="build-img"
                  className="img-fluid black-half-build-img"
                />
              </div>
              <div className="col-md-6 col-12 d-flex flex-column align-items-start text-start mt-5">
                <h6 className="text-uppercase title-of-contact  text-lg-start text-start albert-sans-400 mb-3">
                  <span className="no1"> 05.</span> Contact Us
                </h6>
                <h4 className="sub-of-contact text-white text-uppercase  text-md-start albert-sans-400 text-start mb-4">
                  Let’s work together
                </h4>
                <Link
                  to="/contactUs"
                  type="submit"
                  className="getTouch-btn px-lg-5 px-5  py-lg-3 py-3 mb-lg-0 mb-4 lbert-sans-400 "
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactComponent;
