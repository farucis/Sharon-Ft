import React from "react";
import "./CustomerProcesses.css";

import IMAGES from "../../assets/pictures/IMAGES";
const CustomerProcesses = () => {
  return (
    <div className="customer-processes-container">
      <div className="title-container">
        <li> תגובות של מתאמנות</li>
      </div>
      <div className="images-container">
        {IMAGES.map((image, index) => {
          return (
            <div className="image-container">
              <img src={image} key={index} alt="try realod" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomerProcesses;
