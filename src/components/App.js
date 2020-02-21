import React, { useState } from "react";
import ToggleButton from "./ToggleButton";
import FontViewer from "./FontViewer";
import RandomWord from "./RandomWord";
import "./App.css";

function App() {
  const [isOn, setIsOn] = useState(false);
  function handleClick() {
    setIsOn(!isOn);
  }
  return (
    <div>
      <RandomWord />
      <ToggleButton isOn={isOn} handleClick={handleClick} />
      {isOn && <FontViewer />}
    </div>
  );
}

export default App;
