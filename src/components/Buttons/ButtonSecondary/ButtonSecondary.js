import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import "./ButtonSecondary.css";

const ButtonSecondary = ({ title }) => {
  return (
    <div className="ml-8 mt-5 Button-Secondary-div">
      <Link smooth to='#offer'>
        <button className="Button-secondary">{title}</button>
      </Link>
    </div>
  );
};

export default ButtonSecondary;
