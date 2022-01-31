import React from "react";
import img from "../assets/svgs/logo.svg";
import "./Navbar.css";
import arrow from "../assets/arow.png";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import down from "../assets/svgs/down.svg";
import left from "../assets/left.png";
import { useState } from "react";
const Navbar = () => {
  const [display, setdisplay] = useState(false);
  const toggle = () => {
    setdisplay((prev) => !prev);
  };
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

        <div className="rnav">
          {!display && <img src={arrow} onClick={toggle} alt="" />}{" "}
          {/* <AiOutlineMenuUnfold onClick={toggle} /> */}
          {display && <img src={left} onClick={toggle} alt="" />}
          {display && (
            <ul className="rnavlinks">
              <li>Destination</li>
              <li>Hotels</li>
              <li>Flights</li>
              <li className="login">Login</li>
              <button className="signup">Signup</button>
              <li>
                EN <img src={down} />
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
