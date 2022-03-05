import { Component, useState } from "react";
import { within, userEvent } from "@storybook/testing-library";
import { Story, Meta, StoryObj } from "@storybook/react";
import { Input, InputProps, INPUT_SELECTOR } from "./Input";
type StoryType = StoryObj<InputProps>;
const Template: Story<InputProps> = (args) => {
  const [state, setState] = useState(args.value || "");

  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");

  // Regular Expression (A sequence of characters that specifies a search pattern in text)
  const result =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const validateEmail = (e) => {
    const email = e.target.value;
    if (result.test(email)) {
      setIsValid(true);
      setMessage("Awesome, Your Email Address looks good.");
    } else {
      setIsValid(false);
      setMessage("Sorry, Please Enter a valid Email Address.");
    }
  };

  return (
    <>
      {/* Disbaled */}
      {/* <Input
        {...args}
        value={state}
        onChange={(value, e) => {
          setState(value);

          args.onChange && args.onChange(value, e);
        }}
      /> */}

      {/* Rendering Input - Email */}
      <input placeholder="Enter Your Email" onChange={validateEmail} />

      {/* //  STYLES = Success / Error Messages Goes Here  */}
      <div className={`message ${isValid ? "successMessage" : "errorMessage"}`}>
        {message}
      </div>
    </>
  );
};

export default {
  title: "Components/Input",
  component: Template.bind({}),
  args: {
    value: "this is a value",
  },
} as Meta;

export const Default: StoryType = {
  name: "Email",
  args: {
    value: "Input",
  },
};

export const Controlled: StoryType = {
  name: "Controlled",
  args: {
    value: "",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(
      await canvas.findByTestId(INPUT_SELECTOR),
      "Hello World"
    );
  },
};
