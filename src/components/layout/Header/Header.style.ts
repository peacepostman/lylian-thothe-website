import { css } from '@emotion/react';

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
`;

const headerNavOptions = css`
  text-align: right;
  padding: 28px 0px;

  @media (max-width: 991px) {
    display: none;
  }
`;

const headerDropdown = css`
  position: absolute;
  right: 0;
  top: 60px;
  width: 140px;
  background: #ffffff;
  text-align: right;
  padding: 2px 0;
  z-index: 9;
  opacity: 0;
  visibility: hidden;
  transition: all, 0.3s;

  li {
    display: block;
    margin-right: 0;

    a {
      font-size: 14px;
      color: #111111;
      padding: 8px 20px;
      text-transform: capitalize;

      &:after {
        display: none;
      }
    }
  }
`;

const headerNavMenu = css`
  display: inline-block;
  margin-right: 45px;

  li {
    list-style: none;
    display: inline-block;
    margin-right: 45px;
    position: relative;
  }

  li a[aria-current='page']:after,
  li:hover a:after {
    transform: scale(1);
  }

  li:last-child {
    margin-right: 0;
  }

  li a {
    font-size: 15px;
    font-family: 'Rethink Sans', sans-serif;
    color: #ffffff;
    display: block;
    text-transform: uppercase;
    position: relative;
    padding: 6px 0;
  }

  li a:after {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #fffff1;
    content: '';
    transform: scale(0);
    transition: all, 0.3s;
  }

  li:hover .dropdown {
    top: 34px;
    opacity: 1;
    visibility: visible;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    margin-right: 25px;

    li {
      margin-right: 25px;
    }
  }
`;

const headerSocial = css`
  display: inline-block;
  position: relative;
  padding-left: 50px;

  &:before {
    position: absolute;
    left: 0;
    top: 4px;
    height: 13px;
    width: 1px;
    background: rgba(225, 225, 225, 0.2);
    content: '';
  }

  a {
    color: #ffffff;
    font-size: 15px;
    margin-right: 18px;

    &:last-child {
      margin-right: 0;
    }

    img {
      width: 15px;
      height: 15px;
      filter: invert(1);
    }
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    padding-left: 25px;
  }
`;

export { header, headerLogo, headerNavOptions, headerNavMenu, headerDropdown, headerSocial };
