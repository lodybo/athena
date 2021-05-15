import React, { VoidFunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';

export enum ALERT_STATES {
  HIDDEN = 'HIDDEN',
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
  NOTIFICATION = 'NOTIFICATION',
}

export type Props = {
  state: ALERT_STATES,
  message: string,
  onClose: () => void,
};

export const Alert: VoidFunctionComponent<Props> = ({
  state = ALERT_STATES.HIDDEN,
  message,
  onClose,
}: Props) => (
  <div className={classnames(
    {
      'flex': state !== ALERT_STATES.HIDDEN,
      'hidden': state === ALERT_STATES.HIDDEN,
    },
    'relative',
    'my-10',
    'py-5',
    'px-10',
    'border-4',
    'border-solid',
    {
      'border-primary-dark': state === ALERT_STATES.NOTIFICATION,
      'bg-primary': state === ALERT_STATES.NOTIFICATION,
    },
    {
      'border-success-dark': state === ALERT_STATES.SUCCESS,
      'bg-success-light': state === ALERT_STATES.SUCCESS,
    },
    {
      'border-warning-dark': state === ALERT_STATES.WARNING,
      'bg-warning-light': state === ALERT_STATES.WARNING,
    },
    {
      'border-error-dark': state === ALERT_STATES.ERROR,
      'bg-error-light': state === ALERT_STATES.ERROR,
    }
  )}>
    { message }
    <button
      className={classnames(
        'border-none',
        'bg-none',
        'absolute',
        'top-1.5',
        'right-2.5',
        'text-lg',
        'text-secondary',
        'hover:text-secondary-dark',
        'focus:outline-none',
        'focus-visible:ring-2',
        'focus-visible:ring-secondary-dark',
        'focus-visible:ring-offset-2',
        {
          'focus-visible:ring-offset-primary': state === ALERT_STATES.NOTIFICATION,
          'focus-visible:ring-offset-success-light': state === ALERT_STATES.SUCCESS,
          'focus-visible:ring-offset-warning-light': state === ALERT_STATES.WARNING,
          'focus-visible:ring-offset-error-light': state === ALERT_STATES.ERROR,
        }
      )}
      onClick={onClose}
    >
      <FontAwesomeIcon icon="times-circle" />
    </button>
  </div>
);
