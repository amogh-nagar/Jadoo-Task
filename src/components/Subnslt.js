import React from "react";
import email from "../assets/listitems/email.svg";
import arrow from "../assets/listitems/arrow.svg";
import './Subnslt.css'
import {AiOutlineMail} from 'react-icons/ai'
const Subnslt = () => {
  return (
    <div className="main">
        <img className="arrow" src={arrow} alt="" />
      <div className="box">
        <h2>
          Subscribe to get information, latest news and other interesting offers
          about Cobham
        </h2>
        <div className="line">
        <AiOutlineMail style={    {height: "39px",
    width: "27px"}} />
        <input type="text" placeholder="Your Name and Email"/>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subnslt;
