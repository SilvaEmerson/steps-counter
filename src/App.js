import React from "react";
import "./App.css";

import "./Components/Counter";
import CounterClock from "./Components/Counter";
import TotalSteps from "./Components/TotalSteps";
import StopTime from "./Components/StopTime";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterClock />
        <TotalSteps />
        <StopTime />
      </header>
    </div>
  );
};

export default App;
