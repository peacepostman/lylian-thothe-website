import React from 'react';
import { css } from '@emotion/react';

const button = css`
  display: inline-block;
  font-size: 15px;
  font-family: 'Rethink Sans', sans-serif;
  font-weight: 700;
  padding: 14px 32px 12px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  z-index: 1;
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover:before,
  &:hover:after {
    height: 100%;
    width: 100%;
  }

  &:before {
    position: absolute;
    left: 0;
    top: 0;
    height: 30px;
    width: 30px;
    border-left: 2px solid #fffff1;
    border-top: 2px solid #fffff1;
    content: '';
    z-index: -1;
    transition: all, 0.7s;
  }

  &:after {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 30px;
    width: 30px;
    border-right: 2px solid #fffff1;
    border-bottom: 2px solid #fffff1;
    content: '';
    z-index: -1;
    transition: all, 0.7s;
  }
`;

export { button };

const Button: React.FC<any> = ({ as, children, ...props }) => {
  const Component = props.as ? props.as : 'button';

  return (
    <Component css={button} {...props}>
      {children}
    </Component>
  );
};

export default Button;
