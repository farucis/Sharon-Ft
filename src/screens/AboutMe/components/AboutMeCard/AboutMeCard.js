import React from "react";
import "./AboutMeCard.css";
import $ from "jquery";

import SELFIMAGES from "../../../../assets/pictures/SELFIMAGES";
import AboutMeCardText from "./components/AboutMeCardText";
import { galleryImagesScrolling } from "./components/Function";

const AboutMeCard = () => {
  $(".gallery-images").ready(galleryImagesScrolling);

  return (
    <div className="card">
      <div className="card-title">
        <h1>? מי אני</h1>
      </div>
      <div className="card-contact">
        <div className="contact-gallery">
          <div className="gallery-images" id="galleryImages">
            {SELFIMAGES.map((image, index) => {
              return (
                <div id={`ga_i${index}`} className="gallery-image" key={index}>
                  <img src={image} alt="try realod" />
                </div>
              );
            })}
          </div>
          <div className="gallery-scrollbar"></div>
        </div>
        <AboutMeCardText />
      </div>
    </div>
  );
};

export default AboutMeCard;
