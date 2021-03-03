import React, { ReactNode, VoidFunctionComponent } from 'react';

export type Props = {
  children: ReactNode,
};

const Button: VoidFunctionComponent<Props> = ({ children }) => (
  <button className="bg-primary-50">
    {children}
  </button>
);

export default Button;
