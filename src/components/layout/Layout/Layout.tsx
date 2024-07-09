import React from 'react';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';
import Header from '../Header';
import Footer from '../Footer';
import PlayerFooter from '../../player/PlayerFooter';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Rethink+Sans:wght@400..800&display=swap');
          ${emotionReset}
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
            color: #131313;
            background-color: black;
            -webkit-text-size-adjust: 100%;
            -webkit-tap-highlight-color: transparent;
          }
          a {
            text-decoration: none;
          }
          p {
            font-size: 16px;
            font-family: 'Rethink Sans', sans-serif;
            color: #adadad;
            font-weight: 400;
            line-height: 26px;
            margin: 0 0 15px 0;
          }

          h1 {
            font-size: 70px;
          }

          h2 {
            font-size: 36px;
          }

          h3 {
            font-size: 30px;
          }

          h4 {
            font-size: 24px;
          }

          h5 {
            font-size: 18px;
          }

          h6 {
            font-size: 16px;
          }
          img {
            max-width: 100%;
          }
        `}
      />
      <Header />
      {children}
      <PlayerFooter />
      <Footer />
    </>
  );
};

export default Layout;
