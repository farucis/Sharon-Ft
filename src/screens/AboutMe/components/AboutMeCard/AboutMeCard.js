import React from "react";
import "./AboutMeCard.css";
import SELFIMAGES from "../../../../assets/pictures/SELFIMAGES";
import $ from "jquery";

const AboutMeCard = () => {
  const [sideFlag, setSideFlag] = React.useState(true);
  const [leftPos, setLeftPos] = React.useState(0);
  $(".gallery-images").ready(function () {
    //var sideFlag = true;
    //var leftPos = 0;
    if (leftPos < 0) setLeftPos(0); //leftPos = 0;;
    if (leftPos === 0) {
      //sideFlag = true;
      setSideFlag(true);
      setLeftPos(leftPos + 100);
      //leftPos += 100;
      $(".gallery-images").animate({ scrollLeft: leftPos }, 2000);
    }
    if (leftPos > 0 && leftPos < 265 * (SELFIMAGES.length - 1)) {
      $(".gallery-images").delay(1000).animate({ scrollLeft: leftPos }, 2000);
      setLeftPos(sideFlag ? leftPos + 265 : leftPos - 265);
      //sideFlag ? (leftPos += 265) : (leftPos -= 265);
    }
    if (leftPos > 1400) {
      //sideFlag = false;
      setSideFlag(false);
      setLeftPos(leftPos - 265);
      //leftPos -= 265;
      $(".gallery-images").delay(1000).animate({ scrollLeft: leftPos }, 2000);
    } /// <<<-----
  });

  return (
    <div className="card">
      <div className="card-title">
        <h1>? מי אני</h1>
      </div>
      <div className="card-contact">
        <div className="contact-gallery">
          <div className="gallery-images">
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
        <div className="contact-text">
          <p>
            <li>,נעים להכיר 🤗 אני שרון ליפוביץ אבוקסיס</li>
            <li>.נשואה לבן ואמא של אדל ואריאל</li>
          </p>
          <p>
            <li>.את הדרך שלי התחלתי ממש מזמן</li>
            <li>.בערך בגיל 6 כשנרשמתי לחוג קראטה במתנס הקטן בדימונה</li>
            <li>,זה התחיל בתור חוג של פעמיים בשבוע</li>
            <li>...ומשם הכל היסטוריה</li>
            <li>חגורה שחורה דאן 2</li>
            <li>ספורטאית תחרותית בנבחרת ישראל</li>
            <li>זכיות באליפויות בארץ ובחו"ל</li>
          </p>
          <p>
            <li>
              ...אחרי השחרור מהצבא תהייתי מה אלמד ? מה אני יודעת ואוהבת לעשות ?
              כמובן שהתשובה כבר הייתה ידועה מראש
            </li>
            <li>ומיד מצאתי את עצמי לומדת</li>
            <li>את תחום האימון הפונקציונאלי וחדר הכושר</li>
            <li> .בבית הספר למקצועות הספורט </li>
          </p>
          <p>
            <li>!את דרכי המקצועית בתחום התחלתי לגמרי מלמטה</li>
            <li>הייתי יוצאת בגשמים וברוחות לאמן בפארקים</li>
            <li>...ממתאמנת אחת , התחילו להגיע עוד ועוד ועוד</li>
            <li>!!!בנות שלא התאמנו מעולם</li>
            <li>למדו להכיר את הגוף שלהן מחדש</li>
            <li>❤ ולהתאהבבב בוווווו</li>
            <li>,למדו להשקיע בו , לחצות גבולות</li>
            <li>!להציב יעדים שהיו נראים להן לא ריאליים בכלל ולעבור אותם</li>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMeCard;
