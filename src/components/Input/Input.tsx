import React, { ReactNode, VoidFunctionComponent } from 'react';

export type Props = {

} & Pick<HTMLInputElement, 'type'>;

export const Input: VoidFunctionComponent<Props> = ({
  type,
}: Props) => (
  <input type={ type } />
);

const o: Props = {
  type: ''
};