import React from 'react';
import { Button, Props } from './Button';

export const ButtonTemplate = (props: Props) => <Button {...props}>Do not click me</Button>;

export const argTypes = {
  onClick: {
    action: 'clicked',
  },
  solid: {
    name: 'Solid color',
    description: 'Whether the button\'s background is a solid color.',
    control: {
      type: 'boolean'
    },
    table: {
      defaultValue: false,
    }
  },
  simple: {
    name: 'Simple state',
    description: 'Display the button in a simple color theme (only borders).',
    control: {
      type: 'boolean'
    },
    table: {
      defaultValue: false,
    }
  },
  theme: {
    name: 'Button theme',
    description: 'The theme the button is colored in',
    control: {
      options: [
        'primary',
        'secondary',
        'tertiary',
      ]
    }
  }
};