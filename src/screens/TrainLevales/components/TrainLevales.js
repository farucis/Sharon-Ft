import React from "react";
import './TrainLevales.css'

const TrainLevales = () => {
  return (
    <ul class="tilesWrap">
      <li>
        <h2>01</h2>
        <h3>שלב 1</h3>
        <p>
בשלב הראשון נכיר באופן אישי ונעשה תאום ציפיות        </p>
        <button>קרא עוד</button>
      </li>
      <li>
        <h2>02</h2>
        <h3>שלב 2</h3>
        <p>
          בשלב השני נקבע תוכנית אימונים ותפריט תזונה מתאים באופן אישי
                  </p>
        <button>קרא עוד</button>
      </li>
      <li>
        <h2>03</h2>
        <h3>שלב 3</h3>
        <p>
          נקבע מפגשים שבועים בהתאם לחבילה הנבחרת
        </p>
        <button>קרא עוד</button>
      </li>
      <li>
        <h2>04</h2>
        <h3>שלב 4</h3>
        <p>
          נצא לדרך !
        </p>
        <button>קרא עוד</button>
      </li>
    </ul>
  );
};

export default TrainLevales;
