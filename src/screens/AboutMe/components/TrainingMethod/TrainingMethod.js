import React from "react";
import "./TrainingMethod.css";
import IMAGES from "../../../../assets/pictures/IMAGES";
import $ from "jquery";

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
  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();

    var training_method = Math.round(
      $(".training-method-container").height() - 1
    );
    $(".png-image-text").css({
      animation: function () {
        if (scrollTop >= training_method - 50)
          return "fade-in-left 0.7s linear both";
        else {
          return "none";
        }
      },
    });
    // $(".self-image-container button").delay(300).animate("fade-in", 700);
    $(".self-image-container button").css({
      animation: function () {
        if (scrollTop >= training_method - 50)
          return "fade-in 0.7s 2.8s linear both";
        else {
          return "none";
        }
      },
    });

    var stages = Math.round($(".method-stages").height() - 1);
    var ad = function (dealy) {
      if (scrollTop >= training_method + stages - 50)
        return `fade-in-up 0.7s ${dealy}s linear both`;
      else {
        return "none";
      }
    };
    $("#s1").css({
      animation: ad(0.7),
    });
    $("#s2").css({
      animation: ad(1.4),
    });
    $("#s3").css({
      animation: ad(2.1),
    });
  });
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
          <h1> ?למה אני בטוחה שזה יעבוד גם לך</h1>
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

const StageCard = (props) => {
  return (
    <div id={props.index} className={"stage-card-container"}>
      <div className="stage-card-circle-image">
        <img src={props.imageUrl} alt="try realod" />
      </div>
      <div className="stage-card-title">
        <h1>{props.title}</h1>
      </div>
      <div className="stage-card-text">{props.text}</div>
    </div>
  );
};
