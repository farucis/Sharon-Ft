import React from "react";
import "./AboutMe.css";

import TrainingMethod from "./components/TrainingMethod/TrainingMethod";
import AboutMeCard from "./components/AboutMeCard/AboutMeCard";

const AboutMe2 = () => {
  return (
    <section className="aboutme-container">
      <AboutMeCard />
      <TrainingMethod />
    </section>
  );
};

export default AboutMe2;
