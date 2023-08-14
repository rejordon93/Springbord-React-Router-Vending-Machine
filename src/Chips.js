import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Chips.css"; // Import the separate CSS file for Chips component styles
import backgroundImage from "./img/pic4.jpg"; // Adjust the path based on your directory structure

const Chips = () => {
  const [count, setCount] = useState(0); // Initialize count to 0

  const increaseCount = () => {
    setCount(count + 1); // Increment count by 1
  };

  return (
    <div className="chips-container">
      <img
        src={backgroundImage}
        alt="Chips Background"
        className="background-image"
      />
      <div className="content">
        <h1>BAGS EATEN: {count}</h1>
        <button onClick={increaseCount}>EAT A BAG</button>
        <p className="description">
          Indulge in our delicious chips collection.
        </p>
        <Link to="/" className="go-back-link">
          GO BACK
        </Link>
      </div>
    </div>
  );
};

export default Chips;
