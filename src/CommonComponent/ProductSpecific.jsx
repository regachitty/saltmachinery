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
              <h4 className="pro-cards-head-style fw-bold text-center">NaCl</h4>
              <p className="pro-cards-sub-style text-center">Above 99%</p>
            </div>
            <div className="col-lg-6 col-md-6 col-12 d-flex flex-column align-items-center my-5">
              <img
                src={watercycle}
                alt="watercycle"
                className="img-fluid mb-4"
              />
              <h4 className="pro-cards-head-style fw-bold text-center">
                Soluble Matter
              </h4>
              <p className="pro-cards-sub-style text-center">0.4%</p>
            </div>
            <hr className="w-75 mx-auto" />
            <div className="col-lg-6 col-md-6 col-12 d-flex flex-column align-items-center my-5">
              <img src={iodine} alt="iodine" className="img-fluid mb-4" />
              <h4 className="pro-cards-head-style fw-bold text-center">
                Iodine Max.
              </h4>
              <p className="pro-cards-sub-style text-center">40-60 ppm</p>
            </div>
            <div className="col-lg-6 col-md-6 col-12 d-flex flex-column align-items-center my-5">
              <img
                src={moisturizing}
                alt="moisturizing"
                className="img-fluid mb-4"
              />
              <h4 className="pro-cards-head-style fw-bold text-center">
                Moisture level
              </h4>
              <p className="pro-cards-sub-style text-center dryer-style">
                Max. 0.3% (At the bottom of the dryer 0.1% – 0.15%)
              </p>
            </div>
            <hr className="w-75 mx-auto" />
            <div className="col-lg-6 col-md-6 col-12 d-flex flex-column align-items-center my-5">
              <img src={nowater} alt="nowater" className="img-fluid mb-4" />
              <h4 className="pro-cards-head-style fw-bold text-center insouble">
                Insoluble Matter other than NaCl
              </h4>
              <p className="pro-cards-sub-style text-center">Above 99%</p>
            </div>
            <div className="col-lg-6 col-md-6 col-12 d-flex flex-column align-items-center my-5">
              <img src={particle} alt="particle" className="img-fluid mb-4" />
              <h4 className="pro-cards-head-style fw-bold text-center">
                Particle size distribution
              </h4>
              <p className="pro-cards-sub-style text-center buyer-style">
                All less than 710 microns or as required by buyer
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
