import React from "react";
import ProductSlider from "../Component/Carousel.jsx";
const ProductSimplySlider = () => {
  return (
    <>
      <div className="slider-styles mb-lg-5 mb-5 pb-lg-5 pb-5">
        <div className="text-section my-lg-5 my-5">
          <h6 className="text-uppercase title-of-about ps-lg-2 ps-2 text-lg-center text-center">
            <span className="product-heading-text-color"></span>Our other
            Products
          </h6>
          <h1 className="display-3 product-heading text-uppercase fw-semibold text-lg-center text-center">
            Simplifying Salt <br /> production
          </h1>
        </div>
        <ProductSlider className="px-5" />
      </div>
    </>
  );
};

export default ProductSimplySlider;
