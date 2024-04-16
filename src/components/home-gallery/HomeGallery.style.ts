import { css } from '@emotion/react';

const work = css`
  overflow: hidden;
  background: #000001;
`;

const gridSizer = css`
  width: calc(16.67% - 10px);

  @media (max-width: 479px) {
    width: 100%;
  }

  @media (max-width: 767px) {
    width: calc(50% - 10px);
  }
`;

const workItemHover = css`
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 25px 30px 20px;
  transition: transform 0.5s ease-in;
  transform: translateY(100%);

  h4 {
    font-size: 22px;
    color: #ffffff;
    font-weight: 700;
  }

  ul li {
    color: #adadad;
    list-style: none;
    font-size: 16px;
    margin-right: 23px;
    position: relative;
    display: inline-block;

    &:not(:last-child):after {
      position: absolute;
      right: -18px;
      top: 1px;
      content: '/';
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

const workItem = (type?: 'lg' | 'wide') => css`
  height: ${type && type === 'lg' ? '633px !important' : '311px !important'};
  width: ${type ? 'calc(33.33% - 10px)' : 'calc(16.67% - 10px)'};

  margin-right: 10px;
  margin-bottom: 10px;
  float: left;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 479px) {
    width: 100%;
    margin-right: 0;
  }

  @media (max-width: 767px) {
    width: calc(50% - 10px);
  }
`;

const workPlay = css`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  height: 50px;
  width: 50px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(1px);
  cursor: pointer;
  transition: backdrop-filter 0.2s ease-in;

  &:hover {
    backdrop-filter: blur(3px);
  }

  svg {
    font-size: 20px;
  }
`;

const workModal = css`
  iframe,
  mux-player {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    aspect-ratio: 16 / 9;
  }
`;

const workModalClose = css`
  position: absolute;
  right: 0;
  top: 0;
  margin-top: -40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.3s ease-in;

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: none;
  }
`;

export { work, workItem, workItemHover, workPlay, workModal, workModalClose, gridSizer };
