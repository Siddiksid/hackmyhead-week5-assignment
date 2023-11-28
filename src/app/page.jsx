"use client";

import Counter from "@/components/Counter.jsx";
import Mirror from "@/components/Mirror.jsx";
import Racecar from "@/components/Racecar.jsx";
import StopWatch from "@/components/StopWatch.jsx";
import ToggleBox from "@/components/ToggleBox.jsx";

export default function Home(props) {
  return (
    <main>
      <h1>Day 10</h1>
      <ToggleBox />
      <Mirror />
      <Counter />
      <Racecar />
      <StopWatch />
    </main>
  );
}
