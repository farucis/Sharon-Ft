import React from "react";
import "./CustomerProcesses.css";
import $ from "jquery";

import IMAGES from "../../assets/pictures/IMAGES";
const CustomerProcesses = () => {
  $(window).scroll(function () {
    for (let i = 1; i <= $(".image-container").length; i++) {
      const imageTop =
        $(`.image-container:nth-child(${i})`).offset().top - $(window).height();

      $(`.image-container:nth-child(${i})`).css({
        animation: function () {
          if ($(window).scrollTop() > imageTop - 10) {
            return `fade-in-up-bounce 800ms ${0.14 * i}s linear both`;
          } else {
            return "none";
          }
        },
      });
    }
  });

  return (
    <div id="cusPro" className="customer-processes-container">
      <div className="title-container">
        <h1> תגובות של מתאמנות</h1>
      </div>
      <div className="images-container">
        {IMAGES.map((image, index) => {
          return (
            <div className="image-container" key={index}>
              <img src={image} alt="try realod" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomerProcesses;
