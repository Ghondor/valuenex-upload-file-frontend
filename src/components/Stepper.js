import React from 'react';

const Stepper = ({activeStep, steps}) => {
  return (
      <div className="flex flex-col">
          <div className="container-bar w-full">
              <ul className="progressbar">
                  {steps.map((label, index) => (
                      <li className={activeStep === index ? 'active' : ''} key={index}>{label}</li>
                  ))}
              </ul>
          </div>
      </div>
  )
};

export default Stepper;
