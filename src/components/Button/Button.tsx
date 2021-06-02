import React, { ReactNode, VoidFunctionComponent } from 'react';
import classnames from 'classnames';
import { ClassValue } from "classnames/types";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type Props = {
  classes?: ClassValue,
  theme: 'primary' | 'secondary' | 'tertiary',
  solid: boolean;
  simple: boolean;
  icon?: IconProp;
  iconPlacement: 'right' | 'left';
  onClick: () => void;
  children: ReactNode,
};

export const Button: VoidFunctionComponent<Props> = ({
  classes = '',
  solid = false,
  simple = false,
  theme = 'primary',
  icon,
  iconPlacement = 'left',
  onClick,
  children
}) => (
  <button className={classnames(
    'transition',
    'py-2.5',
    'cursor-pointer',
    'focus:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-secondary-dark',
    'focus-visible:ring-offset-2',
    'focus-visible:ring-offset-primary',
    {
      'border-4': !solid,
      'px-5': true,
      'pl-2.5': icon && iconPlacement === 'left',
      'pr-2.5': icon && iconPlacement === 'right',
      [`bg-${theme}-light`]: solid || !simple,
      [`hover:bg-${theme}`]: true,
      [`border-${theme}`]: !solid,
      [`hover:border-${theme}-dark`]: !solid,
    },
    classes
  )}
    onClick={onClick}
  >
    <span
      className={classnames(
        'flex',
        'items-center',
        {
          'flex-row-reverse': iconPlacement === 'right',
        }
      )}
    >
      {icon && (
        <FontAwesomeIcon
          className={classnames({
            'mr-2.5': icon && iconPlacement === 'left',
            'ml-2.5': icon && iconPlacement === 'right',
          })}
          icon={icon}
          fixedWidth
        />
      )}
      {children}
    </span>
  </button>
);
