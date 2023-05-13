import React from "react";

const StageCard = (props) => {
  return (
    <div id={props.index} className={"stage-card-container"}>
      <div className="stage-card-circle-image">
        <img src={props.imageUrl} alt="try realod" />
      </div>
      <div className="stage-card-contant">
        <div className="stage-card-title">
          <h1>{props.title}</h1>
        </div>
        <div className="stage-card-text">{props.text}</div>
      </div>
    </div>
  );
};

export default StageCard;
