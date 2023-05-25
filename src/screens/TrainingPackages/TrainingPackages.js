import React from "react";
import './TrainingPackages.css'
import TrainLevales from "./components/TrainLevales/TrainLevales";

const TrainingPackages = () => {
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
