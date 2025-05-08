// import React from 'react'
// import "../assets/css/carousel.css";
// import'swiper/swiper-bundle.css'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import productImg from "../assets/images/products-img2.svg";
// import productImg1 from "../assets/images/products-img1.svg";
// import productImg3 from "../assets/images/products-img3.svg";
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// const Carousel = () => {
//   const data=[
//     {
//         img: productImg,
//         // date: "September 15, 2024",
//         date: "Purity Refined",
//         title: "Mechanical Salt Refinery",
//       },
//       {
//         img: productImg1,
//         date: "Vacuum Fresh",
//         title: "Pure Vacuum Salt Plant",
//       },
//         {
//             img: productImg3,
//             date: "Cleans Perfect",
//             title: "Salt Washery Plant",
//           },
//           {
//             img: productImg,
//             date: "Health First",
//             title: "Pharma Salt Plant",
//           },
//           {
//             img: productImg1,
//             date: "Sodium Smart",
//             title: "Double Fortified Salt",
//           },
//             {
//                 img: productImg3,
//                 date: "Nutrition Plus",
//                 title: "Low Sodium Salt Plant",
//               },

//   ];
//   return (

//          <div className="container-fluid">
//      <Swiper
//       modules={[Navigation, Pagination, Scrollbar, A11y]}
//       spaceBetween={50}
//       slidesPerView={1}
//     breakpoints={{
//         640: {
//           slidesPerView: 1,
//         },
//         768: {
//           slidesPerView: 2,
//         },
//         1024: {
//           slidesPerView: 3,
//         },
//       }}
//       initialSlide={2}
//       navigation
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//       className="swiper-container-with-gradient"

//     >
//        <div className="carousel-card">
//           {data.map((slide, index) => (
//             <SwiperSlide key={index}>
//               <img src={slide.img} alt="productImg" className='img-fluid' />
//               <p className='products-card-text pt-lg-4 pt-4'>{slide.date}</p>
//               <h5 className='products-card-text'>{slide.title}</h5>
//             </SwiperSlide>
//           ))}
//         </div>
//     </Swiper>
//    </div>
//   )
// }

// export default Carousel
import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/carousel.css";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import productImg from "../assets/images/products-img2.svg";
import productImg1 from "../assets/images/products-img1.svg";
import productImg3 from "../assets/images/products-img3.svg";

const Carousel = () => {
  const navigate = useNavigate();

  const data = [
    {
      img: productImg,
      date: "Purity Refined",
      title: "Mechanical Salt Refinery",
      route: "/refineryPage",
    },
    {
      img: productImg1,
      date: "Vacuum Fresh",
      title: "Pure Vacuum Salt Plant",
      route: "/purvaccumSalt",
    },
    {
      img: productImg3,
      date: "Cleans Perfect",
      title: "Salt Washery Plant",
      route: "/saltWasheryPlant",
    },
    {
      img: productImg,
      date: "Health First",
      title: "Pharma Salt Plant",
      route: "/pharmaSaltPlant",
    },
    {
      img: productImg1,
      date: "Sodium Smart",
      title: "Double Fortified Salt",
      route: "/doubleFortifiedSalt",
    },
    {
      img: productImg3,
      date: "Nutrition Plus",
      title: "Low Sodium Salt Plant",
      route: "/lowSodiumSaltPlant",
    },
  ];

  return (
    <div className="container-fluid">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        initialSlide={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="swiper-container-with-gradient"
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="carousel-card"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                navigate(slide.route);
              }}
              style={{
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img src={slide.img} alt="productImg" className="img-fluid" />
              <p className="products-card-text pt-lg-4 pt-4">{slide.date}</p>
              <h5 className="products-card-text">{slide.title}</h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
