import React, { useState } from "react";

const data = [
  { word: "Orange" },
  { word: "Banana" },
  { word: "Apple" },
  { word: "Pineapple" },
  { word: "Melon" },
  { word: "Kiwi" },
  { word: "Mango" },
  { word: "Guava" },
  { word: "Lychee" },
  { word: "Grape" }
];

function RandomWord() {
  const [random, setRandom] = useState(data);
  return <button>HELLO WE ARE WORKING</button>;
}

export default RandomWord;
