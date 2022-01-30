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
        <AiOutlineMail/>
        <input type="text" placeholder="&#xf0e0; Username" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subnslt;
