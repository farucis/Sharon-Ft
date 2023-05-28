import React from "react";
import "./InStudio.css";
import UI_MAGES from "../../../../assets/pictures/UI_MAGES";

const InStudio = () => {
  return (
    <div className="in-studio-container">
      <h2>?מה תקבלי אצלי בסטודיו</h2>
      <div className="studio-options-container">
        {inStudioDB1.map((obj, index) => {
          return (
            <div className="studio-options" key={index}>
              <i>
                <img src={obj.icon} alt="try realod" />
              </i>

              <h1>{obj.title}</h1>
              <div className="div-line" />
              <h2>{obj.text}</h2>
            </div>
          );
        })}
      </div>
      <div className="studio-options-container">
        {inStudioDB2.map((obj, index) => {
          return (
            <div className="studio-options" key={index}>
              <i>
                <img src={obj.icon} alt="try realod" />
              </i>

              <h1>{obj.title}</h1>
              <div className="div-line" />
              <h2>{obj.text}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InStudio;

const inStudioDB1 = [
  {
    title: "תזונה",
    text: ".נלמד וניישם אסטרטגיות תזונתיות שישנו את מבנה הגוף שלך מבלי שתרגישי מורעבת",
    icon: UI_MAGES[7],
  },
  {
    title: "פעילות גופנית",
    text: ".באימון נעבוד על כל מרכיבי הכושר הגופני גמישות , יציבות , סיבולת אירובית , כוח , כוח מפרץ ועוד... תלמדי לעבוד עם משקלים שונים , גומיות וכדורי כוח",
    icon: UI_MAGES[6],
  },
];

const inStudioDB2 = [
  {
    title: "אורח חיים",
    text: ".מקסימום יחס אישי והתאמה של תרגילים ומשקלים המותאמים ולמטרות שלך,מעקב שקילות שבועי, מדידות היקפים",
    icon: UI_MAGES[8],
  },
  {
    title: "חשיבה",
    text: ".נלמד על הרגלי חיים חיונים וניישם אותם כדי להרגיש מדהימות ולהראות נהדר",
    icon: UI_MAGES[9],
  },
];
