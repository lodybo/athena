import React from 'react';
import { Alert, Props } from './Alert';

export const AlertTemplate = (props: Props) => <Alert {...props} />;

export const argTypes = {
  onClose: {
    action: 'clicked',
  },
  state: {
    name: 'State',
    description: 'The state of the alert itself.',
    control: {
      type: 'select',
      options: [ 'HIDDEN', 'SUCCESS', 'WARNING', 'ERROR', 'NOTIFICATION' ],
    },
    table: {
      defaultValue: 'HIDDEN',
    },
  },
  message: {
    name: 'Message',
    description: 'The message to display.',
    control: {
      type: 'text',
    }
  },
};