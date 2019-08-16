import React, { useState } from "react";
import {
  counterObs,
  totalStepsSubject,
  isStoped,
  isWalking
} from "../streams.js";

export function CounterClock(props) {
  const [counter, setCounter] = useState(0);

  isWalking.subscribe(i => {
    counterObs.subscribe(step => setCounter(step));
  });

  return (
    <div>
      <h1>{counter === 0 ? "No only step" : `${counter} steps!`}</h1>
      <div>
        <button onClick={() => isWalking.next(true)}>Play!</button>
        <button
          onClick={() => {
            isStoped.next(true);
            totalStepsSubject.next(counter);
          }}
        >
          Pause!
        </button>
      </div>
    </div>
  );
}

export default CounterClock;
