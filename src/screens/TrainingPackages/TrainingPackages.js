import React from "react";
import $ from "jquery";

import './TrainingPackages.css'
import TrainLevales from "./components/TrainLevales/TrainLevales";
import { loadCardsByOffset } from "./components/Functions";

const TrainingPackages = () => {
  $(window).scroll(loadCardsByOffset);

  return (
    <div>
      <div className="training-packages-contaoner">
        <li>?מה המסלולים</li>
      </div>
      <div>
        <TrainLevales />
      </div>
    </div>
  );
};

export default TrainingPackages;
