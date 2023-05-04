import React from "react";
import "./TrainingMethod.css";
import IMAGES from "../../../../assets/pictures/IMAGES";
import $ from "jquery";
import StageCard from "./components/StageCard";
import { scrollToTrainingOffset } from "./components/Function";

const stagesDB = [
  {
    id: "s3",
    title: "נבדק מדעית",
    text: "לי אישית היה מאוד חשוב לפתח תוכנית שמתבססת על עקרונות מוכחים ומבוססים. אני רוצה שתשיגי תוצאות כמה שיותר מהר - והתוכנית שלי הוכחה מדעית כיעילה. הוא פותח על ידי רופאים אמיתיים לרפואת ספורט ולא על ידי מומחים מכריזים על עצמם.",
    imageUrl: IMAGES[2],
  },
  {
    id: "s2",
    title: "אפשרי לכל אישה",
    text: "לכל אישה יש את הזכות לגוף החלומות שלה. ולכל אישה יש את הזכות לתוכנית שישימה לכולם. אני אתן לך אימונים פשוטים שאת יכולה לעשות גם אם את עובדת או יש לך מעט זמן מסיבות משפחתיות. את צריכה רק כמה שעות בשבוע לשינוי הקבוע שלך.",
    imageUrl: IMAGES[1],
  },
  {
    id: "s1",
    title: "אין דיאטת רעב",
    text: "רוב הנשים נכשלות בדיאטה בגלל שהן גועות ברעב או מפספסות את המאכלים האהובים עליהן. אין זה פלא שהמוטיבציה אובדת. לכן התוכנית שלי מעוצבת בצורה כזו שגם את יכולה ליהנות ממנה - ולא צריך להסתדר בלעדיה לצמיתות. הטריק שלי הוא שאנחנו עובדים עם הגוף שלנו ולא נגדו",
    imageUrl: IMAGES[0],
  },
];

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

          <button>להצטרף בקליק</button>
        </div>
      </div>
      <div className="method-stages-container">
        <div className="stages-title">
          <h1>
            <span>? </span>
            <span>למה </span>
            <span>אני </span>
            <span>בטוחה </span>
            <span>שזה </span>
            <span>יעבוד </span>
            <span>גם </span>
            <span>לך</span>
          </h1>
        </div>
        <div className="method-stages">
          {stagesDB.map((item, index) => {
            return (
              <StageCard
                key={index}
                index={item.id}
                imageUrl={item.imageUrl}
                title={item.title}
                text={item.text}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrainingMethod;
