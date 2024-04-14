import React from 'react';
import { css } from '@emotion/react';

const container = css`
  width: 100%;
  padding-right: calc(1.5rem * 0.5);
  padding-left: calc(1.5rem * 0.5);
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1170px;
  }
`;

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div css={container}>{children}</div>;
};

export default Container;
