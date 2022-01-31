import React from "react";
import './Footer.css'
import logo from "../assets/footer/logo.svg";
import f from "../assets/footer/f.svg";
import i from "../assets/footer/i.svg";
import insta from "../assets/footer/instagram.png";
import face from "../assets/footer/facebook.png";
import ps from "../assets/footer/playstore.svg";
import as from "../assets/footer/appstore.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="info">
        <img src={logo} alt="" />
        <p>Book your trip in minute, get full Control for much longer.</p>
      </div>
      <div className="contact">
        <div>
          <p>Company</p>
          <ul>
            <li>About</li>
            <li>Carriers</li>
            <li>Mobile</li>
          </ul>
        </div>
        <div>
          <p>Contact</p>
          <ul>
            <li>Help</li>
            <li>FAQs</li>
            <li>Affiliates</li>
          </ul>
        </div>
        <div>
          <p>More</p>
          <ul>
            <li>AirlineFees</li>

            <li>Airlines</li>
            <li>low fare tips</li>
          </ul>
        </div>
      </div>
      <div className="social">
        <div className="row">
          <img src={face} alt="" />
          <img src={insta} alt="" />
        </div>
        <p>Discover</p>
        <div className="store">
          <img src={ps} alt="" />
          <img src={as} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
