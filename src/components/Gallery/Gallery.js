import React from "react";
import "./Gallery.css";
import "aos/dist/aos.css";

import Gallery0 from "../../Assets/Gallery-0.jpg";
import Gallery1 from "../../Assets/Gallery-1.jpg";
import Gallery2 from "../../Assets/Gallery-2.jpg";
import Gallery3 from "../../Assets/Gallery-3.jpg";
import Gallery4 from "../../Assets/Gallery-4.jpg";
import Gallery5 from "../../Assets/Gallery-5.jpg";
import Gallery6 from "../../Assets/Gallery-6.jpg";
import Gallery7 from "../../Assets/Gallery-7.jpg";
import Gallery8 from "../../Assets/Gallery-8.jpg";

const Gallery = () => {
  return (
    <div className="Gallery">
      <h2
        className="Heading-gradient text-center mt-10 mb-6"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="900"
      >
        Our Gallery
      </h2>
      <div className="parent">
        <img
          loading="lazy"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1800"
          className="blur-[1px] hover:blur-[0] hover:cursor-pointer"
          src={Gallery0}
          alt="Gallery_Photo"
        />
        <img
          loading="lazy"
          data-aos="zoom-out"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="blur-[1px] hover:blur-[0] hover:cursor-pointer"
          src={Gallery1}
          alt="Gallery_Photo"
        />
        <img
          loading="lazy"
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="blur-[1px] hover:blur-[0] hover:cursor-pointer"
          src={Gallery1}
          alt="Gallery_Photo"
        />
        <img
          loading="lazy"
          data-aos="fade-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2200"
          className="blur-[1px] hover:blur-[0] hover:cursor-pointer"
          src={Gallery2}
          alt="Gallery_Photo"
        />
        <img
          loading="lazy"
          data-aos="fade-out"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2800"
          className="blur-[1px] hover:blur-[0] hover:cursor-pointer"
          src={Gallery3}
          alt="Gallery_Photo"
        />
        <img
          loading="lazy"
          data-aos="zoom-out-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2600"
          className="blur-[1px] hover:blur-[0] hover:cursor-pointer"
          src={Gallery4}
          alt="Gallery_Photo"
        />
        {/* <img
          loading="lazy"
          data-aos="flip-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="blur-[1px] hover:blur-[0] hover:cursor-pointer"
          src={Gallery5}
          alt="Gallery_Photo"
        />
        <img
          loading="lazy"
          data-aos="flip-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
          className="blur-[1px] hover:blur-[0] hover:cursor-pointer"
          src={Gallery5}
          alt="Gallery_Photo"
        />
        <img
          loading="lazy"
          data-aos="fade-down-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2900"
          className="blur-[1px] hover:blur-[0] hover:cursor-pointer"
          src={Gallery6}
          alt="Gallery_Photo"
        /> */}
        {/* <img
          loading="lazy"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2600"
          className="blur-[1px] hover:blur-[0] hover:cursor-pointer"
          src={Gallery6}
          alt="Gallery_Photo"
        />
        <img
          loading="lazy"
          data-aos="zoom-in-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="blur-[1px] hover:blur-[0] hover:cursor-pointer"
          src={Gallery7}
          alt="Gallery_Photo"
        />
        <img
          loading="lazy"
          data-aos="zoom-out"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2800"
          className="blur-[1px] hover:blur-[0] hover:cursor-pointer"
          src={Gallery8}
          alt="Gallery_Photo"
        /> */}
      </div>
    </div>
  );
};

export default Gallery;
