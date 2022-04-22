import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "aos/dist/aos.css";

import "./Reviews.css";

import Person2 from "../../Assets/person-2.jpg";
import Person3 from "../../Assets/person-3.jpg";
import Person4 from "../../Assets/person-4.jpg";
import Person5 from "../../Assets/person-5.jpg";
import Person6 from "../../Assets/person-6.jpg";
import Person7 from "../../Assets/person-7.jpg";

const Reviews = () => {
  const options = {
    center: true,
    items: 1,
    loop: true,
    margin: 10,
    responsive: {
      600: {
        items: 3,
      },
    },
  };

  return (
    <div id="reviews" className="h-[100vh] w-[100%] bg-review">
      <h2
        className="Heading-gradient mt-10 mb-5 text-center"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="900"
      >
        What they say?
      </h2>
      <div className=" font-['Montserrat'] mt-[1rem] mb-[.7rem] Review">
        <OwlCarousel
          data-aos="zoom-in-down"
          data-aos-duration="1000"
          {...options}
          className="owl-theme w-[100%] h-[75vh] items-center justify-center"
          loop
          margin={10}
          nav
        >
          <div
            className="item flex items-center justify-center"
            data-aos="zoom-in-down"
            data-aos-duration="1000"
          >
            <div className="w-[15rem] h-[20rem] p-[0.8rem] Review-card rounded-3xl bg-pan-left">
              <div className="flex flex-col">
                <img
                  src={Person7}
                  className="h-[6rem] w-[3rem] rounded-full Review-img"
                  alt="Person"
                />
                <h3 className="font-bold mt-4 mb-4 text-center">Ali Raza</h3>
                <p className="mt-[-1rem] text-center">
                  Lorem ipsum dolor sit <br /> adipisicing elit Maxime <br />{" "}
                  molestiae quas vel sint
                  <br />
                  consequuntur voluptatum laborum labiko soko
                </p>
              </div>
            </div>
          </div>
          <div
            className="item flex items-center justify-center"
            data-aos="zoom-in-down"
            data-aos-duration="1000"
          >
            <div className="w-[15rem] h-[20rem] p-[0.8rem] Review-card rounded-3xl bg-pan-left">
              <div className="flex flex-col">
                <img
                  src={Person2}
                  className="h-[6rem] w-[3rem] rounded-full Review-img"
                  alt="Person"
                />
                <h3 className="font-bold mt-4 mb-4 text-center">Emma Watson</h3>
                <p className="mt-[-1rem] text-center">
                  Lorem ipsum dolor sit <br /> adipisicing elit Maxime <br />{" "}
                  molestiae quas vel sint
                  <br />
                  consequuntur voluptatum laborum labiko soko
                </p>
              </div>
            </div>
          </div>
          <div
            className="item flex items-center justify-center"
            data-aos="zoom-in-down"
            data-aos-duration="1000"
          >
            <div className="w-[15rem] h-[20rem] p-[0.8rem] Review-card rounded-3xl bg-pan-left">
              <div className="flex flex-col">
                <img
                  src={Person3}
                  className="h-[6rem] w-[3rem] rounded-full Review-img"
                  alt="Person"
                />
                <h3 className="font-bold mt-4 mb-4 text-center">Uzair Ahmed</h3>
                <p className="mt-[-1rem] text-center">
                  Lorem ipsum dolor sit <br /> adipisicing elit Maxime <br />{" "}
                  molestiae quas vel sint
                  <br />
                  consequuntur voluptatum laborum labiko soko
                </p>
              </div>
            </div>
          </div>
          <div
            className="item flex items-center justify-center"
            data-aos="zoom-in-down"
            data-aos-duration="1000"
          >
            <div className="w-[15rem] h-[20rem] p-[0.8rem] Review-card rounded-3xl bg-pan-left">
              <div className="flex flex-col">
                <img
                  src={Person4}
                  className="h-[6rem] w-[3rem] rounded-full Review-img"
                  alt="Person"
                />
                <h3 className="font-bold mt-4 mb-4 text-center">Ali Aslam</h3>
                <p className="mt-[-1rem] text-center">
                  Lorem ipsum dolor sit <br /> adipisicing elit Maxime <br />{" "}
                  molestiae quas vel sint
                  <br />
                  consequuntur voluptatum laborum labiko soko
                </p>
              </div>
            </div>
          </div>
          <div
            className="item flex items-center justify-center"
            data-aos="zoom-in-down"
            data-aos-duration="1000"
          >
            <div className="w-[15rem] h-[20rem] p-[0.8rem] Review-card rounded-3xl bg-pan-left">
              <div className="flex flex-col">
                <img
                  src={Person5}
                  className="h-[6rem] w-[3rem] rounded-full Review-img"
                  alt="Person"
                />
                <h3 className="font-bold mt-4 mb-4 text-center">Sheraz Ali</h3>
                <p className="mt-[-1rem] text-center">
                  Lorem ipsum dolor sit <br /> adipisicing elit Maxime <br />{" "}
                  molestiae quas vel sint
                  <br />
                  consequuntur voluptatum laborum labiko soko
                </p>
              </div>
            </div>
          </div>
          <div
            className="item flex items-center justify-center"
            data-aos="zoom-in-down"
            data-aos-duration="1000"
          >
            <div className="w-[15rem] h-[20rem] p-[0.8rem] Review-card rounded-3xl bg-pan-left">
              <div className="flex flex-col">
                <img
                  src={Person6}
                  className="h-[6rem] w-[3rem] rounded-full Review-img"
                  alt="Person"
                />
                <h3 className="font-bold mt-4 mb-4 text-center">Adeel</h3>
                <p className="mt-[-1rem] text-center">
                  Lorem ipsum dolor sit <br /> adipisicing elit Maxime <br />{" "}
                  molestiae quas vel sint
                  <br />
                  consequuntur voluptatum laborum labiko soko
                </p>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Reviews;
