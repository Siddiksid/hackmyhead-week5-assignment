"use client";

import { useState } from "react";

export default function StopWatch() {
  const [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState(null);

  function start() {
    setSeconds((seconds) => seconds + 1);
  }

  function handleStart() {
    setTime(clearInterval(time));
    setTime(setInterval(start, 1000));
  }

  function handleStop() {
    setTime(clearInterval(time));
  }

  function handleClear() {
    setTime(clearInterval(time));
    setSeconds(0);
  }
  return (
    <div>
      <h1>Stopwatch</h1>
      <p className="secs">{seconds} seconds</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}
