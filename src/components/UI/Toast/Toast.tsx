import React, { ReactNode } from 'react';
import { css, keyframes } from '@emotion/react';

type toastType = 'success' | 'error';

const toastZone = css`
  position: fixed;
  right: 20px;
  top: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  max-width: 250px;
  align-items: flex-end;
  gap: 10px;
`;

const toast = (type: toastType) => css`
  border-radius: 5px;
  background-color: ${type === 'success' ? '#4caf50' : '#f44336'};
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  transition: all 0.3s ease-in;
  transform: translateX(100%);
  opacity: 0;

  &[data-displayed='true'] {
    transform: translateX(0);
    opacity: 1;
  }

  &[data-displayed='false'] {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const ToastArea = ({ children }: { children: ReactNode }) => {
  return (
    <div css={toastZone} className="toast-zone">
      {children}
    </div>
  );
};

const Toast = ({ type, message, visible }: { type: toastType; message: string; visible: boolean }) => {
  return (
    <div className={`toast toast-${type}`} data-displayed={visible} css={toast(type)}>
      {message}
    </div>
  );
};

export { ToastArea };
export default Toast;
