import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "./img/pic2.jpg";
import "./Soda.css"; // Import the separate CSS file for Soda component styles

const Soda = () => {
  return (
    <div className="soda-container">
      <img
        src={backgroundImage}
        alt="Soda Background"
        className="background-image"
      />
      <div className="content">
        <h1 className="heading">OMG SUGAR!!!!</h1>
        <Link to="/" className="go-back-link">
          GO BACK
        </Link>
      </div>
    </div>
  );
};

export default Soda;
