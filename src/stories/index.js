import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";

import CounterClock from "../Components/Counter";
import StopTime from "../Components/StopTime";
import TotalSteps from "../Components/TotalSteps";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf("Counter", module)
  .add("Walking counter", () => <CounterClock />)
  .add("Stop counter", () => <StopTime />);

storiesOf("Accumulator", module).add("Total steps", () => <TotalSteps />);
