import React, { ReactNode, VoidFunctionComponent } from 'react';
import classnames from 'classnames';

export type Props = {
  primary?: boolean;
  onClick: () => void;
  children: ReactNode,
};

export const Button: VoidFunctionComponent<Props> = ({
  primary = false,
  onClick,
  children
}) => (
  <button className={classnames(
    'border-4',
    'transition',
    'px-5',
    'py-2.5',
    'cursor-pointer',
    {
      'border-primary': primary,
      'bg-primary-light': primary,
      'hover:bg-primary': primary,
      'hover:border-primary-dark': primary,
      'border-primary-light': !primary,
      'hover:border-primary': !primary,
      'hover:bg-primary-light': !primary,
    }
  )}
    onClick={onClick}
  >
    {children}
  </button>
);
