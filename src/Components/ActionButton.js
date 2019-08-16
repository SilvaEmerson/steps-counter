import React, { useState } from "react";
import {
  totalStepsSubject,
  isStopedSubject,
  isWalkingSubject
} from "../streams.js";

export function ActionButton(props) {
  const [isWalking, setIsWalking] = useState(false);
  const [message, setMessage] = useState("Walk!");

  return (
    <>
      <button
        onClick={() => {
          if (isWalking) {
            setMessage("Walk!");
            setIsWalking(false);
            isStopedSubject.next(true);
            totalStepsSubject.next(props.steps);
          } else {
            setMessage("Stop!");
            setIsWalking(true);
            isWalkingSubject.next(true);
          }
        }}
      >
        {message}
      </button>
    </>
  );
}

export default ActionButton;
