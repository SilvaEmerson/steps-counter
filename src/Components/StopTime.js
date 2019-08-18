import React, { useState, useEffect } from "react";

import { stopTimeObs, isStopedSubject, isWalkingSubject } from "../streams.js";

export function StopTime(props) {
  const originalStopTime = "0 m: 0 s";
  const [stopTime, setStopTime] = useState(originalStopTime);

  useEffect(() => {
    let subIsStoppedSubject = isStopedSubject.subscribe(i => {
      stopTimeObs.subscribe(stopTimeEv => setStopTime(stopTimeEv));
    });

    let subIsWalkingSubject = isWalkingSubject.subscribe(i => setStopTime(originalStopTime));

    return () => {
        subIsStoppedSubject.unsubscribe();
        subIsWalkingSubject.unsubscribe();
    }
  });

  return (
    <div>
      <h1>Stopped time</h1>
      <h2>{stopTime}</h2>
    </div>
  );
}

export default StopTime;
