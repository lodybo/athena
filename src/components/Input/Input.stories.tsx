import React from "react";
import { Input, Props } from "./Input";
import { ArgTypes } from "@storybook/react";

export const InputTemplate = (props: Props) => <Input {...props} />;

export const argTypes: ArgTypes = {
  label: {
    name: 'Label',
    description: 'A label to accompany the input with.',
  },
  validationState: {
    name: 'validationState',
    description: 'A visual indicator of an input\'s validation state',
    options: [
      'none',
      'success',
      'error',
    ],
    control: {
      type: 'select',
    },
  },
  validationMessage: {
    name: 'validationMessage',
    description: 'Indicate the validation to the user and point them towards an action.',
    control: {
      type: 'text',
    },
  },
};