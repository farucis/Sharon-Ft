import React from "react";
import "./AboutMe.css";

import TrainingMethod from "./components/TrainingMethod/TrainingMethod";
import AboutMeCard from "./components/AboutMeCard/AboutMeCard";
import CloseForUpdates from "../CloseForUpdates/CloseForUpdates";

const AboutMe2 = () => {
  return window.innerWidth > 1100 ? (
    <section className="aboutme-container">
      <AboutMeCard />
      <TrainingMethod />
    </section>
  ) : (
    <div className="close-for-updtes">
      <CloseForUpdates />
    </div>
  );
};

export default AboutMe2;
