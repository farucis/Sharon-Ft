import React from "react";
import "./AboutStudio.css";
import InStudio from "./components/InStudio/InStudio";
import MyTrainSecret from "./components/myTrainSecret/myTrainSecret";
import StudioInfo from "./components/StudioInfo/StudioInfo";

const AboutStudio = () => {
  return (
    <section className="about-studio-container">
      <div className="about-studio-title">
        <h1> על הסטודיו </h1>
      </div>

      <MyTrainSecret />
      <InStudio />
      <StudioInfo />
      <div className="end-page" />
    </section>
  );
};

export default AboutStudio;
