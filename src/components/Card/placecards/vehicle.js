import React from 'react';
import svg from "../../../assets/vehicles/sett.svg"
const Vehicle = () => {
  return <div>
      <div className="placecard">
      <img src={svg} alt="" />
      <h5>Customization</h5>
      <p>We deliver outsourced aviation services for military customers</p>
    </div>
  </div>;
};

export default Vehicle;
