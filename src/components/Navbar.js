import React from "react";
import img from "../assets/svgs/logo.svg";
import "./Navbar.css";
import down from "../assets/svgs/down.svg";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={img} className="img" alt="Logo" />

      <div className="list">
        <ul className="navlinks">
          <li>Destination</li>
          <li>Hotels</li>
          <li>Flights</li>
          <li className="login">Login</li>
          <button className="signup">Signup</button>
          <li>
            EN <img src={down} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
