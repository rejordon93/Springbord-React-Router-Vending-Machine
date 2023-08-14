import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Home.css";
import backgroundImage from "./img/pic.jpg"; // Adjust the path

const Home = () => {
  return (
    <div className="home-container">
      <div className="image-container">
        <img
          src={backgroundImage}
          alt="Vending Machine"
          className="background-image"
        />
        <div className="image-overlay">
          <div className="content">
            <h1 className="title">Welcome to the Vending Machine</h1>
            <p className="subtitle">Explore our selection of goodies:</p>
            <ul className="item-list">
              <li className="item">
                <Link to="/soda">Soda</Link>
              </li>
              <li className="item">
                <Link to="/chips">Chips</Link>
              </li>
              <li className="item">
                <Link to="/sardines">Fresh Sardines</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
