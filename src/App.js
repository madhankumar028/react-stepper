import React from "react";
import Stepper from "./components/Stepper/Stepper";
import "./styles.scss";

export default function App() {
  const stepperDetails = [
    {
      count: 1,
      title: "Take Truck to Loading"
    },
    {
      count: 2,
      title: "Truck at Loading"
    },
    {
      count: 3,
      title: "Take truck to unloading"
    },
    {
      count: 4,
      title: "Truck at unloading"
    }
  ];

  return (
    <div className="App">
      <div className="stepper__view">
        <Stepper stepperDetails={stepperDetails} />
      </div>
    </div>
  );
}
