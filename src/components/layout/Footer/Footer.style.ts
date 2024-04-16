import { css } from '@emotion/react';

const footer = css`
  background: #131313;
  @media (min-width: 992px) and (max-width: 1199px) {
  }
`;

const footerTop = css`
  padding: 30px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const logo = css`
  line-height: 40px;

  a {
    display: inline-block;
  }

  img {
    vertical-align: middle;
  }
`;

const social = css`
  text-align: right;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    color: #ffffff;
    height: 40px;
    width: 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    line-height: 44px;
    text-align: center;
    margin-right: 6px;
    transition: background 0.15s ease-in;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }

    &:last-child {
      margin-right: 0;
    }

    img {
      filter: invert(1);
      width: 14px;
      height: 14px;
    }
  }
`;

export { footer, footerTop, logo, social };
