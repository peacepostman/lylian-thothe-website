import React from 'react';
import { css } from '@emotion/react';

const row = css`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0;
  margin-right: -12px;
  margin-left: -12px;
`;

const Row: React.FC<{ children: React.ReactNode; [props: string]: any }> = ({ children, ...otherProps }) => (
  <div css={row} {...otherProps}>
    {children}
  </div>
);

export default Row;
