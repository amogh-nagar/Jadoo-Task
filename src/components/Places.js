import React from "react";
import fs from "../assets/places/1.svg";
import ss from "../assets/places/2.svg";
import ts from "../assets/places/3.svg";
import spiral from "../assets/places/spiral.svg";
import './Places.css'
const Places = () => {
  return (
    <div className="places">
      <p>Top Selling</p>
      <h3>Top Destination</h3>
      <div className="placeitems">
        <img src={fs} />
        <img src={ss} />
        <div className="ts">
          <img src={ts} />
          <img className="spiral" src={spiral} />
        </div>
      </div>
    </div>
  );
};

export default Places;
