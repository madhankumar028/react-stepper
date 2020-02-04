import React from "react";
import "./Stepper.scss";

const steps = (stepDetails, count) => (
  <React.Fragment key={count}>
    <input
      className="stepper__input"
      id={`stepper-flex-${count}`}
      name="stepper-flex"
      type="radio"
      checked="checked"
    />
    <div className="stepper__step">
      <label className="stepper__button" htmlFor={`stepper-flex-${count}`}>
        {stepDetails.title}
      </label>
      <p className="stepper__content" htmlFor={`stepper-flex-${count}`}>
        {stepDetails.componentView}
      </p>
    </div>
  </React.Fragment>
);

const Stepper = props => {
  const { stepperDetails } = props;
  return (
    <ul className="container">
      <li className="container__item">
        <div className="stepper stepper--flexbox">
          {stepperDetails.map((step, index) => steps(step, index))}
        </div>
      </li>
    </ul>
  );
};

export default Stepper;
