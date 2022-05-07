import React from "react";
import "./Home.css";
import 'aos/dist/aos.css';

import ButtonPrimary from "../Buttons/ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../Buttons/ButtonSecondary/ButtonSecondary";
import Navbar from "../Navbar/Navbar";

import Food from "../../Assets/pexels-ella.png";

const Home = () => {
  return (
    <div className="max-w-full min-h-screen  Gradient">
      <Navbar />
      <div className="flex flex-end Home">
        <div>
          <h1 className="Heading-primary text-6xl ml-16 mt-5 flex flex-col">
            <span className="Primary-text">We Serve </span>
            <span className="text-[#011936] Sub-text" data-aos="fade-right" data-aos-duration="1000">the taste you love</span>
          </h1>
          <p className="Typygrapy ml-16 mt-5 text-base text-[#011936] font-[Montserrat]">
            Let Food Be Thy Medicine, And Let Thy Medicine Be Food. <br />
            Here you will find the most tasty food and peaceful place <br />
            to eat. “A recipe has no soul. You, as the cook, must bring <br />
            soul to the recipe.” – Thomas Keller.
          </p>
          <div className="flex Home-Button">
            <ButtonPrimary title='Explore Food' />
            <ButtonSecondary title='Special Deal' />
          </div>
        </div>
        <div className="max-w-[40%] Home-media">
          <div className="Blob" ></div>
          <img
            loading='lazy'
            src={Food}
            alt="Girl"
            className="relative float-right left-[9rem] Home-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
