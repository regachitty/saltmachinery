import React from "react";
import salt from "../assets/images/salt.svg";
import watercycle from "../assets/images/water-cycle.svg";
import particle from "../assets/images/particle.svg";
import nowater from "../assets/images/no-water.svg";
import moisturizing from "../assets/images/moisturizing.svg";
import iodine from "../assets/images/iodine.svg";
import "../assets/css/productSpecific.css";

const ProductSpecific = () => {
  return (
    <>
      <div className="row refinery-container">
        <div className="col-lg-12 col-12  mt-lg-2 mt-5">
          <h2 className="productSpec-style fw-bold text-lg-start text-center">
            Product Specification
          </h2>
          <div className="row mt-5 sky-bg-color mx-lg-0 mx-5">
            <div className="col-lg-6 col-md-6 col-12 d-flex flex-column align-items-center my-5">
              <img src={salt} alt="salt" className="img-fluid mb-4" />
              <h4 className="pro-cards-head-style fw-bold text-center">
                Sodium Chloride
              </h4>
              <p className="pro-cards-sub-style text-center">99%</p>
            </div>
            <div className="col-lg-6 col-md-6 col-12 d-flex flex-column align-items-center my-5">
              <img
                src={watercycle}
                alt="watercycle"
                className="img-fluid mb-4"
              />
              <h4 className="pro-cards-head-style fw-bold text-center">
                Sulfate ions
              </h4>
              <p className="pro-cards-sub-style text-center">0.25%</p>
            </div>
            <hr className="w-75 mx-auto" />
            <div className="col-lg-6 col-md-6 col-12 d-flex flex-column align-items-center my-5">
              <img src={iodine} alt="iodine" className="img-fluid mb-4" />
              <h4 className="pro-cards-head-style fw-bold text-center">
                Iodine
              </h4>
              <p className="pro-cards-sub-style text-center">15-45 ppm</p>
            </div>
            <div className="col-lg-6 col-md-6 col-12 d-flex flex-column align-items-center my-5">
              <img
                src={moisturizing}
                alt="moisturizing"
                className="img-fluid mb-4"
              />
              <h4 className="pro-cards-head-style fw-bold text-center">
                Calcium
              </h4>
              <p className="pro-cards-sub-style text-center dryer-style">
                0.06%
              </p>
            </div>
            <hr className="w-75 mx-auto" />
            <div className="col-lg-6 col-md-6 col-12 d-flex flex-column align-items-center my-5">
              <img src={nowater} alt="nowater" className="img-fluid mb-4" />
              <h4 className="pro-cards-head-style fw-bold text-center insouble">
                Moisture
              </h4>
              <p className="pro-cards-sub-style text-center">1%</p>
            </div>
            <div className="col-lg-6 col-md-6 col-12 d-flex flex-column align-items-center my-5">
              <img src={particle} alt="particle" className="img-fluid mb-4" />
              <h4 className="pro-cards-head-style fw-bold text-center">
                Particle size distribution
              </h4>
              <p className="pro-cards-sub-style text-center buyer-style">
                700 to 900 microns
              </p>
            </div>
            <hr className="w-75 mx-auto" />
            <div className="col-lg-6 col-md-6 col-12 d-flex flex-column align-items-center my-5">
              <img src={particle} alt="particle" className="img-fluid mb-4" />
              <h4 className="pro-cards-head-style fw-bold text-center">
                Insoluble in water
              </h4>
              <p className="pro-cards-sub-style text-center buyer-style">
                Max 0.1%
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-12 d-flex flex-column align-items-center my-5">
              <img src={particle} alt="particle" className="img-fluid mb-4" />
              <h4 className="pro-cards-head-style fw-bold text-center">
                Magnesium
              </h4>
              <p className="pro-cards-sub-style text-center buyer-style">
                0.05%
              </p>
            </div>
            <div className="vertical-line "></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSpecific;
