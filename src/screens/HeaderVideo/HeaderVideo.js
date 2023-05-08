import React from "react";
import "./HeaderVideo.css";
import videoBg from "../../assets/videos/bg-video.mp4";

const HeaderVideo = () => {
  return (
    <div className="hader-container">
      <div className="overlay" />
      <div
      className="video-container"
        dangerouslySetInnerHTML={{
          __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          preload="auto"
          src="${videoBg}"
ƒ        />,
      `,
        }}
      />
      <div className="contant-container">
        <div className="logo" />
        <div className="contant">
          <h1> ההצלחה שלך היא ההצלחה שלי </h1>
          <button> לאימון הבא </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderVideo;
