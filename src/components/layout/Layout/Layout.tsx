import React from 'react';
import { Global, css } from '@emotion/react';
import Header from '../Header';
import Footer from '../Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          *,
          ::after,
          ::before {
            box-sizing: border-box;
          }
          body {
            height: 100%;
            font-family: 'Rethink Sans', sans-serif;
            -webkit-font-smoothing: antialiased;

            margin: 0;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            color: #212529;
            background-color: #fff;
            -webkit-text-size-adjust: 100%;
            -webkit-tap-highlight-color: transparent;
          }
        `}
      />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
