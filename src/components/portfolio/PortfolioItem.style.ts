import { css } from '@emotion/react';

const item = css`
  margin-bottom: 35px;
`;

const media = css`
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 28px;
  position: relative;

  > [data-gatsby-image-wrapper] {
    position: absolute !important;
    inset: 0;
    z-index: 0;
  }

  picture {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
  }

  picture img {
    object-fit: contain !important;
    object-position: center;
    width: 100%;
    height: 100%;
  }
`;

const play = css`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  height: 50px;
  width: 50px;
  min-width: 50px;
  position: absolute;
  margin: auto;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(1px);
  cursor: pointer;
  transition: backdrop-filter 0.2s ease-in;
  z-index: 1;

  &:hover {
    backdrop-filter: blur(3px);
  }

  svg {
    font-size: 20px;
  }
`;

const textWrapper = css`
  text-align: center;
`;

const title = css`
  color: #ffffff;
  display: inline-block;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 8px;
  position: relative;

  &::after {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    width: 100%;
    background: #333;
    content: '';
    transition: all, 0.3s;
    opacity: 0;
  }
`;

const tag = css`
  list-style: none;
  display: inline-block;
  font-size: 16px;
  font-weight: 300;
  margin-right: 24px;
  position: relative;
  color: #adadad;

  &:after {
    position: absolute;
    right: -16px;
    top: 0;
    content: '/';
  }

  &:last-child {
    margin-right: 0;

    &:after {
      display: none;
    }
  }
`;

export { item, media, play, textWrapper, title, tag };
