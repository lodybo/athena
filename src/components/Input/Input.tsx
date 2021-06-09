import React, { VoidFunctionComponent } from 'react';
import classnames from "classnames";

export type Props = {
  label: string;
  validationState?: 'none' | 'success' | 'error';
  validationMessage?: string;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

/**
 * The most low-level input field.
 * @constructor
 */
export const Input: VoidFunctionComponent<Props> = (props: Props) => {
  const {
    label,
    validationState,
    validationMessage,
    ...attrs
  } = props;

  return (
    <label>
      <p
        className="
          pb-2.5
        "
      >
        {label}
      </p>

      <input
        className={classnames(
          'p-2',
          'border-2',
          'border-solid',
          'border-primary-dark',
          'rounded-md',
          'text-base',
          'w-full',
          'sm:w-3/4',
          'md:w-2/4',
          'focus:outline-none',
          'focus-visible:ring-2',
          'focus-visible:ring-secondary-dark',
          'focus-visible:ring-offset-2',
          'focus-visible:ring-offset-white',
          {
            'border-success': validationState === 'success',
            'border-error': validationState === 'error',
          }
        )}
        {...attrs}
      />

      <p
        className={classnames(
          'border-error-dark',
          'border-4',
          'border-solid',
          'bg-error',
          'p-2',
          'mt-2.5',
          'text-white',
          'sm:w-3/4',
          'md:w-2/4',
          {
          'invisible': validationState !== 'error',
        })}
      >
        {validationMessage}
      </p>
    </label>
  );
};