import React, { useState } from "react";

const words = [
  "Orange",
  "Banana",
  "Apple",
  "Pineapple",
  "Melon",
  "Kiwi",
  "Mango",
  "Guava",
  "Lychee",
  "Grape"
];

function RandomWord() {
  const [pointer, setPointer] = useState(0);
  function handleClick() {
    const randomNumber = Math.floor(Math.random() * words.length);
    setPointer(randomNumber);
  }
  return (
    <div>
      {words[pointer]}
      <button onClick={handleClick}>Hungry? Press for food</button>
    </div>
  );
}

export default RandomWord;
