import React from "react";
import "./CustomerProcesses.css";
import $ from "jquery";

import IMAGES from "../../assets/pictures/IMAGES";
import SlidebarGallery from "./components/SlidebarGallery";
import { loadImagesByOffset } from "./components/Function";

const CustomerProcesses = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [newImagesArr, setNewImagesArr] = React.useState([]);

  $(window).ready(() => {
    if (!isOpen) $(".slidebar-gallery-container").hide();
    else $(".slidebar-gallery-container").show();
  });
  $(window).scroll(loadImagesByOffset);

  const openGalleryHandler = (index) => {
    var tempArr = [...IMAGES];
    for (let i = 0; i <= index; i++) {
      tempArr.push(tempArr.shift());
    }
    setNewImagesArr([...tempArr]);
    setIsOpen(true);
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
              <img
                src={image}
                alt="try realod"
                onClick={() => openGalleryHandler(index)}
              />
            </div>
          );
        })}
      </div>
      <SlidebarGallery
        images={newImagesArr}
        setNewImagesArr={setNewImagesArr}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default CustomerProcesses;
