import React from 'react';
import { css } from '@emotion/react';

interface BreakpointsProps {
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

const breakpoints: any = {
  sm: { key: 0, media: '@media (min-width: 576px)' },
  md: { key: 1, media: '@media (min-width: 768px)' },
  lg: { key: 2, media: '@media (min-width: 992px)' },
  xl: { key: 3, media: '@media (min-width: 1200px)' },
};

const col = (data: BreakpointsProps) => {
  let responsive: {
    key: number;
    media: string;
  }[] = [];
  if (data && Object.keys(data).length > 0) {
    for (const [key, value] of Object.entries(data)) {
      if (breakpoints[key]) {
        responsive.push({
          key: breakpoints[key]['key'],
          media: `${breakpoints[key]['media']} { flex: 0 0 auto; width: ${(value * 100) / 12}%;}`,
        });
      }
    }
    responsive.sort((a: any, b: any) => a.key - b.key);
  }

  return css`
    position: relative;
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: 12px;
    padding-left: 12px;
    margin-top: 0;
    ${responsive.map((item: any) => item.media).join('')}
  `;
};

interface ColProps extends BreakpointsProps {
  children: React.ReactNode;
  className?: string;
}

const Col: React.FC<ColProps> = ({ children, className, ...props }) => (
  <div className={className} css={col(props)}>
    {children}
  </div>
);

export default Col;
