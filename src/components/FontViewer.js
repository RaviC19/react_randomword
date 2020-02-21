import React, { useState } from "react";
import "./FontViewer.css";

function FontViewer() {
  const [input, setInput] = useState("Words go here");
  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <div>
      <input value={input} onChange={handleChange} />
      <ol>
        <li>{input}</li>
        <li>{input}</li>
      </ol>
    </div>
  );
}

export default FontViewer;
