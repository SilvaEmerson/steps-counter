import React, { useState, useEffect } from "react";
import { counterObs, isWalkingSubject } from "../streams.js";
import { ActionButton } from "./ActionButton";

export function CounterClock(props) {
  const [counter, setCounter] = useState(0);
  const [isSub, setIsSub] = useState(false);

  useEffect(() => {
    isWalkingSubject.subscribe(i => {
      setIsSub(true);
      counterObs.subscribe(step => setCounter(step));
    });
  }, [isSub]);

  return (
    <div>
      <h1>{counter === 0 ? "No only step" : `${counter} steps!`}</h1>
      <div>
        <ActionButton steps={counter} />
      </div>
    </div>
  );
}

export default CounterClock;
