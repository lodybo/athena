import React from 'react';
import { Button, Props } from './Button';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

library.add(
  faCheck,
)

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
      defaultValue: { summary: 'false'},
    }
  },
  icon: {
    name: 'Display an icon within the button.',
    description: 'Passing an `icon` prop will display a Font Awesome icon within the button.',
    control: {
      type: 'text',
    },
  },
  iconPlacement: {
    name: 'Position of the icon.',
    description: 'Determine at which side of the button the icon will be displayed.',
    options: ['left', 'right'],
    control: {
      type: 'select',
    }
  },
  simple: {
    name: 'Simple state',
    description: 'Display the button in a simple color theme (only borders).',
    control: {
      type: 'boolean'
    },
    table: {
      defaultValue: { summary: 'false'},
    },
  },
  theme: {
    name: 'Button theme',
    description: 'The theme the button is colored in',
    control: {
      type: 'radio',
      options: [
        'primary',
        'secondary',
        'tertiary',
      ]
    },
    table: {
      defaultValue: { summary: 'primary'},
    }
  }
};