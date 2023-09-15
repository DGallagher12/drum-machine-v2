import React from "react";

function StepSequencer({ sequence, onToggleStep }) {
  return (
    <div className="step-sequencer">
      {sequence.map((isActive, index) => (
        <button
          key={index}
          className={`step ${isActive ? "active" : ""}`}
          onClick={() => onToggleStep(index)}
        ></button>
      ))}
    </div>
  );
}

export default StepSequencer;
