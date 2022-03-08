import { Component, useState } from "react";
import { within, userEvent } from "@storybook/testing-library";
import { Story, Meta, StoryObj } from "@storybook/react";
import { Input, InputProps, INPUT_SELECTOR } from "./Input";

type StoryType = StoryObj<InputProps>;
const Template: Story<InputProps> = (args) => {
  const [state, setState] = useState(args.value || "");

  return (
    <>
      <Input
        {...args}
        value={state}
        onChange={(value, e) => {
          setState(value);

          args.onChange && args.onChange(value, e);
        }}
      />
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
