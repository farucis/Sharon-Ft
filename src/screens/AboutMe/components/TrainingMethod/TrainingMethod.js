import React from "react";
import "./TrainingMethod.css";
import $ from "jquery";
import { scrollToTrainingOffset } from "./components/Function";
import Stages from "./components/Stages/Stages";
import { nextTrainHandler } from "../../../../components/Functions";

const TrainingMethod = () => {
  $(window).scroll(scrollToTrainingOffset);
  return (
    <div className="training-method-container">
      <div className="self-image-container">
        <div className="self-image-png" />
        <div className="png-image-text">
          <p>
            <li>היום אחרי שצברתי ניסיון וידע</li>
            <li>ומתאמנות שהתאהבו וסיגלו לעצמן דרך חיים</li>
            <li>.אני מזמינה גם אותך להצטרף לקבוצה הכי חזקה בעיר</li>
            <li>אם גם את מחפשת לרדת במשקל , בהיקפים או באחוזי השומן</li>
            <li>.להתחזק ולהתחטב מצאת את המקום המושלם</li>
          </p>

          <button onClick={nextTrainHandler}>להצטרף בקליק</button>
        </div>
      </div>
      <Stages />
    </div>
  );
};

export default TrainingMethod;
