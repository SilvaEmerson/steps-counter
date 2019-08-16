import React, { useState, useEffect } from "react";
import { totalStepsSubject } from "../streams.js";

export function TotalSteps(props) {
  const [totalSteps, setTotalSteps] = useState(0);

  useEffect(() => {
    let subTotalStepsSubject = totalStepsSubject.subscribe(i =>
      setTotalSteps(totalSteps + i)
    );

    return () => subTotalStepsSubject.unsubscribe();
  });

  return (
    <div>
      <h1>
        {totalSteps === 0
          ? "No only step at all"
          : `${totalSteps} steps at all!`}
      </h1>
    </div>
  );
}

export default TotalSteps;
