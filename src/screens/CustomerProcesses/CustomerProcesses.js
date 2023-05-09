import React from "react";
import "./CustomerProcesses.css";
import $ from "jquery";

import IMAGES from "../../assets/pictures/IMAGES";
import SlidebarGallery from "./components/SlidebarGallery";
import { loadImagesByOffset } from "./components/Function";
const CustomerProcesses = () => {
  $(window).ready(() => {
    $(".slidebar-gallery-container").hide();
  });
  $(window).scroll(loadImagesByOffset);

  const newImagesArr = [];
  const openGalleryHandler = (el) => {
    console.log(el.target.src);
    for (let index = 0; index < IMAGES.length; index++) {
      if (IMAGES[index] === el.target.src) newImagesArr.append(IMAGES[index]);
    }
    $(".slidebar-gallery-container").show();
  };

  return (
    <div id="cusPro" className="customer-processes-container">
      <div className="title-container">
        <h1> תגובות של מתאמנות</h1>
      </div>

      <div className="images-container">
        {IMAGES.map((image, index) => {
          return (
            <div className="image-container" key={index}>
              <img src={image} alt="try realod" onClick={openGalleryHandler} />
            </div>
          );
        })}
      </div>
      <SlidebarGallery images={newImagesArr} />
    </div>
  );
};

export default CustomerProcesses;
