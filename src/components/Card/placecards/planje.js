import React from 'react';
import svg from "../../../assets/vehicles/plane.svg"
import curve from "../../../assets/svgs/curve.svg"
const Plane = () => {
  return (<div>
      <div className="placecard plane" >
      <img src={svg} alt="" />
      <h5>Best Flights</h5>
      <p>Engrossed listening. Park gate sell they west hard for the.</p>
    </div>
    <img className='cc' src={curve} alt="" />
  </div>)
};

export default Plane;
