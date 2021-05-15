import React, { ReactNode, VoidFunctionComponent } from 'react';
import classnames from 'classnames';
import { ClassValue } from "classnames/types";

export type Props = {
  classes?: ClassValue,
  theme?: 'primary' | 'secondary' | 'tertiary',
  solid?: boolean;
  simple?: boolean;
  onClick: () => void;
  children: ReactNode,
};

export const Button: VoidFunctionComponent<Props> = ({
  classes = '',
  solid = false,
  simple = false,
  theme = 'primary',
  onClick,
  children
}) => (
  <button className={classnames(
    'transition',
    'px-5',
    'py-2.5',
    'cursor-pointer',
    'focus:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-secondary-dark',
    'focus-visible:ring-offset-2',
    'focus-visible:ring-offset-primary',
    {
      'border-4': !solid,
      [`bg-${theme}-light`]: solid || !simple,
      [`hover:bg-${theme}`]: true,
      [`border-${theme}`]: !solid,
      [`hover:border-${theme}-dark`]: !solid,
    },
    classes
  )}
    onClick={onClick}
  >
    {children}
  </button>
);
