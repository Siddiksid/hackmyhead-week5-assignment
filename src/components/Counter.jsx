"use client";

import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  function handlePlus() {
    let plus = number + 1;
    setNumber(plus);
  }

  function handleMinus() {
    let minus = number - 1;
    setNumber(minus);
  }

  return (
    <div>
      <h1>Counter</h1>
      <div className="counter">
        <button onClick={handleMinus}>-</button>
        <p>{number}</p>
        <button onClick={handlePlus}>+</button>
      </div>
      <hr />
    </div>
  );
}
