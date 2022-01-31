import React from "react";
import "./Category.css";
import Mic from "./Card/placecards/mic";
import Plane from "./Card/placecards/planje";
import Sett from "./Card/placecards/sett";

import { useState } from "react";
import Vehicle from "./Card/placecards/vehicle";
const Category = () => {
 
  return (
    <div className="ctg">
      <h6>Category</h6>
      <h3>We offer best Services</h3>
      <div className="cards">
        <Mic />
        <Plane />
        <Sett />
        <Vehicle />
     

      </div>
    </div>
  );
};

export default Category;
