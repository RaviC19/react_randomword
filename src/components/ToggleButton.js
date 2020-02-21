import React from "react";

function ToggleButton({ isOn, handleClick }) {
  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: isOn ? "green" : "blue",
        color: isOn ? "white" : "yellow"
      }}
    >
      {isOn ? "On" : "Off"}
    </button>
  );
}

export default ToggleButton;
