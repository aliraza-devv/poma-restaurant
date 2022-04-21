import React from "react";
import { Card } from "react-bootstrap";
import {FaStar} from 'react-icons/fa'
import {FaStarHalf} from 'react-icons/fa'
import 'aos/dist/aos.css';

import "./Card.css";
import Steaks from "../../Assets/Steaks.png";
import Biryani from "../../Assets/biryani.png";
import Kabab from "../../Assets/Kabab.png";
import Haleem from "../../Assets/Haleem.png";
import RussianSalad from '../../Assets/russian_salad.png'

const MenuCard = ({title}) => {
  const cardInfo = [
    {
      image: Steaks,
      title: "Steaks",
      description: "Most tasty steaks you will ever taste.",
      price: "$7.20",
    },
    {
      image: Biryani,
      title: "Biryani",
      description: "Most tasty Biryani you will ever taste.",
      price: "$4.49",
    },
    {
      image: Kabab,
      title: "Kabab",
      description: "Most tasty Kabab you will ever taste.",
      price: "$3.99",
    },
    {
      image: RussianSalad,
      title: "Russian Salad",
      description: "Most tasty Russian Salad you will ever taste.",
      price: "$4.20",
    },
  ];

  const style = {color: 'yellow'}

  const renderCard = (card, index) => {
    return (
      <>
        <Card
          className="card w-[100%] h-[100%] "
          key={index}
          data-aos="zoom-in-down"
          data-aos-duration="1000"
        >
          <Card.Img className="align-center Card-img" variant="top" src={card.image} />
          <Card.Body className="text-center">
            <Card.Title className="Card-title mt-4 text-xl font-bold">
              {card.title}
            </Card.Title>
            <div className="flex justify-center mt-1">
              <FaStar style={style} />
              <FaStar style={style} />
              <FaStar style={style} />
              <FaStar style={style} />
              <FaStarHalf style={style} />
            </div>
            <Card.Text className="mt-4 font-[Montserrat]">{card.description}</Card.Text>
            <Card.Text className="font-semibold mt-4">{card.price}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  };

  return (
    <div className="flex flex-col">
      <h1 className="Heading-gradient text-center mb-8" data-aos="flip-left"data-aos-easing="ease-out-cubic"data-aos-duration="900">{title}</h1>
      <div className="flex items-center justify-center space-x-9 Render-card">
        {cardInfo.map(renderCard)}
      </div>
    </div>
  );
};

export default MenuCard;
