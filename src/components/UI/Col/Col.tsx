import React from 'react';
import { css } from '@emotion/react';

interface BreakpointsProps {
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

const breakpoints: any = {
  sm: '@media (min-width: 576px)',
  md: '@media (min-width: 768px)',
  lg: '@media (min-width: 992px)',
  xl: '@media (min-width: 1200px)',
};

const col = (data: BreakpointsProps) => {
  let responsive = '';
  if (data && Object.keys(data).length > 0) {
    for (const [key, value] of Object.entries(data)) {
      responsive =
        responsive +
        `${breakpoints[key]} {
          flex: 0 0 auto;
          width: ${(value * 100) / 12}%;
      }`;
    }
  }

  console.log('col::breakpoints', { breakpoints, data });

  return css`
    position: relative;
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: 12px;
    padding-left: 12px;
    margin-top: 0;
    ${responsive}
  `;
};

interface ColProps extends BreakpointsProps {
  children: React.ReactNode;
}

const Col: React.FC<ColProps> = ({ children, ...props }) => {
  console.log('props', props);
  return <div css={col(props)}>{children}</div>;
};

export default Col;
