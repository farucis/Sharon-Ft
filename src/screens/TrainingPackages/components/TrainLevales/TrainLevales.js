import React from "react";
import "./TrainLevales.css";

const TrainLevales = () => {
  return (
    <ul className="tilesWrap">
      {trainLevalesDB.map((obj) => {
        return (
          <li>
            <h2>0{obj.id}</h2>
            <h3>{obj.title}</h3>
            <p>{obj.info}</p>
            <button>קרא עוד</button>
          </li>
        );
      })}
    </ul>
  );
};

export default TrainLevales;

const trainLevalesDB = [
  {
    id: 1,
    title: "אימון קבוצתי בודד",
    info: 'בעלות של 50 ש"ח בתשלום מראש ללא התחייבות',
  },
  {
    id: 2,
    title: "basic מסלול חודשי",
    info: 'בעלות של 349 ש"ח ללא התחייבות ללא דמי ביטול',
  },
  {
    id: 3,
    title: "premium מסלול חודשי",
    info: 'בעלות של 449 ש"ח ללא התחייבות ללא דמי ביטול',
  },
  {
    id: 4,
    title: "אימון אישי 1 על 1",
    info: 'בעלות של 150 ש"ח בתשלום מראש ללא התחייבות',
  },
];
