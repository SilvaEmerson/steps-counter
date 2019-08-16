import React, { useState } from "react";
import { totalStepsSubject } from "../streams.js";


export function TotalSteps(props) {

  const [totalSteps, setTotalSteps] = useState(0);

  totalStepsSubject.subscribe(i => setTotalSteps(totalSteps + i));

  return (
    <div>
      <h1>{totalSteps === 0 ? "No only step at all" : `${totalSteps} steps at all!`}</h1>
    </div>
  );
};

export default TotalSteps;
