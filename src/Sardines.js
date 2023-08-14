import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "./img/pic3.jpg";
import "./Sardines.css"; // Import the separate CSS file for Sardines component styles

const Sardines = () => {
  return (
    <div className="sardines-container">
      <img
        src={backgroundImage}
        alt="Sardines Background"
        className="background-image"
      />
      <div className="content">
        <h1 className="heading">
          YOU DON'T EAT SARDINES,
          <br />
          THE SARDINES EAT YOU
        </h1>
        <Link to="/" className="go-back-link">
          GO BACK
        </Link>
      </div>
    </div>
  );
};

export default Sardines;
