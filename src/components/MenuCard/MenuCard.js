import React from "react";
import { Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import "aos/dist/aos.css";

import "./Card.css";

const MenuCard = ({ title, data, cardIndex }) => {
  const style = { color: "yellow" };

  return (
    <div className="flex flex-col">
      <h1
        className="Heading-gradient text-center mb-8"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="900"
      >
        {title}
      </h1>
      <div className="flex items-center justify-center space-x-9 Render-card">
        {data[cardIndex].map((item) => (
          <Card
            className="card w-[100%] h-[100%] "
            data-aos="zoom-in-down"
            data-aos-duration="1000"
          >
            <Card.Img
              className="align-center Card-img"
              variant="top"
              src={item.image}
            />
            <Card.Body className="text-center">
              <Card.Title className="Card-title mt-4 text-xl font-bold">
                {item.title}
              </Card.Title>
              <div className="flex justify-center mt-1">
                <FaStar style={style} />
                <FaStar style={style} />
                <FaStar style={style} />
                <FaStar style={style} />
                <FaStarHalf style={style} />
              </div>
              <Card.Text className="mt-4 font-[Montserrat]">
                {item.description}
              </Card.Text>
              <Card.Text className="font-semibold mt-4">{item.price}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MenuCard;
