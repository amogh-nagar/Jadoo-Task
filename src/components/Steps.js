import React from "react";
import overlaysvg from "../assets/svgs/overlaycard.svg";
import f from "../assets/listitems/1.svg";
import s from "../assets/listitems/2.svg";
import t from "../assets/listitems/3.svg";
import "./Steps.css";
const Steps = () => {
  return (
    <div className="stepssec">
      <div>
        <p>Easy and Fast</p>
        <h3>Book your next trip in 3 easy steps</h3>
        <ul>
          <li>
            <img src={f} alt="" />
            <div className="cnt">
              <p className="tt">Choose Destination</p>
              <p className="cnn">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.{" "}
              </p>
            </div>
          </li>
          <li>
            <img src={s} alt="" />
            <div className="cnt">
              <p className="tt">Make Payment</p>
              <p className="cnn">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.{" "}
              </p>
            </div>
          </li>
          <li>
            <img src={t} alt="" />
            <div className="cnt">
              <p className="tt">Reach Airport on Selected Daten</p>
              <p className="cnn">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.{" "}
              </p>
            </div>
          </li>
        </ul>
      </div>
      <img
        style={{ width: "485px;", height: "400px" }}
        src={overlaysvg}
        alt=""
      />
    </div>
  );
};

export default Steps;
