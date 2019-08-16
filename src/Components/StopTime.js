import React, { useState, useEffect } from "react";

import { stopTimeObs, isStopedSubject, isWalkingSubject } from "../streams.js";

export function StopTime(props) {
  const originalStopTime = "0 m: 0 s";
  const [stopTime, setStopTime] = useState(originalStopTime);

  useEffect(() => {
    let sub = isStopedSubject.subscribe(i => {
      stopTimeObs.subscribe(stopTimeEv => setStopTime(stopTimeEv));
    });

    isWalkingSubject.subscribe(i => setStopTime(originalStopTime));

    return () => sub.unsubscribe();
  });

  return (
    <div>
      <h1>Stoped time</h1>
      <h2>{stopTime}</h2>
    </div>
  );
}

export default StopTime;
