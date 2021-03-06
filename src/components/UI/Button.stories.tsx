import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Button } from "./Button";
import { CalendarIcon, CogIcon } from "@heroicons/react/outline";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "UI/Button",
  component: Button,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/vUURdvzTa19j0rTvTGfcwM/Untitled?node-id=11%3A4",
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Button",
  icon: <CogIcon />,
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
  label: "Button",
  icon: <CalendarIcon />,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  tertiary: true,
  label: "Button",
  icon: <CalendarIcon />,
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
