import React from 'react';
import { Button, Props } from './Button';

export const ButtonTemplate = (props: Props) => <Button {...props}>Do not click me</Button>;

export const argTypes = {
  onClick: {
    action: 'clicked',
  },
  primary: {
    name: 'Primary colors',
    description: 'Whether the button is themed in primary colors',
    control: {
      type: 'boolean'
    },
    table: {
      defaultValue: false,
    }
  }
};