import React, { useState, useEffect } from "react";
import { counterObs, isWalkingSubject } from "../streams.js";
import { ActionButton } from "./ActionButton";

export function CounterClock(props) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let sub = isWalkingSubject.subscribe(i => {
      counterObs.subscribe(step => setCounter(step));
    });

    return () => sub.unsubscribe()
  });

  return (
    <div>
      <h1>{counter === 0 ? "No one step" : `${counter} steps!`}</h1>
      <div>
        <ActionButton steps={counter} />
      </div>
    </div>
  );
}

export default CounterClock;
