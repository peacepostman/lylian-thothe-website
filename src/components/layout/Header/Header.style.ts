import { css } from '@emotion/react';
import Container from '../../UI/Container';

const header = css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  background: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 9;
`;

const headerLogo = css`
  padding: 30px 0;
  width: 240px;

  a {
    display: inline-block;
  }

  [Container] {
    position: relative;
  }
`;

export { header, headerLogo };
