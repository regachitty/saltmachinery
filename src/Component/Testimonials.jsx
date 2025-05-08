import React from "react";
import flag1 from "../assets/images/flag1.svg";
import flag2 from "../assets/images/flag1.svg";
import flag3 from "../assets/images/flag1.svg";
import flag4 from "../assets/images/flag1.svg";
import "../assets/css/testimonials.css";

const testimonialsData = [
  {
    title: "Lorem ipsum dolor sit amet,",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    country: "USA",
    flag: flag1,
  },
  {
    title: "Lorem ipsum dolor sit amet,",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    country: "Angola",
    flag: flag2,
  },
  {
    title: "Lorem ipsum dolor sit amet,",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    country: "Cameroon",
    flag: flag3,
  },
  {
    title: "Lorem ipsum dolor sit amet,",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    country: "Egypt",
    flag: flag4,
  },
];

const Testimonals = () => {
  return (
    <div className="testimonial-bg-cl py-5 ">
      <div className="containe-fluid mt-lg-5 mt-5 pt-5">
        <div className="row">
          <div className="col-md-12 d-block">
            <div className="testimonials ps-5 pb-4">
              <h6 className="text-uppercase title-of-testimonial ps-lg-2 ps-2 text-lg-start text-center albert-sans">
                05. Testimonials
              </h6>
              <h1 className="testimonal-heading text-uppercase  text-bolder text-lg-start text-center mb-md-3 mb-2 albert-sans">
                WHAT OUR GLOBAL PARTNERS SAY
              </h1>
            </div>
            {/* <div className="testimonial-align-style"> */}
            <div className="cards1  mb-md-4 mb-sm-3 mb-2 ms-lg-5 ms-0">
              <div className="cards-slider1">
                {testimonialsData.map((testimonials, index) => (
                  <div className="testimonial-card1" key={index}>
                    <div className="test-card1 py-lg-3 py-4 px-lg-4 px-5">
                      <div className="card-title fw-bold my-3">
                        <h5 className="card-font-style dm-sans">
                          {testimonials.title}
                        </h5>
                      </div>
                      <div className="card-body mb-3">
                        <p className=" card-body-style text-start dm-sans-400">
                          {testimonials.description}
                        </p>
                      </div>
                      <div className="card-end fw-bolder">
                        <p className="dm-sans ">
                          <span>
                            <img
                              src={testimonials.flag}
                              className="pe-2"
                              alt="flag"
                            />
                          </span>
                          {testimonials.country}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Duplicate the items for seamless infinite loop */}
                {testimonialsData.map((testimonials, index) => (
                  <div
                    className="testimonial-card1"
                    key={index + testimonialsData.length}
                  >
                    <div className="test-card1 py-lg-3 py-4 px-lg-4 px-5">
                      <div className="card-title fw-bold my-3">
                        <h5 className="card-font-style dm-sans">
                          {testimonials.title}
                        </h5>
                      </div>
                      <div className="card-body mb-3">
                        <p className=" card-body-style text-start dm-sans-400">
                          {testimonials.description}
                        </p>
                      </div>
                      <div className="card-end fw-bolder">
                        <p className="dm-sans">
                          <span>
                            <img
                              src={testimonials.flag}
                              className="pe-2"
                              alt="flag"
                            />
                          </span>
                          {testimonials.country}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Card Section 2 */}
            <div className="cards2 ms-lg-5 ms-0 ">
              <div className="cards-slider2">
                {testimonialsData.map((testimonial, idx) => (
                  <div className="testimonial-card2" key={idx}>
                    <div className="test-card2 py-lg-3 py-4 px-lg-4 px-5">
                      <div className="card-title fw-bold my-3">
                        <h5 className=" card-font-style dm-sans">
                          {testimonial.title}
                        </h5>
                      </div>
                      <div className="card-body mb-3">
                        <p className=" card-body-style text-start dm-sans-400">
                          {testimonial.description}
                        </p>
                      </div>
                      <div className="card-end fw-bolder">
                        <p className="dm-sans">
                          <span>
                            <img
                              src={testimonial.flag}
                              className="  country-font-style pe-2 "
                              alt="flag"
                            />
                          </span>
                          {testimonial.country}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Duplicate the items for seamless infinite loop */}
                {testimonialsData.map((testimonial, idx) => (
                  <div
                    className="testimonial-card2"
                    key={idx + testimonialsData.length}
                  >
                    <div className="test-card2 py-lg-3 py-4 px-lg-4 px-5">
                      <div className="card-title fw-bold my-3">
                        <h5 className=" card-body-style text-start dm-sans ">
                          {testimonial.title}
                        </h5>
                      </div>
                      <div className="card-body mb-3">
                        <p className="card-body-style text-start dm-sans-400 ">
                          {testimonial.description}
                        </p>
                      </div>
                      <div className="card-end fw-bolder">
                        <p className="dm-sans">
                          <span>
                            <img
                              src={testimonial.flag}
                              className=" country-font-style pe-2"
                              alt="flag"
                            />
                          </span>
                          {testimonial.country}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonals;
