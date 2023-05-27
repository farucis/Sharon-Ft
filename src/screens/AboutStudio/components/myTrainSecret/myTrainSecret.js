import React from "react";
import "./myTrainSecret.css";

import $ from "jquery";

const MyTrainSecret = () => {
  $(window).scroll(() => {
    var scrollTop = $(window).scrollTop();
    for (let i = 0; i < $(".train-secret-container li").length; i++)
      $(`.train-secret-container li:nth-child(${i + 1})`).css({
        animation: () => {
          if (scrollTop >= 2750 - 50)
            return `typing 2s steps(30, end) ${i * 0.5}s forwards`;
          else {
            return "none";
          }
        },
        "margin-top": `${30 * i}px`,
      });
  });

  return (
    <div className="train-secret-container">
      <p>
        <li>בואי ללמוד את השיטה הייחודית שלי</li>
        <li>
          {"שתגרום לך לראות"} <span> מקסימום </span>תוצאות
        </li>
        <li> במינימום מאמץ</li>
      </p>
      <div className="end-page"></div>
    </div>
  );
};

export default MyTrainSecret;
