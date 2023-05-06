import React from "react";
import "./TrainLevales.css";

const TrainLevales = () => {
  return (
    <ul className="tilesWrap">
      <li>
        <h2>01</h2>
        <h3>אימון קבוצתי בודד</h3>
        <p>בעלות של 50 ש"ח בתשלום מראש ללא התחייבות</p>
        <button>קרא עוד</button>
      </li>
      <li>
        <h2>02</h2>
        <h3>basic מסלול חודשי</h3>
        <p>בעלות של 349 ש"ח ללא התחייבות ללא דמי ביטול</p>
        <button>קרא עוד</button>
      </li>
      <li>
        <h2>03</h2>
        <h3>premium מסלול חודשי </h3>
        <p>בעלות של 449 ש"ח ללא התחייבות ללא דמי ביטול</p>
        <button>קרא עוד</button>
      </li>
      <li>
        <h2>04</h2>
        <h3>אימון אישי 1 על 1 </h3>
        <p>בעלות של 150 ש"ח בתשלום מראש ללא התחייבות</p>
        <button>קרא עוד</button>
      </li>
    </ul>
  );
};

export default TrainLevales;
