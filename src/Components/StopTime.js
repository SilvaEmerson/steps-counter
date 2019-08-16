import React, { useState } from "react";
import { stopTimeObs, isStoped, isWalking } from "../streams.js";

export function StopTime(props) {
  const originalStopTime = "0 m: 0 s";
  const [stopTime, setStopTime] = useState(originalStopTime);

  isStoped.subscribe(i => {
    stopTimeObs.subscribe(stopTimeEv => setStopTime(stopTimeEv));
  });

  isWalking.subscribe(i => setStopTime(originalStopTime));

  return (
    <div>
      <h1>Stoped time</h1>
      <h2>{stopTime}</h2>
    </div>
  );
}

export default StopTime;
